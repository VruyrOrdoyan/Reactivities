import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import {observer} from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const ActivityDetails = () =>{ 
    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;
    if(activity === undefined){
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
                onClick={() => openForm(activity ? 
                    activity.id : undefined)}/>}
                <Button basic color='grey' content='Cancel' onClick={cancelSelectedActivity}/>
            </Button.Group>
            </Card.Content>
        </Card>
        ) : null;
    };

export default observer(ActivityDetails)
