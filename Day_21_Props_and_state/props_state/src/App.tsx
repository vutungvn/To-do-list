import "./App.css";
import { MyButton } from "./components/MyButton";
import { MyButton1 } from "./components/MyButton1";
import { MyInput } from "./components/MyInput";
import { UserCard } from "./components/UserCard";

function App() {
  const users = [
    {
      name: "Thanh Tung",
      avatar:
        "https://lh3.googleusercontent.com/ogw/AF2bZyjJCNLwY0j85sdk6x_cb9rUhgcrw5pL_RnremdpSHQ-0_k=s64-c-mo",
      address: "Hưng yên",
    },
    {
      name: "Thanh",
      avatar:
        "https://lh3.googleusercontent.com/ogw/AF2bZyjJCNLwY0j85sdk6x_cb9rUhgcrw5pL_RnremdpSHQ-0_k=s64-c-mo",
      address: "Hà Nội",
    },
  ];

  const handleAddToCart = () => {
    alert("Thêm giỏ hàng");
  };

  const handleLogin = () => {
    alert("Đăng nhập");
  };

  const handleDefault = () => {
    alert("Mặc định");
  };

  const handleRegister = () => {
    alert("Đăng ký");
  };

  return (
    <>
      {/* <h1 className="text-red-500">Danh sách User</h1> */}
      {/* <UserCard
        name="A"
        avatar="https://lh3.googleusercontent.com/ogw/AF2bZyjJCNLwY0j85sdk6x_cb9rUhgcrw5pL_RnremdpSHQ-0_k=s64-c-mo"
      />
      <UserCard
        name="B"
        avatar="https://lh3.googleusercontent.com/ogw/AF2bZyjJCNLwY0j85sdk6x_cb9rUhgcrw5pL_RnremdpSHQ-0_k=s64-c-mo"
      />
      <UserCard name="C" /> */}

      {/* {users.map((user) => (
        <UserCard key={user.name} item={user} />
      ))} */}

      <div className="flex gap-3">
        <MyButton title="Mua hàng" variant="blue" onClick={handleAddToCart} />
        <MyButton title="Đăng nhập" variant="green" onClick={handleLogin} />
        <MyButton title="Default" onClick={handleDefault} />
      </div>

      <br />
      <hr />
      <br />

      <div>
        <MyInput value="Thanh Tùng" name="username" type="text" />
      </div>

      <br />
      <hr />
      <br />

      <div className="flex gap-3">
        <MyButton1 variant="blue" onClick={handleLogin}>
          Đăng nhập
        </MyButton1>
        <MyButton1 variant="green" onClick={handleRegister}>
          Đăng ký
        </MyButton1>
      </div>
    </>
  );
}

export default App;
