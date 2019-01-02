import React from 'react';
import MuiAvatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import md5 from 'blueimp-md5';

const styles = {
    avatar: {
        width: 25,
        height: 25,
    },
};

const AvatarView = ({ user, classes }) => (
    <MuiAvatar
        className={classes.avatar}
        src={
            user
                ? `https://www.gravatar.com/avatar/${md5(user.email)}?d=retro`
                : `https://www.gravatar.com/avatar/?d=mp`
        }
    />
);

const Avatar = withStyles(styles)(AvatarView);

export default Avatar;
