import React, {useEffect, useState} from 'react';
import {
    Button, Container,
    Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import request from "../../utils/request";


const useStyle = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3)
    }
}))

function Region(props) {
    const [open, setOpen] = React.useState(false);
    const [regions, setRegions] = React.useState(false);
    const [uz, setUz] = useState('');
    const [ru, setEn] = useState('');
    const [en, setRu] = useState('');

    const classes = useStyle();
    useEffect(() => {
        request({
            url: "/api/region"
        }).then(res => {
            setRegions(res._embedded.regions)
        })
        // axios.get("/api/region").then(res => {
        //     setRegions(res.data._embedded.regions)
        // })
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e, v) => {
        e.preventDefault();
        let name = {uz, ru, en};
        console.log(name);
        request({
            url: '/api/region',
            method: "POST",
            data: {name}
        }).then(res => {
            console.log(res)
            if (res.success) {
                request({
                    url: "/api/region"
                }).then(res => {
                    setRegions(res._embedded.regions);
                })
            }
        })
        // axios.post("/api/region", {name}).then(res => {
        //     if (res.statusText == "Created") {
        //         axios.get("/api/region").then(res => {
        //             setRegions(res.data._embedded.regions);
        //         })
        //     }
        // })
    }
    const handleChangeUz = (e) => {
        setUz(e.target.value)
    }
    const handleChangeRu = (e) => {
        setRu(e.target.value)
    }
    const handleChangeEn = (e) => {
        setEn(e.target.value)
    }

    return (
        <Container className={classes.paper}>
            <TableContainer component={Paper}>
                <Button variant="contained" color="primary" onClick={handleClickOpen}
                        style={{float: 'right'}}>Add</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>T/R</TableCell>
                            <TableCell>NameUz</TableCell>
                            <TableCell>NameRu</TableCell>
                            <TableCell>NameEn</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {regions && regions.map((item, i) =>
                            <TableRow key={item.id}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{item.name.uz}</TableCell>
                                <TableCell>{item.name.ru}</TableCell>
                                <TableCell>{item.name.en}</TableCell>
                                <TableCell>
                                    <TableRow>
                                        <TableCell><Button variant="contained" color="primary"
                                                           onClick={() => handleClickOpen(item)}>Edit</Button></TableCell>
                                        <TableCell><Button variant="contained" color="secondary"
                                                           onClick={() => handleClickOpen(item.id)}>Delete</Button></TableCell>
                                    </TableRow>
                                </TableCell>
                            </TableRow>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Add Region</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="uz"
                            onChange={handleChangeUz}
                            name="uz"
                            label="NameUz"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="ru"
                            onChange={handleChangeRu}
                            name="ru"
                            label="NameRu "
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="en"
                            onChange={handleChangeEn}
                            name="en"
                            label="NameEn"
                            fullWidth
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button variant="outlined" onClick={handleClose} color="primary" type="submit">
                            Save
                        </Button>
                    </DialogActions>
                </form>

            </Dialog>
        </Container>

    );
}

export default Region;