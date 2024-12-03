(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeCompoundDragAndDrop"] = factory();
	else
		root["cytoscapeCompoundDragAndDrop"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 658:
/***/ ((module) => {

// Simple, internal Object.assign() polyfill for options objects etc.
module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
  }

  srcs.filter(function (src) {
    return src != null;
  }).forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });
  return tgt;
};

/***/ }),

/***/ 738:
/***/ ((module) => {

/* eslint-disable no-unused-vars */
module.exports = {
  grabbedNode: function grabbedNode(node) {
    return true;
  },
  // filter function to specify which nodes are valid to grab and drop into other nodes
  dropTarget: function dropTarget(_dropTarget, grabbedNode) {
    return true;
  },
  // filter function to specify which parent nodes are valid drop targets
  dropSibling: function dropSibling(_dropSibling, grabbedNode) {
    return true;
  },
  // filter function to specify which orphan nodes are valid drop siblings
  newParentNode: function newParentNode(grabbedNode, dropSibling) {
    return {};
  },
  // specifies element json for parent nodes added by dropping an orphan node on another orphan (a drop sibling)
  boundingBoxOptions: {
    // same as https://js.cytoscape.org/#eles.boundingBox, used when calculating if one node is dragged over another
    includeOverlays: false,
    includeLabels: true
  },
  overThreshold: 10,
  // make dragging over a drop target easier by expanding the hit area by this amount on all sides
  outThreshold: 10 // make dragging out of a drop target a bit harder by expanding the hit area by this amount on all sides

};

/***/ }),

/***/ 904:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assign = __webpack_require__(658);

var defaults = __webpack_require__(738);

var toggle = __webpack_require__(43);

var listeners = __webpack_require__(444);

var DragAndDrop = function DragAndDrop(cy, options) {
  this.cy = cy;
  this.options = assign({}, defaults, options);
  this.listeners = [];
  this.enabled = true;
  this.addListeners();
};

var destroy = function destroy() {
  this.removeListeners();
};

[toggle, listeners, {
  destroy: destroy
}].forEach(function (def) {
  assign(DragAndDrop.prototype, def);
});

module.exports = function (options) {
  var cy = this;
  return new DragAndDrop(cy, options);
};

/***/ }),

/***/ 444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(235),
    isParent = _require.isParent,
    isChild = _require.isChild,
    isOnlyChild = _require.isOnlyChild,
    getBounds = _require.getBounds,
    getBoundsTuple = _require.getBoundsTuple,
    boundsOverlap = _require.boundsOverlap,
    expandBounds = _require.expandBounds,
    getBoundsCopy = _require.getBoundsCopy,
    setParent = _require.setParent,
    removeParent = _require.removeParent;

var addListener = function addListener(event, selector, callback) {
  this.listeners.push({
    event: event,
    selector: selector,
    callback: callback
  });

  if (selector == null) {
    this.cy.on(event, callback);
  } else {
    this.cy.on(event, selector, callback);
  }
};

