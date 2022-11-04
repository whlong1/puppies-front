import PuppyCard from "../components/PuppyCard"

const PuppyList = (props) => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>
      <ul>
        {props.puppies.map((puppy, idx) => (
          <PuppyCard key={idx} puppy={puppy} />
        ))}
      </ul>
    </main>
  )
}

export default PuppyList