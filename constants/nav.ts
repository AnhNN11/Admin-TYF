import { NavItem } from '@/types';

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    items: []
  },
  {
    title: 'User management',
    url: '/dashboard/user-management',
    icon: 'user',
    isActive: false,
    items: []
  },
  {
    title: 'Payment management',
    url: '/dashboard/payment-management',
    icon: 'billing',
    isActive: false,
    items: []
  },
  {
    title: 'Feedback management',
    url: '/dashboard/content-management',
    icon: 'post',
    isActive: false,
    items: []
  }
];
