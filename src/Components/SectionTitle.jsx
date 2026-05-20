const SectionTitle = ({ children }) => {
  return (
    <div>
      <h2 className="section-title animate">
        {children}
        <span className="accent">.</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
