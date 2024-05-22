import './App.css';
import Greetings from './components/Greetings';
import OnButtonClickEventBasic from './components/OnButtonClickEventBasic';
import OnChangeEvent from './components/OnChangeEvent';

function App() {
  return (
    <div className="App">
      <Greetings />
      <OnChangeEvent />
      <OnButtonClickEventBasic />
    </div>
  );
}

export default App;
