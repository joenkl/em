import React, { useEffect } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { getUserByCookieToken } from '../../reducers/user/userActions';
import { getUserId } from '../../reducers/user/userSelectors';
import TEXT from '../../config/text';
import { GOOGLE_LOGIN, FACEBOOK_LOGIN, LOGOUT } from '../../config/routes';
import Footer from '../../components/footer/Footer';

const useStyles = makeStyles({
  home: {
    textAlign: 'center',
  },
  row: {
    paddingBottom: '1rem',
  }
});

const mapStateToProps = (state) => ({
  userId: getUserId(state),
})

// TODO: use jsx-conditional-statements
const Home = (props) => {
  const { dispatch, userId } = props;
  const classes = useStyles();
  useEffect(() => {
    if(!userId) {
      dispatch(getUserByCookieToken());
    }
  })
  return (
    <Grid
      className={classes.home}
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={24}
    >
      { !userId &&
        <React.Fragment>
          <Grid item xs={12} className={classes.row}>
            <Button
              href={GOOGLE_LOGIN}
              variant="contained"
              color="primary"
            >
              {get(TEXT, 'GOOGLE_BUTTON_TEXT')}
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.row}>
            <Button
              href={FACEBOOK_LOGIN}
              variant="contained"
              color="primary"
            >
              {get(TEXT, 'FACEBOOK_BUTTON_TEXT')}
            </Button>
          </Grid>
        </React.Fragment>
      }
      { userId &&
      <Grid item xs={12} className={classes.row}>
          <Button
            href={LOGOUT}
            variant="contained"
            color="secondary"
            type="reset"
          >
            {get(TEXT, 'LOGOUT_BUTTON_TEXT')}
          </Button>
        </Grid>
      }
       <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
};


export default connect(mapStateToProps)(Home);