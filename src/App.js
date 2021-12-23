import './App.css';
import React, {useState} from 'react';
import HoopsViewer from './components/HoopsViewer';
import CommentViewer from './components/CommentViewer';

function App() {
  const [commentId, setCommentId] = useState(null)

  const triggerdCommentId = (id) =>{
    setCommentId(id)
  }
  
  return (
      <div className='hoopsViewer-main'>
          <div className='hoopsViewer'>
              {/* <p>test</p> */}
             <HoopsViewer clickedId={commentId}/>
          </div>
          <div className='commentViewer'>
             {/* <p>test1</p> */}
            <CommentViewer clickedComment={triggerdCommentId}/>
          </div>
      </div>
    // <>
    //     <HoopsViewer/>
    //     <CommentViewer/>
    // </>
     
  );
}

export default App;
