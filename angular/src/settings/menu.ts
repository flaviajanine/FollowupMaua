export const MENU: any = [
  {
    title: 'Main',
    groupTitle : true
  },
  {
    title: 'Calendário',
    icon: {
      class: 'fa fa-calendar',
      bg: '#a2d8bd',
      color: 'rgba(0,0,0,.87)'
    },
    routing: '/default-layout/calendar'
  },
  {
    title: 'Disciplinas',
    icon: {
      class: 'fa fa-check',
      bg: '#FFE082',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'Todas as disciplinas',
        routing: '/default-layout/list'
      }
    ]
  },
  {
    title: 'Sobre',
    icon: {
      class: 'fa fa-cogs',
      bg: '#9dcde4',
      color: 'rgba(0,0,0,.87)'
    },
    sub: [
      {
        title: 'O Sistema',
        routing: '/default-layout/timeline'
      },
      {
        title: 'Fale Conosco',
        routing: '/default-layout/invoice'
      }
      ,
      {
        title: 'Nosso Time',
        routing: '/default-layout/about-us'
      }
    ]
  },
];