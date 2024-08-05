import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";

interface Props {
  activeComponent: string;
}

const TodoForm = ({ activeComponent }: Props) => {
  type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

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
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default TodoForm;
