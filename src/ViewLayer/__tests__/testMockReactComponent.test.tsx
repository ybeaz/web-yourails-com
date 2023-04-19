import React from 'react'
import renderer from 'react-test-renderer'

import MockReactComponent from '../__mocks__/MockReactComponent'

/**
 * @descriptioon TODO: to make the test work. The test does not work.
 *               It needs to find a solution for jest.config.ts and in particular for the properties, that they can accept:
 *                  preset: 'react-native',
 *                  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
 * @test yarn jest testMockComponent.test
 */
describe('Test MockComponent', () => {
  it('test', () => {
    const component = renderer.create(<MockReactComponent />)
    let tree = component.toJSON()
    console.info('testMockReactComponent.test [19]', { tree })
    const outputed2 = true
    const expected2 = true
    expect(outputed2).toEqual(expected2)
  })
})
