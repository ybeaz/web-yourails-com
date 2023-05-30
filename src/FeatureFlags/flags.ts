import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export interface IsFeatureFlag {
  (envTypeIn?: string): boolean
}

/** @description Flag template */
export const isTemplateFlag: IsFeatureFlag = (envTypeIn = envType) => false

/** @description Flag template */
export const isHostR1UserToComFlag: IsFeatureFlag = (envTypeIn = envType) =>
  false
