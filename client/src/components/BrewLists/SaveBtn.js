import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function SaveBtn(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab variant="contained" color="primary" onClick={props.onClick}
                    data-id={props.dataId}>
                <FavoriteTwoToneIcon />
            </Fab>
        </div>
    );
};

