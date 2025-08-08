import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'


function Home() {
  const loggedIn ={firstNmae:'Githmi'};
  return (
    <section className='home'>
      <div className='home-content' >
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title={`Welcome back, ${loggedIn.firstNmae}`}
            user={loggedIn?.firstNmae || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1240.00}
          />
        </header>
      </div>

    </section>
  )
}

export default Home