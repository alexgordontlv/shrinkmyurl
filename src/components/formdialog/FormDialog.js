import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './formdialog.styles.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useUserContext } from '../../context/user.context';
import axios from '../../utilities/axios/axios';
import { Box } from '@material-ui/core';

function FormDialog({ id, name, email }) {
	const [state, setState] = useState({
		name,
		email,
	});
	const {
		state: { isAdmin },
		setCurrentUser,
	} = useUserContext();

	const [open, setOpen] = useState(false);

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};
	const handleCecked = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.put('/update', { ...state, id });
			console.log(response.date);
			setCurrentUser(state);
		} catch (error) {
			return error;
		}
		setState({ name: '', email: '' });
		setOpen(false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box width='100%'>
			<div>
				<Button size='small' color='primary' onClick={() => setOpen(true)}>
					Update
				</Button>
				<Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
					<DialogTitle id='form-dialog-title'></DialogTitle>
					<DialogContent>
						<div className='container'>
							<div className='left'>
								<TextField
									autoFocus
									margin='dense'
									name='name'
									label='Name'
									type='text'
									value={state.name}
									onChange={handleChange}
									fullWidth
									className='field'
								/>
								<TextField
									margin='dense'
									name='email'
									label='Email'
									type='text'
									value={state.email}
									onChange={handleChange}
									fullWidth
									className='field'
								/>
							</div>
							<div className='right'>
								{isAdmin && (
									<FormControlLabel
										control={<Checkbox checked={state.elevator} onChange={handleCecked} name='elevator' />}
										label='Set Admin'
									/>
								)}
							</div>
						</div>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} variant='outlined' className='button'>
							Cancel
						</Button>
						<Button onClick={handleSubmit} variant='outlined' className='button'>
							Update
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</Box>
	);
}

export default FormDialog;
