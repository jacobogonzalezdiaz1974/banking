import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstname: "Jacobo", lastName: "Gonzalez", email: "jgonzalez@example.com" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type='greeting' 
          title='Welcome' 
          user={loggedIn?.firstname || "Jacobo"} 
          subtext='Access and manage your account and transactions efficiently' />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35} />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:500.35}]}
      />
    </section>
  )
}

export default Home