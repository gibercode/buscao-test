import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { getResources } from '../store/actions'
import { Navbar, Footer, Slider, Banner, FeaturedSlider } from '../components'
import styles from '../../public/styles/Home.module.scss'

const Home = () => {
  const {
    page: { homePage: { home } },
    resource
  } = useSelector(state => state)

  return (
    <div className={styles._container}>
      <Navbar resource={resource} />
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
