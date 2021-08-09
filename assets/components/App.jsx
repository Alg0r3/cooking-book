import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import FridgeForm from './your-fridge/FridgeForm';
import RecipeDetails from './your-fridge/RecipeDetails';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/fridge" component={FridgeForm} />
                        <Route path="/recipes/:id" component={RecipeDetails} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
