import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'


async function Home() {
  const loggedIn =await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content' >
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title={`Welcome back,`}
            user={loggedIn?.name || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1240.00}
          />
        </header>
        Recent Transactions
      </div>
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance:233494.44},{currentBalance:123.44}]}
        />
    </section>
  )
}

export default Home