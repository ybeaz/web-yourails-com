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
 * @media accepted sizes:
  xs 320-480px
  mobile sm 481-768
  tablets md 769 - 1024
  Desktop/laptop lg 1025 - 1620
  Wide screens xl 1621 - 16000'
 */

export const mediaParamsDefault: UseMediaQueryResType = {
  deviceType: 'lgDevice',
  screenCase: 'lgXl',
  width: 1024,
  height: 800,
}

export function withDeviceType(
  Component: FunctionComponent<any>
): FunctionComponent {
  return function WrappedComponent(props: any) {
    const mediaParams: UseMediaQueryResType = useMediaQueryRes()
    return <Component {...props} mediaParams={mediaParams} />
  }
}
