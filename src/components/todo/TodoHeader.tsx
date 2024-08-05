interface Props {
  activeComponent: string;
}

const TodoHeader = ({ activeComponent }: Props) => {
  return (
    <div
      style={{
        backgroundColor:
          activeComponent === "todoHeader" || activeComponent === "todo"
            ? "#ffc27f"
            : "white",
      }}
    >
      <h1 className="poppins-semibold">Todo App</h1>
      <div></div>
    </div>
  );
};

export default TodoHeader;
