import React, { useState, type FormEvent } from 'react';

type SignupFormState = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup: React.FC = () => {
  const [form, setForm] = useState<SignupFormState>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!form.fullName.trim() || !form.email.trim() || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Placeholder for signup API call
    setSuccess('Signup successful. You can now log in.');
    setForm({ fullName: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="signup-page" style={{ maxWidth: 420, margin: '0 auto', padding: 24 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Create an Account</h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Full Name
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            style={{ padding: 12, borderRadius: 4, border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@example.com"
            required
            style={{ padding: 12, borderRadius: 4, border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter a password"
            required
            style={{ padding: 12, borderRadius: 4, border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            style={{ padding: 12, borderRadius: 4, border: '1px solid #ccc' }}
          />
        </label>

        {error && <p style={{ color: '#b00020', margin: 0 }}>{error}</p>}
        {success && <p style={{ color: '#006400', margin: 0 }}>{success}</p>}

        <button
          type="submit"
          style={{ padding: 12, borderRadius: 4, border: 'none', background: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
