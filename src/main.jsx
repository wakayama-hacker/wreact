import React from 'react'
import { render as _render } from 'react-dom'
import { AppContainer as HMRContainer } from 'react-hot-loader'
import App from './containers/AppContainer'


/**
 * render React App
 * @param  {ReactComponent} Component React Component
 * @return {void}
 */
const render = Component =>
  _render(
    <HMRContainer>
      <Component />
    </HMRContainer>,
    document.getElementById('app')
  )

render(App)

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default
    render(NextApp)
  })
}
