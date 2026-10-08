import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps React</h2>
        <span>CI/CD Demo</span>
      </nav>

      <main className="hero">
        <div className="badge">🚀 CI Pipeline Project</div>

        <h1>
          React + <span>DevOps</span>
        </h1>

        <p>
          This is a simple React frontend created for practicing
          Continuous Integration and Continuous Deployment.
        </p>

        <div className="cards">
          <div className="card">
            <h3>⚛️ React</h3>
            <p>Frontend application built with React.</p>
          </div>

          <div className="card">
            <h3>🔧 GitHub</h3>
            <p>Source code is maintained using Git and GitHub.</p>
          </div>

          <div className="card">
            <h3>⚙️ CI</h3>
            <p>Automatically build and test the project after every push.</p>
          </div>
        </div>

        <button onClick={() => alert("CI Demo is working!")}>
          Test Application
        </button>
      </main>

      <footer>
        <p>DevOps Learning Project • React + CI/CD</p>
      </footer>
    </div>
  );
}

export default App;