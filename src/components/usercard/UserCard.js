import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Avatar, CardActionArea, CardActions, Button, Typography } from '@material-ui/core/';
import { handleUserUpdate } from '../../utilities/uitiltyfunctions/handleUserUpdate';
import FormDialog from '../formdialog/FormDialog';
const useStyles = makeStyles({
	rootDiv: {
		display: 'flex',
		justifyContent: 'center',
	},
	root: {
		margin: '5px',
		width: 200,
	},
	avatarDiv: {
		height: 50,
		marginLeft: '15px',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});

export default function UserCard({
	location: {
		state: { name, email, id, role },
	},
}) {
	const classes = useStyles();
	const handleUpdate = async () => {
		const res = await handleUserUpdate({ name, email, id });
		console.log(res);
	};
	return (
		<div className={classes.rootDiv}>
			<Card className={classes.root}>
				<CardActionArea>
					<div className={classes.avatarDiv}>
						<Avatar />
					</div>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{name}
						</Typography>
						<Typography variant='body1' color='textSecondary'>
							{email}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<FormDialog name={name} id={id} email={email} role={role} />
					<Button size='small' color='primary'>
						Delete
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
