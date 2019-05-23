import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Classic from './views/classic'


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Classic} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
