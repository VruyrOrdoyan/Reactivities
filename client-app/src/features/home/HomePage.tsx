import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';

import {Container, Header, Segment, Image, Button, Divider} from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

const HomePage = () => {
    const {userStore, modalStore} = useStore();
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='Loago' style={{marginBottom: 12}} />
                    Reactivities
                </Header>
                {
                    userStore.isLoggedIn ? (
                        <>
                            <Header as='h2' inverted content='Welcome to Reactivities' />
                            <Button as={Link} to='/activities' size='huge' inverted>
                                Go to activities!
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                                Login!
                            </Button>
                            <Button onClick={() => modalStore.openModal(<RegisterForm />)} size='huge' inverted>
                                Register!
                            </Button>
                            <Divider horizontal inverted>Or</Divider>
                            <Button 
                                loading={userStore.fbLoading}
                                color='facebook' 
                                onClick={userStore.facebookLogin}
                                size='huge' 
                                inverted
                                content='Login with Facebook' />
                        </>
                    )
                }
                
                
            </Container>
        </Segment>
    );
};

export default observer(HomePage);