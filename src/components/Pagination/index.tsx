import React, { memo } from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'

const Pagination = ({ items, perPage, changePage }) => {
  const [firstPage, setFirstPage] = useState(1)

  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / perPage)

  const [lastPage, setLastPage] = useState(totalPages > 5 ? 5 : totalPages)

  const pageNumbers = []
  for (let i = firstPage; i <= lastPage; i++) pageNumbers.push(i)

  const determinatePages = (page) => {
    if(page == lastPage && page != totalPages) changeNumberPages(1)
    if(page == firstPage && page != 1) changeNumberPages(-1)

    changePage(page)
  }

  const changeNumberPages = operator => {
    setFirstPage(firstPage + operator)
    setLastPage(lastPage + operator)
  }

  const firstOrLastPage = (page: number) => {

  }

  return (
    <ul className={styles._pagination}>
      <li><span onClick={() => firstOrLastPage(1)}>«</span></li>
      {
        pageNumbers.map(pageNumber => (
          <li key={pageNumber} onClick={() => determinatePages(pageNumber)}><span>{pageNumber}</span></li>
        ))
      }
      <li><span onClick={() => firstOrLastPage(totalPages)}>»</span></li>
    </ul>
  )
}

export default memo(Pagination)
