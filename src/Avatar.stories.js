import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

const userWithAvatar = {
    email: 'jitewaboh@lagify.com',
};

const userWithNoAvatar = {
    email: 'lelafeng@example.com',
};

storiesOf('Avatar', module)
    .add('basic', () => <Avatar user={userWithAvatar} />)
    .add('using fallback', () => <Avatar user={userWithNoAvatar} />)
    .add('anonymous', () => <Avatar />);
