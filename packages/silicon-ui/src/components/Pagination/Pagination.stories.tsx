import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Base/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    siblingCount: { control: { type: 'number', min: 0, max: 3 } },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: function PaginationDemo(args) {
    const [page, setPage] = React.useState(args.page ?? 1)
    return <Pagination {...args} page={page} onPageChange={setPage} />
  },
  args: { page: 1, totalPages: 10 },
}

export const FewPages: Story = {
  render: function PaginationFew() {
    const [page, setPage] = React.useState(2)
    return <Pagination page={page} totalPages={5} onPageChange={setPage} />
  },
}

export const ManyPages: Story = {
  render: function PaginationMany() {
    const [page, setPage] = React.useState(7)
    return <Pagination page={page} totalPages={50} onPageChange={setPage} />
  },
}
