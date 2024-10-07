import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Follow = () => {
  const { followers, following } = useSelector((state) => state.post);
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <div className="row">
      <div className="col-md-4">
        <h3 className="text-primary">{followers.length} Followers</h3>
        <hr />
        {followers.map((person, i) => (
          <div key={i}>
            <div>
              <Link to={`/user/${person._id}`}>
                <img
                  style={{
                    borderRadius: '50%',
                    border: '1px solid black',
                  }}
                  className="float-left mr-2"
                  height="30px"
                  width="30px"
                  onError={(i) =>
                    (i.target.src = `${(
                      <Typography variant="h6">{user?.result.name}</Typography>
                    )}`)
                  }
                  src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`}
                  alt={person.name}
                />
                <div>
                  <p className="lead">{person.name}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="col-md-4">
        <h3 className="text-primary">{following.length} Following</h3>
        <hr />
        {following.map((person, i) => (
          <div key={i}>
            <div>
              <Link to={`/user/${person._id}`}>
                <img
                  style={{
                    borderRadius: '50%',
                    border: '1px solid black',
                  }}
                  className="float-left mr-2"
                  height="30px"
                  width="30px"
                  onError={(i) =>
                    (i.target.src = `${(
                      <Typography variant="h6">{user?.result.name}</Typography>
                    )}`)
                  }
                  src={`${process.env.REACT_APP_API_URL}/user/photo/${person._id}`}
                  alt={person.name}
                />
                <div>
                  <p className="lead">{person.name}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follow;
