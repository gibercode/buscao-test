import styles from '../../public/styles/Home.module.scss'
import { Navbar } from '../components'
import { wrapper } from '../store'
import { getResources } from '../store/actions'

const Home = () => {
  return (
    <div className={styles._container}>
      <Navbar />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Home
