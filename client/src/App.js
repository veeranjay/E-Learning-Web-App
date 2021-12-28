import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './pages/Login/Login';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact><Login/></Route>
            </Switch>
        </Router>
    );
};
export default App;