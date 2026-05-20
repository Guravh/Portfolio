import { SKILLS_TICKER } from "../Data";
const Ticker = () => {
  const items = [...SKILLS_TICKER, ...SKILLS_TICKER];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {items.map((skill, i) => (
          <span key={i} className="ticker__item">
            {skill} <span className="ticker__sep">/</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
