import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: 600,
        margin: 'auto',
    },
    content: {
        display: 'flex',
    },
    icon: {
        width: 50,
        height: 50,
        paddingRight: '1em',
    },
    image: {
        width: 50,
        marginTop: '0.5em',
        display: 'block',
    },
};

const TimelineEmptyView = ({ classes }) => (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
            <InfoIcon color="primary" className={classes.icon} />
            <div>
                <Typography variant="subheading" gutterBottom>
                    This page will show the actions of users once they start
                    using the application.
                </Typography>
                <Typography variant="subheading">
                    You will even see your own actions recorded here. Try adding
                    a new post by using the "Posts" menu.
                </Typography>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Return_arrow.svg"
                    className={classes.image}
                    alt=""
                />
            </div>
        </CardContent>
    </Card>
);

const TimelineEmpty = withStyles(styles)(TimelineEmptyView);

export default TimelineEmpty;
