/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_block_js__ = __webpack_require__(/*! ./container/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__container_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9jb250YWluZXIvYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** ./src/container/block.js ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var el = wp.element.createElement,\n    Fragment = wp.element.Fragment,\n    registerBlockType = wp.blocks.registerBlockType,\n    BlockControls = wp.editor.BlockControls,\n    AlignmentToolbar = wp.editor.AlignmentToolbar,\n    InnerBlocks = wp.editor.InnerBlocks,\n    TextControl = wp.components.TextControl,\n    ToggleControl = wp.components.ToggleControl,\n    InspectorControls = wp.editor.InspectorControls,\n    createBlock = wp.blocks.createBlock,\n    getBlockAttributes = wp.blocks.getBlockAttributes,\n    getBlockType = wp.blocks.getBlockType,\n    PanelBody = wp.components.PanelBody;\n\nregisterBlockType('svbk/container', {\n\ttitle: 'Container',\n\n\ticon: 'universal-access-alt',\n\n\tcategory: 'layout',\n\n\tattributes: {\n\t\thtmlId: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: 'section',\n\t\t\tattribute: 'id'\n\t\t},\n\t\twrap: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: false\n\t\t}\n\t},\n\n\t// transforms: {\n\t// \tfrom: [\n\t// \t\t{\n\t// \t\t\ttype: 'raw',\n\t// \t\t\tpriority: 5,\n\t// \t\t\tschema: {\n\t// \t\t\t\tsection: { }\n\t// \t\t\t},\n\t// \t\t\ttransform: ( node ) => {\n\t// \t\t\t\tconsole.log(node);\n\n\t// \t\t\t\tconst className = node.className;\n\t// \t\t\t\tconst blockType = getBlockType( 'svbk/container' );\n\t// \t\t\t\tconst attributes = getBlockAttributes( blockType, node.outerHTML, {} );\n\t// \t\t\t\treturn createBlock( 'core/container', attributes );\n\t// \t\t\t},\n\t// \t\t}\n\t// \t]\n\t// },\n\n\tedit: function edit(props) {\n\t\tvar wrap = props.attributes.wrap,\n\t\t    htmlId = props.attributes.htmlId;\n\n\t\tfunction onChangeWrap(hasWrapper) {\n\t\t\tprops.setAttributes({ wrap: hasWrapper });\n\t\t}\n\n\t\tfunction onChangeHtmlId(newId) {\n\t\t\tprops.setAttributes({ htmlId: newId });\n\t\t}\n\n\t\treturn el(Fragment, null, el(InspectorControls, null, el(PanelBody, null, el(ToggleControl, {\n\t\t\tlabel: \"Wrap contents\",\n\t\t\tchecked: wrap,\n\t\t\tonChange: onChangeWrap\n\t\t}), el(TextControl, {\n\t\t\tlabel: \"HTML ID\",\n\t\t\ttype: \"text\",\n\t\t\tvalue: htmlId,\n\t\t\tonChange: onChangeHtmlId,\n\t\t\tmin: 1,\n\t\t\tmax: 6\n\t\t}))), el('section', {\n\t\t\tclassName: props.className,\n\t\t\tid: htmlId\n\t\t}, wrap ? el('div', {\n\t\t\tclassName: 'content-wrapper'\n\t\t}, el(InnerBlocks)) : el(InnerBlocks)));\n\t},\n\n\tsave: function save(props) {\n\t\tvar wrap = props.attributes.wrap,\n\t\t    htmlId = props.attributes.htmlId;\n\n\t\treturn el('section', {\n\t\t\tclassName: props.className,\n\t\t\tid: htmlId\n\t\t}, wrap ? el('div', {\n\t\t\tclassName: 'content-wrapper',\n\t\t\tid: htmlId\n\t\t}, el(InnerBlocks.Content)) : el(InnerBlocks.Content));\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvYmxvY2suanM/YTE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQsXG4gICAgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50LFxuICAgIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlLFxuICAgIEJsb2NrQ29udHJvbHMgPSB3cC5lZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBBbGlnbm1lbnRUb29sYmFyID0gd3AuZWRpdG9yLkFsaWdubWVudFRvb2xiYXIsXG4gICAgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3MsXG4gICAgVGV4dENvbnRyb2wgPSB3cC5jb21wb25lbnRzLlRleHRDb250cm9sLFxuICAgIFRvZ2dsZUNvbnRyb2wgPSB3cC5jb21wb25lbnRzLlRvZ2dsZUNvbnRyb2wsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSB3cC5lZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgY3JlYXRlQmxvY2sgPSB3cC5ibG9ja3MuY3JlYXRlQmxvY2ssXG4gICAgZ2V0QmxvY2tBdHRyaWJ1dGVzID0gd3AuYmxvY2tzLmdldEJsb2NrQXR0cmlidXRlcyxcbiAgICBnZXRCbG9ja1R5cGUgPSB3cC5ibG9ja3MuZ2V0QmxvY2tUeXBlLFxuICAgIFBhbmVsQm9keSA9IHdwLmNvbXBvbmVudHMuUGFuZWxCb2R5O1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnc3Ziay9jb250YWluZXInLCB7XG5cdHRpdGxlOiAnQ29udGFpbmVyJyxcblxuXHRpY29uOiAndW5pdmVyc2FsLWFjY2Vzcy1hbHQnLFxuXG5cdGNhdGVnb3J5OiAnbGF5b3V0JyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aHRtbElkOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsXG5cdFx0XHRzZWxlY3RvcjogJ3NlY3Rpb24nLFxuXHRcdFx0YXR0cmlidXRlOiAnaWQnXG5cdFx0fSxcblx0XHR3cmFwOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH1cblx0fSxcblxuXHQvLyB0cmFuc2Zvcm1zOiB7XG5cdC8vIFx0ZnJvbTogW1xuXHQvLyBcdFx0e1xuXHQvLyBcdFx0XHR0eXBlOiAncmF3Jyxcblx0Ly8gXHRcdFx0cHJpb3JpdHk6IDUsXG5cdC8vIFx0XHRcdHNjaGVtYToge1xuXHQvLyBcdFx0XHRcdHNlY3Rpb246IHsgfVxuXHQvLyBcdFx0XHR9LFxuXHQvLyBcdFx0XHR0cmFuc2Zvcm06ICggbm9kZSApID0+IHtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZyhub2RlKTtcblxuXHQvLyBcdFx0XHRcdGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lO1xuXHQvLyBcdFx0XHRcdGNvbnN0IGJsb2NrVHlwZSA9IGdldEJsb2NrVHlwZSggJ3N2YmsvY29udGFpbmVyJyApO1xuXHQvLyBcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBnZXRCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrVHlwZSwgbm9kZS5vdXRlckhUTUwsIHt9ICk7XG5cdC8vIFx0XHRcdFx0cmV0dXJuIGNyZWF0ZUJsb2NrKCAnY29yZS9jb250YWluZXInLCBhdHRyaWJ1dGVzICk7XG5cdC8vIFx0XHRcdH0sXG5cdC8vIFx0XHR9XG5cdC8vIFx0XVxuXHQvLyB9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgd3JhcCA9IHByb3BzLmF0dHJpYnV0ZXMud3JhcCxcblx0XHQgICAgaHRtbElkID0gcHJvcHMuYXR0cmlidXRlcy5odG1sSWQ7XG5cblx0XHRmdW5jdGlvbiBvbkNoYW5nZVdyYXAoaGFzV3JhcHBlcikge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IHdyYXA6IGhhc1dyYXBwZXIgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VIdG1sSWQobmV3SWQpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBodG1sSWQ6IG5ld0lkIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbChGcmFnbWVudCwgbnVsbCwgZWwoSW5zcGVjdG9yQ29udHJvbHMsIG51bGwsIGVsKFBhbmVsQm9keSwgbnVsbCwgZWwoVG9nZ2xlQ29udHJvbCwge1xuXHRcdFx0bGFiZWw6IFwiV3JhcCBjb250ZW50c1wiLFxuXHRcdFx0Y2hlY2tlZDogd3JhcCxcblx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZVdyYXBcblx0XHR9KSwgZWwoVGV4dENvbnRyb2wsIHtcblx0XHRcdGxhYmVsOiBcIkhUTUwgSURcIixcblx0XHRcdHR5cGU6IFwidGV4dFwiLFxuXHRcdFx0dmFsdWU6IGh0bWxJZCxcblx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUh0bWxJZCxcblx0XHRcdG1pbjogMSxcblx0XHRcdG1heDogNlxuXHRcdH0pKSksIGVsKCdzZWN0aW9uJywge1xuXHRcdFx0Y2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG5cdFx0XHRpZDogaHRtbElkXG5cdFx0fSwgd3JhcCA/IGVsKCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWU6ICdjb250ZW50LXdyYXBwZXInXG5cdFx0fSwgZWwoSW5uZXJCbG9ja3MpKSA6IGVsKElubmVyQmxvY2tzKSkpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgd3JhcCA9IHByb3BzLmF0dHJpYnV0ZXMud3JhcCxcblx0XHQgICAgaHRtbElkID0gcHJvcHMuYXR0cmlidXRlcy5odG1sSWQ7XG5cblx0XHRyZXR1cm4gZWwoJ3NlY3Rpb24nLCB7XG5cdFx0XHRjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcblx0XHRcdGlkOiBodG1sSWRcblx0XHR9LCB3cmFwID8gZWwoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZTogJ2NvbnRlbnQtd3JhcHBlcicsXG5cdFx0XHRpZDogaHRtbElkXG5cdFx0fSwgZWwoSW5uZXJCbG9ja3MuQ29udGVudCkpIDogZWwoSW5uZXJCbG9ja3MuQ29udGVudCkpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXIvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);