import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../../store/category-slice';

const NewCategory = () => {
  const [adding, setAdding] = useState(false);
  const totalCategories = useSelector(state => state.category.totalCategories);
  const dispatch = useDispatch();
  const [element, setElement] = useState({
    id: totalCategories + 1,
    tag: ""
  });

  const addCategory = (e) => {
    e.preventDefault();
    dispatch(categoryActions.addCategory({
      ...element
    }));
    setElement({
      id: totalCategories + 1,
      tag: "",
    })
  }

  const handleChange = (e) => {
    setElement({
      ...element,
      [e.target.name]: e.target.value,
    });
  }

  if (!adding) {
    return (
      <button style={{ height: "25px" }} onClick={() => setAdding(true)}>
        <AiOutlinePlus />
        Add New Category
      </button>
    )
  }
  return (
    <div>
      <form onSubmit={addCategory}>
        <input value={element.tag} name="tag" onChange={handleChange} />
        <button type="submit">Add</button><AiOutlineClose onClick={() => setAdding(false)} />
      </form>
    </div>
  )
}

export default NewCategory;