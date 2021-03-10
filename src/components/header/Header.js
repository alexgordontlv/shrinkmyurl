import React, { useState, useEffect } from 'react';
import './header.styles.css';
import Search from '../search/Search';
import { Tabs, Tab, Menu, MenuItem, makeStyles, Avatar } from '@material-ui/core/';
import { Link, withRouter } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

const useStyles = makeStyles({
	root: {
		marginTop: '10px',
		height: '55px',
	},
	menu: {
		'& div': {
			// this is just an example, you can use vw, etc.
			width: '200px',
		},
	},
});

const Header = ({ history }) => {
	const {
		state: { currentUser, isAdmin },
		setCurrentUser,
	} = useUserContext();
	const classes = useStyles();
	const [value, setValue] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	useEffect(() => {
		if (history?.location?.pathname !== '/' && history?.location?.pathname !== '/about' && history?.location?.pathname !== '/contact') {
			setValue(false);
		}
	}, [history?.location?.pathname]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		setCurrentUser(null);
		setAnchorEl(null);
		history.push('/login');
	};

	return (
		<div className='header'>
			<div className='header__left'>
				<div>LOGO</div>
			</div>
			<div className='header__center'>
				<div>
					<Search />
				</div>

				<Tabs className={classes.root} centered disabled value={value} onChange={handleChange} variant='fullWidth' indicatorColor='primary'>
					<Tab
						label='HOME'
						onClick={() => {
							history.push('/');
						}}
					/>

					<Tab
						label='ABOUT'
						onClick={() => {
							history.push('/about');
						}}
					/>
					<Tab
						label='CONTACT US'
						onClick={() => {
							history.push('/admin-panel');
						}}
					/>
				</Tabs>
			</div>
			<div className='header__right'>
				{!currentUser ? (
					<div>
						<Link to='/login'>LOGIN</Link> / <Link to='/register'>REGISTER</Link>
					</div>
				) : (
					<div>
						<Avatar aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
							Open Menu
						</Avatar>
						<Menu className={classes.menu} id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem onClick={handleClose}>Home</MenuItem>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							{isAdmin && (
								<Link to='/admin-panel'>
									<MenuItem onClick={handleClose}>Admin Panel</MenuItem>
								</Link>
							)}
							<MenuItem onClick={handleLogOut}>Logout</MenuItem>
						</Menu>
					</div>
				)}
			</div>
		</div>
	);
};

export default withRouter(Header);
