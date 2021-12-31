import React ,{useEffect, useState} from 'react';
import activeNoteText from '../data/activeNoteText'
import { CustomOperator } from '../js/CustomOperator';
import Emitter from '../service/emitter';


const markupData = {
    "views": [],
    "notes": [
        { "uniqueId": "b0b826e7-1f4a-4936-bdc7-b6a96d2837e5", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 53.09444439496133, y: 17.35680340879935, z: -8.714712965618673 }, "selectionNormal": { x: 0.39381808307983834, y: -0.4877177486906548, z: 0.7791268927789881 }, "text": "11111", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "fccbbfb3-27ba-4c59-86e5-1af03bbc1232", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 32.6057585177432, y: 9.063699915930556, z: -15.342845537682479 }, "selectionNormal": { x: 0, y: -0.9777586050227087, z: 0.2097334267684736 }, "text": "22222", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "2758607b-a1b2-41a3-b07b-2182ef2a9bfb", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 8.201865731694852, y: 24.70312729512807, z: -52.81000000124004 }, "selectionNormal": { x: 0, y: 0, z: 1 }, "text": '33333', "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "335a4437-c240-438b-9358-f615d01bc55e", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 7.400000100953548, y: 32.034542234214314, z: -20.252847442099664 }, "selectionNormal": { x: -1, y: 0, z: 0 }, "text": "44444", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "c448d99e-1950-413a-bb79-74e4ff064d61", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { "x": 16.362143795455268, "y": 11.341463857846065, "z": -9.75108803089779 }, "selectionNormal": { "x": 0, "y": -0.8461166201787195, "z": 0.53299780961777 }, "text": "55555", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 }],
    "measurement": [],
    "lines": []
};

const markupData2 = {
    "views": [],
    "notes": [
        { "uniqueId": "b0b826e7-1f4a-4936-bdc7-b6a96d2837e5", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 53.09444439496133, y: 17.35680340879935, z: -8.714712965618673 }, "selectionNormal": { x: 0.39381808307983834, y: -0.4877177486906548, z: 0.7791268927789881 }, "text": "11111", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
    ],
    "measurement": [],
    "lines": []
};

const markupData3 = {
    "views": [],
    "notes": [
        { "uniqueId": "2758607b-a1b2-41a3-b07b-2182ef2a9bfb", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 8.201865731694852, y: 24.70312729512807, z: -52.81000000124004 }, "selectionNormal": { x: 0, y: 0, z: 1 }, "text": '33333', "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
    ],
    "measurement": [],
    "lines": []
};

