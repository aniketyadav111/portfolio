import { Github, Linkedin } from "lucide-react";
import { useState } from "react";

function Hero({ data }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = data.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">Hi, I&apos;m {data.name}</p>
          <h1 className="hero-title gradient-text">{data.role}</h1>
          <p className="hero-text">{data.tagline}</p>

          <a href="#projects" className="btn btn-primary">Explore my Work</a>

          <div className="social-icons">
            <a className="icon-link" href={data.socials.github} target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
            <a className="icon-link" href={data.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          {!imageFailed && data.profileImage ? (
            <img
              src={data.profileImage}
              alt={data.name}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="hero-photo-fallback" role="img" aria-label={`${data.name} profile photo`}>
              {initials}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;