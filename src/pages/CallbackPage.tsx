// src/pages/CallbackPage.tsx
import React, { useEffect } from "react";
import { useAuth } from "react-oidc-context";

export function CallbackPage() {
  const auth = useAuth();

  useEffect(() => {
    // Gọi hàm này để OIDC client parse code/token từ URL
    // rồi lưu lại phiên đăng nhập
    auth.().catch((error) => {
      console.error("Error handling redirect callback:", error);
    });
  }, [auth]);

  return <div>Đang xử lý đăng nhập...</div>;
}
