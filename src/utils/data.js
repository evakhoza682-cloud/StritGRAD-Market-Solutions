export const site = {
  name: 'StritGRAD Market Solutions',
  email: 'info@stritgrad.co.za',          // TODO: replace with the real address
  phone: '+27 83 713 5761',
  whatsapp: '27837135761',
  website: 'http://stritgradgroup.co.za',
  address: '2071 Ntshunyana Street, Tladi, Soweto, Johannesburg, 1868',
  mapQuery: '2071 Ntshunyana Street, Tladi, Soweto, Johannesburg, 1868',
  linkedin: 'https://www.linkedin.com/posts/joseph-khoza-517154319_stritgrad-investinyouth-yaei-activity-7475283863901048832-iYeb',
  facebook: 'https://www.facebook.com/p/Stritgrad-Academy-100092981051739/',
  instagram: 'https://www.instagram.com/stritgrad/',
  academyUrl: ''                           // add the StritGRAD Academy live URL to link across
}

export const stats = [
  { value: 150, suffix: '+', label: 'Projects Supported' },
  { value: 15000, suffix: '+', label: 'Entrepreneurs Reached' },
  { value: 500, suffix: '+', label: 'Communities Engaged' },
  { value: 2000, suffix: '+', label: 'Employment Opportunities Created' },
  { value: 9, suffix: '', label: 'Provinces — National Footprint' }
]

export const services = [
  {
    slug: 'strategic-marketing', icon: 'Megaphone', title: 'Strategic Marketing',
    short: 'Integrated marketing campaigns, digital marketing, brand activations, community outreach, and campaign management.',
    overview: 'Integrated marketing campaigns, digital marketing, brand activations, community outreach, and campaign management – designed to reach, engage, and convert your target audience.',
    benefits: ['Increased brand visibility', 'Qualified lead generation', 'Community engagement at scale', 'Measurable campaign ROI'],
    clients: ['Corporates', 'Government departments', 'Development agencies', 'CSI programmes'],
    method: ['Strategy', 'Creative', 'Implementation', 'Measurement', 'Reporting'],
    deliverables: ['Campaign strategy', 'Creative assets', 'Implementation plan', 'Performance reports']
  },
  {
    slug: 'research-market-intelligence', icon: 'Search', title: 'Research & Market Intelligence',
    short: 'Baseline studies, surveys, community research, data collection, and business intelligence.',
    overview: 'Baseline studies, surveys, community research, data collection, and business intelligence – giving you the evidence you need to make informed decisions.',
    benefits: ['Evidence-based decision making', 'Community insights', 'Market understanding', 'Baseline data for impact measurement'],
    clients: ['Corporates', 'Government departments', 'Development agencies', 'NGOs and foundations'],
    method: ['Design', 'Data Collection', 'Analysis', 'Reporting'],
    deliverables: ['Research reports', 'Data sets', 'Dashboards', 'Recommendations']
  },
  {
    slug: 'monitoring-evaluation-impact', icon: 'BarChart3', title: 'Monitoring, Evaluation & Impact Measurement',
    short: 'Impact Intelligence™, programme evaluations, beneficiary tracking, outcome measurement, and evidence-based reporting.',
    overview: 'Impact Intelligence™, programme evaluations, beneficiary tracking, outcome measurement, evidence-based reporting, and Social Return on Investment support.',
    benefits: ['Verified impact data', 'Funder-ready reports', 'Real-time dashboards', 'B-BBEE and compliance reporting'],
    clients: ['Funders and CSI managers', 'Development finance agencies', 'Government programmes', 'NGOs'],
    method: ['Baseline', 'Tracking', 'Evaluation', 'Reporting', 'Learning'],
    deliverables: ['Impact dashboards', 'Evaluation reports', 'SROI analysis', 'Compliance documentation']
  },
  {
    slug: 'stakeholder-engagement', icon: 'Handshake', title: 'Stakeholder Engagement',
    short: 'Beneficiary management, community mobilisation, government engagement, and workshop facilitation.',
    overview: 'Beneficiary management, community mobilisation, government engagement, corporate stakeholder engagement, and workshop facilitation.',
    benefits: ['Effective community engagement', 'Government relationship management', 'Beneficiary satisfaction', 'Stakeholder alignment'],
    clients: ['Corporates', 'Municipalities', 'Government departments', 'Development agencies'],
    method: ['Mapping', 'Engagement', 'Facilitation', 'Feedback', 'Reporting'],
    deliverables: ['Stakeholder maps', 'Engagement plans', 'Workshop materials', 'Feedback reports']
  },
  {
    slug: 'hybrid-contact-centre', icon: 'Headphones', title: 'Hybrid Contact Centre Services',
    short: 'Lead generation, customer support, outbound campaigns, call centre solutions, data verification, and sales support.',
    overview: 'Lead generation, customer support, outbound campaigns, call centre solutions, data verification, and sales support – delivered through our hybrid human + technology model.',
    benefits: ['Cost-effective outbound campaigns', 'Lead generation at scale', 'Data verification and cleaning', 'Customer support excellence'],
    clients: ['Financial services', 'Corporates', 'Government programmes', 'Programme implementers'],
    method: ['Setup', 'Training', 'Implementation', 'Quality Assurance', 'Reporting'],
    deliverables: ['Lead lists', 'Call recordings', 'Performance dashboards', 'CRM integration']
  },
  {
    slug: 'enterprise-development', icon: 'TrendingUp', title: 'Enterprise Development Support',
    short: 'Entrepreneurship programmes, business incubation support, SME development, market access, and business advisory.',
    overview: 'Entrepreneurship programmes, business incubation support, SME development, market access, and business advisory.',
    benefits: ['SME growth and sustainability', 'Job creation', 'Market access for small businesses', 'ESD compliance'],
    clients: ['Corporate ESD managers', 'Mining companies', 'Development agencies', 'Municipalities'],
    method: ['Selection', 'Training', 'Mentorship', 'Market Access', 'Monitoring'],
    deliverables: ['Training materials', 'Mentorship reports', 'Growth tracking', 'Impact reports']
  }
]

export const differentiators = [
  'Proven track record across multiple sectors',
  'Hybrid implementation model (advisory + execution)',
  'Impact Intelligence™ methodology',
  'National footprint across all 9 provinces',
  'POPIA-compliant data handling',
  'Microsoft Solutions Partner ecosystem'
]

export const industries = [
  { slug: 'mining', name: 'Mining', icon: 'Mountain',
    summary: 'Social and labour plan delivery, community enterprise development and local economic development around mining operations.',
    help: ['Enterprise and supplier development for host communities', 'Community engagement and stakeholder mapping', 'Measurement and reporting for social and labour plan commitments'],
    clients: 'Mining houses, mine community-development teams, SLP managers' },
  { slug: 'financial-services', name: 'Financial Services', icon: 'Landmark',
    summary: 'Financial inclusion, customer engagement and enterprise-support programmes that reach underserved entrepreneurs and consumers.',
    help: ['Financial-literacy and entrepreneurship programmes', 'Lead generation, onboarding and verification through our contact centre', 'Impact reporting for CSI and inclusion initiatives'],
    clients: 'Banks, insurers, fintechs, CSI and inclusion teams' },
  { slug: 'government', name: 'Government', icon: 'Building2',
    summary: 'Implementation support for national and provincial programmes that need field delivery, beneficiary management and compliance-ready reporting.',
    help: ['Beneficiary registration, tracking and verification', 'Programme monitoring and evaluation', 'Stakeholder and community mobilisation'],
    clients: 'National and provincial departments, public entities, agencies' },
  { slug: 'education', name: 'Education', icon: 'GraduationCap',
    summary: 'Career-readiness, entrepreneurship and skills programmes delivered with schools, colleges and universities.',
    help: ['School and campus engagement programmes', 'Learner and graduate surveys', 'Skills, employability and entrepreneurship training'],
    clients: 'Schools, TVET colleges, universities, education departments' },
  { slug: 'development-agencies', name: 'Development Agencies', icon: 'Globe2',
    summary: 'Research, implementation and evidence for donor-funded programmes that must show verified results.',
    help: ['Baseline, midline and endline studies', 'Donor-ready monitoring and evaluation', 'Field implementation and community engagement'],
    clients: 'Development finance institutions, donors, multilateral programmes' },
  { slug: 'ngos', name: 'NGOs', icon: 'HeartHandshake',
    summary: 'Practical delivery capacity and measurement tools for non-profits that need to prove their impact to funders.',
    help: ['Programme design and implementation support', 'Beneficiary tracking and outcome measurement', 'Funder reporting and impact stories'],
    clients: 'Non-profit organisations, foundations, community organisations' },
  { slug: 'municipalities', name: 'Municipalities', icon: 'MapPinned',
    summary: 'Local economic development, community participation and enterprise-support programmes at ward and municipal level.',
    help: ['Community consultation and participation', 'SMME and township enterprise support', 'Service-delivery and satisfaction surveys'],
    clients: 'Local and district municipalities, development agencies' },
  { slug: 'corporate-csi', name: 'Corporate CSI', icon: 'Briefcase',
    summary: 'Turning CSI budgets into programmes that deliver, and into evidence that shows what the investment achieved.',
    help: ['CSI programme design and delivery', 'Employee and community volunteering', 'Social return on investment and impact dashboards'],
    clients: 'Corporate CSI and sustainability teams' },
  { slug: 'esd', name: 'Enterprise & Supplier Development', icon: 'Store',
    summary: 'End-to-end ESD programmes that select, train, mentor and connect small businesses to markets, and report on B-BBEE outcomes.',
    help: ['Enterprise selection, training and mentorship', 'Market access and supplier onboarding', 'ESD scorecard reporting and growth tracking'],
    clients: 'Corporate ESD managers, procurement and transformation teams' }
]

export const partners = ['YAEI', 'Capital Legacy', 'Flexi Group']

// SAMPLE testimonials — replace with real, approved client quotes before launch.
export const testimonials = [
  { quote: 'Sample testimonial: StritGRAD moved our programme from a plan on paper to delivery in the field, with data we could take straight to our board.', name: 'Client name', org: 'Organisation', type: 'Corporate', sample: true },
  { quote: 'Sample testimonial: Their reporting gave us the evidence we needed to satisfy funders and to improve the programme as it ran.', name: 'Client name', org: 'Organisation', type: 'Development Agency', sample: true },
  { quote: 'Sample testimonial: A delivery partner that understands both the community and the compliance requirements of government.', name: 'Client name', org: 'Department / Municipality', type: 'Government', sample: true }
]

export const values = [
  ['Evidence-Driven', 'Every decision is grounded in data and research.'],
  ['Implementation-Focused', "We don't just advise – we deliver."],
  ['Integrity', 'We operate with transparency and accountability.'],
  ['Collaboration', 'We work as an extension of your team.'],
  ['Innovation', 'We embrace technology and hybrid models to solve complex problems.'],
  ['African Excellence', 'We are proudly African, building solutions for African contexts.']
]

export const hybridModel = [
  ['Strategy & Design', 'We work with you to define objectives, design programmes, and plan implementation.'],
  ['Field Implementation', 'Our teams execute on the ground – engaging communities, running campaigns, managing call centres.'],
  ['Data Collection & Measurement', 'We collect data, track beneficiaries, and measure outcomes using our Impact Intelligence™ methodology.'],
  ['Reporting & Evidence', 'We deliver dashboards, reports, and evidence that satisfy funders and demonstrate ROI.']
]

export const leadership = [
  { name: 'Joseph Khoza', role: 'Founder & Executive Director', bio: 'Founder of StritGRAD Academy and StritGRAD Market Solutions, Joseph is focused on entrepreneurship, youth development and financial inclusion. He represented the organisation at One Young World 2025 in Munich.', linkedin: 'https://www.linkedin.com/posts/joseph-khoza-517154319_stritgrad-investinyouth-yaei-activity-7475283863901048832-iYeb' }
]

export const provinces = [
  { id: 'LP', name: 'Limpopo', col: 3, row: 1 },
  { id: 'MP', name: 'Mpumalanga', col: 4, row: 2 },
  { id: 'GP', name: 'Gauteng', col: 3, row: 2 },
  { id: 'NW', name: 'North West', col: 2, row: 2 },
  { id: 'FS', name: 'Free State', col: 3, row: 3 },
  { id: 'KZN', name: 'KwaZulu-Natal', col: 4, row: 3 },
  { id: 'NC', name: 'Northern Cape', col: 1, row: 3 },
  { id: 'EC', name: 'Eastern Cape', col: 3, row: 4 },
  { id: 'WC', name: 'Western Cape', col: 2, row: 4 }
]

export const impactAreas = [
  ['Research', 'Baseline studies, surveys, community research', 'Search'],
  ['Monitoring', 'Real-time tracking of beneficiaries and outcomes', 'Activity'],
  ['Evaluation', 'Programme evaluations and impact assessments', 'ClipboardCheck'],
  ['Impact Measurement', 'SROI, outcome measurement, and verification', 'Target'],
  ['Data Collection', 'Digital and field-based data collection', 'Smartphone'],
  ['Beneficiary Experience Surveys', 'Understanding the lived experience', 'MessageSquareHeart'],
  ['Dashboard Reporting', 'Real-time dashboards for stakeholders', 'LayoutDashboard'],
  ['Impact Analytics', 'Advanced analytics and insights', 'LineChart'],
  ['Evidence-Based Decision Making', 'How data informs strategy', 'Lightbulb']
]

