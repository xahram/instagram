import React, { useContext } from 'react'
import SignUp from '../../../components/SignUp/SignUp';
import Login from '../../../components/SignUp/Login';
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const Layout = (props) => {
    const { state } = useContext(AuthContext)
    const { isAuthenticated } = state
    let app = isAuthenticated ? <React.Fragment>
        <header>
            <Link to={{
                pathname: '/third-user',
                search: '?username=jaidi'
            }} >Search User</Link>
        </header>
        <main>
            {props.children}
        </main>
        <footer>

        </footer>

    </React.Fragment> : <React.Fragment>
            <Switch>
                <Route path="/sign-up" exact component={SignUp} />
                <Route exact path="/" component={Login} />
                <Redirect to='/' />
            </Switch>
        </React.Fragment>

    return app;
}

export default Layout