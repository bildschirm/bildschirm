(self.webpackChunkmission_control_dashboard=self.webpackChunkmission_control_dashboard||[]).push([[290],{2131:function(t){t.exports=function(t,s){if(0==t)return"0 Bytes";var a=s<=0?0:s||2,n=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,n)).toFixed(a))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}},5872:function(t,s,a){"use strict";a.r(s);var n=a(3645),o=a.n(n)()((function(t){return t[1]}));o.push([t.id,".stat-block{font-weight:600;font-size:1.125rem;line-height:1.75rem;line-height:1.25;margin-bottom:1.25rem;--tw-text-opacity:1;color:rgba(245,243,255,var(--tw-text-opacity))}@media (min-width:1024px){.stat-block{margin-bottom:0}}.stat-block .stat-block-content{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.stat-block .stat-block-heading{font-size:.75rem;line-height:1rem;--tw-text-opacity:1;color:rgba(167,139,250,var(--tw-text-opacity));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),s.default=o},1929:function(t,s,a){"use strict";a.r(s),a.d(s,{default:function(){return l}});var n=a(2131),o=a.n(n),e=a(4963),c=a(2776),i={name:"statistics-page",components:{topBarActions:e.Z,topBarButton:c.Z},computed:{info:function(){return this.$mcState("systemInfo",{deviceName:"Mission Control",system:{},os:{},cpu:{},memory:{},network:{}})},bytesUsed:function(){return o()(this.info.memory.used)},bytesTotal:function(){return o()(this.info.memory.total)}},filter:{bytes:o()}},l=(a(9147),(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",{staticClass:"dashboard-page p-5 md:p-12"},[a("article",{staticClass:"flex mb-10 flex-wrap lg:flex-nowrap items-end"},[a("section",{staticClass:"stat-block w-1/2 md:w-1/3"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.info.deviceName))]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Filmregal")])]),t._v(" "),a("div",{staticClass:"flex w-2/3"},[a("section",{staticClass:"stat-block w-1/2 md:w-1/4"},[a("span",{staticClass:"stat-block-content"},[t._v("\n\t\t\t\t\t\t"+t._s(t.info.system.manufacturer)+"\n\t\t\t\t\t\t"+t._s(t.info.system.model)+"\n\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("System")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/2 md:w-1/4"},[a("span",{staticClass:"stat-block-content"},[t._v("\n\t\t\t\t\t\t"+t._s(t.info.os.platform)+"\n\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Platform")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/2 md:w-1/4"},[a("span",{staticClass:"stat-block-content"},[t._v("\n\t\t\t\t\t\t"+t._s(t.info.os.architecture)+"\n\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Architecture")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/2 md:w-1/4"},[a("span",{staticClass:"stat-block-content"},[t._v("\n\t\t\t\t\t\t"+t._s(t.info.os.distro)+"\n\t\t\t\t\t\t"+t._s(t.info.os.version)+"\n\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("OS")])])])]),t._v(" "),a("article",{staticClass:"flex mb-8"},[a("section",{staticClass:"stat-block w-1/3"},[a("span",{staticClass:"stat-block-content"},[t._v("\n\t\t\t\t\t"+t._s(t.info.cpu.manufacturer)+" "+t._s(t.info.cpu.brand)+"\n\t\t\t\t")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("CPU Model")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.info.cpu.mainTemperature)+"°C")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("CPU Temperature")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v("\n\t\t\t\t\t"+t._s(parseInt(t.info.cpu.currentLoad))+"%\n\t\t\t\t")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Total CPU Usage")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.bytesUsed)+"/"+t._s(t.bytesTotal))]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Memory Usage")])])]),t._v(" "),a("article",{staticClass:"flex mb-10"},[t._l(t.info.cpu.cores,(function(s,n){return[n%t.info.cpu.cores.length==0?a("div",{staticClass:"w-1/3"}):t._e(),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(parseInt(s.load))+"%")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("CPU Core "+t._s(n+1))])])]}))],2),t._v(" "),a("article",{staticClass:"flex mb-8"},[a("div",{staticClass:"w-1/3"}),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.info.network.internalIPv4))]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Internal IP Address")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.info.network.publicIPv4))]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Public IP Address")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.info.network.mac))]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("MAC Address")])]),t._v(" "),a("section",{staticClass:"stat-block w-1/6"},[a("span",{staticClass:"stat-block-content"},[t._v(t._s(t.info.network.speed)+" MBit/s")]),t._v(" "),a("span",{staticClass:"stat-block-heading"},[t._v("Speed")])])]),t._v(" "),a("top-bar-actions",[a("top-bar-button",{attrs:{"router-link":"/telemetry/inspect-state"}},[t._v("Inspect State")])],1)],1)}),[],!1,null,null,null).exports)},9147:function(t,s,a){var n=a(5872);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);(0,a(5346).Z)("d62bd222",n,!0,{})}}]);