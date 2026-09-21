import {
  BatteryCharging,
  Flame,
  Gauge,
  Cpu,
  Wind,
  Thermometer,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ResearchTopic = {
  title: string
  description: string
  icon: LucideIcon
}

export const researchTopics: ResearchTopic[] = [
  {
    title: '전기차 배터리 열관리',
    description: '배터리 팩 냉각, 온도 균일성과 열 성능',
    icon: BatteryCharging,
  },
  {
    title: '배터리 액체 냉각 / 콜드 플레이트',
    description: '냉각판 형상, 냉각수 유동과 열전달',
    icon: Thermometer,
  },
  {
    title: '배터리 열 안전',
    description: '열폭주 전파와 배터리 안전',
    icon: Flame,
  },
  {
    title: '모터 및 인버터 냉각',
    description: '전기 구동계 부품의 열관리',
    icon: Cpu,
  },
  {
    title: '통합 열관리',
    description: '전기차 파워트레인과 실내의 통합 열 시스템',
    icon: Gauge,
  },
  {
    title: '히트펌프 / 공조 시스템',
    description: '에너지 효율적인 차량 실내 및 열관리 시스템',
    icon: Wind,
  },
]
