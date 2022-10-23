
import { Switch, Route } from "react-router-dom";

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';

export function Routes(){
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/register' component={SignUp} />
      <Route exact path='/home' component={Home} />
    </Switch>
  )
}