import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const CommentForm = (props) => {
    

    const { user, isAuthenticated } = useAuth0();

    //function callback =====>>>  onAddComment()


    return (
        <div className='d-flex justify-content-center'>
             
            {isAuthenticated && (<div >
                <label>
                    {user.nickname}:
                    <input type="text" id="new-comment"  />
                </label>
                <input type="button" value="send" onClick={()=>props.onAddComment(document.getElementById("new-comment").value, props.video.title, user.given_name)}/>
            </div>)}
            {!isAuthenticated && (<h4 className='bg-warning text-center'>You must have an account to comment</h4>)}
            {console.log()}
        </div>

    )

}

export default CommentForm