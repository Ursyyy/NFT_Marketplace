import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import Link from "@material-ui/core/Link"
import Web3 from 'web3'

import makeTheme from './classes'

const Login = ({message, setUser}) => {
    const classes = makeTheme()
    const [openInfo, setOpenInfo] = useState(['', false])
    const [infoMsg, setInfoMsg] = useState('')
    const [eth, setEth] = useState(null)

    const handleClose = (event) => {
        setOpenInfo(false);
    }

    const ethLogin = async () => {
        if (window.ethereum) {
            setEth(new Web3(window.ethereum))
            try { 
                let res = await window.ethereum.enable()
                if(res[0].match(/^0x[a-fA-F0-9]{40}$/g)){
                    setInfoMsg("Login success, you can rent appartment")
                    setOpenInfo(['success', true])
                    setUser(res[0])
                } else{
                    throw "Incorrect eth wallet"
                }
            } catch(e) {
                setInfoMsg(e)
                setOpenInfo(['error', true])
            }
         }
         else if (window.web3) {
            setEth(new Web3(window.web3.currentProvider))
         }
         else {
            setInfoMsg(
                (<>
                    You have to install MetaMask !
                    <Link 
                        className={classes.link}
                        target="_blank"
                        href="https://metamask.io/"
                        >
                        Download
                    </Link>
                </>)
            )
            setOpenInfo(['warning', true])
         }
    }

    return (
        <Container component="main">
            <div className={classes.container}>
                <Typography className={classes.laber}>{message}</Typography>

                <Button  
                    variant="outlined"
                    className={classes.button}
                    onClick={ethLogin}
                    fullWidth
                    >
                    connect
                </Button>
                <Typography className={classes.addition}>*No payments. It's only for creating demo NFT.</Typography>
            </div>
            <Snackbar open={openInfo[1]} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={openInfo[0]}>
                    {infoMsg}
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Login