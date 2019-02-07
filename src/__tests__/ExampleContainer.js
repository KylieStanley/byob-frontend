import React from 'react'
import { shallow } from 'enzyme'
import  ExampleContainer from '../ExampleContainer'


describe('ExampleContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ExampleContainer example={{}} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
