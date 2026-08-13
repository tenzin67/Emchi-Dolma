type Props = { condition: string; icon: string; description?: string };
export default function ConditionCard({ condition, icon, description }: Props) { return <article className="condition-card"><span className="condition-icon">{icon}</span><div><h3>{condition}</h3>{description && <p>{description}</p>}</div></article>; }
