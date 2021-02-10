import Head from 'next/head';
import { wrapper } from '../../store';
import { getResources } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Navbar, Search } from '../../components';
import { NextPage } from 'next';
import styles from './styles.module.scss';

const Blog: NextPage = () => {

  const { filterPosts } = useSelector(state => state.post)

  return (
    <div className="blogSpot">
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.mainSpot}>
        <Navbar />
        <Search />
        <h1 className="">Latest blog articles</h1>
        <hr />
        <section>
          {filterPosts.map(node => (
            <div className="Posts" key={node.id}>
              <h2>{node.title}</h2>
            </div>
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
