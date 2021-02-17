import { useState } from 'react'
import { Pagination, Card } from '../components'
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

const perPage = 6

const Testv = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', paddingRight: '20%', paddingLeft: '20%' }}>
          {
            paginate(posts, page, perPage).map((post, index) => {
              return (
                <div key={index} style={{ flex: '1 0 40%', margin: 25 }}>
                  <Card name={post.title} />
                </div>
              )
            })
          }
        </div>
        <div style={{ display: 'flex', height: '10vh', justifyContent: 'center', alignItems: 'flex-end' }}>
          <Pagination currentPage={page} items={posts} perPage={perPage} changePage={setPage}/>
        </div>
      </div>
    </>
  )
}

export default Testv
