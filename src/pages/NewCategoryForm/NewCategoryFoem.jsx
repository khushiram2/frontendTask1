import React, { useState } from 'react';
import './NewCategoryForm.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

const NewCategoryForm = () => {
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    const token = window.localStorage.getItem("token")
    e.preventDefault();
    if (name.trim()) {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/category/register`, { name: name }, { headers: { authorization: token } })
      console.log(res)
      setName('');
    }
  };

  return (
    <>
      <Navbar />
      <form className="new-category-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </>
  );
};

export default NewCategoryForm;

