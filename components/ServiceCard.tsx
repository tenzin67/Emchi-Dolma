import Link from 'next/link';

type Props = { tibetanName: string; englishName: string; subtitle?: string; description: string; icon: string; benefits?: string[]; image?: string; };
export default function ServiceCard({ tibetanName, englishName, subtitle, description, icon, benefits = [], image }: Props) {
  return <article className={`service-card ${image ? 'has-image' : ''}`}><div className="card-accent" />{image ? <div className="card-image-wrap"><img src={image} alt={`${englishName} treatment`} className="card-image" loading="lazy" /><span className="card-icon-badge">{icon}</span></div> : <div className="card-icon">{icon}</div>}<p className="card-tibetan tibetan-script">{tibetanName}</p><h3 className="card-title">{englishName}</h3>{subtitle && <p className="card-subtitle">{subtitle}</p>}<p className="card-description">{description}</p>{benefits.length > 0 && <ul className="card-benefits">{benefits.slice(0, 3).map((benefit) => <li key={benefit}><span />{benefit}</li>)}</ul>}<Link href="/contact" className="card-link">Learn More <span aria-hidden="true">→</span></Link></article>;
}
