function Education({ education = [] }) {
  return (
    <section id="education" className="section dark-section">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="grid">
          {education.map((entry) => (
            <div className="card" key={`${entry.degree}-${entry.college}`}>
              <p className="year">{entry.year}</p>
              <h3>{entry.degree}</h3>
              <p>{entry.college}</p>
              <p className="muted">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
