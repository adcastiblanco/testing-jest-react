import React from 'react'
import { createStore } from 'redux'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import initialState from '../initialState'
import reducer from '../reducers'

const store = createStore(reducer, initialState)
const history = createBrowserHistory()

export const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
)

