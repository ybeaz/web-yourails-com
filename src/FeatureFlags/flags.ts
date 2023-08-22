import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export interface IsFeatureFlag {
  (envTypeIn?: string): boolean
}

/** @description Flag to turn on isTemplateFlag */
export const isTemplateFlag: IsFeatureFlag = (envTypeIn = envType) => false

/** @description Flag to turn on isHostR1UserToComFlage */
export const isHostR1UserToComFlag: IsFeatureFlag = (envTypeIn = envType) =>
  false

/**
 * @description Flag to turn on isLocalDataMockOnlyFlag
 * @import import { isLocalDataMockOnlyFlag } from './FeatureFlags'
 */
export const isLocalDataMockOnlyFlag: IsFeatureFlag = (envTypeIn = envType) =>
  false