let comments = [
    {
        "createdBy": "619467caeedda06e76d40d51",
        "createdTime": "2021-12-27T12:43:57.811Z",
        "updatedBy": "619467caeedda06e76d40d51",
        "updatedTime": "2021-12-27T12:43:57.811Z",
        "id": "c770b46f-b301-4cf1-99ca-c68da70b2bd4",
        "senderId": {
            "createdBy": "ADMIN",
            "createdTime": "2021-11-17T02:24:10.905Z",
            "updatedBy": null,
            "updatedTime": "2021-11-17T02:24:10.905Z",
            "id": "619467caeedda06e76d40d51",
            "userName": "woodwardbsmuser1",
            "name": "Woodward BSM User 1",
            "emailAddress": "woodwardbsmuser@gmail.com",
            "userImage": "https://apriori-images.s3.amazonaws.com/user2.jpg",
            "status": "ACTIVE",
            "tenantId": null,
            "active": true
        },
        "tagUsersList": [],
        "messageBody": "Hi",
        "status": "DRAFT",
        "tenantId": "",
        "sendNotificationStatus": true,
        "notify": false
    },
    {
        "createdBy": "619467caeedda06e76d40d51",
        "createdTime": "2021-12-28T14:10:44.448Z",
        "updatedBy": "619467caeedda06e76d40d51",
        "updatedTime": "2021-12-28T14:10:44.448Z",
        "id": "aea5d323-e944-4db4-a2bb-a2efff9d4afc",
        "senderId": {
            "createdBy": "ADMIN",
            "createdTime": "2021-11-17T02:24:10.905Z",
            "updatedBy": null,
            "updatedTime": "2021-11-17T02:24:10.905Z",
            "id": "619467caeedda06e76d40d51",
            "userName": "woodwardbsmuser1",
            "name": "Woodward BSM User 1",
            "emailAddress": "woodwardbsmuser@gmail.com",
            "userImage": "https://apriori-images.s3.amazonaws.com/user2.jpg",
            "status": "ACTIVE",
            "tenantId": null,
            "active": true
        },
        "tagUsersList": [],
        "messageBody": "Test node pin",
        "status": "DRAFT",
        "tenantId": "",
        "sendNotificationStatus": true,
        "notify": false
    },
    {
        "createdBy": "619467caeedda06e76d40d51",
        "createdTime": "2021-12-29T12:35:19.890Z",
        "updatedBy": "619467caeedda06e76d40d51",
        "updatedTime": "2021-12-29T12:35:19.890Z",
        "id": "b2c98525-b041-4086-a215-89109bd926bd",
        "senderId": {
            "createdBy": "ADMIN",
            "createdTime": "2021-11-17T02:24:10.905Z",
            "updatedBy": null,
            "updatedTime": "2021-11-17T02:24:10.905Z",
            "id": "619467caeedda06e76d40d51",
            "userName": "woodwardbsmuser1",
            "name": "Woodward BSM User 1",
            "emailAddress": "woodwardbsmuser@gmail.com",
            "userImage": "https://apriori-images.s3.amazonaws.com/user2.jpg",
            "status": "ACTIVE",
            "tenantId": null,
            "active": true
        },
        "tagUsersList": [],
        "messageBody": "test0002",
        "status": "DRAFT",
        "tenantId": "",
        "sendNotificationStatus": true,
        "notify": false
    },
    {
        "createdBy": "619467caeedda06e76d40d51",
        "createdTime": "2021-12-29T13:44:03.719Z",
        "updatedBy": "619467caeedda06e76d40d51",
        "updatedTime": "2021-12-29T13:44:03.719Z",
        "id": "495c8af5-8d1d-4ec5-b5f0-67f104b0e6c0",
        "senderId": {
            "createdBy": "ADMIN",
            "createdTime": "2021-11-17T02:24:10.905Z",
            "updatedBy": null,
            "updatedTime": "2021-11-17T02:24:10.905Z",
            "id": "619467caeedda06e76d40d51",
            "userName": "woodwardbsmuser1",
            "name": "Woodward BSM User 1",
            "emailAddress": "woodwardbsmuser@gmail.com",
            "userImage": "https://apriori-images.s3.amazonaws.com/user2.jpg",
            "status": "ACTIVE",
            "tenantId": null,
            "active": true
        },
        "tagUsersList": [],
        "messageBody": "is changed?",
        "status": "DRAFT",
        "tenantId": "",
        "sendNotificationStatus": true,
        "notify": false
    }
]

