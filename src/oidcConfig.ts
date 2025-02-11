import { UserManagerSettings } from "oidc-client-ts";

export const oidcConfig: UserManagerSettings = {
  authority: "http://localhost:8080/realms/test-keycloak",           // Thay bằng URL IdP của bạn
  client_id: "react-vite-client-test",                      // Thay bằng client_id của bạn
  redirect_uri: "http://localhost:5173", // Callback URL
  post_logout_redirect_uri: "http://localhost:5173",
  response_type: "code",                          // Sử dụng code flow (chuẩn OIDC hiện đại)
  scope: "openid profile email",                  // Thay bằng scope bạn cần
  // Bạn cũng có thể bổ sung các thiết lập khác như silent_redirect_uri nếu làm silent renew
};
