import TodoList from "./components/todoList/TodoList"
import { GlobalStorage } from "./GlobalContext"

function App() {

  return (
    <GlobalStorage>
      <TodoList />
    </GlobalStorage>
  )
}

export default App
