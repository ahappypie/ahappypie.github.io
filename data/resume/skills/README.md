Skill metadata is the source of truth; job technologies only enrich company names.

Each .md file is a skill, identified by its filename (without .md).
Names match the job technologies labels exactly (ignoring surrounding whitespace).
Initial first_use dates were seeded from the earliest matching job start month.
These dates are provisional and can be corrected for earlier use outside work.
All initial skills were seeded as production. No last_use dates or replacements
were inferred.

category is a required, free-form label (e.g. Programming language, Cloud provider,
CI/CD, Infrastructure). Use consistent labels to keep future grouping predictable.

Example frontmatter:
---
name: Apache Kafka
category: Data streaming
first_use: "2020-01"
last_use: "2021-09"
superseded_by: redpanda
environment: production
additional_experience:
  - Homelab
---

superseded_by references another skill's filename/ID. The skills page validates
that the target exists. Skills without matching jobs still appear.
