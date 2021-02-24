import { memo, useState } from 'react'
import { paginate } from '../../utils'
import Card from '../Card'
import Pagination from '../Pagination'
import Currency from '../Currency'
import styles from './styles.module.scss'

const perPage = 6

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
                  <Currency currenciesData={{ currencies: post.commerce.paymentmethods }}>
                    <Card
                      name={post.title}
                      address={post.commerce.subsidiary ? post?.commerce?.subsidiary[0]?.address : null}
                      url={post.commerce?.image}
                      description={post.commerce?.description}
                      phone={[post?.commerce?.subsidiary[0]?.phoneNumber, '_leftCard']}
                    />
                  </Currency>
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
