import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

interface Props {
  item: any;
  activeComponent: string;
}

const TodoItem = ({ item, activeComponent }: Props) => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div
      className="todo__item poppins-medium "
      style={{
        backgroundColor:
          activeComponent === "todoItem" || activeComponent === "todo"
            ? "#ffc27f"
            : "",
      }}
    >
      <Checkbox onChange={onChange}>
        <span>{item.title}</span>
      </Checkbox>
    </div>
  );
};

export default TodoItem;
