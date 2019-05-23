import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Classic from './views/classic'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Classic} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
