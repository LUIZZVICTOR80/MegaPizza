import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
      // Verificar se o usuário já existe
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
          return res.status(400).json({ message: 'Email já está em uso.' });
      }

      // Hash da senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Criar um novo usuário
      const user = await User.create({
          name,
          email,
          password: hashedPassword,
          createdAt: new Date(),
      });

      res.status(201).json({ message: 'Usuário criado com sucesso. \nVocê será redirecionado para a página de Login.', user });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar o usuário.' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Encontrar o usuário pelo email
      const user = await User.findOne({ where: { email } });
      if (!user) {
          return res.status(400).json({ message: 'Usuário não encontrado.' });
      }

      // Comparar a senha
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(400).json({ message: 'Senha incorreta.' });
      }

      // Gerar JWT
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: '1h', 
      });

      res.status(200).json({ message: 'Login bem-sucedido. \nVocê será redirecionado para a página do Administrador.', token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao fazer login.' });
  }
};
