import React, { useState } from 'react';
import './NewExpenseForm.css'; // Import the CSS file
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

const NewExpenseForm = () => {
  const [categoryInput, setCategoryInput] = useState("")
  const [category, setCategory] = useState([]);
  const [data, setData] = useState({
    date: new Date()
  })

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCategoryInput(data.category)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }

  }, [data.category])

  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/category/all`).then((res) => {
      setCategory(res.data.categories)
    }).catch((err) => {
      console.log(err)
      alert("something bad happened please try again")
    })

  }, [categoryInput])


  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(window.localStorage.getItem("userData"))
    data.userId = userData._id
    category.forEach(e => {
      if (e.name === data.category) {
        data.categoryId = e._id
      }
    })
    const token = window.localStorage.getItem("token")
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/entry/register`, data, { headers: { Authorization: token } })
    console.log(res);
  };

  return (
    <>
      <Navbar />
      <form className="new-expense-form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            name='amount'
            type="number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            name='category'
            list="categories"
            required
          />
          <datalist id='categories' >
            {category.map((cat) => (
              <option key={cat._id} value={cat.name} />
            ))}
          </datalist>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            name='date'
            type="date"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name='description'
            rows="4"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewExpenseForm;

