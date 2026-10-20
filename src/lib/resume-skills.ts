import type { CollectionEntry } from 'astro:content';

type Job = CollectionEntry<'resumeJobs'>;
type Skill = CollectionEntry<'resumeSkills'>;

export type ResumeSkill = Skill['data'] & {
  id: string;
  companies: string[];
  replacement?: { id: string; name: string };
};

export function getResumeSkills(skills: Skill[], jobs: Job[]): ResumeSkill[] {
  const skillsById = new Map(skills.map((skill) => [skill.id, skill]));
  const sortedJobs = [...jobs].sort(
    (a, b) =>
      b.data.start_month.localeCompare(a.data.start_month) ||
      a.id.localeCompare(b.id)
  );

  return skills
    .map((skill) => {
      const companies = new Set<string>();
      for (const job of sortedJobs) {
        if (
          job.data.technologies?.some((name) => name.trim() === skill.data.name)
        ) {
          companies.add(job.data.company.name);
        }
      }
      const replacementId = skill.data.superseded_by?.id;
      const replacement = replacementId
        ? skillsById.get(replacementId)
        : undefined;
      if (replacementId && (!replacement || replacementId === skill.id)) {
        throw new Error(
          `Invalid superseded_by "${replacementId}" for skill "${skill.id}"`
        );
      }
      return {
        ...skill.data,
        id: skill.id,
        companies: [...companies],
        replacement: replacement
          ? { id: replacement.id, name: replacement.data.name }
          : undefined
      };
    })
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        a.name.localeCompare(b.name, 'en')
    );
}
