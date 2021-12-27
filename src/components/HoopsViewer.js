import React ,{useEffect, useState} from 'react';
import activeNoteText from '../data/activeNoteText'
import { CustomOperator } from '../js/CustomOperator';


const markupData = {
    
    "notes": [{ "uniqueId": "c448d99e-1950-413a-bb79-74e4ff064d61", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { "x": 16.362143795455268, "y": 11.341463857846065, "z": -9.75108803089779 }, "selectionNormal": { "x": 0, "y": -0.8461166201787195, "z": 0.53299780961777 }, "text": "xcvxcv", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "b0b826e7-1f4a-4936-bdc7-b6a96d2837e5", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 53.09444439496133, y: 17.35680340879935, z: -8.714712965618673 }, "selectionNormal": { x: 0.39381808307983834, y: -0.4877177486906548, z: 0.7791268927789881 }, "text": "nmnmnmnnm", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "fccbbfb3-27ba-4c59-86e5-1af03bbc1232", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 32.6057585177432, y: 9.063699915930556, z: -15.342845537682479 }, "selectionNormal": { x: 0, y: -0.9777586050227087, z: 0.2097334267684736 }, "text": "yyyyyyyy", "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 },
        { "uniqueId": "2758607b-a1b2-41a3-b07b-2182ef2a9bfb", "className": "Communicator.Markup.Note.NoteText", "selectionPosition": { x: 8.201865731694852, y: 24.70312729512807, z: -52.81000000124004 }, "selectionNormal": {x: 0, y: 0, z: 1}, "text": ["kkkkkkkkkkk",'nmnmnmnmnmnmnm','ghghghhggh'], "color": { "r": 255, "g": 255, "b": 255 }, "partId": 20 }],
    "measurement": [],
    "lines": []
};

const HoopsViewer = (props) => {
   // console.log(window);
    const [tmphwv, setTmphwv] = useState(null);
    const [newCam, setNewCam] = useState(null);

    console.log('newcam is', newCam);

  let hwv = null;
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
          
             var   newcamera = window.Communicator.Camera.fromJson(cameraLoaction);
                setNewCam(newcamera);
            },
        });
        
        

      hwv.start();
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
            tmphwv.markupManager.loadMarkupData(markupData);     
        }   
    },[newCam]);
    
  useEffect(() => {
   if(props.clickedId !== null){
       
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
      // tmphwv.view.pointToWindowPosition(newcamera);
       tmphwv.markupManager.loadMarkupData(markupData);

    // console.log(new window.Communicator.Markup._MarkupViewConstruction("test"));
       
    //const markupData = JSON.stringify(viewer.markupManager.exportMarkup());

       
      
      
    //  console.log(hwv && hwv.markupManager._noteTextManager._noteTextList);
    // window.Sample.createViewer().then(function (viewer) {
    //     //let newHwv = viewer;
    //     tmphwv && tmphwv.markupManager._noteTextManager._noteTextList.push(activeNoteText)
    //     //  console.log(tmphwv && tmphwv.markupManager._noteTextManager);
    //      console.log(tmphwv);
        
    //     //hwv.start(tmphwv);
    // }, function (errorReason) {
    //     var errorDialog = new window.Communicator.Ui.UiDialog("content");
    //     errorDialog.setTitle("Viewer Error");
    //     errorDialog.setText(errorReason);
    //     errorDialog.show();
    // });
    //console.log("clicked", activeNoteText);
   }
}, [props])

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
