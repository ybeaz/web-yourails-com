import { useState, useEffect, useRef } from 'react'
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

type useAnimatedYrlProps = {
  ref: any
  isActive: boolean
  nameHtmlCssAttribute: string
  valueInit: number
  valueTarget: number
  duration: number
  trigger: any
  triggerShouldEqual: any
  testID?: string
}

/**
 * @import import { useAnimatedYrl } from 'src/ViewLayer/Hooks/useAnimatedYrl.ts'
 */

export const useAnimatedYrl = ({
  ref,
  isActive,
  valueInit,
  valueTarget,
  nameHtmlCssAttribute,
  duration,
  trigger,
  triggerShouldEqual,
  testID,
}: useAnimatedYrlProps) => {
  const mode = valueInit < valueTarget ? 'In' : 'Out'

  useEffect(() => {
    let startTime: any = performance.now()
    let frameId: any = null

    const onProgress = (progress: number) => {
      ref.current.style[nameHtmlCssAttribute] = progress // TODO Stopped here
    }

    const onFrameIn = (now: any) => {
      const timePassed = now - startTime
      const progress = Math.min(timePassed / duration, valueTarget)
      onProgress(progress)
      if (progress < valueTarget) {
        frameId = requestAnimationFrame(onFrameIn)
      }
    }

    const onFrameOut = (now: any) => {
      const timePassed = now - startTime < 0 ? 0 : now - startTime
      const durationTimePassed = (duration - timePassed) / timePassed
      const progress = Math.max(durationTimePassed, valueTarget)
      onProgress(progress)
      if (progress > valueTarget) {
        frameId = requestAnimationFrame(onFrameOut)
      }
    }

    const start = () => {
      if (!isActive || trigger !== triggerShouldEqual) return
      onProgress(valueInit)
      startTime = performance.now()

      const onFrame = mode === 'In' ? onFrameIn : onFrameOut

      frameId = requestAnimationFrame(onFrame)
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
      startTime = null
      frameId = null
    }

    start()
    return () => stop()
  }, [ref, duration, trigger])

  return undefined
}
