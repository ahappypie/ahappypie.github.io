interface FilterableSkill {
  category: string;
  subcategory?: string;
  last_use?: string;
}

export interface SkillFilters {
  category?: string;
  subcategory?: string;
  activeOnly: boolean;
}

export function matchesSkillFilters(
  skill: FilterableSkill,
  filters: SkillFilters
): boolean {
  return (
    (!filters.category || skill.category === filters.category) &&
    (!filters.subcategory || skill.subcategory === filters.subcategory) &&
    (!filters.activeOnly || skill.last_use === undefined)
  );
}

export function getSkillCategories(skills: FilterableSkill[]) {
  const categories = new Map<string, Set<string>>();
  for (const skill of skills) {
    const subcategories = categories.get(skill.category) ?? new Set<string>();
    if (skill.subcategory) subcategories.add(skill.subcategory);
    categories.set(skill.category, subcategories);
  }
  return [...categories]
    .sort(([a], [b]) => a.localeCompare(b, 'en'))
    .map(([category, subcategories]) => ({
      category,
      subcategories: [...subcategories].sort((a, b) => a.localeCompare(b, 'en'))
    }));
}
