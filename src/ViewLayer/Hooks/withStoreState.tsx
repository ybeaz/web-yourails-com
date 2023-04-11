import { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { RootStoreType } from '../../@types/RootStoreType'
import { rootStoreDefault } from '../../DataLayer/rootStoreDefault'

/**
 * @description Function decorator for React Functional Component
 *    to provide a component with state in a declarative way writing
 *    concise, reusable, and declarative code
 *    In a declarative approach, you would typically define what a component should do based on its props and state.
 *    In contrast, an imperative approach involves directly instructing the component to perform a specific action or behavior.
 * @import import { withStoreState } from '../../Hooks/withStoreState'
 */

export const mediaParamsDefault: any = {}

export function withStoreState(
  Component: FunctionComponent<any>
): FunctionComponent {
  return function WrappedComponent(props: any) {
    const store = useSelector(
      (store2: RootStoreType = rootStoreDefault) => store2
    )
    return <Component {...props} store={store} />
  }
}
