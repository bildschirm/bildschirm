(self.webpackChunkmission_control_dashboard=self.webpackChunkmission_control_dashboard||[]).push([[542],{6650:function(e,t,n){"use strict";var o=n(23645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".vjs-tree__node:hover{background-color:transparent}.vjs-tree__brackets:hover{color:var(--theme-primary-500)}.vjs-tree__node .vjs-tree__indent.has-line{border-color:var(--theme-primary-500)}.vjs-value__number{--tw-text-opacity:1;color:rgba(244,114,182,var(--tw-text-opacity))}",""]),t.Z=r},83050:function(e,t,n){"use strict";var o=n(23645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'.vjs-tree__brackets{cursor:pointer}.vjs-tree__brackets:hover{color:#1890ff}.vjs-check-controller{left:0;position:absolute}.vjs-check-controller.is-checked .vjs-check-controller__inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller__inner.is-checkbox:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller__inner.is-radio:after{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller__inner{background-color:#fff;border:1px solid #bfcbd9;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;height:16px;position:relative;-webkit-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);-o-transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);vertical-align:middle;width:16px;z-index:1}.vjs-check-controller .vjs-check-controller__inner:after{border:2px solid #fff;border-left:0;border-top:0;-webkit-box-sizing:content-box;box-sizing:content-box;content:"";height:8px;left:4px;position:absolute;top:1px;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;-o-transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;width:4px}.vjs-check-controller .vjs-check-controller__inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller__inner.is-radio:after{background-color:#fff;border-radius:100%;height:4px;left:50%;top:50%}.vjs-check-controller .vjs-check-controller__original{bottom:0;left:0;margin:0;opacity:0;outline:none;position:absolute;right:0;top:0;z-index:-1}.vjs-tree__node{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.vjs-tree__node.has-selector{padding-left:30px}.vjs-tree__node.is-highlight,.vjs-tree__node:hover{background-color:#e6f7ff}.vjs-tree__node .vjs-tree__indent{-webkit-box-flex:0;-ms-flex:0 0 1em;flex:0 0 1em}.vjs-tree__node .vjs-tree__indent.has-line{border-left:1px dashed #bfcbd9}.vjs-comment{color:#bfcbd9}.vjs-value__null{color:#ff4949}.vjs-value__boolean,.vjs-value__number{color:#1d8ce0}.vjs-value__string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree__node{white-space:nowrap}',""]),t.Z=r},94566:function(e){e.exports=function(){"use strict";var e={16:function(e,t,n){function o(e,t,n,o,r,s,l,a){var i,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),l?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=i):r&&(i=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),i)if(c.functional){c._injectStyles=i;var u=c.render;c.render=function(e,t){return i.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,i):[i]}return{exports:e,options:c}}n.r(t),n.d(t,{default:function(){return u}});var r=o({props:{data:{required:!0,type:String},collapsedOnClickBrackets:Boolean},methods:{toggleBrackets(e){this.collapsedOnClickBrackets&&this.$emit("click",e)}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vjs-tree__brackets",on:{click:function(t){return t.stopPropagation(),e.toggleBrackets(t)}}},[e._v("\n  "+e._s(e.data)+"\n")])}),[],!1,null,null,null).exports,s=o({props:{checked:{type:Boolean,default:!1},isMultiple:Boolean},data:()=>({focus:!1}),computed:{uiType(){return this.isMultiple?"checkbox":"radio"},model:{get(){return this.checked},set(e){this.$emit("input",e)}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["vjs-check-controller",e.checked?"is-checked":""],on:{click:function(e){e.stopPropagation()}}},[n("span",{class:"vjs-check-controller__inner is-"+e.uiType}),e._v(" "),"checkbox"===e.uiType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.model)?e._i(e.model,null)>-1:e.model},on:{change:[function(t){var n=e.model,o=t.target,r=!!o.checked;if(Array.isArray(n)){var s=e._i(n,null);o.checked?s<0&&(e.model=n.concat([null])):s>-1&&(e.model=n.slice(0,s).concat(n.slice(s+1)))}else e.model=r},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):"radio"===e.uiType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:"radio"},domProps:{checked:e._q(e.model,null)},on:{change:[function(t){e.model=null},function(t){return e.$emit("change",e.model)}],focus:function(t){e.focus=!0},blur:function(t){e.focus=!1}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],class:"vjs-check-controller__original is-"+e.uiType,attrs:{type:e.uiType},domProps:{value:e.model},on:{change:function(t){return e.$emit("change",e.model)},focus:function(t){e.focus=!0},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.model=t.target.value)}}})])}),[],!1,null,null,null);function l(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function a(e,t="root",n=0,{key:o,index:r,type:s="content",showComma:i=!1,length:c=1}={}){const u=l(e);if("array"===u){const r=e.map(((e,o,r)=>a(e,`${t}[${o}]`,n+1,{index:o,showComma:o!==r.length-1,length:c,type:s}))).flat();return[a("[",t,n,{key:o,length:e.length,type:"arrayStart"})[0]].concat(r,a("]",t,n,{showComma:i,length:e.length,type:"arrayEnd"})[0])}if("object"===u){const l=Object.keys(e),u=l.map(((o,r,l)=>a(e[o],o.includes(".")?`${t}["${o}"]`:`${t}.${o}`,n+1,{key:o,showComma:r!==l.length-1,length:c,type:s}))).flat();return[a("{",t,n,{key:o,index:r,length:l.length,type:"objectStart"})[0]].concat(u,a("}",t,n,{showComma:i,length:l.length,type:"objectEnd"})[0])}const d=Object.entries({content:e,level:n,key:o,index:r,path:t,showComma:i,length:c,type:s}).reduce(((e,[t,n])=>void 0!==n?{...e,[t]:n}:e),{});return"object"===l(d)?[d]:d}var i=o({components:{Brackets:r,CheckController:s.exports},props:{node:{required:!0,type:Object},collapsed:Boolean,collapsedOnClickBrackets:Boolean,showDoubleQuotes:Boolean,showLength:Boolean,checked:Boolean,selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},computed:{valueClass(){return"vjs-value vjs-value__"+this.dataType},dataType(){return l(this.node.content)},prettyKey(){return this.showDoubleQuotes?`"${this.node.key}"`:this.node.key},selectable(){return this.pathSelectable(this.node.path,this.node.content)&&(this.isMultiple||this.isSingle)},isMultiple(){return"multiple"===this.selectableType},isSingle(){return"single"===this.selectableType}},methods:{defaultFormatter(e){let t=e+"";return"string"===this.dataType&&(t=`"${t}"`),t},customFormatter(e){return this.customValueFormatter?this.customValueFormatter(e,this.node.key,this.node.path,this.defaultFormatter(e)):this.defaultFormatter(e)},onBracketsClick(){this.$emit("brackets-click",!this.collapsed,this.node.path)},onCheckedChange(){this.$emit("selected-change",this.node)},onTreeNodeClick(){this.$emit("tree-node-click",this.node),this.selectable&&this.selectOnClickNode&&this.$emit("selected-change",this.node)}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"vjs-tree__node":!0,"has-selector":e.showSelectController,"is-highlight":e.highlightSelectedNode&&e.checked},on:{click:e.onTreeNodeClick}},[e.showSelectController&&e.selectable&&"objectEnd"!==e.node.type&&"arrayEnd"!==e.node.type?[n("check-controller",{attrs:{"is-multiple":e.isMultiple,checked:e.checked},on:{change:e.onCheckedChange}})]:e._e(),e._v(" "),e._l(e.node.level,(function(t,o){return n("div",{key:o,class:{"vjs-tree__indent":!0,"has-line":e.showLine}})})),e._v(" "),e.node.key?n("span",{staticClass:"vjs-key"},[e._v(" "+e._s(e.prettyKey)+":  ")]):e._e(),e._v(" "),n("span",["content"!==e.node.type?n("brackets",{attrs:{data:e.node.content,"collapsed-on-click-brackets":e.collapsedOnClickBrackets},on:{click:e.onBracketsClick}}):[e.customValueFormatter?n("span",{class:e.valueClass,domProps:{innerHTML:e._s(e.customFormatter(e.node.content))}}):n("span",{class:e.valueClass},[e._v(e._s(e.defaultFormatter(e.node.content)))])],e._v(" "),e.node.showComma?n("span",[e._v(",")]):e._e(),e._v(" "),e.showLength&&e.collapsed?n("span",{staticClass:"vjs-comment"},[e._v(" // "+e._s(e.node.length)+" items ")]):e._e()],2)],2)}),[],!1,null,null,null),c=o({name:"VueJsonPretty",components:{TreeNode:i.exports},props:{data:{type:[String,Number,Boolean,Array,Object],default:null},deep:{type:Number,default:1/0},path:{type:String,default:"root"},virtual:{type:Boolean,default:!1},itemHeight:{type:Number,default:20},showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},selectableType:{type:String,default:""},showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},selectOnClickNode:{type:Boolean,default:!0},value:{type:[Array,String],default:()=>""},pathSelectable:{type:Function,default:()=>!0},highlightSelectedNode:{type:Boolean,default:!0},collapsedOnClickBrackets:{type:Boolean,default:!0},customValueFormatter:{type:Function,default:null}},data(){return{translateY:0,visibleData:null,hiddenPaths:a(this.data,this.path).reduce(((e,t)=>"objectStart"!==t.type&&"arrayStart"!==t.type||t.level!==this.deep?e:{...e,[t.path]:1}),{})}},computed:{flatData(){let e=null;return a(this.data,this.path).reduce(((t,n,o)=>{const r={...n,id:o},s=this.hiddenPaths[r.path];if(e&&e.path===r.path){const n="objectStart"===e.type,o={...e,...r,content:n?"{...}":"[...]",type:n?"objectCollapsed":"arrayCollapsed"};return e=null,t.concat(o)}return s&&!e?(e=r,t):e?t:t.concat(r)}),[])},selectedPaths:{get(){return this.value&&"single"===this.selectableType?[this.value]:this.value||[]},set(e){this.$emit("input",e)}},propsError(){return!this.selectableType||this.selectOnClickNode||this.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}},watch:{propsError:{handler(e){if(e)throw new Error("[VueJsonPretty] "+e)},immediate:!0},flatData:{handler(){this.onTreeScroll()},immediate:!0}},methods:{onTreeScroll(){if(this.virtual){const e=10,t=this.$refs.tree&&this.$refs.tree.scrollTop||0,n=Math.floor(t/this.itemHeight);let o=n<0?0:n+e>this.flatData.length?this.flatData.length-e:n;o<0&&(o=0);const r=o+e;this.translateY=o*this.itemHeight,this.visibleData=this.flatData.filter(((e,t)=>t>=o&&t<r))}else this.visibleData=this.flatData},onSelectedChange({path:e}){const t=this.selectableType;if("multiple"===t){const t=this.selectedPaths.findIndex((t=>t===e)),n=[...this.selectedPaths];-1!==t?this.selectedPaths.splice(t,1):this.selectedPaths.push(e),this.$emit("change",this.selectedPaths,n)}else if("single"===t&&this.selectedPaths!==e){const t=this.selectedPaths,n=e;this.selectedPaths=n,this.$emit("change",n,t)}},onTreeNodeClick({content:e,path:t}){this.$emit("click",t,e)},onBracketsClick(e,t){if(e)this.hiddenPaths={...this.hiddenPaths,[t]:1};else{const e={...this.hiddenPaths};delete e[t],this.hiddenPaths=e}}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"tree",class:{"vjs-tree":!0,"is-virtual":e.virtual},on:{scroll:e.onTreeScroll}},[n("div",{style:e.virtual&&{height:e.flatData.length*e.itemHeight+"px"}},[n("div",{style:e.virtual&&{transform:"translateY("+e.translateY+"px)"}},e._l(e.visibleData,(function(t){return n("tree-node",{key:t.id,attrs:{node:t,collapsed:!!e.hiddenPaths[t.path],"custom-value-formatter":e.customValueFormatter,"show-double-quotes":e.showDoubleQuotes,"show-length":e.showLength,"collapsed-on-click-brackets":e.collapsedOnClickBrackets,checked:e.selectedPaths.includes(t.path),"selectable-type":e.selectableType,"show-line":e.showLine,"show-select-controller":e.showSelectController,"select-on-click-node":e.selectOnClickNode,"path-selectable":e.pathSelectable,"highlight-selected-node":e.highlightSelectedNode},on:{"tree-node-click":e.onTreeNodeClick,"brackets-click":e.onBracketsClick,"selected-change":e.onSelectedChange}})})),1)])])}),[],!1,null,null,null).exports,u=Object.assign({},c,{version:"1.8.0"})}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(16)}()},92824:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(20302),r={name:"FullScreenSpinner",props:{iconClass:{type:String,default:""}},components:{Spinner:o.Z}},s=(0,n(51900).Z)(r,(function(){var e=this.$createElement;return(this._self._c||e)("Spinner",{staticClass:"absolute inset-0 text-primary-400",attrs:{"icon-class":"w-5"}})}),[],!1,null,null,null).exports},84122:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var o=n(87757),r=n.n(o),s=n(79931),l={props:{value:{type:String,default:""}},mounted:function(){var e=this;this.flask=new s.Z(this.$refs.jsonEditor,{language:"json",defaultTheme:!1}),this.flask.addLanguage("json",{property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}}),this.flask.onUpdate((function(t){e.$emit("input",t)})),this.flask.updateCode(this.value)},watch:{value:function(){this.flask.updateCode(this.value)}}},a=n(51900),i=(0,a.Z)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"jsonEditor",staticClass:"relative"})}),[],!1,null,null,null).exports,c={props:{services:{type:Array,default:[]}},data:function(){return{actionInput:"",dataInput:"{\n  \n}",serviceSelection:""}},methods:{invokeAction:function(){try{this.$emit("invoke",this.serviceSelection,this.actionInput,JSON.parse(this.dataInput))}catch(e){alert(e.message)}}},components:{jsonEditor:i}},u=(0,a.Z)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"flex flex-wrap w-full",on:{submit:function(t){return t.preventDefault(),e.invokeAction(t)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.serviceSelection,expression:"serviceSelection"}],staticClass:"w-full mb-5 forms-select",attrs:{placeholder:"Service",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.serviceSelection=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select a service")]),e._v(" "),e._l(e.services,(function(t){return n("option",{key:t},[e._v("\n\t\t\t"+e._s(t)+"\n\t\t")])}))],2),e._v(" "),n("label",{staticClass:"forms-label",attrs:{for:"service"}},[e._v("\n\t\tAction\n\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.actionInput,expression:"actionInput"}],staticClass:"w-full forms-input-text mb-5",attrs:{type:"text",name:"service",id:"service",required:"",placeholder:"Action (e.g. for homebridge: 'interact')"},domProps:{value:e.actionInput},on:{input:function(t){t.target.composing||(e.actionInput=t.target.value)}}}),e._v(" "),n("label",{staticClass:"forms-label",attrs:{for:"data-editor"}},[e._v("\n\t\tPayload (JSON)\n\t")]),e._v(" "),n("json-editor",{staticClass:"w-full mb-8 min-h-24 h-40 font-mono rounded-lg bg-primary-700 border-2 border-primary-700 hover:border-primary-500 overflow-hidden focus-within:border-primary-500 px-2 py-1",attrs:{name:"data-editor"},model:{value:e.dataInput,callback:function(t){e.dataInput=t},expression:"dataInput"}}),e._v(" "),n("button",{staticClass:"w-full forms-button",attrs:{type:"submit"}},[e._v("Invoke Action")])],1)}),[],!1,null,null,null).exports,d=n(94566),p=n.n(d),h=n(93379),m=n.n(h),f=n(83050),v={insert:"head",singleton:!1};m()(f.Z,v),f.Z.locals;function b(e,t,n,o,r,s,l){try{var a=e[s](l),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(o,r)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var s=e.apply(t,n);function l(e){b(s,o,r,l,a,"next",e)}function a(e){b(s,o,r,l,a,"throw",e)}l(void 0)}))}}function y(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,s=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw s}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var k={data:function(){return{serviceInput:"",states:{},actionCache:{}}},created:function(){this.serviceClients={}},destroy:function(){var e,t=y(this.serviceClients);try{for(t.s();!(e=t.n()).done;){e.value.unsubscribe()}}catch(e){t.e(e)}finally{t.f()}this.serviceClients={}},methods:{subscribe:function(){var e=this;try{var t=this.serviceInput;this.serviceClients[t]=this.$sync.service(t,(function(n){e.$set(e.states,t,n)}),(function(t){e.$notify({type:"error",title:t.message})})),this.serviceInput=""}catch(e){alert(e.message)}},unsubscribe:function(e){var t=this;return g(r().mark((function n(){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e in t.serviceClients){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.serviceClients[e].unsubscribe();case 4:delete t.serviceClients[e],t.$delete(t.states,e);case 6:case"end":return n.stop()}}),n)})))()},invokeAction:function(e,t,n){var o=this;return g(r().mark((function s(){return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.info("invoking action",e,t,n),r.next=4,o.serviceClients[e].action(t,n);case 4:r.sent,r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("could not invoke action",r.t0),o.$notify({type:"error",title:"Invoke Action",text:r.t0.message});case 11:case"end":return r.stop()}}),s,null,[[0,7]])})))()}},computed:{serviceNames:function(){return Object.keys(this.states)}},components:{VueJsonPretty:p(),actionForm:u}},x=n(6650),C={insert:"head",singleton:!1},w=(m()(x.Z,C),x.Z.locals,(0,a.Z)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-wrap lg:flex-no-wrap gap-8 mb-10"},[n("section",{staticClass:"flex-1"},[n("h2",{staticClass:"forms-label mb-3"},[e._v("\n\t\t\tSubscribe to services to inspect their state\n\t\t")]),e._v(" "),n("form",{staticClass:"flex w-full mb-5",on:{submit:function(t){return t.preventDefault(),e.subscribe(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.serviceInput,expression:"serviceInput"}],staticClass:"forms-input-text flex-1 rounded-r-none",attrs:{type:"text",name:"service",required:"",placeholder:"Service name (e.g. telemetry)"},domProps:{value:e.serviceInput},on:{input:function(t){t.target.composing||(e.serviceInput=t.target.value)}}}),e._v(" "),n("button",{staticClass:"forms-button rounded-l-none",attrs:{type:"submit"}},[e._v("Subscribe")])]),e._v(" "),n("div",{staticClass:"w-full"},e._l(e.states,(function(t,o){return n("article",{key:o,staticClass:"dashboard-box mb-3"},[n("div",{staticClass:"mb-2 text-primary-200 text-sm font-mono font-semibold flex items-center justify-between"},[n("span",[e._v(e._s(o))]),e._v(" "),n("button",{staticClass:"forms-button-text",on:{click:function(t){return e.unsubscribe(o)}}},[e._v("Unsubscribe")])]),e._v(" "),n("vue-json-pretty",{staticClass:"text-primary-200 leading-relaxed",attrs:{data:t,deep:1}})],1)})),0)]),e._v(" "),n("section",{staticClass:"w-full lg:w-1/3 flex-shrink-0"},[n("h2",{staticClass:"forms-label mb-3"},[e._v("\n\t\t\tInvoke actions to debug their changes\n\t\t")]),e._v(" "),n("action-form",{attrs:{services:e.serviceNames},on:{invoke:e.invokeAction}})],1)])}),[],!1,null,null,null).exports),S=n(92616),j=n(79734),T={name:"statistics-browse-page",components:{syncDebugger:w,topBarActions:S.Z,topBarButton:j.Z}},B=(0,a.Z)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"dashboard-page p-5 md:p-12"},[n("sync-debugger"),e._v(" "),n("top-bar-actions",[n("top-bar-button",{attrs:{"router-link":"/telemetry"}},[e._v("\n\t\t\tDebug Statistics\n\t\t")])],1)],1)}),[],!1,null,null,null).exports},84283:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(48465),r=n(87091),s=n(29758),l=n(24232),a=n(66158),i=n(92824),c=n(20302),u=n(50800),d={components:{Panel:a.Z,Label:r.Z,CodeInput:l.Z},props:{label:{type:String,default:""},code:{type:String}},template:'\n\t\t<section class="grid grid-cols-2 mb-5">\n\t\t\t<p class="mb-2 font-mono text-lg text-primary-300">{{ label }}</p>\n\t\t\t<div>\n\t\t\t\t<Label label="Example Code" class="mb-5" v-if="code">\n\t\t\t\t\t<CodeInput\n\t\t\t\t\t\tlang="html"\n\t\t\t\t\t\tv-model="code"\n\t\t\t\t\t\treadonly\n\t\t\t\t\t/>\n\t\t\t\t</Label>\n\t\t\t\t<Label label="Preview">\n\t\t\t\t\t<Panel class="relative">\n\t\t\t\t\t\t<slot></slot>\n\t\t\t\t\t</Panel>\n\t\t\t\t</Label>\n\t\t\t</div>\n\t\t</section>\n\t'},p={components:{Button:o.Z,Divider:{template:'<div class="w-full my-10 h-1 bg-primary-700" />'},Label:r.Z,TextInput:s.Z,CodeInput:l.Z,Panel:a.Z,CodeExample:d,FullScreenSpinner:i.Z,Spinner:c.Z,SmartToggle:u.Z},data:function(){return{inputs:{test:"",smartButtonActive:!0,code:'{ \n\t"type": "Example JSON" \n}'}}},computed:{},methods:{input:function(e){console.log(e)}}},h=n(51900),m={components:{Storybook:(0,h.Z)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",[n("h2",{staticClass:"font-bold text-2xl mb-5"},[e._v("Button component")]),e._v(" "),n("CodeExample",{attrs:{label:"Button",code:"<Button>Hello World!</Button>"}},[n("Button",[e._v("Hello World!")])],1),e._v(" "),n("CodeExample",{attrs:{label:"form/Button (loading)",code:"<Button loading>Loading...</Button>"}},[n("Button",{attrs:{loading:""}},[e._v("Loading...")])],1),e._v(" "),n("CodeExample",{attrs:{label:"form/SmartToggle",code:"<SmartToggle>Hello World!</SmartToggle>"}},[n("SmartToggle",{attrs:{icon:"home"}},[e._v("Hello World!")])],1),e._v(" "),n("CodeExample",{attrs:{label:"form/SmartToggle (active)",code:'<SmartToggle icon="home" active>Hello World!</SmartToggle>'}},[n("SmartToggle",{attrs:{icon:"home",active:""}},[e._v("Hello World!")])],1),e._v(" "),n("CodeExample",{attrs:{label:"form/SmartToggle (toggle)",code:'<SmartToggle\n\ticon="heart"\n\t:active="active"\n\t@click="inputs.active = !inputs.active"\n>\n\tToggle me!\n</SmartToggle>'}},[n("SmartToggle",{attrs:{icon:"heart",active:e.inputs.smartButtonActive},on:{click:function(t){e.inputs.smartButtonActive=!e.inputs.smartButtonActive}}},[e._v("\n\t\t\t\tToggle me!\n\t\t\t")]),e._v(" "),n("SmartToggle",{attrs:{icon:"heart",active:e.inputs.smartButtonActive},on:{click:function(t){e.inputs.smartButtonActive=!e.inputs.smartButtonActive}}},[e._v("\n\t\t\t\tToggle me!\n\t\t\t")])],1),e._v(" "),n("Divider"),e._v(" "),n("h2",{staticClass:"font-bold text-2xl mb-5"},[e._v("Input components")]),e._v(" "),n("CodeExample",{attrs:{label:"form/TextInput with form/Label",code:'<Label name="input" label="Example Input">\n\t<TextInput\n\t\tname="input"\n\t\ttype="text"\n\t\tplaceholder="Example Input (e.g. \'test\')"\n\t/>\n</Label>'}},[n("Label",{attrs:{name:"input",label:"Example Input"}},[n("TextInput",{attrs:{name:"input",type:"text",placeholder:"Example Input (e.g. 'test')"}})],1)],1),e._v(" "),n("CodeExample",{attrs:{label:"form/TextInput (type: text)",code:'<TextInput\n\tname="input"\n\tplaceholder="Example Input (e.g. \'test\')"\n\tloading\n\trequired\n/>'}},[n("TextInput",{attrs:{name:"input2",placeholder:"Example Input 2"},on:{input:e.input}})],1),e._v(" "),n("CodeExample",{attrs:{label:"form/TextInput (type: password)",code:'<TextInput \n\ttype="password" \n\tplaceholder="Password" \n\tvalue="hunter2" \n/>'}},[n("TextInput",{attrs:{name:"input3",type:"password",placeholder:"Password",value:"hunter2"}})],1),e._v(" "),n("CodeExample",{attrs:{label:"form/TextInput (type: email)",code:'<TextInput \n\ttype="email" \n\tplaceholder="E-Mail address" \n\tvalue="user@example.com" \n/>'}},[n("TextInput",{attrs:{name:"input4",type:"email",placeholder:"E-Mail address",value:"user@example.com",required:""}})],1),e._v(" "),n("CodeExample",{attrs:{label:"form/TextInput (type: number)",code:'<TextInput \n\ttype="number" \n\tplaceholder="Number" \n\tvalue="420" \n/>'}},[n("TextInput",{attrs:{name:"input5",type:"number",placeholder:"Number",value:"420",required:""}})],1),e._v(" "),n("CodeExample",{attrs:{label:"form/CodeInput",code:'<CodeInput\n\tname="code"\n\tlang="json"\n\tv-model="code"\n/>'}},[n("CodeInput",{attrs:{name:"code",lang:"json"},model:{value:e.inputs.code,callback:function(t){e.$set(e.inputs,"code",t)},expression:"inputs.code"}})],1),e._v(" "),n("Divider"),e._v(" "),n("h2",{staticClass:"font-bold text-2xl mb-5"},[e._v("Loading component")]),e._v(" "),n("CodeExample",{attrs:{label:"loading/Spinner",code:'<Spinner class="w-5" />'}},[n("Spinner",{staticClass:"w-5"})],1),e._v(" "),n("CodeExample",{attrs:{label:"loading/Spinner (iconClass)",code:'<Spinner iconClass="w-5" />'}},[n("Spinner",{attrs:{iconClass:"w-5"}})],1),e._v(" "),n("CodeExample",{attrs:{label:"loading/FullScreenSpinner",code:"<FullScreenSpinner />"}},[n("FullScreenSpinner")],1)],1)}),[],!1,null,null,null).exports}},f=(0,h.Z)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"dashboard-page p-5 md:p-12"},[t("Storybook")],1)}),[],!1,null,null,null).exports}}]);