import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-lg text-red-500">hello world</h1>
            </>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
