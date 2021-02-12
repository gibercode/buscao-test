import { useState } from 'react';
import styles from './style.module.scss';

const Footer = () => {

  const [ email, setEmail ] = useState('');
  const [ isValid, setIsValid ] = useState(0);

  const newsletterInput = (input) => {
    const value = input.target.value;
    const regex = new RegExp(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/);
    const result = regex.test(value);

    setEmail(value);
    if(value.length == 0) return setIsValid(0);
    !result ? setIsValid(2) : setIsValid(1);
  }

  const sendData = () => console.log(email);

  return (
    <div className={styles._general}>
      <div className={styles._content}>
        <div className={styles._section}>
          <p>CONTACT US</p>

          <ul>
            <li>+ 44 345 678 903</li>
            <li>adobexd@mail.com</li>
            <li>find a store</li>
          </ul>
        </div>

        <div className={styles._section}>
          <p>CUSTOMER SERVICE</p>

          <ul>
            <li>Contact us</li>
            <li>Ordering & payment</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={styles._section}>
          <p>INFORMATION</p>
          <ul>
            <li>About Adobe XD Kit</li>
            <li>Work with US</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Press Enquiries</li>
          </ul>
        </div>

        <div className={styles._suscription}>
          <p className={styles._subscribe} > Subscribe to AdobeXd Via Email</p>
          <p className={styles._paragraph}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>

          <div className={styles._inputParent}>
            <input type='text' className={isValid === 0 || isValid === 1 ? styles._input : styles._inputError} placeholder='Email address' value={email} onChange={newsletterInput} />
            <button className={styles._subscribeBtn} onClick={isValid == 1 ? sendData : () => {}} > SUBSCRIBE </button >
          </div>
        </div>

        <div className={styles._lastSection}>
          <p>© AdobeXD Kit 2017</p>
        </div>
      </div>

    </div>
  )
};

export default Footer;
