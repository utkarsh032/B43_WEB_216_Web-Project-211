import jwt from 'jsonwebtoken'
import User from '../models/UserModel.js';

// SignUp User
export const SignUpUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const checkEmail = await User.findOne({ email })
    if (checkEmail) {
      return res.status(400).json({ message: "Email Already Exists" });
    }
    const newUser = new User({ username, email, password })
    await newUser.save()
    res.status(201).json({ messaeg: "User SignUp Successfully", user: newUser })
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}


// LogInUsr

export const LogInUsr = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Compare password with the hashed password in the database
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};
