import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionsTable from './TransactionsTable'
function RecentTransactions({
  accounts,
  transactions = [{
    id: "txn_001",
    $id: "appwrite_001",
    name: "Amazon Purchase",
    paymentChannel: "online",
    type: "debit",
    accountId: "acc_123",
    amount: 59.99,
    pending: false,
    category: "Shopping",
    date: "2025-08-10",
    image: "/images/amazon.png",
    $createdAt: "2025-08-10T10:15:00.000Z",
    channel: "card",
    senderBankId: "bank_001",
    receiverBankId: "bank_amazon"
  },
  {
    id: "txn_002",
    $id: "appwrite_002",
    name: "Salary Credit",
    paymentChannel: "direct deposit",
    type: "credit",
    accountId: "acc_123",
    amount: 3500.00,
    pending: false,
    category: "Income",
    date: "2025-08-01",
    image: "/images/salary.png",
    $createdAt: "2025-08-01T09:00:00.000Z",
    channel: "bank_transfer",
    senderBankId: "bank_company",
    receiverBankId: "bank_001"
  },
  {
    id: "txn_003",
    $id: "appwrite_003",
    name: "Netflix Subscription",
    paymentChannel: "online",
    type: "debit",
    accountId: "acc_123",
    amount: 15.99,
    pending: true,
    category: "Entertainment",
    date: "2025-08-09",
    image: "/images/netflix.png",
    $createdAt: "2025-08-09T20:30:00.000Z",
    channel: "card",
    senderBankId: "bank_001",
    receiverBankId: "bank_netflix"
  }],
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
        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className="recent-transactions-tablist">
                {accounts.map((account: Account) => (
                    <TabsTrigger key={account.id} value={account.appwriteItemId}>
                    <BankTabItem
                        key={account.id}
                        account={account}
                        appwriteItemId={appwriteItemId}
                    />
                    </TabsTrigger>
                ))}
                </TabsList>

                {accounts.map((account: Account) => (
                <TabsContent
                    value={account.appwriteItemId}
                    key={account.id}
                    className="space-y-4"
                >
                    
                <BankInfo 
                account={account}
                appwriteItemId={appwriteItemId}
                type="full"
                />

                <TransactionsTable transactions={transactions} />   
                    

                    
                </TabsContent>
                ))}
        </Tabs>
    </section>
  )
}

export default RecentTransactions