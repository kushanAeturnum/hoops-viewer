import './App.css';
import React, { Fragment, useEffect, useState } from 'react';

const Comment = () => {
	const [commentsData, setCommentsData] = useState(null);
	const [data, setData] = useState(null);
    var token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3b29kd2FyZGJzbXVzZXIxIiwiZXhwIjoxNjQwMTg1ODE3LCJpYXQiOjE2NDAxNDk4MTd9.LimoDLX8xMI3w8g6TnGvryrD3ZtgUQ44j3EWTYZUT3A';
    useEffect(async () => {
        await fetch('http://apriordevapp-env.eba-ajmpa4mr.us-east-1.elasticbeanstalk.com/api/ws/comment-threads/prequote-rfqs/61c17bc2e13c01425d1c3a5f/comment-channels/ccbc224e-622b-11ec-b78e-e9b71b80d45f', {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
		}
	  }).then(response => response.json())
			.then(data => {
				setCommentsData(data.data[1]);
				setData(data.data);
		console.log('Success:', data);
	  })
	  .catch((error) => {
		console.error('Error:', error);
	  });
	}, [])

	const messageHandler = () => {
		console.log("button clicked");
	}
	
	console.log("comment is", commentsData);
	console.log("data is",data);
    return (
		<div style={{ marginLeft: '70%' }}>
			<div style={{ textAlign: 'center', fontWeight: 'bold' }}>
				Comments
			</div>
			{data &&
				data.map((data) => {
					return (
						<div onClick={messageHandler}>
							<div style={{fontWeight: 'bold' }}>
								{data.anchorLocation}
							</div>						
							{data.comments?.map(da => {
								return (
									<div>
										{da.messageBody}
										</div>
									)
							})}
							{/* <>
								##############################
							</> */}
					</div>
				)
				})
				
			}
        </div>
    );
}

export default Comment;