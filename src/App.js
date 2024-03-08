import './App.css';
import Column from './component/Column';
import Component from './component/Component';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
