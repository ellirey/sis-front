import React, { useState } from 'react'
import DashboardGrid from './DashboardGrid'
import './Dashboard.css'
import TransactionChart from './TransactionChart'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardGrid />
      <TransactionChart />
    </div>
  )
}
export default Dashboard
