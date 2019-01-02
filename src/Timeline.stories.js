import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from './Timeline';
import { events } from './TimelineLoaded.stories.js';

storiesOf('Timeline', module)
    .add('loading', () => <Timeline />)
    .add('loaded', () => (
        <Timeline
            ids={events.map(event => event.id)}
            data={events.reduce(
                (data, event) => ({ ...data, [event.id]: event }),
                {}
            )}
            loadedOnce={true}
        />
    ))
    .add('empty', () => <Timeline ids={[]} data={{}} loadedOnce={true} />);