const HoopsViewer = (props) => {
   // console.log(window);
    const [tmphwv, setTmphwv] = useState(null);
    const [newCam, setNewCam] = useState(null);

    let [isEventTriggered, setIsEventTriggered] = useState();
    let hwv = null;
    var token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3b29kd2FyZGJzbXVzZXIxIiwiZXhwIjoxNjQwOTcwMDkzLCJpYXQiOjE2NDA5MzQwOTN9.bPaST5qN-_a2DsAt_E30-GFHM9dVcDkPxYQTEdwOl8Y';
    var prequote_rfq_id = "61c19377e13c01425d1c3a62";
    var comment_channel_id = "ef8fa86a-6239-11ec-b78e-e9b71b80d45f";
  let ui = null;
    let md = new window.MobileDetect(window.navigator.userAgent);
    
    var activeItem = { "_noteElementId": "5e43a28d-0b64-4d1c-ada0-4d60362d6332",
    "_partId": 71,
    "_position": {x: 35.77206802368164,
      y: 36.40321731567383,
      z: 3.1750006675720215},
    "_selectionNormal": {
      x: -2.4082695693237393e-8,
      y: 0.328282967290209,
      z: 0.9445794267223562
    },
    "_selectionPosition": {
      x: 35.77206889931347,
      y: 34.92291932080661,
      z: -1.0843076591581848
    },
    "_sphereInstanceId": -65,
    "_sphereRadius": 0.03,
    "_stemInstanceId":  -64,
    "_text": "Test",
    "_uniqueId": "348021ee-cd94-49be-b488-4ef1c2b6ff0c"
  }
  
    var cameraLoaction = {
      "position": {
          "x": -42.22550722982972,
          "y": 54.88037014259887,
          "z": 2.5966051102457186
      },
      "target": {
          "x": 38.98509685626526,
          "y": 24.469803458892788,
          "z": -47.61311256955779
      },
      "up": {
          "x": 0.5318762346284513,
          "y": 0.739695885515422,
          "z": 0.4122592242618913
      },
      "width": 100.20469070538482,
      "height": 100.20469070538482,
      "projection": 0,
      "nearLimit": 0.01,
      "className": "Communicator.Camera"
    }


  useEffect(() => {
    window.Sample.createViewer().then(function (viewer) {
      hwv = viewer;

      window.onresize = function (event) {
          // jQuery resizable triggers onresize, check that the call is not coming from a DOM element object
          if (typeof event.target.getAttribute !== "function") {
              hwv.resizeCanvas();
          }
      };

      var screenConfiguration = (md.mobile() !== null) ? window.Communicator.ScreenConfiguration.Mobile : window.Sample.screenConfiguration;
      var uiConfig = {
          containerId: "mainHoops",
          screenConfiguration: screenConfiguration,
          endpointUri: "./data/microengine.scs",
      }
       hwv =new window.Communicator.WebViewer({
        containerId: "mainHoops",
        endpointUri: "./data/microengine.scs",
        });

        ui = new window.Communicator.Ui.Desktop.DesktopUi(hwv, uiConfig);

        
        hwv.setCallbacks({
            sceneReady: () => {
                // hwv.view.setBackgroundColor(window.Communicator.Color.blue(), window.Communicator.Color.white());
                // var currentcamera = hwv.view.getCamera();
            //     var jsoncamera = cameraLoaction.toJson();
          
             var newcamera = window.Communicator.Camera.fromJson(cameraLoaction);
             setNewCam(newcamera);
            },
        });
        
        

      hwv.start();
      Emitter.on('MOUSE_DOWN_TRIGGER', (newValue) => setIsEventTriggered(newValue));
        console.log(hwv);
        const myOperator = new CustomOperator(hwv);
      var myOperatorHandle = hwv.operatorManager.registerCustomOperator(myOperator);
      hwv.operatorManager.push(myOperatorHandle);
      var part = CustomOperator._partId
  
        setTmphwv(hwv)
        //hwv.markupManager.loadMarkupData(markupData);
        //setInitialCam(hwv.view._initialCamera)

     // console.log(hwv && hwv.markupManager._noteTextManager._noteTextList[0]);
  }, function (errorReason) {
      var errorDialog = new window.Communicator.Ui.UiDialog("content");
      errorDialog.setTitle("Viewer Error");
      errorDialog.setText(errorReason);
      errorDialog.show();
  });
  }, [])
    
    useEffect(() => {
        if (tmphwv)
        {
           tmphwv.markupManager.loadMarkupData(markupData, 'initial');       
            
        }   
    },[newCam]);
    
  useEffect(() => {
      if (props.clickedId !== null) {
          var cameraLoactionNew = {
        "position": {
            "x": 49.85546164375514,
            "y": -54.262069629585696,
            "z": 11.071256387145588
        },
        "target": {
            "x": 38.182303316112296,
            "y": 25.715833636809023,
            "z": -48.15925007115907
        },
        "up": {
            "x": 0.6578879306573404,
            "y": 0.5078667714801122,
            "z": 0.5561068360681874
        },
        "width": 100.20469070538482,
        "height": 100.20469070538482,
        "projection": 0,
        "nearLimit": 0.01,
        "className": "Communicator.Camera"
      }
       
       var   newcamera = window.Communicator.Camera.fromJson(cameraLoactionNew);
       tmphwv.view.setCamera(newcamera, 1000);
       tmphwv.view.pointToWindowPosition(newcamera);
       tmphwv.markupManager.loadMarkupData(markupData2);
       renderCommentNoteContainer()
    // console.log(new window.Communicator.Markup._MarkupViewConstruction("test"));
       
    //    const newData = markupData.notes.filter(note => note.uniqueId !== markupData2.notes[0].uniqueId);

    //    const newww = [...newData, markupData2.notes[0]];
       
    //    markupData.notes = newww;
       
          if (props.clickedId == '61c96c72e13c01425d1c3a74')
          {
             tmphwv.markupManager.loadMarkupData(markupData2);
          }
          if (props.clickedId == '61c983b6e13c01425d1c3a75')
          {
            tmphwv.markupManager.loadMarkupData(markupData3);
         }
      }

}, [props])

useEffect(() => {

    if (tmphwv) {
        // console.log("hwv==============",JSON.stringify(tmphwv._noteTextManager._activeItem._selectionPosition)) 
     renderCommentNoteContainer()

    }

}, [isEventTriggered]);

const closeComment = () => {
    if (tmphwv) {
        let obj = tmphwv._noteTextManager._activeItem
        obj.hide()


    }
}

const renderCommentNoteContainer = () =>
{
    let str = ''
    comments.forEach(comment => {
        str += `<div style="border-bottom: 1px solid #000; padding-bottom : 5px"><div class="d-flex">
    <div>
    <img
      roundedCircle
      src=${comment?.senderId?.userImage}
      className="rounded comments-profile-pic"
      style="width: 50px;
      height: 50px;
      margin: 5px;"
      alt="Profile"
    />
  </div>
  <div>
    <div style="font-weight: bold">
     ${comment.senderId.name}
  </div>
  <div style="
  font-size: 14px;">${comment.createdTime}</div>

  </div>
 </div>
 <div style="width: 300px;
 padding: 10px;

 margin: 0;">${comment.messageBody}</div></div>`

    })
    console.log("str", str)


    //             const comments = getCommentsByThread(JSON.stringify(tmphwv._noteTextManager._activeItem._selectionPosition))
    // console.log("commentsssss", comments)
    tmphwv.markupManager._noteTextManager._noteTextElement._container.innerHTML = `<div style="height: 200px;overflow-y: auto;"
     class="comment_wrapper">${str}</div>	<textarea id="comment_textarea"></textarea>
     <button id="create_comment" class="commentBtn">Comment</button>
     <button id="cancel" class="cancelBtn">Cancel</button>`;
    //  document.getElementById('create_comment').onclick = createComment(tmphwv._noteTextManager._activeItem)
    document.getElementById('create_comment').addEventListener('click', event => { createComment() })
    document.getElementById('cancel').addEventListener('click', event => { closeComment() })
    // document.getElementById('comment_textarea').addEventListener('change', event => {console.log("value", event.target.value); setCommentTextarea(event.target.value)})
}

const createComment = () => {

    let activeNoteData = tmphwv._noteTextManager._activeItem;
    let textarea_value = tmphwv._noteTextManager.getNoteTextElement().getText()

    var body = {
        anchorLocation: JSON.stringify(activeNoteData._selectionPosition),
        anchorType: "CELL",
        businessKey: "6aef8223-98e4-4cae-93ea-5b15d357ffd8",
        messageBody: textarea_value,
        messageTittle: `Material Cost part- ${activeNoteData._partId}`,
        rfqPreQuoteId: "61c96c51e13c01425d1c3a73",
        senarioDataItemId: "619bd5476651e3ca4caab9c3",
        sendNotificationStatus: true,
        supplierCommentChannelId: "4dba5c05-66e7-11ec-bb56-777a0c3ed608",
        tagUserIdList: [],

    }
    fetch('http://apriordevapp-env.eba-ajmpa4mr.us-east-1.elasticbeanstalk.com/api/ws/comment-threads', {
        method: 'POST',
        body: JSON.stringify(body), // string or object
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            comments = data.data.comments
            renderCommentNoteContainer()

        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

    return (
      <div id="mainHoops">
        <div id="content">
        <div id="viewerContainer"></div>
        {/* <!-- Toolbar HTML--> */}
        <div id="toolBar">
            <div className="toolbar-tools">
                <div id="home-button" title="Reset Camera" data-operatorclass="toolbar-home" className="hoops-tool">
                    <div className="tool-icon"></div>
                </div>
                <div id="tool_separator_1" className="tool-separator"></div>
                <div id="view-button" title="Camera Menu" data-operatorclass="toolbar-camera" data-submenu="view-submenu" className="hoops-tool toolbar-menu">
                    <div className="tool-icon"></div>
                </div>
                <div id="edgeface-button" title="Wireframe on Shaded" data-operatorclass="toolbar-wireframeshaded" data-submenu="edgeface-submenu" className="hoops-tool toolbar-menu">
                    <div className="tool-icon"></div>
                </div>
                <div id="tool_separator_2" className="tool-separator"></div>
                <div id="redline-button" title="Redline Note" data-operatorclass="toolbar-redline-note" data-submenu="redline-submenu" className="hoops-tool toolbar-radio">
                    <div className="smarrow"></div>
                    <div className="tool-icon"></div>
                </div>
                <div id="click-button" title="Select" data-operatorclass="toolbar-select" data-submenu="click-submenu" className="hoops-tool toolbar-radio active-tool">
                    <div className="smarrow"></div>
                    <div className="tool-icon"></div>
                </div>
                <div id="camera-button" title="Orbit Camera" data-operatorclass="toolbar-orbit" data-submenu="camera-submenu" className="hoops-tool toolbar-menu">
                    <div className="tool-icon"></div>
                </div>
                <div id="tool_separator_3" className="tool-separator"></div>
                <div id="explode-button" title="Explode Menu" data-operatorclass="toolbar-explode" data-submenu="explode-slider" className="hoops-tool toolbar-menu-toggle">
                    <div className="tool-icon"></div>
                </div>
                <div id="cuttingplane-button" title="Cutting Plane Menu" data-operatorclass="toolbar-cuttingplane" data-submenu="cuttingplane-submenu" className="hoops-tool toolbar-menu-toggle">
                    <div className="tool-icon"></div>
                </div>
                <div id="tool_separator_4" className="tool-separator"></div>
                <div id="snapshot-button" title="Snapshot" data-operatorclass="toolbar-snapshot" className="hoops-tool">
                    <div className="tool-icon"></div>
                </div>
                <div id="settings-button" title="Settings" data-operatorclass="toolbar-settings" className="hoops-tool">
                    <div className="tool-icon"></div>
                </div>
            </div>
            <div id="submenus">
                <div id="redline-submenu" data-button="redline-button" className="toolbar-submenu submenus">
                    <table>
                      <tbody>
                        <tr>
                            <td>
                                <div id="redline-circle-button" title="Redline Circle" data-operatorclass="toolbar-redline-circle" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="redline-rectangle-button" title="Redline Rectangle" data-operatorclass="toolbar-redline-rectangle" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="redline-note" title="Redline Note" data-operatorclass="toolbar-redline-note" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="redline-freehand" title="Redline Freehand" data-operatorclass="toolbar-redline-freehand" className="submenu-icon"></div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div id="camera-submenu" data-button="camera-button" className="toolbar-submenu submenus">
                    <table>
                      <tbody>
                        <tr>
                            <td>
                                <div id="operator-camera-walk" title="Walk" data-operatorclass="toolbar-walk" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="operator-camera-turntable" title="Turntable" data-operatorclass="toolbar-turntable" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="operator-camera-orbit" title="Orbit Camera" data-operatorclass="toolbar-orbit" className="submenu-icon"></div>
                            </td>
                        </tr>
                       </tbody>
                    </table>
                </div>
                <div id="edgeface-submenu" data-button="edgeface-button" className="toolbar-submenu submenus">
                    <table>
                      <tbody>
                        <tr>
                            <td>
                                <div id="viewport-wireframe-on-shaded" title="Shaded With Lines" data-operatorclass="toolbar-wireframeshaded" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="viewport-shaded" title="Shaded" data-operatorclass="toolbar-shaded" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div title="Hidden Line" data-operatorclass="toolbar-hidden-line" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="viewport-wireframe" title="Wireframe" data-operatorclass="toolbar-wireframe" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="viewport-xray" title="XRay" data-operatorclass="toolbar-xray" className="submenu-icon"></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div id="view-submenu" className="toolbar-submenu submenus">
                    <table>
                      <tbody>  
                        <tr>
                            <td>
                                <div id="view-face" title="Orient Camera To Selected Face" data-operatorclass="toolbar-face" className="submenu-icon disabled"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="view-iso" title="Iso View" data-operatorclass="toolbar-iso" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="view-ortho" title="Orthographic Projection" data-operatorclass="toolbar-ortho" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="view-persp" title="Perspective Projection" data-operatorclass="toolbar-persp" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="view-left" title="Left View" data-operatorclass="toolbar-left" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="view-right" title="Right View" data-operatorclass="toolbar-right" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="view-bottom" title="Bottom View" data-operatorclass="toolbar-bottom" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="view-front" title="Front View" data-operatorclass="toolbar-front" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="view-back" title="Back View" data-operatorclass="toolbar-back" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="view-top" title="Top View" data-operatorclass="toolbar-top" className="submenu-icon"></div>
                            </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
                <div id="click-submenu" data-button="click-button" className="toolbar-submenu submenus">
                    <table>
                      <tbody> 
                        <tr>
                            <td>
                                <div id="note-button" title="Create Note-Pin" data-operatorclass="toolbar-note" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="measure-angle-between-faces" title="Measure Angle Between Faces" data-operatorclass="toolbar-measure-angle" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="measure-distance-between-faces" title="Measure Distance Between Faces" data-operatorclass="toolbar-measure-distance" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="measure-edges" title="Measure Edges" data-operatorclass="toolbar-measure-edge" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="measure-point-to-point" title="Measure Point to Point" data-operatorclass="toolbar-measure-point" className="submenu-icon"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="select-parts" title="Select Parts" data-operatorclass="toolbar-select" className="submenu-icon"></div>
                            </td>
                            <td>
                                <div id="area-select" title="Area Select" data-operatorclass="toolbar-area-select" className="submenu-icon"></div>
                            </td>
                        </tr>
                       </tbody>
                    </table>
                </div>
                <div id="explode-slider" className="toolbar-submenu slider-menu submenus">
                    <div id="explosion-slider" style={{height: '90px'}} className="toolbar-slider"></div>
                </div>
                <div id="cuttingplane-submenu" className="toolbar-submenu cutting-plane submenus no-modal">
                    <table>
                      <tbody>
                        <tr>
                            <td>
                                <div id="cuttingplane-face" title="Create Cutting Plane On Selected Face" data-plane="face" data-operatorclass="toolbar-cuttingplane-face" className="toolbar-cp-plane submenu-icon disabled"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="cuttingplane-x" title="Cutting Plane X" data-plane="x" data-operatorclass="toolbar-cuttingplane-x" className="toolbar-cp-plane submenu-icon"></div>
                            </td>
                            <td>
                                <div id="cuttingplane-section" title="Cutting Plane Visibility Toggle" data-plane="section" data-operatorclass="toolbar-cuttingplane-section" className="toolbar-cp-plane submenu-icon disabled"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="cuttingplane-y" title="Cutting Plane Y" data-plane="y" data-operatorclass="toolbar-cuttingplane-y" className="toolbar-cp-plane submenu-icon"></div>
                            </td>
                            <td>
                                <div id="cuttingplane-toggle" title="Cutting Plane Section Toggle" data-plane="toggle" data-operatorclass="toolbar-cuttingplane-toggle" className="toolbar-cp-plane submenu-icon disabled"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div id="cuttingplane-z" title="Cutting Plane Z" data-plane="z" data-operatorclass="toolbar-cuttingplane-z" className="toolbar-cp-plane submenu-icon"></div>
                            </td>
                            <td>
                                <div id="cuttingplane-reset" title="Cutting Plane Reset" data-plane="reset" data-operatorclass="toolbar-cuttingplane-reset" className="toolbar-cp-plane submenu-icon disabled"></div>
                            </td>
                        </tr>
                       </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div id="viewer-settings-dialog-container">
            {/* <!-- Viewer Settings Window --> */}
            <div id="viewer-settings-dialog" className="hoops-ui-window">

                {/* <!-- Header --> */}
                <div className="hoops-ui-window-header">
                    <span className="tab selected" id="settings-tab-label-general">General</span>
                    <span className="tab" id="settings-tab-label-walk">Walk</span>
                    <span className="tab" id="settings-tab-label-drawing">Drawing</span>
                </div>

                {/* <!-- Drawing tab --> */}
                <div className="hoops-ui-window-body" id="settings-tab-drawing">
                    <div className="settings-group-header">Drawing</div>
                    <div className="settings-group settings-group-general">
                        <div className="settings-block">
                            <div>Drawing Colors:</div>
                            <div>
                                <input type="text" id="settings-drawing-background" className="color-picker" data-position="bottom left" />
                                <label>Background</label>
                            </div>
                            <div>
                                <input type="text" id="settings-drawing-sheet" className="color-picker" data-position="bottom left" />
                                <label>Sheet</label>
                            </div>
                            <div>
                                <input type="text" id="settings-drawing-sheet-shadow" className="color-picker" data-position="bottom left" />
                                <label>Sheet Shadow</label>
                            </div>
                            <div>
                                <input type="checkbox" id="settings-drawing-background-enabled" />
                                <label>Show Sheet Background</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Walk tab --> */}
                <div className="hoops-ui-window-body" id="settings-tab-walk">
                    <div className="settings-group-header">Walk Mode</div>
                    <div className="settings-group settings-group-general">
                        <div className="settings-block">
                            <label>Walk Mode:</label>
                            <select id="settings-walk-mode" className="right-align">
                                <option value="0">Mouse</option>
                                <option value="1">Keyboard</option>
                            </select>
                            <span className="clear-both"></span>
                        </div>

                        <div className="settings-block" id="walk-navigation-keys">
                            <div id="walk-navigation-text" className="center-align bold">Navigation Keys</div>
                            <div>
                                <span id="walk-key-forward">W</span> /
                                <span id="walk-key-left">A</span> /
                                <span id="walk-key-backward">S</span> /
                                <span id="walk-key-right">D</span>
                                <span className="right-align">Move</span>
                            </div>
                            <div>
                                <span id="walk-key-rotate-left">Q</span> /
                                <span id="walk-key-rotate-right">E</span>
                                <span className="right-align">rotate</span>
                            </div>
                            <div>
                                <span id="walk-key-up">X</span> /
                                <span id="walk-key-down">C</span>
                                <span className="right-align">Up / Down</span>
                            </div>
                            <div>
                                <span id="walk-key-tilt-up">R</span> /
                                <span id="walk-key-tilt-down">F</span>
                                <span id="move-keys" className="right-align">Tilt</span>
                            </div>
                            <div>
                                <span id="walk-key-toggle-collision">V</span>
                                <span className="right-align">Toggle Collision Detection</span>
                            </div>

                        </div>

                        <div className="settings-block">
                            <span id="walk-rotation-text">Rotation (Deg/s):</span>
                            <input type="number" min="0" id="settings-walk-rotation" className="right-align" />
                            <span className="clear-both"></span>
                        </div>

                        <div className="settings-block">
                            <span id="walk-speed-text">Walk Speed (<span id="walk-speed-units">m</span>/s):</span>
                            <input type="number" min="0" id="settings-walk-speed" step=".1" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span id="walk-elevation-text">Elevation Speed (<span id="elevation-speed-units">m</span>/s):</span>
                            <input type="number" min="0" id="settings-walk-elevation" step=".1" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span id="walk-view-angle-text">Field of View (Deg):</span>
                            <input type="number" min="30" max="150" id="settings-walk-view-angle" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span id="walk-mouse-look-text">Enable Mouse Look:</span>
                            <input type="checkbox" id="settings-mouse-look-enabled" />

                            <span id="settings-mouse-look-style" className="grayed-out right-align">
                                <label>Speed: </label>
                                <input id="settings-mouse-look-speed" type="number" />
                            </span>
                        </div>
                        <div className="settings-block">
                            <span id="walk-bim-mode-text">Enable Collision Detection:</span>
                            <input type="checkbox" id="settings-bim-mode-enabled" />
                            <span className="clear-both"></span>
                        </div>
                    </div>
                </div>

                {/* <!--General tab--> */}
                <div className="hoops-ui-window-body selected" id="settings-tab-general">
                    {/* <!-- general --> */}
                    <div className="settings-group-header">General</div>
                    <div className="settings-group settings-group-general">
                        <div className="settings-block">
                            <label>Projection Mode:</label>
                            <select id="settings-projection-mode" className="right-align">
                                <option value="0">Orthographic</option>
                                <option value="1">Perspective</option>
                            </select>
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span className="framerate-text">Framerate (fps):</span>
                            <input type="number" min="0" id="settings-framerate" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span>Hidden Line Opacity (0-1): </span>
                            <input id="settings-hidden-line-opacity" className="right-align" type="number" min="0" max="1" step=".1" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <label htmlFor="settings-show-backfaces">Show Backfaces:</label>
                            <input type="checkbox" id="settings-show-backfaces" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <label htmlFor="settings-show-capping-geometry">Show Capping Geometry:</label>
                            <input type="checkbox" id="settings-show-capping-geometry" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span>Enable Face / Line Selection: </span>
                            <input type="checkbox" id="settings-enable-face-line-selection" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span>Selection Honors Scene Visibility:</span>
                            <input type="checkbox" id="settings-select-scene-invisible" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span>Rotate Around Camera Center:</span>
                            <input type="checkbox" id="settings-orbit-mode" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                    </div>

                    {/* <!-- effects --> */}
                    <div className="settings-group-header">Effects</div>
                    <div className="settings-group settings-group-general">

                        <div className="settings-block">
                            <span>Enable Ambient Occlusion:</span>
                            <input type="checkbox" id="settings-ambient-occlusion" />
                            <input id="settings-ambient-occlusion-radius" type="number" min="0" max="10" step=".01" className="right-align" />
                            <div className="right-align">Radius: </div>
                            <span className="clear-both"></span>
                        </div>

                        <div className="settings-block">
                            <span>Enable Anti-Aliasing:</span>
                            <input type="checkbox" id="settings-anti-aliasing" className="right-align" />
                            <span className="clear-both"></span>
                        </div>

                        <div className="settings-block">
                            <div>
                                <span>Enable Bloom:</span>
                                <input type="checkbox" id="settings-bloom-enabled" className="right-align" />
                            </div>
                            <span id="settings-bloom-style" className="grayed-out">
                                <label>Intensity Scale:</label>
                                <input id="settings-bloom-intensity" type="number" min="0" step=".1" className="right-align" disabled />
                                <span className="clear-both"></span>
                                <label>Threshold:</label>
                                <input type="range" id="settings-bloom-threshold" min="0" max="1" step="0.1" className="right-align" disabled />
                            </span>
                        </div>

                        <div className="settings-block">
                            <div>
                                <span>Silhouette Edges:</span>
                                <input type="checkbox" id="settings-silhouette-enabled" className="right-align" />
                            </div>
                        </div>

                        <div className="settings-block">
                            <div>
                                <span>Reflection Planes:</span>
                                <input type="checkbox" id="settings-reflection-enabled" className="right-align" />
                            </div>
                        </div>

                        <div className="settings-block">
                            <div>
                                <span>Enable Shadows:</span>
                                <input type="checkbox" id="settings-shadow-enabled" className="right-align" />
                            </div>
                            <span id="settings-shadow-style" className="grayed-out">
                                <span>Interactive:</span>
                                <input type="checkbox" id="settings-shadow-interactive" className="right-align" disabled />
                                <span className="clear-both"></span>

                                <label>Blur Samples:</label>
                                <input type="range" id="settings-shadow-blur-samples" min="0" max="20" step="1" className="right-align" disabled />
                            </span>
                        </div>

                    </div>

                    {/* <!-- axis --> */}
                    <div className="settings-group-header">Axis</div>
                    <div className="settings-group settings-group-general">
                        <div className="settings-block">
                            <span>Show Axis Triad:</span>
                            <input type="checkbox" id="settings-axis-triad" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                        <div className="settings-block">
                            <span>Show Nav Cube:</span>
                            <input type="checkbox" id="settings-nav-cube" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                    </div>

                    {/* <!-- point cloud --> */}
                    <div className="settings-group-header">Point Cloud</div>
                    <div className="settings-group settings-group-general">
                        <div className="settings-block">
                            <span>Enable Splats:</span>
                            <input type="checkbox" id="settings-splat-rendering-enabled" />

                            <span id="settings-splat-enabled-style" className="grayed-out right-align">
                                <label>Size: </label>
                                <input id="settings-splat-rendering-size" step=".01" type="number" />

                                <label>Mode:</label>
                                <select id="settings-splat-rendering-point-size-unit">
                                    <option value="0">ScreenPixels</option>
                                    <option value="1">CSSPixels</option>
                                    <option value="2">World</option>
                                    <option value="3">ScreenWidth</option>
                                    <option value="4">ScreenHeight</option>
                                    <option value="5">BoundingDiagonal</option>
                                </select>
                            </span>
                        </div>
                        <div className="settings-block">
                            <span>Enable Eye-Dome Lighting:</span>
                            <input type="checkbox" id="settings-eye-dome-lighting-enabled" className="right-align" />
                            <span className="clear-both"></span>
                        </div>
                    </div>

                    {/* <!--color--> */}
                    <div className="settings-group-header">Color</div>
                    <div className="settings-group settings-group-colors">
                        <div className="settings-block">
                            <div>Background Color:</div>
                            <div>
                                <input type="text" id="settings-background-top" className="color-picker" data-position="top left" />
                                <label>Top</label>
                            </div>
                            <div>
                                <input type="text" id="settings-background-bottom" className="color-picker" data-position="top left" />
                                <label>Bottom</label>
                            </div>
                        </div>
                        <div className="settings-block">
                            <div>Capping Geometry:</div>
                            <div>
                                <input type="text" id="settings-capping-face-color" className="color-picker" data-position="top left" />
                                <label>Face</label>
                            </div>
                            <div>
                                <input type="text" id="settings-capping-line-color" className="color-picker" data-position="top left" />
                                <label>Line</label>
                            </div>
                        </div>
                        <div className="settings-block">
                            <div>Selection Color:</div>
                            <input type="text" id="settings-selection-color-body" className="color-picker" data-position="top left" />
                            <label>Body</label>
                            <div>
                                <span id="settings-selection-color-face-line-style">
                                    <input type="text" id="settings-selection-color-face-line" className="color-picker" data-position="top left" />
                                    <label>Faces and Lines</label>
                                </span>
                            </div>
                        </div>
                        <div className="settings-block">
                            <input type="text" id="settings-measurement-color" className="color-picker" data-position="top left" />
                            <label>Measurement Color</label>
                        </div>
                        <div className="settings-block">
                            <span id="settings-pmi-color-style" className="grayed-out">
                                <input type="text" id="settings-pmi-color" className="color-picker" data-position="top left" disabled />
                                <label>PMI Override Color</label>
                            </span>
                            <input type="checkbox" id="settings-pmi-enabled" />
                            <label>Enable</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Footer --> */}
                <div>
                    <div className="hoops-ui-window-footer">
                        <div className="version">
                            Viewer Version:
                            <span id="settings-viewer-version"></span>, Format Version:
                            <span id="settings-format-version"></span>
                        </div>
                        <div className="hoops-ui-footer-buttons">
                            <button id="viewer-settings-ok-button">Ok</button>
                            <button id="viewer-settings-cancel-button">Cancel</button>
                            <button id="viewer-settings-apply-button">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="snapshot-dialog" className="hoops-ui-window">
        <div className="hoops-ui-window-header">Snapshot</div>
        <div className="hoops-ui-window-body">
            <img id="snapshot-dialog-image" className="snapshot-image" alt="Snapshot" />
            <div className="snapshot-text">Right Click to Save image</div>
        </div>
        <div className="hoops-ui-window-footer">
            <div className="hoops-ui-footer-buttons">
                <button id="snapshot-dialog-cancel-button">Close</button>
            </div>
        </div>
    </div>
  </div>  
    )
}

export default HoopsViewer
