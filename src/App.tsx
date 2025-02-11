// src/App.tsx
import { Routes, Route } from "react-router-dom";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { CallbackPage } from "./pages/CallbackPage";
import { TodoPage } from "./pages/TodoPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Routes>
      {/* Trang callback được dùng khi IdP redirect về */}
      {/* <Route path="/callback" element={<CallbackPage />} /> */}

      {/* Trang chính (bảo vệ) */}
      <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <TodoPage />
          </ProtectedRoute>
        }
      />

      {/* Trang home hoặc mặc định */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
