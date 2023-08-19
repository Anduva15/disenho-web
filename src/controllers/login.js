
import User from '../schemas/user.js';
import * as bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const saltRounds = 10;

export const createLogin = async (req, res) => {
  const { login, password } = req.body;
  
  try {
    const user = await User.findOneByUsername(login );
    if (!user) {
      return res.status(401).json({message: 'Invalid credentials' });
    }
    
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ });
  }
};