import Head from 'next/head'
import PostCard from "../components/PostCard"
import Categories from '../components/Categories'
import PostsWidget from '../components/PostsWidget'
import { getPosts } from '../services'



const POSTS = [
  { title: "intro to react js", excerpts: "react js is created by facebook comunity" },
  { title: "new features in new version of next js", excerpts: "next js is created by ajjwgl fwhwg ..." }
]

export default function Home( {posts} ) {

/*  useEffect(() => {

    const fetchPosts = async () => {
      await getPosts()
        .then(res => {
          const {data} = res
          console.log(res)
        })
    }
    fetchPosts()

  }, [])

*/

  return (
    <>
      <Head>
        <title>mosdev blog</title>
      </Head>

      <div className="container mx-auto py-4 px-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-1 md:col-span-8">
            <h1 className='text-center text-3xl capitalize' >blog articles</h1>
            {
              posts.map((post, index) => (
                <div key={index} className="container">
                  < PostCard post={post.node} />
                </div>
              ))
            }
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="md:sticky relative top-16 bg-orange-200">
              < PostsWidget />
              < Categories />
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
    props: {posts}, // will be passed to the page component as props
  }
}


