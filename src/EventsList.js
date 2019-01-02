import React from 'react';
import { ListController, Title } from 'react-admin';
import Timeline from './Timeline';

export default props => (
    <ListController {...props}>
        {controllerProps => (
            <>
                <Title title="Events" />
                <Timeline {...controllerProps} />
            </>
        )}
    </ListController>
);
