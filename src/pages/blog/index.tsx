import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';
import { useState } from 'react';
import { Filter } from '../../utils';

const Blog = ({ allPosts: { nodes } }) => {

  const [data, setData] = useState(nodes)

  const setFilterData = (event) => {
    setData(Filter(nodes, event.target.value, event.target.name))
  }

  return (
    <div className="">
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="">
        <label>pais<input name="country" onKeyUp={setFilterData} /></label>
        <label>estado<input name="estado" onKeyUp={setFilterData} /></label>
        <label>nombre <input name="title" onKeyUp={setFilterData} /> </label>
        <h1 className="">Latest blog articles</h1>
        <hr />
        <section>
          {data.map(node => (
            <div className="" key={node.id}>
              <div className="">
                <h2>{node.title}</h2>
                <Link href={`/blog/${node.slug}`}>
                  <a>Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts
    }
  };
}

export default Blog