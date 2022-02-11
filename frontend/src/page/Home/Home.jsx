import React from "react";
import styles from "./Home.module.css";
import { Link , useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInStyle = {
    marginLeft: '10px',
    fontWeight: 'bold',
    color: '#0077FF',
    textDecoration:'none'
  }
  const history = useHistory();
  function startRegistration() {
    console.log('button clicked')
    history.push('/register')
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coderhouse !" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>

        <Button onClick={startRegistration} title="Get your username" />
        
        <div className={styles.signInWrapper}>
          <span>Have a invite text?</span>
          <Link style={ signInStyle } to="/login">Sign In</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
