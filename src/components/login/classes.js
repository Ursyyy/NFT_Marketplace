import { makeStyles } from '@material-ui/core/styles';

const makeTheme = makeStyles( theme => ({

    container: {
        // display: 'flex',
        margin: '20px 0'
    },

    button:{
        height: 40,
        // maxWidth: 250,
        borderRadius: 12,
        marginTop: theme.spacing(2),
        backgroundColor: "#00add899",
        borderColor: "#00add800",
        color: "#fff",
        '&:hover': {
            borderColor: "#00add800",
            backgroundColor: "#00add8bb",
        }
        
    },
    addition: {
        color: "#696969",
        fontSize: '0.75em',
        marginTop: 10
    },
    buttonLabel:{
        color: "#e0e0e0"
    },
    laber: {
        fontSize: '1.1em',
        margin: '5px 20px'
    },
    header:{
        fontSize: 25,
        textAlign: 'center'
    },
    link:{
        marginLeft: 30,
        color: "#00add8a0",
    },

}))

export default makeTheme;