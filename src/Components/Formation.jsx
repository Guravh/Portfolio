import { FORMATIONS } from '../Data';
import SectionTitle from './SectionTitle';
const Formation = () => {
  return (
     <section id="formation" className="section">
      <SectionTitle>Formation</SectionTitle>
      <div className="formation__list">
        {FORMATIONS.map((item, i) => (
          <div
            key={i}
            className="formation__item animate"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div
              className="formation__icon"
              style={{
                background: item.color === "#f7df1e" ? item.color : `${item.color}22`,
                border: `1.5px solid ${item.color}44`,
                color: item.color,
              }}
            >
              {item.icon}
            </div>
            <span className="formation__label">{item.label}</span>
            <span className="formation__provider">{item.provider}</span>
            <span className="formation__hours">{item.hours}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Formation