var addListeners = function addListeners() {
  var _this = this;

  var options = this.options,
      cy = this.cy;

  var isMultiplySelected = function isMultiplySelected(n) {
    return n.selected() && cy.elements('node:selected').length > 1;
  };

  var canBeGrabbed = function canBeGrabbed(n) {
    return !isParent(n) && !isMultiplySelected(n) && options.grabbedNode(n);
  };

  var canBeDropTarget = function canBeDropTarget(n) {
    return !isChild(n) && !n.same(_this.grabbedNode) && options.dropTarget(n, _this.grabbedNode);
  };

  var canBeDropSibling = function canBeDropSibling(n) {
    return isChild(n) && !n.same(_this.grabbedNode) && options.dropSibling(n, _this.grabbedNode);
  };

  var canPullFromParent = function canPullFromParent(n) {
    return isChild(n);
  };

  var getBoundTuplesNode = function getBoundTuplesNode(n) {
    return getBoundsTuple(n, options.boundingBoxOptions);
  };

  var canBeInBoundsTuple = function canBeInBoundsTuple(n) {
    return (canBeDropTarget(n) || canBeDropSibling(n)) && !n.same(_this.dropTarget);
  };

  var updateBoundsTuples = function updateBoundsTuples() {
    return _this.boundsTuples = cy.nodes(canBeInBoundsTuple).map(getBoundTuplesNode);
  };

  var reset = function reset() {
    _this.grabbedNode.removeClass('cdnd-grabbed-node');

    _this.dropTarget.removeClass('cdnd-drop-target');

    _this.dropSibling.removeClass('cdnd-drop-sibling');

    _this.grabbedNode = cy.collection();
    _this.dropTarget = cy.collection();
    _this.dropSibling = cy.collection();
    _this.dropTargetBounds = null;
    _this.boundsTuples = [];
    _this.inGesture = false;
  };

  this.addListener('grab', 'node', function (e) {
    var node = e.target;

    if (!_this.enabled || !canBeGrabbed(node)) {
      return;
    }

    _this.inGesture = true;
    _this.grabbedNode = node;
    _this.dropTarget = cy.collection();
    _this.dropSibling = cy.collection();

    if (canPullFromParent(node)) {
      _this.dropTarget = node.parent();
      _this.dropTargetBounds = getBoundsCopy(_this.dropTarget, options.boundingBoxOptions);
    }

    updateBoundsTuples();

    _this.grabbedNode.addClass('cdnd-grabbed-node');

    _this.dropTarget.addClass('cdnd-drop-target');

    node.emit('cdndgrab');
  });
  this.addListener('add', 'node', function (e) {
    if (!_this.inGesture || !_this.enabled) {
      return;
    }

    var newNode = e.target;

    if (canBeInBoundsTuple(newNode)) {
      _this.boundsTuples.push(getBoundsTuple(newNode, options.boundingBoxOptions));
    }
  });
  this.addListener('remove', 'node', function (e) {
    if (!_this.inGesture || !_this.enabled) {
      return;
    }

    var rmedNode = e.target;
    var rmedIsTarget = rmedNode.same(_this.dropTarget);
    var rmedIsSibling = rmedNode.same(_this.dropSibling);
    var rmedIsGrabbed = rmedNode.same(_this.grabbedNode); // try to clean things up if one of the drop nodes is removed

    if (rmedIsTarget || rmedIsSibling || rmedIsGrabbed) {
      if (rmedIsGrabbed) {
        reset();
      } else {
        _this.dropTarget = cy.collection();
        _this.dropSibling = cy.collection();
        updateBoundsTuples();
      }
    }
  });
  this.addListener('drag', 'node', function () {
    if (!_this.inGesture || !_this.enabled) {
      return;
    }

    if (_this.dropTarget.nonempty()) {
      // already in a parent
      var bb = expandBounds(getBounds(_this.grabbedNode, options.boundingBoxOptions), options.outThreshold);
      var parent = _this.dropTarget;
      var sibling = _this.dropSibling;
      var rmFromParent = !boundsOverlap(_this.dropTargetBounds, bb);
      var grabbedIsOnlyChild = isOnlyChild(_this.grabbedNode);

      if (rmFromParent) {
        removeParent(_this.grabbedNode);
        removeParent(_this.dropSibling);

        _this.dropTarget.removeClass('cdnd-drop-target');

        _this.dropSibling.removeClass('cdnd-drop-sibling');

        if (_this.dropSibling.nonempty() // remove extension-created parents on out
        || grabbedIsOnlyChild // remove empty parents
        ) {
          _this.dropTarget.remove();
        }

        _this.dropTarget = cy.collection();
        _this.dropSibling = cy.collection();
        _this.dropTargetBounds = null;
        updateBoundsTuples();

        _this.grabbedNode.emit('cdndout', [parent, sibling]);
      }
    } else {
      // not in a parent
      var _bb = expandBounds(getBounds(_this.grabbedNode, options.boundingBoxOptions), options.overThreshold);

      var tupleOverlaps = function tupleOverlaps(t) {
        return !t.node.removed() && boundsOverlap(_bb, t.bb);
      };

      var overlappingNodes = _this.boundsTuples.filter(tupleOverlaps).map(function (t) {
        return t.node;
      });

      if (overlappingNodes.length > 0) {
        // potential parent
        var overlappingParents = overlappingNodes.filter(isParent);

        var _parent, _sibling;

        if (overlappingParents.length > 0) {
          _sibling = cy.collection();
          _parent = overlappingParents[0]; // TODO maybe use a metric here to select which one
        } else {
          _sibling = overlappingNodes[0]; // TODO maybe use a metric here to select which one

          _parent = cy.add(options.newParentNode(_this.grabbedNode, _sibling));
        }

        _parent.addClass('cdnd-drop-target');

        _sibling.addClass('cdnd-drop-sibling');

        setParent(_sibling, _parent);
        _this.dropTargetBounds = getBoundsCopy(_parent, options.boundingBoxOptions);
        setParent(_this.grabbedNode, _parent);
        _this.dropTarget = _parent;
        _this.dropSibling = _sibling;

        _this.grabbedNode.emit('cdndover', [_parent, _sibling]);
      }
    }
  });
  this.addListener('free', 'node', function () {
    if (!_this.inGesture || !_this.enabled) {
      return;
    }

    var grabbedNode = _this.grabbedNode,
        dropTarget = _this.dropTarget,
        dropSibling = _this.dropSibling;
    reset();
    grabbedNode.emit('cdnddrop', [dropTarget, dropSibling]);
  });
};

