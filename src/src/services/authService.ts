import api from '../api/Api';
import type {
  User,
  UserCredentials,
  AuthResponse,
  ApiResponse,
  ApiError
} from '../types/index';

export const AuthService = {
  /**
   * Login user with email and password
   */
  async login(credentials: UserCredentials): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await api.post<ApiResponse<AuthResponse>>(
        '/auth/login',
        credentials
      );
      this.setAuthToken(response.data.data.token);
      return response.data;
    } catch (error) {
      throw this.handleError(error as ApiError);
    }
  },

  /**
   * Register new user
   */
  async signup(userData: UserCredentials & { name: string }): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await api.post<ApiResponse<AuthResponse>>(
        '/auth/signup',
        userData
      );
      this.setAuthToken(response.data.data.token);
      return response.data;
    } catch (error) {
      throw this.handleError(error as ApiError);
    }
  },

  /**
   * Logout current user
   */
  async logout(): Promise<ApiResponse<void>> {
    try {
      const response = await api.post<ApiResponse<void>>('/auth/logout');
      this.clearAuthToken();
      return response.data;
    } catch (error) {
      this.clearAuthToken();
      throw this.handleError(error as ApiError);
    }
  },

  /**
   * Get current authenticated user
   */
  async getCurrentUser(): Promise<ApiResponse<User>> {
    try {
      const response = await api.get<ApiResponse<User>>('/auth/me');
      return response.data;
    } catch (error) {
      throw this.handleError(error as ApiError);
    }
  },

  /**
   * Refresh access token
   */
  async refreshToken(refreshToken: string): Promise<ApiResponse<AuthResponse>> {
    try {
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/refresh', {
        refreshToken
      });
      this.setAuthToken(response.data.data.token);
      return response.data;
    } catch (error) {
      throw this.handleError(error as ApiError);
    }
  },

  /**
   * Request password reset
   */
  async forgotPassword(email: string): Promise<ApiResponse<void>> {
    try {
      const response = await api.post<ApiResponse<void>>('/auth/forgot-password', {
        email
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error as ApiError);
    }
  },

  /**
   * Reset password with token
   */
  async resetPassword(
    token: string,
    newPassword: string
  ): Promise<ApiResponse<void>> {
    try {
      const response = await api.post<ApiResponse<void>>('/auth/reset-password', {
        token,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error as ApiError);
    }
  },

  // Helper methods
  setAuthToken(token: string): void {
    localStorage.setItem('accessToken', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  clearAuthToken(): void {
    localStorage.removeItem('accessToken');
    delete api.defaults.headers.common['Authorization'];
  },

  getAuthToken(): string | null {
    return localStorage.getItem('accessToken');
  },

  handleError(error: ApiError): Error {
    console.error('AuthService error:', error);
    
    // Customize error messages based on error code
    const errorMessage = error?.data?.error?.message || 'Authentication failed';
    const errorCode = error?.data?.error?.code || 'AUTH_ERROR';
    
    const formattedError = new Error(errorMessage);
    formattedError.name = errorCode;
    
    return formattedError;
  }
};

export default AuthService;