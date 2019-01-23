export default theme => ({
  paperDefault: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,

    [theme.breakpoints.up('sm')]: {
      minWidth: '400px'
    }
  },
  verticalScroll: {
    overflowY: 'auto'
  }
});
