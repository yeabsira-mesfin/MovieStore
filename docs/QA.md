# QA and portfolio report

Verified locally on October 6, 2026 (America/New_York). These results describe software tests, not model performance.

## Repository and deployment status

- Current repository: https://github.com/yeabsira-mesfin/repo-doctor
- Final name: `repo-doctor`. Repository rename, description, and relevant topics were applied and verified in GitHub on October 7, 2026.
- Live demo: https://repo-doctor-beta.vercel.app/
- GitHub Pages: https://yeabsira-mesfin.github.io/repo-doctor/
- Backend/API health: https://repo-doctor-beta.vercel.app/health (API routes use the same origin).
- Deployed through the existing Vercel Hobby account, using separate frontend/backend services. No paid plan or trial was selected. Services are Beta and usage caps apply.
- GitHub Pages is enabled and its deployment workflow passed. Main-branch pushes publish the frontend; the backend remains on Vercel. Exact Pages-origin CORS is allowed.
- GitHub Actions CI and Pages publishing both passed on the deployment commits. Check the linked workflow badges for subsequent commits.

## Tests and observed results

- Frontend production build and strict TypeScript checking: passed.
- Backend: Java 17 compilation and assertion checks passed across 5 cases, including full, noisy, empty, and partial reviews.
- Playwright against local production builds with real backends: desktop 1440×1000 and mobile 390×844; scoring flow, network failure feedback, refresh/deep-link behavior, and horizontal overflow checks passed. No JavaScript page errors were captured. Cross-origin local API flows passed without CORS failures.
- Automated axe WCAG 2 A/AA and WCAG 2.1 AA checks: zero detected violations in the tested desktop result state after contrast fixes. This is not a complete accessibility certification.
- Actual desktop/mobile screenshots are in `docs/screenshots`.
- Public Vercel HTTPS, health endpoints, API responses, SPA deep-link fallback, Pages-origin CORS, and rejection of untrusted CORS origins passed. Shipped JavaScript was scanned for credential patterns and localhost origins; no matches were found. Results are in `deployment-checks.json`.
- Live browser scoring flows passed on Vercel and GitHub Pages. Mobile layout was verified at 390×844 in the local production build; live browser verification used the available desktop viewport.
- Dockerfiles and Compose routing were inspected. Local Docker/Compose execution remains untested because Docker is unavailable. Vercel successfully built and ran the DebugArena and RepoDoctor backend images.

## Security checks

- Inspected source, API routes, request bounds, CORS configuration, and execution boundaries. No submitted code is executed.
- Checked tracked/current file lists for `.env` and private-key files. Only the public, credential-free `.env.example` is provided.
- The heuristic full-history scan found no candidate credential patterns or private keys. This is a pattern scan, not a guarantee of absence.
- npm dependency audits reported zero known advisories in the frontends; DebugArena's production Node dependencies also reported zero.
- The two Python projects were upgraded to compatible pinned packages, including Starlette and pytest, after their original versions triggered advisories. The final `pip-audit` of their shared requirements reported no known vulnerabilities.
- Current frontend code uses `VITE_API_BASE_URL` only as a public API origin. Production Vercel builds use same-origin APIs; Pages builds use the deployed API origin. Public bundles contain no localhost API origin. No private server credentials are intentionally passed to the frontend.
- No user accounts or persistence are implemented. Application-specific rate limiting is not implemented; platform protection and usage caps apply. Do not submit confidential source code to this public demonstration.

## Important fixes

Removed unsupported gold findings about ID format and monetary representation; increased false-positive penalties; expanded Java assertions; bounded request bodies, rejected unknown finding IDs, handled malformed forms, added configurable PORT, and restricted CORS.

Across the projects: pinned npm dependencies and committed lockfiles; changed CI to `npm ci` and Node 22; added public env examples, explicit titles/meta tags, same-origin production routing, SPA deep-link configuration, non-root application containers, professional READMEs, keyboard focus outlines, loading/error feedback, and contrast corrections. The four backend stacks remain distinct.

## Remaining limitations

The README explains each scoring method's limits. No real AI model has been evaluated and no model rankings, measured pass rates, or production performance improvements are claimed. AgentBench's test criteria are reviewer attestations; DebugArena uses a lexical heuristic; SecureCodeBench uses pattern matching; RepoDoctor uses a small curated gold set. No benchmark scores are claimed as measured model results. Free hosting has usage limits and Services is Beta.

## Resume bullets

- Engineered a Java 17 code-review benchmark for 5 curated PR cases, calculating precision, recall, F1, severity coverage, and false-positive penalties.
- Verified full, partial, empty, and noisy review outcomes with Java assertions, refining gold findings to avoid unsupported defect claims across authorization, concurrency, and API reliability cases.

## Short description for Mercor, Alignerr, Handshake AI, LinkedIn, and portfolio

Engineered a Java 17 code-review benchmark for 5 curated PR cases, calculating precision, recall, F1, severity coverage, and false-positive penalties. The project demonstrates reproducible evaluation design, explicit scoring limits, and safe engineering boundaries. It is a portfolio project, not evidence of completed paid model-evaluation work.

Author: **Yeabsira Mesfin**
