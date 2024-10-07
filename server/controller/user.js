import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/usermodel.js';

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '1h',
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: '1h',
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });

    console.log(error);
  }
};

// // follow unfollow

// export const addFollowing = (req, res, next) => {
//   User.findByIdAndUpdate(
//     req.body.userId,
//     { $push: { following: req.body.followId } },
//     (err, result) => {
//       if (err) {
//         return res.status(400).json({ error: err });
//       }
//       next();
//     }
//   );
// };

// export const addFollower = (req, res) => {
//   User.findByIdAndUpdate(
//     req.body.followId,
//     { $push: { followers: req.body.userId } },
//     { new: true }
//   )
//     .populate('following', '_id name')
//     .populate('followers', '_id name')
//     .exec((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       result.hashed_password = undefined;
//       result.salt = undefined;
//       res.json(result);
//     });
// };

// // remove follow unfollow

// export const removeFollowing = (req, res, next) => {
//   User.findByIdAndUpdate(
//     req.body.userId,
//     { $pull: { following: req.body.unfollowId } },
//     (err, result) => {
//       if (err) {
//         return res.status(400).json({ error: err });
//       }
//       next();
//     }
//   );
// };
