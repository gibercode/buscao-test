import { getResources } from '../store/actions'
import { wrapper } from '../store'
import { Navbar } from '../components'
import styles from '../../public/styles/Home.module.scss'

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
