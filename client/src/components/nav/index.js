// import React from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     // flexGrow: 1,
//     textColor: '#333333',
//     maxWidth: '100vw',
//   },
//   muiTabs: {
//     maxWidth: '70vw',
//   },
//   indicator: {
//     backgroundColor: '#333333',
//   },
// });

// const Nav = () => {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         classes={{
//           indicator: classes.indicator,
//           textColor: classes.textColor,
//           muiTabs: classes.muiTabs,
//         }}
//         centered
//       >
//         <Tab label='Item One' />
//         <Tab label='Item Two' />
//         <Tab label='Item Three' />
//         <Tab label='Item Four' />
//       </Tabs>
//     </div>
//   );
// };

// export default Nav;

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#333333',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: '.8rem',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: 'var(--pr-black)',
    '&:hover': {
      color: 'var(--pr-grey)',
      opacity: 1,
    },
    '&$selected': {
      color: 'var(--emph-black)',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'var(--emph-black',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: 'var(--pr-white)',
  },
}));

const Nav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label='ant example'>
          <AntTab label='Tab 1' />
          <AntTab label='Tab 2' />
          <AntTab label='Tab 3' />
          <AntTab label='Tab 4' />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};

export default Nav;
