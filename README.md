# PT Lampung Tanam Rumput (PLTR)

Website for PT Lampung Tanam Rumput — regenerative land restoration, commercial biomass, and women's livelihood programme in Lampung, Indonesia.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Fraunces (display) + Inter (body)
- **Hosting**: Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, problem, approach, metrics, theory of change preview |
| `/about` | About — story, team, quick facts |
| `/model` | Integrated value chain model |
| `/impact` | Theory of change, KPIs, measurement |
| `/programs` | Three pillars: Land, Women, Biomass |
| `/reports` | Financial summary, grant utilisation plan, downloadable docs |
| `/partners` | B2B buyers, funders, land partners, workers |
| `/contact` | Contact form + inquiry types |

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Notes

- All content is centralised in `/src/content/*.ts` — update copy here to propagate across all pages
- Placeholder photos use Unsplash URLs with descriptive alt text — replace with actual field photography
- PDF documents in `/public/reports/` are templates pending final figures from the team
- Contact form uses `mailto:` fallback — no backend required for v1

## Grant Application

This website supports the following grant application areas:

- **Theory of change**: `/impact` + `/reports`
- **Operating metrics**: `/` (snapshot) + `/impact` (KPI grid)
- **Financial transparency**: `/reports`
- **Grant utilisation**: `/reports`
- **Team credibility**: `/about`
- **Business model**: `/model`
- **Beneficiary focus**: `/programs` + `/impact`
- **Commercial traction**: `/` (3 B2B deals) + `/programs`
