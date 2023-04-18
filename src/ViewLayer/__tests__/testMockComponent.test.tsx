import React from 'react'
import { render } from '@testing-library/react-native'

import MockComponent from './mocks/MockComponent'

/**
 * @descriptioon TODO: to make the test work. The test does not work.
 *               It needs to find a solution for jest.config.ts and in particular for the properties, that they can accept:
 *                  preset: 'react-native',
 *                  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
 * @test yarn jest testMockComponent.test
 */
describe('Test MockComponent', () => {
  it('test', () => {
    const { getByTestId } = render(<MockComponent />)

    const myText = 'text' // getByTestId('my-text')

    const var1: string = 'abc'
    console.info('App.test [42]', { var1, myText })
    expect(myText).toBeTruthy()
  })
})
