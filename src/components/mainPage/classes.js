import { makeStyles } from '@material-ui/core/styles';

const makeTheme = makeStyles( theme => ({
    description: {
        margin: '40px 0',
        display: 'flex',
        '& img': {
            maxWidth: '50%',
            height: 'auto',
            boxShadow: '0 0 8px 8px white inset'
        },

        '& .text': {
            margin: 'auto',
            '& .title_1': {
                fontSize: 70,
                margin: '0 auto',
                fontWeight: 'bold',
                fontStretch: 'condensed',
                textAlign: 'center',
                color: '#0f0f0f'
            },
            '& .title_2': {
                fontSize: 55,
                margin: '0 auto',
                fontWeight: 'bold',
                fontStretch: 'condensed',
                color: '#0f0f0f'
            }
        }
    },
    title: {
        color: '#007b99',
        textAlign: 'center',
        fontSize: '2em',
        fontWeight: 'bold',
        margin: '35px 0 20px'
    },
    login: {
        margin: '0 auto',
        minWidth: '25%',
        maxWidth: '45%'
    },
    footer: {
        height: 100
    }
}))

export default makeTheme;