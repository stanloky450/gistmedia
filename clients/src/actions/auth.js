import * as actionType from '../constances/actionsTypes';
import * as api from '../api/index.js';
import { useNavigate } from 'react-router-dom';

export const signin = (formData, navigate) => async (dispatch) => {
  //   const navigate = useNavigate();
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: actionType.AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  //   const navigate = useNavigate();
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: actionType.AUTH, data });

    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
