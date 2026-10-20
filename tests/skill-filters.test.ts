import { expect, test } from 'vitest';
import {
  getSkillCategories,
  matchesSkillFilters
} from '../src/lib/skill-filters';

const active = { category: 'Data', subcategory: 'Streaming' };
const old = { ...active, last_use: '2021-09' };
const other = { category: 'Infrastructure', subcategory: 'Streaming' };

test('all categories includes old and active skills by default', () => {
  for (const skill of [active, old, other]) {
    expect(matchesSkillFilters(skill, { activeOnly: false })).toBe(true);
  }
});

test('category selection includes all its subcategories and uncategorized children', () => {
  for (const skill of [
    active,
    old,
    { category: 'Data', subcategory: 'Storage' },
    { category: 'Data' }
  ]) {
    expect(
      matchesSkillFilters(skill, { category: 'Data', activeOnly: false })
    ).toBe(true);
  }
  expect(
    matchesSkillFilters(other, { category: 'Data', activeOnly: false })
  ).toBe(false);
});

test('subcategory matches within its parent category', () => {
  const filters = {
    category: 'Data',
    subcategory: 'Streaming',
    activeOnly: false
  };
  expect(matchesSkillFilters(active, filters)).toBe(true);
  expect(matchesSkillFilters(other, filters)).toBe(false);
  expect(matchesSkillFilters({ category: 'Data' }, filters)).toBe(false);
});

test('active means last_use is absent, including when combined with category filters', () => {
  const filters = {
    category: 'Data',
    subcategory: 'Streaming',
    activeOnly: true
  };
  expect(matchesSkillFilters(active, filters)).toBe(true);
  expect(matchesSkillFilters(old, filters)).toBe(false);
  expect(matchesSkillFilters(other, filters)).toBe(false);
  expect(
    matchesSkillFilters(
      { category: 'Data', last_use: '2099-01' },
      { activeOnly: true }
    )
  ).toBe(false);
});

test('builds unique, alphabetically sorted category/subcategory tiers', () => {
  expect(
    getSkillCategories([
      active,
      active,
      other,
      { category: 'Data', subcategory: 'Storage' },
      { category: 'Cloud Provider' }
    ])
  ).toEqual([
    { category: 'Cloud Provider', subcategories: [] },
    { category: 'Data', subcategories: ['Storage', 'Streaming'] },
    { category: 'Infrastructure', subcategories: ['Streaming'] }
  ]);
  expect(getSkillCategories([])).toEqual([]);
});
