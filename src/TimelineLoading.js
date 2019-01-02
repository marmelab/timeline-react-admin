import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';

const PlaceHolder = withStyles({
    root: {
        width: 400,
        backgroundColor: '#cfcfcf',
        display: 'block',
    },
})(({ classes }) => <span className={classes.root}>&nbsp;</span>);

const styles = {
    root: {
        width: 600,
        margin: 'auto',
    },
    card: {
        marginTop: '0.7em',
        marginBottom: '1em',
    },
};

const times = (nbChildren, fn) =>
    Array.from({ length: nbChildren }, (_, key) => fn(key));

const TimelineLoadingView = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.day}>
            {times(2, key1 => (
                <div key={key1}>
                    <PlaceHolder />
                    <Card className={classes.card}>
                        <List>
                            {times(5, key2 => (
                                <ListItem key={key2}>
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<PlaceHolder />}
                                        secondary={<PlaceHolder />}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </div>
            ))}
        </div>
    </div>
);

const TimelineLoading = withStyles(styles)(TimelineLoadingView);

export default TimelineLoading;
