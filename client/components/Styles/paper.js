const styles = theme => ({
  paperDefault: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    minWidth: '550px',
    maxHeight: '100%',
    overflow: 'auto',
    color: theme.palette.text.secondary
  },
  centeredContent: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    margin: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      minWidth: '600px'
    }
  }
});

export default styles;
