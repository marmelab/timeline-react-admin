import React from 'react';
import { List } from 'react-admin';

import TimelineLoaded from './TimelineLoaded';
import TimelineLoading from './TimelineLoading';
import TimelineEmpty from './TimelineEmpty';

export const TimelineView = ({ ids, data, total, loadedOnce }) =>
    !loadedOnce ? (
        <TimelineLoading />
    ) : ids.length > 0 ? (
        <TimelineLoaded
            events={ids.map(id => data[id])}
            total={total}
        />
    ) : (
        <TimelineEmpty />
    );

const Timeline = props => (
    <List {...props}>
        <TimelineView />
    </List>
);

export default Timeline;