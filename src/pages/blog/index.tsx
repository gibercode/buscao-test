import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';
import styles from '../../../assets/styles/Home.module.css';
import blogStyles from '../../../assets/styles/Blog.module.css';
import { useState } from 'react';

const Blog = ({ allPosts: { nodes } }) => {

  const [filter] = useState({
    paymentMethods: '',
    pais: '',
    title: '',
    estado: '',
  });

  const [data, setData] = useState(nodes);

  const filterSearch = (obj) => {
    let validation = true;
    for (let key in filter) {
      if (filter[key]) {
        let validFilter = false;
        if (obj[key]) validFilter = (obj[key] == filter[key])
        if (obj['comercio'][key]) validFilter = (obj["comercio"][key] == filter[key])
        if(obj['comercio']['sucursales'] && key == 'estado'){
          for(let sucursal of obj['comercio']['sucursales']){
            if(sucursal[key]){
              validFilter = (sucursal[key] == filter[key])
              if(validFilter) break;
            }
          }
        }
        validation = validation && validFilter;
      }
    }
    return validation
  }

  const search = () => {
    let inicio = performance.now();
    console.log("inicio: 0");
    let searchData = nodes.filter(filterSearch);
    setData(searchData)
    console.log("fin: " + (performance.now() - inicio));
  }

  const setFilterData = (event) => {
    filter[event.target.name] = event.target.value
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <label>Metodo de pago <input name="paymentMethods" onKeyUp={setFilterData} /></label>
        <label>pais<input name="pais" onKeyUp={setFilterData} /></label>
        <label>estado<input name="estado" onKeyUp={setFilterData} /></label>
        <label>nombre <input name="title" onKeyUp={setFilterData} /> </label>
        <button onClick={search}>Buscar</button>
        <h1 className={styles.title}>Latest blog articles</h1>
        <hr />
        <section>
          {data.map(node => (
            <div className={blogStyles.listitem} key={node.id}>
              <div className={blogStyles.listitem__content}>
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