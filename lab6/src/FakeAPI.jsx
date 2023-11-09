import { useEffect, useState } from "react";
import FakeAPICardContainer from "./FakeAPICardContainer";

export default function FakeAPI() {
   const [todos, setData] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const fetchedData = await response.json();
    console.log(fetchedData)
     setData(fetchedData);
  }



   return (
     <div>
      <FakeAPICardContainer todos={todos}/>

    </div>
   );
 }
