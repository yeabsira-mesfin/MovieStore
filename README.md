# SecureCodeBench

SecureCodeBench is an AI code-security evaluation project that measures whether generated code is safe enough for production, not merely syntactically valid or functionally plausible.

The benchmark focuses on security failures that frequently survive shallow code review: broken object authorization, SQL injection, incomplete JWT validation, server-side request forgery, and accidental client-side secret exposure.

## Features

- React + TypeScript security-review dashboard
- Realistic vulnerable code cases with CWE mappings
- Gold-standard findings and secure remediation patterns
- Weighted Python scoring engine
- Pytest coverage for the scorer
- CI for frontend and evaluation engine
- Recruiter-friendly interactive presentation

## Evaluation dimensions

```text
Vulnerability identification  35%
Exploitability and impact     25%
Secure remediation            25%
Regression-safe tests         15%
```

## Run the frontend

```bash
npm install
npm run dev
```

## Run scorer tests

```bash
python -m pip install pytest
pytest
```

## Deployment

The React/Vite frontend can deploy directly to Vercel, Cloudflare Pages, Netlify, or GitHub Pages. The Python scorer is intentionally small and deterministic, making it easy to run locally, in CI, or behind a lightweight API later.

## Portfolio signal

SecureCodeBench demonstrates AppSec reasoning, secure API review, authorization design, AI-code evaluation, benchmark construction, Python, React/TypeScript, testing, and CI/CD.

## Legacy history

This repository originally contained a movie-store application. Its Git history is preserved as part of the project's evolution.

## Author

Yeabsira Mesfin
