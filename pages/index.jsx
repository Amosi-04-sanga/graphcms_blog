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
        <title>sangaamos blog</title>
      </Head>

      <div className="container p-2 mx-auto md:py-4 mb-8">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-1 md:col-span-8">
            <h1 className='text-center text-3xl mb-4 capitalize' >latest blog articles</h1>
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
              <div className={`${styles.underline} mt-4`}></div>
              < Categories />
              <div className={`${styles.underline} mb-4`}></div>
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


