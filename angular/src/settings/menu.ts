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
    routing: '/default-layout/dashboard'
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
        title: 'Inserir Notas',
        routing: '/default-layout/form-layout'
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