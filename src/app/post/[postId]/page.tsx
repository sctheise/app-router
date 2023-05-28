
// export async function generateStaticParams() {
//     const post = ['post-one', 'post-two']

import { Metadata } from "next"
import { type } from "os"

//     return post.map((post) => {
//         return {
//             postId: post
//         }
//     })
// }

interface pageProps {
    params: {
        postId: string
    }
}

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export async function generateMetadata({params}: pageProps): Promise<Metadata>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json() as Post
    return{title: data.title}
}

const page = async({ params }: pageProps) => {
    return <div>hello</div>
}

export default page