import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatAmount, getTransactionStatus } from '@/lib/utils'
function TransactionsTable({ transactions }: TransactionTableProps) {
  return (
    <Table>
  <TableHeader className='bg-[#f9fafb]'>
                <TableRow>
                <TableHead className="px-2">Transactions</TableHead>
                <TableHead className="px-2">Amount</TableHead>
                <TableHead className="px-2">Status</TableHead>
                <TableHead className="px-2">Date</TableHead>
                <TableHead className="px-2 max-md:hidden">Channel</TableHead>
                <TableHead className="px-2 max-md:hidden">Category</TableHead>
                
                
                </TableRow>
            </TableHeader>
            <TableBody>
                
            </TableBody>
</Table>
  )
}

export default TransactionsTable