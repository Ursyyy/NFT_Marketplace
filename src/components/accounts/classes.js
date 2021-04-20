import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        margin: '0 auto',
        maxWidth: '90%',
        display: 'flex',
        '& .listItem': {
            display: 'block',
            textAlign: 'center',
            '& .avatar': {
                margin: '0 auto',
                width: 125,
                height: 125
            },
            '& .name': {
                fontSize: '1.15em',
                color: '#000',
                marginTop: 10
            },
            '& .descr': {
                color: '#404040'
            },
            '& .link': {
                color: '#0082d8',
                '&:hover': {
                    color: '#004cd8'
                }
            }
        },
        
    },
    
}))

export default useStyles