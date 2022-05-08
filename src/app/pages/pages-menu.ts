import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Writeo',
    expanded: false,
    icon: 'bar-chart-outline',
    children: [
      {
        title: 'Example #1',
        link: '/environment/ex1',
        home: true,
        icon: 'funnel-outline'
      },
      {
        title: 'Example #2',
        link: '/environment/ex2',
        icon: 'checkmark-square-2-outline'
      },
      {
        title: 'Example #3',
        link: '/environment/ex3',
        icon: 'clipboard-outline'
      },
      {
        title: 'Example #4',
        link: '/environment/ex4',
        icon: 'trending-up-outline'
      }
    ]
  },
  {
    title: 'Profile',
    link: '/profile',
    icon: 'person-outline'
  },
  {
    title: 'Subscription',
    link: '/subscription',
    icon: 'person-outline'
  },
  {
    title: 'Settings',
    link: '/settings',
    icon: 'person-outline'
  },
  {
    title: 'Sign in',
    link: '/auth/user',
    icon: 'person-outline'
  },
  {
    title: 'Sign up',
    link: '/auth/register',
    icon: 'person-outline'
  },
];
