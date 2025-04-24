import React, { useState } from 'react';
import exercises from './exercises';

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch =
  ex.name.toLowerCase().includes(search.toLowerCase()) ||
  ex.muscleGroup.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === 'All' || ex.muscleGroup.includes(filter);
    return matchesSearch && matchesFilter;
  });

  const muscleGroups = ['All', ...new Set(exercises.flatMap(ex => ex.muscleGroup.split(', ')))];

  return (
    <div className="app">
    <section className="hero-section">
      <h1 className="hero-title">GYMGRID</h1>
      <p className="hero-subtext">
        Explore 250+ optimized exercises. Filter by body part, style, or intensity.
      </p>
      <div className="scroll-hint">↓ Scroll to train ↓</div>
    </section>
  
    <section className="controls-section">
      <div className="controls">
        <input
          type="text"
          placeholder="Search exercises..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {muscleGroups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      </div>
  
      <div className="exercise-list">
        {filteredExercises.map((ex) => (
          <div key={ex.name} className="exercise-card">
          <h2>{ex.name}</h2>
          <div className={`badge badge-${ex.difficulty.toLowerCase()}`}>
            {ex.difficulty}
          </div>
          <p><strong>Muscle Group:</strong> {ex.muscleGroup}</p>
          <p><strong>Type:</strong> {ex.type}</p>
            <p><strong>Difficulty:</strong> {ex.difficulty}</p>
            <a href={ex.link} target="_blank" rel="noopener noreferrer">🔗 How to do it</a>
            {ex.image && <img src={ex.image} alt={ex.name} />}
          </div>
        ))}
      </div>
    </section>
    <footer className="footer">
  <p>Made with 💚 by 
    <a href="mailto:faheem.francis99@gmail.com" target="_blank" rel="noopener noreferrer"> Faheem Francis</a>
  </p>
  <div className="footer-icons">
    <a href="mailto:faheem.francis@outlook.com" target="_blank" rel="noopener noreferrer" title="Email">
      📧
    </a>
    <a href="https://www.linkedin.com/in/faheemfrancis" target="_blank" rel="noopener noreferrer" title="LinkedIn">
      🔗
    </a>
  </div>
</footer>
    

  </div>
  
  );
}

export default App;
