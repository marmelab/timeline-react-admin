import React, { Component } from 'react';
import { ListController, Title } from 'react-admin';

import TimelineLoaded from './TimelineLoaded';
import TimelineLoading from './TimelineLoading';
import TimelineEmpty from './TimelineEmpty';

class TimelineView extends Component {
    state = {
        events: [],
        latestId: null,
    };

    static getDerivedStateFromProps(props, state) {
        const { ids, data } = props;
        const latestId = ids[ids.length - 1];
        if (latestId !== state.latestId) {
            const newEvents = ids.map(id => data[id]);
            return {
                events: state.events.concat(newEvents),
                latestId,
            };
        }

        return null;
    }

    handleLoadMore = () => {
        this.props.setPage(this.props.page + 1);
    };

    render() {
        const { events } = this.state;
        const { total, loadedOnce } = this.props;
        return !loadedOnce ? (
            <TimelineLoading />
        ) : events.length > 0 ? (
            <TimelineLoaded
                events={events}
                total={total}
                handleLoadMore={this.handleLoadMore}
            />
        ) : (
            <TimelineEmpty />
        );
    }
}

const Timeline = props => (
    <ListController {...props} perPage={5}>
        {controllerProps => (
            <>
                <Title title="Events" />
                <TimelineView {...controllerProps} />
            </>
        )}
    </ListController>
);

export default Timeline;
