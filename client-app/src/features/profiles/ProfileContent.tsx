import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfileAbout from './ProfileAbout';
import ProfileActivities from './ProfileActivities';
import ProfileFollowings from './ProfileFollowings';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile
}

const ProfileContent = ({profile}: Props) => {
    const {profileStore} = useStore();

    const pains = [
        {
            menuItem: 'About',
            render: () => <ProfileAbout />
        },
        {
            menuItem: 'Photos',
            render: () => <ProfilePhotos profile={profile} />
        },
        {
            menuItem: 'Events',
            render: () => <ProfileActivities/>
        },
        {
            menuItem: 'Followars',
            render: () => <ProfileFollowings />
        },
        {
            menuItem: 'Following',
            render: () => <ProfileFollowings />
        }
    ];
    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={pains}
            onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    );
};

export default observer(ProfileContent);