import React, { useEffect,useState } from 'react';
import { Card } from 'react-bootstrap';
import './CommentViewer.css';

const markupData = {
    
  "notes": [{ "uniqueId": "c448d99e-1950-413a-bb79-74e4ff064d61", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { "x": 16.362143795455268, "y": 11.341463857846065, "z": -9.75108803089779 }, "selectionNormal": { "x": 0, "y": -0.8461166201787195, "z": 0.53299780961777 }, "text": "xcvxcv", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
      { "uniqueId": "b0b826e7-1f4a-4936-bdc7-b6a96d2837e5", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 53.09444439496133, y: 17.35680340879935, z: -8.714712965618673 }, "selectionNormal": { x: 0.39381808307983834, y: -0.4877177486906548, z: 0.7791268927789881 }, "text": "nmnmnmnnm", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
      { "uniqueId": "fccbbfb3-27ba-4c59-86e5-1af03bbc1232", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 32.6057585177432, y: 9.063699915930556, z: -15.342845537682479 }, "selectionNormal": { x: 0, y: -0.9777586050227087, z: 0.2097334267684736 }, "text": "yyyyyyyy", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
      { "uniqueId": "2758607b-a1b2-41a3-b07b-2182ef2a9bfb", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 8.201865731694852, y: 24.70312729512807, z: -52.81000000124004 }, "selectionNormal": {x: 0, y: 0, z: 1}, "text": ["kkkkkkkkkkk",'nmnmnmnmnmnmnm','ghghghhggh'], "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 }],
  "measurement": [],
  "lines": []
};

const CommentViewer = (props) => {

    const [data, setData] = useState([])
    var token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3b29kd2FyZGJzbXVzZXIxIiwiZXhwIjoxNjQwOTU5MjM4LCJpYXQiOjE2NDA5MjMyMzh9.RQOMheM5_MRrx6B9QL73aOGUNx1xwPqg9GpqYCTzIW8';
    var prequote_rfq_id = "61c19377e13c01425d1c3a62";
    var comment_channel_id = "ef8fa86a-6239-11ec-b78e-e9b71b80d45f";
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
            setData(data.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }, []);

    // const commentClicker = () =>{
    //    let commentId = 1;
    //    props.clickedComment(commentId)
    // }
    return (
        <div className='comment-viewer'>
            <h1 className='comment-text' onClick={()=> {props.clickedComment(1)}} >Comments History</h1>
           <div className='comment-thred'>
           {data && data.map((commentThread, index) => 
           <Card 
           key={index}
           onClick={()=> {props.clickedComment(commentThread)}}
      style={{ width: '100%', borderRadius: '10px', padding: '20px', marginBottom: '10px' }}
      className="comment_thread_card shadow"
    >
      {console.log(commentThread)}
      <div  style={{marginBottom: '10px', fontWeight: 'bold'}} className="commentTitle">{commentThread.commentTitle}</div>
      <div className="createdTime">{commentThread.createdTime}</div>
      </Card>
           ) } 
           {/* {markupData && markupData.notes.map(data => 
                <p onClick={()=> {props.clickedComment(data.uniqueId)}} key={data.uniqueId}>{data.uniqueId}</p>
           )
           } */}

           </div>
           
        </div>
    )
}

export default CommentViewer
