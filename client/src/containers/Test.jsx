import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchTestApi } from '../reducers/test/testActions';

const Test = props => (
	<div className="Test">
		<Grid container spacing={24}>
			<Grid item xs={12}>
				<a href="/em/api/test">test proxy</a>
			</Grid>
			<Grid item xs={6}>
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						props.dispatch(fetchTestApi());
					}}>
					test proxy for reducers...
				</Button>ack
			</Grid>
			<Grid item xs={6} />
			<Grid item xs={2}>
				<Button
					href="em/api/auth/google"
					variant="contained"
					color="primary"
					type="submit">
					GOOGLE LOGIN
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Button
					href="em/api/auth/facebook"
					variant="contained"
					color="primary"
					type="submit">
					FACEBOOK LOGIN
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Button
					href="em/api/auth/logout"
					variant="contained"
					color="secondary"
					type="reset">
					LOGOUT
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Button
					href="em/api/user/getUserByCookieToken"
					variant="contained"
					color="default"
					type="button">
					COOKIE TESTER
				</Button>
			</Grid>
		</Grid>
	</div>
);

export default connect()(Test);
