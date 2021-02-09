import Head from 'next/head';
import styles from '../../public/styles/Home.module.scss';
import Link from 'next/link';
import { FeaturedSlider } from '../components';
import { useSelector } from 'react-redux';
import { getFeatured } from '../store/actions'
import { wrapper } from '../store';

const Home = () => {

  return (
    // <div className={styles._container}>
      <FeaturedSlider />
    // </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getFeatured())
)


export default Home;
