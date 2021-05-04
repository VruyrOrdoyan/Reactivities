import React, {useEffect} from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';
import {observer} from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';

const ActivityDashboard = () => {
    const {activityStore} = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if(activityRegistry.size <= 1){
            loadActivities();
        }
    }, [activityStore, loadActivities, activityRegistry.size]);

    if(activityStore.loadingInitial){
        return <LoadingComponent content='Loading APP' />
    }
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />
            </Grid.Column>
        </Grid>
    );
};

export default observer(ActivityDashboard);