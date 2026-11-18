import { BatteryCharging, Layers, Server, Wind, type LucideIcon } from 'lucide-react'
export type ResearchTopic = { title:string; description:string;descriptionEn:string; icon:LucideIcon }
export const researchTopics: ResearchTopic[] = [
 {title:'Heat Exchanger & Liquid Cooling',description:'열교환기·냉각판의 원리와 설계 배우기',descriptionEn:'Learning the principles and design of heat exchangers and cold plates',icon:Layers},
 {title:'EV Battery Thermal Management',description:'배터리 냉각, 온도 균일성 및 열폭주 안전',descriptionEn:'Battery cooling, temperature uniformity, and thermal-runaway safety',icon:BatteryCharging},
 {title:'Data Center Cooling',description:'서버·데이터센터의 냉각 방식과 열부하 대응',descriptionEn:'Cooling methods for servers and data centers, and handling heat loads',icon:Server},
 {title:'Integrated Thermal System',description:'구동계 냉각, 히트펌프·HVAC를 포함한 시스템 통합 열관리',descriptionEn:'System-level thermal management, including drivetrain cooling, heat pumps, and HVAC',icon:Wind},
]
