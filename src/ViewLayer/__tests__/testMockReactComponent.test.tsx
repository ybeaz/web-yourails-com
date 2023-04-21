import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'

import MockReactComponent from '../__mocks__/MockReactComponent'

/**
 * @descriptioon Testing test
 * @link https://www.npmjs.com/package/react-test-renderer?activeTab=readme
 * @link https://www.npmjs.com/package/@testing-library/react
 * @test yarn jest testMockComponent.test
 */
describe('Test MockComponent', () => {
  it('test', () => {
    const element = renderer.create(<MockReactComponent />)
    const testInstance = element.root
    const outputed = testInstance.findByType('span').children[0].toString()
    const expected = 'Hello, World!'
    expect(outputed).toEqual(expected)
  })
})
