import React from 'react'
import Typography from '@material-ui/core/Typography'
import Login from '../login/login'
import Accounts from '../accounts/accounts'
import ListOfHomes from '../listOfHomes/listOfHomes'
import makeTheme from './classes'
import main from '../../img/main.png'
const Main = ({setUser, user}) => { 
    const classes = makeTheme()
    return (
        <>
            <div className={classes.description}>
                <img src={main}/>
                <div className='text'>
                    <p className='title_1'>3 days in Paris</p>
                    <p className='title_2'>with NFT rent</p>
                    <Login setUser={setUser} message={'Just connect Metamask and choose apartment'}/>
                </div>
            </div>
            <div>
                <ListOfHomes setUser={setUser} user={user}/>
            </div>
            <Typography className={classes.title}>Team Information</Typography>
            <Accounts/>
            <div className={classes.footer}/>
        </>
    )
}

export default Main