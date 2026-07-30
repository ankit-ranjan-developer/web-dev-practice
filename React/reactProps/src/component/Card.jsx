// function Card(props) {

function Card({name="Guest" , post="undesignated",img}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img class="size-48 shadow-xl rounded-md" alt="" src={img} />
      </div>
      <div class="flex">
        <span class="text-2xl font-medium">{name}</span>
        <span class="font-medium text-sky-500">{post}</span>
      </div>
    </div>
  );
}

export default Card;