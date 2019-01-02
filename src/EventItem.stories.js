import React from 'react';
import { storiesOf } from '@storybook/react';
import EventItem from './EventItem';

const event = {
    label: 'modified post "Hello World"',
    createdAt: '2019-03-11T12:34:56.000Z',
    author: {
        name: 'John Doe',
        email: 'jitewaboh@lagify.com',
    },
};

const anonymousEvent = {
    label: 'liked "Lorem Ipsum"',
    createdAt: '2019-03-11T12:34:56.000Z',
};

const eventWithLongName = {
    label:
        'commented "I don\'t agree. You should never try to do things this way, or you\'ll end up in a bad place."',
    createdAt: '2019-03-11T12:34:56.000Z',
    author: {
        name: 'Lela Feng',
        email: 'lelafeng@example.com',
    },
};

storiesOf('EventItem', module)
    .add('basic', () => <EventItem event={event} />)
    .add('anonymous', () => <EventItem event={anonymousEvent} />)
    .add('long event name', () => <EventItem event={eventWithLongName} />);
