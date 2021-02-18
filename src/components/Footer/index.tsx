import styles from './style.module.scss';

const Footer = () => (
  <footer className={styles._general}>
    <div className={styles._content}>
      <div className={styles._socialMedia}>
        <div className={styles._link}>
          <p className={styles._title}>INSTAGRAM</p>
          <p className={styles._text}>@buscao_</p>
        </div>

        <div className={styles._linkTwo}>
          <p className={styles._title}>TWITTER</p>
          <p className={styles._text}>@buscao_</p>
        </div>

        <div className={styles._linkThree}>
          <p className={styles._title}>CONTÁCTANOS</p>
          <p className={styles._text}>info@buscao.com</p>
        </div>
      </div>

      <div className={styles._logos}>
        <div className={styles._logo}>
          <a href='https://www.thecodeworkers.com' target='_blank'>
            <img src='images/logos/tcw-logo.svg' />
          </a>
        </div>

        <div>
          <img src='images/logos/banana-logo.svg' />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
