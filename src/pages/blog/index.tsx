import Head from 'next/head';
import { wrapper } from '../../store';
import { getResources } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Card, Currency, Navbar, Search } from '../../components';
import { NextPage } from 'next';
import styles from './styles.module.scss';

const Blog: NextPage = () => {

  const { filterPosts } = useSelector(state => state.post)
  console.log(filterPosts)

  return (
    <div className='blogSpot'>
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.mainSpot}>
        <Navbar />
        <Currency />
        <Search />
        <h1 className=''>Latest blog articles</h1>
        <hr />
        <section style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-around" }}>
          {filterPosts.map((node, index) => (
            <Currency key={index} currenciesData={{ currencies: node.commerce.paymentmethods }}>
              <Card name={node.title} />
            </Currency>
          ))}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getResources())
)

export default Blog
