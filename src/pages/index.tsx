import Head from 'next/head';
import styles from '../../public/styles/Home.module.scss';
import Link from 'next/link';
import { Navbar } from '../components';

const Home = () => {
  return (
    <div className={styles._container}>
      <Navbar />
    </div>
  )
}

export default Home;
