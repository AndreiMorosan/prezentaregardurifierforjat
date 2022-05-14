import "./portofolioList.scss";

export default function PortofolioList({ id, title, actived, setSelected }) {
  return (
    <li
      className={actived ? "portofolioList active" : "portofolioList"}
      
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
