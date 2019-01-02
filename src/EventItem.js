import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { withStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';

const styles = {
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
};

const EventItemView = ({ event, classes }) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar user={event.author} />
        </ListItemAvatar>
        <ListItemText
            primary={
                <div className={classes.truncate}>
                    <strong>
                        {event.author ? event.author.name : 'Anonymous'}
                    </strong>{' '}
                    {event.label}
                </div>
            }
            secondary={new Date(event.createdAt).toLocaleString()}
        />
    </ListItem>
);

const EventItem = withStyles(styles)(EventItemView);

export default EventItem;
