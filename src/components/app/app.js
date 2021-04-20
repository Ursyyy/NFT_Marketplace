import React, {useState} from 'react'
import { Route, Switch } from 'react-router'
import Header from '../header/header'
import Main from '../mainPage/mainPage'
import Login from '../login/login'
import ListOfHomes from '../listOfHomes/listOfHomes'

const App = () => {
    const [user, setUser] = useState(null)
    return (
        <>
            <Header user={user} setUser={setUser}/>
            <Switch>
                <Route exact path="*">
                    <Main setUser={setUser} user={user}/>
                </Route>
            </Switch>
        </>
    )
}

export default App