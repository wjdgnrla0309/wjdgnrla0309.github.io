import { BatteryCharging, Flame, Layers, Server, Gauge, Cpu, Wind, Thermometer, type LucideIcon } from 'lucide-react'
export type ResearchTopic = { title:string; description:string; icon:LucideIcon }
export const researchTopics: ResearchTopic[] = [
 {title:'Heat Exchanger Design & Optimization',description:'열교환기·냉각부품의 열유동 해석, 설계 및 최적화',icon:Layers},
 {title:'Data Center Cooling',description:'서버·데이터센터의 냉각 방식과 열부하 대응',icon:Server},
 {title:'EV Battery Thermal Management',description:'배터리 냉각, 온도 균일성 및 열성능',icon:BatteryCharging},
 {title:'Liquid Cooling / Cold Plate',description:'냉각 유로 형상, 유동 및 열전달',icon:Thermometer},
 {title:'Battery Thermal Safety',description:'열폭주 전파와 배터리 안전',icon:Flame},
 {title:'Motor & Inverter Cooling',description:'전기 구동계 부품의 열관리',icon:Cpu},
 {title:'Integrated Thermal Management',description:'파워트레인과 실내 열관리의 시스템 통합',icon:Gauge},
 {title:'Heat Pump / HVAC',description:'에너지 효율적인 공조·히트펌프 및 열관리 (차량·건물)',icon:Wind},
]
