import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContexProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hellllooooo</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
