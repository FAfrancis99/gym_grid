import React, { useState } from 'react';
import axios from 'axios';

// Demo exercise list
const exercises = [
  { name: 'Push-Up', muscleGroup: 'Chest', difficulty: 'Beginner', type: 'Bodyweight', link: '', image: '' },
  { name: 'Bench Press', muscleGroup: 'Chest', difficulty: 'Intermediate', type: 'Compound', link: '', image: '' },
];

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '', email: '', password: '', age: '', height: '', weight: '', gender: ''
  });

  if (!user) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1>GYMGRID</h1>
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
        {showAuth && (
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99
          }}>
            <div style={{
              background: "#181818", padding: 32, borderRadius: 16,
              minWidth: 340, color: "#e0e0e0"
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
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  // Fake login for demo
                  setUser({ name: "Demo", gender: "male", age: 23, height: 180, weight: 70 });
                  setShowAuth(false);
                }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input name="email" type="email" placeholder="Email"
                    value={loginForm.email}
                    onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                    required />
                  <input name="password" type="password" placeholder="Password"
                    value={loginForm.password}
                    onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                    required />
                  <button type="submit" style={{ background: "#00ff88", color: "#111", border: "none", borderRadius: 6, fontWeight: "bold", padding: "10px 0", marginTop: 8, cursor: "pointer" }}>
                    Login
                  </button>
                </form>
              ) : (
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  // Fake register for demo
                  setUser({
                    name: registerForm.name, gender: registerForm.gender, age: registerForm.age,
                    height: registerForm.height, weight: registerForm.weight
                  });
                  setShowAuth(false);
                }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input name="name" placeholder="Name"
                    value={registerForm.name}
                    onChange={e => setRegisterForm({ ...registerForm, name: e.target.value })}
                    required />
                  <input name="email" type="email" placeholder="Email"
                    value={registerForm.email}
                    onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}
                    required />
                  <input name="password" type="password" placeholder="Password"
                    value={registerForm.password}
                    onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}
                    required />
                  <input name="age" type="number" placeholder="Age"
                    value={registerForm.age}
                    onChange={e => setRegisterForm({ ...registerForm, age: e.target.value })}
                    required />
                  <input name="height" type="number" placeholder="Height (cm)"
                    value={registerForm.height}
                    onChange={e => setRegisterForm({ ...registerForm, height: e.target.value })}
                    required />
                  <input name="weight" type="number" placeholder="Weight (kg)"
                    value={registerForm.weight}
                    onChange={e => setRegisterForm({ ...registerForm, weight: e.target.value })}
                    required />
                  <select name="gender"
                    value={registerForm.gender}
                    onChange={e => setRegisterForm({ ...registerForm, gender: e.target.value })}
                    required>
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <button type="submit" style={{ background: "#00ff88", color: "#111", border: "none", borderRadius: 6, fontWeight: "bold", padding: "10px 0", marginTop: 8, cursor: "pointer" }}>
                    Sign Up
                  </button>
                </form>
              )}
              <button onClick={() => setShowAuth(false)} style={{ marginTop: 16, background: "none", color: "#00ff88", border: "none", cursor: "pointer", fontWeight: "bold" }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Main app if logged in
  return (
    <div className="app">
      <div style={{ textAlign: 'right', padding: '8px 0' }}>
        <span>
          Hi, {user.name}! ({user.gender}, Age: {user.age}, Height: {user.height}, Weight: {user.weight}){" "}
        </span>
        <button onClick={() => setUser(null)} style={{ marginLeft: "8px" }}>Logout</button>
      </div>
      <h2>Exercise List</h2>
      <div>
        {exercises.map(ex =>
          <div key={ex.name} style={{ background: "#222", color: "#fff", margin: "12px 0", borderRadius: 10, padding: 10 }}>
            <strong>{ex.name}</strong> – {ex.muscleGroup} ({ex.difficulty})
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
