import {Post} from '../../types/Post'
type Props = {
  name: string;
  posts: Post[];
}

export default function blog({name, posts}: Props) {
  return(
    <>
      <h1>blog</h1>
      <h2>{name}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}><a href={`/blog/${post.id}`}>{post.title}</a></li>
        )
        )}
      </ul>
    </>
  )
}

// Essa requicao e carregada no build 
export async function getStaticProps () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts') 
  const posts: Post[] = await response.json();

  return{
    props: {
      name: "fernando",
      posts,
      
    },
    revalidate: 7200
  }
   
  
}