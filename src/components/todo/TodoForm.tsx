import { Input } from "antd";
import type { GetProps } from "antd";

interface Props {
  activeComponent: string;
}

const TodoForm = ({ activeComponent }: Props) => {
  return (
    <div
      className="todo__form"
      style={{
        backgroundColor:
          activeComponent === "todoForm" || activeComponent === "todo"
            ? "#ffc27f"
            : "white",
      }}
    >
      <Input placeholder="input search text" allowClear size="large" />
    </div>
  );
};

export default TodoForm;
