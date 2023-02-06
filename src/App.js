import './App.css';
import Top from './components/Top.js'
import Body from './components/Body.js'
function App() {
  return (
    <>
      <Top/>
      {/* hello */}
      <div className="container">
        <Body />
      </div>
    </>
    );
}

export default App;
