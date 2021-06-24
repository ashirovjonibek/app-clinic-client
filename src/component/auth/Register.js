import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card, Checkbox,
    FormControl, FormControlLabel, FormGroup,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Grade} from "@material-ui/icons";
import MaskedInput from "react-text-mask";
import PropTypes from 'prop-types';

import axios from "axios";

const useStyle = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        // [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        //     marginTop: theme.spacing(6),
        //     marginBottom: theme.spacing(6),
        //     padding: theme.spacing(3),
        // },
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        justifyContent: 'flex-end',
        borderRadius: 50
    },
    saveButton: {
        gridColumnEnd: 'span 4'
    }
}))

function Register(props) {
    const classes = useStyle();
    const [gender, setGender] = useState('');
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        districtId: '',
        phoneNumber: '',
        address: '',
        birthDate: '',
        nationId: '',
        gender: '',
        password: '',
        socialStatusId: '',
        status: '',
        sectionId: ''
    });

    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [nations, setNations] = useState([]);
    const [socialStatus, setSocialStatus] = useState([]);


    // useEffect(() => {
    //     axios.get("/api/region").then(res => {
    //         setRegions(res.data._embedded.regions)
    //     });
    // }, [])
    //
    // useEffect(() => {
    //     axios.get("/api/district").then(res => {
    //         setDistricts(res.data._embedded.districts);
    //     })
    // }, [])
    // useEffect(() => {
    //     axios.get("/api/socialStatus").then(res => {
    //         setSocialStatus(res.data._embedded.socialStatuses)
    //     })
    // }, [])
    // useEffect(() => {
    //     axios.get("/api/nation").then(res => {
    //         setNations(res.data._embedded.nations)
    //     })
    // }, [])
    // useEffect(() => {
    //     axios.get("/api/section").then(res => {
    //         console.log(res);
    //     })
    // }, [])


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };
    const handleSave = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <div style={{marginBottom: 200}}>
            <Paper className={classes.paper}>
                <Typography align="center">
                    Registration
                </Typography>

                <form onSubmit={handleSave}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="nationId"
                                name="nationId"
                                label="Natianality"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                select
                                SelectProps={{
                                    native: true,
                                }}

                            >
                                <option>Select nationality</option>
                                {nations && nations.map((item, i) =>
                                    <option key={i} value={item.id}>{item.name.uz}</option>
                                )}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="districtId"
                                name="districtId"
                                label="district"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                select
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>Select district</option>
                                {districts && districts.map((item, i) =>
                                    <option key={i} value={item.id}>{item.name.uz}</option>
                                )}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="gender"
                                name="genger"
                                label="Gender"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                select
                                value={gender}
                                SelectProps={{
                                    native: true,
                                }}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option>Select gender</option>
                                <option>Erkak</option>
                                <option>Ayol</option>
                                <option>...</option>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Home Address"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="birthDate"
                                name="birthDate"
                                label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}

                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                label="+998(__)___-__-__"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="socialStatusId"
                                name="socialStatusId"
                                label="Social status"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                select
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>Select status</option>
                                {socialStatus && socialStatus.map((item, i) =>
                                    <option key={i} value={item.id}>{item.name.uz}</option>)}

                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="regionId"
                                name="regionId"
                                label="Region"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                select
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>Select region</option>
                                {regions && regions.map((item, i) =>
                                    <option key={i} value={item.id}>{item.name.uz}</option>
                                )}

                            </TextField>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="sectionId"
                                name="sectionId"
                                label="Section"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                onChange={handleChange}
                                select
                                SelectProps={{
                                    native: true,
                                }}
                            >
                                <option>Select section</option>
                                <option>SKJALKJk</option>
                                <option>ASLKLSK</option>
                                <option>KAJSHKjs</option>
                            </TextField>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={5}>
                            <FormControl style={{float: "right", marginTop: 8}}>
                                <FormGroup>
                                    <FormControlLabel

                                        control={<Checkbox name="antoine"/>}
                                        label="Я даю согласие на обработку своих  персональных данных и ознакомлен с политикой конфиденциальности"
                                    />
                                </FormGroup>
                            </FormControl>


                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                type="submit"
                                className={classes.button}
                                variant="contained"
                                color="primary">Registration</Button>
                        </Grid>


                    </Grid>
                </form>
            </Paper>
        </div>
    );
}

export default Register;


function TextMaskCustom(props) {
    const {inputRef, ...other} = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};
