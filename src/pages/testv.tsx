import { useState } from 'react'
import { Pagination } from '../components'
import { paginate } from '../utils'

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
  { title: 'Local A' },
]

const perPage = 15

const Testv = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <div>
        {
          paginate(posts, page, perPage).map((post, index) => {
            return (
              <div key={index}>{post.title}</div>
            )
          })
        }
      </div>
      <Pagination items={posts} perPage={perPage} changePage={setPage}/>
    </>
  )
}

export default Testv
