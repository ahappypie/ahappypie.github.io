import { defineCollection } from 'astro:content';
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

export const collections = { resumeJobs, resumeEducation };
