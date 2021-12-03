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


const useStyle = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3)
    }
}))

function District(props) {
    const [districts, setDistricts] = useState([]);
    const [open, setOpen] = React.useState(false);
    const classes = useStyle();

    useEffect(() => {
        axios.get("/api/district").then(res => {
            setDistricts(res.data._embedded.districts);
        })
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <TableContainer component={Paper} className={classes.paper}>
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
                        {districts && districts.map((item, i) =>
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
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default District;