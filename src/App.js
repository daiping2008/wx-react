import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Classic from './views/classic'
import Book from './views/book'
import BookDetail from './views/book-detail'


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Classic} />
            <Route path='/book' component={Book} />
            <Route path='/book-detail/:bid' component={BookDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
