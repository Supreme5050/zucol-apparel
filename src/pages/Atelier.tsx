import { images } from '../data'

const steps=[
  ['01','Consultation','We identify the exact need: senator wear, kaftan, suit or corporate nativewear, and align the design to the client’s purpose.'],
  ['02','Fabric & Style Direction','Colour, texture, embroidery level, neck style and garment character are selected as one complete premium concept.'],
  ['03','Measurement & Fitting','The garment is cut to suit the client’s body, movement and the level of confidence he wants the outfit to carry.'],
  ['04','Finishing & Delivery','Final inspection covers neatness, ironing, detailing and presentation before pickup or delivery.']
]

export default function Atelier({onBook}:{onBook:()=>void}){return <>
<section className="page-hero image-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.84),rgba(0,0,0,.28)),url(${images.atelier})`}}><span className="eyebrow light">Bespoke Menswear Experience</span><h1>The private<br/><em>ZUCOL process.</em></h1><p>From first consultation to final fitting, every ZUCOL commission is handled with an intentional luxury process.</p><button className="button gold" onClick={onBook}>Begin a consultation</button></section>
<section className="process section-pad"><div className="section-head"><div><span className="eyebrow">How it works</span><h2>Tailoring with order.</h2></div><p>This is where fit, fabric, finish and client taste are organised into a confident final look.</p></div><div className="process-grid">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
<section className="service-showcase"><div><img src={images.executive} alt="Executive ZUCOL menswear showcase"/></div><div className="section-pad"><span className="eyebrow">Wardrobe Services</span><h2>One house.<br/>Multiple elite needs.</h2><p>ZUCOL can build tailored looks for professionals, executives, church leaders, grooms, families, public figures and men who simply want to always appear composed.</p><ul><li>Premium senator wear</li><li>Kaftans & two-piece nativewear</li><li>Suits & corporate dressing</li><li>Special-event commissions</li><li>Remote order consultations</li></ul><button className="button dark" onClick={onBook}>Book a private consultation</button></div></section>
</>}
