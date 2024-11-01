'use client';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import UsersTable from './user-tables';
import { Employee } from '@/constants/data';

const mockUsersData: Employee[] = [
  {
    id: 1,
    first_name: 'Huỳnh Văn',
    last_name: 'Tín',
    email: 'tinhuynh211@gmail.com',
    phone: '0945199743',
    gender: 'Male',
    date_of_birth: '2003-02-11',
    street: 'Ngũ Hành Sơn',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Kỹ sư phần mềm',
    profile_picture: null
  },
  {
    id: 2,
    first_name: 'Nguyễn Thị',
    last_name: 'Lan',
    email: 'lannguyen126@gmail.com',
    phone: '0934123456',
    gender: 'Female',
    date_of_birth: '2000-07-25',
    street: 'Hai Bà Trưng',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Giáo Viên',
    profile_picture: null
  },
  {
    id: 3,
    first_name: 'Trần',
    last_name: 'Minh Tâm',
    email: 'tamtran201@gmail.com',
    phone: '0912345678',
    gender: 'Male',
    date_of_birth: '1999-04-15',
    street: 'Lê Duẩn',
    city: 'Đà Nẵng',
    state: 'Thanh Khê',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Thiết kế đồ họa',
    profile_picture: null
  },
  {
    id: 4,
    first_name: 'Phạm',
    last_name: 'Hoàng Anh',
    email: 'hoanganhpham@gmail.com',
    phone: '0923456789',
    gender: 'Female',
    date_of_birth: '1998-11-10',
    street: 'Nguyễn Văn Linh',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Chuyên viên phân tích dữ liệu',
    profile_picture: null
  },
  {
    id: 5,
    first_name: 'Lê',
    last_name: 'Quang Huy',
    email: 'quanghuyle@gmail.com',
    phone: '0945678901',
    gender: 'Male',
    date_of_birth: '2000-06-30',
    street: 'Phan Châu Trinh',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Quản lý bán hàng',
    profile_picture: null
  },
  {
    id: 6,
    first_name: 'Đỗ',
    last_name: 'Thị Hạnh',
    email: 'hanhdothi2001@gmail.com',
    phone: '0912789432',
    gender: 'Female',
    date_of_birth: '2001-12-05',
    street: 'Nguyễn Hữu Thọ',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Chuyên viên nhân sự',
    profile_picture: null
  },
  {
    id: 7,
    first_name: 'Võ',
    last_name: 'Ngọc Long',
    email: 'ngoclongvo@gmail.com',
    phone: '0901234567',
    gender: 'Male',
    date_of_birth: '1991-09-18',
    street: 'Trường Sa',
    city: 'Đà Nẵng',
    state: 'Ngũ Hành Sơn',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Giám đốc điều hành',
    profile_picture: null
  },
  {
    id: 8,
    first_name: 'Ngô',
    last_name: 'Thanh Tú',
    email: 'thanhtu.ngo@gmail.com',
    phone: '0967123456',
    gender: 'Female',
    date_of_birth: '1993-05-22',
    street: 'Hồ Xuân Hương',
    city: 'Đà Nẵng',
    state: 'Ngũ Hành Sơn',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Chuyên viên marketing',
    profile_picture: null
  },
  {
    id: 9,
    first_name: 'Bùi',
    last_name: 'Anh Tuấn',
    email: 'anhtuan.bui@gmail.com',
    phone: '0934567890',
    gender: 'Male',
    date_of_birth: '1998-03-08',
    street: 'Hoàng Diệu',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Kỹ sư hệ thống',
    profile_picture: null
  },
  {
    id: 10,
    first_name: 'Cao',
    last_name: 'Thị Mỹ Linh',
    email: 'mylinh.cao@gmail.com',
    phone: '0971234567',
    gender: 'Female',
    date_of_birth: '1996-08-15',
    street: 'Nguyễn Văn Thoại',
    city: 'Đà Nẵng',
    state: 'Sơn Trà',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Nhà nghiên cứu',
    profile_picture: null
  },
  {
    id: 11,
    first_name: 'Đặng',
    last_name: 'Văn Quý',
    email: 'vanquy@gmail.com',
    phone: '0937891234',
    gender: 'Male',
    date_of_birth: '1998-01-11',
    street: 'Đống Đa',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Chuyên viên tài chính',
    profile_picture: null
  },
  {
    id: 12,
    first_name: 'Lê',
    last_name: 'Minh Hoàng',
    email: 'minhhoang@gmail.com',
    phone: '0908765432',
    gender: 'Male',
    date_of_birth: '1998-02-19',
    street: 'Lê Lợi',
    city: 'Đà Nẵng',
    state: 'Hải Châu',
    country: 'Việt Nam',
    zipcode: '550000',
    job: 'Nhân viên kỹ thuật',
    profile_picture: null
  },
  // Additional entries up to 20 users with similar structure
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
