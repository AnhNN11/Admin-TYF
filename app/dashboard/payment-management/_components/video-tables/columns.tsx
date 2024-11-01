'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Video } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import Image from 'next/image';

export const columns: ColumnDef<Video>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: 'Ngày Tạo'
  },
  {
    accessorKey: 'thumbnail',
    header: 'Ngân Hàng',
    cell: ({ row }) => {
      return (
        <div className="relative h-8 w-8">
  <Image
    src={'/icon.webp'}
    alt={row.getValue('title')}
    fill
    className="rounded-full object-cover"
  />
</div>

      );
    }
  },
  {
    accessorKey: 'status',
    header: 'Trạng Thái'
  },
  {
    accessorKey: 'time',
    header: 'Số Tiền'
  },
  {
    accessorKey: 'des',
    header: 'Mô Tả'
  },
  {
    accessorKey: 'stk',
    header: 'Số Tài Khoản'
  },
  {
    accessorKey: 'code',
    header: 'Mã đơn'
  },
  
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
