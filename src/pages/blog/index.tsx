import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';
import styles from '../../../assets/styles/Home.module.css';
import blogStyles from '../../../assets/styles/Blog.module.css';

const Blog = ({ allPosts: { edges } }) => (
  <div className={styles.container}>
    <Head>
      <title>Blog articles page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Latest blog articles</h1>
      <hr />
      <section>
        {edges.map(({ node }) => (
          <div className={blogStyles.listitem} key={node.id}>
            <div className={blogStyles.listitem__content}>
              <h2>{node.title}</h2>
              <Link href={`/blog/${node.slug}`}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export const getServerSideProps: GetServerSideProps = async() => {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}

export default Blog