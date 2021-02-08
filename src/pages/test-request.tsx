import React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { getCategories } from '../store/actions'
import { wrapper } from '../store';

const TestRequest: NextPage = () => {
  const { categories } = useSelector(state => state.category);

  return (
    <div>
      {
        categories.map((category, index) => (
          <ul key={index}>{category.name}</ul>
        ))
      }
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getCategories())
)

export default TestRequest
