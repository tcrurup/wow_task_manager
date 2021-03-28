import './App.css';
import TaskBox from './containers/TaskBox'
import PetMatcher from './containers/PetMatcher'

function App() {
  return (
    <div className="App">
      <PetMatcher/>
      <TaskBox taskBoxType="Weekly"/>
      <TaskBox taskBoxType="Daily"/>
      <TaskBox taskBoxType="General"/>
    </div>
  );
}

export default App;
