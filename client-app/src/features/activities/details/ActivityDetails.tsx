import React, { useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Link, useParams } from 'react-router-dom';
import {observer} from 'mobx-react-lite';

const ActivityDetails = () =>{ 
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id){
            loadActivity(id);
        }
    }, [id, loadActivity]);

    if(loadingInitial || !activity){
      return <LoadingComponent />;  
    }

    return activityStore.selectedActivity ? (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activityStore.selectedActivity.category}.jpg`} />
            <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Button.Group widths='2'>
                {activity && 
                <Button basic color='blue' content='Edit' 
                as={Link} to={`/manage/${activity.id}`}/>}
                <Button basic color='grey' content='Cancel' as={Link} to='/activities'/>
            </Button.Group>
            </Card.Content>
        </Card>
        ) : null;
    };

export default observer(ActivityDetails)
