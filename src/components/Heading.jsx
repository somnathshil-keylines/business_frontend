import "../styles/components/heading.css";

function Heading({ text, tagName = "h1" }) {
  const Tag = ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(tagName)
    ? tagName
    : "h1";

  return <Tag className="heading">{text}</Tag>;
}

export default Heading;
