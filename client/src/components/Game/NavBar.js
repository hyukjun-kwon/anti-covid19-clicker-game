import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {flexGrow: 1,},
//   menuButton: {marginRight: theme.spacing(2),},
//   title: {flexGrow: 1,},
// }));

import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar () {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <Typography variant="h6" className={classes.title} align="center">
            Anti-COVID19
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

// export default function NavBar() {
  
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="secondary">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title} style={{textAlign: 'center'}}>
//             COVID-19
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }