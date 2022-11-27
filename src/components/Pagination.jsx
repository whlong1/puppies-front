const Pagination = ({ handlePagination }) => {
  return (
    <div>
      <button onClick={() => handlePagination(-1)}>Back</button>
      <button onClick={() => handlePagination(1)}>Next</button>
    </div>
  )
}

export default Pagination