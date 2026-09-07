import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CalendarDays, Heart, Menu, Search, X, MessageCircle } from 'lucide-react'
import { contactInfo } from '../data'

type Props = {
  children: React.ReactNode
  favorites: number
  onSearch: () => void
  onBook: () => void
}

const nav = [
  ['/', 'Home'],
  ['/collections', 'Menswear'],
  ['/atelier', 'Bespoke'],
  ['/lookbook', 'Lookbook'],
  ['/about', 'The House'],
  ['/contact', 'Contact'],
]

export function Layout({ children, favorites, onSearch, onBook }: Props) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announce-desktop">WELCOME TO ZUCOL APPAREL • ELITE TAILOR • ABUJA • WORLDWIDE DELIVERY • WHATSAPP {contactInfo.phoneDisplay}</span>
        <span className="announce-mobile">ZUCOL APPAREL • ABUJA • WORLDWIDE DELIVERY • {contactInfo.phoneDisplay}</span>
      </div>
      <header className="header">
        <Link className="brand" to="/" aria-label="ZUCOL home"><img src="/brand/zucol-wordmark.png" alt="ZUCOL" /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink>)}</nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={onSearch} aria-label="Search"><Search size={18} /></button>
          <button className="icon-btn favorite-btn" aria-label={`${favorites} saved looks`}><Heart size={18} />{favorites > 0 && <span>{favorites}</span>}</button>
          <a className="icon-btn whatsapp-btn" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer" aria-label="Open WhatsApp"><MessageCircle size={18} /></a>
          <button className="book-btn" onClick={onBook}><CalendarDays size={16} /> Book a fitting</button>
          <button className="icon-btn mobile-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-top">
          <div><img className="footer-logo" src="/brand/zucol-wordmark.png" alt="ZUCOL" /><p>Welcome to ZUCOL APPAREL. {contactInfo.rc}. Premium nativewear, kaftans, suits and corporate wears for elites only.</p></div>
          <div><h4>Explore</h4><Link to="/collections">Senator Wear</Link><Link to="/collections">Kaftans</Link><Link to="/collections">Suits</Link><Link to="/lookbook">Lookbook</Link></div>
          <div><h4>Client Services</h4><button onClick={onBook}>Book a fitting</button><Link to="/contact">Corporate wear</Link><Link to="/contact">Remote orders</Link><Link to="/contact">Worldwide delivery</Link></div>
          <div><h4>Official Contact</h4><p>WhatsApp: {contactInfo.phoneDisplay}<br/>📍Abuja • 🌎 Wide Delivery</p><a className="button gold footer-cta" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 ZUCOL. All rights reserved.</span><span>Premium menswear demo presentation</span></div>
      </footer>

      {open && <div className="mobile-drawer" role="dialog" aria-modal="true"><button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button><img src="/brand/zucol-wordmark.png" alt="ZUCOL" /><nav>{nav.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</nav><a className="button gold" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a><button className="button dark" onClick={onBook}>Book a fitting</button></div>}
    </div>
  )
}
