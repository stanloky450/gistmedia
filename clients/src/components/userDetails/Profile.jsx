import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import { useStyles } from './styles';
import Follow from '../social/Follow';
import DefaultProfile from '../images/avatar.jpg';

const Profile = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: 'none', tags: post?.tags.join(',') })
      );
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => navigate(`/posts/${_id}`);
  const user = JSON.parse(localStorage.getItem('profile'));

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.name}
          </Typography>

          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>

          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(user.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"></Typography>
          <Divider style={{ margin: '20px 0' }} />

          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile || <DefaultProfile />}
            alt={post.title}
          />
        </div>
      </div>
      <CommentSection post={post} />

      <Follow
        followers={user.followers}
        following={user.following}
        posts={posts}
      />
    </Paper>
  );
};

export default Profile;
