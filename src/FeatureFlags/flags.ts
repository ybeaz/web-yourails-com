import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()
import { ClientHttpType } from '../@types/ClientHttpType'

export interface IsFeatureFlag {
  (envTypeIn?: string): boolean | any
}

/** @description Flag to select Http client for graphql connection */
export const selectGraphqlHttpClientFlag: IsFeatureFlag = (
  envTypeIn = envType
) => ClientHttpType['apolloClient']

/** @description Flag to turn on isHostR1UserToComFlage */
export const isStubMessagesToPeopleFlag: IsFeatureFlag = (
  envTypeIn = envType
) => true

/** @description Flag to turn on isHostR1UserToComFlage */
export const isHostR1UserToComFlag: IsFeatureFlag = (envTypeIn = envType) =>
  false

/**
 * @description Flag to turn on isLocalDataMockOnlyFlag
 * @import import { isLocalDataMockOnlyFlag } from './FeatureFlags'
 */
export const isLocalDataMockOnlyFlag: IsFeatureFlag = (envTypeIn = envType) =>
  false

/** @description Flag to turn on isTemplateFlag */
export const isTemplateFlag: IsFeatureFlag = (envTypeIn = envType) => false
