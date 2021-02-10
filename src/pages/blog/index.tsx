import Head from 'next/head';
import Link from 'next/link';
import { wrapper } from '../../store';
import { countryPost, getPosts, getStatePosts, getTitlePosts } from '../../store/actions';
import { connect } from 'react-redux';
import { Search } from '../../components';

const Blog = ({ dispatch, posts }) => {

  const { filterPosts } = posts

  return (
    <div className="blogSpot">
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="mainSpot">
        <label>Pais
          <select name="country" onChange={(event) => dispatch(countryPost(event.target.value))} >
            <option value="Venezuela">Venezuela</option>
            <option value="Espana">Espana</option>
            <option value="Colombia">Colombia</option>
          </select>
        </label>
        <Search />
        <h1 className="">Latest blog articles</h1>
        <hr />
        <section>
          {filterPosts.map(node => (
            <div className="Posts" key={node.id}>
              <h2>{node.title}</h2>
              <Link href={`/blog/${node.slug}`}>
                <a>Read More</a>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  ({ store }) => { store.dispatch(getPosts()); }
)

export default connect((state) => ({
  posts: state.posts,
}))(Blog)
