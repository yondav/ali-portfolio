import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const NavTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    margin: ' 0 .8rem',
    fontFamily: ['Jost', 'sans-serif'].join(','),
    fontSize: window.innerWidth > 989 ? '1.125em' : '1em',
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

export const NavTabs = withStyles({
  indicator: {
    backgroundColor: 'var(--pr-black)',
  },
})(Tabs);

export const slideStyles = {
  root: {
    width: '40%',
    height: 'calc(100% - 1rem)',
    overflowX: 'visible',
    margin: '0 auto',
  },
  slideContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: 'var(--pr-white)',
  },
}));
