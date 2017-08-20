export const MENU: any = [
  {
    title: 'Main',
    groupTitle : true
  },
   {
    title: 'Dashboards',
    icon: {
      class: 'fa fa-home',
      bg: '#ea8080',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/default-layout/dashboard',
    sub: [
      {
        title: 'Dashboard v1',
        routing: '/default-layout/dashboard'
      },
    ]
   },
  {
    title: 'Calendário',
    icon: {
      class: 'fa fa-calendar',
      bg: '#C5CAE9',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/default-layout/calendar'
  },
  {
    title: 'Notas',
    icon: {
      class: 'fa fa-table',
      bg: '#FFE082',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'Simple table',
        routing: '/default-layout/simple-table'
      },
      {
        title: 'Editing table',
        routing: '/default-layout/editing-table'
      },
      {
        title: 'Filtering table',
        routing: '/default-layout/filtering-table'
      },
      {
        title: 'Pagination table',
        routing: '/default-layout/pagination-table'
      },
      {
        title: 'Bootstrap tables',
        routing: '/default-layout/bootstrap-tables'
      }
    ]
  },
  {
    title: 'Charts',
    icon: {
      class: 'fa fa-pie-chart',
      bg: '#BCAAA4',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'Ng2 Charts',
        routing: '/default-layout/ng2-charts'
      },
      {
        title: 'Ngx Charts',
        routing: '/default-layout/ngx-charts'
      }
      ,
      {
        title: 'Amcharts',
        routing: '/default-layout/amcharts'
      }
    ]
  },
];