import { useState } from "react"

const NewPuppy = (props) => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    age: 0,
    color: 'Grey',
    ears: 'Drop'
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddPuppy(form)
  }

  return (
    <main className="new">
      <h1>NEW PUPPY</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />

        <label htmlFor="title-input">Age</label>
        <input
          required
          min="0"
          type="number"
          name="age"
          id="age-input"
          value={form.age}
          placeholder="Age"
          onChange={handleChange}
        />

        <label htmlFor="breed-input">Breed</label>
        <input
          required
          type="text"
          name="breed"
          id="breed-input"
          value={form.breed}
          placeholder="Breed"
          onChange={handleChange}
        />

        <label htmlFor="color-input">Color</label>
        <select
          required
          name="color"
          id="color-input"
          value={form.color}
          onChange={handleChange}
        >
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="White">White</option>
          <option value="Golden">Golden</option>
        </select>

        <label htmlFor="ears-input">Ears</label>
        <select
          required
          name="ears"
          id="ears-input"
          value={form.ears}
          onChange={handleChange}
        >
          <option value="Drop">Drop</option>
          <option value="Pointy">Pointy</option>
          <option value="Button">Button</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewPuppy