import * as React from 'react';

interface FormProps {
    children?: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    
}

export default function Form({onSubmit, children}: FormProps) {
    return (
        <>
            <form action="" onSubmit={onSubmit}>
                {children}
            </form>
        </>
    )
}