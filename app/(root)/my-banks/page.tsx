import BankCard from '@/components/ui/BankCard';
import HeaderBox from '@/components/ui/HeaderBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

async function MyBanks({searchParams}: SearchParamProps) {
  const { id, page } = await searchParams;
      const currentPage = Number(page as string) || 1;
      const loggedIn =await getLoggedInUser();
      const accounts = await getAccounts({ userId: loggedIn.$id });
      if (!loggedIn) {
        return;
      }    
  return (
    <section className='flex'>
      <div className='my-banks'>
        <HeaderBox 
           title='My Bank Accounts'
           subtext='Effortlessly manage your bank accounts and transactions.'   
        />
      
      <div className='space-y-4'>
        <h2 className='header-2'>
          Your Cards
        </h2>
        <div className='flex flex-wrap gap-6'>
          {accounts && accounts.data.map((a:Account)=>(
              <BankCard 
                key={a.id}
                account={a}
                userName={`${loggedIn?.firstName } ${loggedIn?.lastName }`}
              />
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

export default MyBanks