import { ClientHttpType } from '../@types/ClientHttpType'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export interface FeatureFlagType {
  (envTypeIn?: string): boolean | any
}

/** @description Flag to select Http client for graphql connection */
export const selectGraphqlHttpClientFlag: FeatureFlagType = (
  envTypeIn = envType
) => ClientHttpType['apolloClient']

/** @description Flag to turn on isHostR1UserToComFlage */
export const isStubMessagesToPeopleFlag: FeatureFlagType = (
  envTypeIn = envType
) => true

/** @description Flag to turn on isHostR1UserToComFlage */
export const isHostR1UserToComFlag: FeatureFlagType = (envTypeIn = envType) =>
  false

/**
 * @description Flag to turn on isLocalDataMockOnlyFlag
 * @import import { isLocalDataMockOnlyFlag } from './FeatureFlags'
 */
export const isLocalDataMockOnlyFlag: FeatureFlagType = (envTypeIn = envType) =>
  false

/** @description Flag to turn on isTemplateFlag */
export const isTemplateFlag: FeatureFlagType = (envTypeIn = envType) => false
