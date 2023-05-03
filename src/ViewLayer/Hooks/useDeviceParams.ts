import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'

export type UseDeviceParamsPropsType = {}

export interface UseDeviceParamsType {
  (props: UseDeviceParamsPropsType): void
}

/**
 * @description React hook to provide
 * @import import { useDeviceParams } from './YrlNativeViewLibrary'
 */

export const useDeviceParams: UseDeviceParamsType = ({}) => {}
