import './App.css';
import TaskBox from './containers/TaskBox'

function App() {
  return (
    <div className="App">
      <TaskBox taskBoxType="Weekly"/>
      <TaskBox taskBoxType="Daily"/>
      <TaskBox taskBoxType="General"/>
    </div>
  );
}

export default App;
