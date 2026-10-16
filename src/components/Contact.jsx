import { Mail, Github, Linkedin } from "lucide-react";

function Contact({ data }) {
  const email = data.email || "";
  const socials = data.socials || {};

  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="muted">I&apos;m available for internships, freelance work, and collaboration opportunities.</p>

          <div className="contact-links">
            <a className="icon-link icon-link-text" href={`mailto:${email}`}>
              <Mail size={18} />
            </a>
            <a className="icon-link icon-link-text" href={socials.github} target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a className="icon-link icon-link-text" href={socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          </div>

          <a className="btn btn-primary" href={`mailto:${email}`}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
