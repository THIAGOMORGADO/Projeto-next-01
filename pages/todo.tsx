import { Todo } from "@/types/todo"

type Props = {
  todo: Todo[]
}

export default function Todo({todo} : Props) {
  return(
    <div className="">
      <h1>Lista</h1>
      <ul>
        {
          todo.map((todoItem, index)=>(
            <li key={index}>
              <a href="http://">
                {todoItem.title} -  {todoItem.completed.toString()}
              </a> 
            </li>
          ))
        }
      </ul>
    </div>
      
  )
}

// Server Side Rendering Ira fazer Requisição toda vez que carregar, 
// mesmo estado em producao ou dev

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const todolist: Todo[] = await res.json();

  return{
    props: {
      todo: todolist
    }
  }
}