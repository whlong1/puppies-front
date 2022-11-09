import PuppyIcon from "./PuppyIcon"

const PuppyCard = ({ puppy, handleRemovePuppy }) => {
  return (
    <li>
      <section>
        <button onClick={() => handleRemovePuppy(puppy._id)}>
          X
        </button>
      </section>
      <PuppyIcon puppy={puppy} />
      <h2>{puppy.name.toUpperCase()}</h2>
      <p>A {puppy.age}-year-old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard