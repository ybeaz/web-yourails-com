import React, { useEffect, useState, FunctionComponent } from 'react'

export type withDelayYrlPropsType = FunctionComponent<any>

interface withDelayInnerYrlType {
  (Component: withDelayYrlPropsType): FunctionComponent
}

type withDelayPropsYrlType = {
  delay: number
}

export interface withDelayYrlType {
  (props: withDelayPropsYrlType): withDelayInnerYrlType
}

/**
 * @description Function decorator for React Functional Component
 *    to render the component with delay
 * @import import { withDelayYrl } from './YrlNativeViewLibrary/Hooks/withDelayYrl'
 * @use export const Portfolio = React.memo(withDeviceType(PortfolioComponent))
 */

export const withDelayYrl: withDelayYrlType = ({ delay }) =>
  function (Component) {
    return function WrappedComponent(props: any) {
      const [isReady, setIsReady] = useState(false)

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsReady(true)
        }, delay)

        return () => {
          clearTimeout(timer)
        }
      }, [delay])

      return isReady ? <Component {...props} /> : null
    }
  }

/*

import React, { useState, useEffect } from 'react';

function DelayedRender({ children, delay = 1000 }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return isReady ? children : null;
}

export default DelayedRender;
*/