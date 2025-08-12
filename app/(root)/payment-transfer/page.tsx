import HeaderBox from '@/components/ui/HeaderBox'
import PaymentTransferForm from '@/components/ui/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { Section } from 'lucide-react'
import React from 'react'

async function Transfer() {
  const loggedIn =await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });
  if (!loggedIn) {
    return;
  }

  const accountsData = accounts?.data;  
  return (
    <section className='payment-transfer'>
       <HeaderBox
                title='Payment Transfer'
                subtext='Please Provide any specific details or instructions for the transfer.'
            />
        <section className='size-full pt-5'>
          <PaymentTransferForm accounts={accountsData} />
        </section>
    </section>
  )
}

export default Transfer