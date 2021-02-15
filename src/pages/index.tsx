import { getResources } from '../store/actions'
import { wrapper } from '../store'
import { Navbar } from '../components'
import styles from '../../public/styles/Home.module.scss'
import Welcome from '../components/Welcome/welcome';

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
