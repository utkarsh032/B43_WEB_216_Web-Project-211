import jwt from 'jsonwebtoken'

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
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "user does not Exists" });
    }

    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.status(200).json({ message: "Login successful", token: token, user: user });

  } catch (error) {
    res.status(500).json({ message: 'Invalid Credential' })
  }
}