var removeListeners = function removeListeners() {
  var cy = this.cy;
  this.listeners.forEach(function (lis) {
    var event = lis.event,
        selector = lis.selector,
        callback = lis.callback;

    if (selector == null) {
      cy.removeListener(event, callback);
    } else {
      cy.removeListener(event, selector, callback);
    }
  });
  this.listeners = [];
};

module.exports = {
  addListener: addListener,
  addListeners: addListeners,
  removeListeners: removeListeners
};

/***/ }),

/***/ 43:
/***/ ((module) => {

function enable() {
  this.enabled = true;
}

function disable() {
  this.enabled = false;
}

module.exports = {
  enable: enable,
  disable: disable
};

/***/ }),

/***/ 235:
/***/ ((module) => {

var isParent = function isParent(n) {
  return n.isParent();
};

var isChild = function isChild(n) {
  return n.isChild();
};

var isOnlyChild = function isOnlyChild(n) {
  return isChild(n) && n.parent().children().length === 1;
};

var getBounds = function getBounds(n, boundingBoxOptions) {
  return n.boundingBox(boundingBoxOptions);
};

var getBoundsTuple = function getBoundsTuple(n, boundingBoxOptions) {
  return {
    node: n,
    bb: copyBounds(getBounds(n, boundingBoxOptions))
  };
};

var copyBounds = function copyBounds(bb) {
  return {
    x1: bb.x1,
    x2: bb.x2,
    y1: bb.y1,
    y2: bb.y2,
    w: bb.w,
    h: bb.h
  };
};

var getBoundsCopy = function getBoundsCopy(n, boundingBoxOptions) {
  return copyBounds(getBounds(n, boundingBoxOptions));
};

var removeParent = function removeParent(n) {
  return n.move({
    parent: null
  });
};

var setParent = function setParent(n, parent) {
  return n.move({
    parent: parent.id()
  });
};

var boundsOverlap = function boundsOverlap(bb1, bb2) {
  // case: one bb to right of other
  if (bb1.x1 > bb2.x2) {
    return false;
  }

  if (bb2.x1 > bb1.x2) {
    return false;
  } // case: one bb to left of other


  if (bb1.x2 < bb2.x1) {
    return false;
  }

  if (bb2.x2 < bb1.x1) {
    return false;
  } // case: one bb above other


  if (bb1.y2 < bb2.y1) {
    return false;
  }

  if (bb2.y2 < bb1.y1) {
    return false;
  } // case: one bb below other


  if (bb1.y1 > bb2.y2) {
    return false;
  }

  if (bb2.y1 > bb1.y2) {
    return false;
  } // otherwise, must have some overlap


  return true;
};

var expandBounds = function expandBounds(bb, padding) {
  return {
    x1: bb.x1 - padding,
    x2: bb.x2 + padding,
    w: bb.w + 2 * padding,
    y1: bb.y1 - padding,
    y2: bb.y2 + padding,
    h: bb.h + 2 * padding
  };
};

module.exports = {
  isParent: isParent,
  isChild: isChild,
  isOnlyChild: isOnlyChild,
  getBoundsTuple: getBoundsTuple,
  boundsOverlap: boundsOverlap,
  getBounds: getBounds,
  expandBounds: expandBounds,
  copyBounds: copyBounds,
  getBoundsCopy: getBoundsCopy,
  removeParent: removeParent,
  setParent: setParent
};

/***/ }),

/***/ 579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var impl = __webpack_require__(904); // registers the extension on a cytoscape lib ref


var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified


  cytoscape('core', 'compoundDragAndDrop', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(579);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});