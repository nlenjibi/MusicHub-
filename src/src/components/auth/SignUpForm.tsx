import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { AuthService } from '../../services/authService';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Text from '../typography/Text';
import Heading from '../typography/Heading';
import Card from '../ui/Card';

type SignupFormProps = {
  onSuccess?: () => void;
  onError?: (error: string) => void;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      const errMsg = 'Passwords do not match';
      setError(errMsg);
      onError?.(errMsg);
      return;
    }

    try {
      setError('');
      setLoading(true);
      const response = await AuthService.signup({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      login(response.data.user);
      onSuccess?.();
      navigate('/dashboard', { replace: true });
    } catch (err) {
      const errMsg = err.message || 'Failed to create account';
      setError(errMsg);
      onError?.(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md p-6">
      <Heading level="h2" className="text-center mb-6">Create Account</Heading>
      
      {error && (
        <Text color="danger" className="mb-4 text-center">
          {error}
        </Text>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Button>
      </form>
    </Card>
  );
};

export default SignupForm;