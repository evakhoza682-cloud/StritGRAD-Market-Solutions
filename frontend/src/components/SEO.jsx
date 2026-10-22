import { Helmet } from 'react-helmet-async'

const BASE = 'https://stritgrad-market-solutions.vercel.app' // TODO: change to your final domain

export default function SEO({ title, description, path = '' }) {
  const full = title ? `${title} | StritGRAD Market Solutions` : 'StritGRAD Market Solutions | From Strategy to Measurable Impact'
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${BASE}${path}`} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${BASE}${path}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
