import { observer } from 'mobx-react-lite';
import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

const ActivityFilters = () => {
    const {activityStore: {prdicate, setPrediate}} = useStore();
    return (
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 25}}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item 
                    content='All Activities'
                    active={prdicate.has('all')}
                    onClick={() => setPrediate('all', 'true')}
                    />
                <Menu.Item 
                    content="I'm going"
                    active={prdicate.has('isGoing')}
                    onClick={() => setPrediate('isGoing', 'true')}
                    />
                <Menu.Item 
                    content="I'm hosting"
                    active={prdicate.has('isHost')}
                    onClick={() => setPrediate('isHost', 'true')}
                    />
            </Menu>
            <Header />
            <Calendar 
                onChange={date => setPrediate('startDate', date as Date)}
                value={prdicate.get('startDate') || new Date()}
                />
        </>
    );
};

export default observer(ActivityFilters);