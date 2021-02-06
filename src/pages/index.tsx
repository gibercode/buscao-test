import Head from 'next/head';
import styles from '../../public/styles/Home.module.scss';
import Link from 'next/link';
import { FeaturedSlider } from '../components';

const Home = () => {
  return (
    // <div className={styles._container}>
      <FeaturedSlider />
    // </div>
  )
}

export default Home;
