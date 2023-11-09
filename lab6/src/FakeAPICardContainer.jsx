import FakeAPICard from "./FakeAPICard";
export default function FakeAPICardContainer(todos){
return(
    <div>
        {todos.map((t) => 
        <FakeAPICard
        key ={t.id}
        title={t.title}
        />
        )}
    </div>
)
}