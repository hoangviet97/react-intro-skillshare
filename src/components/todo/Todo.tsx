import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";

interface Props {
  activeComponent: string;
}

const Todo = ({ activeComponent }: Props) => {
  const items = [
    { id: 0, title: "Buy new house", done: false },
    { id: 1, title: "Study for exam", done: false },
  ];
  return (
    <div
      className="todo"
      style={{
        backgroundColor: activeComponent === "todo" ? "#ffc27f" : "white",
      }}
    >
      <TodoHeader activeComponent={activeComponent} />
      <TodoForm activeComponent={activeComponent} />
      <TodoList items={items} activeComponent={activeComponent} />
    </div>
  );
};

export default Todo;
