import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import SwipeableTemporaryDrawer from './swap';


class Appbar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <AppBar position="sticky" color="secondary">
                    <Toolbar>
                        <SwipeableTemporaryDrawer />
                    <Typography variant="h6">
                            To Do creator : {'  '}
                            <Badge badgeContent={this.props.length} color="primary" overlap="rectangle">
                                 Total actions
                            </Badge>
                    </Typography>
                  </Toolbar>
                </AppBar>
           </React.Fragment>
         );
    }
}
 
export default Appbar;