export const flexiSections = [
  ['Strategic Collaboration', 'Overview of the partnership between StritGRAD Market Solutions and Flexi Hub: a joint effort to bring digital tools, financial inclusion and business growth to communities across South Africa.'],
  ['Business Digitisation', 'How we help small and informal businesses go digital: getting online, accepting digital payments and managing their operations with simple tools.'],
  ['Financial Inclusion', 'Bringing financial services to underserved communities so more people and businesses can save, pay, and access credit.'],
  ['Marketing Fridays', 'Regular marketing workshops and support that teach business owners practical ways to promote and grow their businesses.'],
  ['Flexi Products', 'An overview of the products available to businesses through the Flexi Hub ecosystem. (Product details to be confirmed with Flexi Hub.)'],
  ['Business Onboarding', 'How businesses can join: register your interest, get verified, complete onboarding and start using the platform with support from our team.'],
  ['Corporate Implementation', 'How corporates can partner with us to roll the programme out to their supplier networks, communities and customers, with measurable reporting.']
]

// ILLUSTRATIVE projects — replace with real, client-approved case studies.
export const projects = [
  { id: 1, title: 'National Youth Entrepreneurship Tour', client: 'Corporate & development partners', industry: 'Financial Services', service: 'Enterprise Development Support', province: 'Gauteng', image: '/images/absa-tour-workshop.jpg',
    background: 'A national tour taking entrepreneurship and financial-literacy training to young people and small businesses.',
    challenge: 'Reaching young entrepreneurs in diverse communities, and proving the programme made a difference.',
    approach: 'Community mobilisation, hands-on workshops, and digital registration with follow-up tracking of participants.',
    results: ['Hundreds of young entrepreneurs trained across provinces', 'Participant data captured for outcome tracking'] },
  { id: 2, title: 'Financial Inclusion Symposium', client: 'Corporate partner', industry: 'Financial Services', service: 'Stakeholder Engagement', province: 'Gauteng', image: '/images/absa-financial-inclusion-symposium.jpg',
    background: 'A multi-day symposium bringing together youth entrepreneurs, corporates and policy voices.',
    challenge: 'Creating a meaningful space where entrepreneurs could engage directly with decision-makers.',
    approach: 'Programme design, stakeholder invitations, facilitation and post-event feedback collection.',
    results: ['Direct access between entrepreneurs and funders', 'Feedback report delivered to partners'] },
  { id: 3, title: 'Community Outreach & Data Collection', client: 'Development partner', industry: 'Development Agencies', service: 'Research & Market Intelligence', province: 'Gauteng', image: '/images/gauteng-community-outreach.jpg',
    background: 'Field outreach to understand the needs and aspirations of young people and small businesses in local communities.',
    challenge: 'Collecting reliable data in settings where connectivity and trust are limited.',
    approach: 'Trained field teams using mobile data collection, with quality checks and community feedback.',
    results: ['Community-level insight dataset', 'Baseline for future impact measurement'] },
  { id: 4, title: 'Mining Community Enterprise Support', client: 'Mining sector partner', industry: 'Mining', service: 'Enterprise Development Support', province: 'North West', image: '/images/harmony-partnership.jpg',
    background: 'Supporting entrepreneurs in communities around mining operations.',
    challenge: 'Building sustainable local businesses beyond the life of a single project.',
    approach: 'Selection, training, mentorship and market-access support with ongoing monitoring.',
    results: ['Local entrepreneurs supported', 'Growth tracked against a baseline'] },
  { id: 5, title: 'School Engagement Programme', client: 'Education partners', industry: 'Education', service: 'Stakeholder Engagement', province: 'Gauteng', image: '/images/school-engagement-classroom.jpg',
    background: 'Workshops taking career readiness and entrepreneurship into schools.',
    challenge: 'Engaging learners with practical content that connects to real opportunities.',
    approach: 'Facilitated classroom sessions, learner surveys and teacher feedback.',
    results: ['Learners engaged in career and enterprise sessions', 'Survey results reported to partners'] },
  { id: 6, title: 'Digital Skills Training', client: 'Programme partners', industry: 'Education', service: 'Enterprise Development Support', province: 'Gauteng', image: '/images/computer-literacy-training.jpg',
    background: 'Computer-literacy and digital-readiness training for young people and entrepreneurs.',
    challenge: 'Closing the digital skills gap that limits access to opportunity.',
    approach: 'Practical training, assessments and follow-up tracking.',
    results: ['Participants completed digital skills training', 'Completion data tracked'] }
]

