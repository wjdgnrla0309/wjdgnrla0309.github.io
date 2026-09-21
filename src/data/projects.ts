export type ProjectDetail = {
  overview: string
  problem: string
  approach: string
  engineeringConsiderations: string[]
  tools: string[]
  result?: string
  whatILearned: string
}

export type Project = {
  title: string
  group: 'kuma' | 'travel'
  category: string
  description: string
  image: string
  technologies: string[]
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    title: 'KUMA Formula Student', group: 'kuma', category: 'Formula Student / 자동차 공학',
    description: '공주대학교 자작자동차 동아리 KUMA에서 Formula Student 차량의 구조와 차량 시스템을 학습하고 있습니다.',
    image: '/images/projects/kuma/kuma-car.svg', technologies: ['MATLAB', '차량 동역학', '기계 설계'],
    detail: {
      overview: 'KUMA Formula Student 활동을 통해 차량 구조와 시스템적 사고를 익히고, 차량 성능을 이해하는 프로젝트 경험을 쌓고 있습니다.',
      problem: 'Formula Student 차량을 이해하려면 개별 부품뿐 아니라 차량 동역학과 가속 성능을 연결해 분석해야 합니다.',
      approach: '차량 시스템의 구성 요소를 학습하고 MATLAB으로 0–75 m 가속 성능 시뮬레이션을 수행했습니다.',
      engineeringConsiderations: ['차량 동역학', '섀시', '가속 시뮬레이션', '공학 설계', '차량 시험'],
      tools: ['MATLAB', '차량 동역학', '기계 설계'],
      result: '가속 성능을 수치적으로 분석하고 시스템 관점에서 차량을 바라보는 경험을 얻었습니다.',
      whatILearned: '차량 설계에서는 동역학, 제동, 토크 전달, 무게 배분을 함께 고려해야 한다는 점을 배웠습니다.',
    },
  },
  {
    title: 'KUMA 웹사이트', group: 'kuma', category: '웹 개발',
    description: 'Formula Student 팀 KUMA의 활동과 프로젝트를 소개하기 위한 반응형 웹사이트입니다.',
    image: '/images/projects/kuma/kuma-car.svg', technologies: ['React', 'Vite', 'GitHub', 'GitHub Pages'],
    detail: {
      overview: '팀 소개와 프로젝트 진행 내용을 효과적으로 전달하기 위한 KUMA 웹사이트를 제작했습니다.',
      problem: '팀 활동과 기술 정보를 방문자가 빠르게 이해할 수 있도록 구조화할 필요가 있었습니다.',
      approach: 'React와 Vite로 반응형 화면을 구성하고 GitHub Pages에서 배포할 수 있도록 정리했습니다.',
      engineeringConsiderations: ['반응형 레이아웃', '콘텐츠 구조', '배포 편의성', '웹 접근성'],
      tools: ['React', 'Vite', 'GitHub', 'GitHub Pages'],
      whatILearned: '웹 개발에서는 기능뿐 아니라 사용자가 정보를 이해하는 흐름과 시각적 구조가 중요하다는 점을 배웠습니다.',
    },
  },
  {
    title: '여행 추천 웹사이트', group: 'travel', category: '웹 개발 / API',
    description: 'TourAPI와 Kakao Local API로 관광지, 숙소, 음식점을 추천하고 여행 일정을 구성하는 웹 애플리케이션입니다.',
    image: '/images/projects/travel/travel-app.svg', technologies: ['HTML', 'CSS', 'JavaScript', 'Kakao API', 'TourAPI'],
    detail: {
      overview: '사용자가 여행 장소를 찾고 일정을 쉽게 구성할 수 있도록 만든 API 기반 여행 추천 서비스입니다.',
      problem: '서로 다른 API의 여행 정보를 일관된 형태로 통합해 사용자에게 직관적으로 보여줘야 했습니다.',
      approach: 'TourAPI와 Kakao Local API를 연동하고 관광지, 숙소, 음식점 정보를 여행 흐름에 맞게 구성했습니다.',
      engineeringConsiderations: ['API 연동', '데이터 구조', '사용자 흐름', '프런트엔드 로직'],
      tools: ['HTML', 'CSS', 'JavaScript', 'Kakao API', 'TourAPI'],
      whatILearned: '외부 API 데이터를 구조화하고 사용자의 정보 탐색 과정을 중심으로 화면을 설계하는 방법을 배웠습니다.',
    },
  },
]
