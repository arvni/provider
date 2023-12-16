import {Link, Typography} from "@mui/material";

const Copyright=(props:any)=>{
    return <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={import.meta.env.BRAND_LINK}>
            {import.meta.env.BRAND}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
}

export default Copyright;
