import React from 'react';
import { storiesOf } from '@storybook/react';
import EventList from './EventList';

const events = [
    {
        id: 1234,
        label: 'modified post "Hello World"',
        createdAt: '2019-01-10T17:15:56.000Z',
        author: {
            name: 'John Doe',
            email: 'jitewaboh@lagify.com',
        },
    },
    {
        id: 1233,
        label: 'created new post "Hello World"',
        createdAt: '2019-01-10T08:54:00.000Z',
        author: {
            name: 'John Doe',
            email: 'jitewaboh@lagify.com',
        },
    },
];

storiesOf('EventList', module)
    .add('basic', () => <EventList events={events} />)
    .add('empty', () => <EventList />);
