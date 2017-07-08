import React from 'react'
import App from 'components/App'

//// redux options
// import { createStore, applyMiddleware } from 'redux'
// import { Providor } from 'react-redux'
//
// const middlewares = []
//
// const preloadState = {}
//
// const reducer = (state = preloadState, action) => {
//
//   const { type, payload } = action
//
//   switch (type) {
//     default:
//       return state
//   }
// }
//
// const store = createStore(
//   reducer,
//   preloadState,
//   applyMiddleware(...middlewares)
// )

const AppContainer = () => {

  return (
    // <Providor store={ store }>
      <App />
    // </Providor>
  )
}

export default AppContainer
