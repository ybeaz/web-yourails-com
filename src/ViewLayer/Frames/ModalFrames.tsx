import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { ButtonYrl } from '../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../@types/RootStoreType'

interface IGetChildren {
  (children: any[]): (JSX.Element | null)[]
}

const ChildStub = <div>This is modul stub</div>

const CHILDREN: any = {
  ChildStub,
}

export const ModalFrames: React.FunctionComponent = (): ReactElement => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    componentsState: { modalFrames },
  } = store

  const getChildren: IGetChildren = children => {
    return children.map((child, index) => {
      const { childName, isShow, childProps } = child
      const CHILD = CHILDREN[childName]

      if (!CHILD) return null

      const closeAction = {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [{ childName, isShow: false, childProps }],
      }

      const addClass = !isShow ? '' : 'ModalFrames_display'

      const propsOut: Record<string, any> = {
        buttonCloseProps: {
          // title?: string
          // styleProps?: { button: any; text: any } | undefined
          // disabled?: boolean
          onPress: () => {
            handleEvents({}, closeAction)
          },
          // iconProps?: IIconYrlProps
        },
        childProps,
      }

      return (
        <div
          id='modalFrames'
          className={`ModalFrames ${addClass} ModalFrames_${childName}`}
          key={`mf-${index}`}
          onClick={event => handleEvents(event, closeAction)}
        >
          <div className='_content'>
            <span className='_close'>
              <ButtonYrl {...propsOut.buttonCloseProps} />
            </span>
            <div
              className='_inner'
              onClick={event =>
                handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })
              }
            >
              <CHILD {...propsOut.childProps} />
            </div>
          </div>
        </div>
      )
    })
  }

  return <>{getChildren(modalFrames)}</>
}
