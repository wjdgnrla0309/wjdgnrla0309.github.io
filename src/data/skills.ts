export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Engineering',
    items: [
      'Thermodynamics',
      'Heat Transfer',
      'Engineering Mechanics',
      'Solid Mechanics',
      'Vehicle Dynamics',
      'Engineering Design',
    ],
  },
  {
    title: 'Software / Programming',
    items: [
      'MATLAB',
      'Arduino / C',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Tools',
    items: ['VS Code', 'GitHub', 'Arduino', 'AI-assisted Engineering Research'],
  },
  {
    title: 'Research',
    items: ['Literature Review', 'Experimental Planning', 'Data Analysis', 'Prototype Development'],
  },
]
