import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'

import useStyles from './classes'

import alex from './avatars/alex.jpg'
import andr from './avatars/andr.jpg'
import vasiliy from './avatars/vasiliy.jpeg'

const Accounts = () => {
    const classes = useStyles()

    return (
        <List className={classes.list}>
            <ListItem className='listItem' key="Andrey">
                <Avatar className='avatar' alt="Andrey Bobyliak" src={andr} />
                <ListItemText>
                    <Typography className='name'>
                        Andrey Bobyliak
                    </Typography>
                </ListItemText>
                <ListItemText className='descr'>
                    Candidate Ph.D. in Mathematics, marketing consultant, entrepreneur with more than 10 years of experience in creating and running various business projects
                </ListItemText>
                <Link
                    className='link'
                    href='https://www.facebook.com/andriy.bobyliak'
                    target='_blank'>
                    <FacebookIcon/>
                </Link>
            </ListItem>
            <ListItem className='listItem' key="Alex">
                <Avatar className='avatar' alt="Alex Balabash" src={alex} />
                <ListItemText>
                    <Typography className='name'>
                        Alex Balabash
                    </Typography>
                </ListItemText>
                <ListItemText className='descr'>
                    Fullstack Developer. Skill stack: React JS, JS, HTML / CSS, Node.js, Python, MySQL, Postrges, Docker. Experience in project development with hyperledger / fabrik.
                </ListItemText>
                <Link
                    className='link'
                    target="_blank"
                    href='https://www.linkedin.com/in/ursyyy/'>
                    <LinkedInIcon/>
                </Link>
            </ListItem>
            <ListItem className='listItem' key="Vasiliy">
                <Avatar className='avatar' alt="Vasyl Shypivdych" src={vasiliy} />
                <ListItemText>
                    <Typography className='name'>
                        Vasyl Shypivdych
                    </Typography>
                </ListItemText>
                <ListItemText className='descr'>
                    Developer: java developer, databases developer (Oracle, SqlServer, postgres, MySQL)
                </ListItemText>
                <Link
                    className='link'
                    target="_blank"
                    href='https://www.linkedin.com/in/vasyl-shypivdych-60509339/'>
                    <LinkedInIcon/>
                </Link>
            </ListItem>
        </List>
    )
}

export default Accounts