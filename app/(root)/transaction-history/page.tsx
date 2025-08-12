import HeaderBox from '@/components/ui/HeaderBox'
import { Pagination } from '@/components/ui/Pagination';
import TransactionsTable from '@/components/ui/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.action';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

async function TransactionHistory({searchParams}: SearchParamProps) {
 
   const { id, page } = await searchParams;
    const currentPage = Number(page as string) || 1;
    
    const loggedIn =await getLoggedInUser();
    const accounts = await getAccounts({ userId: loggedIn.$id });
    if (!loggedIn) {
      return;
    }
  
    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  
    const account = await getAccount({ appwriteItemId })

    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.length / rowsPerPage);

    const indexOfLastTransaction = currentPage * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

    const currentTransactions = account?.transactions.slice(
      indexOfFirstTransaction, indexOfLastTransaction
    )
  
  return (
    <div className='transactions'>
        <div className='transactions-header'>
            <HeaderBox
                title='Transaction History'
                subtext='See your recent transactions and manage your finances.'
            />
        </div>
        <div className='space-y-6'>
          <div className='transactions-account'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-18 font-bold text-white'>
                {account?.data.name}
              </h2>
              <p className='text-14 text-blue-25'>
                {account?.data.officialName} 
              </p>
              <p className="text-14 font-semibold tracking-[1.1px] text-white">
                    ●●●● ●●●● ●●●● {account?.data.mask}
              </p>
            </div>
              <div className='transactions-account-balance'>
                <p className='text-14 '>Current Balance</p>
                <p className='text-24 font-bold text-center'>
                  {formatAmount(account?.data.currentBalance) }
                </p>
              </div>
            </div>
            <section className='flex flex-col w-full gap-6'>
              <TransactionsTable transactions={currentTransactions}/>
            </section>
            {totalPages > 1 && (
              <div className="my-4 w-full">
                  <Pagination totalPages={totalPages} page={currentPage} />
              </div>
            )}
        </div>
    </div>
  )
}

export default TransactionHistory