export const insightCategories = ['Articles', 'Thought Leadership', 'Research Reports', 'Entrepreneurship', 'Marketing', 'Impact Measurement', 'Digital Transformation']

export const insights = [
  { slug: 'strategy-without-implementation', category: 'Thought Leadership', type: 'Insights', date: '2026-09-15', image: '/images/partnership-handover.jpg',
    title: 'Why Strategy Without Implementation Fails', excerpt: 'Plans do not change communities; delivery does. Why implementation capacity is the missing piece in many programmes.',
    body: ['Many organisations invest heavily in strategy, research and design, then struggle at the point of delivery. Programmes stall because the field teams, data systems and stakeholder relationships needed to execute were never planned with the same rigour as the strategy.', 'An implementation partner closes that gap: designing with delivery in mind, executing on the ground, and measuring as the work happens, rather than reconstructing the evidence afterwards.'] },
  { slug: 'measuring-what-matters', category: 'Impact Measurement', type: 'Insights', date: '2026-09-02', image: '/images/absa-financial-inclusion-symposium.jpg',
    title: 'Measuring What Matters: Beyond Attendance Registers', excerpt: 'Outputs are easy to count. Outcomes are what funders and communities care about. How to design for both.',
    body: ['Counting how many people attended is a start, but it does not show whether lives or livelihoods changed. Good impact measurement starts with a baseline, tracks participants over time, and links activities to outcomes.', 'Setting these systems up at the start of a programme is far cheaper and more credible than trying to prove impact at the end.'] },
  { slug: 'digitising-small-business', category: 'Digital Transformation', type: 'Insights', date: '2026-08-20', image: '/images/computer-literacy-training.jpg',
    title: 'Digitising Small Business: Where to Start', excerpt: 'Practical first steps for township and rural enterprises moving online and into digital payments.',
    body: ['Going digital does not require a large budget. Start with a business profile, simple digital payments and a basic way to record sales. Each step brings visibility, access to finance and new customers.', 'Training, mentorship and trusted partners make the difference between adoption and abandonment.'] },
  { slug: 'community-data-collection', category: 'Articles', type: 'Case Study', date: '2026-08-05', image: '/images/gauteng-community-outreach.jpg',
    title: 'Collecting Reliable Data in Communities', excerpt: 'Lessons on training field teams, building trust and keeping data quality high.',
    body: ['Reliable data starts with trust. Field teams that are trained, local and respectful of the community collect better information than any survey instrument alone.', 'Add mobile collection, daily quality checks and POPIA-compliant handling, and the data becomes something funders can rely on.'] },
  { slug: 'esd-that-lasts', category: 'Entrepreneurship', type: 'News', date: '2026-07-22', image: '/images/harmony-partnership.jpg',
    title: 'Enterprise Development That Lasts', excerpt: 'What separates enterprise-development programmes that build lasting businesses from those that do not.',
    body: ['Lasting enterprise development combines selection, training, mentorship and, crucially, market access. Without customers, training alone does not create sustainable businesses.', 'Tracking growth over time keeps the programme honest and informs improvements.'] },
  { slug: 'marketing-for-impact', category: 'Marketing', type: 'Insights', date: '2026-07-10', image: '/images/absa-tour-workshop.jpg',
    title: 'Marketing for Impact: Reaching Communities That Matter', excerpt: 'How brand activations and community outreach can drive real engagement, and be measured.',
    body: ['Campaigns reach communities best when they are local, practical and measured. Activations that combine visibility with useful services build lasting trust.', 'Every campaign should have clear metrics, from reach and leads through to outcomes.'] }
]

export const careers = {
  Vacancies: [], Internships: [], 'Graduate Programme': [], 'Volunteer Opportunities': []
}
export const careerIntro = {
  Vacancies: 'Current open roles are listed here when available.',
  Internships: 'Internship opportunities for students and recent graduates.',
  'Graduate Programme': 'Graduate development with exposure to fieldwork, research and impact measurement.',
  'Volunteer Opportunities': 'Volunteer with our teams on community engagement and field programmes.'
}

export const enquiryTypes = ['Business Enquiry', 'Proposal Request', 'Partnership Enquiry', 'Media Enquiry', 'Careers Enquiry', 'General Enquiry']
