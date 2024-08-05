import TodoItem from "./TodoItem";

interface Props {
  items: any[];
  activeComponent: string;
}

const TodoList = ({ items, activeComponent }: Props) => {
  return (
    <div
      className="todo__list"
      style={{
        backgroundColor:
          activeComponent === "todoList" || activeComponent === "todo"
            ? "#ffc27f"
            : "white",
      }}
    >
      {items.map((item, index) => (
        <TodoItem key={index} item={item} activeComponent={activeComponent} />
      ))}
    </div>
  );
};

export default TodoList;
