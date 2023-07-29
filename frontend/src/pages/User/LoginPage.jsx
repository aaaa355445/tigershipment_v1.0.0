import React, {useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Loader from "../../components/shared/Loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import {clearErrors, login} from '../../actions/userAction';
import { useNavigate } from "react-router";

const LoginPage = () => {

  const dispatch = useDispatch();
  const {error, loading, isAuthenticated } = useSelector(state => state.user)
  const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    
    const loginSubmit = (e) => {
      e.preventDefault();
      dispatch(login(loginEmail, loginPassword))
    }

    useEffect(() => {
      if (error){
        setErrorMessage(error);
        dispatch(clearErrors());
      }
      if (isAuthenticated){
        navigate("/admin/dashboard")
      }
    }, [dispatch, error, setErrorMessage, isAuthenticated, navigate])
    
  if (loading) return <Loader message={"Please wait"} />  

  return (
    <>
      <div className={styles.LoginContainer}>
        <div className={styles.LoginBox}>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <h2>LOGIN</h2>
          <form onSubmit={loginSubmit} className={styles.loginForm}>
            <div className={styles.loginEmail}>
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className={styles.loginPassword}>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className={styles.loginBtn} />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
