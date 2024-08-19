import React from 'react'
import axios from 'axios'
const TotalExpense = () => {
  const [total, setTotal] = React.useState(0)


  React.useEffect(() => {

  }, [])

  return (
    <div>
      <div>
        <h3>Total Expense this month</h3>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default TotalExpense
