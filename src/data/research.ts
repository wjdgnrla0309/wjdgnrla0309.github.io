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
    title: 'EV Battery Thermal Management',
    description: 'Battery pack cooling, temperature uniformity and thermal performance',
    icon: BatteryCharging,
  },
  {
    title: 'Battery Liquid Cooling / Cold Plate',
    description: 'Cooling plate geometry, coolant flow and heat transfer',
    icon: Thermometer,
  },
  {
    title: 'Battery Thermal Safety',
    description: 'Thermal runaway propagation and battery safety',
    icon: Flame,
  },
  {
    title: 'Motor & Inverter Cooling',
    description: 'Thermal management of electric drivetrain components',
    icon: Cpu,
  },
  {
    title: 'Integrated Thermal Management',
    description: 'Integrated thermal systems for EV powertrain and cabin',
    icon: Gauge,
  },
  {
    title: 'Heat Pump / HVAC',
    description: 'Energy-efficient vehicle cabin and thermal management systems',
    icon: Wind,
  },
]
