const PuppyList = () => {
  return (
    <main className="list">
      <h1>PUPPY LIST</h1>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </main>
  )
}

export default PuppyList