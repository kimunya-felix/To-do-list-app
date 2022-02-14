import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import { ListContext, ListProvider } from './components/ListContext/ListContext';

function App() {
  return (
    <ListProvider>
      <div>
        <ToDoList />
      </div>
    </ListProvider>
  );
}

export default App;
