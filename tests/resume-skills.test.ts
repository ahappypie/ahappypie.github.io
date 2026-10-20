import { expect, test } from 'vitest';
import { getResumeSkills } from '../src/lib/resume-skills';

type Skill = Parameters<typeof getResumeSkills>[0][number];
type Job = Parameters<typeof getResumeSkills>[1][number];

const skill = (
  id: string,
  name: string,
  overrides: Partial<Skill['data']> = {}
): Skill => ({
  id,
  collection: 'resumeSkills',
  data: {
    name,
    category: 'Programming Language',
    first_use: '2010-01',
    environment: 'production',
    featured: false,
    ...overrides
  }
});
const job = (
  id: string,
  company: string,
  start_month: string,
  technologies?: string[]
): Job => ({
  id,
  collection: 'resumeJobs',
  data: {
    company: { name: company },
    position: 'Engineer',
    work: {},
    start_month,
    end_month: null,
    details: [],
    technologies
  }
});

test('uses skill metadata as authoritative and sorts alphabetically', () => {
  const entries = [skill('sql', 'SQL'), skill('rust', 'Rust')];
  const jobs = [
    job('older', 'First', '2020-01', ['SQL']),
    job('newer', 'Second', '2024-01', ['SQL'])
  ];
  const originals = structuredClone({ entries, jobs });
  const result = getResumeSkills(entries, jobs);
  expect(result.map((entry) => entry.name)).toEqual(['Rust', 'SQL']);
  expect(result[1].companies).toEqual(['Second', 'First']);
  expect(result[1].first_use).toBe('2010-01');
  expect(result[1].category).toBe('Programming Language');
  expect({ entries, jobs }).toEqual(originals);
});

test('sorts featured skills first and alphabetically within each group', () => {
  const entries = [
    skill('aws', 'AWS'),
    skill('tailscale', 'Tailscale', { featured: true }),
    skill('sql', 'SQL'),
    skill('databricks', 'Databricks', { featured: true })
  ];
  const original = structuredClone(entries);
  expect(getResumeSkills(entries, []).map((entry) => entry.name)).toEqual([
    'Databricks',
    'Tailscale',
    'AWS',
    'SQL'
  ]);
  expect(entries).toEqual(original);
});

test('preserves category and optional subcategory metadata', () => {
  const result = getResumeSkills(
    [
      skill('kafka', 'Apache Kafka', {
        category: 'Data',
        subcategory: 'Streaming'
      }),
      skill('rust', 'Rust')
    ],
    []
  );
  expect(result[0].category).toBe('Data');
  expect(result[0].subcategory).toBe('Streaming');
  expect(result[1].category).toBe('Programming Language');
  expect(result[1].subcategory).toBeUndefined();
});

test('deduplicates companies across repeated labels and multiple roles', () => {
  const result = getResumeSkills(
    [skill('sql', 'SQL')],
    [
      job('one', 'Cosm', '2020-01', ['SQL', ' SQL ']),
      job('two', 'Cosm', '2022-01', ['SQL'])
    ]
  );
  expect(result[0].companies).toEqual(['Cosm']);
});

test('includes skills with no work experience and preserves additional experience', () => {
  const result = getResumeSkills(
    [
      skill('nix', 'Nix', {
        environment: 'experimental',
        additional_experience: ['Homelab', 'School']
      })
    ],
    []
  );
  expect(result[0].companies).toEqual([]);
  expect(result[0].additional_experience).toEqual(['Homelab', 'School']);
  expect(result[0].environment).toBe('experimental');
});

test('supports missing technology lists and does not invent skills from job labels', () => {
  expect(
    getResumeSkills(
      [skill('sql', 'SQL')],
      [job('one', 'Example', '2020-01')]
    )[0].companies
  ).toEqual([]);
  expect(
    getResumeSkills([], [job('two', 'Example', '2020-01', ['SQL'])])
  ).toEqual([]);
});

test('matches exact labels without inferring aliases', () => {
  const result = getResumeSkills(
    [skill('flux', 'Flux'), skill('fluxcd', 'FluxCD')],
    [job('one', 'Example', '2020-01', ['FluxCD'])]
  );
  expect(result[0].companies).toEqual([]);
  expect(result[1].companies).toEqual(['Example']);
});

test('resolves superseded_by using the replacement filename ID', () => {
  const result = getResumeSkills(
    [
      skill('apache-kafka', 'Apache Kafka', {
        last_use: '2021-09',
        superseded_by: { collection: 'resumeSkills', id: 'redpanda' }
      }),
      skill('redpanda', 'Redpanda')
    ],
    []
  );
  expect(result[0].replacement).toEqual({ id: 'redpanda', name: 'Redpanda' });
  expect(result[0].last_use).toBe('2021-09');
});

test('rejects missing or self-referencing replacement IDs', () => {
  for (const id of ['missing', 'kafka']) {
    expect(() =>
      getResumeSkills(
        [
          skill('kafka', 'Kafka', {
            superseded_by: { collection: 'resumeSkills', id }
          })
        ],
        []
      )
    ).toThrow('Invalid superseded_by');
  }
});
