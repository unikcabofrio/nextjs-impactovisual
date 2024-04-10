import jwt from 'jsonwebtoken';

const tokenSecurity = "b05b073b1d5a472c03be6178cc2432b9e0f5a61a9fb2261c3d4860a5740f8439"

export const generateToken = (userData) => {
  const token = jwt.sign(userData, tokenSecurity, { expiresIn: '30d' });
  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, tokenSecurity);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
};