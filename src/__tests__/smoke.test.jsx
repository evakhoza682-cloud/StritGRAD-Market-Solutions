import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App.jsx'
import api from '../utils/api.js'

window.scrollTo = () => {}
class IO { observe() {} disconnect() {} }
window.IntersectionObserver = IO
afterEach(cleanup)
const go = (path) => render(<HelmetProvider><MemoryRouter initialEntries={[path]}><App /></MemoryRouter></HelmetProvider>)

const paths = ['/', '/about', '/services', '/services/strategic-marketing', '/services/enterprise-development', '/industries', '/impact-intelligence', '/flexi-hub', '/projects', '/insights', '/insights/measuring-what-matters', '/careers', '/contact', '/privacy-policy', '/popia', '/terms', '/nope']

describe('all pages render', () => {
  paths.forEach((p) => it(p, () => { go(p); expect(document.querySelector('main').textContent.length).toBeGreaterThan(20) }))
})
describe('behaviour', () => {
  it('home has both CTAs + stats', () => { go('/'); expect(screen.getAllByText(/Request a Proposal/).length).toBeGreaterThan(1); expect(screen.getByText(/Projects Supported/)).toBeTruthy() })
  it('footer has real address, phone and socials', () => { go('/'); const f = document.querySelector('footer'); expect(f.textContent).toContain('Ntshunyana'); expect(f.textContent).toContain('83 713 5761'); expect(f.querySelector('a[href*="instagram.com/stritgrad"]')).toBeTruthy(); expect(f.querySelector('a[href*="facebook.com"]')).toBeTruthy() })
  it('bad service slug -> 404 page', () => { go('/services/nope'); expect(screen.getByText(/couldn't find that page/)).toBeTruthy() })
  it('contact prefill from query', () => { go('/contact?type=Proposal%20Request&subject=Hello'); expect(screen.getByDisplayValue('Proposal Request')).toBeTruthy(); expect(screen.getByDisplayValue('Hello')).toBeTruthy() })
  it('contact form posts to /api/contact', async () => {
    const spy = vi.spyOn(api, 'post').mockResolvedValue({ data: {} })
    go('/contact')
    const f = document.querySelector('main form'); const inputs = f.querySelectorAll('input.input'); const ta = f.querySelector('textarea')
    fireEvent.change(inputs[0], { target: { value: 'Test User' } }); fireEvent.change(inputs[1], { target: { value: 'a@b.co' } }); fireEvent.change(ta, { target: { value: 'Hi' } })
    fireEvent.submit(f)
    await waitFor(() => expect(spy).toHaveBeenCalled())
    expect(spy.mock.calls[0][0]).toBe('/api/contact')
    await screen.findByText(/received your enquiry/)
  })
  it('contact form validates', async () => { go('/contact'); fireEvent.submit(document.querySelector('main form')); expect(await screen.findByText(/Please fill in/)).toBeTruthy() })
  it('projects modal opens + filter', () => { go('/projects'); fireEvent.click(screen.getByText('School Engagement Programme')); expect(screen.getByText(/Request a Case Study/)).toBeTruthy() })
  it('insights filter', () => { go('/insights'); fireEvent.click(screen.getByRole('button', { name: 'Marketing' })); expect(screen.queryByText(/Measuring What Matters/)).toBeNull() })
  it('newsletter subscribes', async () => {
    const spy = vi.spyOn(api, 'post').mockResolvedValue({ data: {} }); go('/')
    const i = document.querySelector('footer input[type=email]'); fireEvent.change(i, { target: { value: 'x@y.co' } }); fireEvent.submit(i.closest('form'))
    await screen.findByText(/Thanks for subscribing/); expect(spy.mock.calls.at(-1)[0]).toBe('/api/newsletter')
  })
})
