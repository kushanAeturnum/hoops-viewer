import './App.css';
import React, {useState} from 'react';
import HoopsViewer from './components/HoopsViewer/HoopsViewer';
import CommentViewer from './components/CommentViewer/CommentViewer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [commentId, setCommentId] = useState(null)

  const triggerdCommentId = (id) =>{
    setCommentId(id)
  }
  
  return (
      <div className='hoopsViewer-main'>
          <div className='hoopsViewer'>
             <HoopsViewer clickedId={commentId}/>
          </div>
          <div className='commentViewer'>
            <CommentViewer clickedComment={triggerdCommentId}/>
          </div>
      </div>
     
  );
}

export default App;
