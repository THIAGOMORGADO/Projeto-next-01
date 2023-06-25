import { Post } from "@/types/Post"
import {GetStaticProps} from 'next'
import { ParsedUrlQuery } from "querystring"
type Props = {
  post: Post
}

export default function BlogItem({post} : Props) {
  return(
    <div className="">
      <h1>Blog</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

// Listando os id da api
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts') 
  const posts: Post[] = await response.json();
  const paths = posts.map(post => ({
    params: {
      id: post.id.toString()
    }
  }))
  return {paths, fallback: false}
}

interface IParams extends ParsedUrlQuery {
  id: string
}
// Retornando conteuudo que foi armazenado em cache 
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await response.json();
  return{
    props: {
      post
    }
  }
}