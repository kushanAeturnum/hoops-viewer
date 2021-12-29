import Emitter from "../services/emitter";

export class CustomOperator {
    constructor(viewer) {
        this._viewer = viewer;
        this._partId = null;
    }
    onMouseDown(event) {
        const pickConfig = new window.Communicator.PickConfig(window.Communicator.SelectionMask.All);
        this._viewer.view.pickFromPoint(event.getPosition(), pickConfig).then((selection) => {
            if (selection.getSelectionType() !== window.Communicator.SelectionType.None) {
                this._partId = selection.getNodeId();
                Emitter.emit('MOUSE_DOWN_TRIGGER', selection);
                this._viewer.model.setNodesOpacity([this._partId], 0.5);
                console.log("_partId", this._partId )
                console.log("selection", selection )
                console.log(" this._viewer",  this._viewer)

            }
        });
    }
    onMouseUp(event) {
        if (this._partId !== null) {
            this._viewer.model.setNodesOpacity([this._partId], 1.0);
            this._partId = null;
        }
    }
    onMouseMove(event) { }
    onMousewheel(event) { }
    onTouchStart(event) { }
    onTouchMove(event) { }
    onTouchEnd(event) { }
    onKeyDown(event) { }
    onKeyUp(event) { }
    onDeactivate() { }
    onActivate() { }
    onViewOrientationChange() { }
    stopInteraction() { }
}