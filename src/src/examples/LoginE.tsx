import { UserCredentials, AuthResponse } from "../types";
import api from "./api";

export const loginUser = async (credentials: UserCredentials): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/login", credentials);
  return response.data;
};
