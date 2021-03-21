import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const res = await fetch('http://mirax-wp.zzz.com.ua/wp-json/wp/v2/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },

    revalidate: 0.5, 
  }
}

export default function Home({posts}) {

  useEffect(() => {
   console.log(posts);
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <ul>
      {posts.map((post) => (
        <li key={post.slug}>{post.title.rendered}</li>
      ))}
    </ul>
      </main>

      <footer className={styles.footer}>
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}


