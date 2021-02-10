import Head from 'next/head'
import styles from '../../public/styles/Home.module.scss'
import Link from 'next/link'
import { Navbar } from '../components'
import { wrapper } from '../store'
import { getResources } from '../store/actions'
import Welcome from '../components/welcome';

const Home = () => {
  return (
    <div >
 {/* <Navbar /> */}
      <Welcome />

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
