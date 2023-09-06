import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Bookmark from './bookmark/Bookmark';
import NotiSummaryBar from './NotiSummaryBar';
import StyledSearchBar from './StyledSearchBar';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    paddingLeft: 0
  }));

const HeadAppBar = (props) => {

    const { 
        title,
        searchLabel,
        searchActionIcon,
        userId,
        onNewEmailsShowReq,
        onNewNotificationsShowReq,
        onMyProfileShowReq,
        onMyAccountInfoShowReq,
        toggleDrawer
    } = props;

    const doSearch  = props.doSearchCallback;

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar sx={{ pr: '20px' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={ toggleDrawer }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component={ RouterLink }
                        to="/"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        { title }
                    </Typography>
                    <StyledSearchBar 
                        doSearchCallback={ doSearch } 
                        label={ searchLabel }
                        actionIcon={searchActionIcon}
                    />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Bookmark />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <NotiSummaryBar
                        value={ userId }
                        onNewEmailClicked={ onNewEmailsShowReq }
                        onNewNotificationClicked={ onNewNotificationsShowReq }
                        onMyProfileClicked={ onMyProfileShowReq }
                        onMyAccountClicked={ onMyAccountInfoShowReq }
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeadAppBar;
