import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1
    },
    form: {
        position: 'absolute',
        left: '50%',
        top: '42%',
        transform: 'translate(-50%, -50%)',
        width: 'auto'
    }
}));

function LogIn() {
    const classes = useStyles();
    return (
        <MDBContainer className={classes.root}>
            <MDBRow>
                <MDBCol md="6" className={classes.form}>
                    <form>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                            <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                            <MDBInput label="Type your password" icon="lock" group type="password" validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn>Login</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default LogIn;