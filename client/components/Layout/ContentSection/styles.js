export default theme => ({
  paperDefault: {
    margin: `${theme.spacing.unit * 2}px auto`,
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxWidth: '900px',
    [theme.breakpoints.up('sm')]: {
      minWidth: '400px'
    }
  },
  verticalScroll: {
    overflowY: 'auto'
  }
});
