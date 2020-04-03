import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1
    },
    form: {
        position: 'absolute',
        left: '50%',
        top: '42%',
        transform: 'translate(-50%, -50%)'
    }
}));

function Register() {
    const classes = useStyles();
    return (
        <MDBContainer className={classes.root}>
            <MDBRow>
                <MDBCol md="6" className={classes.form}>
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                            <MDBInput label="Your username" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput label="Your password" icon="lock" group type="email" validate error="wrong"
                                success="right" />
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary">Register</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;