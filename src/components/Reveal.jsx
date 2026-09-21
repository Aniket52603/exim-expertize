export default function Reveal({ delay = 0, className = "", children, as: Tag = "div" }) {
  return (
    <Tag className={"reveal " + className} style={{ transitionDelay: delay + "ms" }}>
      {children}
    </Tag>
  );
}
