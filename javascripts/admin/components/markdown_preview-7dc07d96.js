(function(){this.MarkdownPreview=React.createClass({getDefaultProps:function(){return{markdown:""}},render:function(){var e;return e=marked(this.props.markdown,{sanitize:!0}),React.createElement("div",{className:"markdown-preview",dangerouslySetInnerHTML:{__html:e}})}})}).call(this);