import React from 'react'
import ReactDOM from 'react-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducers/rootReducer'

const initialState = {
  todos: [
    {
      title: 'redux-test',
      id: 0,
      isComplete: false
    }, 
    {
      title: 'redux-heavy',
      id: 1,
      isComplete: false
    }
  ]
}

const reduxDevToolsExtension = window.devToolsExtension && window.devToolsExtension()
const allStoreMiddleware = compose(applyMiddleware(thunk), reduxDevToolsExtension)

const store = createStore(rootReducer, initialState, allStoreMiddleware)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()