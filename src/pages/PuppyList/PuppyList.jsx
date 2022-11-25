import './PuppyList.css'
import PuppyCard from "../../components/PuppyCard"
import Pagination from '../../components/Pagination'

const PuppyList = (props) => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>
      {!props.puppies.length && <h2>Oops! No puppies here!</h2>}
      <ul>
        {props.puppies.map((puppy, idx) => (
          <PuppyCard
            key={idx}
            puppy={puppy}
            handleRemovePuppy={props.handleRemovePuppy}
          />
        ))}
      </ul>
      <Pagination handlePagination={props.handlePagination} />
    </main>
  )
}

export default PuppyList