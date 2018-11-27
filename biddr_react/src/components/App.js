import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from "./WelcomePage";
import AuctionIndexPage from "./AuctionIndexPage";
import AuctionNewPage from "./AuctionNewPage";
import AuctionShowPage from "./AuctionShowPage";
import SignInPage from "./SignInPage";
import NavBar from "./NavBar";
import { User, Session } from '../requests';
import AuthRoute from './AuthRoute';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        };
        this.getUser = this.getUser.bind(this);
        this.destroySession = this.destroySession.bind(this);
    }
    destroySession() {
        Session.destroy().then(() => this.setState({ currentUser: null }));
    }
    
    getUser() {
    User.current().then(currentUser => {
        if (currentUser.id) {
        this.setState({ currentUser });
        }
    });
    }
    
    componentDidMount() {
    this.getUser();
    }
    
    render() {
        const { currentUser } = this.state;
        return(
            <Router>
                <div className="App">
                    <NavBar currentUser={currentUser} onSignOut={this.destroySession} />
                    <Switch>
                    <Route
                        path="/session/new"
                        exact
                        render={routeProps => (
                            <SignInPage {...routeProps} onSignIn={this.getUser} />
                        )}
                    />
                    <AuthRoute
                        isAuth={currentUser}
                        path="/auctions/new"
                        exact
                        component={AuctionNewPage}
                    />
                    <AuthRoute
                        isAuth={currentUser}
                        path="/auctions/:id"
                        exact
                        component={AuctionShowPage}
                    />
                    <AuthRoute
                        isAuth={currentUser}
                        path="/auctions"
                        exact
                        component={AuctionIndexPage}
                    />
                    <Route path="/" exact component={WelcomePage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;