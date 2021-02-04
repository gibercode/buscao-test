import Head from 'next/head';
import styles from '../../public/styles/Home.module.scss';
import Link from 'next/link';
import Welcome from '../components/welcome';

const Home = () => {

  return (
    <div className={styles.container}>
      <Welcome />
    </div>
  )
}

export default Home;
