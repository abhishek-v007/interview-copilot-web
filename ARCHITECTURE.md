# Architecture

The web app is a Next.js App Router marketing site. Later product surfaces (login, dashboard, resume, job description, history, settings) exist as placeholder routes only.

## Layout

| Path | Responsibility |
| --- | --- |
| `app/page.tsx` | Landing page composition |
| `app/layout.tsx` | Shared header, footer, metadata |
| `components/landing/` | Hero, product, how-it-works, CTA sections |
| `components/layout/` | Header, footer, container |
| `components/ui/` | Button and coming-soon placeholder |
| `lib/routes.ts` | Route constants |

## Page structure

```text
/                       Landing
/#product               Product explanation
/#how-it-works          Prep steps
/#products              Web vs desktop
/dashboard              Placeholder (prep CTA target)
/login                  Placeholder
/resume                 Placeholder
/job-description        Placeholder
/interview-history      Placeholder
/settings               Placeholder
```

## Boundaries

- No Electron, audio, or overlay code
- No authentication or payments
- No database or AI API calls
- Desktop live copilot remains a separate repository
