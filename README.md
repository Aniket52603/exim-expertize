# Exim Expertize — Website

A production-ready React site for Exim Expertize (foreign trade, customs, FEMA and EXIM
compliance consultants), built with Vite + React 18 + Tailwind CSS + React Router.

## Getting started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  main.jsx          # React entry point, router setup
  App.jsx           # layout + route table
  index.css         # Tailwind + custom animation styles
  data.js           # all editable content: nav links, services, contact info
  hooks/useReveal.js # scroll-reveal animation hook
  components/       # Logo, Nav, Footer, Title, Reveal
  pages/            # Home, Services, Contact
public/
  logo.png          # transparent logo used in header/footer
```

## Editing content

Almost everything you'd want to change day-to-day — services, phone numbers, address,
nav labels — lives in **`src/data.js`**. No need to touch component files for text edits.

## Deploying

This is a static site after `npm run build` (output in `dist/`). Deploy `dist/` to:
- **Vercel**: `vercel deploy` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (build command
  `npm run build`, publish directory `dist`)
- Any static host (GitHub Pages, S3 + CloudFront, etc.)

## Next steps for real production use

- **Contact form**: submits through FormSubmit to `chandananiket555@gmail.com` by default.
  Set `VITE_CONTACT_FORM_ENDPOINT` in the deployment environment to use another endpoint.
- **SEO**: add per-page `<title>`/meta tags (e.g. with `react-helmet-async`) since this
  is a client-side rendered SPA.
- **Analytics**: add Google Analytics / Plausible as needed.
- **Domain & hosting**: point your domain at Vercel/Netlify once deployed.
