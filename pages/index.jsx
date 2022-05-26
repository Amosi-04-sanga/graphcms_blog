import Head from 'next/head'
import PostCard from "../components/PostCard"
import Categories from '../components/Categories'
import PostsWidget from '../components/PostsWidget'
import Author from '../components/Author'
import styles from '../styles/Home.module.css'
import { getPosts } from '../services'


export default function Home({ posts }) {

  return (
    <>
      <Head>
        <title>mosdev blog</title>
      </Head>

      <div className="container mx-auto md:py-4 mb-8">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-1 md:col-span-8">
            <img className='block mx-auto mt-2' width="300px" height="50px" src="/welcome.webp" alt="" />
            <h1 className='text-center text-3xl capitalize' >latest blog articles</h1>
            <div className={styles.postsContainer}>
              {

                posts.map((post, index) => (
                  <div key={index} className="container">
                    < PostCard post={post.node} />
                  </div>
                ))

              }
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 text-sm px-4">
            <div className="md:sticky top-16">
              < PostsWidget />
              <div className={styles.underline}></div>
              < Categories />
              <div className={styles.underline}></div>
              < Author />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export async function getStaticProps(context) {

  const posts = (await getPosts()) || []

  return {
    props: { posts }, // will be passed to the page component as props
  }

}


