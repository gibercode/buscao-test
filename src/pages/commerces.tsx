import { useSelector } from 'react-redux'
import { Result, Navbar, Welcome } from '../components'
import styles from '../../public/styles/Commerces.module.scss'

const posts = [
  { title: 'Local A' },
  { title: 'Local B' },
  { title: 'Local C' },
  { title: 'Local D' },
  { title: 'Local E' },
  { title: 'Local F' },
  { title: 'Local H' },
  { title: 'Local I' },
  { title: 'Local J' },
  { title: 'Local K' },
  { title: 'Local L' },
  { title: 'Local M' },
  { title: 'Local N' },
  { title: 'Local P' },
  { title: 'Local Q' },
  { title: 'Local R' },
  { title: 'Local S' },
  { title: 'Local T' },
  { title: 'Local V' },
  { title: 'Local U' },
  { title: 'Local W' },
  { title: 'Local Y' },
  { title: 'Local Z' },
  { title: 'Local A' },
  { title: 'Local A' },
  { title: 'Local A' },
  { title: 'Local A' },
  // { title: 'Local A' },
]

const Commerces = () => {
  const {
    resource,
    post: { filterPosts, filter: { title } },
    page: { homePage: { home } }
  } = useSelector(state => state)

  return (
    <>
      <Navbar resource={resource} />
      <Welcome section={home?.principalBanner} />
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
