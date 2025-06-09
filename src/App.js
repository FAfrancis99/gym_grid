import React, { useState } from 'react';
// import axios from 'axios'; // Uncomment and use if connecting to backend
import exercises from './exercises'; // Your existing array

function App() {
  // AUTH state
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '', email: '', password: '', age: '', height: '', weight: '', gender: ''
  });

  // EXERCISE FILTER state
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const muscleGroups = ['All', ...new Set(exercises.flatMap(ex => ex.muscleGroup.split(', ')))];
  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch =
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      ex.muscleGroup.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || ex.muscleGroup.includes(filter);
    return matchesSearch && matchesFilter;
  });

  // Demo login/register (replace with axios if using backend)
  const handleAuthClose = () => {
    setShowAuth(false);
    setLoginForm({ email: '', password: '' });
    setRegisterForm({ name: '', email: '', password: '', age: '', height: '', weight: '', gender: '' });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setUser({ name: "Demo", gender: "male", age: 23, height: 180, weight: 70 });
    handleAuthClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: registerForm.name,
      gender: registerForm.gender,
      age: registerForm.age,
      height: registerForm.height,
      weight: registerForm.weight
    });
    handleAuthClose();
  };

  // --- AUTH PAGE (centered) ---
  if (!user) {
    return (
      <div className="app" style={{ minHeight: "100vh", position: "relative" }}>
        {/* Fullscreen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        >
          <source src="/gym-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered content */}
        <div className="center-auth">
          <h1 className="hero-title" style={{ color: "#00ff88" }}>GYMGRID</h1>
          <button
            onClick={() => setShowAuth(true)}
            style={{
              padding: "12px 24px",
              fontSize: "1.2rem",
              borderRadius: 8,
              marginTop: 30,
              background: "#00ff88",
              color: "#222",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer"
            }}>
            Login or Sign Up
          </button>
        </div>
        
        {/* Modal Auth Window */}
        {showAuth && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99
          }}>
            <div style={{
              background: "#181818",
              padding: 32,
              borderRadius: 16,
              minWidth: 340,
              boxShadow: "0 6px 18px #00ff8844",
              color: "#e0e0e0",
              textAlign: "left"
            }}>
              <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
                <button
                  onClick={() => setIsRegister(false)}
                  style={{
                    flex: 1, padding: 10, borderRadius: 8,
                    border: isRegister ? "none" : "2px solid #00ff88",
                    background: isRegister ? "#222" : "#111",
                    color: "#00ff88", fontWeight: "bold", cursor: "pointer"
                  }}>
                  Login
                </button>
                <button
                  onClick={() => setIsRegister(true)}
                  style={{
                    flex: 1, padding: 10, borderRadius: 8,
                    border: isRegister ? "2px solid #00ff88" : "none",
                    background: isRegister ? "#111" : "#222",
                    color: "#00ff88", fontWeight: "bold", cursor: "pointer"
                  }}>
                  Sign Up
                </button>
              </div>
              {!isRegister ? (
                <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={loginForm.email}
                    onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                    required
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={loginForm.password}
                    onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                    required
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#00ff88",
                      color: "#111",
                      border: "none",
                      borderRadius: 6,
                      fontWeight: "bold",
                      padding: "10px 0",
                      marginTop: 8,
                      cursor: "pointer"
                    }}>
                    Login
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input name="name" placeholder="Name" value={registerForm.name} onChange={e => setRegisterForm({ ...registerForm, name: e.target.value })} required />
                  <input name="email" type="email" placeholder="Email" value={registerForm.email} onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })} required />
                  <input name="password" type="password" placeholder="Password" value={registerForm.password} onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })} required />
                  <input name="age" type="number" placeholder="Age" value={registerForm.age} onChange={e => setRegisterForm({ ...registerForm, age: e.target.value })} required />
                  <input name="height" type="number" placeholder="Height (cm)" value={registerForm.height} onChange={e => setRegisterForm({ ...registerForm, height: e.target.value })} required />
                  <input name="weight" type="number" placeholder="Weight (kg)" value={registerForm.weight} onChange={e => setRegisterForm({ ...registerForm, weight: e.target.value })} required />
                  <select name="gender" value={registerForm.gender} onChange={e => setRegisterForm({ ...registerForm, gender: e.target.value })} required>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <button
                    type="submit"
                    style={{
                      background: "#00ff88",
                      color: "#111",
                      border: "none",
                      borderRadius: 6,
                      fontWeight: "bold",
                      padding: "10px 0",
                      marginTop: 8,
                      cursor: "pointer"
                    }}>
                    Sign Up
                  </button>
                </form>
              )}
              <button onClick={handleAuthClose} style={{ marginTop: 16, background: "none", color: "#00ff88", border: "none", cursor: "pointer", fontWeight: "bold" }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- MAIN APP (after login) ---
  return (
    <div className="app" style={{ position: "relative" }}>
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/gym-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{ textAlign: 'right', padding: '8px 0', color: "#00ff88" }}>
        <span>
          Hi, {user.name}! ({user.gender}, Age: {user.age}, Height: {user.height}, Weight: {user.weight}){" "}
        </span>
        <button onClick={() => setUser(null)} style={{ marginLeft: "8px" }}>Logout</button>
      </div>
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
