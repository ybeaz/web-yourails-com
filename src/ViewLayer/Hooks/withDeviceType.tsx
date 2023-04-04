import { FunctionComponent } from 'react'
import { useMediaQueryRes, UseMediaQueryResType } from './useMediaQueryRes'

/**
 * @description Function decorator for React Functional Component
 *    to add mediaParams property that contains data about the user's device
 *    from useMediaQueryRes hook:
 *    const { deviceType, screenCase, width, height } = mediaParams
 * @import import { withDeviceType } from '../../Hooks/withDeviceType'
 * @import import { UseMediaQueryResType  } from '../../Hooks/useMediaQueryRes'
 * @use export const Portfolio = React.memo(withDeviceType(PortfolioComponent))
 */

export const mediaParamsDefault: UseMediaQueryResType = {
  deviceType: 'lgDevice',
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export function withDeviceType(
  Component: FunctionComponent
): FunctionComponent {
  return function WrappedComponent(props: any) {
    const mediaParams: UseMediaQueryResType = useMediaQueryRes()
    return <Component {...props} mediaParams={mediaParams} />
  }
}
