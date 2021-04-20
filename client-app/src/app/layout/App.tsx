import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, sertLoading] = useState(true);
  const [submiting, setSubmiting] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(a => a.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleCreateOrEditActivity = (activity: Activity) => {
    setSubmiting(true);
    
    if(activity.id){
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(a => a.id !== activity.id), activity]);
        setEditMode(false);
        setSelectedActivity(activity);
        setSubmiting(false);    
      });
    }
    else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setEditMode(false);
        setSelectedActivity(activity);
        setSubmiting(false);
      });
    }
  };

  const handleDeleteActivity = (id: string) => {
    setSubmiting(true);
    agent.Activities.details(id).then(() => {
      setActivities([...activities.filter(a => a.id !== id)]);
      setSubmiting(false);
    });
  };

  useEffect(() => {
    agent.Activities.list().then(response => {
      const activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      });
      setActivities(activities);
      sertLoading(false);
    })
  }, []);

  if(loading){
    return <LoadingComponent content='Loading APP' />
  }

  return (
    <Fragment>
        <NavBar openForm={handleFormOpen} />
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard 
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditActivity}
            deleteActivity={handleDeleteActivity}
            submiting={submiting} />
        </Container>
    </Fragment>
  );
}

export default App;
