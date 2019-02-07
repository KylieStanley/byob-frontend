import React from 'react'
import { shallow } from 'enzyme'
import Form from '../Form'


describe('Form', () => {
  let wrapper
  let mockEvent

  beforeEach(() => {
    wrapper = shallow(<Form handleResult={ jest.fn() } />)
    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        options: [{value: "DELETE"}, {value: "POST"}],
        selectedIndex: 1,
        value: 2
      }
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update the method in state', () => {
    wrapper.instance().updateMethod(mockEvent)
    expect(wrapper.instance().state.method).toEqual('POST')
  })

  it('should submit a request on submit of the form', () => {
    const spy = jest.spyOn(wrapper.instance(), 'submitRequest')
    wrapper.instance().forceUpdate()
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    })

    expect(spy).toHaveBeenCalled()
  })

  it('should run change updateMethod on change of the select', () => {
     const spy = jest.spyOn(wrapper.instance(), 'updateMethod')
    wrapper.instance().forceUpdate()
    wrapper.find('select').at(0).simulate('change', mockEvent)
    expect(spy).toHaveBeenCalled()
  })

  it('should check the method and run the appropriate api call', () => {
    const spy = jest.spyOn(wrapper.instance(), 'submitGet')
    wrapper.instance().checkMethods()
    expect(spy).toHaveBeenCalled()
  })

  it('should update the path for endpoints requiring an id', () => {
    wrapper.instance().setState({ path: '/api/v1/states/:id'})
    wrapper.instance().updatePath(mockEvent)
    expect(wrapper.instance().state.path).toEqual('/api/v1/states/2')
  })
})
