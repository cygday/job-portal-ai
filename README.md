# Jobs

A browser-runnable Kathmandu Valley job aggregator MVP. The current slice provides:

- Search by role, skill, company, and location
- Category and salary sorting filters
- Job detail modal and apply entry point
- Saved jobs persisted in browser local storage
- Responsive layout for mobile and desktop
- 18 Kathmandu Valley listings with source attribution
- Manual and automatic 12-hour feed refresh
- Local job-seeker profile with explainable match scoring
- Saved alert preferences for email notification integration
- Market-wide category filters: technology, design, marketing, operations, finance, sales, healthcare, education, customer support, HR, hospitality, engineering, and NGO/development

## Run locally

No build step is required for the prototype. Open `index.html` in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Listing feed

`jobs.json` is the current feed contract. The browser requests it on load, when the refresh button is pressed, and every 12 hours while the page is open. Replace it with a server endpoint such as `/api/jobs` when the ASP.NET Core collector is ready; that worker is what will make unattended 12-hour updates possible. The current entries are a curated demo dataset; they are not a live scrape.

For production aggregation, use each portal's permitted API, RSS feed, employer feed, or written permission. Respect robots.txt, terms of service, rate limits, attribution requirements, and removal requests. A backend worker should fetch sources, normalize fields, deduplicate by source URL and title/company, and update `updatedAt` after a successful run.

## API integration plan

Keep portal credentials on the server. Add one adapter per source in the ASP.NET Core worker, for example `MerojobAdapter`, `JobsNepalAdapter`, `KumariJobAdapter`, `LinkedInAdapter`, `HamrobazarAdapter`, and `RollingNexusAdapter`. Prefer official APIs, RSS, XML feeds, or employer-provided feeds. LinkedIn and other portals may require commercial approval; do not bypass login, bot protection, or usage restrictions.

The production API should expose `GET /api/jobs`, `POST /api/alerts`, `POST /api/auth/register`, and `GET /api/recommendations`. Use a background scheduler such as Hangfire or a hosted `BackgroundService` to collect feeds every 12 hours. Use an email provider such as Resend, SendGrid, or Amazon SES for verified alert delivery.

The current `Match me` feature is deliberately explainable and client-side. In production, move matching to `/api/recommendations`, combine normalized skills, location, experience, salary and job category, and show users why each recommendation was made. Add an AI provider only behind the server, with consent, rate limits, redaction of personal data, and a non-AI fallback.

For a mobile app, keep the same API contract and ship a React Native or Flutter client after the web authentication and notification endpoints are stable. A responsive web app is the first release surface; native push notifications can follow email alerts.

## Next build: ASP.NET Core 8

The recommended production architecture is an ASP.NET Core 8 MVC or Web API application with PostgreSQL and Entity Framework Core. The static MVP intentionally establishes the product language and interaction model before introducing the server layer.

Suggested migration order:

1. Install the .NET 8 SDK and create `dotnet new mvc -n KathmanduJobs.Web`.
2. Move the job data into `JobListing`, `Company`, `ApplicationUser`, and `JobApplication` entities.
3. Add `Npgsql.EntityFrameworkCore.PostgreSQL`, Identity, migrations, and a PostgreSQL connection string through environment variables.
4. Replace the demo array with `JobsController` queries and server-side pagination/filtering.
5. Add employer and seeker authentication, job submission, applications, moderation, and a Hangfire aggregation worker.
6. Deploy behind Nginx with HTTPS, daily PostgreSQL backups, and structured logging.

The supplied hosting notes should be treated as deployment guidance, not credentials: never commit passwords or production connection strings to this repository.
