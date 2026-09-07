import { ArrowRight } from 'lucide-react'
import { collections, pieces } from '../data'

export default function Collections({ onBook, favorite, saved }:{ onBook:()=>void; favorite:(id:string)=>void; saved:Set<string> }) {
  return <>
    <section className="page-hero compact"><span className="eyebrow light">ZUCOL Menswear Collections</span><h1>Nativewear with<br/><em>executive discipline.</em></h1><p>Explore premium senator wear, kaftans and polished elite outfits developed to look clean, masculine and properly finished.</p></section>
    <section className="editorial-row section-pad">
      {collections.map((c,i)=><article className="editorial-collection" key={c.title}><div><img src={c.image} alt={c.title}/></div><span>0{i+1}</span><h2>{c.title}</h2><p>{c.subtitle}</p></article>)}
    </section>
    <section className="catalog section-pad">
      <div className="section-head"><div><span className="eyebrow">Selected looks</span><h2>Wardrobe options for elites.</h2></div><p>Each look can be adjusted in colour, fabric, neckline, sleeve detail and final finishing to suit the exact image the client wants.</p></div>
      <div className="piece-grid catalog-grid">{pieces.map(p=><article className="piece-card" key={p.id}><div className="piece-image"><img src={p.image} alt={p.name}/><button onClick={()=>favorite(p.id)} className={saved.has(p.id)?'save saved':'save'}>{saved.has(p.id)?'Saved':'Save'}</button></div><span>{p.category}</span><h3>{p.name}</h3><p>{p.note}</p><button className="piece-enquire" onClick={onBook}>Request a fitting <ArrowRight size={15}/></button></article>)}</div>
    </section>
  </>
}
