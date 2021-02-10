import Head from 'next/head'
import styles from '../../public/styles/Home.module.scss'
import Link from 'next/link'
import { Navbar, Footer } from '../components'
import { wrapper } from '../store'
import { getResources } from '../store/actions'

const Home = () => {
  return (
    // <div className={styles._container}>
      /* <Navbar /> */
      <Footer />
    // </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
