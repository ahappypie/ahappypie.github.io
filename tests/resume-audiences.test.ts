import { expect, test } from 'vitest';
import {
  filterResumeJobs,
  type ResumeAudience
} from '../src/lib/resume-audiences';

type ResumeJob = Parameters<typeof filterResumeJobs>[0][number];
type ResumeDetail = ResumeJob['data']['details'][number];

const detail = (
  bullet: string,
  kind: ResumeAudience,
  print_hide = false
): ResumeDetail => ({ bullet, kind, print_hide });

const job = (id: string, details: ResumeDetail[]): ResumeJob => ({
  id,
  collection: 'resumeJobs',
  data: {
    company: { name: 'Example Company' },
    position: 'Engineer',
    work: {},
    start_month: '2020-01',
    end_month: null,
    details
  }
});

const jobs = [
  job('recent', [
    detail('First', 'business'),
    detail('Second', 'all', true),
    detail('Third', 'tech')
  ]),
  job('older', [detail('Fourth', 'tech')])
];

test('all includes every kind in source order without mutating the input', () => {
  const original = structuredClone(jobs);
  expect(filterResumeJobs(jobs, 'all')).toEqual(original);
  expect(jobs).toEqual(original);
});

test('technical includes shared bullets in priority order, retaining print flags', () => {
  const result = filterResumeJobs(jobs, 'tech');
  expect(result.map((entry) => entry.id)).toEqual(['recent', 'older']);
  expect(result[0].data.details).toEqual([
    detail('Second', 'all', true),
    detail('Third', 'tech')
  ]);
});

test('business omits nonmatching bullets and jobs with no matching bullets', () => {
  const result = filterResumeJobs(jobs, 'business');
  expect(result.map((entry) => entry.id)).toEqual(['recent']);
  expect(result[0].data.details.map((item) => item.bullet)).toEqual([
    'First',
    'Second'
  ]);
});

test('empty jobs are omitted for every audience', () => {
  const audiences: ResumeAudience[] = ['all', 'tech', 'business'];
  for (const audience of audiences) {
    expect(filterResumeJobs([job('empty', [])], audience)).toEqual([]);
  }
});
