import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TotalExpense from '../../components/TotalExpense/TotalExpense'
import Piechart from '../../components/PieChart/Piechart'
import LineChart from '../../components/LineChart/LineChart'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <TotalExpense />
        <Piechart />
        <LineChart />
      </main>
    </div>
  )
}

export default Home
