import { Provider } from 'react-redux';
import store from './store';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <main>
        <header>
          <h1>My to do list</h1>
        </header>
        <div className="todo-form">
          <TodoForm />
        </div>
      </main>
      <section>
        <TodoList />
      </section>
    </Provider>
  );
}

export default App;
