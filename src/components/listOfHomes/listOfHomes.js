import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

import Login from '../login/login'

import useStyles from './classes'

import main from '../../img/main.webp'

const ListOfHomes = ({user, setUser}) => {
	let classes = useStyles()
	const [open, setOpen] = useState(false)
	const [nft, openNFT] = useState([false, ''])

	const handleClose = () => {
		setOpen(false)
		openNFT([false, ''])
	}

	const openDialog = () => {
		setOpen(true)
		if(user !== null){
			setTimeout(() => {
				setOpen(false)
			}, 2000)
		}
	}

	const openNftDialog = (text) => {
		setOpen(true)
		openNFT([true, text])
		console.log(text)
	}

	let object = {
		name: 'Superb Room for two',
		description: 'Cozy rooms of about 15 m², with a bed 150 x 190 cm, perfect for a business stay or for a trip for two in Paris. The bathrooms are equipped with a shower or bathtub according to the configuration of the room. Each room is equipped with a courtesy tray with a kettle (tea, coffee), a minibar, an individual safe, reading lights, a telephone, a flat screen TV with International and sports channels, WiFi and air conditioning. Some of our Classic rooms overlook a quiet courtyard, others the Victoria Avenue. All our toiletries are paraben, silicone and colorant-free. A complimentary baby cot can be put in the room if needed.',
		amenities: ['Elevator', 'Wi-Fi', 'Cable TV', 'Air conditioning', 'Separate workplace', 'TV with standard cable TV'],
		img: main,
		token: (
			<>
				<Typography className={classes.nftTitle}>Contract Address</Typography>
				<Typography className={classes.content}>0x495f947276749ce646f68ac8c248420045cb7b5e</Typography>
				<Typography className={classes.nftTitle}>Token ID</Typography>
				<Typography className={classes.content}>643945320248190331048123534917681430491297414910
				83158618727442677610011688961</Typography>
				<Typography className={classes.nftTitle}>Token Name</Typography>
				<Typography className={classes.content}>Superb Room for two</Typography>
				<Typography className={classes.nftTitle}>Original Image</Typography>
				<Typography className={classes.content}>https://www.airbnb.com.ua/rooms/41227843/photos?
				check_in=2021-05-07&federated_search_id=6b41061b-8826-
				4903-9ef1-6ae6da3a665a&source_impression_id=p3_1618421824_
				X1Nf9PHBvYIgJcCP&guests=1&adults=1&check_out=2021-05-09</Typography>
				<Typography className={classes.nftTitle}>Original Creator</Typography>
				<Typography className={classes.content}>0x8E5e0376922B04574D29F868E0a43761c5716056</Typography>
			</>
		)
	}
	return (
		<Container className={classes.root}>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					<Paper 
						elevation={3}
						className={classes.paper}
						>
						<img src={object.img}/>
						<div className="caption">
							<Typography className="title">{object.name}</Typography>
							<Typography className="description">{object.description}</Typography>
						</div>
						<div className="amenities">
							<Typography className='title'>Amenities:</Typography>
							{object.amenities.map(item => (
								<Typography className='item'>
									{item}
								</Typography>
							))}
						</div>
						<div className='info'>
							<div className='descr'>
								<Typography>Free days: 01.05 - 03.05</Typography>
								{/* <Typography>01.05 - 03.05</Typography> */}
							</div>
							<div className="btnGroup">
								<Button 
									color='primary'
									variant='outlined'
									onClick={() => openNftDialog(object.token)}
									>
									Details
								</Button>
								<Button 
									color='secondary'
									variant='outlined'
									onClick={openDialog}
									>
									Rent
								</Button>
							</div>
						</div>
					</Paper>
				</Grid>
			</Grid>
			<Dialog 
				onClose={handleClose} 
				aria-labelledby="simple-dialog-title" 
				open={open}
				>
      			{!nft[0] ?
				  	user === null ?
					  	<div className={classes.login}>
							<Login 
								setUser={setUser} 
								message={'Firstly, you should connect Metamask'}/>
						</div>
					:
					<>
						<DialogTitle id="simple-dialog-title">
							<CheckCircleOutlineIcon className={classes.dialog}/>
						</DialogTitle>
						<div className={classes.description}>
							You have successfully rented this apartment
						</div>
					</>:
					<div className={classes.nft}>
						{nft[1]}
						<DialogActions>
							<Button onClick={handleClose} color="primary" autoFocus>
								Close
							</Button>
						</DialogActions>
					</div>
				}
     		</Dialog>
		</Container>
	)
}

export default ListOfHomes