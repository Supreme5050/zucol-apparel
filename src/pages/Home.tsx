import { ArrowRight, Ruler, Scissors, Sparkles, ShieldCheck, MessageCircle, Check, Phone, Globe, MapPin, BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { collections, contactInfo, images, pieces } from '../data'

const heroAtelier = 'https://images.pexels.com/photos/5830690/pexels-photo-5830690.jpeg?auto=compress&cs=tinysrgb&w=1800'

export default function Home({ onBook, favorite, saved }: { onBook: () => void; favorite: (id:string)=>void; saved:Set<string> }) {
  return <>
    <section className="hero hero-premium-house" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,5,5,.85) 0%, rgba(5,5,5,.58) 42%, rgba(5,5,5,.42) 100%), url(${heroAtelier})` }}>
      <div className="hero-premium-copy-wrap">
        <motion.div className="hero-copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75}}>
          <span className="eyebrow light">Welcome to ZUCOL APPAREL</span>
          <h1>Luxury menswear,<br/><em>crafted with precision.</em></h1>
          <p>ZUCOL creates premium senator wear, kaftans, suits and corporate nativewear for men who want elegance, structure and a polished luxury finish.</p>
          <div className="hero-actions">
            <button className="button gold" onClick={onBook}>Book a fitting</button>
            <a className="button glass" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Chat on WhatsApp</a>
          </div>
          <div className="hero-trust">
            <span><ShieldCheck size={15}/> {contactInfo.rc}</span><span>•</span><span>ELITE Tailor</span><span>•</span><span>Abuja • Worldwide delivery</span>
          </div>
        </motion.div>

        <div className="hero-bottom-grid">
          <div className="hero-info-card brand-card">
            <span className="eyebrow">The ZUCOL Standard</span>
            <h3>Made for the Nigerian gentleman.</h3>
            <p>Premium tailoring for natives, kaftans, suits and refined corporate looks.</p>
          </div>
          <div className="hero-info-card checklist-card">
            <div><Check size={14}/><span>Private fittings</span></div>
            <div><Check size={14}/><span>Premium finishing</span></div>
            <div><Check size={14}/><span>Corporate wears</span></div>
            <div><Check size={14}/><span>Wide delivery</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="statement section-pad better-statement">
      <span className="eyebrow">The ZUCOL Promise</span>
      <h2>Built for the<br/><em>Nigerian gentleman.</em></h2>
      <p>ZUCOL APPAREL creates polished menswear for elite clients — senator sets, kaftans, suits and corporate looks shaped for confidence, comfort and distinction.</p>

      <div className="brand-summary-grid">
        <article>
          <BadgeCheck size={18} />
          <div>
            <span className="mini-label">Brand</span>
            <h4>Welcome to ZUCOL APPAREL</h4>
            <p>{contactInfo.rc} • ELITE Tailor</p>
          </div>
        </article>
        <article>
          <MapPin size={18} />
          <div>
            <span className="mini-label">Specialties</span>
            <h4>Natives • Kaftans • Suits</h4>
            <p>Corporate wears for elites only.</p>
          </div>
        </article>
        <article>
          <Globe size={18} />
          <div>
            <span className="mini-label">Location & Reach</span>
            <h4>Abuja • Wide Delivery</h4>
            <p>Serving local and remote clients with premium attention.</p>
          </div>
        </article>
      </div>

      <div className="whatsapp-premium-card">
        <div className="whatsapp-premium-left">
          <span className="eyebrow">Official WhatsApp line</span>
          <h3>Let’s discuss your next premium look.</h3>
          <p>You’re chatting with our official WhatsApp line — how may we serve you today?</p>
        </div>
        <div className="whatsapp-premium-right">
          <div className="contact-pill"><Phone size={15}/><span>{contactInfo.phoneDisplay}</span></div>
          <div className="contact-pill"><MapPin size={15}/><span>Abuja, Nigeria</span></div>
          <a className="button gold" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">Start WhatsApp chat</a>
        </div>
      </div>
    </section>

    <section className="collection-grid section-pad-top">
      {collections.map((c, i) => <Link to="/collections" className="collection-card" key={c.title}>
        <img src={c.image} alt={c.title}/><div className="collection-overlay"/><div className="collection-copy"><span>0{i+1}</span><h3>{c.title}</h3><p>{c.subtitle}</p></div>
      </Link>)}
    </section>

    <section className="signature section-pad">
      <div className="section-head"><div><span className="eyebrow">Signature wardrobe</span><h2>Curated for the modern elite.</h2></div><Link className="text-link" to="/collections">View all <ArrowRight size={16}/></Link></div>
      <div className="piece-grid">
        {pieces.slice(0,4).map(p => <article className="piece-card" key={p.id}>
          <div className="piece-image"><img src={p.image} alt={p.name}/><button onClick={()=>favorite(p.id)} className={saved.has(p.id)?'save saved':'save'}>{saved.has(p.id)?'Saved':'Save'}</button></div>
          <span>{p.category}</span><h3>{p.name}</h3><p>{p.note}</p><button className="piece-enquire" onClick={onBook}>Request this look <ArrowRight size={15}/></button>
        </article>)}
      </div>
    </section>

    <section className="occasion-strip">
      <div className="occasion-image"><img src={images.occasion} alt="Premium ZUCOL native wear for professionals and ceremonies"/></div>
      <div className="occasion-copy section-pad"><span className="eyebrow light">Designed around your lifestyle</span><h2>From executive meetings<br/>to memorable occasions.</h2><p>ZUCOL dresses men for office authority, weddings, family introductions, church services, celebrations, photoshoots and corporate appearances — with a finish that feels calm, mature and expensive.</p><div className="occasion-tags"><span>Senator Wear</span><span>Kaftans</span><span>Suits</span><span>Corporate Wear</span><span>Worldwide Delivery</span></div></div>
    </section>

    <section className="atelier-split">
      <div className="atelier-image"><img src={images.atelier} alt="ZUCOL bespoke tailoring direction for menswear"/></div>
      <div className="atelier-copy section-pad"><span className="eyebrow">The ZUCOL Atelier</span><h2>Measured well.<br/>Finished well.</h2><p>Every commission begins with proper direction: your purpose, your preferred fit, fabric taste, colour profile and the image you want to project. That is how premium nativewear should be built.</p>
        <div className="service-lines"><div><Scissors/><span><b>01</b> Style direction</span></div><div><Ruler/><span><b>02</b> Precision measurement</span></div><div><Sparkles/><span><b>03</b> Finishing & detailing</span></div></div>
        <Link className="button dark" to="/atelier">Inside the atelier</Link>
      </div>
    </section>

    <section className="client-quote section-pad">
      <span className="quote-mark">“</span><blockquote>When a man is dressed properly, he does not need to speak loudly to be noticed.</blockquote><span className="quote-caption">THE ZUCOL STANDARD</span>
    </section>

    <section className="cta-banner section-pad">
      <div><span className="eyebrow light">Private consultations</span><h2>Need senator wear,<br/>kaftans or suits?</h2></div>
      <div className="cta-actions"><button className="button gold" onClick={onBook}>Reserve a fitting <ArrowRight size={16}/></button><a className="button glass" href={contactInfo.whatsappLink} target="_blank" rel="noreferrer">WhatsApp us</a></div>
    </section>
  </>
}
