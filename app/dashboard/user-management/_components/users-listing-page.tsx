'use client';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import UsersTable from './user-tables';
import { Employee } from '@/constants/data';

const mockUsersData: Employee[] = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    gender: 'Male',
    date_of_birth: '1990-05-20',
    street: '123 Main St',
    city: 'Los Angeles',
    state: 'California',
    country: 'United States',
    zipcode: '90001',
    job: 'Software Engineer',
    profile_picture: null
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'janesmith@example.com',
    phone: '987-654-3210',
    gender: 'Female',
    date_of_birth: '1985-11-15',
    street: '456 Elm St',
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    zipcode: 'M4B 1B4',
    job: 'Product Manager',
    profile_picture: null
  },
  {
    id: 3,
    first_name: 'Sam',
    last_name: 'Wilson',
    email: 'samwilson@example.com',
    phone: '555-555-5555',
    gender: 'Male',
    date_of_birth: '1992-07-30',
    street: '789 Oak St',
    city: 'Sydney',
    state: 'New South Wales',
    country: 'Australia',
    zipcode: '2000',
    job: 'Designer',
    profile_picture: null
  }
  // Add more mock data if needed
];

export default function UsersListingPage() {
  const result = mockUsersData;
  const total = result.length;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Users (${total})`}
            description="Manage users in your organization"
          />
        </div>
        <Separator />
        <UsersTable data={result} totalData={total} />
      </div>
    </PageContainer>
  );
}
