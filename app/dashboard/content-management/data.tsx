export const mails = [
  {
    "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    "name": "Trần Mỹ Quyên",
    "email": "myquyendn203@example.com",
    "subject": "Cảm ơn về ứng dụng trông trẻ tuyệt vời!",
    "text": "Chi phí vừa phải\n\nNgười đồng hành tận tình, thân thiện giúp cháu tự tin hòa đồng khi giao tiếp dù là lần đầu tiên gặp nhau.\n\nLà người mẹ, mình hoàn toàn an tâm vì có live nắm được tình hình, hình ảnh thực tế khi người đồng hành giao tiếp giao lưu riêng với con gái của mình.\n\nVề App […] mình thấy thực hiện RẤT NHANH GỌN từ khâu đặt dịch vụ - tiến hành thực tế - thanh toán.\n\nDịch vụ này thật sự hữu ích cho các bạn nhỏ, đặc biệt là con một trong nhà. Giúp các bạn nhỏ sử dụng thời gian rảnh rỗi trong ngày, trong tuần; thay vì phụ thuộc vào điện thoại hoặc lười biếng, tham gia thì việc các bạn nhỏ được gặp gỡ giao lưu với Người Đồng Hành giúp các bạn nhỏ vui hơn, có môi trường, năng động hơn.",
    "date": "2024-10-22T09:00:00",
    "read": true,
    "labels": ["phản hồi", "khách hàng", "cảm ơn"]
  },
  {
    id: '110e8400-e29b-11d4-a716-446655440000',
    name: 'Lê Thị Hoa',
    email: 'lethih@gmail.com',
    subject: 'Ứng dụng rất hữu ích cho các mẹ bỉm sữa!',
    text: 'Xin chào,\n\nTôi chỉ muốn chia sẻ rằng ứng dụng trông trẻ này rất tuyệt vời! Từ khi sử dụng ứng dụng, tôi thấy rất tiện lợi trong việc ghi chép và theo dõi lịch ăn, ngủ, chơi của bé. Đội ngũ phát triển đã làm một công việc tuyệt vời để đáp ứng nhu cầu của các phụ huynh.\n\nHy vọng ứng dụng sẽ còn nhiều tính năng thú vị hơn nữa trong tương lai!\n\nCảm ơn, Hoa',
    date: '2024-10-22T10:30:00',
    read: true,
    labels: ['phản hồi', 'khách hàng']
  },
  {
    id: '3e7c3f6d-bdf5-46ae-8d90-171300f27ae2',
    name: 'Trần Minh Hùng',
    email: 'tranminhhung@gmail.com',
    subject: 'Ứng dụng giúp tôi quản lý thời gian hiệu quả',
    text: 'Chào các bạn,\n\nLà một phụ huynh bận rộn, tôi rất cảm ơn ứng dụng trông trẻ vì đã giúp tôi dễ dàng quản lý thời gian cho bé. Đặc biệt là tính năng nhắc nhở các công việc quan trọng như lịch tiêm phòng và thăm khám sức khỏe. Tôi rất hài lòng và sẽ giới thiệu cho bạn bè của mình.\n\nChúc các bạn tiếp tục phát triển ứng dụng!\n\nTrân trọng, Hùng',
    date: '2024-10-10T11:45:00',
    read: true,
    labels: ['phản hồi', 'khách hàng']
  },
  {
    id: '61c35085-72d7-42b4-8d62-738f700d4b92',
    name: 'Phạm Thanh Lan',
    email: 'phamthanhlan@gmail.com',
    subject: 'Góp ý về tính năng theo dõi sức khỏe bé',
    text: 'Xin chào đội ngũ phát triển,\n\nTôi thực sự rất thích ứng dụng của các bạn, nhưng tôi nghĩ nếu có thêm tính năng theo dõi sức khỏe chi tiết hơn sẽ rất hữu ích. Hiện tại, tôi dùng tính năng ghi chú để lưu lại thông tin về chiều cao và cân nặng của bé, nhưng nếu có biểu đồ theo dõi phát triển, tôi nghĩ sẽ tiện lợi hơn nhiều.\n\nCảm ơn các bạn rất nhiều!\n\nTrân trọng, Lan',
    date: '2024-10-25T13:15:00',
    read: false,
    labels: ['phản hồi', 'góp ý']
  },
  {
    id: '1f0f2c02-e299-40de-9b1d-86ef9e42126b',
    name: 'Nguyễn Thị Mai',
    email: 'nguyenthimai@gmail.com',
    subject: 'Ứng dụng rất dễ sử dụng và hiệu quả',
    text: 'Xin chào đội ngũ phát triển,\n\nTôi muốn gửi lời khen ngợi đến các bạn vì ứng dụng rất dễ sử dụng và hiệu quả. Tôi cảm thấy yên tâm hơn khi sử dụng ứng dụng để theo dõi các hoạt động hàng ngày của bé. Hy vọng các bạn sẽ tiếp tục cải tiến và mang đến nhiều trải nghiệm tốt hơn nữa cho phụ huynh.\n\nTrân trọng, Mai',
    date: '2024-11-15T16:30:00',
    read: true,
    labels: ['phản hồi', 'khách hàng']
  }
];


export type Mail = (typeof mails)[number];

export const accounts = [
  {
    label: 'Alicia Koch',
    email: 'alicia@example.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    )
  },
  { 
    label: 'Alicia Koch',
    email: 'alicia@gmail.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@me.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com'
  },
  {
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com'
  },
  {
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com'
  },
  {
    name: 'Noah Martinez',
    email: 'noah.martinez@example.com'
  },
  {
    name: 'Ava Taylor',
    email: 'ava.taylor@example.com'
  },
  {
    name: 'Lucas Brown',
    email: 'lucas.brown@example.com'
  },
  {
    name: 'Sophia Smith',
    email: 'sophia.smith@example.com'
  },
  {
    name: 'Ethan Wilson',
    email: 'ethan.wilson@example.com'
  },
  {
    name: 'Isabella Jackson',
    email: 'isabella.jackson@example.com'
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@example.com'
  },
  {
    name: 'Mason Lee',
    email: 'mason.lee@example.com'
  },
  {
    name: 'Layla Harris',
    email: 'layla.harris@example.com'
  },
  {
    name: 'William Anderson',
    email: 'william.anderson@example.com'
  },
  {
    name: 'Ella White',
    email: 'ella.white@example.com'
  },
  {
    name: 'James Thomas',
    email: 'james.thomas@example.com'
  },
  {
    name: 'Harper Lewis',
    email: 'harper.lewis@example.com'
  },
  {
    name: 'Benjamin Moore',
    email: 'benjamin.moore@example.com'
  },
  {
    name: 'Aria Hall',
    email: 'aria.hall@example.com'
  },
  {
    name: 'Henry Turner',
    email: 'henry.turner@example.com'
  },
  {
    name: 'Scarlett Adams',
    email: 'scarlett.adams@example.com'
  }
];

export type Contact = (typeof contacts)[number];