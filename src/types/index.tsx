// Represents a basic user object

export interface Post {
  id: number;
  title: string;
  postText: string;
  username: string;
  createdAt: string;
  updatedAt?: string;
}
export interface PostData {
  title: string;
  postText: string;
  username: string;
  
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  avatarUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Represents user login/signup credentials
export interface UserCredentials {
  email: string;
  password: string;
}

// Represents the response from a successful login/signup
export interface AuthResponse {
  token: string;
  user: User;
}

// Generic API response wrapper (e.g., from a GET request)
export interface ApiResponse<T> {
  status: string;
  message?: string;
  data: T;
}

// Error structure from backend or caught on frontend
export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>; // e.g. { email: ["Email already taken"] }
}

export interface Pagination<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
// Represents a user profile update request
export interface UserProfileUpdate {
  name?: string;
  email?: string;
  password?: string;
  avatarUrl?: string;
}
export interface UserSearchQuery {
  query: string;
  page?: number;
  pageSize?: number;
}
export interface UserSearchResult {
  users: User[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
}
export interface UserUpdate {
  id: string;
  name?: string;
  email?: string;
  role?: string;
  avatarUrl?: string;
}
export interface UserDelete {
  id: string;
}
export interface UserListResponse {
  users: User[];
  totalCount: number;
  page: number;
  pageSize: number;
}
export interface UserProfileResponse {
  user: User;
  profile: {
    bio?: string;
    location?: string;
    website?: string;
    socialLinks?: Record<string, string>;
  };
}
export interface UserProfileUpdateResponse {
  user: User;
  message: string;
}
export interface UserSearchResponse {
  results: User[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
}
export interface UserByIdResponse {
  user: User;
  message?: string;
}
export interface UserByIdUpdate {
  id: string;
  name?: string;
  email?: string;
  role?: string;
  avatarUrl?: string;
}
export interface UserByIdDelete {
  id: string;
}
export interface UserByIdListResponse {
  users: User[];
  totalCount: number;
  page: number;
  pageSize: number;
}
export interface UserByIdProfileResponse {
  user: User;
  profile: {
    bio?: string;
    location?: string;
    website?: string;
    socialLinks?: Record<string, string>;
  };
}
export interface UserByIdProfileUpdateResponse {
  user: User;
  profile: {
    bio?: string;
    location?: string;
    website?: string;
    socialLinks?: Record<string, string>;
  };
  message: string;
}