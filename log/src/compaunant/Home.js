import React from "react";
import "./style.css";


function Home() {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod felis id ex auctor, eu fringilla augue vehicula.
          </p>
        </section>
        <section>
          <h2>My Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
  );
}

export default Home;
