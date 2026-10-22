import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { site } from '../utils/data.js'

function Page({ title, path, children }) {
  return (
    <div>
      <SEO title={title} description={`${title} for StritGRAD Market Solutions (Pty) Ltd.`} path={path} />
      <PageHeader title={title} />
      <section className="bg-white"><div className="max-w-3xl mx-auto px-6 py-14 space-y-4 text-graytxt leading-relaxed">{children}</div></section>
    </div>
  )
}
export const Privacy = () => (
  <Page title="Privacy Policy" path="/privacy-policy">
    <p>StritGRAD Market Solutions (Pty) Ltd respects your privacy. We collect only the information you give us through our forms (such as your name, email, phone number, company and message) and use it to respond to enquiries, deliver services, and, if you subscribe, send you updates.</p>
    <p>We do not sell your personal information. We share it only with service providers who help us operate our website and communications, and where the law requires.</p>
    <p>You may ask us to access, correct or delete your information at any time by contacting {site.email}.</p>
    <p className="text-xs">This is a template summary. Have it reviewed by your legal adviser before launch.</p>
  </Page>
)
export const Popia = () => (
  <Page title="POPIA Compliance" path="/popia">
    <p>We process personal information in line with the Protection of Personal Information Act 4 of 2013 (POPIA): lawfully, for a specific purpose, with only the information we need, and with reasonable security safeguards.</p>
    <p>You have the right to know what we hold about you, to ask for correction or deletion, and to object to processing. Contact our Information Officer at {site.email}. You may also complain to the Information Regulator.</p>
    <p className="text-xs">This is a template summary. Have it reviewed by your legal adviser before launch.</p>
  </Page>
)
export const Terms = () => (
  <Page title="Terms & Conditions" path="/terms">
    <p>By using this website you agree to these terms. Content is provided for general information and does not constitute professional advice. Service engagements are governed by separate written agreements.</p>
    <p>All content, branding and the Impact Intelligence™ name belong to StritGRAD Market Solutions (Pty) Ltd and may not be reproduced without permission.</p>
    <p className="text-xs">This is a template summary. Have it reviewed by your legal adviser before launch.</p>
  </Page>
)
