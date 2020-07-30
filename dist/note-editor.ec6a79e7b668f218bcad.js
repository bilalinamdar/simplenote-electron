(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7],{1255:function(e,t,n){"use strict";n.r(t),n.d(t,"NoteEditor",(function(){return Fe}));var o=n(0),r=n.n(o),i=n(127),a=n(1163),c=n(4),u=n(317),s=n(158),l=Object(i.b)(null,(function(e){return{openShareDialog:function(){return e(Object(s.showDialog)("SHARE"))}}}))((function(e){var t=e.openShareDialog;return r.a.createElement("div",{className:"tag-email-tooltip"},r.a.createElement("div",{className:"tag-email-tooltip__arrow"}),r.a.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",r.a.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))})),f=n(8),d=n.n(f),p=function(e){var t=e.onSelect,n=e.selected,o=e.tagName;return r.a.createElement("div",{className:d()("tag-chip",{selected:n}),"data-tag-name":o,onClick:t},o)};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=T(e);if(t){var r=T(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,o,i=w(a);function a(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return m(this,a),O(E(e=i.call.apply(i,[this].concat(n))),"inputField",void 0),O(E(e),"inputObserver",void 0),O(E(e),"state",{isComposing:!1}),O(E(e),"completeSuggestion",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.identity,n=e.props,o=n.onChange,r=n.note,i=n.tags,a=n.value;if(a.length){var u,s=null,l=v(i.values());try{for(l.s();!(u=l.n()).done;){var f=u.value;if(!r.tags.includes(f.name)&&f.name.startsWith(a)){s=f.name;break}}}catch(e){l.e(e)}finally{l.f()}s&&o(s,(function(){t(s),e.focusInput()}))}})),O(E(e),"focusInput",(function(){if(e.inputField){var t=e.inputField;t.focus();var n=document.createRange();n.selectNodeContents(t),n.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(n)}})),O(E(e),"hasFocus",(function(){return document.activeElement===e.inputField})),O(E(e),"interceptKeys",(function(t){var n;return Object(c.invoke)((O(n={},13,e.submitTag),O(n,188,e.submitTag),O(n,9,e.interceptTabPress),O(n,39,e.interceptRightArrow),n),t.keyCode,t)})),O(E(e),"interceptRightArrow",(function(t){var n=e.props.value;window.getSelection().getRangeAt(0).endOffset===n.length&&(e.completeSuggestion(),t.preventDefault(),t.stopPropagation())})),O(E(e),"interceptTabPress",(function(t){e.completeSuggestion(e.submitTag),t.preventDefault(),t.stopPropagation()})),O(E(e),"onInputMutation",(function(t){t.forEach((function(t){var n=Object(c.get)(t,"target.data","");"childList"===t.type&&t.addedNodes.length&&(n=Object(c.get)(t,"target.innerText","")),e.onInput(n)}))})),O(E(e),"onInput",(function(t){e.state.isComposing||e.props.onChange(t.trim(),e.focusInput)})),O(E(e),"onCompositionEnd",(function(t){var n=t.target.textContent;e.setState({isComposing:!1},(function(){return e.onInput(n)}))})),O(E(e),"removePastedFormatting",(function(t){var n;Object(c.get)(t,"clipboardData.getData")?n=t.clipboardData.getData("text/plain"):Object(c.get)(window,"clipboardData.getData")&&(n=window.clipboardData.getData("Text")),e.onInput(n),t.preventDefault(),t.stopPropagation()})),O(E(e),"storeInput",(function(t){e.inputField=t,e.props.inputRef(t),Object(c.invoke)(E(e),"inputField.addEventListener","paste",e.removePastedFormatting,!1)})),O(E(e),"submitTag",(function(t){var n=e.props,o=n.onSelect,r=n.value;r.trim().length&&o(r.trim()),Object(c.invoke)(t,"preventDefault"),Object(c.invoke)(t,"stopPropagation")})),e}return t=a,(n=[{key:"componentDidMount",value:function(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}},{key:"componentWillUnmount",value:function(){Object(c.invoke)(this,"inputField.removeEventListener","paste",this.removePastedFormatting,!1),this.inputObserver.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.note,o=t.tags,i=t.value,a=null;if(i.length>0){var c,u=v(o.values());try{for(u.s();!(c=u.n()).done;){var s=c.value;if(!n.tags.includes(s.name)&&s.name.startsWith(i)){a=s.name;break}}}catch(e){u.e(e)}finally{u.f()}}var l=""===i&&!this.state.isComposing;return r.a.createElement("div",{className:"tag-input",onClick:this.focusInput},l&&r.a.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add a tag…"),r.a.createElement("div",{"aria-label":"Add a tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onCompositionStart:function(){return e.setState({isComposing:!0})},onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},i),r.a.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},a?a.substring(i.length):""))}}])&&y(t.prototype,n),o&&y(t,o),a}(o.Component);O(k,"displayName","TagInput"),O(k,"defaultProps",{inputRef:c.identity,onChange:c.identity,onSelect:c.identity,storeFocusInput:c.noop,storeHasFocus:c.noop});var N=Object(i.b)((function(e){return{note:e.data.notes.get(e.ui.openedNote),tags:e.data.tags}}))(k),F=n(9),j=n(238);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=A(e);if(t){var r=A(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(f,e);var t,n,i,s=L(f);function f(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return I(this,f),x(_(e=s.call.apply(s,[this].concat(n))),"container",Object(o.createRef)()),x(_(e),"focusInput",void 0),x(_(e),"hiddenTag",void 0),x(_(e),"inputHasFocus",void 0),x(_(e),"tagInput",Object(o.createRef)()),x(_(e),"state",{selectedTag:"",showEmailTooltip:!1,tagInput:""}),x(_(e),"addTag",(function(t){var n=e.props,o=n.note,r=n.noteId,i=t.trim().replace(/\s+/g,",").split(",");i.some(u.a)&&e.showEmailTooltip();var a=new Set(o.tags.map(j.a));i.forEach((function(t){a.has(Object(j.a)(t))||(a.add(Object(j.a)(t)),e.props.addTag(r,t))})),e.storeTagInput(""),Object(c.invoke)(_(e),"tagInput.focus"),F.a.tracks.recordEvent("editor_tag_added")})),x(_(e),"hasSelection",(function(){return e.state.selectedTag&&!!e.state.selectedTag.length})),x(_(e),"deleteTag",(function(t){var n=e.props.noteId,o=e.state.selectedTag;e.props.removeTag(n,t),o===t&&e.setState({selectedTag:""},(function(){var t,n;return null===(t=e.tagInput)||void 0===t||null===(n=t.current)||void 0===n?void 0:n.focus()})),F.a.tracks.recordEvent("editor_tag_removed")})),x(_(e),"deleteSelection",(function(){e.hasSelection()&&e.deleteTag(e.state.selectedTag)})),x(_(e),"hideEmailTooltip",(function(){return e.setState({showEmailTooltip:!1})})),x(_(e),"hasFocus",(function(){return!!e.inputHasFocus&&e.inputHasFocus()})),x(_(e),"focusTagField",(function(){return e.focusInput&&e.focusInput()})),x(_(e),"interceptKeys",(function(t){if(8===t.which){if(e.hasSelection()&&e.deleteSelection(),""!==e.state.tagInput)return;return e.selectLastTag(),void t.preventDefault()}if(39===t.which&&e.hasSelection())return e.unselect(t),void e.focusTagField();9===t.which&&e.hasSelection()&&e.unselect(t)})),x(_(e),"preventStealingFocus",(function(t){var n=t.ctrlKey,o=t.code,r=t.metaKey,i=t.shiftKey;if(e.props.keyboardShortcuts)return(n||r)&&i&&"KeyY"===o&&e.setState({selectedTag:""}),!0})),x(_(e),"selectLastTag",(function(){var t;return e.setState({selectedTag:null===(t=e.props.note)||void 0===t?void 0:t.tags.slice(-1).shift()})})),x(_(e),"selectTag",(function(t){var n=t.currentTarget.dataset.tagName;t.preventDefault(),t.stopPropagation(),e.deleteTag(n)})),x(_(e),"showEmailTooltip",(function(){e.setState({showEmailTooltip:!0}),setTimeout((function(){return e.setState({showEmailTooltip:!1})}),5e3)})),x(_(e),"onKeyDown",(function(t){return e.state.showEmailTooltip&&e.hideEmailTooltip(),e.interceptKeys(t)})),x(_(e),"storeFocusInput",(function(t){return e.focusInput=t})),x(_(e),"storeHasFocus",(function(t){return e.inputHasFocus=t})),x(_(e),"storeHiddenTag",(function(t){return e.hiddenTag=t})),x(_(e),"storeInputRef",(function(t){return e.tagInput=t})),x(_(e),"storeTagInput",(function(t,n){return e.setState({tagInput:t},n)})),x(_(e),"unselect",(function(t){var n;e.state.selectedTag&&(null===(n=e.hiddenTag)||void 0===n?void 0:n.current)!==t.relatedTarget&&e.setState({selectedTag:""})})),e}return t=f,(n=[{key:"componentDidMount",value:function(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0),window.addEventListener("keydown",this.preventStealingFocus,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.unselect,!0),window.removeEventListener("keydown",this.preventStealingFocus,!0)}},{key:"componentDidUpdate",value:function(){var e,t;this.hasSelection()&&(null===(e=this.hiddenTag)||void 0===e||null===(t=e.current)||void 0===t||t.focus())}},{key:"render",value:function(){var e=this,t=this.props.note,n=this.state,o=n.selectedTag,i=n.showEmailTooltip,s=n.tagInput;return r.a.createElement("div",{ref:this.container,className:"tag-field"},r.a.createElement("div",{className:d()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:-1,onKeyDown:this.onKeyDown},r.a.createElement("input",{className:"hidden-tag",tabIndex:-1,ref:this.storeHiddenTag}),null==t?void 0:t.tags.filter(Object(c.negate)(u.a)).map((function(t){return r.a.createElement(p,{key:t,tagName:t,selected:t===o,onSelect:e.selectTag})})),r.a.createElement(N,{inputRef:this.storeInputRef,value:s,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus}),r.a.createElement(a.a,{container:this.container.current,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:i,target:this.tagInput.current},(function(){return r.a.createElement(l,null)}))))}}])&&D(t.prototype,n),i&&D(t,i),f}(o.Component);x(H,"displayName","TagField");var M=Object(i.b)((function(e){return{allTags:e.data.tags,keyboardShortcuts:e.settings.keyboardShortcuts,noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote)}}),{addTag:function(e,t){return{type:"ADD_NOTE_TAG",noteId:e,tagName:t}},removeTag:function(e,t){return{type:"REMOVE_NOTE_TAG",noteId:e,tagName:t}}})(H),K=n(878),W=n(929),U=n(152),z=n(204),B=n(283);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ee(e);if(t){var r=ee(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return V(this,n)}}function V(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?Z(e):t}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(a,e);var t,n,o,i=X(a);function a(){var e;G(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return te(Z(e=i.call.apply(i,[this].concat(n))),"editor",null),te(Z(e),"state",{content:"",editor:"fast",noteId:null,overTodo:!1}),te(Z(e),"handleKeys",(function(t){if(e.props.keyboardShortcuts){var n=t.code,o=t.ctrlKey,r=t.metaKey,i=t.shiftKey;return!(o||r)||!i||"KeyC"!==n||(e.props.insertTask(),t.stopPropagation(),t.preventDefault(),!1)}})),te(Z(e),"editorReady",(function(t,n){var o,r;window.editor=t,window.monaco=n,e.editor=t,e.monaco=n;var i=function(e){return{range:new n.Range(e,1,e,1),options:{isWholeLine:!0,inlineClassName:"note-title",stickiness:W.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}}},a=[],c=function(){var e=t.getModel();if(e)for(var n=1;n<=e.getLineCount();n++){if(e.getLineContent(n).trim().length>0){a=t.deltaDecorations(a,[i(n)]);break}}else a=[]};c(),t.onDidChangeModelContent((function(){return c()})),document.oncopy=function(e){e.clipboardData.setData("text/plain",Object(B.b)(e.clipboardData.getData("text/plain")))};var u=Q(e.props.editorSelection,3),s=u[0],l=u[1],f=u[2],d=null===(o=e.editor.getModel())||void 0===o?void 0:o.getPositionAt(s),p=null===(r=e.editor.getModel())||void 0===r?void 0:r.getPositionAt(l);e.editor.setSelection(W.Selection.createWithDirection(null==d?void 0:d.lineNumber,null==d?void 0:d.column,null==p?void 0:p.lineNumber,null==p?void 0:p.column,"RTL"===f?W.SelectionDirection.RTL:W.SelectionDirection.LTR)),t.revealLine(d.lineNumber,W.editor.ScrollType.Immediate),t.focus(),t.onDidChangeCursorSelection((function(n){var o,r;if(n.reason!==W.editor.CursorChangeReason.Undo&&n.reason!==W.editor.CursorChangeReason.Redo){var i=null===(o=t.getModel())||void 0===o?void 0:o.getOffsetAt(n.selection.getStartPosition()),a=null===(r=t.getModel())||void 0===r?void 0:r.getOffsetAt(n.selection.getEndPosition()),c=n.selection.getDirection()===W.SelectionDirection.LTR?"LTR":"RTL";e.props.storeEditorSelection(e.props.noteId,i,a,c)}})),t.onMouseMove((function(n){var o=e.state.content,r=n.target.range;if(r){var i=t.getModel();if(i){var a=i.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn});e.setState({overTodo:""===o[a]||""===o[a]})}}})),t.onMouseDown((function(n){var o=e.props,r=o.editNote,i=o.noteId,a=e.state.content,c=n.target.range;if(c){var u=t.getModel();if(u){var s=u.getOffsetAt({lineNumber:c.startLineNumber,column:c.startColumn});""===a[s]?r(i,{content:a.slice(0,s)+""+a.slice(s+1)}):""===a[s]&&r(i,{content:a.slice(0,s)+""+a.slice(s+1)})}}}))})),te(Z(e),"updateNote",(function(t,n){var o=e.props,r=o.editNote,i=o.noteId;if(e.editor){var a=function(){if(e.editor&&!n.isRedoing&&!n.isUndoing){var o=n.changes.find((function(e){var t=e.text;return"\n"===t[0]&&""===t.trim()}));if(o){var r=o.range.startLineNumber;if(0!==r&&r===o.range.endLineNumber){var i=e.editor.getModel(),a=i.getLineContent(r),c=/^(\s*)([-+*\u2022\ue000\ue001])(\s+)/.exec(a);if(null!==c){var u=i.getLineContent(r+1);if(/^\s*$/.test(u)){var s=i.getOffsetAt({column:0,lineNumber:r+1}),l=i.getOffsetAt({column:0,lineNumber:r+2}),f={identifier:{major:1,minor:1},range:new e.monaco.Range(r+1,0,r+1,u.length),text:c[0],forceMoveMarkers:!0};return e.editor.executeEdits("autolist",[f]),Promise.resolve().then((function(){return e.editor.setPosition({column:c[0].length+1,lineNumber:r+1})})),t.slice(0,s)+c[0]+n.eol+t.slice(l)}}}}}}()||t;r(i,{content:Object(B.b)(a)})}})),e}return t=a,o=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.note.content,o=n.length>5e3;return e.noteId!==t.noteId?{content:o?n.slice(0,e.editorSelection[1]+5e3):Object(B.a)(n),editor:o?"fast":"full",noteId:e.noteId}:n!==t.content?{content:Object(B.a)(n)}:null}}],(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props.noteId;window.addEventListener("keydown",this.handleKeys,!0),setTimeout((function(){t===e.props.noteId&&e.setState({editor:"full",content:Object(B.a)(e.props.note.content)})}),120)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeys,!0)}},{key:"componentDidUpdate",value:function(e){var t=this,n=Q(e.editorSelection,3),o=n[0],r=n[1],i=n[2],a=this.props,c=a.noteId,u=Q(a.editorSelection,3),s=u[0],l=u[1],f=u[2];if(this.editor&&"full"===this.state.editor&&(o!==s||r!==l||i!==f)){var d,p,h=null===(d=this.editor.getModel())||void 0===d?void 0:d.getPositionAt(s),v=null===(p=this.editor.getModel())||void 0===p?void 0:p.getPositionAt(l);this.editor.setSelection(W.Selection.createWithDirection(null==h?void 0:h.lineNumber,null==h?void 0:h.column,null==v?void 0:v.lineNumber,null==v?void 0:v.column,"RTL"===f?W.SelectionDirection.RTL:W.SelectionDirection.LTR))}"fast"===this.state.editor&&setTimeout((function(){c===t.props.noteId&&t.setState({editor:"full",content:Object(B.a)(t.props.note.content)})}),120)}},{key:"render",value:function(){var e=this.props,t=e.fontSize,n=e.noteId,o=e.theme,i=this.state,a=i.content,c=i.editor,u=i.overTodo;return r.a.createElement("div",{className:"note-content-editor-shell".concat(u?" cursor-pointer":"")},"fast"===c?r.a.createElement("div",{style:{padding:"0 10px",whiteSpace:"pre-wrap"}},a):r.a.createElement(K.default,{key:n,editorDidMount:this.editorReady,language:"plaintext",theme:"dark"===o?"vs-dark":"vs",onChange:this.updateNote,options:{autoClosingBrackets:"never",autoClosingQuotes:"never",autoIndent:"keep",autoSurround:"never",automaticLayout:!0,codeLens:!1,contextmenu:!1,folding:!1,fontFamily:'"Simplenote Tasks", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", sans-serif',fontSize:t,hideCursorInOverviewRuler:!0,lineHeight:t>20?42:24,lineNumbers:"off",links:!0,minimap:{enabled:!1},occurrencesHighlight:!1,overviewRulerBorder:!1,quickSuggestions:!1,renderIndentGuides:!1,renderLineHighlight:"none",scrollbar:{horizontal:"hidden"},scrollBeyondLastLine:!1,selectionHighlight:!1,wordWrap:"on",wrappingStrategy:"simple"},value:a}))}}])&&J(t.prototype,n),o&&J(t,o),a}(o.Component),oe={editNote:U.a.data.editNote,insertTask:function(){return{type:"INSERT_TASK"}},storeEditorSelection:function(e,t,n,o){return{type:"STORE_EDITOR_SELECTION",noteId:e,start:t,end:n,direction:o}}},re=Object(i.b)((function(e){var t;return{editorSelection:null!==(t=e.ui.editorSelection.get(e.ui.openedNote))&&void 0!==t?t:[0,0,"LTR"],fontSize:e.settings.fontSize,keyboardShortcuts:e.settings.keyboardShortcuts,noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote),searchQuery:e.ui.searchQuery,spellCheckEnabled:e.settings.spellCheckEnabled,theme:z.a(e)}}),oe)(ne),ie=n(379);function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=pe(e);if(t){var r=pe(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return fe(this,n)}}function fe(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?de(e):t}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ve=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(c,e);var t,n,i,a=le(c);function c(){var e;ce(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return he(de(e=a.call.apply(a,[this].concat(n))),"noteDetail",Object(o.createRef)()),he(de(e),"focusEditor",(function(){return e.focusContentEditor&&e.focusContentEditor()})),he(de(e),"hasFocus",(function(){var t,n;return null===(t=(n=e).editorHasFocus)||void 0===t?void 0:t.call(n)})),he(de(e),"storeEditorHasFocus",(function(t){return e.editorHasFocus=t})),he(de(e),"storeFocusContentEditor",(function(t){return e.focusContentEditor=t})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus)}},{key:"render",value:function(){var e=this.props,t=e.fontSize,n=e.openedNote;return r.a.createElement("div",{className:"note-detail-wrapper"},n?r.a.createElement("div",{ref:this.noteDetail,className:"note-detail"},r.a.createElement("div",{className:"note-detail-textarea theme-color-bg theme-color-fg",style:{fontSize:"".concat(t,"px"),overflowY:"hidden"}},r.a.createElement(re,{key:n,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus}))):r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(ie.a,null)))}}])&&ue(t.prototype,n),i&&ue(t,i),c}(o.Component);he(ve,"displayName","NoteDetail");var ge=Object(i.b)((function(e){return{fontSize:e.settings.fontSize,isDialogOpen:e.ui.dialogs.length>0,keyboardShortcuts:e.settings.keyboardShortcuts,openedNote:e.ui.openedNote}}))(ve),me=n(571);function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function we(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Se(e,t){return(Se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ke(e);if(t){var r=ke(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Te(this,n)}}function Te(e,t){return!t||"object"!==ye(t)&&"function"!=typeof t?Oe(e):t}function Oe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Se(e,t)}(a,e);var t,n,o,i=Ee(a);function a(){var e;be(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Ne(Oe(e=i.call.apply(i,[this].concat(n))),"markdownEnabled",(function(){var t;return null===(t=e.props.note)||void 0===t?void 0:t.systemTags.includes("markdown")})),Ne(Oe(e),"handleShortcut",(function(t){if(e.props.keyboardShortcuts){var n,o,r,i,a=t.code,c=t.ctrlKey,u=t.metaKey,s=t.shiftKey,l=e.props,f=l.note,d=l.noteId,p=l.toggleMarkdown,h=c||u;return f&&h&&s&&"KeyM"===a?(console.log("toggling markdown"),p(d,!e.markdownEnabled()),t.stopPropagation(),t.preventDefault(),!1):h&&s&&"KeyP"===a&&e.markdownEnabled()?(e.props.toggleEditMode(),t.stopPropagation(),t.preventDefault(),!1):!(s&&h&&"KeyY"===a&&e.props.isEditorActive)||(e.editFieldHasFocus()?(null===(n=(o=e).focusTagField)||void 0===n||n.call(o),t.stopPropagation(),t.preventDefault(),!1):(null===(r=(i=e).focusNoteEditor)||void 0===r||r.call(i),t.stopPropagation(),t.preventDefault(),!1))}})),Ne(Oe(e),"editFieldHasFocus",(function(){return e.editorHasFocus&&e.editorHasFocus()})),Ne(Oe(e),"storeEditorHasFocus",(function(t){return e.editorHasFocus=t})),Ne(Oe(e),"storeFocusEditor",(function(t){return e.focusNoteEditor=t})),Ne(Oe(e),"storeFocusTagField",(function(t){return e.focusTagField=t})),Ne(Oe(e),"storeTagFieldHasFocus",(function(t){return e.tagFieldHasFocus=t})),Ne(Oe(e),"tagFieldHasFocus",(function(){return e.tagFieldHasFocus&&e.tagFieldHasFocus()})),Ne(Oe(e),"toggleShortcuts",(function(t){t?window.addEventListener("keydown",e.handleShortcut,!0):window.removeEventListener("keydown",e.handleShortcut,!0)})),e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this;this.toggleShortcuts(!0),this.timer=setInterval((function(){var t;return null==e||null===(t=e.forceUpdate)||void 0===t?void 0:t.call(e)}),1e3)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1),clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.editMode,n=e.lastUpdated,o=e.note,i=e.noteId;if(!o)return r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(ie.a,null));var a=!!o.deleted;return r.a.createElement("div",{className:"note-editor theme-color-bg theme-color-fg"},r.a.createElement("div",{className:"last-sync"},n&&r.a.createElement("span",null,"Last synced: ",new Date(n).toLocaleString())),t||!o.systemTags.includes("markdown")?r.a.createElement(ge,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus}):r.a.createElement(me.default,{noteId:i}),o&&!a&&r.a.createElement(M,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus}))}}])&&we(t.prototype,n),o&&we(t,o),a}(o.Component);Ne(Fe,"displayName","NoteEditor");var je={toggleNoteList:U.a.ui.toggleNoteList,toggleMarkdown:U.a.data.markdownNote,toggleEditMode:U.a.ui.toggleEditMode};t.default=Object(i.b)((function(e){return{allTags:e.data.tags,editMode:e.ui.editMode,keyboardShortcuts:e.settings.keyboardShortcuts,isEditorActive:!e.ui.showNavigation,lastUpdated:e.simperium.lastSync.get(e.ui.openedNote),noteId:e.ui.openedNote,note:e.data.notes.get(e.ui.openedNote),revision:e.ui.selectedRevision,isSmallScreen:z.b(e)}}),je)(Fe)},571:function(e,t,n){"use strict";n.r(t),n.d(t,"NotePreview",(function(){return b}));var o=n(0),r=n.n(o),i=n(127),a=n(253),c=n(565),u=n.n(c),s=n(566),l=n.n(s),f=n(4),d={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},p=function(e){return n.e(17).then(n.t.bind(null,1249,7)).then((function(t){var n=t.default;n.extension("enableCheckboxes",d);var o=new n.Converter({extensions:["enableCheckboxes"]});o.setFlavor("github"),o.setOption("simpleLineBreaks",!1),o.setOption("ghMentions",!1),o.setOption("smoothLivePreview",!0);var r=e.replace(/([ \t\u2000-\u200a]*)\u2022(\s)/gm,"$1-$2");return function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),o=[],r=[],i=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return r.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return o.push(e),"continue";var t=e.nodeName.toLowerCase();Object(f.filter)(e.attributes,(function(e){var n=e.name,o=e.value;return!function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":case"width":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}case"ol":switch(t){case"start":return!0;default:return!1}default:return!1}}(t,n,o)&&(("href"!==n&&"src"!==n||!l.a.isWebUri(o))&&("href"!==n||!o.startsWith("mailto:")||!u.a.validate(o.slice(7))))})).forEach((function(t){var n=t.name;return e.removeAttribute(n)}));var i="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof i||i.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)i();return r.forEach((function(e){try{var t;null==e||null===(t=e.parentNode)||void 0===t||t.removeChild(e)}catch(e){}})),o.forEach((function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)null==n||n.insertBefore(t,e);null==n||n.removeChild(e)}catch(e){}})),t.body.innerHTML}(o.makeHtml(r))}))},h=function(e,t,o){return p(t).then((function(t){return e.innerHTML=t,e})).then((function(e){if(!o)return e.querySelectorAll("pre code");var t=Object(a.a)(o).map((function(e){return e.toLocaleLowerCase()}));if(!t.length)return e.querySelectorAll("pre code");for(var n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){return t.some((function(t){var n;return null===(n=e.textContent)||void 0===n?void 0:n.toLocaleLowerCase().includes(t)}))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},!1),r=[],i=n.currentNode;i;)r.push(i),i=n.nextNode();return r.forEach((function(e){return function e(t,n){var o=t.parentNode;n.forEach((function(t){o.childNodes.forEach((function(o){var r,i,a;if(o.nodeType===Node.TEXT_NODE&&(null===(r=o.textContent)||void 0===r?void 0:r.toLocaleLowerCase().includes(t))){var c=null===(i=o.textContent)||void 0===i?void 0:i.toLocaleLowerCase().indexOf(t),u=o.splitText(c),s=u.splitText(t.length),l=document.createElement("span");l.setAttribute("class","search-match"),null===(a=u.parentNode)||void 0===a||a.replaceChild(l,u),l.appendChild(u),e(s,n)}}))}))}(e,t)})),e.querySelectorAll("pre code")})).then((function(e){if(e.length)return n.e(13).then(n.t.bind(null,1248,7)).then((function(t){var n=t.default;e.forEach(n.highlightBlock)})).catch()}))},v=n(26),g=n(283),m=n(152);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e){var t,n=e.editNote,i=e.fontSize,a=e.isFocused,c=e.note,u=e.noteId,s=e.searchQuery,l=Object(o.useRef)();return Object(o.useEffect)((function(){var e=function(e){if(!a)return!0;if(!document.getSelection().isCollapsed)return!0;var t=document.createElement("div");h(t,c.content,s).then((function(){try{e.clipboardData.setData("text/plain",t.innerHTML)}catch(e){navigator.clipboard.writeText(t.innerHTML)}})),e.preventDefault()};return document.addEventListener("copy",e,!1),function(){return document.removeEventListener("copy",e,!1)}}),[a,s]),Object(o.useEffect)((function(){var e,t=function(e){for(var t=e.target;null!==t;t=t.parentNode){if("A"===c.tagName)return e.preventDefault(),e.stopPropagation(),void(t.href.startsWith("http://localhost")||Object(v.a)(t.href));if("task-list-item"===t.className){var o=function(){e.preventDefault(),e.stopPropagation();var o=l.current.querySelectorAll("[data-markdown-root] .task-list-item"),r=Array.prototype.indexOf.call(o,t),i=0,a=c.content.replace(/[\ue000|\ue001]/g,(function(e){return i++===r?""===e?"":"":e}));return n(u,{content:a}),{v:void 0}}();if("object"===y(o))return o.v}}};return null===(e=l.current)||void 0===e||e.addEventListener("click",t,!0),function(){var e;return null===(e=l.current)||void 0===e?void 0:e.removeEventListener("click",t,!0)}}),[]),Object(o.useEffect)((function(){var e;l.current&&((null==c?void 0:c.content)&&(null==c?void 0:c.systemTags.includes("markdown"))?h(l.current,c.content,s):l.current.innerText=Object(g.a)(null!==(e=null==c?void 0:c.content)&&void 0!==e?e:""))}),[null==c?void 0:c.content,null==c?void 0:c.systemTags,s]),r.a.createElement("div",{className:"note-detail-wrapper"},r.a.createElement("div",{className:"note-detail"},r.a.createElement("div",{ref:l,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,style:{fontSize:"".concat(i,"px")}},r.a.createElement("div",{style:{whiteSpace:"pre"}},Object(g.a)(null!==(t=null==c?void 0:c.content)&&void 0!==t?t:"")))))},w={editNote:m.a.data.editNote};t.default=Object(i.b)((function(e,t){var n,o;return{fontSize:e.settings.fontSize,isFocused:0===e.ui.dialogs.length&&!e.ui.showNoteInfo,note:null!==(n=t.note)&&void 0!==n?n:e.data.notes.get(t.noteId),noteId:null!==(o=t.noteId)&&void 0!==o?o:e.ui.openedNote,searchQuery:e.ui.searchQuery}}),w)(b)}}]);