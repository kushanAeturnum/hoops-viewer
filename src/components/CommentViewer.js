import React, { useEffect,useState } from 'react';
import './CommentViewer.css';

const CommentViewer = (props) => {

    const [data, setData] = useState(null)
    var token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZXhjZWxzcW11c2VyMSIsImV4cCI6MTY0MDIwMTQ5MywiaWF0IjoxNjQwMTY1NDkzfQ.b5X5KKzcAuxG_BggoEKMGd__jV2jUEHWFbVoNpb_Ubg';
    var prequote_rfq_id = "61c17bc2e13c01425d1c3a5f";
    var comment_channel_id = "ccbc224e-622b-11ec-b78e-e9b71b80d45f";
    useEffect(() => {
     fetch(`http://apriordevapp-env.eba-ajmpa4mr.us-east-1.elasticbeanstalk.com/api/ws/comment-threads/prequote-rfqs/${prequote_rfq_id}/comment-channels/${comment_channel_id}`, {
            method: 'GET',
            //body: JSON.stringify(body), // string or object
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }).then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            setData(data.data[0]);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }, []);

    const commentClicker = () =>{
       let commentId = 1;
       props.clickedComment(commentId)
    }
    return (
        <div className='comment-viewer'>
            <h1 className='comment-text' onClick={commentClicker}>Comments</h1>
           <div className='comment-thred'>
           {data && data.comments.map(dt => 
               <p key={dt.id}>{dt.messageBody}</p>
           ) } 
           </div>
           
        </div>
    )
}

export default CommentViewer
