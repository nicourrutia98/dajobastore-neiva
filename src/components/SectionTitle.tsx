type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export default function SectionTitle({ eyebrow, title, text }: Props) {
  return (
    <div className="section-title">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
