import jwt from 'jsonwebtoken';

export const generateToken = (userData,tokenSecurity) => {
  const token = jwt.sign(userData, tokenSecurity.toString('utf-8'), { expiresIn: '30d',algorithm: 'HS256'});
  return token;
};

export const verifyToken = (token,tokenSecurity) => {
  try {
    const decoded = jwt.verify(token, tokenSecurity);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
};