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
  category: string
  description: string
  image: string
  technologies: string[]
  github?: string
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    title: 'KUMA Formula Student',
    category: 'Formula Student / Automotive Engineering',
    description:
      '국립공주대학교 자작자동차 동아리 KUMA 활동을 통해 Formula Student 차량의 구조 및 차량 시스템을 학습하고 있다.',
    image: '/images/projects/kuma/kuma-car.svg',
    technologies: ['MATLAB', 'Vehicle Dynamics', 'Mechanical Design'],
    github: 'https://github.com/',
    detail: {
      overview:
        'KUMA Formula Student 활동을 통해 차량 구조와 시스템적 사고를 학습하고, 차량 성능을 이해하는 프로젝트 기반 경험을 쌓고 있다.',
      problem:
        'Formula Student 차량의 설계 및 성능을 이해하기 위해서는 단순한 구조 관찰을 넘어 차량 동역학과 가속 성능을 연결해서 해석할 필요가 있었다.',
      approach:
        '차량 시스템 구성 요소를 학습하고 MATLAB을 활용해 0–75 m 가속 성능 시뮬레이션을 수행하며, 동역학 관점에서 차량의 성능 요소를 정리했다.',
      engineeringConsiderations: [
        'Vehicle dynamics',
        'Chassis',
        'Acceleration simulation',
        'Engineering design',
        'Vehicle testing',
      ],
      tools: ['MATLAB', 'Vehicle Dynamics', 'Mechanical Design'],
      result:
        '완성된 차량 성능 결과물은 아니지만, 가속 성능을 수치적으로 해석하고 시스템 관점에서 차량을 바라보는 경험을 쌓았다.',
      whatILearned:
        '차량 설계는 단순한 구조가 아니라 동역학, 제동, 토크 전도, 무게 배분과 함께 고려되어야 한다는 점을 체감했다.',
    },
  },
  {
    title: 'Laboratory Automation System',
    category: 'Automation / Research Equipment',
    description:
      '실험실에서 반복적으로 수행되는 surface coating / swabbing 작업의 편차를 줄이기 위해 Cartesian motion system을 이용한 자동화 장치를 연구하고 있다.',
    image: '/images/projects/automation/automation.svg',
    technologies: ['Automation', 'CNC', '3D Printer', 'Mechanical Design', 'Experiment Design'],
    detail: {
      overview:
        '반복 실험 과정에서 발생하는 작업 편차를 줄이기 위해 Cartesian motion platform 기반 자동화 장치에 대한 개념을 검토하고 있다.',
      problem:
        '금속 표면에 특정 물질을 일정하게 도포하고 swab하는 과정에서 작업자의 수작업 편차가 실험 결과에 영향을 줄 수 있었다.',
      approach:
        '3D Printer 또는 CNC motion platform을 개조해 일정한 이동 속도, 접촉 압력, 이동 거리, 반복성 확보를 목표로 연구 개념을 정립하고 있다.',
      engineeringConsiderations: [
        'Motion control',
        'Repeatability',
        'Contact force control',
        'Experimental consistency',
        'Mechanical integration',
      ],
      tools: ['Automation', 'CNC', '3D Printer', 'Mechanical Design', 'Experiment Design'],
      whatILearned:
        '실험 자동화는 장비 제어뿐 아니라 실험 조건의 표준화와 측정 신뢰성을 함께 설계해야 한다는 점을 배우고 있다.',
    },
  },
  {
    title: 'Lunar Landing Device',
    category: 'Engineering Design',
    description:
      '대학교 창의적공학설계 프로젝트로 제한된 재료와 비용 조건에서 낙하 물체가 목표 지점에 정확하게 착지하고 payload를 보호하도록 설계하는 프로젝트이다.',
    image: '/images/projects/landing/landing.svg',
    technologies: ['Engineering Design', 'Physics', 'Experiment', 'Prototype'],
    detail: {
      overview:
        '제한된 재료와 비용 조건 속에서 안정적 낙하와 payload 보호를 목표로 설계 사고를 적용한 프로젝트이다.',
      problem:
        '낙하 속도, 안정성, 충격 흡수, 착지 정확도를 동시에 확보해야 하므로 설계 변수 간의 trade-off가 크다.',
      approach:
        'Drag, Stability, Impact Absorption, Landing Accuracy를 고려하며, 프로토타입 제작과 실험을 통해 설계를 검증하는 흐름으로 진행했다.',
      engineeringConsiderations: [
        'Drag',
        'Stability',
        'Impact absorption',
        'Landing accuracy',
        'Prototype testing',
      ],
      tools: ['Engineering Design', 'Physics', 'Experiment', 'Prototype'],
      whatILearned:
        '설계는 개념을 정리하는 단계에서부터 실험 검증을 통해 수정할 수 있는 구조적 사고가 중요하다는 것을 배웠다.',
    },
  },
  {
    title: 'Arduino Line Tracing Car',
    category: 'Embedded / Control',
    description:
      'Arduino 기반 라인트레이싱 차량을 설계하고 tuning한 프로젝트. 센서 데이터를 이용해 차량 방향을 제어하고 PWM을 조절하여 직선 및 곡선 구간의 주행 안정성을 개선했다.',
    image: '/images/projects/arduino/arduino-car.svg',
    technologies: ['Arduino', 'C/C++', 'Sensor', 'PWM', 'Control'],
    detail: {
      overview:
        '센서 기반 제어를 통해 라인 추종 성능을 개선하고, 직선과 곡선 구간에서의 안정성을 분석한 임베디드 제어 프로젝트이다.',
      problem:
        '센서 값과 차량의 반응 특성이 달라서 직선 구간에서는 빠르게, 곡선 구간에서는 안정적으로 주행해야 했다.',
      approach:
        '센서 데이터를 기반으로 방향 제어와 PWM 출력 값을 조정하며, 주행 특성을 반복적으로 튜닝했다.',
      engineeringConsiderations: [
        'Sensor feedback',
        'Control tuning',
        'PWM adjustment',
        'Steering stability',
        'Real-time response',
      ],
      tools: ['Arduino', 'C/C++', 'Sensor', 'PWM', 'Control'],
      whatILearned:
        '제어는 이론보다 센서 반응과 시스템 지연을 정량적으로 이해하는 과정이 핵심이라는 점을 배웠다.',
    },
  },
  {
    title: 'KUMA Website',
    category: 'Web Development',
    description:
      'Formula Student 팀 KUMA의 홈페이지 개발.',
    image: '/images/projects/kuma/kuma-site.svg',
    technologies: ['React', 'Vite', 'GitHub', 'GitHub Pages'],
    github: 'https://github.com/',
    detail: {
      overview:
        '팀 소개와 프로젝트 진행 내용을 전달하기 위한 웹사이트를 제작하며 프론트엔드 개발 경험을 확장했다.',
      problem:
        '팀의 활동 내용을 구조적으로 전달하고, 간단한 정보 전달과 접근성을 개선할 필요가 있었다.',
      approach:
        'React와 Vite를 활용해 간단한 구조와 반응형 레이아웃을 구성하고, GitHub Pages를 통해 배포 가능한 형태로 정리했다.',
      engineeringConsiderations: [
        'Responsive layout',
        'Content organization',
        'Deployability',
        'Web usability',
      ],
      tools: ['React', 'Vite', 'GitHub', 'GitHub Pages'],
      whatILearned:
        '웹 개발은 기능뿐 아니라 사용자 정보 전달 구조와 시각적 정리의 중요성을 경험하게 해준 프로젝트였다.',
    },
  },
  {
    title: 'Travel Recommendation Web Application',
    category: 'Web Development / API',
    description:
      'TourAPI 및 Kakao Local API 등을 활용하여 관광지, 숙소 및 음식점을 추천하고 여행 일정을 구성하는 웹 애플리케이션을 개발했다.',
    image: '/images/projects/travel/travel-app.svg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Kakao API', 'TourAPI'],
    detail: {
      overview:
        '사용자가 여행 장소와 일정 구성을 손쉽게 준비할 수 있도록 API 기반 추천 기능을 담은 웹 애플리케이션이다.',
      problem:
        '여행 정보를 여러 API와 데이터 형태로 통합해 사용자에게 체계적으로 보여주어야 했다.',
      approach:
        'TourAPI와 Kakao Local API를 결합해 숙소, 관광지, 음식점 정보를 정리하고 여행 일정을 구성하는 흐름을 설계했다.',
      engineeringConsiderations: [
        'API integration',
        'Data structure',
        'User flow',
        'Frontend logic',
      ],
      tools: ['HTML', 'CSS', 'JavaScript', 'Kakao API', 'TourAPI'],
      whatILearned:
        'Web 앱은 사용자 입장에서 정보 탐색의 흐름을 설계하는 것이 중요하며, API 활용은 구조화된 데이터 처리와 서비스 구성이 핵심이라는 점을 배웠다.',
    },
  },
]
