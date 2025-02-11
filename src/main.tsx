import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "./oidcConfig.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider
        {...oidcConfig}
        // Tùy chọn cho silent renew (nếu IdP hỗ trợ)
        // automaticSilentRenew={true}
        // silent_redirect_uri="http://localhost:5173/silent-renew"
        
        onSigninCallback={() => {
          // Mặc định sau khi đăng nhập thành công sẽ quay về redirect_uri
          // Ở đây có thể điều hướng hoặc làm gì đó tùy ý
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }}
      >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
