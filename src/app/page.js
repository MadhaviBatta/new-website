"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <div>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.logo}>🚀 My Portfolio</h1>
        <nav style={styles.nav}>
          <a style={styles.link} href="#home">Home</a>
          <a style={styles.link} href="#about">About</a>
          {/*<a style={styles.link} href="#projects">Projects</a>*/}
          <Link style={styles.link} href="/projects">Projects</Link>
          <a style={styles.link} href="#career">Career</a>
        </nav>
      </header>

      {/* MAIN SECTIONS */}
      <section id="home" style={{ ...styles.section, background: "linear-gradient(135deg, #1e1e1e, #2c3e50)", color: "#fff" }}>
        <h2 style={styles.heading}>Welcome 👋</h2>
        <p style={styles.text}>This is the main section of the website. Scroll down to explore more!</p>
      </section>

      <section id="about" style={{ ...styles.section, background: "#f4f4f4" }}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>I am a passionate developer with a love for building clean and scalable applications.</p>
      </section>

      <section id="projects" style={{ ...styles.section, background: "#fff" }}>
        <h2 style={styles.heading}>Projects</h2>
        <p style={styles.text}>Check out my awesome projects and contributions to open source.</p>
      </section>

      <section id="career" style={{ ...styles.section, background: "#f4f4f4" }}>
        <h2 style={styles.heading}>Career</h2>
        <p style={styles.text}>Here is my professional journey and achievements so far.</p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2025 Your Name • Made with ❤️ in Next.js</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    background: "linear-gradient(90deg, #000000, #333333)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "color 0.3s ease, transform 0.2s ease",
  },
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 20px",
    textAlign: "center",
    borderRadius: "20px",
    margin: "20px auto",
    maxWidth: "1200px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "700px",
    lineHeight: "1.6",
  },
  footer: {
    background: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "30px",
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
  },
};
