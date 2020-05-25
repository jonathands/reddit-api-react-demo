import React, { Component } from 'react';
import 'materialize-css';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

class Config extends Component {

    constructor() {
        super();
        this.state = {
            token: '',
            openToast: false
        };
    }

    setToken = e => {
        if (e.target.value === null) {
            return
        }
        this.setToastOpen(true);
    }

    handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setToastOpen(false);
    }

    setToastOpen = (state) => {
        this.setState({ openToast: state });
    }

    render() {
        const token = this.state.token;
        return (
            <>
                <h1>Set your OAuth token:</h1>
                <div className="row">
                    <label>Token: </label>
                    <input id="token" defaultValue={token} onBlur={this.setToken} />
                </div>
                <Snackbar open={this.state.openToast} onClose={this.handleToastClose} autoHideDuration={6661} >
                    <Alert serverity="success" onClose={this.handleToastClose}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    this.setToastOpen(false);
                                }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>} >
                        Token Updated!
                </Alert>
                </Snackbar>
            </>
        );
    }
}

export default Config;
export { Config };