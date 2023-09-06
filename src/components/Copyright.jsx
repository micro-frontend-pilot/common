import React from 'react';
import { Link, Typography } from '@mui/material';

const Copyright = (props) => {

    const {
        companyName,
        companyWebSite,
        onPersonSecurityPolicy,
        personSecurityText
    } = props;

    return (
        <div style={{ padding: 10 }}>
            <Typography style={{ fontSize: 12 }} color="black" align="center">
                &nbsp;
                { 'Copyright @ ' }
                <Link color="inherit" href={ companyWebSite } style={{ textDecoration: "none" }}>
                    { companyName }
                </Link>
                { " " + new Date().getFullYear() }
                { '. All rights reserved.'}
                &nbsp;
                |
                &nbsp;
                <Link color="inherit" onClick={ onPersonSecurityPolicy } style={{ textDecoration: "none", cursor:"pointer" }}>
                    { personSecurityText }
                </Link>
            </Typography>
        </div>
    )
}

export default Copyright;
