import type { CollectionEntry } from 'astro:content';

export type ResumeAudience =
  CollectionEntry<'resumeJobs'>['data']['details'][number]['kind'];
type ResumeJob = CollectionEntry<'resumeJobs'>;

// Keep job order and bullet priority order; only remove nonmatching content.
export function filterResumeJobs(
  jobs: ResumeJob[],
  audience: ResumeAudience
): ResumeJob[] {
  return jobs
    .map((job) => ({
      ...job,
      data: {
        ...job.data,
        details: job.data.details.filter(
          (detail) =>
            audience === 'all' ||
            detail.kind === 'all' ||
            detail.kind === audience
        )
      }
    }))
    .filter((job) => job.data.details.length > 0);
}
