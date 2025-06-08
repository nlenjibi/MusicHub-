import type { ApiError } from "../types";

try {
  await loginUser({ email, password });
} catch (error: any) {
  const err: ApiError = error.response?.data;
  console.error(err.message);
}
