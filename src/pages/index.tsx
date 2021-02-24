import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { getResources } from '../store/actions'
import { Navbar, Footer, Slider, Banner, FeaturedSlider, Welcome, Currency3D } from '../components'
import styles from '../../public/styles/Home.module.scss'
import Head from 'next/head'

const Home = () => {
  const {
    page: { homePage: { home } },
    resource
  } = useSelector(state => state)

  return (
    <div className={styles._container}>
      <Head>
        <title>Buscao</title>
      </Head>

      <Navbar resource={resource} />
      <Welcome section={home?.principalBanner}/>
      <Currency3D />
      <FeaturedSlider posts={resource?.posts} />
      <Banner section={home?.secundaryBanner} />
      <Slider page={home} />
      <Footer />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
