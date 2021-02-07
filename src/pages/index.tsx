import Head from 'next/head';
import styles from '../../public/styles/Home.module.scss';
import Link from 'next/link';
import {useSelector} from 'react-redux';

const Home = () => {
  const { test } = useSelector(state => state);

  return (
    <div className={styles.container}>
      <p>{test.title}</p>
      <p>Hello People</p>
    </div>
  )
}

export default Home;
