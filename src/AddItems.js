import { FaPlus } from "react-icons/fa"

const AddItems = () => {
  return (
    <form className="addForm">
        <label htmlFor="addForm"> Add Item </label>
        <input
        autoFocus
        id="AddItem"
        type="text"
        placeholder="Add item here" 
        required   
        ></input>

        <button
            type="submit"
            aria-label="Add Item"
        >
            <FaPlus/>
        </button>

    </form>
  )
}

export default AddItems