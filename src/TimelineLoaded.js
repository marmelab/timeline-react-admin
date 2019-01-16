import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import EventList from './EventList';
import groupByDay from './groupByDay';

const styles = {
    root: {
        width: 600,
        margin: 'auto',
    },
    day: {
        marginBottom: '1em',
    },
};

const getDayString = date =>
    new Date(date).toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

const TimelineLoadedView = ({
    events = [],
    handleLoadMore,
    total,
    classes,
}) => {
    const { days, eventsByDay } = groupByDay(events);
    if (days.length === 0) {
        return (
            <Typography color="error">
                Error: This list should not be empty.
            </Typography>
        );
    }
    return (
        <div className={classes.root}>
            {days.map(day => (
                <div key={day} className={classes.day}>
                    <Typography variant="subheading" gutterBottom>
                        {getDayString(day)}
                    </Typography>
                    <EventList events={eventsByDay[day]} />
                </div>
            ))}
            {events.length < total && (
                <Button variant="contained" onClick={handleLoadMore}>
                    Load more events
                </Button>
            )}
        </div>
    );
};

const TimelineLoaded = withStyles(styles)(TimelineLoadedView);

export default TimelineLoaded;
