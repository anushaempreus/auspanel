# Auspanel Façades

Marketing site for Auspanel Façades — Queensland's design & construct commercial facade specialists. Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

`/` · `/about-us` · `/services` · `/projects` · `/contact-us`

## Contact form (Resend)

The contact form posts to `app/api/contact/route.ts`, which sends email via [Resend](https://resend.com) to `info@auspanel.com.au`.

Set these environment variables (locally in `.env.local`, and in Vercel → Project → Settings → Environment Variables):

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (to deliver) | Resend API key. Without it the form still works and returns success, but only logs the submission. |
| `CONTACT_FROM` | Optional | Sender, e.g. `Auspanel Website <noreply@auspanel.com.au>`. Domain must be verified in Resend. Defaults to Resend's test sender. |

The endpoint validates input, caps field lengths, and uses a hidden honeypot field to reject bots.

## SEO

- Per-page metadata + title template, canonical URLs, Open Graph / Twitter cards
- `app/robots.ts` and `app/sitemap.ts` (served at `/robots.txt`, `/sitemap.xml`)
- JSON-LD `GeneralContractor` structured data with NAP details in the root layout

## Security

Security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) are set in `next.config.ts`. `x-powered-by` is disabled.

## Deployment

Connected to Vercel via Git — pushing to `main` triggers a production deploy. Remember to set the environment variables above in Vercel.

---

Managed by [Empreus IT Support](https://empreus.com.au).
