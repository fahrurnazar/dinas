import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    component: CNavTitle,
    name: 'MEMO'
  },
  {
    component: CNavItem,
    name: 'Create Memo',
    to: '/theme/memos',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Pematalan Memo',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />
  // },
  {
    component: CNavTitle,
    name: 'Employee Self Service'
  },
  {
    component: CNavGroup,
    name: 'SPPD',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pencarian SPPD',
        to: '/base/accordion'
      },
      {
        component: CNavItem,
        name: 'Laporan Hasil SPPD',
        to: '/base/breadcrumbs'
      },
      {
        component: CNavItem,
        name: 'Surat SPPD',
        to: '/base/cards'
      },
      {
        component: CNavItem,
        name: 'Slip Rincian Biaya SPPD',
        to: '/base/carousels'
      },
      {
        component: CNavItem,
        name: 'Slip Rincian SPPD (Revisi)',
        to: '/base/collapses'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Surat Memo',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts'
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges'
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals'
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts'
      }
    ]
  },
  {
    component: CNavTitle,
    name: 'Extras'
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login'
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register'
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404'
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500'
      }
    ]
  }
];

export default _nav;
