
import React from "react";

const projectList = [
  {
    title: "Quizburst",
    description:
      "A web application that presents 10 random trivia questions and displays results upon completion. Built using a trivia database.",
    url: "https://gouravindoriya.github.io/QuizBrust/",
  },
  {
    title: "Blog Web App",
    description:
      "A React-based blog app with features like publishing, editing, and deleting blogs. Powered by Appwrite for authentication and data handling.",
    url: "https://blog-ecru-nu-93.vercel.app/",
  },
  {
    title: "Mini Docs - A To-Do App",
    description:
      "A notes management app with animated landing cards. Users can add, edit, and delete notes. Built with Appwrite for data handling.",
    url: "https://gouravindoriya.github.io/Mini-Docs/", // Replace with the actual link if needed.
  },
  {
    title: "Collage Website for IEEE Collaboration",
    description: "A collaborative website built for IEEE students and faculty.",
    url: "https://gouravindoriya.github.io/ITM-X-IEEE-/",
  },
  {
    title: "Tic Tac Toe",
    description: "A simple and fun implementation of the classic Tic Tac Toe game.",
    url: "https://gouravindoriya.github.io/tic-tac-toe/",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "4rem 2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        Portfolio
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" ,justifyContent:"center"}}>
        <div>
          {projectList.map((project) => (
            <div
              key={project.title}
              style={{
                marginBottom: "2rem",
                backgroundColor: "#fff",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#007BFF",
                }}
              >
                <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
              </a>
              <p style={{ color: "#555" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
