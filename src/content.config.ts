import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Expected YYYY-MM');

const resumeJobs = defineCollection({
  loader: glob({
    base: './data/resume/job',
    pattern: '**/*.md'
  }),
  schema: z
    .object({
      company: z.object({
        name: z.string().min(1),
        description: z.string().min(1).optional()
      }),
      position: z.string().min(1),
      details: z
        .array(
          z.object({
            bullet: z.string().trim().min(1),
            print_hide: z.boolean().default(false),
            kind: z.enum(['all', 'tech', 'business']).default('all')
          })
        )
        .min(1),
      technologies: z.array(z.string().min(1)).optional(),
      roles: z.array(z.string().min(1)).optional(),
      work: z.object({
        location: z.string().min(1).optional(),
        employment_type: z
          .enum(['Full-Time', 'Part-Time', 'Contract'])
          .optional(),
        arrangement: z.enum(['On-Site', 'Hybrid', 'Remote']).optional()
      }),
      start_month: yearMonth,
      // Missing or null end dates indicate a current role.
      end_month: yearMonth.nullable().default(null)
    })
    .refine(
      ({ start_month, end_month }) =>
        end_month === null || end_month >= start_month,
      {
        message: 'End month must not precede start month',
        path: ['end_month']
      }
    )
});

const resumeEducation = defineCollection({
  loader: glob({
    base: './data/resume/education',
    pattern: '**/*.md'
  }),
  schema: z.object({
    school: z.object({
      name: z.string().min(1),
      program: z.string().min(1).optional()
    }),
    location: z.string().min(1).optional(),
    graduation_date: yearMonth,
    degree: z.object({
      kind: z.string().min(1),
      description: z.string().min(1).optional(),
      specializations: z
        .array(
          z.object({
            kind: z.string().min(1).optional(),
            name: z.string().min(1)
          })
        )
        .optional()
    })
  })
});

const resumeSkills = defineCollection({
  loader: glob({
    base: './data/resume/skills',
    pattern: ['**/*.md', '!README.md']
  }),
  schema: z
    .object({
      name: z.string().trim().min(1),
      category: z.string().trim().min(1),
      subcategory: z.string().trim().min(1).optional(),
      featured: z
        .boolean()
        .default(false)
        .describe('Show this skill in the featured section'),
      first_use: yearMonth,
      last_use: yearMonth.optional(),
      superseded_by: reference('resumeSkills').optional(),
      environment: z.enum(['production', 'experimental']).default('production'),
      additional_experience: z.array(z.string().trim().min(1)).optional()
    })
    .refine(
      ({ first_use, last_use }) =>
        last_use === undefined || last_use >= first_use,
      { message: 'Last use must not precede first use', path: ['last_use'] }
    )
});

export const collections = { resumeJobs, resumeEducation, resumeSkills };
