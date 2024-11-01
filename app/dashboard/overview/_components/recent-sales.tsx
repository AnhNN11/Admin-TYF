import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const salesData = [
  {
    name: 'Nguyễn Phương Anh',
    email: 'olivia.martin@email.com',
    amount: '99.000 VND',
    avatarSrc:
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/348264093_6272663529480981_4638713035102162505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=jYkdN1Zc7b8Q7kNvgFwEoEv&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=A0IF7A-oZwA-MsjbP8zX0iB&oh=00_AYD80cYBIqEJIlO7SmmWWXGIA6S3V1z1XAbaKItAtM7Pzg&oe=672A3E1B',
    fallback: 'OM'
  },
  {
    name: 'Nguyễn Đoàn Salem',
    email: 'jackson.lee@email.com',
    amount: '99.000 VND',
    avatarSrc: '/avatars/02.png',
    fallback: 'JL'
  },
  {
    name: 'Nguyễn Nhật Anh',
    email: 'Nguyennhatanh.dev@email.com',
    amount: '99.000 VND',
    avatarSrc:
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/240908080_534897644236820_7006815173664456711_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LKlvfsdQcRwQ7kNvgEE20-k&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AsPzr_LALGuPrg_HT19wHFj&oh=00_AYBgCjL2U3Lj5E2nzi1Td4thjouq0lb500QyI392QBIVEw&oe=672A4413',
    fallback: 'NA'
  },
  {
    name: 'Phan Dạ Quyên',
    email: 'sofia.davis@email.com',
    amount: '99.000 VND',
    avatarSrc: '/avatars/05.png',
    fallback: 'SD'
  }
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {salesData.map((sale, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatarSrc} alt="Avatar" />
            <AvatarFallback>{sale.fallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">{sale.amount}</div>
        </div>
      ))}
    </div>
  );
}
