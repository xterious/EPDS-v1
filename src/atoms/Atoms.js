import { atom } from "recoil";

export const AuthState = atom({
  key: "AuthState",
  default: {
    isAdminLoggedIn: false,
    isClientLoggedIn: false,
    isLoading: true,
  },
});
