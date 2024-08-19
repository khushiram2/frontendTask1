import React from 'react';
import './ListView.css';
import axios from 'axios';

const ListView = () => {
  const options = [
    "today",
    "this week",
    "this month",
    "last 3 months",
    "this year",
    "all"
  ]

  const [filter, setFilter] = React.useState(options[0])
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const today = new Date();
    let startDate;
    let endDate = today;
    switch (filter) {
      case "today":
        startDate = new Date(today.setHours(0, 0, 0, 0));
        endDate = new Date(today.setHours(23, 59, 59, 999));
        break;
      case "this week":
        startDate = new Date(today.setDate(today.getDate() - today.getDay()));
        startDate.setHours(0, 0, 0, 0);
        break;
      case "this month":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        break;
      case "last 3 months":
        startDate = new Date(today.getFullYear(), today.getMonth() - 2, 1);
        break;
      case "this year":
        startDate = new Date(today.getFullYear(), 0, 1);
        break;
      case "all":
        startDate = new Date(0);
        break;
      default:
        startDate = new Date();
    }
    const token = window.localStorage.getItem("token")
    const userData = JSON.parse(window.localStorage.getItem("userData"))
    if (startDate && endDate) {
      console.log(startDate + " " + endDate)
      axios.get(`${import.meta.env.VITE_API_URL}/entry/all/list`, {
        headers: {
          Authorization: token
        },
        params: {
          userId: userData._id,
          start: startDate,
          end: endDate
        }
      })
        .then((res) => {
          console.log(res);
          setData(res.data.data);
        }).catch(err => {
          console.log(err)
        });
    }

  }, [filter]);


  return (
    <>
      <select >
        {options.map((e, i) => {
          return (
            <option onClick={() => setFilter(e)} >{e}</option>
          )
        })}
      </select>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.amount}</td>
              <td>{item.categoryId.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListView;
