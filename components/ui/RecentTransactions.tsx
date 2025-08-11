import Link from 'next/link'
import React from 'react'

function RecentTransactions({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) {
  return (
    <section className='recent-transactions'>
        <header className='flex items-center justify-between'>
            <h1 className='recent-transactions-label'>
                Recent Transactions
            </h1>
            <Link href={`/transaction-history/?id=${appwriteItemId}`}
                    className="view-all-btn">
                View All
          </Link>
        </header>
    </section>
  )
}

export default RecentTransactions