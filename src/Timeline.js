import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title, crudGetList } from 'react-admin';
import TimelineLoaded from './TimelineLoaded';
import TimelineLoading from './TimelineLoading';
import TimelineEmpty from './TimelineEmpty';

export class Timeline extends Component {
    page = 1;
    constructor(props) {
        super(props);
        this.state = {
            events: props.ids.map(id => props.data[id]),
            latestId: props.ids[props.ids.length - 1],
        };
    }

    updateData = () => {
        this.props.crudGetList(
            'events',
            { page: this.page, perPage: 5 },
            { field: 'id', order: 'DESC' }
        );
    };

    componentDidMount() {
        this.updateData();
    }

    componentWillUnmount() {
        this.page = 1;
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.ids !== prevProps.ids) {
            const { ids, data } = this.props;
            const latestId = ids[ids.length - 1];
            if (latestId && latestId !== prevState.latestId) {
                const newEvents = ids.map(id => data[id]);
                this.setState(state => ({
                    events: state.events.concat(newEvents),
                    latestId,
                }));
            }
        }
    }

    handleLoadMore = () => {
        this.page = this.page + 1;
        this.updateData();
    };

    render() {
        const { events } = this.state;
        const { total, loadedOnce } = this.props;
        return (
            <>
                <Title title="Events" />
                {!loadedOnce ? (
                    <TimelineLoading />
                ) : events.length === 0 ? (
                    <TimelineEmpty />
                ) : (
                    <TimelineLoaded
                        events={events}
                        total={total}
                        handleLoadMore={this.handleLoadMore}
                    />
                )}
            </>
        );
    }
}

Timeline.defaultProps = {
    ids: [],
    data: {},
    crudGetList: () => null,
};

const mapStateToProps = state => ({
    ids: state.admin.resources.events.list.ids,
    data: state.admin.resources.events.data,
    total: state.admin.resources.events.list.total,
    loadedOnce: state.admin.resources.events.list.loadedOnce,
});

export default connect(
    mapStateToProps,
    { crudGetList }
)(Timeline);
