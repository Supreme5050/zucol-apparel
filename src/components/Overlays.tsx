import { useMemo, useState } from 'react'
import { Search, X, MessageCircle } from 'lucide-react'
import { contactInfo, pieces } from '../data'

type ModalProps = { open: boolean; onClose: () => void }

export function SearchOverlay({ open, onClose }: ModalProps) {
  const [q, setQ] = useState('')
  const results = useMemo(() => q.trim() ? pieces.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(q.toLowerCase())) : pieces, [q])
  if (!open) return null
  return <div className="overlay" role="dialog" aria-modal="true"><div className="search-panel"><button className="overlay-close" onClick={onClose}><X /></button><span className="eyebrow">Discover ZUCOL Men</span><h2>Search the wardrobe</h2><label className="search-field"><Search size={20} /><input autoFocus value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search senator, kaftan, suit..." /></label><div className="search-results">{results.map(p => <div key={p.id}><img src={p.image} alt="" /><div><b>{p.name}</b><span>{p.category}</span></div></div>)}</div></div></div>
}

export function BookingModal({ open, onClose }: ModalProps) {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [session, setSession] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      'Welcome to ZUCOL APPAREL.',
      '',
      'I would like to book a fitting.',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Preferred date: ${date}`,
      `Preferred session: ${session}`,
      `Notes: ${notes || 'None'}`,
      '',
      'Please let me know the next step.'
    ]
    const url = `https://wa.me/${contactInfo.whatsappIntl}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  if (!open) return null
  return <div className="overlay" role="dialog" aria-modal="true"><div className="booking-panel"><button className="overlay-close" onClick={onClose}><X /></button>{!sent ? <><span className="eyebrow">Private Client Services</span><h2>Book your ZUCOL fitting</h2><p>Fill the details below and continue to the official WhatsApp line for fast response.</p><form onSubmit={handleSubmit} className="booking-form"><div className="form-grid"><input required placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} /><input required type="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} /></div><div className="form-grid"><input required placeholder="Phone / WhatsApp number" value={phone} onChange={(e)=>setPhone(e.target.value)} /><select required value={service} onChange={(e)=>setService(e.target.value)}><option value="" disabled>Preferred service</option><option>Senator wear</option><option>Kaftan</option><option>Suit / corporate wear</option><option>Special occasion look</option><option>Remote order</option></select></div><div className="form-grid"><input required type="date" value={date} onChange={(e)=>setDate(e.target.value)} /><select required value={session} onChange={(e)=>setSession(e.target.value)}><option value="" disabled>Preferred session</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></div><textarea placeholder="Tell us the colour, fabric preference, size notes or the look you have in mind." rows={4} value={notes} onChange={(e)=>setNotes(e.target.value)} /><button className="button gold" type="submit"><MessageCircle size={16}/> Continue to WhatsApp</button></form></> : <div className="success"><span>✦</span><h2>Request prepared.</h2><p>Your details have been prepared. If WhatsApp did not open automatically, use the button below.</p><a className="button gold" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">Open official WhatsApp</a><button className="button outline modal-secondary" onClick={onClose}>Close</button></div>}</div></div>
}
