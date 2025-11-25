import React from 'react';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import dataMahasiswa from './data/dataMahasiswa.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📄 CV Mahasiswa - Teknik Informatika</h1>
      </header>
      
      <main className="app-content">
        <Profile data={dataMahasiswa} />
        <Skills skills={dataMahasiswa.skills} />
        <Experiences experiences={dataMahasiswa.experiences} />
      </main>

      <footer className="app-footer">
        <p>© 2024 {dataMahasiswa.profile.full_name} - Made with ❤️ using React</p>
        <div className="statistics">
          <span>👁️ {dataMahasiswa.statistics.views_count} views</span>
          <span>✅ {dataMahasiswa.statistics.profile_completeness}% complete</span>
          <span>🤝 {dataMahasiswa.statistics.connections_count} connections</span>
        </div>
      </footer>
    </div>
  );
}

export default App;