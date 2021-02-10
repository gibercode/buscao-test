import Head from 'next/head'
import styles from '../../public/styles/Home.module.scss'
import Link from 'next/link'
import { Navbar } from '../components'
import { wrapper } from '../store'
import { getResources, getFeatured } from '../store/actions'
import { FeaturedSlider } from '../components';


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
