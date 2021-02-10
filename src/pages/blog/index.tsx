import Head from 'next/head';
import Link from 'next/link';
import { wrapper } from '../../store';
import { getPosts, getSelect } from '../../store/actions';
import { useSelector } from 'react-redux';
import { Search } from '../../components';
import { NextPage } from 'next';

const Blog: NextPage = () => {

  //const { filterPosts } = useSelector(state => state.post)
  const select = useSelector(state => state.select)
  const { countries } = select
  return (
    <div className="blogSpot">
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="mainSpot">
        <label>Pais
          <select name="country" >
            {countries.map((country, index) => (<option value={country.slug} key={index}>{country.name}</option>))}
          </select>
        </label>
        <Search selects={select} />
        <h1 className="">Latest blog articles</h1>
        <hr />
        <section>
          {/*filterPosts.map(node => (
            <div className="Posts" key={node.id}>
              <h2>{node.title}</h2>
              <Link href={`/blog/${node.slug}`}>
                <a>Read More</a>
              </Link>
            </div>
          ))*/}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => store.dispatch(getSelect())
)

export default Blog