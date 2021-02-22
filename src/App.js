import './App.scss';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
