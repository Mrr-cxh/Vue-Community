(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbf01626"],{"035d":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topic_create"},[e("div",{staticClass:"left"},[e("Panel",{scopedSlots:t._u([{key:"header",fn:function(){return[e("router-link",{staticClass:"createHome",attrs:{to:"/"}},[t._v("主页")]),e("span",[t._v(" / 发布话题")])]},proxy:!0},{key:"content",fn:function(){return[t._v(" 选择板块："),e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}},t._l(t.arr.tab,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),e("el-input",{attrs:{placeholder:"标题字数 10 字以上"},model:{value:t.arr.title,callback:function(n){t.$set(t.arr,"title",n)},expression:"arr.title"}}),e("Editor",{attrs:{"output-format":"text","model-events":"blur","api-key":"9mieih2cqsubf30b1omff3w107ojvjfvzhmb7haq4giiy754",init:{language:"zh_CN",elementpath:!1,branding:!1,height:500,menubar:!1,toolbar:"cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor "}},model:{value:t.arr.content,callback:function(n){t.$set(t.arr,"content",n)},expression:"arr.content"}}),e("el-button",{attrs:{type:"primary"},on:{click:t.postSubmit}},[t._v("提交")])]},proxy:!0}])})],1)])},i=[],r=e("89d7"),a=e("ca72"),s={name:"TopicCreate",components:{Panel:r["a"],Editor:a["a"]},data:function(){return{arr:{title:"",tab:[{value:"ask",label:"问答"},{value:"share",label:"分享"},{value:"job",label:"招聘"},{value:"dev",label:"客户端测试"}],content:""},value:""}},methods:{postSubmit:function(){this.$axios.post("/topics",{accesstoken:this.getToken,title:this.arr.title,tab:this.value,content:this.arr.content});this.$router.push("/")}},computed:{getToken:function(){return JSON.parse(localStorage.getItem("token")).token}}},l=s,u=(e("3ff7"),e("2877")),c=Object(u["a"])(l,o,i,!1,null,null,null);n["default"]=c.exports},"0574":function(t,n,e){},"3ff7":function(t,n,e){"use strict";e("0574")},c4a9:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(this,e("c8ba"))},ca72:function(t,n,e){"use strict";var o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],i=function(t){return-1!==o.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},r=function(t,n,e){Object.keys(n).filter(i).forEach((function(o){var i=n[o];"function"===typeof i&&("onInit"===o?i(t,e):e.on(o.substring(2),(function(t){return i(t,e)})))}))},a=function(t,n){var e=t.$props.modelEvents?t.$props.modelEvents:null,o=Array.isArray(e)?e.join(" "):e;n.on(o||"change input undo redo",(function(){t.$emit("input",n.getContent({format:t.$props.outputFormat}))}))},s=function(t,n,e){var o=n.$props.value?n.$props.value:"",i=n.$props.initialValue?n.$props.initialValue:"";e.setContent(o||(n.initialized?n.cache:i)),n.$watch("value",(function(t,o){e&&"string"===typeof t&&t!==o&&t!==e.getContent({format:n.$props.outputFormat})&&e.setContent(t)})),n.$listeners.input&&a(n,e),r(t,n.$listeners,e),n.initialized=!0},l=0,u=function(t){var n=Date.now(),e=Math.floor(1e9*Math.random());return l++,t+"_"+e+l+String(n)},c=function(t){return null!==t&&"textarea"===t.tagName.toLowerCase()},p=function(t){return"undefined"===typeof t||""===t?[]:Array.isArray(t)?t:t.split(" ")},d=function(t,n){return p(t).concat(p(n))},f=function(t){return null===t||void 0===t},h=function(){return{listeners:[],scriptId:u("tiny-script"),scriptLoaded:!1}},v=function(){var t=h(),n=function(t,n,e,o){var i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=t,i.src=e;var r=function(){i.removeEventListener("load",r),o()};i.addEventListener("load",r),n.head&&n.head.appendChild(i)},e=function(e,o,i){t.scriptLoaded?i():(t.listeners.push(i),e.getElementById(t.scriptId)||n(t.scriptId,e,o,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))},o=function(){t=h()};return{load:e,reinitialize:o}},m=v(),y=e("c4a9"),b={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},g=function(){return g=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},g.apply(this,arguments)},$=function(t,n,e){return t(e||"div",{attrs:{id:n}})},C=function(t,n){return t("textarea",{attrs:{id:n},style:{visibility:"hidden"}})},S=function(t){return function(){var n=g(g({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:d(t.$props.init&&t.$props.init.plugins,t.$props.plugins),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(n){t.editor=n,n.on("init",(function(e){return s(e,t,n)})),t.$props.init&&"function"===typeof t.$props.init.setup&&t.$props.init.setup(n)}});c(t.element)&&(t.element.style.visibility="",t.element.style.display=""),Object(y["a"])().init(n)}},k={props:b,created:function(){this.elementId=this.$props.id||u("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(y["a"])())S(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key",e=f(this.$props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;m.load(this.element.ownerDocument,e,S(this))}},beforeDestroy:function(){null!==Object(y["a"])()&&Object(y["a"])().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(y["a"])())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&S(this)()},render:function(t){return this.inlineEditor?$(t,this.elementId,this.$props.tagName):C(t,this.elementId)}};n["a"]=k}}]);
//# sourceMappingURL=chunk-fbf01626.c1480a13.js.map