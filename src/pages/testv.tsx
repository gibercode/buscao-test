import { Result, Banner } from '../components'
import { useSelector } from 'react-redux'

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

const Testv = () => {
  const homePage = useSelector(state => state?.page?.homePage?.home)

  return (
    // <Result posts={posts} />
    <Banner section={homePage?.secundaryBanner} />
  )
}

export default Testv
