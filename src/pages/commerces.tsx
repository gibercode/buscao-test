import { useSelector } from 'react-redux'
import { Result, Navbar, Welcome } from '../components'
import styles from '../../public/styles/Commerces.module.scss'

const Commerces = () => {
  const {
    resource,
    post: { filterPosts, filter: { title } },
    page: { homePage: { home } }
  } = useSelector(state => state)

  return (
    <>
      <Navbar resource={resource} />
      <Welcome section={home?.principalBanner} title={title} />
      <div className={styles._resultsContainer}>
        {
          filterPosts.length ? (
            <Result posts={filterPosts} />
          ) : null
        }
      </div>
    </>
  )
}

export default Commerces
