import { Switch, Route, Redirect } from "react-router-dom";
import About from '../pages/About'
import Board from '../pages/Board'
import Home from '../pages/Home'

const Routes = (props) => {
    return ( 
        <Switch>
            <Route exact path='/board' component={Board}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/home' component={Home}/>
            <Redirect to='/home'/>
        </Switch>
     );
}
 
export default Routes;