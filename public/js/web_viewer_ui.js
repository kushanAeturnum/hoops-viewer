var __extends = this && this.__extends || function() {
    var f = function(g, l) {
        f = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, d) {
            e.__proto__ = d
        } || function(e, d) {
            for (var a in d) d.hasOwnProperty(a) && (e[a] = d[a])
        };
        return f(g, l)
    };
    return function(g, l) {
        function e() {
            this.constructor = g
        }
        f(g, l);
        g.prototype = null === l ? Object.create(l) : (e.prototype = l.prototype, new e)
    }
}(),
__awaiter = this && this.__awaiter || function(f, g, l, e) {
    return new(l || (l = Promise))(function(d, a) {
        function b(c) {
            try {
                h(e.next(c))
            } catch (k) {
                a(k)
            }
        }

        function c(c) {
            try {
                h(e["throw"](c))
            } catch (k) {
                a(k)
            }
        }

        function h(a) {
            a.done ? d(a.value) : (new l(function(c) {
                c(a.value)
            })).then(b, c)
        }
        h((e = e.apply(f, g || [])).next())
    })
},
__generator = this && this.__generator || function(f, g) {
    function l(c) {
        return function(b) {
            return e([c, b])
        }
    }

    function e(h) {
        if (a) throw new TypeError("Generator is already executing.");
        for (; d;) try {
            if (a = 1, b && (c = h[0] & 2 ? b["return"] : h[0] ? b["throw"] || ((c = b["return"]) && c.call(b), 0) : b.next) && !(c = c.call(b, h[1])).done) return c;
            if (b = 0, c) h = [h[0] & 2, c.value];
            switch (h[0]) {
                case 0:
                case 1:
                    c =
                        h;
                    break;
                case 4:
                    return d.label++, {
                        value: h[1],
                        done: !1
                    };
                case 5:
                    d.label++;
                    b = h[1];
                    h = [0];
                    continue;
                case 7:
                    h = d.ops.pop();
                    d.trys.pop();
                    continue;
                default:
                    if (!(c = d.trys, c = 0 < c.length && c[c.length - 1]) && (6 === h[0] || 2 === h[0])) {
                        d = 0;
                        continue
                    }
                    if (3 === h[0] && (!c || h[1] > c[0] && h[1] < c[3])) d.label = h[1];
                    else if (6 === h[0] && d.label < c[1]) d.label = c[1], c = h;
                    else if (c && d.label < c[2]) d.label = c[2], d.ops.push(h);
                    else {
                        c[2] && d.ops.pop();
                        d.trys.pop();
                        continue
                    }
            }
            h = g.call(f, d)
        } catch (k) {
            h = [6, k], b = 0
        } finally {
            a = c = 0
        }
        if (h[0] & 5) throw h[1];
        return {
            value: h[0] ?
                h[1] : void 0,
            done: !0
        }
    }
    var d = {
            label: 0,
            sent: function() {
                if (c[0] & 1) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        },
        a, b, c, h;
    return h = {
        next: l(0),
        "throw": l(1),
        "return": l(2)
    }, "function" === typeof Symbol && (h[Symbol.iterator] = function() {
        return this
    }), h
},
Example;
(function(f) {
var g = function(e) {
    function d(a, b, c, h) {
        var d = e.call(this) || this;
        d._leaderLine = new Communicator.Markup.Shape.Line;
        d._textBox = new Communicator.Markup.Shape.TextBox;
        d._showAsColor = !1;
        d._nodeId = b;
        d._viewer = a;
        d._leaderAnchor = c.copy();
        d._textBoxAnchor = c.copy();
        d._textBox.setTextString(h);
        d._textBox.getBoxPortion().setFillOpacity(1);
        d._textBox.getBoxPortion().setFillColor(Communicator.Color.white());
        d._textBox.getTextPortion().setFillColor(Communicator.Color.red());
        d._textBox.getTextPortion().setFontSize(16);
        d._leaderLine.setStartEndcapType(Communicator.Markup.Shape.EndcapType.Arrowhead);
        return d
    }
    __extends(d, e);
    d.prototype.draw = function() {
        this._behindView = !1;
        var a = this._viewer.view.projectPoint(this._leaderAnchor),
            b = this._viewer.view.projectPoint(this._textBoxAnchor);
        0 >= a.z && (this._behindView = !0);
        0 >= b.z && (this._behindView = !0);
        a = Communicator.Point2.fromPoint3(a);
        b = Communicator.Point2.fromPoint3(b);
        this._leaderLine.set(a, b);
        this._textBox.setPosition(b);
        b = this._viewer.markupManager.getRenderer();
        b.drawLine(this._leaderLine);
        b.drawTextBox(this._textBox)
    };
    d.prototype.hit = function(a) {
        var b = this._viewer.markupManager.getRenderer().measureTextBox(this._textBox),
            c = this._textBox.getPosition();
        return a.x < c.x || a.x > c.x + b.x || a.y < c.y || a.y > c.y + b.y ? !1 : !0
    };
    d.prototype.setShowAsColor = function(a) {
        this._showAsColor = a
    };
    d.prototype.getShowAsColor = function() {
        return this._showAsColor
    };
    d.prototype.getNodeId = function() {
        return this._nodeId
    };
    d.prototype.getLeaderLineAnchor = function() {
        return this._leaderAnchor.copy()
    };
    d.prototype.getTextBoxAnchor =
        function() {
            return this._textBoxAnchor
        };
    d.prototype.setTextBoxAnchor = function(a) {
        this._textBoxAnchor.assign(a)
    };
    d.prototype.setLabel = function(a) {
        this._textBox.setTextString(a)
    };
    d.prototype.getLabel = function() {
        return this._textBox.getTextString()
    };
    return d
}(Communicator.Markup.MarkupItem);
f.AnnotationMarkup = g;
var l = function() {
    function e(d, a) {
        this._annotationMap = {};
        this._viewer = d;
        this._pulseManager = a;
        this._table = document.getElementById("AnnotationRegistry")
    }
    e.prototype.getAnnotation = function(d) {
        return this._annotationMap[d]
    };
    e.prototype.export = function() {
        for (var d = [], a = 0, b = Object.keys(this._annotationMap); a < b.length; a++) {
            var c = this._annotationMap[b[a]];
            d.push({
                name: c.getLabel(),
                position: c.getLeaderLineAnchor().toJson(),
                nodeId: c.getNodeId(),
                showAsColor: c.getShowAsColor()
            })
        }
        return JSON.stringify(d)
    };
    e.prototype.addAnnotation = function(d, a) {
        var b = this;
        this._annotationMap[d] = a;
        var c = document.createElement("tr");
        c.id = d;
        var h = document.createElement("td");
        h.id = d + "-nodeId";
        h.innerText = a.getNodeId().toString();
        c.appendChild(h);
        h = document.createElement("td");
        h.id = d + "-name";
        h.innerText = a.getLabel();
        c.appendChild(h);
        a = document.createElement("td");
        h = document.createElement("button");
        h.innerText = "Rename";
        h.onclick = function() {
            b._renameAnnotation(d)
        };
        a.appendChild(h);
        h = document.createElement("button");
        h.innerText = "Delete";
        h.onclick = function() {
            b._deleteAnnotation(d)
        };
        a.appendChild(h);
        c.appendChild(a);
        a = document.createElement("td");
        h = document.createElement("input");
        h.type = "checkbox";
        h.id = d + "-showAsColor";
        h.classList.add("showAsColor");
        a.appendChild(h);
        h.onchange = function(c) {
            b._onPulseChange(d, c.target)
        };
        c.appendChild(a);
        this._table.appendChild(c)
    };
    e.prototype._onPulseChange = function(d, a) {
        d = this.getAnnotation(d);
        void 0 !== d && (d.setShowAsColor(a.checked), a.checked ? this._pulseManager.add(d.getNodeId(), this._pulseManager.getDefaultColor1(), this._pulseManager.getDefaultColor2(), this._pulseManager.getDefaultPulseTime()) : (this._pulseManager.deletePulse(d.getNodeId()), this._viewer.redraw()))
    };
    e.prototype._renameAnnotation = function(d) {
        var a =
            this._annotationMap[d];
        if (void 0 !== a) {
            var b = prompt("Enter a new name for " + a.getLabel(), a.getLabel());
            null != b && (a.setLabel(b), this._viewer.markupManager.refreshMarkup(), d = document.getElementById(d + "-name"), null !== d && (d.innerText = b))
        }
    };
    e.prototype._deleteAnnotation = function(d) {
        this._viewer.markupManager.unregisterMarkup(d);
        var a = this._annotationMap[d];
        void 0 !== a && (this._pulseManager.deletePulse(a.getNodeId()), delete this._annotationMap[d]);
        d = document.getElementById(d);
        null !== d && null !== d.parentElement &&
            d.parentElement.removeChild(d)
    };
    return e
}();
f.AnnotationRegistry = l;
l = function(e) {
    function d(a, b) {
        var c = e.call(this) || this;
        c._previousAnchorPlaneDragPoint = null;
        c._activeMarkup = null;
        c._previousNodeId = null;
        c._viewer = a;
        c._annotationRegistry = b;
        return c
    }
    __extends(d, e);
    d.prototype.needsSelection = function(a) {
        return a === Communicator.EventType.MouseDown
    };
    d.prototype.onMouseDown = function(a) {
        var b = a._getPickResult(this._selectionMask(Communicator.EventType.MouseDown));
        if (null === b || 0 === b.overlayIndex()) {
            var c =
                a.getPosition();
            if (this._selectAnnotation(c)) a.setHandled(!0);
            else if (null !== b && b.isNodeEntitySelection()) {
                var h = b.getNodeId();
                b = b.getPosition();
                h = new g(this._viewer, h, b, this._viewer.model.getNodeName(h) + " Connector");
                b = this._viewer.markupManager.registerMarkup(h);
                this._annotationRegistry.addAnnotation(b, h);
                this._startDraggingAnnotation(h, c);
                a.setHandled(!0)
            }
        }
    };
    d.prototype._startDraggingAnnotation = function(a, b) {
        this._activeMarkup = a;
        this._previousAnchorPlaneDragPoint = this._getDragPointOnAnchorPlane(b)
    };
    d.prototype._selectAnnotation = function(a) {
        var b = this._viewer.markupManager.pickMarkupItem(a);
        return b ? (this._activeMarkup = b, this._previousAnchorPlaneDragPoint = this._getDragPointOnAnchorPlane(a), !0) : !1
    };
    d.prototype.onDeactivate = function() {
        null != this._previousNodeId && this._viewer.model.setNodesHighlighted([this._previousNodeId], !1);
        this._previousNodeId = null
    };
    d.prototype.onMouseMove = function(a) {
        return __awaiter(this, void 0, void 0, function() {
            var b, c, h, d, k;
            return __generator(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (null ===
                            this._activeMarkup) return [3, 1];
                        b = this._getDragPointOnAnchorPlane(a.getPosition());
                        c = void 0;
                        c = null !== this._previousAnchorPlaneDragPoint && null !== b ? Communicator.Point3.subtract(b, this._previousAnchorPlaneDragPoint) : Communicator.Point3.zero();
                        h = this._activeMarkup.getTextBoxAnchor().add(c);
                        this._activeMarkup.setTextBoxAnchor(h);
                        this._previousAnchorPlaneDragPoint = b;
                        this._viewer.markupManager.refreshMarkup();
                        a.setHandled(!0);
                        return [3, 3];
                    case 1:
                        return [4, this._viewer.view.pickFromPoint(a.getPosition(), new Communicator.PickConfig)];
                    case 2:
                        d = m.sent(), k = d.getNodeId(), k !== this._previousNodeId && (null != this._previousNodeId && this._viewer.model.setNodesHighlighted([this._previousNodeId], !1), null != k && this._viewer.model.setNodesHighlighted([k], !0)), this._previousNodeId = k, m.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    };
    d.prototype.onMouseUp = function(a) {
        a;
        this._previousAnchorPlaneDragPoint = this._activeMarkup = null
    };
    d.prototype._getDragPointOnAnchorPlane = function(a) {
        if (null === this._activeMarkup) return null;
        var b = this._activeMarkup.getLeaderLineAnchor(),
            c = this._viewer.view.getCamera();
        c = Communicator.Point3.subtract(c.getPosition(), b).normalize();
        b = Communicator.Plane.createFromPointAndNormal(b, c);
        a = this._viewer.view.raycastFromPoint(a);
        if (null === a) return null;
        c = Communicator.Point3.zero();
        return b.intersectsRay(a, c) ? c : null
    };
    return d
}(Communicator.Operator.Operator);
f.AnnotationOperator = l
})(Example || (Example = {}));
var Communicator;
(function(f) {
(function(g) {
    (function(l) {
        var e = function() {
            function a(b, c) {
                this.action = b;
                this.element = c
            }
            a.prototype.setEnabled = function(b) {
                b ? $(this.element).removeClass("disabled") : $(this.element).addClass("disabled")
            };
            a.prototype.setText = function(b) {
                this.element.innerHTML = b
            };
            a.prototype.show = function() {
                $(this.element).show()
            };
            a.prototype.hide = function() {
                $(this.element).hide()
            };
            return a
        }();
        l.ContextMenuItem = e;
        var d = function() {
            function a(b, c, a, d, k) {
                var h = this;
                this._transparencyIdHash = new Map;
                this._activeType =
                    this._activeLayerName = this._activeItemId = null;
                this._separatorCount = 0;
                this._position = null;
                this._modifiers = f.KeyModifiers.None;
                this._viewer = a;
                this._containerId = c;
                this._isolateZoomHelper = d;
                this._colorPicker = k;
                this._menuElement = this._createMenuElement(b);
                this._contextLayer = this._createContextLayer();
                this._initElements();
                this._viewer.setCallbacks({
                    _firstModelLoaded: function() {
                        h._onNewModel();
                        return Promise.resolve()
                    },
                    modelSwitched: function() {
                        h._onNewModel()
                    }
                })
            }
            a.prototype._getContextItemMap = function() {
                return this._contextItemMap
            };
            a.prototype._onNewModel = function() {
                this._viewer.isDrawingSheetActive() && (this._contextItemMap.reset.hide(), void 0 !== this._contextItemMap.meshlevel0 && this._contextItemMap.meshlevel0.hide(), void 0 !== this._contextItemMap.meshlevel1 && this._contextItemMap.meshlevel1.hide(), void 0 !== this._contextItemMap.meshlevel2 && this._contextItemMap.meshlevel2.hide(), $(".contextmenu-separator-3").hide())
            };
            a.prototype._isMenuItemEnabled = function() {
                if (null !== this._activeLayerName || null !== this._activeType || null !== this._activeItemId &&
                    !this._viewer._getNoteTextManager().checkPinInstance(this._activeItemId)) return !0;
                for (var b = 0, c = this._viewer.selectionManager.getResults(); b < c.length; b++)
                    if (1 !== c[b].overlayIndex()) return !0;
                return !1
            };
            a.prototype._isMenuItemVisible = function() {
                var b = this._isItemVisible(this._activeItemId),
                    c = this._isLayerVisibile(this._activeLayerName),
                    a = this._isTypeVisible(this._activeType);
                return b || c || a
            };
            a.prototype._isColorSet = function(b) {
                return __awaiter(this, void 0, void 0, function() {
                    var c, a, d, k;
                    return __generator(this,
                        function(h) {
                            switch (h.label) {
                                case 0:
                                    c = this._colorPicker.getColor(), a = !0, d = 0, h.label = 1;
                                case 1:
                                    return d < b.length ? [4, this._viewer.model.getNodeColorMap(b[d], f.ElementType.Faces)] : [3, 4];
                                case 2:
                                    k = h.sent();
                                    if (0 === k.size) return [2, !1];
                                    k.forEach(function(b) {
                                        b.equals(c) || (a = !1)
                                    });
                                    h.label = 3;
                                case 3:
                                    return ++d, [3, 1];
                                case 4:
                                    return [2, a]
                            }
                        })
                })
            };
            a.prototype._updateMenuItems = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var b, c, a, d, k, e, g;
                    return __generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return b =
                                    this.getContextItemIds(!0, !0, !1), c = this._isMenuItemEnabled(), a = this._isMenuItemVisible(), this._contextItemMap.visibility.setText(a ? "Hide" : "Show"), this._contextItemMap.visibility.setEnabled(c), this._contextItemMap.isolate.setEnabled(c), this._contextItemMap.zoom.setEnabled(c), this._contextItemMap.transparent.setEnabled(c), k = (d = this._contextItemMap.setColor).setText, [4, this._isColorSet(b)];
                            case 1:
                                return k.apply(d, [(h.sent() ? "Uns" : "S") + "et Color"]), (e = this._viewer.operatorManager.getOperator(f.OperatorId.Handle)) &&
                                    e.isEnabled && c ? (g = 0 < b.length && e.isEnabled(), this._contextItemMap.handles.setEnabled(g)) : this._contextItemMap.handles.setEnabled(!1), void 0 !== this._contextItemMap.meshlevel0 && this._contextItemMap.meshlevel0.setEnabled(c), void 0 !== this._contextItemMap.meshlevel1 && this._contextItemMap.meshlevel1.setEnabled(c), void 0 !== this._contextItemMap.meshlevel2 && this._contextItemMap.meshlevel2.setEnabled(c), [2]
                        }
                    })
                })
            };
            a.prototype.setActiveLayerName = function(b) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this,
                        function(c) {
                            switch (c.label) {
                                case 0:
                                    return this._activeLayerName = g.LayersTree.getLayerName(b), [4, this._updateMenuItems()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                })
            };
            a.prototype.setActiveType = function(b) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return this._activeType = b, [4, this._updateMenuItems()];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            };
            a.prototype.setActiveItemId = function(b) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return this._activeItemId =
                                    b, [4, this._updateMenuItems()];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            };
            a.prototype.showElements = function(b) {
                this._viewer.setContextMenuStatus(!0);
                var c = this._viewer.view.getCanvasSize(),
                    a = $(this._menuElement),
                    d = a.outerWidth(),
                    k = a.outerHeight();
                void 0 !== k && void 0 !== d && (k > c.y && a.addClass("small"), a = b.y, b = b.x, a + k > c.y && (a = c.y - k - 1), b + d > c.x && (b = c.x - d - 1), $(this._menuElement).css({
                    left: b + "px",
                    top: a + "px",
                    display: "block"
                }));
                $(this._menuElement).show();
                $(this._contextLayer).show()
            };
            a.prototype._onContextLayerClick =
                function(b) {
                    0 === b.button && this.hide()
                };
            a.prototype.hide = function() {
                this._viewer.setContextMenuStatus(!1);
                this._activeType = this._activeLayerName = this._activeItemId = null;
                $(this._menuElement).hide();
                $(this._contextLayer).hide();
                $(this._menuElement).removeClass("small")
            };
            a.prototype.action = function(b) {
                return __awaiter(this, void 0, void 0, function() {
                    var c;
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return c = this._contextItemMap[b], void 0 === c ? [3, 2] : [4, c.action()];
                            case 1:
                                a.sent(), a.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            a.prototype._doMenuClick = function(b) {
                b = $(b.target);
                b.hasClass("disabled") || (b = b.attr("id"), void 0 !== b && this.action(b), this.hide())
            };
            a.prototype._createMenuElement = function(b) {
                var c = this,
                    a = document.createElement("div");
                a.classList.add("ui-contextmenu");
                a.classList.add(b);
                a.style.position = "absolute";
                a.style.zIndex = "6";
                a.style.display = "none";
                a.oncontextmenu = function() {
                    return !1
                };
                a.ontouchmove = function(c) {
                    c.preventDefault()
                };
                $(a).on("click", ".ui-contextmenu-item", function(b) {
                    c._doMenuClick(b)
                });
                return a
            };
            a.prototype._createContextLayer = function() {
                var b = this,
                    c = document.createElement("div");
                c.style.position = "relative";
                c.style.width = "100%";
                c.style.height = "100%";
                c.style.backgroundColor = "transparent";
                c.style.zIndex = "5";
                c.style.display = "none";
                c.oncontextmenu = function() {
                    return !1
                };
                c.ontouchmove = function(c) {
                    c.preventDefault()
                };
                $(c).on("mousedown", function(c) {
                    b._onContextLayerClick(c)
                });
                return c
            };
            a.prototype._initElements = function() {
                this._createDefaultMenuItems();
                var b = document.getElementById(this._containerId);
                null !== b && (b.appendChild(this._menuElement), b.appendChild(this._contextLayer))
            };
            a.prototype._isMenuItemExecutable = function() {
                return null !== this._activeItemId || null !== this._activeLayerName || null !== this._activeType || 0 < this._viewer.selectionManager.size()
            };
            a.prototype._createDefaultMenuItems = function() {
                var b = this,
                    c = this._viewer.model,
                    a = this._viewer.operatorManager;
                this._contextItemMap = {};
                var d = function(b) {
                    return b.every(function(b) {
                        return c._hasEffectiveGenericType(b, f.StaticGenericType.IfcSpace)
                    })
                };
                this.appendItem("isolate", "Isolate", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        var c;
                        return __generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    if (!this._isMenuItemExecutable()) return [3, 2];
                                    c = this.getContextItemIds(!0, !0);
                                    return [4, this._isolateZoomHelper.isolateNodes(c, d(c) ? !1 : null)];
                                case 1:
                                    b.sent(), b.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                });
                this.appendItem("zoom", "Zoom", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return this._isMenuItemExecutable() ? [4, this._isolateZoomHelper.fitNodes(this.getContextItemIds(!0, !0))] : [3, 2];
                                case 1:
                                    c.sent(), c.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                });
                this.appendItem("visibility", "Hide", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        var b, a;
                        return __generator(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (!this._isMenuItemExecutable()) return [3, 2];
                                    b = !this._isMenuItemVisible();
                                    a = this.getContextItemIds(!0, !0);
                                    return [4, c.setNodesVisibility(a, b, d(a) ? !1 : null)];
                                case 1:
                                    h.sent(), h.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                });
                this.appendSeparator();
                this.appendItem("transparent", "Transparent", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        var b, a, h, d, m, k;
                        return __generator(this, function(e) {
                            if (this._isMenuItemExecutable())
                                if (b = this.getContextItemIds(!0, !0), void 0 === this._transparencyIdHash.get(b[0])) {
                                    a = 0;
                                    for (h = b; a < h.length; a++) d = h[a], this._transparencyIdHash.set(d, 1);
                                    c.setNodesOpacity(b, .5)
                                } else {
                                    m = 0;
                                    for (k = b; m < k.length; m++) d = k[m], this._transparencyIdHash.delete(d);
                                    c.resetNodesOpacity(b)
                                } return [2]
                        })
                    })
                });
                this.appendSeparator();
                this.appendItem("setColor",
                    "Set Color",
                    function() {
                        return __awaiter(b, void 0, void 0, function() {
                            var c, b;
                            return __generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return c = this.getContextItemIds(!0, !0, !1), 0 < c.length ? [4, this._isColorSet(c)] : [3, 2];
                                    case 1:
                                        a.sent() ? this._viewer.model.unsetNodesFaceColor(c) : (b = this._colorPicker.getColor().copy(), this._viewer.model.setNodesFaceColor(c, b)), a.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    });
                this.appendItem("modifyColor", "Modify Color", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        return __generator(this,
                            function(c) {
                                this._colorPicker.show();
                                return [2]
                            })
                    })
                });
                this.appendSeparator();
                this.appendItem("handles", "Show Handles", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        var c, b;
                        return __generator(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (!this._isMenuItemExecutable()) return [3, 2];
                                    c = a.getOperator(f.OperatorId.Handle);
                                    b = this.getContextItemIds(!0, !0, !1);
                                    return 0 < b.length ? [4, c.addHandles(b, this._modifiers === f.KeyModifiers.Shift ? null : this._position)] : [3, 2];
                                case 1:
                                    h.sent(), h.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                });
                this.appendItem("reset", "Reset Model", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        var b;
                        return __generator(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    return b = a.getOperator(f.OperatorId.Handle), [4, b.removeHandles()];
                                case 1:
                                    return h.sent(), [4, c.reset()];
                                case 2:
                                    return h.sent(), c.unsetNodesFaceColor([this._viewer.model.getAbsoluteRootNode()]), [2]
                            }
                        })
                    })
                });
                if (this._viewer.getCreationParameters().hasOwnProperty("model")) {
                    this.appendSeparator();
                    for (var k = function(a) {
                            e.appendItem("meshlevel" + a, "Mesh Level " +
                                a,
                                function() {
                                    return __awaiter(b, void 0, void 0, function() {
                                        return __generator(this, function(h) {
                                            b._isMenuItemExecutable() && c.setMeshLevel(b.getContextItemIds(!0, !0), a);
                                            return [2]
                                        })
                                    })
                                })
                        }, e = this, g = 0; 3 > g; ++g) k(g)
                }
                this.appendSeparator();
                this.appendItem("showall", "Show all", function() {
                    return __awaiter(b, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._isolateZoomHelper.showAll()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                })
            };
            a.prototype.getContextItemIds = function(b, c,
                a) {
                void 0 === a && (a = !0);
                var h = this._viewer.selectionManager,
                    d = this._viewer.model,
                    e = d.getAbsoluteRootNode(),
                    g = [];
                if (b) {
                    b = 0;
                    for (var l = h.getResults(); b < l.length; b++) {
                        var n = l[b].getNodeId();
                        d.isNodeLoaded(n) && (a || !a && n !== e) && g.push(n)
                    }
                }
                if (null !== this._activeLayerName && (d = this._viewer.model.getLayerIdsFromName(this._activeLayerName), null !== d))
                    for (b = 0; b < d.length; b++)
                        if (n = this._viewer.model.getNodesFromLayer(d[b]), null !== n)
                            for (l = 0; l < n.length; l++) {
                                var p = n[l],
                                    r = f.Selection.SelectionItem.create(p);
                                h.contains(r) ||
                                    g.push(p)
                            }
                null !== this._activeType && (n = this._viewer.model.getNodesByGenericType(this._activeType), null !== n && n.forEach(function(c) {
                    var b = f.Selection.SelectionItem.create(c);
                    h.contains(b) || g.push(c)
                }));
                null !== this._activeItemId && (r = f.Selection.SelectionItem.create(this._activeItemId), d = null !== h.containsParent(r), b = -1 !== g.indexOf(this._activeItemId), !c || !a && (a || this._activeItemId === e || 0 !== g.length && (b || d)) || g.push(this._activeItemId));
                return g
            };
            a.prototype.appendItem = function(b, c, a) {
                var h = document.createElement("div");
                h.classList.add("ui-contextmenu-item");
                h.innerHTML = c;
                h.id = b;
                this._menuElement.appendChild(h);
                c = new e(a, h);
                return this._contextItemMap[b] = c
            };
            a.prototype.appendSeparator = function() {
                var b = document.createElement("div");
                b.classList.add("contextmenu-separator-" + this._separatorCount++);
                b.classList.add("ui-contextmenu-separator");
                b.style.width = "100%";
                b.style.height = "1px";
                this._menuElement.appendChild(b)
            };
            a.prototype._isItemVisible = function(b) {
                if (null === b) {
                    b = this._viewer.selectionManager.getResults();
                    if (0 ===
                        b.length) return !1;
                    b = b[0].getNodeId()
                }
                return this._viewer.model.getNodeVisibility(b)
            };
            a.prototype._isLayerVisibile = function(b) {
                if (null !== b && (b = this._viewer.model.getLayerIdsFromName(b), null !== b))
                    for (var c = 0; c < b.length; c++) {
                        var a = this._viewer.model.getNodesFromLayer(b[c]);
                        if (null !== a)
                            for (var d = 0; d < a.length; d++)
                                if (this._viewer.model.getNodeVisibility(a[d])) return !0
                    }
                return !1
            };
            a.prototype._isTypeVisible = function(b) {
                var c = this,
                    a = !1;
                null !== b && (b = this._viewer.model.getNodesByGenericType(b), null !== b && b.forEach(function(b) {
                    a =
                        a || c._viewer.model.getNodeVisibility(b)
                }));
                return a
            };
            return a
        }();
        l.ContextMenu = d
    })(g.Context || (g.Context = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l;
    (function(a) {
        a[a.X = 0] = "X";
        a[a.Y = 1] = "Y";
        a[a.Z = 2] = "Z";
        a[a.FACE = 3] = "FACE"
    })(l = g.AxisIndex || (g.AxisIndex = {}));
    var e = function() {
        return function() {
            this.referenceGeometry = this.plane = null;
            this.status = 0;
            this.updateReferenceGeometry = !1
        }
    }();
    g.CuttingPlaneInfo = e;
    var d = function() {
        function a(b) {
            var c = this;
            this._cuttingSections = [];
            this._modelBounding = new f.Box;
            this._planeInfo = new Map;
            this._useIndividualCuttingSections = this._showReferenceGeometry = !0;
            this._boundingBoxUpdate = !1;
            this._faceSelection =
                null;
            this._assemblyTreeReadyOccurred = !1;
            this._pendingFuncs = {};
            this._viewer = b;
            this.resetCuttingPlanes();
            b = function() {
                return __awaiter(c, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, this._updateBoundingBox()];
                            case 1:
                                return c.sent(), [4, this.resetCuttingPlanes()];
                            case 2:
                                return c.sent(), [2]
                        }
                    })
                })
            };
            this._viewer.setCallbacks({
                _assemblyTreeReady: function() {
                    return __awaiter(c, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4,
                                        this._initSection()
                                    ];
                                case 1:
                                    return c.sent(), this._assemblyTreeReadyOccurred = !0, [4, this._updateBoundingBox()];
                                case 2:
                                    return c.sent(), [2]
                            }
                        })
                    })
                },
                visibilityChanged: function() {
                    return __awaiter(c, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._updateBoundingBox()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                },
                hwfParseComplete: function() {
                    return __awaiter(c, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._updateBoundingBox()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                },
                _firstModelLoaded: b,
                _modelSwitched: b,
                _resetAssemblyTreeBegin: function() {
                    return __awaiter(c, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._clearCuttingSections()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                }
            })
        }
        a.prototype._getCuttingStatus = function(b, c) {
            return 0 <= c.normal.x && 0 <= c.normal.y && 0 <= c.normal.z || b === l.FACE ? 1 : 2
        };
        a.prototype.onSectionsChanged = function() {
            var b = this,
                c = [],
                a = [],
                d = !1,
                k = !1,
                e = this._cuttingSections[0],
                f = this._cuttingSections[1],
                g = this._cuttingSections[2],
                l = this._cuttingSections[3];
            1 < e.getCount() ? (c[0] = e.getPlane(0), c[1] = e.getPlane(1), c[2] = e.getPlane(2), c[3] = e.getPlane(3), a[0] = e.getReferenceGeometry(0), a[1] = e.getReferenceGeometry(1), a[2] = e.getReferenceGeometry(2), a[3] = e.getReferenceGeometry(3)) : (k = !0, c[0] = e.getPlane(0), c[1] = f.getPlane(0), c[2] = g.getPlane(0), c[3] = l.getPlane(0), a[0] = e.getReferenceGeometry(0), a[1] = f.getReferenceGeometry(0), a[2] = g.getReferenceGeometry(0), a[3] = l.getReferenceGeometry(0));
            if (null !== a[0] || null !==
                a[1] || null !== a[2] || null !== a[3]) d = !0;
            this._resetCuttingData();
            this._showReferenceGeometry = d;
            this._useIndividualCuttingSections = k;
            for (d = 0; d < c.length; ++d) k = c[d], null !== k && (e = this._getPlaneAxis(k), f = this._ensurePlaneInfo(e), 0 === f.status && (f.status = this._getCuttingStatus(e, k), f.plane = k, f.referenceGeometry = a[d]));
            this._viewer.pauseRendering();
            return this._clearCuttingSections().then(function() {
                return b._restorePlanes().then(function() {
                    b._viewer.resumeRendering()
                })
            })
        };
        a.prototype._getPlaneAxis = function(b) {
            var c =
                Math.abs(b.normal.x),
                a = Math.abs(b.normal.y);
            b = Math.abs(b.normal.z);
            return 1 === c && 0 === a && 0 === b ? l.X : 0 === c && 1 === a && 0 === b ? l.Y : 0 === c && 0 === a && 1 === b ? l.Z : l.FACE
        };
        a.prototype.getReferenceGeometryEnabled = function() {
            return this._showReferenceGeometry
        };
        a.prototype.getIndividualCuttingSectionEnabled = function() {
            return this._useIndividualCuttingSections
        };
        a.prototype.getPlaneInfo = function(b) {
            return this._planeInfo.get(b)
        };
        a.prototype._ensurePlaneInfo = function(b) {
            var c = this._planeInfo.get(b);
            void 0 === c && (c = new e,
                this._planeInfo.set(b, c));
            return c
        };
        a.prototype._setStatus = function(b, c) {
            this._ensurePlaneInfo(b).status = c
        };
        a.prototype._updateBoundingBox = function() {
            var b = this;
            return !this._boundingBoxUpdate && this._assemblyTreeReadyOccurred ? (this._boundingBoxUpdate = !0, this._viewer.model.getModelBounding(!0, !1).then(function(c) {
                var a = b._modelBounding.min.equalsWithTolerance(c.min, .01),
                    d = b._modelBounding.max.equalsWithTolerance(c.max, .01);
                if (a && d) c = Promise.resolve();
                else {
                    b._modelBounding = c;
                    b._ensurePlaneInfo(l.X).updateReferenceGeometry = !0;
                    b._ensurePlaneInfo(l.Y).updateReferenceGeometry = !0;
                    b._ensurePlaneInfo(l.Z).updateReferenceGeometry = !0;
                    b._ensurePlaneInfo(l.FACE).updateReferenceGeometry = !0;
                    var k = [b._isActive(l.X), b._isActive(l.Y), b._isActive(l.Z), b._isActive(l.FACE)];
                    b._storePlanes();
                    c = b._clearCuttingSections().then(function() {
                        return b._restorePlanes(k)
                    })
                }
                return c.then(function() {
                    b._boundingBoxUpdate = !1
                })
            })) : Promise.resolve()
        };
        a.prototype._resetAxis = function(b) {
            this._planeInfo.delete(b);
            b === l.FACE && (this._faceSelection = null)
        };
        a.prototype._resetCuttingData = function() {
            this._resetAxis(l.X);
            this._resetAxis(l.Y);
            this._resetAxis(l.Z);
            this._resetAxis(l.FACE);
            this._showReferenceGeometry = this._useIndividualCuttingSections = !0;
            this._faceSelection = null
        };
        a.prototype.resetCuttingPlanes = function() {
            this._resetCuttingData();
            return this._clearCuttingSections()
        };
        a.prototype._initSection = function() {
            return __awaiter(this, void 0, void 0, function() {
                var b, c;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, this._viewer.model.getModelBounding(!0,
                                !1)];
                        case 1:
                            return b = a.sent(), this._modelBounding = b.copy(), c = this._viewer.cuttingManager, console.assert(c._isInitialized()), this._cuttingSections[l.X] = c.getCuttingSection(l.X), this._cuttingSections[l.Y] = c.getCuttingSection(l.Y), this._cuttingSections[l.Z] = c.getCuttingSection(l.Z), this._cuttingSections[l.FACE] = c.getCuttingSection(l.FACE), [4, this._triggerPendingFuncs()];
                        case 2:
                            return a.sent(), [2]
                    }
                })
            })
        };
        a.prototype._triggerPendingFuncs = function() {
            return __awaiter(this, void 0, void 0, function() {
                var b;
                return __generator(this,
                    function(c) {
                        switch (c.label) {
                            case 0:
                                if (!this._pendingFuncs.inverted) return [3, 2];
                                b = this._pendingFuncs.inverted;
                                delete this._pendingFuncs.inverted;
                                return [4, b()];
                            case 1:
                                c.sent(), c.label = 2;
                            case 2:
                                if (!this._pendingFuncs.visibility) return [3, 4];
                                b = this._pendingFuncs.visibility;
                                delete this._pendingFuncs.visibility;
                                return [4, b()];
                            case 3:
                                c.sent(), c.label = 4;
                            case 4:
                                return [2]
                        }
                    })
            })
        };
        a.prototype.toggle = function(b) {
            var c = this,
                a = [];
            switch (this._ensurePlaneInfo(b).status) {
                case 0:
                    if (b === l.FACE) {
                        var d = this._viewer.selectionManager.getLast();
                        null !== d && d.isFaceSelection() && (this._faceSelection = d, a.push(this._cuttingSections[b].clear().then(function() {
                            c._setStatus(b, 1);
                            return c.setCuttingPlaneVisibility(!0, b)
                        })))
                    } else this._setStatus(b, 1), a.push(this.setCuttingPlaneVisibility(!0, b));
                    break;
                case 1:
                    this._setStatus(b, 2);
                    a.push(this.setCuttingPlaneInverted(b));
                    break;
                case 2:
                    this._setStatus(b, 0), a.push(this.setCuttingPlaneVisibility(!1, b))
            }
            return f.Util.waitForAll(a)
        };
        a.prototype.getCount = function() {
            for (var b = 0, c = 0, a = this._cuttingSections; c < a.length; c++) b +=
                a[c].getCount();
            return b
        };
        a.prototype.setCuttingPlaneVisibility = function(b, c) {
            return __awaiter(this, void 0, void 0, function() {
                var a, d, k, e, f, g, l = this;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            a = this._getCuttingSectionIndex(c);
                            d = this._cuttingSections[a];
                            if (void 0 === d) return this._pendingFuncs.visibility = function() {
                                return __awaiter(l, void 0, void 0, function() {
                                    return __generator(this, function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return [4, this.setCuttingPlaneVisibility(b, c)];
                                            case 1:
                                                return a.sent(),
                                                    [2]
                                        }
                                    })
                                })
                            }, [2];
                            this._viewer.delayCapping();
                            b ? (e = this._ensurePlaneInfo(c), null === e.plane && (e.plane = this._generateCuttingPlane(c), e.referenceGeometry = this._generateReferenceGeometry(c)), k = this._setSection(c)) : k = this.refreshPlaneGeometry();
                            f = this.getCount();
                            g = this._isActive(c);
                            return [4, k];
                        case 1:
                            return h.sent(), 0 < f && !g ? [4, this._activatePlanes()] : [3, 3];
                        case 2:
                            return h.sent(), [3, 5];
                        case 3:
                            return g && 0 === f ? [4, this._deactivateAxis(c)] : [3, 5];
                        case 4:
                            h.sent(), h.label = 5;
                        case 5:
                            return [2]
                    }
                })
            })
        };
        a.prototype.setCuttingPlaneInverted =
            function(b) {
                var c = this,
                    a = this._getCuttingSectionIndex(b);
                a = this._cuttingSections[a];
                if (void 0 === a) return this._pendingFuncs.inverted = function() {
                    return __awaiter(c, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this.setCuttingPlaneInverted(b)];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                }, Promise.resolve();
                this._viewer.delayCapping();
                var d = this._getPlaneIndex(b),
                    k = a.getPlane(d);
                return k ? (k.normal.negate(), k.d *= -1, a.updatePlane(d, k, new f.Matrix, !1, !1)) : Promise.resolve()
            };
        a.prototype.toggleReferenceGeometry = function() {
            return 0 < this.getCount() ? (this._showReferenceGeometry = !this._showReferenceGeometry, this.refreshPlaneGeometry()) : Promise.resolve()
        };
        a.prototype.refreshPlaneGeometry = function() {
            var b = this;
            this._storePlanes();
            return this._clearCuttingSections().then(function() {
                return b._restorePlanes()
            })
        };
        a.prototype.toggleCuttingMode = function() {
            var b = this;
            if (1 < this.getCount()) {
                this._storePlanes();
                var c = this._clearCuttingSections();
                this._useIndividualCuttingSections = !this._useIndividualCuttingSections;
                return c.then(function() {
                    return b._restorePlanes()
                })
            }
            return Promise.resolve()
        };
        a.prototype._isActive = function(b) {
            return this._cuttingSections[this._getCuttingSectionIndex(b)].isActive()
        };
        a.prototype._deactivateAxis = function(b) {
            return this._cuttingSections[this._getCuttingSectionIndex(b)].deactivate()
        };
        a.prototype._getCuttingSectionIndex = function(b) {
            return this._useIndividualCuttingSections ? b : 0
        };
        a.prototype._clearCuttingSection = function(b) {
            return __awaiter(this, void 0, void 0, function() {
                var c;
                return __generator(this,
                    function(a) {
                        switch (a.label) {
                            case 0:
                                return c = this._cuttingSections[b], void 0 === c ? [3, 2] : [4, c.clear()];
                            case 1:
                                a.sent(), a.label = 2;
                            case 2:
                                return [2]
                        }
                    })
            })
        };
        a.prototype._clearCuttingSections = function() {
            var b = [];
            b.push(this._clearCuttingSection(l.X));
            b.push(this._clearCuttingSection(l.Y));
            b.push(this._clearCuttingSection(l.Z));
            b.push(this._clearCuttingSection(l.FACE));
            return f.Util.waitForAll(b)
        };
        a.prototype._activatePlane = function(b) {
            b = this._cuttingSections[b];
            return b.getCount() ? (b = b.activate(), null === b ?
                Promise.resolve() : b) : Promise.resolve()
        };
        a.prototype._activatePlanes = function(b) {
            var c = [];
            b && !b[0] || c.push(this._activatePlane(l.X));
            b && !b[1] || c.push(this._activatePlane(l.Y));
            b && !b[2] || c.push(this._activatePlane(l.Z));
            b && !b[3] || c.push(this._activatePlane(l.FACE));
            return f.Util.waitForAll(c)
        };
        a.prototype._getPlaneIndex = function(b) {
            if (this._useIndividualCuttingSections) {
                b = this._getCuttingSectionIndex(b);
                var c = this._cuttingSections[b];
                if (c.getPlane(0)) return 0
            } else {
                c = this._cuttingSections[0];
                for (var a =
                        c.getCount(), d = 0; d < a; d++) {
                    var k = c.getPlane(d),
                        e = void 0;
                    this._faceSelection && (e = this._faceSelection.getFaceEntity().getNormal());
                    if (k && (k.normal.x && b === l.X || k.normal.y && b === l.Y || k.normal.z && b === l.Z || b === l.FACE && e && k.normal.equals(e))) return d
                }
            }
            return -1
        };
        a.prototype._setSection = function(b) {
            var c = this._planeInfo.get(b);
            return void 0 !== c && null !== c.plane ? this._cuttingSections[this._getCuttingSectionIndex(b)].addPlane(c.plane, this._showReferenceGeometry ? c.referenceGeometry : null).then(f.Internal.nop) : Promise.resolve()
        };
        a.prototype._restorePlane = function(b) {
            return __awaiter(this, void 0, void 0, function() {
                var c;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            c = this._planeInfo.get(b);
                            if (void 0 === c || null === c.plane || 0 === c.status) return [3, 2];
                            if (null === c.referenceGeometry || c.updateReferenceGeometry) c.referenceGeometry = this._generateReferenceGeometry(b);
                            return [4, this._setSection(b)];
                        case 1:
                            a.sent(), a.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        };
        a.prototype._restorePlanes = function(b) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this,
                    function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, Promise.all([this._restorePlane(l.X), this._restorePlane(l.Y), this._restorePlane(l.Z), this._restorePlane(l.FACE)])];
                            case 1:
                                return c.sent(), [4, this._activatePlanes(b)];
                            case 2:
                                return c.sent(), [2]
                        }
                    })
            })
        };
        a.prototype._storePlane = function(b) {
            var c = this._cuttingSections[this._getCuttingSectionIndex(b)],
                a = this._ensurePlaneInfo(b);
            a.plane = null;
            a.referenceGeometry = null;
            if (0 < c.getCount() && 0 !== a.status) {
                var d = this._getPlaneIndex(b);
                b = c.getPlane(d);
                c = c.getReferenceGeometry(d);
                a.plane = b;
                a.referenceGeometry = c
            }
        };
        a.prototype._storePlanes = function() {
            this._storePlane(l.X);
            this._storePlane(l.Y);
            this._storePlane(l.Z);
            this._storePlane(l.FACE)
        };
        a.prototype._generateReferenceGeometry = function(b) {
            var c = this._viewer.cuttingManager,
                a = [];
            if (b === l.FACE) this._faceSelection && (b = this._faceSelection.getFaceEntity().getNormal(), a = this._faceSelection.getPosition(), a = c.createReferenceGeometryFromFaceNormal(b, a, this._modelBounding));
            else {
                switch (b) {
                    case l.X:
                        var d = f.Axis.X;
                        break;
                    case l.Y:
                        d = f.Axis.Y;
                        break;
                    case l.Z:
                        d = f.Axis.Z
                }
                void 0 !== d && (a = c.createReferenceGeometryFromAxis(d, this._modelBounding))
            }
            return a
        };
        a.prototype._generateCuttingPlane = function(b) {
            var c = new f.Plane;
            switch (b) {
                case l.X:
                    c.normal.set(1, 0, 0);
                    c.d = -this._modelBounding.max.x;
                    break;
                case l.Y:
                    c.normal.set(0, 1, 0);
                    c.d = -this._modelBounding.max.y;
                    break;
                case l.Z:
                    c.normal.set(0, 0, 1);
                    c.d = -this._modelBounding.max.z;
                    break;
                case l.FACE:
                    if (this._faceSelection) {
                        this._faceSelection = this._faceSelection;
                        b = this._faceSelection.getFaceEntity().getNormal();
                        var a = this._faceSelection.getPosition();
                        c.setFromPointAndNormal(a, b)
                    } else return null
            }
            return c
        };
        return a
    }();
    g.CuttingPlaneController = d
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
function g(e, d) {
    var a = e.model,
        b = e.getActiveSheetId();
    if (null !== b) {
        var c = a.getNodeParent(b),
            h = a.getNodeChildren(c);
        f.Internal.filterInPlace(d, function(c) {
            for (; null !== c && c !== b;) {
                if (-1 !== h.indexOf(c)) return !1;
                c = e.model.getNodeParent(c)
            }
            return !0
        })
    }
}
f._filterActiveSheetNodeIds = g;
var l = function() {
    function e(d) {
        var a = this;
        this._camera = null;
        this._deselectOnZoom = this._deselectOnIsolate = !0;
        this._isolateStatus = !1;
        this._viewer = d;
        this._noteTextManager = this._viewer._getNoteTextManager();
        this._viewer.setCallbacks({
            modelSwitched: function() {
                a._camera =
                    null
            }
        })
    }
    e.prototype._setCamera = function(d) {
        null === this._camera && (this._camera = d)
    };
    e.prototype.setDeselectOnIsolate = function(d) {
        this._deselectOnIsolate = d
    };
    e.prototype.getIsolateStatus = function() {
        return this._isolateStatus
    };
    e.prototype.isolateNodes = function(d, a) {
        void 0 === a && (a = null);
        var b = this._viewer.view;
        this._setCamera(b.getCamera());
        g(this._viewer, d);
        d = b.isolateNodes(d, f.DefaultTransitionDuration, !this._viewer.isDrawingSheetActive(), a);
        this._deselectOnIsolate && this._viewer.selectionManager.clear();
        this._isolateStatus = !0;
        return d
    };
    e.prototype.fitNodes = function(d) {
        var a = this._viewer.view;
        this._setCamera(a.getCamera());
        d = a.fitNodes(d);
        this._deselectOnZoom && this._viewer.selectionManager.clear();
        return d
    };
    e.prototype.showAll = function() {
        var d = this._viewer.model;
        if (this._viewer.isDrawingSheetActive()) {
            var a = this._viewer.getActiveSheetId();
            return null !== a ? this.isolateNodes([a]) : Promise.resolve()
        }
        a = [];
        d.isDrawing() ? (d = this._viewer._getSheetManager().get3DNodes(), a.push(this.isolateNodes(d))) : a.push(d.resetNodesVisibility());
        null !== this._camera && (this._viewer.view.setCamera(this._camera, f.DefaultTransitionDuration), this._camera = null);
        this._isolateStatus = !1;
        a.push(this._updatePinVisibility());
        return f.Util.waitForAll(a)
    };
    e.prototype._updatePinVisibility = function() {
        this._noteTextManager.setIsolateActive(this._isolateStatus);
        return this._noteTextManager.updatePinVisibility()
    };
    return e
}();
f.IsolateZoomHelper = l
})(Communicator || (Communicator = {}));
(function(f) {
var g = function() {
        return function(e, d, a, b) {
            this.progress = this.direction = 0;
            this.id = e;
            this.color1 = d.copy();
            this.color2 = a.copy();
            this.duration = b
        }
    }(),
    l = function() {
        function e(d) {
            this._pulseInfoMap = {};
            this._defaultColor1 = Communicator.Color.red();
            this._defaultColor2 = new Communicator.Color(175, 0, 0);
            this._defaultPulseTime = 1E3;
            this._viewer = d
        }
        e.prototype.start = function() {
            var d = this;
            setTimeout(function() {
                d.update()
            }, 30)
        };
        e.prototype.deletePulse = function(d) {
            this._pulseInfoMap.hasOwnProperty(d.toString()) &&
                (this._viewer.model.unsetNodesFaceColor([d]), delete this._pulseInfoMap[d])
        };
        e.prototype.add = function(d, a, b, c) {
            this.deletePulse(d);
            a = new g(d, a, b, c);
            this._pulseInfoMap[d] = a
        };
        e.prototype.update = function() {
            null == this._previousTime && (this._previousTime = Date.now());
            for (var d = Date.now(), a = d - this._previousTime, b = {}, c = !1, h = 0, m = Object.keys(this._pulseInfoMap); h < m.length; h++) {
                var k = this._pulseInfoMap[m[h]];
                c = !0;
                k.progress = Math.min(k.progress + a, k.duration);
                var e = k.progress / k.duration;
                if (0 === k.direction) {
                    var f =
                        k.color1;
                    var g = k.color2
                } else f = k.color2, g = k.color1;
                e = new Communicator.Color(f.r + (g.r - f.r) * e, f.g + (g.g - f.g) * e, f.b + (g.b - f.b) * e);
                b[k.id] = e;
                k.progress >= k.duration && (k.direction = 0 === k.direction ? 1 : 0, k.progress = 0)
            }
            c && (this._viewer.model.setNodesColors(b), this._viewer.redraw());
            this._previousTime = d;
            this.start()
        };
        e.prototype.getDefaultColor1 = function() {
            return this._defaultColor1.copy()
        };
        e.prototype.getDefaultColor2 = function() {
            return this._defaultColor2.copy()
        };
        e.prototype.getDefaultPulseTime = function() {
            return this._defaultPulseTime
        };
        return e
    }();
f.PulseManager = l
})(Example || (Example = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c, d) {
            a = e.call(this, "rightclick", a, b, c, d) || this;
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this;
            this._viewer.setCallbacks({
                contextMenu: function(b, c) {
                    return __awaiter(a, void 0, void 0, function() {
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this._modifiers = c, [4, this.doContext(b)];
                                case 1:
                                    return a.sent(), [2]
                            }
                        })
                    })
                }
            })
        };
        d.prototype.doContext = function(a) {
            return __awaiter(this, void 0, void 0,
                function() {
                    var b, c, d;
                    return __generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return b = new f.PickConfig(f.SelectionMask.All), [4, this._viewer.view.pickFromPoint(a, b)];
                            case 1:
                                return c = h.sent(), c.isNodeSelection() && (d = this._viewer.model.getNodeType(c.getNodeId())), void 0 !== d && d !== f.NodeType.Pmi && d !== f.NodeType.PmiBody && 1 !== c.overlayIndex() ? [3, 3] : [4, this.setActiveItemId(null)];
                            case 2:
                                return h.sent(), [3, 5];
                            case 3:
                                return [4, this.setActiveItemId(c.getNodeId())];
                            case 4:
                                h.sent(), h.label = 5;
                            case 5:
                                return this._position =
                                    c.getPosition(), this.showElements(a), [2]
                        }
                    })
                })
        };
        d.prototype._onContextLayerClick = function(a) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(b) {
                    switch (b.label) {
                        case 0:
                            return 2 !== a.button ? [3, 2] : [4, this.doContext(new f.Point2(a.pageX, a.pageY))];
                        case 1:
                            return b.sent(), [3, 3];
                        case 2:
                            e.prototype._onContextLayerClick.call(this, a), b.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        };
        return d
    }(g.Context.ContextMenu);
    g.RightClickContextMenu = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function() {
        function e(d, a) {
            var b = this;
            this._bottomLeftOffset = new f.Point2(10, 10);
            this._opacity = .5;
            this._spinnerImageUrl = "css/images/spinner.gif";
            this._spinnerSize = new f.Point2(31, 31);
            this._viewer = a;
            this._container = document.getElementById(d);
            this._initContainer();
            this._viewer.setCallbacks({
                streamingActivated: function() {
                    b._onStreamingActivated()
                },
                streamingDeactivated: function() {
                    b._onStreamingDeactivated()
                },
                _shutdownBegin: function() {
                    b._onStreamingDeactivated()
                }
            })
        }
        e.prototype.show =
            function() {
                this._container.style.display = "block"
            };
        e.prototype.hide = function() {
            this._container.style.display = "none"
        };
        e.prototype.setBottomLeftOffset = function(d) {
            this._bottomLeftOffset.assign(d);
            this._container.style.left = this._bottomLeftOffset.x + "px";
            this._container.style.bottom = this._bottomLeftOffset.y + "px"
        };
        e.prototype.getBottomLeftOffset = function() {
            return this._bottomLeftOffset.copy()
        };
        e.prototype.setSpinnerImage = function(d, a) {
            this._spinnerImageUrl = d;
            this._spinnerSize.assign(a);
            this._container.style.backgroundImage =
                "url(" + this._spinnerImageUrl + ")";
            this._container.style.width = this._spinnerSize.x + "px";
            this._container.style.height = this._spinnerSize.y + '"px'
        };
        e.prototype._initContainer = function() {
            this._container.style.position = "absolute";
            this._container.style.width = this._spinnerSize.x + "px";
            this._container.style.height = this._spinnerSize.y + "px";
            this._container.style.left = this._bottomLeftOffset.x + "px";
            this._container.style.bottom = this._bottomLeftOffset.y + "px";
            this._container.style.backgroundImage = "url(" + this._spinnerImageUrl +
                ")";
            this._container.style.opacity = "" + this._opacity
        };
        e.prototype._onStreamingActivated = function() {
            this.show()
        };
        e.prototype._onStreamingDeactivated = function() {
            this.hide()
        };
        return e
    }();
    g.StreamingIndicator = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(f) {
    var g = function() {
        function e(d) {
            this._containerId = d;
            this._textDiv = e._createTextDiv();
            this._windowElement = e._createWindowElement();
            this._headerDiv = e._createHeaderDiv();
            this._initElements()
        }
        e._createWindowElement = function() {
            var d = document.createElement("div");
            d.classList.add("ui-timeout-window");
            d.classList.add("desktop-ui-window");
            return d
        };
        e._createHeaderDiv = function() {
            var d = document.createElement("div");
            d.classList.add("desktop-ui-window-header");
            return d
        };
        e._createTextDiv =
            function() {
                return document.createElement("div")
            };
        e.prototype._initElements = function() {
            var d = this,
                a = document.createElement("div");
            a.classList.add("desktop-ui-window-content");
            a.appendChild(this._textDiv);
            var b = document.createElement("div");
            b.classList.add("desktop-ui-window-divider");
            a.appendChild(b);
            b = document.createElement("button");
            b.innerHTML = "Ok";
            $(b).button().on("click", function() {
                d._onOkButtonClick()
            });
            a.appendChild(b);
            this._windowElement.appendChild(this._headerDiv);
            this._windowElement.appendChild(a);
            a = document.getElementById(this._containerId);
            null !== a && a.appendChild(this._windowElement)
        };
        e.prototype._onOkButtonClick = function() {
            this.hide()
        };
        e.prototype.show = function() {
            $(this._windowElement).show()
        };
        e.prototype.hide = function() {
            $(this._windowElement).hide()
        };
        e.prototype.setText = function(d) {
            $(this._textDiv).empty();
            this._textDiv.appendChild(document.createTextNode(d))
        };
        e.prototype.setTitle = function(d) {
            $(this._headerDiv).empty();
            this._headerDiv.appendChild(document.createTextNode(d))
        };
        return e
    }();
    f.UiDialog = g
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(f) {
    var g = function(e) {
        function d(a, b) {
            var c = e.call(this, a) || this;
            c._viewer = b;
            c._viewer.setCallbacks({
                timeoutWarning: function() {
                    c._onTimeoutWarning()
                },
                timeout: function() {
                    c._onTimeout()
                }
            });
            c.setTitle("Timeout Warning");
            return c
        }
        __extends(d, e);
        d.prototype._onTimeoutWarning = function() {
            this.setText("Your session will expire soon. Press Ok to stay connected.");
            this.show()
        };
        d.prototype._onOkButtonClick = function() {
            this._viewer.resetClientTimeout();
            e.prototype._onOkButtonClick.call(this)
        };
        d.prototype._onTimeout = function() {
            this.setText("Your session has been disconnected due to inactivity.");
            this.show()
        };
        return d
    }(f.UiDialog);
    f.TimeoutWarningDialog = g
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function() {
        function e(d, a, b) {
            var c = this;
            void 0 === b && (b = f.ScreenConfiguration.Desktop);
            this._toolbarSelector = "#toolBar";
            this._screenElementSelector = "#content";
            this._cuttingPlaneXSelector = "#cuttingplane-x";
            this._cuttingPlaneYSelector = "#cuttingplane-y";
            this._cuttingPlaneZSelector = "#cuttingplane-z";
            this._cuttingPlaneFaceSelector = "#cuttingplane-face";
            this._cuttingPlaneVisibilitySelector = "#cuttingplane-section";
            this._cuttingPlaneGroupToggle = "#cuttingplane-toggle";
            this._cuttingPlaneResetSelector =
                "#cuttingplane-reset";
            this._selectedClass = "selected";
            this._disabledClass = "disabled";
            this._invertedClass = "inverted";
            this._submenuHeightOffset = 10;
            this._viewOrientationDuration = 500;
            this._activeSubmenu = null;
            this._actionsNullary = new Map;
            this._actionsBoolean = new Map;
            this._isInitialized = !1;
            this._viewer = d;
            this._noteTextManager = this._viewer._getNoteTextManager();
            this._screenConfiguration = b;
            this._cuttingPlaneController = a;
            this._viewerSettings = new g.Desktop.ViewerSettings(d);
            this._viewer.setCallbacks({
                selectionArray: function(b) {
                    0 <
                        b.length ? (b = b[b.length - 1].getSelection(), null !== b && b.isFaceSelection() && ($(c._cuttingPlaneFaceSelector).removeClass(c._disabledClass), $("#view-face").removeClass(c._disabledClass))) : ($(c._cuttingPlaneFaceSelector).addClass(c._disabledClass), $("#view-face").addClass(c._disabledClass))
                },
                _cuttingSectionsLoaded: function() {
                    return c._cuttingPlaneController.onSectionsChanged().then(function() {
                        c._updateCuttingPlaneIcons()
                    })
                }
            })
        }
        e.prototype.init = function() {
            var d = this;
            this._isInitialized || (this._initIcons(),
                this._removeNonApplicableIcons(), $(".hoops-tool").on("click", function(a) {
                    a.preventDefault();
                    d._processButtonClick(a);
                    return !1
                }), $(".submenu-icon").on("click", function(a) {
                    a.preventDefault();
                    d._submenuIconClick(a.target);
                    return !1
                }), $(this._toolbarSelector).on("touchmove", function(a) {
                    a.originalEvent.preventDefault()
                }), $(this._toolbarSelector).on("mouseenter", function() {
                    d._mouseEnter()
                }), $(this._toolbarSelector).on("mouseleave", function() {
                    d._mouseLeave()
                }), $(".tool-icon, .submenu-icon").on("mouseenter",
                    function(a) {
                        d._mouseEnterItem(a)
                    }), $(".tool-icon, .submenu-icon").on("mouseleave", function(a) {
                    d._mouseLeaveItem(a)
                }), $(window).on("resize", function() {
                    d.reposition()
                }), $(this._toolbarSelector).on("click", function() {
                    null !== d._activeSubmenu && d._hideActiveSubmenu()
                }), $(".toolbar-cp-plane").on("click", function(a) {
                    return __awaiter(d, void 0, void 0, function() {
                        return __generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    return [4, this._cuttingPlaneButtonClick(a)];
                                case 1:
                                    return b.sent(), [2]
                            }
                        })
                    })
                }), this._viewer.setCallbacks({
                    modelSwitched: function() {
                        d._hideActiveSubmenu()
                    }
                }),
                this._initSliders(), this._initActions(), this._initSnapshot(), this.updateEdgeFaceButton(), this.reposition(), this.show(), this._isInitialized = !0)
        };
        e.prototype._getViewerSettings = function() {
            return this._viewerSettings
        };
        e.prototype.disableSubmenuItem = function(d) {
            var a = this;
            "string" === typeof d ? $("#submenus .toolbar-" + d).addClass(this._disabledClass) : "object" === typeof d && $.each(d, function(b, c) {
                $("#submenus .toolbar-" + c).addClass(a._disabledClass)
            })
        };
        e.prototype.enableSubmenuItem = function(d) {
            var a = this;
            "string" ===
            typeof d ? $("#submenus .toolbar-" + d).removeClass(this._disabledClass) : "object" === typeof d && $.each(d, function(b, c) {
                $("#submenus .toolbar-" + c).removeClass(a._disabledClass)
            })
        };
        e.prototype.setCorrespondingButtonForSubmenuItem = function(d) {
            d = $("#submenus .toolbar-" + d);
            this._activateSubmenuItem(d)
        };
        e.prototype._mouseEnterItem = function(d) {
            d = $(d.target);
            d.hasClass(this._disabledClass) || d.addClass("hover")
        };
        e.prototype._mouseLeaveItem = function(d) {
            $(d.target).removeClass("hover")
        };
        e.prototype.show = function() {
            $(this._toolbarSelector).show()
        };
        e.prototype.hide = function() {
            $(this._toolbarSelector).hide()
        };
        e.prototype._initSliders = function() {
            var d = this;
            $("#explosion-slider").slider({
                orientation: "vertical",
                min: 0,
                max: 200,
                value: 0,
                slide: function(a, b) {
                    return __awaiter(d, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._onExplosionSlider((b.value || 0) / 100)];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                }
            })
        };
        e.prototype._mouseEnter = function() {
            if (null === this._activeSubmenu) {
                var d = $(this._toolbarSelector).find(".toolbar-tools");
                d.stop();
                d.css({
                    opacity: 1
                })
            }
        };
        e.prototype._mouseLeave = function() {
            null === this._activeSubmenu && $(".toolbar-tools").animate({
                opacity: .6
            }, 500, function() {})
        };
        e.prototype.reposition = function() {
            var d = $(this._toolbarSelector),
                a = $(this._screenElementSelector);
            if (void 0 !== d && void 0 !== a) {
                a = a.width();
                var b = d.width();
                void 0 !== b && void 0 !== a && d.css({
                    left: a / 2 - b / 2 + "px",
                    bottom: "15px"
                })
            }
        };
        e.prototype._processButtonClick = function(d) {
            if (null !== this._activeSubmenu) this._hideActiveSubmenu();
            else if (null !== d) {
                d = d.target;
                var a = $(d).closest(".hoops-tool");
                a.hasClass("toolbar-radio") ? a.hasClass("active-tool") ? this._showSubmenu(d) : ($(this._toolbarSelector).find(".active-tool").removeClass("active-tool"), a.addClass("active-tool"), this._performNullaryAction(a.data("operatorclass"))) : a.hasClass("toolbar-menu") ? this._showSubmenu(d) : a.hasClass("toolbar-menu-toggle") ? this._toggleMenuTool(a) : this._performNullaryAction(a.data("operatorclass"))
            }
        };
        e.prototype._toggleMenuTool = function(d) {
            var a = $("#" + d.data("submenu"));
            a.is(":visible") ?
                (a.hide(), this._performBooleanAction(d.data("operatorclass"), !1)) : (this._alignMenuToTool(a, d), this._performBooleanAction(d.data("operatorclass"), !0))
        };
        e.prototype._startModal = function() {
            var d = this;
            $("body").append("<div id='toolbar-modal' class='toolbar-modal-overlay'></div>");
            $("#toolbar-modal").on("click", function() {
                d._hideActiveSubmenu()
            })
        };
        e.prototype._alignMenuToTool = function(d, a) {
            a = a.position().left;
            this._screenConfiguration === f.ScreenConfiguration.Mobile && (a /= 1.74);
            var b = d.width(),
                c = d.height();
            void 0 !== b && void 0 !== c && d.css({
                display: "block",
                left: a - b / 2 + 20 + "px",
                top: -(this._submenuHeightOffset + c) + "px"
            })
        };
        e.prototype._showSubmenu = function(d) {
            this._hideActiveSubmenu();
            d = $(d).closest(".hoops-tool");
            var a = d.data("submenu");
            a && (a = $(this._toolbarSelector + " #submenus #" + a), a.hasClass(this._disabledClass) || (this._alignMenuToTool(a, d), this._activeSubmenu = a[0], this._startModal(), $(this._toolbarSelector).find(".toolbar-tools").css({
                opacity: .3
            })))
        };
        e.prototype._hideActiveSubmenu = function() {
            $("#toolbar-modal").remove();
            null !== this._activeSubmenu && ($(this._activeSubmenu).hide(), $(this._toolbarSelector).find(".toolbar-tools").css({
                opacity: 1
            }));
            this._activeSubmenu = null
        };
        e.prototype._activateSubmenuItem = function(d) {
            var a = d.closest(".toolbar-submenu"),
                b = d.data("operatorclass");
            if ("string" !== typeof b) throw new f.CommunicatorError("Invalid submenuItem.");
            a = $("#" + a.data("button"));
            var c = a.find(".tool-icon");
            c.length && (c.removeClass(a.data("operatorclass").toString()), c.addClass(b), a.data("operatorclass", b), d = d.attr("title"),
                void 0 !== d && a.attr("title", d));
            return b
        };
        e.prototype._submenuIconClick = function(d) {
            d = $(d);
            d.hasClass(this._disabledClass) || (d = this._activateSubmenuItem(d), this._hideActiveSubmenu(), this._performNullaryAction(d))
        };
        e.prototype._initIcons = function() {
            $(this._toolbarSelector).find(".hoops-tool").each(function() {
                var d = $(this);
                d.find(".tool-icon").addClass(d.data("operatorclass").toString())
            });
            $(this._toolbarSelector).find(".submenu-icon").each(function() {
                var d = $(this);
                d.addClass(d.data("operatorclass").toString())
            })
        };
        e.prototype._removeNonApplicableIcons = function() {
            this._screenConfiguration === f.ScreenConfiguration.Mobile && $("#snapshot-button").remove()
        };
        e.prototype.setSubmenuEnabled = function(d, a) {
            d = $("#" + d);
            var b = $("#" + d.data("submenu"));
            a ? (d.find(".smarrow").show(), b.removeClass(this._disabledClass)) : (d.find(".smarrow").hide(), b.addClass(this._disabledClass))
        };
        e.prototype._performNullaryAction = function(d) {
            (d = this._actionsNullary.get(d)) && d()
        };
        e.prototype._performBooleanAction = function(d, a) {
            (d = this._actionsBoolean.get(d)) &&
            d(a)
        };
        e.prototype._renderModeClick = function(d) {
            var a = this._viewer.view;
            switch (d) {
                case "toolbar-shaded":
                    a.setDrawMode(f.DrawMode.Shaded);
                    break;
                case "toolbar-wireframe":
                    a.setDrawMode(f.DrawMode.Wireframe);
                    break;
                case "toolbar-hidden-line":
                    a.setDrawMode(f.DrawMode.HiddenLine);
                    break;
                case "toolbar-xray":
                    a.setDrawMode(f.DrawMode.XRay);
                    break;
                default:
                case "toolbar-wireframeshaded":
                    a.setDrawMode(f.DrawMode.WireframeOnShaded)
            }
        };
        e.prototype._initSnapshot = function() {
            $("#snapshot-dialog-cancel-button").button().on("click",
                function() {
                    $("#snapshot-dialog").hide()
                })
        };
        e.prototype._doSnapshot = function() {
            return __awaiter(this, void 0, void 0, function() {
                var d, a, b, c, h, m, k, e, g, l, n, p;
                return __generator(this, function(v) {
                    switch (v.label) {
                        case 0:
                            d = this._viewer.view.getCanvasSize();
                            a = d.x / d.y;
                            b = 480;
                            c = a * b;
                            h = $("#content");
                            m = h.width();
                            k = h.height();
                            if (void 0 === k || void 0 === m) return [3, 2];
                            b = .7 * k;
                            c = .7 * m;
                            e = c + 40;
                            g = new f.SnapshotConfig(d.x, d.y);
                            return [4, this._viewer.takeSnapshot(g)];
                        case 1:
                            l = v.sent(), n = (m - c) / 2, p = $("#snapshot-dialog"), $("#snapshot-dialog-image").attr("src",
                                l.src).attr("width", e).attr("height", b + 40), p.css({
                                top: "45px",
                                left: n + "px"
                            }), p.show(), v.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        };
        e.prototype._setRedlineOperator = function(d) {
            this._viewer.operatorManager.set(d, 1)
        };
        e.prototype._initActions = function() {
            var d = this,
                a = this._viewer.view,
                b = this._viewer.operatorManager;
            this._actionsNullary.set("toolbar-home", function() {
                d._viewer.reset();
                if (!d._viewer.isDrawingSheetActive()) {
                    d._noteTextManager.setIsolateActive(!1);
                    d._noteTextManager.updatePinVisibility();
                    var c = b.getOperator(f.OperatorId.Handle);
                    null !== c && c.removeHandles && c.removeHandles()
                }
            });
            this._actionsNullary.set("toolbar-redline-circle", function() {
                d._setRedlineOperator(f.OperatorId.RedlineCircle)
            });
            this._actionsNullary.set("toolbar-redline-freehand", function() {
                d._setRedlineOperator(f.OperatorId.RedlinePolyline)
            });
            this._actionsNullary.set("toolbar-redline-rectangle", function() {
                d._setRedlineOperator(f.OperatorId.RedlineRectangle)
            });
            this._actionsNullary.set("toolbar-redline-note", function() {
                d._setRedlineOperator(f.OperatorId.RedlineText)
            });
            this._actionsNullary.set("toolbar-note", function() {
                console.log("hhhhhhhh=====",b,f.OperatorId.Select)
                b.set(f.OperatorId.Note, 1)
            });
            this._actionsNullary.set("toolbar-select", function() {
                b.set(f.OperatorId.Select, 1)
            });
            this._actionsNullary.set("toolbar-area-select", function() {
                b.set(f.OperatorId.AreaSelect, 1)
            });
            this._actionsNullary.set("toolbar-orbit", function() {
                b.set(f.OperatorId.Navigate, 0)
            });
            this._actionsNullary.set("toolbar-turntable", function() {
                b.set(f.OperatorId.Turntable, 0)
            });
            this._actionsNullary.set("toolbar-walk", function() {
                b.set(f.OperatorId.WalkMode,
                    0)
            });
            this._actionsNullary.set("toolbar-face", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, this._orientToFace()];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-measure-point", function() {
                b.set(f.OperatorId.MeasurePointPointDistance, 1)
            });
            this._actionsNullary.set("toolbar-measure-edge", function() {
                b.set(f.OperatorId.MeasureEdgeLength, 1)
            });
            this._actionsNullary.set("toolbar-measure-distance", function() {
                b.set(f.OperatorId.MeasureFaceFaceDistance,
                    1)
            });
            this._actionsNullary.set("toolbar-measure-angle", function() {
                b.set(f.OperatorId.MeasureFaceFaceAngle, 1)
            });
            this._actionsNullary.set("toolbar-cuttingplane", function() {});
            this._actionsBoolean.set("toolbar-explode", function(c) {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this._explosionButtonClick(c)];
                            case 1:
                                return b.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-settings", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this,
                        function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._settingsButtonClick()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                })
            });
            this._actionsNullary.set("toolbar-wireframeshaded", function() {
                d._renderModeClick("toolbar-wireframeshaded")
            });
            this._actionsNullary.set("toolbar-shaded", function() {
                d._renderModeClick("toolbar-shaded")
            });
            this._actionsNullary.set("toolbar-wireframe", function() {
                d._renderModeClick("toolbar-wireframe")
            });
            this._actionsNullary.set("toolbar-hidden-line", function() {
                d._renderModeClick("toolbar-hidden-line")
            });
            this._actionsNullary.set("toolbar-xray", function() {
                d._renderModeClick("toolbar-xray")
            });
            this._actionsNullary.set("toolbar-front", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, a.setViewOrientation(f.ViewOrientation.Front, this._viewOrientationDuration)];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-back", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4,
                                    a.setViewOrientation(f.ViewOrientation.Back, this._viewOrientationDuration)
                                ];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-left", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, a.setViewOrientation(f.ViewOrientation.Left, this._viewOrientationDuration)];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-right", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this,
                        function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, a.setViewOrientation(f.ViewOrientation.Right, this._viewOrientationDuration)];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                })
            });
            this._actionsNullary.set("toolbar-bottom", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, a.setViewOrientation(f.ViewOrientation.Bottom, this._viewOrientationDuration)];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-top", function() {
                return __awaiter(d,
                    void 0, void 0,
                    function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, a.setViewOrientation(f.ViewOrientation.Top, this._viewOrientationDuration)];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
            });
            this._actionsNullary.set("toolbar-iso", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, a.setViewOrientation(f.ViewOrientation.Iso, this._viewOrientationDuration)];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            });
            this._actionsNullary.set("toolbar-ortho",
                function() {
                    a.setProjectionMode(f.Projection.Orthographic)
                });
            this._actionsNullary.set("toolbar-persp", function() {
                a.setProjectionMode(f.Projection.Perspective)
            });
            this._actionsNullary.set("toolbar-snapshot", function() {
                return __awaiter(d, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, this._doSnapshot()];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            })
        };
        e.prototype._onExplosionSlider = function(d) {
            return this._viewer.explodeManager.setMagnitude(d)
        };
        e.prototype._explosionButtonClick =
            function(d) {
                var a = this._viewer.explodeManager;
                return d && !a.getActive() ? a.start() : Promise.resolve()
            };
        e.prototype._settingsButtonClick = function() {
            return this._viewerSettings.show()
        };
        e.prototype.updateEdgeFaceButton = function() {
            var d = this._viewer.view,
                a = d.getLineVisibility();
            d = d.getFaceVisibility();
            a && d ? this.setCorrespondingButtonForSubmenuItem("wireframeshaded") : !a && d ? this.setCorrespondingButtonForSubmenuItem("shaded") : this.setCorrespondingButtonForSubmenuItem("wireframe")
        };
        e.prototype._cuttingPlaneButtonClick =
            function(d) {
                var a = this;
                d = $(d.target).closest(".toolbar-cp-plane").data("plane");
                var b = this._getAxis(d);
                return (null !== b ? this._cuttingPlaneController.toggle(b) : "section" === d ? this._cuttingPlaneController.toggleReferenceGeometry() : "toggle" === d ? this._cuttingPlaneController.toggleCuttingMode() : "reset" === d ? this._cuttingPlaneController.resetCuttingPlanes() : Promise.resolve()).then(function() {
                    a._updateCuttingPlaneIcons()
                })
            };
        e.prototype._getAxis = function(d) {
            switch (d) {
                case "x":
                    return g.AxisIndex.X;
                case "y":
                    return g.AxisIndex.Y;
                case "z":
                    return g.AxisIndex.Z;
                case "face":
                    return g.AxisIndex.FACE;
                default:
                    return null
            }
        };
        e.prototype._updateCuttingPlaneIcons = function() {
            var d = this._cuttingPlaneController.getReferenceGeometryEnabled(),
                a = this._cuttingPlaneController.getIndividualCuttingSectionEnabled(),
                b = this._cuttingPlaneController.getCount();
            this._updateCuttingPlaneIcon(g.AxisIndex.X, this._cuttingPlaneXSelector);
            this._updateCuttingPlaneIcon(g.AxisIndex.Y, this._cuttingPlaneYSelector);
            this._updateCuttingPlaneIcon(g.AxisIndex.Z, this._cuttingPlaneZSelector);
            this._updateCuttingPlaneIcon(g.AxisIndex.FACE, this._cuttingPlaneFaceSelector);
            d ? $(this._cuttingPlaneVisibilitySelector).removeClass(this._selectedClass) : $(this._cuttingPlaneVisibilitySelector).addClass(this._selectedClass);
            a ? $(this._cuttingPlaneGroupToggle).removeClass(this._selectedClass) : $(this._cuttingPlaneGroupToggle).addClass(this._selectedClass);
            0 < b ? ($(this._cuttingPlaneVisibilitySelector).removeClass(this._disabledClass), $(this._cuttingPlaneResetSelector).removeClass(this._disabledClass)) :
                ($(this._cuttingPlaneVisibilitySelector).addClass(this._disabledClass), $(this._cuttingPlaneResetSelector).addClass(this._disabledClass));
            1 < b ? $(this._cuttingPlaneGroupToggle).removeClass(this._disabledClass) : $(this._cuttingPlaneGroupToggle).addClass(this._disabledClass)
        };
        e.prototype._updateCuttingPlaneIcon = function(d, a) {
            a = $(a);
            a.removeClass(this._selectedClass);
            a.removeClass(this._invertedClass);
            d = this._cuttingPlaneController.getPlaneInfo(d);
            void 0 !== d && (1 === d.status ? a.addClass(this._selectedClass) :
                2 === d.status && a.addClass(this._invertedClass))
        };
        e.prototype._orientToFace = function() {
            var d = this._viewer.selectionManager.getLast();
            if (null !== d && d.isFaceSelection()) {
                var a = this._viewer.view,
                    b = d.getFaceEntity().getNormal(),
                    c = d.getPosition(),
                    h = a.getCamera(),
                    m = f.Point3.cross(b, new f.Point3(0, 1, 0));
                .001 > m.length() && (m = f.Point3.cross(b, new f.Point3(1, 0, 0)));
                var k = h.getPosition().subtract(h.getTarget()).length();
                h.setTarget(c);
                h.setPosition(f.Point3.add(c, f.Point3.scale(b, k)));
                h.setUp(m);
                return a.fitBounding(d.getFaceEntity().getBounding(),
                    f.DefaultTransitionDuration, h)
            }
            return Promise.resolve()
        };
        return e
    }();
    g.Toolbar = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function() {
        function e(d, a) {
            this._colorPickerId = "colorPicker";
            this._colorPickerHeaderId = "colorPickerHeader";
            this._colorPickerFooterId = "colorPickerFooter";
            this._colorPickerOkId = "colorPickerOk";
            this._colorPickerCancelId = "colorPickerCancel";
            this._colorPickerApplyId = "colorPickerApply";
            this._colorPickerInputId = "colorPickerInput";
            this._colorPickerActiveColorId = "colorPickerActiveColor";
            this._colorPickerActiveColorLabelId = "colorPickerActiveColorLabel";
            this._colorPickerActiveColorSwatchId =
                "colorPickerActiveColorSwatch";
            this._color = f.Color.black();
            this._viewer = d;
            this._colorPicker = this._createColorPickerWindow(a);
            this._initElements()
        }
        e.prototype._createColorPickerWindow = function(d) {
            var a = document.createElement("div");
            a.id = this._colorPickerId;
            a.classList.add("desktop-ui-window");
            var b = document.createElement("div");
            b.id = this._colorPickerHeaderId;
            b.classList.add("desktop-ui-window-header");
            b.innerHTML = "Color Picker";
            var c = document.createElement("div");
            c.classList.add("desktop-ui-window-content");
            var h = document.createElement("div");
            h.id = this._colorPickerActiveColorId;
            c.appendChild(h);
            var m = document.createElement("span");
            m.id = this._colorPickerActiveColorLabelId;
            m.innerHTML = "Active Color:";
            h.appendChild(m);
            m = document.createElement("span");
            m.id = this._colorPickerActiveColorSwatchId;
            m.style.backgroundColor = g.cssHexStringFromColor(this._color);
            h.appendChild(m);
            h = document.createElement("input");
            h.id = this._colorPickerInputId;
            h.type = "text";
            h.classList.add("color-picker");
            c.appendChild(h);
            m = document.createElement("div");
            m.id = this._colorPickerFooterId;
            m.classList.add("desktop-ui-window-footer");
            var k = document.createElement("button");
            k.id = this._colorPickerOkId;
            k.innerHTML = "Ok";
            m.appendChild(k);
            k = document.createElement("button");
            k.id = this._colorPickerCancelId;
            k.innerHTML = "Cancel";
            m.appendChild(k);
            k = document.createElement("button");
            k.id = this._colorPickerApplyId;
            k.innerHTML = "Apply";
            m.appendChild(k);
            a.appendChild(b);
            a.appendChild(c);
            a.appendChild(m);
            $("#" + d).append(a);
            $(h).minicolors({
                position: "bottom left",
                format: "rgb",
                control: "hue",
                defaultValue: g.rgbStringFromColor(this._color),
                inline: !0
            });
            return $(a)
        };
        e.prototype._initElements = function() {
            var d = this;
            this._colorPicker.draggable({
                handle: "#" + this._colorPickerHeaderId
            });
            $("#" + this._colorPickerOkId).on("click", function() {
                d._updateColor();
                d.hide()
            });
            $("#" + this._colorPickerCancelId).on("click", function() {
                d.hide()
            });
            $("#" + this._colorPickerApplyId).on("click", function() {
                d._updateColor()
            })
        };
        e.prototype._updateColor = function() {
            this._color.assign(g.colorFromRgbString(g.getValueAsString("#" +
                this._colorPickerInputId)));
            $("#" + this._colorPickerActiveColorSwatchId).css("background", g.cssHexStringFromColor(this._color))
        };
        e.prototype.show = function() {
            g.centerWindow(this._colorPickerId, this._viewer.view.getCanvasSize());
            this._colorPicker.show()
        };
        e.prototype.hide = function() {
            this._colorPicker.hide()
        };
        e.prototype.getColor = function() {
            return this._color.copy()
        };
        return e
    }();
    g.ColorPicker = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    (function(l) {
        var e;
        (function(a) {
            a[a.Model = 0] = "Model";
            a[a.CadView = 1] = "CadView";
            a[a.Sheets = 2] = "Sheets";
            a[a.Configurations = 3] = "Configurations";
            a[a.Layers = 4] = "Layers";
            a[a.Filters = 5] = "Filters";
            a[a.Types = 6] = "Types";
            a[a.BCF = 7] = "BCF"
        })(e = l.Tree || (l.Tree = {}));
        var d = function() {
            function a(b, c, a, d, k) {
                var h = this;
                this._treeMap = new Map;
                this._scrollTreeMap = new Map;
                this._elementIdMap = new Map;
                this._browserWindowMargin = 3;
                this._scrollRefreshTimer = new f.Internal.Timer;
                this._scrollRefreshTimestamp =
                    0;
                this._scrollRefreshInterval = 300;
                this._minimized = !0;
                this._elementId = b;
                this._containerId = c;
                this._viewer = a;
                this._isolateZoomHelper = d;
                this._colorPicker = k;
                this._canvasSize = this._viewer.view.getCanvasSize();
                this._header = this._createHeader();
                this._browserWindow = this._createBrowserWindow();
                this._createPropertyWindow();
                $(this._browserWindow).resizable({
                    resize: function(c, b) {
                        h.onResize(b.size.height)
                    },
                    minWidth: 35,
                    minHeight: 37,
                    handles: "e"
                });
                this._elementIdMap.set(e.Model, "modelTree");
                this._elementIdMap.set(e.CadView,
                    "cadViewTree");
                this._elementIdMap.set(e.Sheets, "sheetsTree");
                this._elementIdMap.set(e.Configurations, "configurationsTree");
                this._elementIdMap.set(e.Layers, "layersTree");
                this._elementIdMap.set(e.Filters, "filtersTree");
                this._elementIdMap.set(e.Types, "typesTree");
                this._elementIdMap.set(e.BCF, "bcfTree");
                this._elementIdMap.forEach(function(c, b) {
                    h._addTree(c, b)
                });
                this._contextMenu = new l.ModelBrowserContextMenu(this._containerId, this._viewer, this._treeMap, this._isolateZoomHelper, this._colorPicker);
                this._initEvents();
                this._minimizeModelBrowser()
            }
            a.prototype._initEvents = function() {
                var b = this,
                    c = function() {
                        b._showTree(e.Model);
                        return Promise.resolve()
                    };
                this._viewer.setCallbacks({
                    modelStructureLoadBegin: function() {
                        b._onModelStructureLoadBegin()
                    },
                    modelStructureParseBegin: function() {
                        b._onModelStructureParsingBegin()
                    },
                    _assemblyTreeReady: function() {
                        b._onAssemblyTreeReady();
                        return Promise.resolve()
                    },
                    _firstModelLoaded: c,
                    _modelSwitched: c,
                    frameDrawn: function() {
                        b._canvasSize = b._viewer.view.getCanvasSize();
                        b.onResize(b._canvasSize.y)
                    }
                });
                this._registerScrollRefreshCallbacks();
                $("#contextMenuButton").on("click", function(c) {
                    c = new f.Point2(c.clientX, c.clientY);
                    b._viewer.trigger("contextMenu", c, f.KeyModifiers.None)
                })
            };
            a.prototype._registerScrollRefreshCallbacks = function() {
                var b = this;
                this._treeMap.forEach(function(c) {
                    c instanceof g.ViewTree && (c.registerCallback("expand", function() {
                        b._refreshBrowserScroll()
                    }), c.registerCallback("collapse", function() {
                        b._refreshBrowserScroll()
                    }), c.registerCallback("addChild", function() {
                        b._refreshBrowserScroll()
                    }))
                })
            };
            a.prototype._refreshBrowserScroll = function() {
                var b = this,
                    c = ++this._scrollRefreshTimestamp;
                this._scrollRefreshTimer.isIdle(0) && this._scrollRefreshTimer.set(this._scrollRefreshInterval, function() {
                    b._scrollTreeMap.forEach(function(c) {
                        c.refresh()
                    });
                    c !== b._scrollRefreshTimestamp && b._refreshBrowserScroll()
                })
            };
            a.prototype._setPropertyWindowVisibility = function(b) {
                b ? this._propertyWindow.classList.remove("hidden") : this._propertyWindow.classList.add("hidden");
                this.onResize(this._viewer.view.getCanvasSize().y)
            };
            a.prototype._setTreeVisibility = function(b, c) {
                var a = b.getElementId(),
                    d = $("#" + a + "ScrollContainer");
                a = $("#" + a + "Tab");
                c ? (d.show(), a.addClass("browser-tab-selected"), b instanceof g.BCFTree ? this._setPropertyWindowVisibility(!1) : this._setPropertyWindowVisibility(!0)) : (d.hide(), a && a.removeClass("browser-tab-selected"))
            };
            a.prototype._showTree = function(b) {
                var c = this;
                this._treeMap.forEach(function(a, d) {
                    c._setTreeVisibility(a, d === b)
                });
                this._refreshBrowserScroll()
            };
            a.prototype._getContextMenu = function() {
                return this._contextMenu
            };
            a.prototype._addTree = function(b, c) {
                var a = this._initializeIScroll(b);
                this._scrollTreeMap.set(c, a);
                var d;
                c === e.Model ? d = new g.ModelTree(this._viewer, b, a) : c === e.CadView ? d = new g.CadViewTree(this._viewer, b, a) : c === e.Sheets ? d = new g.SheetsTree(this._viewer, b, a) : c === e.Configurations ? d = new g.ConfigurationsTree(this._viewer, b, a) : c === e.Layers ? d = new g.LayersTree(this._viewer, b, a) : c === e.Filters ? d = new g.FiltersTree(this._viewer, b, a) : c === e.Types ? d = new g.TypesTree(this._viewer, b, a) : c === e.BCF ? d = new g.BCFTree(this._viewer,
                    b, a) : f.Util.TypeAssertNever(c);
                this._treeMap.set(c, d)
            };
            a.prototype._createBrowserWindow = function() {
                var b = document.getElementById(this._elementId);
                $(b).on("touchmove", function(c) {
                    c.originalEvent.preventDefault()
                });
                b.classList.add("ui-modelbrowser-window");
                b.classList.add("desktop-ui-window");
                b.classList.add("ui-modelbrowser-small");
                b.style.position = "absolute";
                var c = $(window).width();
                void 0 !== c && (b.style.width = Math.max(c / 4, 400) + "px");
                b.style.top = this._browserWindowMargin + "px";
                b.style.left = this._browserWindowMargin +
                    "px";
                b.appendChild(this._header);
                return b
            };
            a.prototype._createDiv = function(b, c) {
                var a = document.createElement("div");
                a.id = b;
                for (b = 0; b < c.length; b++) a.classList.add(c[b]);
                return a
            };
            a.prototype._createHeader = function() {
                var b = this,
                    c = this._createDiv("ui-modelbrowser-header", ["ui-modelbrowser-header", "desktop-ui-window-header"]),
                    a = document.createElement("table"),
                    d = document.createElement("tr");
                a.appendChild(d);
                var k = document.createElement("td");
                k.classList.add("ui-modelbrowser-minimizetd");
                this._minimizeButton =
                    this._createDiv("ui-modelbrowser-minimizebutton", ["ui-modelbrowser-minimizebutton", "minimized"]);
                this._minimizeButton.onclick = function() {
                    b._onMinimizeButtonClick()
                };
                k.appendChild(this._minimizeButton);
                d.appendChild(k);
                k = document.createElement("td");
                k.id = "modelBrowserLabel";
                k.innerHTML = "";
                d.appendChild(k);
                k = this._createDiv("contextMenuButton", ["ui-modeltree-icon", "menu"]);
                d.appendChild(k);
                c.appendChild(a);
                this._content = this._createDiv("modelTreeContainer", ["ui-modelbrowser-content", "desktop-ui-window-content"]);
                this._content.style.overflow = "auto";
                a = this._createDiv("modelBrowserLoadingDiv", []);
                a.innerHTML = "Loading...";
                this._content.appendChild(a);
                this._createIScrollWrapper("modelTree");
                this._createIScrollWrapper("cadViewTree");
                this._createIScrollWrapper("sheetsTree");
                this._createIScrollWrapper("configurationsTree");
                this._createIScrollWrapper("layersTree");
                this._createIScrollWrapper("filtersTree");
                this._createIScrollWrapper("typesTree");
                this._createIScrollWrapper("bcfTree");
                this._modelBrowserTabs = this._createDiv("modelBrowserTabs",
                    []);
                this._createBrowserTab("modelTreeTab", "Model Tree", !0, e.Model);
                this._createBrowserTab("cadViewTreeTab", "Views", !1, e.CadView);
                this._createBrowserTab("sheetsTreeTab", "Sheets", !1, e.Sheets);
                this._createBrowserTab("configurationsTreeTab", "Configurations", !1, e.Configurations);
                this._createBrowserTab("layersTreeTab", "Layers", !1, e.Layers);
                this._createBrowserTab("filtersTreeTab", "Filters", !1, e.Filters);
                this._createBrowserTab("typesTreeTab", "Types", !1, e.Types);
                this._createBrowserTab("bcfTreeTab", "BCF", !1,
                    e.BCF);
                c.appendChild(this._modelBrowserTabs);
                return c
            };
            a.prototype._createIScrollWrapper = function(b) {
                var c = this._createDiv(b + "ScrollContainer", []);
                c.classList.add("tree-scroll-container");
                c.appendChild(this._createDiv(b, []));
                this._content.appendChild(c)
            };
            a.prototype._createBrowserTab = function(b, c, a, d) {
                var h = this,
                    m = document.createElement("label");
                m.id = b;
                m.textContent = c;
                m.classList.add("ui-modelbrowser-tab");
                m.classList.add("hidden");
                a && m.classList.add("browser-tab-selected");
                m.onclick = function(c) {
                    h._showTree(d)
                };
                this._modelBrowserTabs.appendChild(m);
                return m
            };
            a.prototype._initializeIScroll = function(b) {
                b = $("#" + b + "ScrollContainer").get(0);
                return new IScroll(b, {
                    mouseWheel: !0,
                    scrollbars: !0,
                    interactiveScrollbars: !0,
                    preventDefault: !1
                })
            };
            a.prototype._createPropertyWindow = function() {
                var b = this;
                this._propertyWindow = document.createElement("div");
                this._propertyWindow.classList.add("propertyWindow");
                this._propertyWindow.id = "propertyWindow";
                var c = document.createElement("div");
                c.id = "propertyContainer";
                this._propertyWindow.appendChild(c);
                this._treePropertyContainer = document.createElement("div");
                this._treePropertyContainer.id = "treePropertyContainer";
                this._treePropertyContainer.appendChild(this._content);
                this._treePropertyContainer.appendChild(this._propertyWindow);
                this._browserWindow.appendChild(this._treePropertyContainer);
                $(this._propertyWindow).resizable({
                    resize: function() {
                        b.onResize(b._viewer.view.getCanvasSize().y)
                    },
                    handles: "n"
                })
            };
            a.prototype._onMinimizeButtonClick = function() {
                this._minimized ? this._maximizeModelBrowser() : this._minimizeModelBrowser()
            };
            a.prototype._maximizeModelBrowser = function() {
                var b = this;
                this._minimized = !1;
                this.freeze(!1);
                var c = jQuery(this._minimizeButton);
                c.addClass("maximized");
                c.removeClass("minimized");
                jQuery(this._content).slideDown({
                    progress: function() {
                        b._onSlide();
                        $("#modelBrowserWindow").removeClass("ui-modelbrowser-small")
                    },
                    complete: function() {
                        $(b._browserWindow).children(".ui-resizable-handle").show()
                    }
                });
                this._refreshBrowserScroll()
            };
            a.prototype._minimizeModelBrowser = function() {
                var b = this;
                this._minimized = !0;
                this.freeze(!0);
                var c = jQuery(this._minimizeButton);
                c.removeClass("maximized");
                c.addClass("minimized");
                jQuery(this._content).slideUp({
                    progress: function() {
                        b._onSlide();
                        $("#modelBrowserWindow").addClass("ui-modelbrowser-small")
                    },
                    complete: function() {
                        $(b._browserWindow).children(".ui-resizable-handle").hide()
                    }
                });
                this._refreshBrowserScroll()
            };
            a.prototype.onResize = function(b) {
                var c = $(this._header).outerHeight(),
                    a = $(this._propertyWindow).outerHeight();
                void 0 !== c && void 0 !== a && (this._treePropertyContainer.style.height = b - c -
                    2 * this._browserWindowMargin + "px", c = b - c - a - 2 * this._browserWindowMargin, this._browserWindow.style.height = b - 2 * this._browserWindowMargin + "px", this._content.style.height = c + "px", this._refreshBrowserScroll())
            };
            a.prototype._onSlide = function() {
                var a = $(this._header).outerHeight(),
                    c = $(this._content).outerHeight(),
                    d = $(this._propertyWindow).outerHeight();
                void 0 !== a && void 0 !== c && void 0 !== d && (this._browserWindow.style.height = c + a + d + "px")
            };
            a.prototype._onModelStructureParsingBegin = function() {
                $("#modelBrowserLoadingDiv").html("Parsing...")
            };
            a.prototype._onModelStructureLoadBegin = function() {
                $("#" + this._elementId).show()
            };
            a.prototype._onAssemblyTreeReady = function() {
                $("#modelBrowserLoadingDiv").remove();
                this._showTree(e.Model);
                var a = $(this._elementId).height();
                if (void 0 !== a) this.onResize(a)
            };
            a.prototype.freeze = function(a) {
                this._getTree(e.Model).freezeExpansion(a)
            };
            a.prototype.enablePartSelection = function(a) {
                this._getTree(e.Model).enablePartSelection(a)
            };
            a.prototype.updateSelection = function(a) {
                this._getTree(e.Model).updateSelection(a)
            };
            a.prototype._getTree = function(a) {
                return this._treeMap.get(a)
            };
            return a
        }();
        l.ModelBrowser = d
    })(g.Desktop || (g.Desktop = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
var __assign = this && this.__assign || function() {
__assign = Object.assign || function(f) {
    for (var g, l = 1, e = arguments.length; l < e; l++) {
        g = arguments[l];
        for (var d in g) Object.prototype.hasOwnProperty.call(g, d) && (f[d] = g[d])
    }
    return f
};
return __assign.apply(this, arguments)
};
(function(f) {
(function(g) {
    (function(l) {
        var e;
        (function(a) {
            a[a.Generic = 0] = "Generic";
            a[a.Bim = 1] = "Bim";
            a[a.Drawing = 2] = "Drawing"
        })(e || (e = {}));
        var d = function() {
            function a(a, c) {
                var b = this;
                this._screenConfiguration = f.ScreenConfiguration.Desktop;
                this._modelType = null;
                this._suppressMissingModelDialog = !1;
                this._viewer = a;
                this._params = __assign({}, c);
                void 0 !== this._params.screenConfiguration && (this._screenConfiguration = this._params.screenConfiguration);
                if (void 0 !== this._params.containerId) this._colorPicker = new g.ColorPicker(this._viewer,
                    this._params.containerId);
                else throw new f.ParseError("Must supply 'containerId'.");
                this._cuttingPlaneController = new g.CuttingPlaneController(this._viewer);
                c = this._viewer.view;
                a = c.getAxisTriad();
                c = c.getNavCube();
                this._screenConfiguration === f.ScreenConfiguration.Mobile && (a.setAnchor(f.OverlayAnchor.UpperRightCorner), c.setAnchor(f.OverlayAnchor.UpperLeftCorner), $("body").addClass("mobile"));
                this._toolbar = new g.Toolbar(this._viewer, this._cuttingPlaneController, this._screenConfiguration);
                this._toolbar.init();
                (a = this._viewer.operatorManager.getOperator(f.OperatorId.Handle)) && a.setHandleSize(this._screenConfiguration === f.ScreenConfiguration.Mobile ? 3 : 1);
                a = document.getElementById("content");
                a.oncontextmenu = function() {
                    return !1
                };
                this._isolateZoomHelper = new f.IsolateZoomHelper(this._viewer);
                c = document.createElement("div");
                c.id = "modelBrowserWindow";
                a.appendChild(c);
                this._modelBrowser = new l.ModelBrowser(c.id, a.id, this._viewer, this._isolateZoomHelper, this._colorPicker);
                new l.PropertyWindow(this._viewer);
                c = document.createElement("div");
                c.id = "streamingIndicator";
                a.appendChild(c);
                this._viewer.getRendererType() === f.RendererType.Client && new g.StreamingIndicator(c.id, this._viewer);
                this._contextMenu = new g.RightClickContextMenu(a.id, this._viewer, this._isolateZoomHelper, this._colorPicker);
                new g.TimeoutWarningDialog(a.id, this._viewer);
                this._viewer.setCallbacks({
                    sceneReady: function() {
                        b._onSceneReady()
                    },
                    _modelStructureHeaderParsed: function() {
                        return __awaiter(b, void 0, void 0, function() {
                            return __generator(this, function(c) {
                                this._updateDrawingsUi();
                                return [2]
                            })
                        })
                    },
                    sheetActivated: function() {
                        b._modelType !== e.Drawing && b._updateDrawingsUi()
                    },
                    sheetDeactivated: function() {
                        b._updateDrawingsUi()
                    },
                    modelLoadFailure: function(c, a) {
                        if (!b._suppressMissingModelDialog) {
                            var d = new g.UiDialog("content");
                            d.setTitle("Model Load Error");
                            var h = "Unable to load ";
                            d.setText((c ? h + ("'" + c + "'") : h + "model") + (": " + a));
                            d.show()
                        }
                    },
                    modelLoadBegin: function() {
                        b._suppressMissingModelDialog = !1
                    },
                    missingModel: function(c) {
                        if (!b._suppressMissingModelDialog) {
                            b._suppressMissingModelDialog = !0;
                            var a = new g.UiDialog("content");
                            a.setTitle("Missing Model Error");
                            a.setText("Unable to load '" + (c + "'"));
                            a.show()
                        }
                    },
                    incrementalSelectionBatchBegin: function() {
                        b.freezeModelBrowser(!0);
                        b.enableModelBrowserPartSelection(!1)
                    },
                    incrementalSelectionBatchEnd: function() {
                        b.freezeModelBrowser(!1);
                        b.enableModelBrowserPartSelection(!0)
                    },
                    incrementalSelectionEnd: function() {
                        b._modelBrowser.updateSelection(null)
                    },
                    webGlContextLost: function() {
                        var c = new g.UiDialog("content");
                        c.setTitle("Fatal Error");
                        c.setText("WebGL context lost. Rendering cannot continue.");
                        c.show()
                    },
                    XHRonloadend: function(c, a, b) {
                        404 === a && (c = new g.UiDialog("content"), c.setTitle("404 Error"), c.setText("Unable to load " + b), c.show())
                    },
                    modelSwitched: function() {
                        b._modelType = null;
                        b._updateDrawingsUi()
                    }
                })
            }
            a.prototype._updateDrawingsUi = function() {
                var a = this._viewer.view,
                    c = this._viewer.model,
                    d = a.getAxisTriad(),
                    m = a.getNavCube();
                if (this._viewer.isDrawingSheetActive()) this._modelType !== e.Drawing && (this._modelType = e.Drawing, $("#cuttingplane-button").hide(), $("#cuttingplane-submenu").hide(), $("#explode-button").hide(),
                    $("#explode-slider").hide(), $("#explode-submenu").hide(), $("#view-button").hide(), $("#view-submenu").hide(), $("#camera-button").hide(), $("#camera-submenu").hide(), $("#tool_separator_4").hide(), $("#tool_separator_1").hide(), $("#edgeface-button").hide(), $("#edgeface-submenu").hide(), this._toolbar.reposition(), $(".ui-modeltree").addClass("drawing"), d.disable(), m.disable(), this._viewer.view.setDrawMode(f.DrawMode.WireframeOnShaded));
                else if (null === this._modelType || this._modelType === e.Drawing) {
                    c = c._firstAssemblyDataHeader();
                    if (null === c) this._modelType = e.Generic;
                    else switch (c.originalFileType) {
                        case f.FileType.Ifc:
                        case f.FileType.Revit:
                            this._modelType = e.Bim;
                            a.setBackfacesVisible(!0);
                            break;
                        default:
                            this._modelType = e.Generic, m.enable()
                    }
                    $("#cuttingplane-button").show();
                    $("#explode-button").show();
                    $("#view-button").show();
                    $("#camera-button").show();
                    $("#tool_separator_4").show();
                    $("#tool_separator_1").show();
                    $("#edgeface-button").show();
                    this._toolbar.reposition();
                    $(".ui-modeltree").removeClass("drawing");
                    d.enable()
                }
            };
            a.prototype._onSceneReady =
                function() {
                    var b = this;
                    this._viewer.focusInput(!0);
                    var c = this._viewer.selectionManager;
                    c.setNodeSelectionColor(a._defaultPartSelectionColor);
                    c.setNodeSelectionOutlineColor(a._defaultPartSelectionOutlineColor);
                    c = this._viewer.view;
                    c.setXRayColor(f.ElementType.Faces, a._defaultXRayColor);
                    c.setXRayColor(f.ElementType.Lines, a._defaultXRayColor);
                    c.setXRayColor(f.ElementType.Points, a._defaultXRayColor);
                    c.setBackgroundColor(a._defaultBackgroundColor, a._defaultBackgroundColor);
                    this._viewer.getViewElement().addEventListener("mouseenter",
                        function() {
                            b._viewer.focusInput(!0)
                        })
                };
            a.prototype.setDeselectOnIsolate = function(a) {
                this._isolateZoomHelper.setDeselectOnIsolate(a)
            };
            a.prototype.freezeModelBrowser = function(a) {
                this._modelBrowser.freeze(a)
            };
            a.prototype.enableModelBrowserPartSelection = function(a) {
                this._modelBrowser.enablePartSelection(a)
            };
            a.prototype._getContextMenu = function() {
                return this._contextMenu
            };
            a.prototype._getModelBrowser = function() {
                return this._modelBrowser
            };
            a.prototype._getToolbar = function() {
                return this._toolbar
            };
            a._defaultBackgroundColor =
                f.Color.white();
            a._defaultPartSelectionColor = f.Color.createFromFloat(0, .8, 0);
            a._defaultPartSelectionOutlineColor = f.Color.createFromFloat(0, .8, 0);
            a._defaultXRayColor = f.Color.createFromFloat(0, .9, 0);
            return a
        }();
        l.DesktopUi = d
    })(g.Desktop || (g.Desktop = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    (function(l) {
        var e = function(d) {
            function a(a, c, h, m, k) {
                a = d.call(this, "modelbrowser", a, c, m, k) || this;
                a._treeMap = h;
                a._initEvents();
                return a
            }
            __extends(a, d);
            a.prototype._initEvents = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var a, c = this;
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this._registerContextMenuCallback(l.Tree.Model)];
                            case 1:
                                return b.sent(), [4, this._registerContextMenuCallback(l.Tree.Layers)];
                            case 2:
                                return b.sent(), [4, this._registerContextMenuCallback(l.Tree.Types)];
                            case 3:
                                return b.sent(), this._viewer.getStreamingMode() === f.StreamingMode.OnDemand && (a = function() {
                                    return __awaiter(c, void 0, void 0, function() {
                                        return __generator(this, function(c) {
                                            switch (c.label) {
                                                case 0:
                                                    return [4, this._viewer.model.requestNodes(this.getContextItemIds(!1, !0))];
                                                case 1:
                                                    return c.sent(), [2]
                                            }
                                        })
                                    })
                                }, this.appendSeparator(), this.appendItem("request", "Request", a)), [2]
                        }
                    })
                })
            };
            a.prototype._registerContextMenuCallback = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var c, b = this;
                    return __generator(this,
                        function(d) {
                            c = this._treeMap.get(a);
                            void 0 !== c && c instanceof g.ViewTree && c.registerCallback("context", function(c, a) {
                                return __awaiter(b, void 0, void 0, function() {
                                    return __generator(this, function(b) {
                                        switch (b.label) {
                                            case 0:
                                                return [4, this._onTreeContext(c, a)];
                                            case 1:
                                                return b.sent(), [2]
                                        }
                                    })
                                })
                            });
                            return [2]
                        })
                })
            };
            a.prototype._onTreeContext = function(a, c) {
                return __awaiter(this, void 0, void 0, function() {
                    var b, d, k;
                    return __generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                b = a.split(g.ModelTree.separator);
                                d = b[0];
                                switch (d) {
                                    case "layer":
                                        return [3,
                                            1
                                        ];
                                    case "types":
                                        return [3, 3];
                                    case "typespart":
                                        return [3, 5];
                                    case "layerpart":
                                        return [3, 5];
                                    case "part":
                                        return [3, 5]
                                }
                                return [3, 7];
                            case 1:
                                return [4, this.setActiveLayerName(a)];
                            case 2:
                                return h.sent(), [3, 8];
                            case 3:
                                return [4, this.setActiveType(b[1])];
                            case 4:
                                return h.sent(), [3, 8];
                            case 5:
                                return k = parseInt(b[1], 10), [4, this.setActiveItemId(k)];
                            case 6:
                                return h.sent(), [3, 8];
                            case 7:
                                return [2];
                            case 8:
                                return this._position = null, this.showElements(c), [2]
                        }
                    })
                })
            };
            a.prototype._onContextLayerClick = function(a) {
                this.hide()
            };
            return a
        }(g.Context.ContextMenu);
        l.ModelBrowserContextMenu = e
    })(g.Desktop || (g.Desktop = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(f) {
    (function(f) {
        function e(a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }
        var d = function() {
            function a(a) {
                var c = this;
                this._incrementalSelectionActive = this._assemblyTreeReadyOccurred = !1;
                this._viewer = a;
                this._propertyWindow = $("#propertyContainer");
                a = function() {
                    c._update();
                    return Promise.resolve()
                };
                this._viewer.setCallbacks({
                    _assemblyTreeReady: function() {
                        c._onModelStructureReady();
                        return Promise.resolve()
                    },
                    _firstModelLoaded: a,
                    modelSwitched: a,
                    selectionArray: function(a) {
                        return __awaiter(c, void 0, void 0, function() {
                            return __generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return 0 < a.length ? [4, this._onPartSelection(a[a.length - 1])] : [3, 2];
                                    case 1:
                                        c.sent(), c.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    },
                    incrementalSelectionBatchBegin: function() {
                        c._incrementalSelectionActive = !0
                    },
                    incrementalSelectionBatchEnd: function() {
                        c._incrementalSelectionActive = !1
                    }
                })
            }
            a.prototype._update = function(a) {
                void 0 === a && (a = "&lt;no properties to display&gt;");
                this._propertyWindow.html(a)
            };
            a.prototype._onModelStructureReady = function() {
                this._assemblyTreeReadyOccurred = !0;
                this._update()
            };
            a.prototype._createRow = function(a, c, d) {
                void 0 === d && (d = "");
                var b = document.createElement("tr");
                b.id = "propertyTableRow_" + a + "_" + c;
                0 < d.length && b.classList.add(d);
                d = document.createElement("td");
                d.id = "propertyDiv_" + a;
                d.innerHTML = a;
                a = document.createElement("td");
                a.id = "propertyDiv_" + c;
                a.innerHTML = c;
                b.appendChild(d);
                b.appendChild(a);
                return b
            };
            a.prototype._onPartSelection = function(a) {
                return __awaiter(this, void 0,
                    void 0,
                    function() {
                        var c, b, d, k, f, g, l, n, p, r, t, u, x, y, z, w, C;
                        return __generator(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (!this._assemblyTreeReadyOccurred || this._incrementalSelectionActive) return [2];
                                    this._update();
                                    c = this._viewer.model;
                                    b = a.getSelection().getNodeId();
                                    if (null === b || !c.isNodeLoaded(b)) return [2];
                                    d = c.getNodeName(b);
                                    f = k = null;
                                    return [4, c.getNodeProperties(b)];
                                case 1:
                                    g = h.sent();
                                    l = [];
                                    if (null !== g && (l = Object.keys(g), 0 < l.length))
                                        for (k = document.createElement("table"), k.id = "propertyTable", k.appendChild(this._createRow("Property",
                                                "Value", "headerRow")), k.appendChild(this._createRow("Name", null !== d ? d : "unnamed")), n = 0, p = l; n < p.length; n++) r = p[n], t = e(r), u = e(g[r]), k.appendChild(this._createRow(t, u));
                                    x = c.getNodeUserDataIndices(b);
                                    if (0 < x.length)
                                        for (f = document.createElement("table"), f.id = "propertyTable", f.appendChild(this._createRow("User Data Index", "User Data Size", "headerRow")), y = 0, z = x; y < z.length; y++) w = z[y], C = c.getNodeUserData(b, w), t = "number" === typeof w ? "0x" + w.toString(16).toUpperCase() : "0x" + w, u = "" + C.length, f.appendChild(this._createRow(t,
                                            u));
                                    if (null === k && null === f) return [2];
                                    this._update("");
                                    null !== k && this._propertyWindow.append(k);
                                    null !== f && this._propertyWindow.append(f);
                                    return [2]
                            }
                        })
                    })
            };
            return a
        }();
        f.PropertyWindow = d
    })(f.Desktop || (f.Desktop = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    g.colorFromRgbString = function(g) {
        g = g.replace(/[^\d,]/g, "").split(",");
        return new f.Color(Number(g[0]), Number(g[1]), Number(g[2]))
    };
    g.rgbStringFromColor = function(f) {
        return f ? "rgb(" + Math.round(f.r) + "," + Math.round(f.g) + "," + Math.round(f.b) + ")" : ""
    };
    g.cssHexStringFromColor = function(f) {
        var e = function(d) {
            d = d.toString(16);
            return 1 === d.length ? "0" + d : d
        };
        return "#" + e(f.r) + e(f.g) + e(f.b)
    };
    g.getValueAsString = function(f) {
        f = $(f).val();
        return "string" === typeof f ? f : ""
    };
    g.centerWindow = function(f,
        e) {
        f = $("#" + f);
        var d = f.width(),
            a = f.height();
        void 0 !== d && void 0 !== a && f.css({
            left: (e.x - d) / 2 + "px",
            top: (e.y - a) / 2 + "px"
        })
    }
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    (function(l) {
        var e;
        (function(a) {
            a[a.General = 0] = "General";
            a[a.Walk = 1] = "Walk";
            a[a.Drawing = 2] = "Drawing"
        })(e = l.SettingTab || (l.SettingTab = {}));
        var d = function() {
            function a(a) {
                this._versionInfo = !0;
                this._splatRenderingEnabled = !1;
                this._splatRenderingSize = .003;
                this._splatRenderingPointSizeUnit = f.PointSizeUnit.ProportionOfBoundingDiagonal;
                this._honorSceneVisibility = !0;
                this._walkSpeedUnits = 1;
                this._generalTabLabelId = "#settings-tab-label-general";
                this._walkTabLabelId = "#settings-tab-label-walk";
                this._drawingTabLabelId = "#settings-tab-label-drawing";
                this._generalTabId = "#settings-tab-general";
                this._walkTabId = "#settings-tab-walk";
                this._drawingTabId = "#settings-tab-drawing";
                this._walkKeyIdsMap = new Map;
                this._viewer = a;
                a = this._viewer.view;
                this._navCube = a.getNavCube();
                this._axisTriad = a.getAxisTriad();
                this._viewerSettingsSelector = "viewer-settings-dialog";
                this._initElements()
            }
            a.prototype.show = function() {
                var a = this._updateSettings();
                document.body.classList.contains("mobile") && this._scaleForMobile();
                g.centerWindow(this._viewerSettingsSelector, this._viewer.view.getCanvasSize());
                $("#" + this._viewerSettingsSelector).show();
                return a
            };
            a.prototype.hide = function() {
                $("#" + this._viewerSettingsSelector).hide()
            };
            a.prototype._scaleForMobile = function() {
                var a = $("#" + this._viewerSettingsSelector),
                    c = $("#" + this._viewerSettingsSelector + " .hoops-ui-window-body"),
                    d = this._viewer.view.getCanvasSize(),
                    m = a.width();
                void 0 !== m && 1.8 * m > d.x && c.css("width", d.x / 1.8);
                m = a.height();
                if (void 0 !== m && 1.8 * m > d.y) {
                    a.show();
                    m = $("#" + this._viewerSettingsSelector +
                        " .hoops-ui-window-header").get(0).offsetHeight;
                    var k = $("#" + this._viewerSettingsSelector + " .hoops-ui-window-footer").get(0).offsetHeight;
                    a.hide();
                    c.css("height", d.y / 1.8 - 1.4 * (m + k))
                }
            };
            a.prototype._initElements = function() {
                var a = this;
                this._walkKeyIdsMap.set(f.WalkDirection.Up, "walk-key-up");
                this._walkKeyIdsMap.set(f.WalkDirection.Down, "walk-key-down");
                this._walkKeyIdsMap.set(f.WalkDirection.Left, "walk-key-left");
                this._walkKeyIdsMap.set(f.WalkDirection.Right, "walk-key-right");
                this._walkKeyIdsMap.set(f.WalkDirection.Forward,
                    "walk-key-forward");
                this._walkKeyIdsMap.set(f.WalkDirection.Backward, "walk-key-backward");
                this._walkKeyIdsMap.set(f.WalkDirection.TiltUp, "walk-key-tilt-up");
                this._walkKeyIdsMap.set(f.WalkDirection.TiltDown, "walk-key-tilt-down");
                this._walkKeyIdsMap.set(f.WalkDirection.RotateLeft, "walk-key-rotate-left");
                this._walkKeyIdsMap.set(f.WalkDirection.RotateRight, "walk-key-rotate-right");
                $("#viewer-settings-dialog").draggable({
                    handle: ".hoops-ui-window-header"
                });
                $("INPUT.color-picker").each(function() {
                    $(this).minicolors({
                        position: $(this).attr("data-position") ||
                            "bottom left",
                        format: "rgb",
                        control: "hue"
                    })
                });
                $("#viewer-settings-ok-button").on("click", function() {
                    a._applySettings();
                    a.hide()
                });
                $("#viewer-settings-cancel-button").on("click", function() {
                    a.hide()
                });
                $("#viewer-settings-apply-button").on("click", function() {
                    return __awaiter(a, void 0, void 0, function() {
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return [4, this._applySettings()];
                                case 1:
                                    return c.sent(), [2]
                            }
                        })
                    })
                });
                $("#settings-pmi-enabled").on("click", function() {
                    a._updateEnabledStyle("settings-pmi-enabled",
                        ["settings-pmi-color-style"], ["settings-pmi-color"], $("#settings-pmi-enabled").prop("checked"))
                });
                $("#settings-splat-rendering-enabled").on("click", function() {
                    a._updateEnabledStyle("settings-splat-rendering-enabled", ["settings-splat-enabled-style"], ["settings-splat-rendering-size", "settings-splat-rendering-point-size-unit"], $("#settings-splat-rendering-enabled").prop("checked"))
                });
                $("#settings-mouse-look-enabled").on("click", function() {
                    a._updateEnabledStyle("settings-mouse-look-enabled", ["settings-mouse-look-style"],
                        ["settings-mouse-look-speed"], $("#settings-mouse-look-enabled").prop("checked"))
                });
                $("#settings-bim-mode-enabled").on("click", function() {
                    a._updateEnabledStyle("settings-bim-mode-enabled", [], [], $("#settings-bim-mode-enabled").prop("checked"))
                });
                $("#settings-bloom-enabled").on("click", function() {
                    a._updateEnabledStyle("settings-bloom-enabled", ["settings-bloom-style"], ["settings-bloom-intensity", "settings-bloom-threshold"], $("#settings-bloom-enabled").prop("checked"))
                });
                $("#settings-shadow-enabled").on("click",
                    function() {
                        a._updateEnabledStyle("settings-shadow-enabled", ["settings-shadow-style"], ["settings-shadow-blur-samples", "settings-shadow-interactive"], $("#settings-shadow-enabled").prop("checked"))
                    });
                $("#settings-silhouette-enabled").on("click", function() {
                    a._updateEnabledStyle("settings-silhouette-enabled", [], [], $("#settings-silhouette-enabled").prop("checked"))
                });
                this._viewer.setCallbacks({
                    _firstModelLoaded: function() {
                        return __awaiter(a, void 0, void 0, function() {
                            var c, a, b;
                            return __generator(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        return c =
                                            this._viewer.operatorManager, a = c.getOperator(f.OperatorId.KeyboardWalk), b = a.getWalkSpeed(), 0 >= b ? [4, a.resetDefaultWalkSpeeds()] : [3, 2];
                                    case 1:
                                        d.sent(), this._updateWalkSettingsHelper(), d.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    },
                    _resetAssemblyTreeBegin: function() {
                        return __awaiter(a, void 0, void 0, function() {
                            return __generator(this, function(c) {
                                this._honorSceneVisibility = !0;
                                return [2]
                            })
                        })
                    }
                });
                $("#settings-walk-mode").on("change", function() {
                    var c = parseInt(g.getValueAsString("#settings-walk-mode"), 10);
                    a._updateKeyboardWalkModeStyle(c)
                });
                $(this._generalTabLabelId).on("click", function() {
                    a._switchTab(e.General)
                });
                $(this._walkTabLabelId).on("click", function() {
                    a._switchTab(e.Walk)
                });
                $(this._drawingTabLabelId).on("click", function() {
                    a._switchTab(e.Drawing)
                })
            };
            a.prototype._switchTab = function(a) {
                var c = $(this._generalTabLabelId),
                    b = $(this._walkTabLabelId),
                    d = $(this._drawingTabLabelId),
                    k = $(this._generalTabId),
                    f = $(this._walkTabId),
                    g = $(this._drawingTabId);
                c.removeClass("selected");
                k.removeClass("selected");
                f.removeClass("selected");
                b.removeClass("selected");
                g.removeClass("selected");
                d.removeClass("selected");
                switch (a) {
                    case e.General:
                        c.addClass("selected");
                        k.addClass("selected");
                        break;
                    case e.Walk:
                        f.addClass("selected");
                        b.addClass("selected");
                        break;
                    case e.Drawing:
                        g.addClass("selected"), d.addClass("selected")
                }
            };
            a.prototype._updateSettings = function() {
                var a = this,
                    c = this._viewer.view,
                    d = this._viewer.model,
                    m = this._viewer.selectionManager,
                    k = this._viewer.cuttingManager,
                    e = this._viewer.measureManager,
                    l = this._viewer.operatorManager;
                this._versionInfo && ($("#settings-format-version").html(this._viewer.getFormatVersionString()),
                    $("#settings-viewer-version").html(this._viewer.getViewerVersionString()), this._versionInfo = !1);
                var q = c.getBackgroundColor();
                var n = null === q.top ? g.colorFromRgbString("rgb(192,220,248)") : q.top;
                q = null === q.bottom ? g.colorFromRgbString("rgb(192,220,248)") : q.bottom;
                var p = m.getNodeSelectionColor(),
                    r = m.getNodeElementSelectionColor();
                e = e.getMeasurementColor();
                var t = c.getProjectionMode(),
                    u = c.getBackfacesVisible(),
                    x = c.getHiddenLineSettings().getObscuredLineOpacity(),
                    y = k.getCappingGeometryVisibility();
                m = m.getHighlightFaceElementSelection() &&
                    m.getHighlightLineElementSelection();
                var z = k.getCappingFaceColor();
                k = k.getCappingLineColor();
                var w = c.getAmbientOcclusionEnabled(),
                    C = c.getAmbientOcclusionRadius(),
                    D = c.getAntiAliasingMode() === f.AntiAliasingMode.SMAA,
                    E = c.getBloomEnabled(),
                    F = c.getBloomIntensityScale(),
                    G = c.getBloomThreshold(),
                    H = c.getSilhouetteEnabled(),
                    I = c.getSimpleReflectionEnabled(),
                    J = c.getSimpleShadowEnabled(),
                    K = c.getSimpleShadowInteractiveUpdateEnabled(),
                    L = c.getSimpleShadowBlurSamples(),
                    M = d.getPmiColor();
                d = d.getPmiColorOverride();
                l = l.getOperator(f.OperatorId.Orbit).getOrbitFallbackMode() === f.OrbitFallbackMode.CameraTarget ? !0 : !1;
                var N = this._axisTriad.getEnabled(),
                    O = this._navCube.getEnabled(),
                    A = [];
                A.push(this._updateWalkSettings());
                this._updateDrawingSettings();
                $("#settings-selection-color-body").minicolors("value", g.rgbStringFromColor(p));
                $("#settings-selection-color-face-line").minicolors("value", g.rgbStringFromColor(r));
                $("#settings-background-top").minicolors("value", g.rgbStringFromColor(n));
                $("#settings-background-bottom").minicolors("value",
                    g.rgbStringFromColor(q));
                $("#settings-measurement-color").minicolors("value", g.rgbStringFromColor(e));
                $("#settings-capping-face-color").minicolors("value", g.rgbStringFromColor(z));
                $("#settings-capping-line-color").minicolors("value", g.rgbStringFromColor(k));
                $("#settings-projection-mode").val("" + t);
                $("#settings-show-backfaces").prop("checked", u);
                $("#settings-show-capping-geometry").prop("checked", y);
                $("#settings-enable-face-line-selection").prop("checked", m);
                $("#settings-orbit-mode").prop("checked",
                    l);
                $("#settings-select-scene-invisible").prop("checked", this._honorSceneVisibility);
                $("#settings-ambient-occlusion").prop("checked", w);
                $("#settings-ambient-occlusion-radius").val("" + C);
                $("#settings-anti-aliasing").prop("checked", D);
                $("#settings-bloom-intensity").val("" + F);
                $("#settings-bloom-threshold").val("" + G);
                $("#settings-axis-triad").prop("checked", N);
                $("#settings-nav-cube").prop("checked", O);
                $("#settings-silhouette-enabled").prop("checked", H);
                $("#settings-reflection-enabled").prop("checked",
                    I);
                $("#settings-shadow-interactive").prop("checked", K);
                $("#settings-shadow-blur-samples").val(L);
                $("#settings-pmi-color").minicolors("value", g.rgbStringFromColor(M));
                d !== $("#settings-pmi-enabled").prop("checked") && $("#settings-pmi-enabled").trigger("click");
                A.push(this._viewer.getMinimumFramerate().then(function(c) {
                    $("#settings-framerate").val("" + c)
                }));
                void 0 !== x ? $("#settings-hidden-line-opacity").val("" + x) : $("#settings-hidden-line-opacity").val("");
                E !== $("#settings-bloom-enabled").prop("checked") &&
                    $("#settings-bloom-enabled").trigger("click");
                J !== $("#settings-shadow-enabled").prop("checked") && $("#settings-shadow-enabled").trigger("click");
                A.push(c.getPointSize().then(function(c) {
                    var b = c[0];
                    c = c[1];
                    a._splatRenderingEnabled = 1 !== b || c !== f.PointSizeUnit.ScreenPixels;
                    a._splatRenderingEnabled !== $("#settings-splat-rendering-enabled").prop("checked") && $("#settings-splat-rendering-enabled").trigger("click");
                    a._splatRenderingEnabled && (a._splatRenderingSize = b, a._splatRenderingPointSizeUnit = c);
                    b = $("#settings-splat-rendering-size");
                    Number(b.prop("step")) > a._splatRenderingSize && b.prop("step", "" + a._splatRenderingSize / 3);
                    b.val("" + a._splatRenderingSize);
                    $("#settings-splat-rendering-point-size-unit").val("" + a._splatRenderingPointSizeUnit)
                }));
                A.push(c.getEyeDomeLightingEnabled().then(function(c) {
                    $("#settings-eye-dome-lighting-enabled").prop("checked", c)
                }));
                return f.Util.waitForAll(A)
            };
            a.prototype._applySettings = function() {
                var a = [],
                    c = this._viewer.view,
                    d = this._viewer.model,
                    m = this._viewer.cuttingManager,
                    k = this._viewer.selectionManager;
                a.push(this._applyWalkSettings());
                var e = g.colorFromRgbString(g.getValueAsString("#settings-background-top")),
                    l = g.colorFromRgbString(g.getValueAsString("#settings-background-bottom"));
                this._viewer.view.setBackgroundColor(e, l);
                e = g.colorFromRgbString(g.getValueAsString("#settings-selection-color-body"));
                k.setNodeSelectionColor(e);
                k.setNodeSelectionOutlineColor(e);
                e = g.colorFromRgbString(g.getValueAsString("#settings-selection-color-face-line"));
                k.setNodeElementSelectionColor(e);
                k.setNodeElementSelectionOutlineColor(e);
                e = $("#settings-enable-face-line-selection").prop("checked");
                k.setHighlightFaceElementSelection(e);
                k.setHighlightLineElementSelection(e);
                this._viewer.measureManager.setMeasurementColor(g.colorFromRgbString(g.getValueAsString("#settings-measurement-color")));
                k = g.colorFromRgbString(g.getValueAsString("#settings-pmi-color"));
                e = $("#settings-pmi-enabled").prop("checked");
                k && e ? (d.setPmiColor(k), d.setPmiColorOverride(!0)) : d.setPmiColorOverride(!1);
                a.push(m.setCappingFaceColor(g.colorFromRgbString(g.getValueAsString("#settings-capping-face-color"))));
                a.push(m.setCappingLineColor(g.colorFromRgbString(g.getValueAsString("#settings-capping-line-color"))));
                c.setProjectionMode(parseInt(g.getValueAsString("#settings-projection-mode"), 10));
                d = $("#settings-show-backfaces").prop("checked");
                c.setBackfacesVisible(d);
                d = $("#settings-show-capping-geometry").prop("checked");
                a.push(m.setCappingGeometryVisibility(d));
                (m = parseInt(g.getValueAsString("#settings-framerate"), 10)) && 0 < m && this._viewer.setMinimumFramerate(m);
                m = parseFloat(g.getValueAsString("#settings-hidden-line-opacity"));
                c.getHiddenLineSettings().setObscuredLineOpacity(m);
                c.getDrawMode() === f.DrawMode.HiddenLine && c.setDrawMode(f.DrawMode.HiddenLine);
                m = this._viewer.operatorManager.getOperator(f.OperatorId.Orbit);
                d = $("#settings-orbit-mode").prop("checked");
                m.setOrbitFallbackMode(d ? f.OrbitFallbackMode.CameraTarget : f.OrbitFallbackMode.ModelCenter);
                m = (this._honorSceneVisibility = $("#settings-select-scene-invisible").prop("checked")) ? f.SelectionMask.None : f.SelectionMask.All;
                this._viewer.operatorManager.getOperator(f.OperatorId.Select).setForceEffectiveSceneVisibilityMask(m);
                this._viewer.operatorManager.getOperator(f.OperatorId.AreaSelect).setForceEffectiveSceneVisibilityMask(m);
                this._viewer.operatorManager.getOperator(f.OperatorId.RayDrillSelect).setForceEffectiveSceneVisibilityMask(m);
                c.setAmbientOcclusionEnabled($("#settings-ambient-occlusion").prop("checked"));
                c.setAmbientOcclusionRadius(parseFloat(g.getValueAsString("#settings-ambient-occlusion-radius")));
                $("#settings-anti-aliasing").prop("checked") ? c.setAntiAliasingMode(f.AntiAliasingMode.SMAA) : c.setAntiAliasingMode(f.AntiAliasingMode.None);
                c.setBloomEnabled($("#settings-bloom-enabled").prop("checked"));
                c.setBloomIntensityScale(parseFloat(g.getValueAsString("#settings-bloom-intensity")));
                c.setBloomThreshold(parseFloat(g.getValueAsString("#settings-bloom-threshold")));
                c.setSilhouetteEnabled($("#settings-silhouette-enabled").prop("checked"));
                c.setSimpleReflectionEnabled($("#settings-reflection-enabled").prop("checked"));
                c.setSimpleShadowEnabled($("#settings-shadow-enabled").prop("checked"));
                c.setSimpleShadowInteractiveUpdateEnabled($("#settings-shadow-interactive").prop("checked"));
                c.setSimpleShadowBlurSamples(parseInt(g.getValueAsString("#settings-shadow-blur-samples"), 10));
                $("#settings-axis-triad").prop("checked") ? this._axisTriad.enable() : this._axisTriad.disable();
                $("#settings-nav-cube").prop("checked") ? this._navCube.enable() : this._navCube.disable();
                $("#settings-splat-rendering-enabled").prop("checked") ? (this._splatRenderingEnabled = !0, this._splatRenderingSize = parseFloat(g.getValueAsString("#settings-splat-rendering-size")), this._splatRenderingPointSizeUnit = parseInt(g.getValueAsString("#settings-splat-rendering-point-size-unit"),
                    10), c.setPointSize(this._splatRenderingSize, this._splatRenderingPointSizeUnit)) : (this._splatRenderingEnabled = !1, c.setPointSize(1, f.PointSizeUnit.ScreenPixels));
                c.setEyeDomeLightingEnabled($("#settings-eye-dome-lighting-enabled").prop("checked"));
                a.push(this._applyDrawingSettings());
                return f.Util.waitForAll(a)
            };
            a.prototype._applyWalkKeyText = function(a, c) {
                c < f.KeyCode.a || c > f.KeyCode.z || (a = this._walkKeyIdsMap.get(a), c = f.KeyCode[c].toUpperCase(), $("#" + a).html(c))
            };
            a.prototype._applyWalkSettings = function() {
                return __awaiter(this,
                    void 0, void 0,
                    function() {
                        var a, c, d, m, k, e, l, q, n, p, r, t, u = this;
                        return __generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    return a = this._viewer.operatorManager, c = a.getOperator(f.OperatorId.KeyboardWalk), d = a.getOperator(f.OperatorId.WalkMode), m = parseInt(g.getValueAsString("#settings-walk-mode"), 10), [4, d.setWalkMode(m)];
                                case 1:
                                    b.sent();
                                    if (m !== f.WalkMode.Keyboard) return [3, 9];
                                    k = parseInt(g.getValueAsString("#settings-walk-rotation"), 10);
                                    e = parseFloat(g.getValueAsString("#settings-walk-speed")) * this._walkSpeedUnits;
                                    l = parseFloat(g.getValueAsString("#settings-walk-elevation")) * this._walkSpeedUnits;
                                    q = parseInt(g.getValueAsString("#settings-walk-view-angle"), 10);
                                    n = $("#settings-mouse-look-enabled").prop("checked");
                                    p = parseInt(g.getValueAsString("#settings-mouse-look-speed"), 10);
                                    r = $("#settings-bim-mode-enabled").prop("checked");
                                    $("#walk-navigation-keys .walk-key").html("");
                                    t = c.getKeyMapping();
                                    t.forEach(function(c, a) {
                                        u._applyWalkKeyText(c, a)
                                    });
                                    return 0 !== e ? [3, 3] : [4, c.resetDefaultWalkSpeeds()];
                                case 2:
                                    return b.sent(),
                                        this._updateWalkSettingsHelper(), [3, 4];
                                case 3:
                                    c.setRotationSpeed(k), c.setWalkSpeed(e), c.setElevationSpeed(l), c.setViewAngle(q), c.setMouseLookEnabled(n), c.setMouseLookSpeed(p), b.label = 4;
                                case 4:
                                    return r ? [4, this._viewer.model.registerIfcNodes(this._viewer.model.getAbsoluteRootNode())] : [3, 7];
                                case 5:
                                    return b.sent(), [4, c.enableBimMode()];
                                case 6:
                                    return b.sent(), [3, 9];
                                case 7:
                                    return [4, c.disableBimMode()];
                                case 8:
                                    b.sent(), b.label = 9;
                                case 9:
                                    return [2]
                            }
                        })
                    })
            };
            a.prototype._updateKeyboardWalkModeStyle = function(a) {
                this._updateEnabledStyle(null,
                    "walk-rotation-text walk-speed-text walk-elevation-text walk-view-angle-text walk-mouse-look-text settings-mouse-look-style walk-bim-mode-text walk-navigation-keys".split(" "), "settings-walk-rotation settings-walk-speed settings-walk-elevation settings-walk-view-angle settings-mouse-look-enabled settings-mouse-look-speed settings-bim-mode-enabled".split(" "), a === f.WalkMode.Keyboard)
            };
            a.prototype._updateWalkSpeedUnits = function(a) {
                this._walkSpeedUnits = Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
                a = "m";
                .001 >= this._walkSpeedUnits ? a = "&micro;m" : 1 >= this._walkSpeedUnits ? a = "mm" : 10 >= this._walkSpeedUnits ? a = "cm" : this._walkSpeedUnits = 1E3;
                $("#walk-speed-units").html(a);
                $("#elevation-speed-units").html(a)
            };
            a.prototype._updateWalkSettingsHelper = function() {
                var a = this._viewer.operatorManager,
                    c = a.getOperator(f.OperatorId.KeyboardWalk),
                    d = a.getOperator(f.OperatorId.WalkMode);
                a = c.getRotationSpeed();
                var m = c.getWalkSpeed(),
                    k = c.getElevationSpeed(),
                    e = c.getViewAngle(),
                    g = c.getMouseLookEnabled(),
                    l = c.getMouseLookSpeed();
                c = c.isBimModeEnabled();
                d = d.getWalkMode();
                this._updateWalkSpeedUnits(m);
                $("#settings-walk-mode").val("" + d);
                $("#settings-walk-rotation").val("" + a);
                $("#settings-walk-speed").val((m / this._walkSpeedUnits).toFixed(1));
                $("#settings-walk-elevation").val((k / this._walkSpeedUnits).toFixed(1));
                $("#settings-walk-view-angle").val("" + e);
                $("#settings-mouse-look-speed").val("" + l);
                this._updateEnabledStyle("settings-mouse-look-enabled", ["settings-mouse-look-style"], ["settings-mouse-look-speed"], g);
                this._updateEnabledStyle("settings-bim-mode-enabled",
                    [], [], c);
                this._updateKeyboardWalkModeStyle(d)
            };
            a.prototype._updateWalkSettings = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var a, c, d;
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return a = this._viewer.operatorManager, c = a.getOperator(f.OperatorId.KeyboardWalk), d = c.getWalkSpeed(), 0 !== d ? [3, 2] : [4, c.resetDefaultWalkSpeeds()];
                            case 1:
                                b.sent(), b.label = 2;
                            case 2:
                                return this._updateWalkSettingsHelper(), [2]
                        }
                    })
                })
            };
            a.prototype._updateDrawingSettings = function() {
                var a = this._viewer.getSheetBackgroundColor(),
                    c = this._viewer.getSheetColor(),
                    d = this._viewer.getSheetShadowColor(),
                    m = this._viewer.getBackgroundSheetEnabled();
                $("#settings-drawing-background").minicolors("value", g.rgbStringFromColor(a));
                $("#settings-drawing-sheet").minicolors("value", g.rgbStringFromColor(c));
                $("#settings-drawing-sheet-shadow").minicolors("value", g.rgbStringFromColor(d));
                $("#settings-drawing-background-enabled").prop("checked", m)
            };
            a.prototype._applyDrawingSettings = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var a,
                        c, d, m;
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return a = g.colorFromRgbString(g.getValueAsString("#settings-drawing-background")), c = g.colorFromRgbString(g.getValueAsString("#settings-drawing-sheet")), d = g.colorFromRgbString(g.getValueAsString("#settings-drawing-sheet-shadow")), m = $("#settings-drawing-background-enabled").prop("checked"), [4, this._viewer.setBackgroundSheetEnabled(m)];
                            case 1:
                                return b.sent(), [4, this._viewer.setSheetColors(a, c, d)];
                            case 2:
                                return b.sent(), [2]
                        }
                    })
                })
            };
            a.prototype._updateEnabledStyle =
                function(a, c, d, m) {
                    null !== a && $("#" + a).prop("checked", m);
                    if (m)
                        for (var b = 0; b < c.length; b++) a = c[b], $("#" + a).removeClass("grayed-out");
                    else
                        for (b = 0; b < c.length; b++) a = c[b], $("#" + a).addClass("grayed-out");
                    for (c = 0; c < d.length; c++) $("#" + d[c]).prop("disabled", !m)
                };
            return a
        }();
        l.ViewerSettings = d
    })(g.Desktop || (g.Desktop = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(f) {
    var g = function() {
        function e(d, a, b) {
            this._maxNodeChildrenSize = 300;
            this._tree = new f.Control.TreeControl(a, d, e.separator, b);
            this._internalId = a + "Id";
            this._viewer = d
        }
        e.prototype.getElementId = function() {
            return this._tree.getElementId()
        };
        e.prototype.registerCallback = function(d, a) {
            this._tree.registerCallback(d, a)
        };
        e.prototype._splitHtmlId = function(d) {
            return this._splitHtmlIdParts(d, e.separator)
        };
        e.prototype._splitHtmlIdParts = function(d, a) {
            var b = d.lastIndexOf(a);
            return -1 === b ? ["", d] : [d.substring(0, b), d.substring(b + a.length)]
        };
        e.prototype.hideTab = function() {
            $("#" + this.getElementId() + "Tab").hide()
        };
        e.prototype.showTab = function() {
            $("#" + this.getElementId() + "Tab").show()
        };
        e.prototype._getTreeControl = function() {
            return this._tree
        };
        e.separator = "_";
        e.visibilityPrefix = "visibility";
        return e
    }();
    f.ViewTree = g
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function() {
        function e(d, a, b) {
            this._idCount = 0;
            this._viewpointIdMap = new Map;
            this._bcfIdMap = new Map;
            this._topicGuidMap = new Map;
            this._topicTitleGuidMap = new Map;
            this._topicCommentsGuidMap = new Map;
            this._commentGuidMap = new Map;
            this._viewer = d;
            this._elementId = a;
            this._scroll = b;
            this._listRoot = document.createElement("ul");
            this._bcfDataList = document.createElement("select");
            this._initEvents()
        }
        e.prototype.hideTab = function() {
            $("#" + this._elementId + "Tab").hide()
        };
        e.prototype.showTab =
            function() {
                $("#" + this._elementId + "Tab").show()
            };
        e.prototype.getElementId = function() {
            return this._elementId
        };
        e.prototype._refreshScroll = function() {
            this._scroll && this._scroll.refresh()
        };
        e.prototype._showBCFData = function(d) {
            jQuery("#" + d).show();
            this._bcfIdMap.forEach(function(a, b) {
                b !== d && jQuery("#" + b).hide()
            });
            this._refreshScroll()
        };
        e.prototype._events = function(d) {
            var a = this;
            $(d).on("click", ".ui-bcf-topic", function(b) {
                return __awaiter(a, void 0, void 0, function() {
                    var a, d;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return a =
                                    jQuery(b.target), d = a.closest(".viewpoint, .comment").get(0), void 0 === d ? [3, 2] : [4, this._onTreeSelectItem(d.id)];
                            case 1:
                                c.sent(), c.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            });
            $(d).on("change", "select", function(b) {
                (b = jQuery(b.target).closest("select").get(0)) && a._showBCFData(b.value)
            })
        };
        e.prototype._addBCFComment = function(d, a, b) {
            return __awaiter(this, void 0, void 0, function() {
                var c, h, m, k, e, g, l;
                return __generator(this, function(v) {
                    switch (v.label) {
                        case 0:
                            return c = d.getMarkup(), h = new Date, m = "", k = f.GUID.create(), e = k + ".bcfv",
                                [4, f.BCFViewpoint.createViewpoint(this._viewer, e, b)];
                        case 1:
                            return g = v.sent(), d.setViewpoint(e, g), l = k + ".png", [4, this._addSnapshot(d, l)];
                        case 2:
                            return v.sent(), c.addViewpoint(k, e, l), [2, c.addComment(h, m, a, k)]
                    }
                })
            })
        };
        e.prototype._addSnapshot = function(d, a) {
            return __awaiter(this, void 0, void 0, function() {
                var b;
                return __generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return [4, this._viewer.takeSnapshot()];
                        case 1:
                            return b = c.sent(), d.addSnapshot(a, f.BCFSnapshot.snapshotDataFromImage(b)), [2]
                    }
                })
            })
        };
        e.prototype._removeBcf =
            function(d) {
                this._viewer.BCFManager.removeBCFData(d)
            };
        e.prototype._buildRemoveBCF = function(d) {
            var a = this,
                b = document.createElement("div");
            b.classList.add("ui-bcf-input");
            var c = document.createElement("button");
            c.textContent = "Remove BCF";
            b.appendChild(c);
            c.onclick = function() {
                return __awaiter(a, void 0, void 0, function() {
                    return __generator(this, function(a) {
                        this._removeBcf(d);
                        return [2]
                    })
                })
            };
            return b
        };
        e.prototype._addBcf = function(d) {
            return __awaiter(this, void 0, void 0, function() {
                var a, b, c;
                return __generator(this,
                    function(h) {
                        switch (h.label) {
                            case 0:
                                return a = this._viewer, b = a.BCFManager, c = b.createBCFData(d), [4, this._addTopic(c, d)];
                            case 1:
                                return h.sent(), [2, c]
                        }
                    })
            })
        };
        e.prototype._buildAddBCF = function() {
            var d = this,
                a = document.createElement("div");
            a.classList.add("ui-bcf-input");
            var b = document.createElement("label");
            b.textContent = "BCF Name: ";
            b.htmlFor = "bcf_name";
            var c = document.createElement("input");
            c.id = "bcf_name";
            c.placeholder = "BCF Name...";
            var h = document.createElement("button");
            h.textContent = "Add BCF";
            a.appendChild(b);
            a.appendChild(c);
            a.appendChild(h);
            h.onclick = function() {
                return __awaiter(d, void 0, void 0, function() {
                    var a;
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                a = c.value;
                                if (!(0 < a.length)) return [3, 2];
                                c.value = "";
                                return [4, this._addBcf(a)];
                            case 1:
                                b.sent(), b.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            return a
        };
        e.prototype._addTopic = function(d, a) {
            return __awaiter(this, void 0, void 0, function() {
                var b, c, h, m, k;
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return b = this._viewer.markupManager.getActiveMarkupView(),
                                [4, f.BCFTopic.createTopic(this._viewer, d.getId(), d.getFilename(), a, b)];
                        case 1:
                            return c = e.sent(), d.addTopic(c.getTopicId(), c), h = this._buildTopic(d, c), m = this._getBcfHtmlId(d.getId()), null !== m && (k = document.getElementById(m), null !== k && k.appendChild(h)), [2, c]
                    }
                })
            })
        };
        e.prototype._buildAddTopic = function(d) {
            var a = this,
                b = document.createElement("div");
            b.classList.add("ui-bcf-input");
            var c = document.createElement("label");
            c.textContent = "Topic Title: ";
            c.htmlFor = "topic_title";
            var h = document.createElement("input");
            h.id = "topic_title";
            h.placeholder = "Topic Title...";
            var m = document.createElement("button");
            m.textContent = "Add Topic";
            b.appendChild(c);
            b.appendChild(h);
            b.appendChild(m);
            m.onclick = function() {
                return __awaiter(a, void 0, void 0, function() {
                    var a;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                a = h.value;
                                if (!(0 < a.length)) return [3, 2];
                                h.value = "";
                                return [4, this._addTopic(d, a)];
                            case 1:
                                c.sent(), c.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            return b
        };
        e.prototype._initEvents = function() {
            var d = this,
                a = document.getElementById(this._elementId);
            if (null === a) throw new f.CommunicatorError("container is null");
            this._events(a);
            a.appendChild(this._buildAddBCF());
            this._listRoot.classList.add("ui-modeltree");
            this._listRoot.classList.add("ui-modeltree-item");
            a.appendChild(this._bcfDataList);
            a.appendChild(this._listRoot);
            this._viewer.setCallbacks({
                firstModelLoaded: function(a) {
                    var c = d._viewer.model;
                    a.forEach(function(a) {
                        c.getModelFileTypeFromNode(a) === f.FileType.Ifc && d.showTab()
                    })
                },
                bcfLoaded: function(a, c) {
                    d.showTab();
                    d._appendBCF(a, c)
                },
                bcfRemoved: function(a) {
                    d._removeBCF(a)
                }
            })
        };
        e.prototype._buildBCFNode = function(d) {
            var a = document.createElement("li");
            a.classList.add("ui-modeltree-item");
            a.id = d;
            return a
        };
        e.prototype._buildDiv = function(d, a, b) {
            var c = document.createElement("div");
            void 0 !== b && c.classList.add(b);
            c.id = d;
            c.innerHTML = a;
            return c
        };
        e.prototype._buildEditDiv = function(d, a, b, c, h) {
            var m = document.createElement("input");
            m.classList.add("ui-bcf-edit");
            void 0 !== h && m.classList.add(h);
            m.id = d;
            m.value = a;
            m.placeholder = b;
            m.onblur = function() {
                void 0 !== c && null !== m.textContent && c(m.textContent)
            };
            return m
        };
        e.prototype._buildImage = function(d) {
            var a = document.createElement("img");
            a.id = this._getId();
            a.src = d;
            return a
        };
        e.prototype._buildDeleteComment = function(d, a, b) {
            var c = this,
                h = document.createElement("button");
            h.classList.add("ui-bcf-comment-delete");
            h.textContent = "Delete";
            h.onclick = function() {
                c._deleteComment(d, a, b)
            };
            return h
        };
        e.prototype._buildEditComment = function(d, a) {
            var b = this,
                c = document.createElement("button");
            c.textContent = "Edit";
            c.onclick = function() {
                if ("true" === d.contentEditable) {
                    d.contentEditable =
                        "false";
                    c.textContent = "Edit";
                    var h = d.textContent;
                    null !== h && b._setCommentText(a, h)
                } else d.contentEditable = "true", c.textContent = "Save"
            };
            return c
        };
        e.prototype._buildComment = function(d, a) {
            var b = this._getId(),
                c = this._getViewpointFromComment(d, a);
            null !== c && this._viewpointIdMap.set(b, c);
            c = this._buildDiv(b, "", "comment");
            var h = "Created by " + a.getAuthor(),
                m = this._formatDate(a.getDate()),
                k = a.getText();
            c.appendChild(this._buildDiv(this._getId(), h));
            c.appendChild(this._buildDiv(this._getId(), m));
            h = a.getViewpointGuid();
            null !== h && (h = d.getMarkup().getViewpoints().get(h), void 0 !== h && (h = h.getSnapshotFilename(), null !== h && (h = d.getSnapshot(h), null !== h && c.appendChild(this._buildImage(h.getUrl())))));
            h = this._getId();
            this._commentGuidMap.set(a.getId(), h);
            k = this._buildDiv(h, k);
            c.appendChild(k);
            c.appendChild(this._buildEditComment(k, a));
            c.appendChild(this._buildDeleteComment(d, a, b));
            return c
        };
        e.prototype._addComment = function(d, a) {
            return __awaiter(this, void 0, void 0, function() {
                var b, c, h, m, k;
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return b =
                                this._viewer.markupManager.getActiveMarkupView(), [4, this._addBCFComment(d, a, b)];
                        case 1:
                            return c = e.sent(), h = this._buildComment(d, c), m = this._topicCommentsGuidMap.get(d.getTopicId()), void 0 !== m && (k = document.getElementById(m), null !== k && k.appendChild(h)), [2, c]
                    }
                })
            })
        };
        e.prototype._deleteComment = function(d, a, b) {
            b = document.getElementById(b);
            null !== b && (b.remove(), d.getMarkup().deleteComment(a.getId()), this._refreshScroll())
        };
        e.prototype._setCommentText = function(d, a) {
            var b = this._commentGuidMap.get(d.getId());
            void 0 !== b && (b = document.getElementById(b), null !== b && (d.setText(a), b.textContent = a, this._refreshScroll()))
        };
        e.prototype._buildAddComment = function(d) {
            var a = this,
                b = this._buildDiv(this._getId(), ""),
                c = document.createElement("textarea");
            c.style.width = "100%";
            b.appendChild(c);
            var h = document.createElement("button");
            h.textContent = "Add Comment";
            b.appendChild(h);
            h.onclick = function() {
                return __awaiter(a, void 0, void 0, function() {
                    var a;
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return a = c.value, c.value =
                                    "", 0 < a.length ? [4, this._addComment(d, a)] : [3, 2];
                            case 1:
                                b.sent(), b.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            return b
        };
        e.prototype._buildTopicData = function(d, a) {
            var b = document.createElement("div");
            b.classList.add("topic-data");
            b.innerHTML = void 0 !== a && null !== a ? "<b>" + d + "</b>: " + a : "<b>" + d + "</b>: -";
            return b
        };
        e.prototype._formatDate = function(d) {
            return void 0 === d ? "-" : d.toDateString()
        };
        e.prototype._deleteTopic = function(d, a) {
            var b = this._topicGuidMap.get(a.getTopicId());
            void 0 !== b && (b = document.getElementById(b), null !==
                b && b.remove());
            return d.getTopics().delete(a.getTopicId())
        };
        e.prototype._buildDeleteTopic = function(d, a) {
            var b = this,
                c = document.createElement("button");
            c.textContent = "Delete Topic";
            c.classList.add("ui-bcf-delete");
            c.onclick = function() {
                return __awaiter(b, void 0, void 0, function() {
                    return __generator(this, function(c) {
                        this._deleteTopic(d, a);
                        return [2]
                    })
                })
            };
            return c
        };
        e.prototype._setTopicTitle = function(d, a) {
            var b = this._topicTitleGuidMap.get(d.getTopicId());
            void 0 !== b && (b = document.getElementById(b), null !==
                b && (b.textContent = a));
            d.getMarkup().setTopicTitle(a)
        };
        e.prototype._buildTopic = function(d, a) {
            var b = this,
                c = this._getId(),
                h = a.getTopicId();
            this._topicGuidMap.set(h, c);
            c = this._buildDiv(c, "", "ui-bcf-topic");
            var m = a.getMarkup(),
                k = m.getTopicTitle(),
                e = this._getId();
            this._topicTitleGuidMap.set(h, e);
            c.appendChild(this._buildEditDiv(e, k, "Topic Title", function(c) {
                b._setTopicTitle(a, c)
            }, "title"));
            k = a.getViewpoint("viewpoint.bcfv");
            null !== k && (e = this._getId(), this._viewpointIdMap.set(e, k), e = this._buildDiv(e, "",
                "viewpoint"), k = a.getSnapshot(k.getFilename()), null !== k && e.appendChild(this._buildImage(k.getUrl())), c.appendChild(e));
            k = this._buildDiv(this._getId(), "");
            k.appendChild(this._buildTopicData("Author", m.getTopicCreationAuthor()));
            k.appendChild(this._buildTopicData("Description", m.getTopicDescription()));
            k.appendChild(this._buildTopicData("Created", this._formatDate(m.getTopicCreationDate())));
            k.appendChild(this._buildTopicData("Type", m.getTopicType()));
            k.appendChild(this._buildTopicData("Priority", m.getTopicPriority()));
            k.appendChild(this._buildTopicData("Stage", m.getTopicStage()));
            k.appendChild(this._buildTopicData("TopicId", a.getTopicId()));
            c.appendChild(k);
            m = this._getId();
            var f = this._buildDiv(m, "");
            this._topicCommentsGuidMap.set(h, m);
            a.getMarkup().getComments().forEach(function(c) {
                f.appendChild(b._buildComment(a, c))
            });
            c.appendChild(f);
            h = this._buildAddComment(a);
            h.appendChild(this._buildDeleteTopic(d, a));
            c.appendChild(h);
            return c
        };
        e.prototype._buildSelectOption = function(d, a) {
            var b = document.createElement("option");
            b.id = this._getSelectId(a);
            b.value = a;
            b.textContent = d;
            return b
        };
        e.prototype._appendBCF = function(d, a) {
            var b = this,
                c = this._viewer.BCFManager.getBCFData(d);
            if (null !== c) {
                var h = this._getId();
                this._showBCFData(h);
                this._bcfIdMap.set(h, d);
                this._bcfDataList.appendChild(this._buildSelectOption(d + ". " + a, h));
                this._bcfDataList.value = h;
                var m = this._buildBCFNode(h);
                this._listRoot.appendChild(m);
                m.appendChild(this._buildRemoveBCF(c.getId()));
                m.appendChild(this._buildAddTopic(c));
                c.getTopics().forEach(function(a) {
                    a = b._buildTopic(c,
                        a);
                    m.appendChild(a)
                });
                this._refreshScroll()
            }
        };
        e.prototype._getBcfHtmlId = function(d) {
            var a = null;
            this._bcfIdMap.forEach(function(b, c) {
                d === b && (a = c)
            });
            return a
        };
        e.prototype._removeBCF = function(d) {
            d = this._getBcfHtmlId(d);
            null !== d && (this._bcfIdMap.delete(d), $("#" + d).remove(), $("#" + this._getSelectId(d)).remove(), d = this._bcfDataList.value, 0 < d.length && this._showBCFData(d))
        };
        e.prototype._getViewpointFromComment = function(d, a) {
            a = a.getViewpointGuid();
            return null !== a && (a = d.getMarkup().getViewpoints().get(a), void 0 !==
                a && (a = a.getViewpointFilename(), null !== a)) ? d.getViewpoint(a) : null
        };
        e.prototype._getId = function() {
            return "bcf_" + ++this._idCount
        };
        e.prototype._getSelectId = function(d) {
            return "select_" + d
        };
        e.prototype._onTreeSelectItem = function(d) {
            return __awaiter(this, void 0, void 0, function() {
                var a;
                return __generator(this, function(b) {
                    switch (b.label) {
                        case 0:
                            return a = this._getViewpoint(d), null === a ? [3, 2] : [4, a.activate()];
                        case 1:
                            b.sent(), b.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        };
        e.prototype._getViewpoint = function(d) {
            return this._viewpointIdMap.get(d) ||
                null
        };
        return e
    }();
    g.BCFTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._annotationViewsString = "annotationViews";
            a._annotationViewsLabel = "Annotation Views";
            a._viewFolderCreated = !1;
            a._lastSelectedhtmlId = null;
            a._cadViewIds = new Set;
            a._tree.setCreateVisibilityItems(!1);
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this;
            this._viewer.setCallbacks({
                _firstModelLoaded: function(b, c, d) {
                    d || a._updateCadViews();
                    return Promise.resolve()
                },
                subtreeLoaded: function() {
                    a._updateCadViews()
                },
                modelSwitched: function() {
                    a._modelSwitched()
                },
                sheetActivated: function() {
                    if (a._viewer.model.isDrawing()) {
                        if (null != a._lastSelectedhtmlId) {
                            var b = document.getElementById(a._lastSelectedhtmlId);
                            null !== b && b.classList.remove("selected")
                        }
                        a.hideTab()
                    }
                },
                sheetDeactivated: function() {
                    a._viewer.model.isDrawing() && a.showTab()
                },
                cadViewCreated: function(b, c) {
                    var d = new Map;
                    d.set(b, c);
                    a._addCadViews(d)
                }
            });
            this._tree.registerCallback("selectItem", function(b) {
                a._onTreeSelectItem(b)
            })
        };
        d.prototype._modelSwitched = function() {
            this._tree.clear();
            this._cadViewIds.clear();
            this._viewFolderCreated = !1;
            this._updateCadViews()
        };
        d.prototype._updateCadViews = function() {
            var a = this._viewer.model.getCadViews();
            this._addCadViews(a)
        };
        d.prototype._addCadViews = function(a) {
            a = f.Internal.fromIntegerMap(a);
            this._createCadViewNodes(a);
            0 >= a.size ? this.hideTab() : this.showTab();
            this._tree.expandInitialNodes(this._internalId);
            this._tree.expandInitialNodes(this._internalId + this._annotationViewsString)
        };
        d.prototype._createCadViewNodes = function(a) {
            var b = this;
            if (0 !== a.size) {
                this._viewFolderCreated ||
                    (this._tree.appendTopLevelElement("Views", this._internalId, "viewfolder", !0), this._viewFolderCreated = !0);
                var c = this._viewer.model,
                    d = !0 === this._viewer.getCreationParameters().enableShatteredModelUiViews;
                a.forEach(function(a, h) {
                    b._cadViewIds.has(h) || !d && c._isWithinExternalModel(h) || c.isAnnotationView(h) || (b._cadViewIds.add(h), b._tree.addChild(a, b._cadViewId(h), b._internalId, "view", !1, g.Desktop.Tree.CadView))
                });
                a.forEach(function(a, h) {
                    b._cadViewIds.has(h) || !d && c._isWithinExternalModel(h) || !c.isAnnotationView(h) ||
                        null === document.getElementById(b._internalId + b._annotationViewsString) && b._tree.addChild(b._annotationViewsLabel, b._internalId + b._annotationViewsString, b._internalId, "viewfolder", !0, g.Desktop.Tree.CadView)
                });
                a.forEach(function(a, h) {
                    b._cadViewIds.has(h) || !d && c._isWithinExternalModel(h) || !c.isAnnotationView(h) || (b._cadViewIds.add(h), a = a.split("# Annotation View")[0], b._tree.addChild(a, b._cadViewId(h), b._internalId + b._annotationViewsString, "view", !1, g.Desktop.Tree.CadView))
                })
            }
        };
        d.prototype._onTreeSelectItem =
            function(a) {
                var b = this._splitHtmlId(a);
                switch (b[0]) {
                    case this._internalId:
                        this._viewer.operatorManager.getOperator(f.OperatorId.Handle).removeHandles(), this._viewer.model.activateCadView(parseInt(b[1], 10))
                }
                b = document.getElementById(a);
                null !== b && ("LI" === b.tagName && a !== this._internalId && a !== this._internalId + this._annotationViewsString ? (b.classList.add("selected"), this._lastSelectedhtmlId = a) : b.classList.remove("selected"))
            };
        d.prototype._cadViewId = function(a) {
            return this._internalId + g.ViewTree.separator +
                a
        };
        return d
    }(g.ViewTree);
    g.CadViewTree = l;
    g.CADViewTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._tree.setCreateVisibilityItems(!1);
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this;
            this._viewer.setCallbacks({
                _firstModelLoaded: function() {
                    return a._onNewModel()
                },
                modelSwitched: function() {
                    return __awaiter(a, void 0, void 0, function() {
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this._modelSwitched()];
                                case 1:
                                    return a.sent(), [2]
                            }
                        })
                    })
                },
                configurationActivated: function(b) {
                    a._tree.selectItem(a._configurationsId(b),
                        !1)
                }
            });
            this._tree.registerCallback("selectItem", function(b) {
                a._onTreeSelectItem(b)
            })
        };
        d.prototype._modelSwitched = function() {
            return this._onNewModel()
        };
        d.prototype._onNewModel = function() {
            return __awaiter(this, void 0, void 0, function() {
                var a, b, c, d, m;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            return this._createConfigurationNodes(), b = !1, c = this._viewer.model, [4, c._cadConfigurationsEnabled()];
                        case 1:
                            return h.sent() && (d = c.getCadConfigurations(), m = Object.keys(d).length, 1 < m && (b = !0)), b ? (this.showTab(),
                                a = this._activateDefault()) : (this.hideTab(), a = Promise.resolve()), this._tree.expandInitialNodes(this._internalId), [2, a]
                    }
                })
            })
        };
        d.prototype._activateDefault = function() {
            var a = this._viewer.model;
            return null !== a.getDefaultCadConfiguration() ? a.activateDefaultCadConfiguration() : Promise.resolve()
        };
        d.prototype._createConfigurationNodes = function() {
            var a = this._viewer.model.getCadConfigurations(),
                b = Object.keys(a);
            if (0 < b.length) {
                this._tree.appendTopLevelElement("Configurations", this._internalId, "configurations",
                    !0);
                for (var c = 0; c < b.length; c++) {
                    var d = parseInt(b[c], 10);
                    this._tree.addChild(a[d], this._configurationsId(d), this._internalId, "view", !1, g.Desktop.Tree.Configurations)
                }
            }
        };
        d.prototype._onTreeSelectItem = function(a) {
            a = this._splitHtmlId(a);
            switch (a[0]) {
                case this._internalId:
                    this._viewer.operatorManager.getOperator(f.OperatorId.Handle).removeHandles(), this._viewer.model.activateCadConfiguration(parseInt(a[1], 10))
            }
        };
        d.prototype._configurationsId = function(a) {
            return this._internalId + g.ViewTree.separator + a
        };
        return d
    }(g.ViewTree);
    g.ConfigurationsTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(f) {
    var g = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._tree.setCreateVisibilityItems(!1);
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this,
                b = function() {
                    return a._onNewModel()
                };
            this._viewer.setCallbacks({
                _assemblyTreeReady: b,
                _firstModelLoaded: b,
                _modelSwitched: b,
                _subtreeLoaded: b
            });
            this._tree.registerCallback("selectItem", function(c) {
                return __awaiter(a, void 0, void 0, function() {
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4,
                                    this._onTreeSelectItem(c)
                                ];
                            case 1:
                                return a.sent(), [2]
                        }
                    })
                })
            })
        };
        d.prototype._onTreeSelectItem = function(a) {
            return __awaiter(this, void 0, void 0, function() {
                var b, c;
                return __generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            b = document.getElementById(a);
                            if (null === b) return [2];
                            c = this._splitHtmlId(a);
                            return c[0] !== this._internalId ? [3, 2] : [4, this._setFilter(parseInt(c[1], 10))];
                        case 1:
                            d.sent(), d.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        };
        d.prototype._setFilter = function(a) {
            return __awaiter(this, void 0, void 0, function() {
                var b,
                    c, d;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            return [4, this._viewer.model];
                        case 1:
                            b = h.sent();
                            c = b.getNodesFromFiltersId([a]);
                            if (null === c) return [3, 10];
                            d = [];
                            c.nodeIds.forEach(function(a) {
                                d.push(a)
                            });
                            return [4, this._viewer.pauseRendering()];
                        case 2:
                            return h.sent(), [4, b.reset()];
                        case 3:
                            return h.sent(), c.isInclusive ? [4, b.setNodesVisibility([b.getAbsoluteRootNode()], !1)] : [3, 6];
                        case 4:
                            return h.sent(), [4, b.setNodesVisibility(d, !0)];
                        case 5:
                            return h.sent(), [3, 8];
                        case 6:
                            return [4, b.setNodesVisibility(d,
                                !1)];
                        case 7:
                            h.sent(), h.label = 8;
                        case 8:
                            return [4, this._viewer.resumeRendering()];
                        case 9:
                            h.sent(), h.label = 10;
                        case 10:
                            return [2]
                    }
                })
            })
        };
        d.prototype._onNewModel = function() {
            var a = this;
            this._tree.clear();
            var b = this._viewer.model.getFilters();
            b.forEach(function(c, b) {
                a._tree.appendTopLevelElement(c, a.getFilterId(b), "assembly", !1)
            });
            0 < b.size ? this.showTab() : this.hideTab();
            return Promise.resolve()
        };
        d.prototype.getFilterId = function(a) {
            return this._internalId + f.ViewTree.separator + a
        };
        return d
    }(f.ViewTree);
    f.FiltersTree =
        g
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._layerNames = [];
            a._layerParts = new Set;
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this,
                b = function() {
                    return a._onNewModel()
                };
            this._viewer.setCallbacks({
                _firstModelLoaded: b,
                _modelSwitched: b,
                selectionArray: function(c) {
                    a._tree.updateSelection(c)
                },
                visibilityChanged: function() {
                    a._tree.updateLayersVisibilityIcons()
                }
            });
            this._tree.registerCallback("selectItem", function(c, b) {
                a._onTreeSelectItem(c,
                    b)
            });
            this._tree.registerCallback("loadChildren", function(c) {
                a._loadNodeChildren(c)
            })
        };
        d.prototype._onTreeSelectItem = function(a, b) {
            void 0 === b && (b = f.SelectionMode.Set);
            if (null !== document.getElementById(a)) switch (this._splitHtmlId(a)[0]) {
                case "layerpart":
                    this._selectLayerPart(a, b);
                    break;
                case "layer":
                    this._selectLayer(a, b)
            }
        };
        d.prototype._selectLayerPart = function(a, b) {
            a = d.getPartId(a);
            null !== a && this._viewer.selectPart(a, b)
        };
        d.prototype._selectLayer = function(a, b) {
            a = d.getLayerName(a);
            null !== a && this._viewer.selectionManager.selectLayer(a,
                b)
        };
        d.prototype._onNewModel = function() {
            return __awaiter(this, void 0, void 0, function() {
                var a, b = this;
                return __generator(this, function(c) {
                    a = this._viewer.model;
                    this._tree.clear();
                    this._layerParts.clear();
                    this._layerNames = a.getUniqueLayerNames().sort();
                    this._layerNames.filter(function(c) {
                        var h = d._createId(d.layerPrefix);
                        d._layerIdMap.set(h, c);
                        d._idLayerMap.set(c, h);
                        var e = a.getLayerIdsFromName(c);
                        return null !== e && 0 < e.length ? (b._tree.appendTopLevelElement(c, h, "assembly", !0, !1), !0) : !1
                    });
                    0 < this._layerNames.length ?
                        this.showTab() : this.hideTab();
                    return [2]
                })
            })
        };
        d.prototype._loadNodeChildren = function(a) {
            var b = d.getLayerName(a);
            null !== b && (a = d.getLayerId(b), null !== a && (b = this._viewer.model.getNodesFromLayerName(b, !0), null !== b && (b.length < this._maxNodeChildrenSize ? this._addLayerParts(a, b) : this._addLayerPartContainers(a, b))))
        };
        d.prototype._addLayerParts = function(a, b) {
            var c = this,
                h = this._viewer.model,
                e = h.isDrawing();
            b.forEach(function(b) {
                var m = h.getNodeType(b);
                e || m !== f.NodeType.BodyInstance || (m = h.getNodeParent(b), null !==
                    m && (b = m));
                m = h.getNodeName(b);
                var k = d._createId(d.layerPartPrefix);
                d._layerPartIdMap.set(k, b);
                d._idLayerPartMap.set(b, k);
                c._layerParts.has(b) || (c._layerParts.add(b), c._tree.addChild(m, k, a, "assembly", !1, g.Desktop.Tree.Layers))
            })
        };
        d.prototype._addLayerPartContainers = function(a, b) {
            for (var c = Math.ceil(b.length / this._maxNodeChildrenSize), h = 0; h < c; ++h) {
                var e = h * this._maxNodeChildrenSize,
                    f = Math.min(e + this._maxNodeChildrenSize, b.length),
                    l = "Child Nodes " + e + " - " + f,
                    B = d._createId(d.layerPartContainerPrefix);
                this._tree.addChild(l,
                    B, a, "container", !0, g.Desktop.Tree.Layers);
                this._addLayerParts(B, b.slice(e, f))
            }
        };
        d._createId = function(a) {
            return "" + a + d.separator + ++this._idCount
        };
        d.getLayerName = function(a) {
            return this._layerIdMap.get(a) || null
        };
        d.getLayerId = function(a) {
            return this._idLayerMap.get(a) || null
        };
        d.getPartId = function(a) {
            return this._layerPartIdMap.get(a) || null
        };
        d.getLayerPartId = function(a) {
            return this._idLayerPartMap.get(a) || null
        };
        d.layerPrefix = "layer";
        d.layerPartPrefix = "layerpart";
        d.layerPartContainerPrefix = "layerpartcontainer";
        d._idCount = 0;
        d._layerIdMap = new Map;
        d._idLayerMap = new Map;
        d._layerPartIdMap = new Map;
        d._idLayerPartMap = new Map;
        return d
    }(g.ViewTree);
    g.LayersTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._lastModelRoot = null;
            a._startedWithoutModelStructure = !1;
            a._partSelectionEnabled = !0;
            a._currentSheetId = null;
            a._measurementFolderId = "measurementitems";
            a._updateVisibilityStateTimer = new f.Internal.Timer;
            a._updateSelectionTimer = new f.Internal.Timer;
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype.freezeExpansion = function(a) {
            this._tree.freezeExpansion(a)
        };
        d.prototype.modelStructurePresent = function() {
            var a = this._viewer.model;
            return "No product structure" !== a.getNodeName(a.getAbsoluteRootNode())
        };
        d.prototype.enablePartSelection = function(a) {
            this._partSelectionEnabled = a
        };
        d.prototype._initEvents = function() {
            var a = this,
                b = function() {
                    a._reset();
                    return Promise.resolve()
                };
            this._viewer.setCallbacks({
                _assemblyTreeReady: function() {
                    a._onNewModel();
                    return Promise.resolve()
                },
                _firstModelLoaded: b,
                hwfParseComplete: b,
                modelSwitched: b,
                selectionArray: function(c) {
                    a._onPartSelection(c)
                },
                incrementalSelectionBatchEnd: function() {
                    a._updateSelectionTimer.set(50,
                        function() {
                            a.updateSelection(null)
                        })
                },
                visibilityChanged: function() {
                    a._tree.getVisibilityControl().updateModelTreeVisibilityState()
                },
                viewCreated: function(c) {
                    a._onNewView(c)
                },
                viewLoaded: function(c) {
                    a._onNewView(c)
                },
                subtreeLoaded: function(c) {
                    a._onSubtreeLoaded(c)
                },
                subtreeDeleted: function(c) {
                    a._onSubtreeDeleted(c)
                },
                modelSwitchStart: function() {
                    a._tree.clear()
                },
                measurementCreated: function(c) {
                    a._onNewMeasurement(c)
                },
                measurementLoaded: function(c) {
                    a._onNewMeasurement(c)
                },
                measurementDeleted: function(c) {
                    a._onDeleteMeasurement(c)
                },
                measurementShown: function() {
                    a._tree.updateMeasurementVisibilityIcons()
                },
                measurementHidden: function() {
                    a._tree.updateMeasurementVisibilityIcons()
                },
                sheetActivated: function(c) {
                    c !== a._currentSheetId && (a._currentSheetId = c, a._refreshModelTree(c))
                },
                sheetDeactivated: function() {
                    a._reset()
                },
                configurationActivated: function(c) {
                    a._refreshModelTree(c)
                }
            });
            this._tree.registerCallback("loadChildren", function(c) {
                a._loadNodeChildren(c)
            });
            this._tree.registerCallback("selectItem", function(c, b) {
                a._onTreeSelectItem(c, b)
            })
        };
        d.prototype._refreshModelTree = function(a) {
            this._tree.clear();
            var b = this._viewer.model,
                c = b.getAbsoluteRootNode(),
                d = b.getNodeName(c);
            this._tree.appendTopLevelElement(d, this._partId(c), "modelroot", 0 < b.getNodeChildren(c).length, !1, !0);
            this._tree.addChild(b.getNodeName(a), this._partId(a), this._partId(c), "part", !0, g.Desktop.Tree.Model);
            this._tree.expandInitialNodes(this._partId(c));
            this._refreshMarkupViews()
        };
        d.prototype._reset = function() {
            this._tree.clear();
            this._currentSheetId = null;
            this._onNewModel()
        };
        d.prototype._onNewModel = function() {
            var a = this._viewer.model,
                b = a.getAbsoluteRootNode(),
                c = a.getNodeName(b);
            this.showTab();
            this._startedWithoutModelStructure = !this.modelStructurePresent();
            this._lastModelRoot = this._tree.appendTopLevelElement(c, this._partId(b), "modelroot", 0 < a.getNodeChildren(b).length);
            this._viewer.isDrawingSheetActive() || this._tree.expandInitialNodes(this._partId(b));
            this._refreshMarkupViews()
        };
        d.prototype._createMarkupViewFolderIfNecessary = function() {
            0 === $("#markupviews").length && this._tree.appendTopLevelElement("Markup Views",
                "markupviews", "viewfolder", !1)
        };
        d.prototype._createMeasurementFolderIfNecessary = function() {
            0 === $("#" + this._measurementFolderId).length && this._tree.appendTopLevelElement("Measurements", this._measurementFolderId, "measurement", !1)
        };
        d.prototype._parentChildrenLoaded = function(a) {
            a = this._partId(a);
            return this._tree.childrenAreLoaded(a)
        };
        d.prototype._onSubtreeLoaded = function(a) {
            for (var b = this._viewer.model, c = 0; c < a.length; c++) {
                var d = a[c];
                if (!b.getOutOfHierarchy(d)) {
                    var e = b.getNodeParent(d);
                    if (null === e) console.assert(null !==
                        this._lastModelRoot), this._lastModelRoot = this._tree._insertNodeAfter(b.getNodeName(d), this._partId(d), "modelroot", this._lastModelRoot, !0);
                    else {
                        var f = e;
                        do {
                            if (this._parentChildrenLoaded(e)) {
                                f === e && this._tree.addChild(b.getNodeName(d), this._partId(d), this._partId(e), "assembly", !0, g.Desktop.Tree.Model);
                                this._tree.preloadChildrenIfNecessary(this._partId(d));
                                break
                            }
                            d = e;
                            e = b.getNodeParent(d)
                        } while (null !== e)
                    }
                }
            }
            this._startedWithoutModelStructure && (a = this._tree.getRoot(), null !== a.firstChild && a.removeChild(a.firstChild),
                a = this._tree.getPartVisibilityRoot(), null !== a.firstChild && a.removeChild(a.firstChild))
        };
        d.prototype._onSubtreeDeleted = function(a) {
            for (var b = 0; b < a.length; b++) this._tree.deleteNode(this._partId(a[b]))
        };
        d.prototype._buildTreePathForNode = function(a) {
            for (var b = this._viewer.model, c = [], d = b.getNodeParent(a); null !== d && (!this._viewer.isDrawingSheetActive() || null === this._currentSheetId || d !== this._currentSheetId && a !== this._currentSheetId);) c.push(d), d = b.getNodeParent(d);
            c.reverse();
            return c
        };
        d.prototype._expandCorrectContainerForNodeId =
            function(a) {
                var b = this._viewer.model,
                    c = b.getNodeParent(a);
                null !== c && (a = b.getNodeChildren(c).indexOf(a), 0 <= a && this._tree.expandChildren(this._containerId(c, Math.floor(a / this._maxNodeChildrenSize))))
            };
        d.prototype._isInsideContainer = function(a) {
            a = this._viewer.model.getNodeParent(a);
            if (null === a) return !1;
            a = this._containerId(a, 0);
            return 0 < $("#" + a).length
        };
        d.prototype._expandPart = function(a) {
            if (this._viewer.model.isNodeLoaded(a)) {
                for (var b = 0, c = this._buildTreePathForNode(a); b < c.length; b++) {
                    var d = c[b];
                    this._isInsideContainer(d) &&
                        this._expandCorrectContainerForNodeId(d);
                    d = $("#" + this._partId(d)).attr("id");
                    void 0 !== d && this._tree.expandChildren(d)
                }
                this._isInsideContainer(a) && this._expandCorrectContainerForNodeId(a);
                this._tree.selectItem(this._partId(a), !1)
            }
        };
        d.prototype._onPartSelection = function(a) {
            if (this._partSelectionEnabled) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].getSelection().getNodeId();
                    null === c ? this._tree.selectItem(null, !1) : this._expandPart(c)
                }
                0 === a.length && this._tree.updateSelection(null)
            }
        };
        d.prototype._createContainerNodes =
            function(a, b) {
                for (var c = 1, d = this._maxNodeChildrenSize, e = 0; !(this._tree.addChild("Child Nodes " + c + " - " + Math.min(d, b.length), this._containerId(a, e), this._partId(a), "container", !0, g.Desktop.Tree.Model), c += this._maxNodeChildrenSize, ++e, d >= b.length);) d += this._maxNodeChildrenSize
            };
        d.prototype._loadAssemblyNodeChildren = function(a) {
            var b = this._viewer.model.getNodeChildren(a);
            b.length > this._maxNodeChildrenSize ? this._createContainerNodes(a, b) : (a = this._partId(a), this._processNodeChildren(b, a))
        };
        d.prototype._loadContainerChildren =
            function(a) {
                var b = this._viewer.model,
                    c = this._splitHtmlId(a);
                c = this._splitContainerId(c[1]);
                b = b.getNodeChildren(parseInt(c[0], 10));
                c = this._maxNodeChildrenSize * parseInt(c[1], 10);
                b = b.slice(c, c + this._maxNodeChildrenSize);
                this._processNodeChildren(b, a)
            };
        d.prototype._processNodeChildren = function(a, b) {
            for (var c = this, d = this._viewer.model, e = null, k = 0; k < a.length; k++) {
                var l = a[k],
                    B = d.getNodeName(l),
                    q = b,
                    n = "assembly",
                    p = !1;
                switch (d.getNodeType(l)) {
                    case f.NodeType.Body:
                    case f.NodeType.BodyInstance:
                        n = "body";
                        break;
                    case f.NodeType.Pmi:
                        null === e && (e = this._tree.addChild("PMI", this._pmiPartId(l), b, "modelroot", !0, g.Desktop.Tree.Model));
                        null !== e && (q = e.id, n = "assembly");
                        break;
                    case f.NodeType.DrawingSheet:
                        this._viewer.isDrawingSheetActive() || (p = !0)
                }
                p || this._tree.addChild(B, this._partId(l), q, n, 0 < d.getNodeChildren(l).length, g.Desktop.Tree.Model)
            }
            0 < a.length && this._updateVisibilityStateTimer.set(50, function() {
                c._tree.getVisibilityControl().updateModelTreeVisibilityState()
            })
        };
        d.prototype._loadNodeChildren = function(a) {
            var b =
                this._splitHtmlId(a);
            switch (b["" === b[0] ? 1 : 0]) {
                case "part":
                    a = parseInt(b[1], 10);
                    this._loadAssemblyNodeChildren(a);
                    break;
                case "container":
                    this._loadContainerChildren(a);
                    break;
                case "markupviews":
                case "measurementitems":
                case "pmipart":
                    break;
                default:
                    console.assert(!1)
            }
        };
        d.prototype._onTreeSelectItem = function(a, b) {
            void 0 === b && (b = f.SelectionMode.Set);
            var c = document.getElementById(a);
            if (null !== c) {
                if ("LI" === c.tagName && "markupviews" !== a) c.classList.add("selected");
                else {
                    var d = document.getElementById("markupviews");
                    null !== d && d.classList.remove("selected")
                }
                0 === a.lastIndexOf("pmi", 0) && c.classList.contains("ui-modeltree-item") && c.classList.remove("selected");
                a = this._splitHtmlId(a);
                switch (a[0]) {
                    case "part":
                        this._viewer.selectPart(parseInt(a[1], 10), b);
                        break;
                    case "markupview":
                        this._viewer.markupManager.activateMarkupViewWithPromise(a[1]);
                        break;
                    case "container":
                        this._onContainerClick(a[1])
                }
            }
        };
        d.prototype._onContainerClick = function(a) {};
        d.prototype._onNewView = function(a) {
            this._createMarkupViewFolderIfNecessary();
            this._addMarkupView(a)
        };
        d.prototype._refreshMarkupViews = function() {
            for (var a = this._viewer.markupManager, b = 0, c = a.getMarkupViewKeys(); b < c.length; b++) {
                var d = a.getMarkupView(c[b]);
                null !== d && this._addMarkupView(d)
            }
        };
        d.prototype._addMarkupView = function(a) {
            this._createMarkupViewFolderIfNecessary();
            var b = this._viewId(a.getUniqueId());
            this._tree.addChild(a.getName(), b, "markupviews", "view", !1, g.Desktop.Tree.Model)
        };
        d.prototype._onNewMeasurement = function(a) {
            this._createMeasurementFolderIfNecessary();
            var b = this._measurementId(a._getId());
            this._tree.addChild(a.getName(), b, this._measurementFolderId, "measurement", !1, g.Desktop.Tree.Model);
            this._updateMeasurementsFolderVisibility();
            this._tree.updateMeasurementVisibilityIcons()
        };
        d.prototype._onDeleteMeasurement = function(a) {
            a = this._measurementId(a._getId());
            this._tree.deleteNode(a);
            this._tree.deleteNode("visibility" + d.separator + a);
            this._updateMeasurementsFolderVisibility()
        };
        d.prototype._updateMeasurementsFolderVisibility = function() {
            var a = this._viewer.measureManager.getAllMeasurements(),
                b = document.getElementById(this._measurementFolderId);
            null !== b && (b.style.display = a.length ? "inherit" : "none");
            b = document.getElementById("visibility" + d.separator + this._measurementFolderId);
            null !== b && (b.style.display = a.length ? "inherit" : "none")
        };
        d.prototype._measurementId = function(a) {
            return "measurement" + d.separator + a
        };
        d.prototype._partId = function(a) {
            return "part" + d.separator + a
        };
        d.prototype._pmiPartId = function(a) {
            return "pmipart" + d.separator + a
        };
        d.prototype._viewId = function(a) {
            return "markupview" + d.separator +
                a
        };
        d.prototype._containerId = function(a, b) {
            console.assert(0 <= b);
            return "container" + d.separator + a + "-" + b
        };
        d.prototype._splitContainerId = function(a) {
            return this._splitHtmlIdParts(a, "-")
        };
        d.prototype.updateSelection = function(a) {
            this._tree.updateSelection(a)
        };
        return d
    }(g.ViewTree);
    g.ModelTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._currentSheetId = null;
            a._3dSheetId = "" + a._internalId + g.ViewTree.separator + "3D";
            a._tree.setCreateVisibilityItems(!1);
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this,
                b = function() {
                    return a._onNewModel()
                };
            this._viewer.setCallbacks({
                _assemblyTreeReady: b,
                _firstModelLoaded: b,
                _modelSwitched: b,
                sheetActivated: function(c) {
                    a._onSheetActivated(c)
                },
                sheetDeactivated: function() {
                    a._onSheetDeactivated()
                }
            });
            this._tree.registerCallback("selectItem", function(c) {
                return __awaiter(a, void 0, void 0, function() {
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, this._onTreeSelectItem(c)];
                            case 1:
                                return a.sent(), [2]
                        }
                    })
                })
            })
        };
        d.prototype._setCurrentSheetId = function(a) {
            var b = $("#" + this._currentSheetId);
            null !== b && b.removeClass("selected-sheet");
            b = $("#" + a);
            null !== b && b.addClass("selected-sheet");
            this._currentSheetId = a
        };
        d.prototype._onNewModel = function() {
            this._tree.clear();
            var a = Promise.resolve();
            if (this._viewer.model.isDrawing()) {
                for (var b =
                        this._viewer.model, c = 0, d = this._viewer._getSheetManager().getSheets(); c < d.length; c++) {
                    var e = d[c],
                        f = b.getNodeName(e);
                    e = this._sheetTreeId(e);
                    this._tree.appendTopLevelElement(f, e, "sheet", !1)
                }
                0 < this._viewer._getSheetManager().get3DNodes().length && (this._tree.appendTopLevelElement("3D Model", this._3dSheetId, "sheet", !1, !1, !1), this._currentSheetId = this._3dSheetId);
                this.showTab()
            } else this.hideTab();
            return a
        };
        d.prototype._onSheetActivated = function(a) {
            this._setCurrentSheetId(this._sheetTreeId(a))
        };
        d.prototype._onSheetDeactivated =
            function() {
                this._setCurrentSheetId(this._3dSheetId)
            };
        d.prototype._onTreeSelectItem = function(a) {
            if (a === this._3dSheetId) return this._viewer.deactivateSheets();
            a = this._splitHtmlId(a);
            a = parseInt(a[1], 10);
            this._currentSheetId === this._3dSheetId && (this._viewer.model.setViewAxes(new f.Point3(0, 0, 1), new f.Point3(0, 1, 0)), this._viewer.setViewOrientation(f.ViewOrientation.Front, 0));
            return this._viewer.setActiveSheetId(a)
        };
        d.prototype._sheetTreeId = function(a) {
            return "" + this._internalId + g.ViewTree.separator + a
        };
        return d
    }(g.ViewTree);
    g.SheetsTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    (function(l) {
        var e = function() {
                return function(a) {
                    this.guid = this.nodeId = null;
                    "number" === typeof a ? this.nodeId = a : this.guid = a
                }
            }(),
            d = function() {
                function a(a) {
                    var c = this;
                    this._fullHiddenParentIds = [];
                    this._partialHiddenParentIds = [];
                    this._assemblyTreeReadyOccurred = !1;
                    this._viewer = a;
                    var b = function() {
                        c.updateModelTreeVisibilityState();
                        return Promise.resolve()
                    };
                    this._viewer.setCallbacks({
                        _assemblyTreeReady: function() {
                            c._assemblyTreeReadyOccurred = !0;
                            return b()
                        },
                        _firstModelLoaded: b
                    })
                }
                a.prototype._clearStyles = function() {
                    for (var a = 0, b = this._fullHiddenParentIds; a < b.length; a++) {
                        var d = b[a];
                        this._removeVisibilityHiddenClass(d, "partHidden")
                    }
                    a = this._fullHiddenParentIds.length = 0;
                    for (b = this._partialHiddenParentIds; a < b.length; a++) d = b[a], this._removeVisibilityHiddenClass(d, "partialHidden");
                    this._partialHiddenParentIds.length = 0
                };
                a.prototype._applyStyles = function() {
                    for (var a = 0, b = this._fullHiddenParentIds; a < b.length; a++) {
                        var d = b[a];
                        this._addVisibilityHiddenClass(d, "partHidden")
                    }
                    a = 0;
                    for (b = this._partialHiddenParentIds; a <
                        b.length; a++) d = b[a], this._addVisibilityHiddenClass(d, "partialHidden")
                };
                a.prototype.updateModelTreeVisibilityState = function() {
                    if (this._assemblyTreeReadyOccurred) {
                        this._clearStyles();
                        for (var a = this._viewer.model, b = [a.getAbsoluteRootNode()], d = 0; d < b.length; d++) {
                            var e = b[d],
                                g = a.getBranchVisibility(e);
                            if (g === f.BranchVisibility.Hidden) this._fullHiddenParentIds.push(e);
                            else if (g === f.BranchVisibility.Mixed)
                                for (this._partialHiddenParentIds.push(e), g = 0, e = a.getNodeChildren(e); g < e.length; g++) b.push(e[g])
                        }
                        this._applyStyles()
                    }
                };
                a.prototype._getVisibilityItem = function(a) {
                    return $("#visibility" + g.ViewTree.separator + "part" + g.ViewTree.separator + a)
                };
                a.prototype._addVisibilityHiddenClass = function(a, b) {
                    this._getVisibilityItem(a).addClass(b)
                };
                a.prototype._removeVisibilityHiddenClass = function(a, b) {
                    this._getVisibilityItem(a).removeClass(b)
                };
                return a
            }();
        l.VisibilityControl = d;
        var a = function() {
            function a(a, b, e, k) {
                this._lastItemId = null;
                this._selectedPartItems = [];
                this._futureHighlightIds = new Set;
                this._futureMixedIds = new Set;
                this._selectedItemsParentIds = [];
                this._selectedLayers = [];
                this._mixedItemsLayer = new Set;
                this._selectedTypes = [];
                this._futureMixedTypesIds = [];
                this._mixedTypes = new Set;
                this._callbacks = new Map;
                this._childrenLoaded = new Set;
                this._loadedNodes = new Set;
                this._touchTimer = new f.Internal.Timer;
                this._freezeExpansion = !1;
                this._scrollTimer = new f.Internal.Timer;
                this._selectionLabelHighlightTimer = new f.Internal.Timer;
                this._createVisibilityItems = !0;
                this._elementId = a;
                this._viewer = b;
                this._treeScroll = k;
                this._separator = e;
                this._visibilityControl = new d(b);
                this._partVisibilityRoot = document.createElement("ul");
                this._listRoot = document.createElement("ul");
                this._init()
            }
            a.prototype.setCreateVisibilityItems = function(a) {
                this._createVisibilityItems = a
            };
            a.prototype.getElementId = function() {
                return this._elementId
            };
            a.prototype.getRoot = function() {
                return this._listRoot
            };
            a.prototype.getPartVisibilityRoot = function() {
                return this._partVisibilityRoot
            };
            a.prototype.getVisibilityControl = function() {
                return this._visibilityControl
            };
            a.prototype.registerCallback = function(a, b) {
                this._callbacks.has(a) ||
                    this._callbacks.set(a, []);
                this._callbacks.get(a).push(b)
            };
            a.prototype._triggerCallback = function(a) {
                for (var c = [], b = 1; b < arguments.length; b++) c[b - 1] = arguments[b];
                if (b = this._callbacks.get(a))
                    for (var d = 0; d < b.length; d++) b[d].apply(null, c)
            };
            a.prototype.deleteNode = function(a) {
                a = "#" === a.charAt(0) ? a.slice(1) : a;
                jQuery("#" + a).remove();
                jQuery("#visibility" + this._separator + a).remove()
            };
            a.prototype._getTaggedId = function(a, b, d) {
                return null !== d && "Annotation Views" === d && b === g.Desktop.Tree.CadView ? new e("Annotation Views") :
                    this._parseTaggedId(a)
            };
            a.prototype.addChild = function(a, b, d, e, f, l) {
                var c = this._getTaggedId(b, l, a);
                if (null === c) return null;
                if (l === g.Desktop.Tree.Model && "container" !== e && null !== c.nodeId) {
                    if (this._loadedNodes.has(c.nodeId)) return null;
                    this._loadedNodes.add(c.nodeId)
                }
                null === a && (a = "unnamed");
                this._addVisibilityToggleChild(b, d, e);
                d = jQuery("#" + d);
                d.children(".ui-modeltree-container").children(".ui-modeltree-expandNode").css("visibility", "visible");
                var h = d.children("ul"),
                    k = l = !1;
                null !== c.nodeId && (l = this._futureHighlightIds.has(c.nodeId),
                    k = this._futureMixedIds.has(c.nodeId), l && this._futureHighlightIds.delete(c.nodeId), k && this._futureMixedIds.delete(c.nodeId));
                a = this._buildNode(a, b, e, f, l, k);
                0 === h.length ? (e = document.createElement("ul"), e.classList.add("ui-modeltree-children"), d.append(e), e.appendChild(a)) : h.get(0).appendChild(a);
                l && (b = this._getListItem(b), null !== b && this._selectedPartItems.push(b));
                this._triggerCallback("addChild");
                return a
            };
            a.prototype._addVisibilityToggleChild = function(a, b, d) {
                b = jQuery("#visibility" + this._separator +
                    b);
                b.children(".ui-modeltree-visibility-container").css("visibility", "visible");
                var c = b.children("ul");
                0 === c.length ? (c = document.createElement("ul"), c.classList.add("ui-modeltree-visibility-children"), b.append(c)) : c = c.get(0);
                a = this._buildPartVisibilityNode(a, d);
                null !== a && c.appendChild(a)
            };
            a.prototype._buildPartVisibilityNode = function(a, b) {
                if (!this._createVisibilityItems) return null;
                var c = document.createElement("div");
                c.classList.add("ui-modeltree-partVisibility-icon");
                var d = document.createElement("li");
                d.classList.add("ui-modeltree-item");
                d.classList.add("visibility");
                d.id = "" + g.ViewTree.visibilityPrefix + g.ViewTree.separator + a;
                d.appendChild(c);
                if ("measurement" !== b) {
                    b = void 0;
                    a = a.split(this._separator).pop();
                    void 0 !== a && (b = parseInt(a, 10));
                    if (void 0 === b || isNaN(b)) return d;
                    a = this._viewer.model.getNodeType(b);
                    if (a === f.NodeType.Pmi || a === f.NodeType.PmiBody) d.style.visibility = "hidden"
                }
                return d
            };
            a.prototype.freezeExpansion = function(a) {
                this._freezeExpansion = a
            };
            a.prototype.updateSelection = function(a) {
                null ===
                    a && (a = this._viewer.selectionManager.getResults());
                a = a.map(function(a) {
                    return a instanceof f.Event.NodeSelectionEvent && (a = a.getSelection(), !a.isNodeSelection()) ? (console.assert(!1), f.InvalidNodeId) : a.getNodeId()
                });
                this._updateTreeSelectionHighlight(a);
                this._doUnfreezeSelection(a)
            };
            a.prototype.collapseAllChildren = function(a) {
                this._freezeExpansion || ($("#" + a + " .ui-modeltree-children").hide(), $("#" + a + " .ui-modeltree-visibility-children").hide(), $("#" + a + " .expanded").removeClass("expanded"))
            };
            a.prototype._expandChildren =
                function(a, b) {
                    var c = $("#" + a);
                    this.preloadChildrenIfNecessary(a);
                    if (!this._freezeExpansion || b) 0 < c.length && (c.children(".ui-modeltree-children").show(), c.children(".ui-modeltree-container").children(".ui-modeltree-expandNode").addClass("expanded")), this._expandVisibilityChildren(a)
                };
            a.prototype.expandChildren = function(a) {
                this._expandChildren(a, !1)
            };
            a.prototype._expandVisibilityChildren = function(a) {
                a = $("#visibility" + (this._separator + a));
                0 < a.length && (a = a.children(".ui-modeltree-visibility-children"),
                    a.addClass("visible"), a.show())
            };
            a.prototype.collapseChildren = function(a) {
                this._collapseVisibilityChildren(a);
                a = $("#" + a);
                0 < a.length && a.children(".ui-modeltree-children").hide()
            };
            a.prototype._collapseVisibilityChildren = function(a) {
                a = $("#visibility" + this._separator + a);
                0 < a.length && a.children(".ui-modeltree-visibility-children").hide()
            };
            a.prototype._buildNode = function(a, b, d, e, f, g) {
                void 0 === f && (f = !1);
                void 0 === g && (g = !1);
                var c = document.createElement("li");
                c.classList.add("ui-modeltree-item");
                f && c.classList.add("selected");
                g && c.classList.add("mixed");
                c.id = b;
                b = document.createElement("div");
                b.classList.add("ui-modeltree-container");
                b.style.whiteSpace = "nowrap";
                f = document.createElement("div");
                f.classList.add("ui-modeltree-expandNode");
                e || (f.style.visibility = "hidden");
                b.appendChild(f);
                e = document.createElement("div");
                e.classList.add("ui-modeltree-icon");
                e.classList.add(d);
                b.appendChild(e);
                d = document.createElement("div");
                d.classList.add("ui-modeltree-label");
                d.innerHTML = a;
                d.title = a;
                b.appendChild(d);
                a = document.createElement("div");
                a.classList.add("ui-mixedselection-icon");
                b.appendChild(a);
                c.appendChild(b);
                return c
            };
            a.prototype.childrenAreLoaded = function(a) {
                return this._childrenLoaded.has(a)
            };
            a.prototype.preloadChildrenIfNecessary = function(a) {
                null === a || this._childrenLoaded.has(a) || (this._triggerCallback("loadChildren", a), this._childrenLoaded.add(a))
            };
            a.prototype._processExpandClick = function(a) {
                a = jQuery(a.target);
                var c = a.parents(".ui-modeltree-item").get(0).id;
                a.hasClass("expanded") ? this._collapseListItem(c) : this._expandListItem(c)
            };
            a.prototype._collapseListItem = function(a) {
                this.collapseChildren(a);
                $("#" + a).find(".ui-modeltree-expandNode").first().removeClass("expanded");
                this._triggerCallback("collapse", a)
            };
            a.prototype._expandListItem = function(a) {
                this.expandChildren(a);
                $("#" + a).find(".ui-modeltree-expandNode").first().addClass("expanded");
                this._triggerCallback("expand", a)
            };
            a.prototype.selectItem = function(a, b) {
                void 0 === b && (b = !0);
                this._doSelection(a, b)
            };
            a.prototype._getListItem = function(a) {
                a = $(this._listRoot).find("#" + a);
                return 0 <
                    a.length ? a : null
            };
            a.prototype._updateNonSelectionHighlight = function(a) {
                void 0 !== this._$lastNonSelectionItem && this._$lastNonSelectionItem.removeClass("selected");
                a.addClass("selected");
                this._$lastNonSelectionItem = a
            };
            a.prototype._doUnfreezeSelection = function(a) {
                for (var c = 0; c < a.length; c++) {
                    var b = a[c],
                        d = this._viewer.model.getNodeParent(b),
                        e = this._getListItem("part" + g.ViewTree.separator + b);
                    null === e || e.hasClass("selected") ? null === e && this._futureHighlightIds.add(b) : (e.addClass("selected"), this._selectedPartItems.push(e));
                    null !== d && (e = g.LayersTree.getLayerPartId(d), null !== e && (e = this._getListItem(e), null === e || e.hasClass("selected") ? null === e && this._futureHighlightIds.add(d) : (e.addClass("selected"), this._selectedPartItems.push(e))), d = this._getListItem(g.TypesTree.getComponentPartId(d)), null === d || d.hasClass("selected") || (d.addClass("selected"), this._selectedPartItems.push(d)));
                    b = this._getListItem(g.TypesTree.getComponentPartId(b));
                    null === b || b.hasClass("selected") || (b.addClass("selected"), this._selectedPartItems.push(b))
                }
            };
            a.prototype._doSelection = function(a, b) {
                var c = this;
                void 0 === b && (b = !0);
                if (null !== a) {
                    var d = a.split(this._separator),
                        e = "part" === d[0],
                        h = "layerpart" === d[0],
                        l = "typespart" === d[0],
                        n = $("#" + a),
                        p = !1;
                    if (e || h || l) {
                        n.addClass("selected");
                        d = 0;
                        for (e = this._selectedPartItems; d < e.length; d++)
                            if (h = e[d].get(0), void 0 !== h && a === h.id) {
                                p = !0;
                                break
                            } p || this._selectedPartItems.push(n)
                    } else if (0 !== a.lastIndexOf("sheet", 0)) {
                        if (0 === a.lastIndexOf("container", 0) || d[0] === g.LayersTree.layerPartContainerPrefix) return;
                        this._updateNonSelectionHighlight(n)
                    }
                    b &&
                        (this._lastItemId = a, p = p && 1 === this._selectedPartItems.length, this._triggerCallback("selectItem", a, "undefined" !== typeof key && (key.ctrl || key.command) || p ? f.SelectionMode.Toggle : f.SelectionMode.Set));
                    this._lastItemId === a || this._freezeExpansion || b || this._scrollToItem(n)
                }
                this._lastItemId = a;
                this._selectionLabelHighlightTimer.set(30, function() {
                    var a = c._viewer.selectionManager.getResults().map(function(a) {
                        return a.getNodeId()
                    });
                    c._updateTreeSelectionHighlight(a)
                })
            };
            a.prototype._scrollToItem = function(a) {
                var c =
                    this;
                this._scrollTimer.set(10, function() {
                    var b = a.offset(),
                        d = $("#modelTreeContainer").innerHeight();
                    void 0 !== b && void 0 !== d && (b = b.top, 6 > b || b > d) && (c._scrollTimer.clear(), c._treeScroll && (c._treeScroll.refresh(), c._treeScroll.scrollToElement(a.get(0), f.DefaultTransitionDuration, !0, !0)))
                })
            };
            a.prototype._parseTaggedId = function(a) {
                var c = this._parseNodeId(a);
                if (null !== c) return new e(c);
                a = this._parseGuid(a);
                return null !== a ? new e(a) : null
            };
            a.prototype._parseNodeId = function(a) {
                a = a.split(this._separator);
                if (2 >
                    a.length || "measurement" === a[0] || "markupview" === a[0]) return null;
                a = a[a.length - 1];
                return void 0 === a || (a = parseInt(a, 10), isNaN(a)) ? null : a
            };
            a.prototype._parseGuid = function(a) {
                a = a.split(this._separator).pop();
                return void 0 !== a && 36 === a.length ? a : null
            };
            a.prototype._parseMeasurementId = function(a) {
                return a.split(this._separator).pop()
            };
            a.prototype._parseVisibilityLayerName = function(a) {
                a = a.split("" + g.ViewTree.visibilityPrefix + g.ViewTree.separator);
                return 2 !== a.length ? null : g.LayersTree.getLayerName(a[1])
            };
            a.prototype._parseVisibilityLayerNodeId =
                function(a) {
                    a = a.split("" + g.ViewTree.visibilityPrefix + g.ViewTree.separator);
                    return 2 !== a.length ? null : g.LayersTree.getPartId(a[1])
                };
            a.prototype._updateLayerTreeSelectionHighlight = function() {
                for (var a = this, b = 0, d = this._selectedLayers; b < d.length; b++) {
                    var e = d[b];
                    $("#" + g.LayersTree.getLayerId(e)).removeClass("selected")
                }
                this._mixedItemsLayer.forEach(function(c) {
                    c = a._viewer.model.getLayerName(c);
                    null !== c && $("#" + g.LayersTree.getLayerId(c)).addClass("mixed")
                });
                this._selectedLayers = this._viewer.selectionManager.getSelectedLayers();
                b = 0;
                for (d = this._selectedLayers; b < d.length; b++) e = d[b], $("#" + g.LayersTree.getLayerId(e)).addClass("selected"), $("#" + g.LayersTree.getLayerId(e)).removeClass("mixed")
            };
            a.prototype._addMixedTypeClass = function(a) {
                a = this._viewer.model.getNodeGenericType(a);
                return null === a || this._mixedTypes.has(a) ? !1 : ($("#" + g.TypesTree.getGenericTypeId(a)).addClass("mixed"), this._mixedTypes.add(a), !0)
            };
            a.prototype._updateTypesTreeSelectionHighlight = function() {
                for (var a = 0, b = this._selectedTypes; a < b.length; a++) {
                    var d = b[a];
                    $("#" +
                        g.TypesTree.getGenericTypeId(d)).removeClass("selected")
                }
                d = 0;
                for (a = this._futureMixedTypesIds; d < a.length; d++) b = a[d], this._addMixedTypeClass(b) || (b = this._viewer.model.getNodeParent(b), null !== b && this._addMixedTypeClass(b));
                this._selectedTypes = this._viewer.selectionManager.getSelectedTypes();
                a = 0;
                for (b = this._selectedTypes; a < b.length; a++) d = b[a], d = $("#" + g.TypesTree.getGenericTypeId(d)), d.addClass("selected"), d.removeClass("mixed")
            };
            a.prototype._updateTreeSelectionHighlight = function(a) {
                var c = this;
                this._futureHighlightIds.forEach(function(b) {
                    0 <=
                        a.indexOf(b) && c._futureHighlightIds.delete(b)
                });
                for (var b = 0, d = this._selectedItemsParentIds; b < d.length; b++) {
                    var e = d[b];
                    $("#part" + g.ViewTree.separator + e).removeClass("mixed")
                }
                this._selectedItemsParentIds.length = 0;
                this._futureMixedIds.clear();
                this._mixedItemsLayer.forEach(function(a) {
                    a = c._viewer.model.getLayerName(a);
                    null !== a && $("#" + g.LayersTree.getLayerId(a)).removeClass("mixed")
                });
                this._mixedItemsLayer.clear();
                this._mixedTypes.forEach(function(a) {
                    $("#" + g.TypesTree.getGenericTypeId(a)).removeClass("mixed")
                });
                this._mixedTypes.clear();
                this._futureMixedTypesIds = [];
                f.Internal.filterInPlace(this._selectedPartItems, function(b) {
                    b = b.get(0);
                    if (void 0 !== b) {
                        b = c._parseNodeId(b.id);
                        if (null === b) return !1;
                        if (0 > a.indexOf(b)) return $("#part" + g.ViewTree.separator + b).removeClass("selected"), $("#typespart" + g.ViewTree.separator + b).removeClass("selected"), (b = g.LayersTree.getLayerPartId(b)) && $("#" + b).removeClass("selected"), !1
                    }
                    return !0
                });
                for (b = 0; b < a.length; b++) e = a[b], this._updateParentIdList(e), this._updateMixedLayers(e), this._updateMixedTypes(e);
                b = 0;
                for (d = this._selectedItemsParentIds; b < d.length; b++) {
                    e = d[b];
                    var l = this._getListItem("part" + g.ViewTree.separator + e);
                    null === l || l.hasClass("mixed") ? this._futureMixedIds.add(e) : l.addClass("mixed")
                }
                this._updateLayerTreeSelectionHighlight();
                this._updateTypesTreeSelectionHighlight()
            };
            a.prototype._updateParentIdList = function(a) {
                var c = this._viewer.model;
                if (c.isNodeLoaded(a))
                    for (a = c.getNodeParent(a); null !== a && -1 === this._selectedItemsParentIds.indexOf(a);) this._selectedItemsParentIds.push(a), a = c.getNodeParent(a)
            };
            a.prototype._updateMixedLayers = function(a) {
                a = this._viewer.model.getNodeLayerId(a);
                null !== a && this._mixedItemsLayer.add(a)
            };
            a.prototype._updateMixedTypes = function(a) {
                this._futureMixedTypesIds.push(a)
            };
            a.prototype._processLabelContext = function(a, b) {
                var c = jQuery(a.target).closest(".ui-modeltree-item");
                b || (b = new f.Point2(a.clientX, a.clientY));
                a = c.get(0).id;
                this._triggerCallback("context", a, b)
            };
            a.prototype._processLabelClick = function(a) {
                a = jQuery(a.target).closest(".ui-modeltree-item");
                this._doSelection(a.get(0).id,
                    !0)
            };
            a.prototype.appendTopLevelElement = function(a, b, d, e, f, g) {
                void 0 === f && (f = !0);
                void 0 === g && (g = !1);
                null === a && (a = "unnamed");
                a = this._buildNode(a, b, d, e);
                "part" === b.substring(0, 4) && this._listRoot.firstChild ? this._listRoot.insertBefore(a, this._listRoot.firstChild) : this._listRoot.appendChild(a);
                d = this._buildPartVisibilityNode(b, d);
                null !== d && this._partVisibilityRoot.appendChild(d);
                f && this.preloadChildrenIfNecessary(b);
                g && this._childrenLoaded.add(b);
                return a
            };
            a.prototype.insertNodeAfter = function(a, b, d, e,
                f) {
                return this._insertNodeAfter(a, b, d, e, f)
            };
            a.prototype._insertNodeAfter = function(a, b, d, e, g) {
                null === a && (a = "unnamed");
                if (null === e.parentNode) throw new f.CommunicatorError("element.parentNode is null");
                a = this._buildNode(a, b, d, g);
                e.nextSibling ? e.parentNode.insertBefore(a, e.nextSibling) : e.parentNode.appendChild(a);
                this.preloadChildrenIfNecessary(b);
                return a
            };
            a.prototype.clear = function() {
                for (; this._listRoot.firstChild;) this._listRoot.removeChild(this._listRoot.firstChild);
                for (; this._partVisibilityRoot.firstChild;) this._partVisibilityRoot.removeChild(this._partVisibilityRoot.firstChild);
                this._childrenLoaded.clear();
                this._loadedNodes.clear()
            };
            a.prototype.expandInitialNodes = function(a) {
                for (var b = []; 1 >= b.length;) {
                    b = this._getChildItemsFromModelTreeItem($("#" + a));
                    if (0 === b.length) break;
                    this._expandChildren(a, !0);
                    a = b[0].id;
                    this.preloadChildrenIfNecessary(a)
                }
            };
            a.prototype._processVisibilityClick = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b;
                    return __generator(this, function(c) {
                        b = a.split(this._separator)[1];
                        switch (b) {
                            case "part":
                                return [2, this._processPartVisibilityClick(a)];
                            case "measurement":
                                return [2, this._processMeasurementVisibilityClick(a)];
                            case "layer":
                                return [2, this._processLayerVisibilityClick(a)];
                            case "layerpart":
                                return [2, this._processLayerPartVisibilityClick(a)];
                            case "types":
                                return [2, this._processTypesVisibilityClick(a)];
                            case "typespart":
                                return [2, this._processTypesPartVisibilityClick(a)]
                        }
                        return [2]
                    })
                })
            };
            a.prototype._processPartVisibilityClick = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return b =
                                    this._parseNodeId(a), null === b ? [3, 2] : [4, this._processPartVisibility(b)];
                            case 1:
                                c.sent(), c.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            a.prototype._processPartVisibility = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b, c, d;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return b = this._viewer.model, c = b.getNodeVisibility(a), d = b._hasEffectiveGenericType(a, f.StaticGenericType.IfcSpace), [4, b.setNodesVisibility([a], !c, d ? !1 : null)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            };
            a.prototype._processMeasurementVisibilityClick =
                function(a) {
                    var b = this._parseMeasurementId(a);
                    a = this._viewer.measureManager.getAllMeasurements();
                    if ("measurementitems" === b) {
                        var c = !0;
                        for (b = 0; b < a.length; b++) {
                            var d = a[b];
                            if (d.getVisibility()) {
                                c = !1;
                                break
                            }
                        }
                        for (b = 0; b < a.length; b++) d = a[b], d.setVisibility(c)
                    } else
                        for (var e = 0; e < a.length; e++) d = a[e], b === d._getId() && (c = d.getVisibility(), d.setVisibility(!c))
                };
            a.prototype._processTypesVisibilityClick = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return b =
                                    a.split(this._separator).pop(), void 0 === b ? [2] : [4, this._processTypesVisibility(b)];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            };
            a.prototype._processTypesVisibility = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b, c, d, e;
                    return __generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                b = this._viewer.model;
                                c = !1;
                                d = b.getNodesByGenericType(a);
                                if (null === d) return [3, 2];
                                e = [];
                                d.forEach(function(a) {
                                    c = c || b.getNodeVisibility(a);
                                    e.push(a)
                                });
                                return [4, b.setNodesVisibility(e, !c, a === f.StaticGenericType.IfcSpace ? !1 : null)];
                            case 1:
                                h.sent(), this.updateTypesVisibilityIcons(), h.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            a.prototype._processTypesPartVisibilityClick = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return b = this._parseNodeId(a), null === b ? [2] : [4, this._processTypesPartVisibility(b)];
                            case 1:
                                return c.sent(), [2]
                        }
                    })
                })
            };
            a.prototype._processTypesPartVisibility = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b, c, d;
                    return __generator(this,
                        function(e) {
                            switch (e.label) {
                                case 0:
                                    return b = this._viewer.model, [4, b.getNodeVisibility(a)];
                                case 1:
                                    return c = e.sent(), d = b._hasEffectiveGenericType(a, f.StaticGenericType.IfcSpace), [4, b.setNodesVisibility([a], !c, d ? !1 : null)];
                                case 2:
                                    return e.sent(), [2]
                            }
                        })
                })
            };
            a.prototype.updateTypesVisibilityIcons = function() {
                var a = this._viewer.model;
                a.getGenericTypeIdMap().forEach(function(b, c) {
                    var d = !1,
                        e = !1;
                    b.forEach(function(b) {
                        var c = $("#visibility" + g.ViewTree.separator + g.TypesTree.getComponentPartId(b));
                        c.removeClass("partHidden");
                        a.getNodeVisibility(b) ? e = !0 : (d = !0, c.addClass("partHidden"))
                    });
                    b = $("#visibility" + g.ViewTree.separator + g.TypesTree.getGenericTypeId(c));
                    b.removeClass(["partHidden", "partialHidden"]);
                    d && e ? b.addClass("partialHidden") : d && b.addClass("partHidden")
                })
            };
            a.prototype._processLayerVisibilityClick = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b, c, d, e;
                    return __generator(this, function(h) {
                        switch (h.label) {
                            case 0:
                                b = this._parseVisibilityLayerName(a);
                                if (!b) return [2];
                                c = !1;
                                d = this._viewer.model.getNodesFromLayerName(b,
                                    !0);
                                if (null === d) return [3, 2];
                                for (e = 0; e < d.length && !(c = c || this._viewer.model.getNodeVisibility(d[e])); ++e);
                                f._filterActiveSheetNodeIds(this._viewer, d);
                                return 0 < d.length ? [4, this._viewer.model.setNodesVisibility(d, !c, null)] : [3, 2];
                            case 1:
                                h.sent(), h.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            a.prototype._processLayerPartVisibilityClick = function(a) {
                return __awaiter(this, void 0, void 0, function() {
                    var b, c, d;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                b = this._parseVisibilityLayerNodeId(a);
                                if (null === b) return [3,
                                    2
                                ];
                                c = this._viewer.model.getNodeVisibility(b);
                                d = [b];
                                f._filterActiveSheetNodeIds(this._viewer, d);
                                return 0 < d.length ? [4, this._viewer.model.setNodesVisibility(d, !c, null)] : [3, 2];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            a.prototype.updateLayersVisibilityIcons = function() {
                var a = this;
                this._viewer.model.getUniqueLayerNames().forEach(function(b) {
                    var c = a._viewer.model.getNodesFromLayerName(b, !0);
                    if (null !== c) {
                        for (var d = !1, e = !1, f = 0; f < c.length; ++f) {
                            var h = c[f];
                            a._viewer.model.isDrawing() || (h = a._viewer.model.getNodeParent(c[f]));
                            null !== h && (h = $("#visibility" + g.ViewTree.separator + g.LayersTree.getLayerPartId(h)), h.removeClass("partHidden"), a._viewer.model.getNodeVisibility(c[f]) ? e = !0 : (d = !0, h.addClass("partHidden")))
                        }
                        b = $("#visibility" + g.ViewTree.separator + g.LayersTree.getLayerId(b));
                        b.removeClass(["partHidden", "partialHidden"]);
                        d && e ? b.addClass("partialHidden") : d && b.addClass("partHidden")
                    }
                })
            };
            a.prototype.updateMeasurementVisibilityIcons = function() {
                for (var a = this._viewer.measureManager.getAllMeasurements(), b = 0, d = 0; d < a.length; d++) {
                    var e =
                        a[d],
                        f = e.getVisibility();
                    e = $("#visibility" + g.ViewTree.separator + "measurement" + g.ViewTree.separator + e._getId());
                    f ? e.removeClass("partHidden") : (b++, e.addClass("partHidden"))
                }
                d = $("#visibility" + g.ViewTree.separator + "measurementitems");
                b === a.length ? (d.removeClass("partialHidden"), d.addClass("partHidden")) : 0 < b && b < a.length ? (d.removeClass("partHidden"), d.addClass("partialHidden")) : (d.removeClass("partialHidden"), d.removeClass("partHidden"));
                this._viewer.markupManager.updateLater()
            };
            a.prototype._init = function() {
                var a =
                    this,
                    b = document.getElementById(this._elementId);
                if (null === b) throw new f.CommunicatorError("container is null");
                this._partVisibilityRoot.classList.add("ui-visibility-toggle");
                b.appendChild(this._partVisibilityRoot);
                this._listRoot.classList.add("ui-modeltree");
                this._listRoot.classList.add("ui-modeltree-item");
                b.appendChild(this._listRoot);
                $(b).on("click", ".ui-modeltree-label", function(b) {
                    a._processLabelClick(b)
                });
                $(b).on("click", ".ui-modeltree-expandNode", function(b) {
                    a._processExpandClick(b)
                });
                $(b).on("click",
                    ".ui-modeltree-partVisibility-icon",
                    function(b) {
                        return __awaiter(a, void 0, void 0, function() {
                            var a, c, d;
                            return __generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return a = jQuery(b.target), c = a.closest(".ui-modeltree-item"), d = c[0].id, [4, this._processVisibilityClick(d)];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        })
                    });
                $(b).on("click", "#contextMenuButton", function(b) {
                    a._processLabelContext(b)
                });
                $(b).on("mouseup", ".ui-modeltree-label, .ui-modeltree-icon", function(b) {
                    3 === b.which && a._processLabelContext(b)
                });
                $(b).on("touchstart",
                    function(b) {
                        a._touchTimer.set(1E3, function() {
                            var c = b.originalEvent;
                            c = new f.Point2(c.touches[0].pageX, c.touches[0].pageY);
                            a._processLabelContext(b, c)
                        })
                    });
                $(b).on("touchmove", function(b) {
                    a._touchTimer.clear()
                });
                $(b).on("touchend", function(b) {
                    a._touchTimer.clear()
                });
                $(b).on("contextmenu", ".ui-modeltree-label", function(a) {
                    a.preventDefault()
                })
            };
            a.prototype._getChildItemsFromModelTreeItem = function(a) {
                a = a.children(".ui-modeltree-children").children(".ui-modeltree-item");
                return $.makeArray(a)
            };
            return a
        }();
        l.TreeControl = a
    })(g.Control || (g.Control = {}))
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));
(function(f) {
(function(g) {
    var l = function(e) {
        function d(a, b, c) {
            a = e.call(this, a, b, c) || this;
            a._initEvents();
            return a
        }
        __extends(d, e);
        d.prototype._initEvents = function() {
            var a = this,
                b = function() {
                    return a._onNewModel()
                };
            this._viewer.setCallbacks({
                modelStructureReady: b,
                modelLoaded: b,
                selectionArray: function(b) {
                    a._tree.updateSelection(b)
                },
                visibilityChanged: function() {
                    a._tree.updateTypesVisibilityIcons()
                }
            });
            this._tree.registerCallback("selectItem", function(b, d) {
                a._onTreeSelectItem(b, d)
            })
        };
        d.prototype._onTreeSelectItem =
            function(a, b) {
                void 0 === b && (b = f.SelectionMode.Set);
                null !== document.getElementById(a) && (a = this._splitHtmlId(a)[1], "IFC" === a.substr(0, 3) ? this._selectIfcComponent(a, b) : this._viewer.selectPart(parseInt(a, 10), b))
            };
        d.prototype._selectIfcComponent = function(a, b) {
            this._viewer.selectionManager.selectType(a, b)
        };
        d.prototype._onNewModel = function() {
            return __awaiter(this, void 0, void 0, function() {
                var a, b = this;
                return __generator(this, function(c) {
                    a = this._viewer.model;
                    this._tree.clear();
                    this._ifcNodesMap = a.getGenericTypeIdMap();
                    this._ifcNodesMap.forEach(function(c, e) {
                        var f = d.getGenericTypeId(e),
                            h = "assembly",
                            l = !0;
                        b._tree.appendTopLevelElement(e, f, h, l);
                        h = "part";
                        l = !1;
                        c.forEach(function(c) {
                            var e = d.getComponentPartId(c);
                            c = a.getNodeName(c);
                            b._tree.addChild(c, e, f, h, l, g.Desktop.Tree.Types)
                        })
                    });
                    0 === this._ifcNodesMap.size ? this.hideTab() : this.showTab();
                    return [2]
                })
            })
        };
        d.getComponentPartId = function(a) {
            return "typespart" + g.ViewTree.separator + a
        };
        d.getGenericTypeId = function(a) {
            return "types" + g.ViewTree.separator + a
        };
        return d
    }(g.ViewTree);
    g.TypesTree = l
})(f.Ui || (f.Ui = {}))
})(Communicator || (Communicator = {}));