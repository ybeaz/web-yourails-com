import { useState, useEffect, useRef } from 'react'
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

type UseFadeInProps = {
  mode: string
  ref: any
  valueInit: number
  valueTarget: number
  duration: number
  isShow: boolean
}

/**
 * @import import { useFadeIn } from 'src/ViewLayer/Hooks/useFadeIn.ts'
 */

export const useFadeIn = ({
  mode = 'In',
  ref,
  valueInit,
  valueTarget,
  duration,
  isShow,
}: UseFadeInProps) => {
  const [valueTargetState, setValueTargetState] = useState(valueTarget)

  useEffect(() => {
    let startTime: any = performance.now()
    let frameId: any = null

    const onProgress = (progress: number) => {
      ref.current.style.opacity = progress // TODO Stopped here
    }

    const onFrameIn = (now: any) => {
      const timePassed = now - startTime
      const progress = Math.min(timePassed / duration, valueTarget)

      console.info('useFadeIn [30]', {
        now,
        timePassed,
        startTime,
        progress,
      })
      onProgress(progress)
      if (progress < valueTarget) {
        frameId = requestAnimationFrame(onFrameIn)
      }
    }

    const onFrameOut = (now: any) => {
      const timePassed = now - startTime < 0 ? 0 : now - startTime
      const durationTimePassed = (duration - timePassed) / timePassed
      const progress = Math.max(durationTimePassed, valueTarget)
      console.info('useFadeIn [30]', {
        now,
        duration,
        durationTimePassed,
        timePassed,
        startTime,
        progress,
      })
      onProgress(progress)
      if (progress > valueTarget) {
        frameId = requestAnimationFrame(onFrameOut)
      }
    }

    const start = () => {
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
  }, [ref, duration, isShow])

  return valueTargetState
}
