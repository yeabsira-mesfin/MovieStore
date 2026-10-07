# RepoDoctor

A pull-request review benchmark for measuring whether an engineer or AI coding agent can identify real defects without flooding reviewers with false positives.

RepoDoctor focuses on a skill that is difficult to fake in a portfolio: reviewing unfamiliar code, prioritizing consequential findings, and distinguishing security/correctness bugs from style preferences.

## Stack

- **Java 17** evaluation service using the JDK HTTP server
- React + TypeScript review console
- Precision, recall, F1, and severity-weighted scoring
- Curated PR cases covering authorization, concurrency, data integrity, API reliability, and frontend correctness
- No external Java framework required
- Docker + CI

## How scoring works

For each PR case, the candidate selects the findings they believe are real. RepoDoctor compares the selection against a server-side gold set and reports:

- Precision: how many reported issues were actually valid
- Recall: how many gold issues were found
- F1: balance of precision and recall
- Severity coverage: whether high-impact findings were caught
- Overall score

False positives reduce precision, making "report everything" a poor strategy.

## Run

### Backend

```bash
cd backend
./build.sh
java -cp out dev.repodoc.Server
```

API: `http://localhost:8090`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_BASE_URL=http://localhost:8090` when needed.

## Why Java here?

The project intentionally uses a different backend language to demonstrate cross-stack engineering and code-review fluency rather than repeating the same implementation four times.

## Public-demo safety

RepoDoctor renders curated diff fragments and evaluates structured selections. It does not clone arbitrary repositories or execute untrusted code.

## Author

**Yeabsira Mesfin**  
Full Stack Software Engineer | M.S. Cybersecurity in Computer Science
