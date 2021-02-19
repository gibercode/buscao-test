import { memo, useState } from 'react'
import { paginate } from '../../utils'
import Card from '../Card'
import Pagination from '../Pagination'
import styles from './styles.module.scss'

const perPage = 1

const Result = ({ posts }) => {
  const [page, setPage] = useState(1)

  return (
    <div className={styles._container}>
      <div className={styles._fixedArea}>
        <div className={styles._cardContainer}>
          {
            paginate(posts, page, perPage).map((post, index) => {
              return (
                <div key={index} className={styles[`_cardElement${index}`]}>
                  <Card name={post.title} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles._paginationContainer}>
        <Pagination currentPage={page} items={posts} perPage={perPage} changePage={setPage}/>
      </div>
    </div>
  )
}

export default memo(Result)
