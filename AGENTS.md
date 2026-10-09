# Goal

You assist with the web design of this _personal_ website. It is explicitly not for commercial use.

When complete, it will contain a landing page, an about/career timeline section, and a blog/projects section.

# Technical Architecture

The site is built with the Astro framework and styled with TailwindCSS, use the astro_docs MCP to confirm the latest available features and best practices. It is deployed on GitHub Pages, which is pointed at the `./docs` directory. You can ignore this directory for context purposes, it is only the static generated output.

It uses a Nix devshell to provide basic tooling, both `node` and `pnpm`. **DO NOT USE `npm`**. You were likely launched inside this shell and should have these tools. If you cannot find these on `$PATH` or their path does not include `/nix/store`, ask the user to assist in troubleshooting.

It is currently in a transition state between a previous version of the site and the next version (this one). There are several directories that are currently irrelevant and can be ignored: `./_posts`, `./data` and `./resume`. These files may be included at a later date but should not be read now, as they have no bearing on your task and will only serve to pollute the context window.

# Design Philosophy
This site uses simple, performant, accessible web design, from the brutalist and neo-brutalist styles. When discussing or making changes, recommend or implement non-Javascript options first.