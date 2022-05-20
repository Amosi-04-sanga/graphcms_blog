import { getPosts, getPostDetails } from '../../services'
import PostDetail from '../../components/PostDetail'
import Comments from '../../components/Comments'
import CommentsForm from '../../components/CommentsForm'
import Categories from '../../components/Categories'
import PostWidget from '../../components/PostsWidget'


const PostDetails = ({ post }) => {

    return (
        <div className='container pl-14' >
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-8">
                    < PostDetail post={post} />
                    < CommentsForm slug={post.slug} />
                    < Comments slug={post.slug} />
                </div>
                <div className="col-span-1 md:col-span-4">
                    <div className="sticky top-20">
                        <PostWidget  />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostDetails

// slug={post.slug} categories={post.categories.map((category) => category.slug)}

export async function getStaticProps({ params }) {

    const data = await getPostDetails(params.slug)

    return {
        props: { post: data }, // will be passed to the page component as props
    }

}

export async function getStaticPaths() {
    const posts = await getPosts()

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false
    };
}