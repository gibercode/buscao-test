import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { getResources } from '../store/actions'
import { wrapper } from '../store'
import { Navbar } from '../components'
import styles from '../../public/styles/Home.module.scss'

const Home = () => {
  const store = useStore()

  useEffect(() => {
    store.__persistor.purge()
    store.__persistor.persist()
  }, [])

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
