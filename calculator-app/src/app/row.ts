export interface Row {
  cols: Array<{ name: string; type: string; icon?: string }>;
}

export const rows: Row[] = [
  {
    cols: [
      {
        name: '%',
        type: 'text',
      },
      {
        name: '/',
        type: 'text',
      },
      {
        name: 'C',
        type: 'text',
      },
      {
        name: 'backspace',
        type: 'icon',
        icon: 'bi bi-backspace',
      },
    ],
  },
  {
    cols: [
      {
        name: '7',
        type: 'text',
      },
      {
        name: '8',
        type: 'text',
      },
      {
        name: '9',
        type: 'text',
      },
      {
        name: '*',
        type: 'text',
      },
    ],
  },
  {
    cols: [
      {
        name: '4',
        type: 'text',
      },
      {
        name: '5',
        type: 'text',
      },
      {
        name: '6',
        type: 'text',
      },
      {
        name: '-',
        type: 'icon',
        icon: 'bi bi-dash',
      },
    ],
  },
  {
    cols: [
      {
        name: '1',
        type: 'text',
      },
      {
        name: '2',
        type: 'text',
      },
      {
        name: '3',
        type: 'text',
      },
      {
        name: '+',
        type: 'icon',
        icon: 'bi bi-plus',
      },
    ],
  },
  {
    cols: [
      {
        name: '0',
        type: 'text',
      },
      {
        name: '.',
        type: 'text',
      },
      {
        name: '=',
        type: 'text',
      },
    ],
  },
];
