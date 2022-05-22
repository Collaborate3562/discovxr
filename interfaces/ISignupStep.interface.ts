import { TBooleanOrString } from '~/types'

export interface ISignupStep {
  isComplete: boolean
  component: string
  label: string
  title: string
  subtitle: TBooleanOrString
  data: any
}
