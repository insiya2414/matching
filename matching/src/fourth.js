import React from 'react';
import './fourth.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>CatConnect</h1>
      </header>
      <main className="content">
        <h2>Welcome, Jackson</h2>
        <p>You’re a senior Computer Science major</p>
        <p>Let’s get to know you better:</p>

        <section className="interests-section">
          <div className="card">
            <h3>Select Personal Interests:</h3>
            <div className="tags">
              <span>Hiking</span>
              <span>Cooking</span>
              <span>Plants</span>
              <span>Movies</span>
              <span>Concerts</span>
              <span>Photography</span>
              <span>Volunteering</span>
              <span>Art</span>
              <button className="view-more">View More</button>
            </div>
          </div>

          <div className="card">
            <h3>Languages Spoken</h3>
            <div className="tags">
              <span>English</span>
              <span>Mandarin</span>
              <span>Hindi</span>
              <span>Spanish</span>
              <span>French</span>
              <span>Arabic</span>
              <span>Bengali</span>
              <span>Russian</span>
              <span>Portuguese</span>
              <span>Urdu</span>
              <span>Indonesian</span>
              <span>German</span>
              <span>Japanese</span>
              <span>Turkish</span>
              <span>Egyptian Arabic</span>
              <span>Marathi</span>
              <span>Telugu</span>
              <span>Tamil</span>
              <span>Yue Chinese</span>
              <span>Vietnamese</span>
              <span>Tagalog</span>
              <span>Korean</span>
              <span>Cantonese</span>
              <button className="view-more">View More</button>
            </div>
          </div>
        </section>

        <section className="interests-section">
          <div className="card">
            <h3>Select Professional Interests:</h3>
            <div className="tags">
              <span>UX/UI</span>
              <span>Figma</span>
              <span>C++</span>
              <span>Machine Learning</span>
              <span>Art Direction</span>
              <span>User Experience</span>
              <button className="view-more">View More</button>
            </div>
          </div>
        </section>

        <button className="continue-button">Continue →</button>
      </main>
    </div>
  );
}

export default App;
