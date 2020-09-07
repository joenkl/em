import React from 'react';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';

import TEXT from '../../config/text';
const FOOTER_TEXT = _.get(TEXT, 'FOOTER');

const useStyles = makeStyles({
  footer: theme => ({
    display: 'block',
    color: _.get(theme, 'palette.primary.light'),
    padding: 16,
    marginTop: 'auto',
  }),
  about: { },
  terms: { },
  policy: { },
});

const Footer = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
        <Grid items xs className={classes.about}>
          {FOOTER_TEXT.ABOUT}
        </Grid>
        <Grid items xs className={classes.terms}>
          {FOOTER_TEXT.TERMS}
        </Grid>
        <Grid items xs className={classes.policy}>
          {FOOTER_TEXT.PRIVACY_POLICY}
        </Grid>
      </Grid>
      <Grid item xs>
        {FOOTER_TEXT.COPYRIGHT}
      </Grid>
    </footer>
  )
}

export default Footer