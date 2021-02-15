import React, { memo } from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'
import { ArrowLeft, ArrowRight } from '../../../public/images/icons'

const Pagination = ({ items, perPage, changePage, currentPage, color = '#1652F0', activeColor = '#000' }) => {
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
    <div className={styles._container}>
      <ArrowLeft
        color={color}
        // onClick={() => firstOrLastPage(totalPages)}
      />
      {
        pageNumbers.map((pageNumber, index) => (
          <div key={index} className={styles._numberContainer}>
            <span
              className={styles._number}
              style={{ color: pageNumber == currentPage ? activeColor : color }}
              onClick={() => determinatePages(pageNumber)}
            >
              {pageNumber}
            </span>
          </div>
        ))
      }
      <ArrowRight
        color={color}
        // onClick={() => firstOrLastPage(totalPages)}
      />
    </div>
  )
}

export default memo(Pagination)
