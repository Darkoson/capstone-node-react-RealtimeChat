import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Signs from '../Signs/Signs';
import { Tween } from 'react-gsap';
import { GoogleLogin } from 'react-google-login';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthorizedAction } from '../../actions/setAuthorized'
import { setProfileDataAction } from '../../actions/setProfileDataAction'


function App(props) {
  let history = useHistory();
  console.log(props)
  const [title, setTitle] = useState('Login');
  function changeTitle(value) {
    setTitle(value)
  }
  const [location, setLocation] = useState('')
  function handlRedirection(location) {
    setLocation(location);
  }
  useEffect(() => {
    if (location === 'success') {
      history.push('/Profile');
    } else {
      // alert('sorry you are not registered')
    }
  }, [location])

  return (
    <Tween to={{ opacity: '1', rotation: '0' }} duration={1} ease="power1.in(1, 0.5)">
      <div className="app-body top-center-content">
        <Navbar act={title} changeAct={changeTitle} />
        <Signs act={title} changeUserData={props.changeUserData}
          changeAuth={props.changeAuth}
          changeLocation={handlRedirection} />
        <GoogleClientLogin
          changeUserData={props.changeUserData}
          changeAuth={props.changeAuth} />
      </div>
    </Tween>
  );
}

function GoogleClientLogin(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    if (response.profileObj) {
      console.log(response);
      const { profileObj } = response;
      let userobj = {
        email: profileObj.email,
        lname: profileObj.familyName,
        fname: profileObj.givenName,
        img: profileObj.imageUrl,
        googleid: response.googleId
      }

      Axios.post('http://localhost:5000/users/register/google', {
        userobj
      }).then(res => {
        if (res.data.code === '23505') {
          // alert('user already available')
          let userobj = {
            email: profileObj.email,
            lname: profileObj.familyName,
            fname: profileObj.givenName,
            img: profileObj.imageUrl,
            id: response.googleId
          }
          dispatch(setAuthorizedAction(true))
          dispatch(setProfileDataAction(userobj))
          history.push('/profile');
          /*
          
          props.changeUserData(userobj);
          history.push('/profile');
          */
          // props.changeAuth(true);
          // history.push('/profile');
          // props.changeUserData(userobj);
        } else {
          props.changeAuth(true);
          props.changeUserData(res.data[0]);
          history.push('/profile');
        }
        // props.changeAuth(true);
        // props.changeUserData(res.data[0]);
        // history.push('/profile');//redirect to profile page
      }).catch(reson => {
        console.log(reson)
      });

      console.log(userobj)

    } else {
      const { error } = response;
      switch (error) {
        case 'popup_closed_by_user':
          alert('You closed your google login form')
          break;

        default:
          console.log(error)
          alert('Oh crap, google authentication failed, just retry')
          break;
      }
    }

  }

  return (
    <GoogleLogin
      clientId="226960538156-vos2q1jhg0uu2h0qa5gdfbf3fp37ichf.apps.googleusercontent.com"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      isSignedIn={true}
      buttonText="Join Linkers "
    />
  )
}

export default App;
