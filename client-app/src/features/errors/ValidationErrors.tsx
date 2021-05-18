import React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
    errors: any
};

const ValidationErrors = ({errors}: Props) => {

    return (
        <Message error>
            <Message.List>
                {errors && (
                    errors.map((err: any, i: any) => {
                        return <Message.Item key={i}>{err}</Message.Item>
                    })
                )
                }
            </Message.List>
        </Message>
    );
};

export default ValidationErrors;