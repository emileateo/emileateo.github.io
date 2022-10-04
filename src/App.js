import './App.css';

import background_blur from './assets/background_blur.jpg'

function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${background_blur})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <header className="App-header">
          <h3>
            <code>Emilea Teo</code>
          </h3>
          <p><code>fullstack software engineer · creative tinkerer</code></p>
        </header>
      </div>
    </div>
  );
}

export default App;
