import express from 'express';
import {
  getPosts,
  getPost,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  commentPost,
  getPostsBySearch,
  // addFollowing,
  // addFollower,
  // removeFollowing,
  // removeFollower,
} from '../controller/posts.js';

const router = express.Router();

import auth from '../middleware/auth.js';

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPosts);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

// router.put('/user/follow', auth, addFollowing, addFollower);
// router.put('/user/unfollow', auth, removeFollowing, removeFollower);

export default router;
