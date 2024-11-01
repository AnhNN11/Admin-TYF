import { searchParamsCache } from '@/lib/searchparams';
import { SearchParams } from 'nuqs/parsers';
import React from 'react';
import UsersListingPage from './_components/users-listing-page';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Quản lý người dùng',
  icons: {
    icon: '/logo.png'
  }
};

export default async function Page({ searchParams }: pageProps) {
  searchParamsCache.parse(searchParams);

  return <UsersListingPage />;
}
