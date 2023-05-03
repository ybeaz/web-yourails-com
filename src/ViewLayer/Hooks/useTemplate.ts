import React, { useState, useEffect, useRef } from 'react'

export type UseTemplatePropsType = {}

export interface UseTemplateType {
  (props: UseTemplatePropsType): void
}

/**
 * @description React hook to provide
 * @import import { useTemplate } from './YrlNativeViewLibrary'
 */

export const useTemplate: UseTemplateType = ({}) => {}
