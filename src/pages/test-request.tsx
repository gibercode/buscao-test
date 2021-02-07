// import { useSelector, connect } from 'react-redux'
// import { getCategories } from '../graphql/querys'
// import { wrapper } from '../store'

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({store, req, res, ...etc}) => {
//       // console.log('2. Page.getServerSideProps uses the store to dispatch things');
//       // store.dispatch({type: 'TICK', payload: 'was set in other page'});
//       store.dispatch({type: 'TEST', payload: { title: 'was set in other page' }});
//       // return { props: { categories: [] } }
//   }
// );

// const TestRequest = (props) => {

//   console.log(props);

//   return (
//     <div>
//       {/* {
//         categories.map((category, index) => (
//           <ul key={index}>{category.name}</ul>
//         ))
//       } */}
//     </div>
//   )
// }

// // export const getServerSideProps = async ({ store }) => {
// //   console.log(store);

// //   const categories = await getCategories()
// //   return { props: { categories } }
// // }


// // TestRequest.getInitialProps = async ({ store }) => {
// //   store.dispatch({type: 'TEST_ASYNC'});
// //   const categories = await getCategories()

// //   return {
// //     categories
// //   }
// // };

// // export default TestRequest
// export default connect((state) => state)(TestRequest);

import React from 'react';
import {NextPage} from 'next';
import {useSelector} from 'react-redux';
import {wrapper} from '../store';
import { changeStateAsync } from '../store/actions'


const TestRequest: NextPage = () => {
  const { test } = useSelector(state => state);

  return (
    <div>{test.title}</div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    // store.dispatch({type: 'TEST', payload: { title: 'was set in other pages' }});
    store.dispatch(changeStateAsync())
  }
)

export default TestRequest
