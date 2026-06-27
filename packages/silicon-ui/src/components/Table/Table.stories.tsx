import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from './Table'
import { Badge } from '../Badge'

const meta: Meta<typeof Table> = {
  title: 'Base/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Table>

const invoices = [
  { id: 'INV-001', customer: 'Acme Corp', amount: '$4,200', status: 'Paid', date: 'Jun 12, 2025' },
  { id: 'INV-002', customer: 'Globex Inc', amount: '$1,850', status: 'Pending', date: 'Jun 18, 2025' },
  { id: 'INV-003', customer: 'Initech', amount: '$9,400', status: 'Paid', date: 'Jun 21, 2025' },
  { id: 'INV-004', customer: 'Umbrella LLC', amount: '$720', status: 'Overdue', date: 'May 30, 2025' },
]

export const Default: Story = {
  render: () => (
    <Table className="w-[600px]">
      <TableCaption>Recent invoices — Q2 2025</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-mono text-xs">{inv.id}</TableCell>
            <TableCell>{inv.customer}</TableCell>
            <TableCell className="text-[--si-body-color]">{inv.date}</TableCell>
            <TableCell>
              <Badge
                size="sm"
                variant={inv.status === 'Paid' ? 'success' : inv.status === 'Overdue' ? 'danger' : 'warning'}
              >
                {inv.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right font-semibold">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$16,170</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
