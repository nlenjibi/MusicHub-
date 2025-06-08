import api from "../api/Api";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const signupUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/signup", userData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
export const updateUserProfile = async (userData: {
  name?: string;
  email?: string;
  password?: string;
}) => {
  const response = await api.put("/auth/profile", userData);
  return response.data;
};
export const deleteUserAccount = async () => {
  const response = await api.delete("/auth/delete");
  return response.data;
};

export const getUserById = async (userId: string) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};
export const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
export const updateUserById = async (userId: string, userData: {
  name?: string;
  email?: string;
  password?: string;
}) => {
  const response = await api.put(`/users/${userId}`, userData);
  return response.data;
};
export const deleteUserById = async (userId: string) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};
export const searchUsers = async (query: string) => {
  const response = await api.get(`/users/search`, { params: { q: query } });
  return response.data;
};
export const getUserProfile = async (userId: string) => {
  const response = await api.get(`/users/${userId}/profile`);
  return response.data;
};
export const updateUserProfilePicture = async (userId: string, file: File) => {
  const formData = new FormData();
  formData.append("profilePicture", file);

  const response = await api.post(`/users/${userId}/profile-picture`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
export const getUserNotifications = async (userId: string) => {
  const response = await api.get(`/users/${userId}/notifications`);
  return response.data;
};
export const markNotificationAsRead = async (userId: string, notificationId: string) => {
  const response = await api.post(`/users/${userId}/notifications/${notificationId}/read`);
  return response.data;
};
export const deleteNotification = async (userId: string, notificationId: string) => {
  const response = await api.delete(`/users/${userId}/notifications/${notificationId}`);
  return response.data;
};
