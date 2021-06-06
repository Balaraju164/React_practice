import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles(()=>({
    container:{
        backgroundColor:'none',
        padding:'20px',
        marginTop:'10px'
    },
    icon:
    {
        marginRight:'10px',
    },
    button:{
        marginTop:'40px'
    },
    cardGrid:{
        padding:'20px 0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardmedia:{
        paddingTop:'56.25%'
    },
    cardcontent:{
        flexGrow:1
    },
    footer:
    {
        padding:'50px 0'
    }
}))


export default useStyles;