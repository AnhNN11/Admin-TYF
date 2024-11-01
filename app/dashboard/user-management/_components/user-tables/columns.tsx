import { Employee } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'id',
    header: 'User ID',
    enableSorting: false
  },
  {
    accessorKey: 'first_name',
    header: 'First Name'
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'gender',
    header: 'Gender'
  },
  {
    accessorKey: 'date_of_birth',
    header: 'Date of Birth',
    cell: ({ getValue }) => (
      <span>{new Date(getValue() as string).toLocaleDateString()}</span>
    )
  },
  {
    accessorKey: 'street',
    header: 'Street'
  },
  {
    accessorKey: 'city',
    header: 'City'
  },
  {
    accessorKey: 'state',
    header: 'State'
  },
  {
    accessorKey: 'country',
    header: 'Country'
  },
  {
    accessorKey: 'zipcode',
    header: 'Zipcode'
  },
  {
    accessorKey: 'job',
    header: 'Job'
  }
];
