import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useState } from "react";
import { toast } from "react-toastify";

function Home() {
  const { user, dispatch } = useContext(GlobalContext);
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: inputValue, completed: false },
      ]);
      setInputValue("");
      toast.success("You added new todo")
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success("You deleted this todo")
  };

  const openEditModal = (todo) => {
    setEditingTodo(todo);
    setInputValue(todo.text);
  };

  const closeEditModal = () => {
    setEditingTodo(null);
    setInputValue("");
  };

  const editTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editingTodo.id) {
            return { ...todo, text: inputValue };
          }
          return todo;
        }),
      );
      closeEditModal();
    }
    toast.success("You edited this todo")
  };

  return (
    <div className="pt-5">
      <h1 className="text-center text-3xl font-bold">Todo App</h1>
      <div className="mt-6 flex">
        <input
          className="input input-primary mr-5 w-full"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <ul className="mt-10">
        {todos.map((todo) => (
          <li className="mb-5 flex items-center bg-gray-800  p-6" key={todo.id}>
            <p className="mr-auto text-xl text-white">{todo.text}</p>
            <div className="flex items-center gap-5">
              <button className="btn btn-error w-[60px] text-white" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
              <button className="btn btn-accent w-[60px] text-white" onClick={() => openEditModal(todo)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingTodo && (
        <div className="flex mt-6 gap-5 items-center">
          <input
            className="input input-accent w-full"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn-success btn text-white" onClick={editTodo}>
            Save
          </button>
          <button className="btn btn-error text-white" onClick={closeEditModal}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
