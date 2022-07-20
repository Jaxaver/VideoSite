import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogBar = () => {


    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();



    return (
        <span className='bg-warning mx-2 text-dark '>
            {!isAuthenticated && (
                <span
                    className='zoomable-text'
                    onClick={() => loginWithRedirect()}
                >
                    LOG IN
                </span>
            )}
            {isAuthenticated && (<span className="flex-box justify-content-between">
                <span
                    className="zoomable-text"
                    onClick={() => logout()}
                >
                    LOG OUT
                </span>
                <span>welcome {user.nickname}</span>
            </span>)}
        </span>
    )

}

export default LogBar