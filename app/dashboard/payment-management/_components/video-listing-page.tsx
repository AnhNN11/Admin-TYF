'use client';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import VideoTable from './video-tables';
import { Video } from '@/constants/data';
import Image from 'next/image';

type TVideosListingPage = {};

const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Ngày 26/10/2024',
    thumbnail: '/icon.webp', // Corrected path with leading slash
    status: 'Đã thanh toán',
    time: '99.000',
    des: 'Thanh toán thành công cho đơn hàng mùa đông',
    stk: '0945199743',
    code: 'DH001'
  },
  {
    id: 2,
    title: 'Ngày 01/11/2024',
    thumbnail: '/icon.webp', // Remote image URL
    status: 'Đang xử lý',
    time: '99.000',
    des: 'Đơn hàng đang chờ xác nhận',
    stk: '987654321',
    code: 'DH002'
  },
  {
    id: 3,
    title: 'Ngày 15/10/2024',
    thumbnail: '/icon.webp', // Another remote image
    status: 'Hoàn thành',
    time: '99.000',
    des: 'Đơn hàng giao thành công',
    stk: '9876543211231',
    code: 'DH003'
  },
  {
    id: 4,
    title: 'Ngày 03/10/2024',
    thumbnail: '/icon.webp',
    status: 'Hoàn thành',
    time: '99.000',
    des: 'Đơn hàng giao thành công',
    stk: '98762312312',
    code: 'DH004'
  }
];

export default function VideoListingPage({}: TVideosListingPage) {
  const result = mockVideos;
  const total = mockVideos.length;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title={`Thanh toán (${total})`} description="Quản lý đơn hàng" />
        </div>
        <Separator />
        <VideoTable data={result} totalData={total} />
      </div>
    </PageContainer>
  );
}
