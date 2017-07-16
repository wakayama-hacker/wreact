import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from 'components/App'

describe('<App />', () => {
  it('should render single <h1>', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1')).to.have.length(1)
  })
})
