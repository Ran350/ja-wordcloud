(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2311)}])},2311:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return ey}});var r,o=a(5893),l=a(8664),s=a(3523),t=a(7564),i=a(9876),c=a(7841),d=a(7294),h=a(3765),u=a(7860),x=a(9834),g=a(6768),m=a(3723),j=a(7789),p=a(1238),f=a(4707),w=a(7283),C=a(9463),v=a(1759);let k=e=>{let{onClearAll:n}=e,[a,{open:r,close:l}]=(0,v.q)(!1),t=()=>{n(),l()};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.z,{compact:!0,fullWidth:!0,variant:"outline",color:"gray",onClick:r,children:"Clear All"}),(0,o.jsxs)(C.u,{opened:a,onClose:l,title:"Confirm",children:["Are you sure you want to clear all stop words?",(0,o.jsx)(s.M,{mt:"lg",children:(0,o.jsx)(c.z,{variant:"filled",color:"red",onClick:t,children:"Clear All"})})]})]})};var b=a(3241),S=a(5593),y=a(5117),M=a(7084),R=a(8818),z=a(64),P=a(2162);let W=e=>{let{onClick:n}=e,a=(0,b.rZ)(),r=(0,z.i)(),[l,{close:t,open:i}]=(0,v.q)(!1);return(0,o.jsxs)(S.J,{width:100,position:"top",withArrow:!0,shadow:"md",opened:l,children:[(0,o.jsx)(S.J.Target,{children:(0,o.jsx)(x.A,{size:32,radius:"xl",color:a.primaryColor,variant:"filled",onMouseEnter:i,onMouseLeave:t,onClick:n,children:(0,o.jsx)(P.Z,{size:"1.1rem",stroke:1.5})})}),(0,o.jsxs)(S.J.Dropdown,{sx:{pointerEvents:"none"},style:{backgroundColor:a.colors.gray[1]},children:[(0,o.jsx)(y.x,{size:"sm",children:"Add stop word"}),(0,o.jsxs)(s.M,{children:[(0,o.jsx)(M.E,{color:"gray",children:"macos"===r?"⌘":"Ctrl"}),(0,o.jsx)(R.T,{w:"xs"}),(0,o.jsx)(M.E,{children:"Enter"})]})]})]})},E=e=>{let{onReset:n}=e,[a,{open:r,close:l}]=(0,v.q)(!1),t=()=>{n(),l()};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.z,{compact:!0,fullWidth:!0,variant:"outline",color:"gray",onClick:r,children:"Reset"}),(0,o.jsxs)(C.u,{opened:a,onClose:l,title:"Confirm",children:["Are you sure you want to reset stop words?",(0,o.jsx)(s.M,{mt:"lg",children:(0,o.jsx)(c.z,{variant:"filled",color:"red",onClick:t,children:"RESET"})})]})]})},F=(0,o.jsx)(x.A,{size:"xs",color:"blue",radius:"xl",variant:"transparent",children:(0,o.jsx)(w.Z,{size:(0,g.h)(10)})}),O=e=>{let{stopWordList:n,resetStopWord:a,appendStopWord:r,removeStopWord:l,setEmptyStopWord:s}=e,[c,u]=(0,d.useState)(""),x=()=>{let e=c.split("\n").filter(e=>""!==e).filter(e=>!n.includes(e));r(...new Set(e)),u("")};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.w.Section,{grow:!0,component:m.x,mt:"md",children:(0,o.jsx)(i.k,{wrap:"wrap",gap:"xs",children:n.map((e,n)=>(0,o.jsx)(j.C,{variant:"outline",pr:3,rightSection:F,onClick:()=>l(n),children:e},e))})}),(0,o.jsx)(h.w.Section,{mt:"xl",children:(0,o.jsxs)(t.K,{children:[(0,o.jsx)(p.g,{label:"Stop Word",description:"改行区切りで複数のstop wordを一括挿入できます",placeholder:"new stop word",radius:"xl",minRows:1,autosize:!0,rightSectionWidth:42,rightSection:(0,o.jsx)(W,{onClick:x}),value:c,onChange:e=>u(e.target.value),onKeyDown:(0,f.yr)([["mod+Enter",x]])}),(0,o.jsxs)(i.k,{justify:"space-between",gap:10,children:[(0,o.jsx)(E,{onReset:a}),(0,o.jsx)(k,{onClearAll:s})]})]})})]})};var T=a(6143);let _=e=>(0,o.jsx)(T.T,{label:"background color",value:e.color,color:e.color,onChangeEnd:e.onChange});var A=a(8791);let D=e=>(0,o.jsx)(A.r,{labelPosition:"left",label:"draw mask",checked:e.isDrawMask,onChange:e.onToggle}),K=e=>(0,o.jsx)(t.K,{spacing:"xs",children:e.colors.map((e,n)=>{let{color:a,onChange:r}=e;return(0,o.jsx)(T.T,{label:0===n?"font color":void 0,value:a,color:a,onChangeEnd:r},n)})});var N=a(2445);let G={1:{name:"Dela Gothic One ",css:"'Dela Gothic One', cursive"},2:{name:"DotGothic16",css:"'DotGothic16', sans-serif"},3:{name:"Hachi Maru Pop",css:"'Hachi Maru Pop', cursive"},4:{name:"Kaisei Tokumin",css:"'Kaisei Tokumin', serif"},5:{name:"Kiwi Maru",css:"'Kiwi Maru', serif"},6:{name:"M PLUS 1",css:"'M PLUS 1', sans-serif"},7:{name:"M PLUS Rounded 1c",css:"'M PLUS Rounded 1c', sans-serif"},8:{name:"Mochiy Pop One",css:"'Mochiy Pop One', sans-serif"},9:{name:"Noto Sans JP",css:"'Noto Sans JP', sans-serif"},10:{name:"Noto Serif JP",css:"'Noto Serif JP', serif"},11:{name:"Potta One",css:"'Potta One', cursive"},12:{name:"Rampart One",css:"'Rampart One', cursive"},13:{name:"RocknRoll One",css:"'RocknRoll One', sans-serif"},14:{name:"Sawarabi Mincho",css:"'Sawarabi Mincho', serif"},15:{name:"Train One",css:"'Train One', cursive"},16:{name:"Yuji Syuku",css:"'Yuji Syuku', serif"}},J=(0,d.forwardRef)(function(e,n){let{label:a,css:r,...l}=e;return(0,o.jsx)("div",{ref:n,...l,children:(0,o.jsxs)(i.k,{justify:"space-between",children:[(0,o.jsx)(y.x,{children:a}),(0,o.jsx)(y.x,{sx:{fontFamily:r},children:"サンプル"})]})})}),I=e=>{let{fontFamilyId:n,onChange:a}=e;return(0,o.jsx)(N.Ph,{label:"font family",placeholder:"font family",itemComponent:J,maxDropdownHeight:400,data:Object.entries(G).map(e=>{let[n,{name:a,css:r}]=e;return{value:n,label:a,fontFamily:r}}),defaultValue:n,onChange:a})},L=[100,200,300,400,500,600,700,800,900,"normal","bold","bolder","lighter"],V=e=>(0,o.jsx)(N.Ph,{label:"font weight",placeholder:"font weight",value:e.fontWeight,data:L.map(e=>({value:"".concat(e),label:"".concat(e)})),onChange:e.onChange});var q=a(4271);let U=e=>(0,o.jsx)(q.Y,{label:"grid size",placeholder:"grid size",value:e.gridSize,onChange:e.onChange}),Y=e=>{let{color:n,disabled:a,onChange:r}=e;return(0,o.jsx)(T.T,{disabled:a,label:"mask color",value:n,color:n,onChangeEnd:r})},H=e=>{let{maskWidth:n,disabled:a,onChange:r}=e;return(0,o.jsx)(q.Y,{label:"mask width",placeholder:"mask width",disabled:a,value:n,onChange:r})};var Z=a(4151),X=a(5050);let B=e=>(0,o.jsx)(Z.I.Wrapper,{label:"rotation ratio",children:(0,o.jsx)(X.i,{defaultValue:0,label:e=>"".concat(e,"%"),mb:"xl",marks:[{value:0,label:"0%"},{value:50,label:"50%"},{value:100,label:"100%"}],value:e.rotationRatio,onChangeEnd:e.onChange})}),Q=["circle","cardioid","diamond","square","triangle-forward","triangle","pentagon","star"],$=e=>(0,o.jsx)(N.Ph,{label:"shape",placeholder:"shape",value:e.shape,data:Q.map(e=>({value:e,label:e})),onChange:e.onChange}),ee=e=>{let{form:n,setForm:a}=e;return(0,o.jsx)(h.w.Section,{grow:!0,component:m.x,mt:"md",children:(0,o.jsxs)(t.K,{spacing:"sm",align:"stretch",children:[(0,o.jsx)(I,{fontFamilyId:n.fontFamilyId,onChange:e=>a("fontFamilyId",e)}),(0,o.jsx)(V,{fontWeight:"".concat(n.fontWeight),onChange:e=>a("fontWeight",e)}),(0,o.jsx)(K,{colors:n.colors.map((e,r)=>({color:e,onChange:e=>a("colors",n.colors.map((n,a)=>r===a?e:n))}))}),(0,o.jsx)(_,{color:n.backgroundColor,onChange:e=>a("backgroundColor",e)}),(0,o.jsx)(U,{gridSize:n.gridSize,onChange:e=>a("gridSize",e)}),(0,o.jsx)($,{shape:n.shape,onChange:e=>a("shape",e)}),(0,o.jsx)(B,{rotationRatio:n.rotateRatio,onChange:e=>a("rotateRatio",e)}),(0,o.jsx)(D,{isDrawMask:n.drawMask,onToggle:()=>a("drawMask",!n.drawMask)}),(0,o.jsx)(Y,{color:n.maskColor,disabled:!n.drawMask,onChange:e=>a("maskColor",e)}),(0,o.jsx)(H,{maskWidth:n.maskGapWidth,disabled:!n.drawMask,onChange:e=>a("maskGapWidth",e)})]})})},en=e=>{let{wcStyleFormProps:n,stopWordProps:a}=e,[r,l]=(0,d.useState)("wcStyle"),s={wcStyle:(0,o.jsx)(ee,{...n}),stopWord:(0,o.jsx)(O,{...a})};return(0,o.jsxs)(h.w,{px:"xl",py:"md",height:600,width:{base:300},children:[(0,o.jsx)(h.w.Section,{children:(0,o.jsx)(u.s,{value:r,onChange:e=>l(e),transitionTimingFunction:"ease",fullWidth:!0,data:[{label:"Style",value:"wcStyle"},{label:"Stop Word",value:"stopWord"}]})}),s[r]]})};var ea=a(353),er=a(9236),eo=a(4685);let el=e=>{let{size:n,...a}=e;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:(0,g.h)(n),height:(0,g.h)(n),fill:"currentColor",...a,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})},es=()=>(0,o.jsx)(ea.h,{height:60,p:"xs",children:(0,o.jsxs)(i.k,{justify:"space-between",align:"center",children:[(0,o.jsx)(er.D,{order:3,children:(0,o.jsx)(eo.e,{href:"https://ran350.github.io/ja-wordcloud/",color:"gray.7",underline:!1,children:"Japanese Word Cloud"})}),(0,o.jsx)(eo.e,{href:"https://github.com/ran350/ja-wordcloud"}),(0,o.jsx)(el,{size:30})]})}),et=e=>{let{placeholder:n,onChangeText:a}=e,r=e=>{a(e.currentTarget.value)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(p.g,{placeholder:n,autosize:!0,minRows:4,maxRows:5,onChange:r})})},ei=e=>(n,a,r)=>r>=32?e[0]:r>16?e[1]:e[2],ec=e=>(console.log(e),{...e,fontFamily:G[e.fontFamilyId].css,color:ei(e.colors),weightFactor:e=>(11*e)**1.1});var ed=a(8771),eh=a.n(ed);let eu=e=>{console.time("seg");let n=new(eh()),a=n.segment(e);return console.timeEnd("seg"),a},ex=(e,n)=>e.filter(e=>!n.includes(e)),eg=e=>Object.entries(e.reduce((e,n)=>({...e,[n]:(null!==(r=e[n])&&void 0!==r?r:0)+1}),{})),em=(e,n)=>{let a=eu(e),r=ex(a,n);return eg(r)},ej=e=>{let{sentence:n,stopWordList:r,wcStyleOption:l,magnification:s}=e,t=(0,d.useRef)(null);return(0,d.useEffect)(()=>{let e=em(n,r);a.e(83).then(a.t.bind(a,5083,23)).then(n=>{let{default:a}=n;null!==t.current&&a(t.current,{list:e,...ec(l)})})},[n,l,r]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("canvas",{ref:t,id:"canvas",width:16*s,height:9*s})})},ep="吾輩は猫である。名前はまだ無い。\nどこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと煙を吹く。どうも咽せぽくて実に弱った。これが人間の飲む煙草というものである事はようやくこの頃知った。";var ef=a(8528);let ew=["が","の","を","に","へ","で","と","や","ば","と","し","て","は","も","か","な","ね","ぞ","よ","わ","れ","せ","ね","た","だ","う","0","1","2","3","4","5","6","7","8","9",".",",","．","，","。","、","「","」","\n","(",")","（","）","'","’","・"],eC=()=>{let[e,n]=(0,ef.n)(ew),a=()=>n.setState(ew),r=n.append,o=e=>n.remove(e),l=()=>n.setState([]);return{stopWordList:e,resetStopWord:a,appendStopWord:r,removeStopWord:o,setEmptyStopWord:l}};var ev=a(7248);let ek={fontFamilyId:"1",fontWeight:"normal",colors:["#285943","#77af9c","#8cd790"],backgroundColor:"#f4f7f7",minSize:0,gridSize:10,drawMask:!1,maskColor:"#555555",maskGapWidth:20,minRotation:-90,maxRotation:90,rotationSteps:2,rotateRatio:.5,shape:"circle"},eb=()=>{let{values:e,setFieldValue:n}=(0,ev.c)({initialValues:ek});return{form:e,setForm:n}},eS=()=>{let{form:e,setForm:n}=eb(),{stopWordList:a,resetStopWord:r,appendStopWord:h,removeStopWord:u,setEmptyStopWord:x}=eC(),[g,m]=(0,d.useState)(ep),[j,p]=(0,d.useState)(ep),f=()=>m(j);return(0,o.jsx)(l.V,{padding:"md",header:(0,o.jsx)(es,{}),navbar:(0,o.jsx)(en,{wcStyleFormProps:{form:e,setForm:n},stopWordProps:{stopWordList:a,resetStopWord:r,appendStopWord:h,removeStopWord:u,setEmptyStopWord:x}}),children:(0,o.jsx)(s.M,{children:(0,o.jsxs)(t.K,{style:{width:"800px"},children:[(0,o.jsx)(ej,{sentence:g,stopWordList:a,wcStyleOption:e,magnification:50}),(0,o.jsx)(et,{placeholder:ep,onChangeText:p}),(0,o.jsx)(i.k,{justify:"flex-end",children:(0,o.jsx)(c.z,{size:"md",color:"green",onClick:f,children:"Generate"})})]})})})};var ey=eS}},function(e){e.O(0,[102,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);