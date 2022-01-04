import React, { useEffect,useState } from 'react';
import { Card } from 'react-bootstrap';
import './CommentViewer.css';

const CommentViewer = (props) => {

    const [data, setData] = useState([])
    var token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3b29kd2FyZGJzbXVzZXIxIiwiZXhwIjoxNjQxMzMyMzAxLCJpYXQiOjE2NDEyOTYzMDF9.2-WsXwnDx-YfzXzfUCaPYFptu55WREYwDEyRjxyCL_U';
    var prequote_rfq_id = "61c96c51e13c01425d1c3a73";
    var comment_channel_id = "4dba5c05-66e7-11ec-bb56-777a0c3ed608";
    useEffect(() => {
     fetch(`http://apriordevapp-env.eba-ajmpa4mr.us-east-1.elasticbeanstalk.com/api/ws/comment-threads/prequote-rfqs/${prequote_rfq_id}/comment-channels/${comment_channel_id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }).then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            setData(data.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }, []);

    return (
        <div className='comment-viewer'>
           <h1 className='comment-text' data-testid="commentText">Comments History</h1>
           <div className='comment-thred'>
           {data && data.map((commentThread, index) => 
            <Card 
              key={index}
              onClick={()=> {props.clickedComment(commentThread.id)}}
                style={{ width: '100%', borderRadius: '10px', padding: '20px', marginBottom: '10px' }}
                className="comment_thread_card shadow"
              >
                <div  style={{marginBottom: '10px', fontWeight: 'bold'}} className="commentTitle">{commentThread.commentTitle}</div>
                <div className="createdTime">{commentThread.createdTime}</div>
            </Card>
           )} 
           </div>
           
        </div>
    )
}

export default CommentViewer
