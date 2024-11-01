'use client';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import VideoTable from './video-tables';
import { Video } from '@/constants/data';

type TVideosListingPage = {};

const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Morning Yoga Routine',
    thumbnail: 'https://example.com/thumbnails/yoga1.jpg',
    workoutLevel: 'Beginner',
    duration: '15:30',
    views: 1200,
    comments: 34,
    ratings: 4.5,
    shares: 10
  },
  {
    id: 2,
    title: 'HIIT Workout for Beginners',
    thumbnail: 'https://example.com/thumbnails/hiit1.jpg',
    workoutLevel: 'Beginner',
    duration: '20:45',
    views: 2300,
    comments: 56,
    ratings: 4.7,
    shares: 15
  },
  {
    id: 3,
    title: 'Advanced Cardio Blast',
    thumbnail: 'https://example.com/thumbnails/cardio1.jpg',
    workoutLevel: 'Advanced',
    duration: '30:00',
    views: 5400,
    comments: 78,
    ratings: 4.9,
    shares: 25
  }
  // Add more mock data if needed
];

export default function VideoListingPage({}: TVideosListingPage) {
  const result = mockVideos;
  const total = mockVideos.length;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading title={`Videos (${total})`} description="Manage videos" />
        </div>
        <Separator />
        <VideoTable data={result} totalData={total} />
      </div>
    </PageContainer>
  );
}
