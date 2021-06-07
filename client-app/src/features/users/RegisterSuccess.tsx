import React from 'react';
import { toast } from 'react-toastify';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import useQuert from '../../app/common/util/hooks';

export default function RegisterSuccess() {
    const email = useQuert().get('email') as string;

    function handleConfirmEmail() {
        agent.Account.resendEmailConfirm(email).then(() => {
            toast.success('Verification email resent - please check your email')
        }).catch(error => console.log(error));
    }

    return (
        <Segment placeholder textAlign='center'>
            <Header icon color='green'>
                <Icon name='check' />
                Successfuly registrated!
            </Header>
            <p>
                Please check your email (icluding junk email) for the verification email
            </p>
            {email && 
                <>
                    <p>
                        Didn't receive an email? Click below button to resent
                    </p>
                    <Button 
                        primary
                        onClick={handleConfirmEmail}
                        size='huge'
                        content='Resent email'
                    />
                </>
            }
        </Segment>
    )
}