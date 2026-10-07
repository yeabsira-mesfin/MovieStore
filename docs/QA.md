# QA and portfolio report

Verified locally on October 6, 2026 (America/New_York). These results describe software tests, not model performance.

## Repository and deployment status

- Current repository: https://github.com/yeabsira-mesfin/MovieStore
- Intended final name: `repo-doctor`. Repository rename, description, and topic settings remain unapplied because the connected GitHub operations do not expose repository administration mutations.
- Live demo: **not deployed**.
- Backend/API public link: **not deployed**.
- Vercel project creation returned HTTP 403 permission denied for the connected team. No Vercel CLI credentials were available.
- GitHub Pages workflow is prepared for manual dispatch after enabling Pages and supplying a public API URL. Pages cannot run these backends.
- GitHub Actions: check the latest commit's CI run; local results below are not a substitute for remote status. This report does not assume CI is green before that run finishes.

## Tests and observed results

- Frontend production build and strict TypeScript checking: passed.
- Backend: Java 17 compilation and assertion checks passed across 5 cases, including full, noisy, empty, and partial reviews.
- Playwright against local production builds with real backends: desktop 1440×1000 and mobile 390×844; scoring flow, network failure feedback, refresh/deep-link behavior, and horizontal overflow checks passed. No JavaScript page errors were captured. Cross-origin local API flows passed without CORS failures.
- Automated axe WCAG 2 A/AA and WCAG 2.1 AA checks: zero detected violations in the tested desktop result state after contrast fixes. This is not a complete accessibility certification.
- Actual desktop/mobile screenshots are in `docs/screenshots`.
- Local HTTP was tested. Public HTTPS, public CORS, hosting availability, and deployed frontend bundles remain unverified because deployment is blocked.
- Dockerfiles and Compose routing were inspected. Docker builds were **not run**, since Docker is unavailable in this workspace.

## Security checks

- Inspected source, API routes, request bounds, CORS configuration, and execution boundaries. No submitted code is executed.
- Checked tracked/current file lists for `.env` and private-key files. Only the public, credential-free `.env.example` is provided.
- The heuristic full-history scan found no candidate credential patterns or private keys. This is a pattern scan, not a guarantee of absence.
- npm dependency audits reported zero known advisories in the frontends; DebugArena's production Node dependencies also reported zero.
- The two Python projects were upgraded to compatible pinned packages, including Starlette and pytest, after their original versions triggered advisories. The final `pip-audit` of their shared requirements reported no known vulnerabilities.
- Current frontend code uses `VITE_API_BASE_URL` only as a public API origin. Local QA bundles contain localhost URLs by deliberate test configuration; deploy builds must use same-origin routing or the hosted API URL. No private server credentials are intentionally passed to the frontend.
- No user accounts or persistence are implemented. Hosting-level rate limiting/abuse protection remains a public rollout requirement.

## Important fixes

Removed unsupported gold findings about ID format and monetary representation; increased false-positive penalties; expanded Java assertions; bounded request bodies, rejected unknown finding IDs, handled malformed forms, added configurable PORT, and restricted CORS.

Across the projects: pinned npm dependencies and committed lockfiles; changed CI to `npm ci` and Node 22; added public env examples, explicit titles/meta tags, same-origin production routing, SPA deep-link configuration, non-root application containers, professional READMEs, keyboard focus outlines, loading/error feedback, and contrast corrections. The four backend stacks remain distinct.

## Remaining limitations

The README explains each scoring method's limits. No real AI model has been evaluated and no model rankings, measured pass rates, or production performance improvements are claimed. AgentBench's test criteria are reviewer attestations; DebugArena uses a lexical heuristic; SecureCodeBench uses pattern matching; RepoDoctor uses a small curated gold set. Deployment and repository administrative settings still require account access.

## Resume bullets

- Engineered a Java 17 code-review benchmark for 5 curated PR cases, calculating precision, recall, F1, severity coverage, and false-positive penalties.
- Verified full, partial, empty, and noisy review outcomes with Java assertions, refining gold findings to avoid unsupported defect claims across authorization, concurrency, and API reliability cases.

## Short description for Mercor, Alignerr, Handshake AI, LinkedIn, and portfolio

Engineered a Java 17 code-review benchmark for 5 curated PR cases, calculating precision, recall, F1, severity coverage, and false-positive penalties. The project demonstrates reproducible evaluation design, explicit scoring limits, and safe engineering boundaries. It is a portfolio project, not evidence of completed paid model-evaluation work.

Author: **Yeabsira Mesfin**
