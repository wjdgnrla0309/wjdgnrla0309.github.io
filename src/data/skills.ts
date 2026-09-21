export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: '공학',
    items: [
      '열역학', '열전달', '공업역학', '재료역학', '차량 동역학', '공학 설계',
    ],
  },
  {
    title: '소프트웨어 / 프로그래밍',
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
    title: '도구',
    items: ['VS Code', 'GitHub', 'Arduino', 'AI-assisted Engineering Research'],
  },
  {
    title: '연구',
    items: ['문헌 조사', '실험 계획', '데이터 분석', '시제품 개발'],
  },
]
