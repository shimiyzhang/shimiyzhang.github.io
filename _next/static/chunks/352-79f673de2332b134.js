(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{9618:function(e,r,t){var a={"./AuthorLayout":1322,"./AuthorLayout.tsx":1322,"./ListLayout":6834,"./ListLayout.tsx":6834,"./PostLayout":3605,"./PostLayout.tsx":3605,"./PostSimple":4255,"./PostSimple.tsx":4255};function s(e){return t(l(e))}function l(e){if(!t.o(a,e)){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=l,e.exports=s,s.id=9618},5988:function(e,r,t){"use strict";var a=t(5893),s=t(5675),l=t.n(s);let i=e=>{let{...r}=e;return(0,a.jsx)(l(),{...r})};r.Z=i},5868:function(e,r,t){"use strict";t.d(r,{t:function(){return x}});var a=t(5893),s=t(7294),l=({toc:e,indentDepth:r=3,fromHeading:t=1,toHeading:s=6,asDisclosure:l=!1,exclude:i=""})=>{let d=Array.isArray(i)?RegExp("^("+i.join("|")+")$","i"):RegExp("^("+i+")$","i"),n=e.filter(e=>e.depth>=t&&e.depth<=s&&!d.test(e.value)),c=(0,a.jsx)("ul",{children:n.map(e=>(0,a.jsx)("li",{className:`${e.depth>=r&&"ml-6"}`,children:(0,a.jsx)("a",{href:e.url,children:e.value})},e.value))});return(0,a.jsx)(a.Fragment,{children:l?(0,a.jsxs)("details",{open:!0,children:[(0,a.jsx)("summary",{className:"ml-6 pt-2 pb-2 text-xl font-bold",children:"Table of Contents"}),(0,a.jsx)("div",{className:"ml-6",children:c})]}):c})},i=({children:e})=>{let r=(0,s.useRef)(null),[t,l]=(0,s.useState)(!1),[i,d]=(0,s.useState)(!1),n=()=>{l(!0)},c=()=>{l(!1),d(!1)},o=()=>{d(!0),navigator.clipboard.writeText(r.current.textContent),setTimeout(()=>{d(!1)},2e3)};return(0,a.jsxs)("div",{ref:r,onMouseEnter:n,onMouseLeave:c,className:"relative",children:[t&&(0,a.jsx)("button",{"aria-label":"Copy code",className:`absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${i?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"}`,onClick:o,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:i?"text-green-400":"text-gray-300",children:i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,a.jsx)("pre",{children:e})]})},d=t(6960),n=t(5988),c=t(7966);let o=e=>{let{layout:r,content:s,...l}=e,i=t(9618)("./".concat(r)).default;return(0,a.jsx)(i,{content:s,...l})},x={Image:n.Z,TOCInline:l,a:c.Z,pre:i,wrapper:o,BlogNewsletterForm:d.w}},2866:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var a=t(5893);function s(e){let{children:r}=e;return(0,a.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:r})}},7930:function(e,r,t){"use strict";var a=t(5893),s=t(1576),l=t.n(s),i=t(7294);let d=()=>{let[e,r]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let t=()=>{window.scrollTo({top:0})},s=()=>{document.getElementById("comment").scrollIntoView()};return(0,a.jsxs)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(e?"md:flex":"md:hidden"),children:[l().comments.provider&&(0,a.jsx)("button",{"aria-label":"Scroll To Comment",onClick:s,className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.jsx)("button",{"aria-label":"Scroll To Top",onClick:t,className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})};r.Z=d},1322:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var a=t(5893),s=t(199),l=t(5988),i=t(9829);function d(e){let{children:r,content:t}=e,{name:d,avatar:n,occupation:c,company:o,email:x,juejin:m,zhihu:h,github:u}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.TQ,{title:"关于 - ".concat(d),description:"关于我 - ".concat(d)}),(0,a.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"关于我"})}),(0,a.jsxs)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center space-x-2 pt-8",children:[(0,a.jsx)(l.Z,{src:n,alt:"avatar",width:192,height:192,className:"h-48 w-48 rounded-full"}),(0,a.jsx)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:d}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400",children:c}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400",children:o}),(0,a.jsxs)("div",{className:"flex space-x-3 pt-6",children:[(0,a.jsx)(s.Z,{kind:"mail",href:"mailto:".concat(x)}),(0,a.jsx)(s.Z,{kind:"github",href:u}),(0,a.jsx)(s.Z,{kind:"juejin",href:m}),(0,a.jsx)(s.Z,{kind:"zhihu",href:h})]})]}),(0,a.jsx)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:r})]})]})]})}},3605:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var a=t(5893),s=t(7966),l=t(2866),i=t(1536),d=t(9829),n=t(5988),c=t(2065),o=t(1576),x=t.n(o),m=t(7930);let h={weekday:"long",year:"numeric",month:"long",day:"numeric"};function u(e){let{content:r,authorDetails:t,next:o,prev:u,children:p}=e,{path:y,date:g,title:j,tags:v}=r,f=y.split("/")[0];return(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(d.Uy,{url:"".concat(x().siteUrl,"/").concat(y),authorDetails:t,...r}),(0,a.jsx)(m.Z,{}),(0,a.jsx)("article",{children:(0,a.jsxs)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,a.jsx)("header",{className:"pt-6 xl:pb-6",children:(0,a.jsxs)("div",{className:"space-y-1 text-center",children:[(0,a.jsx)("dl",{className:"space-y-10",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,a.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.jsx)("time",{dateTime:g,children:new Date(g).toLocaleDateString(x().locale,h)})})]})}),(0,a.jsx)("div",{children:(0,a.jsx)(l.Z,{children:j})})]})}),(0,a.jsxs)("div",{className:"grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",children:[(0,a.jsxs)("dl",{className:"pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",children:[(0,a.jsx)("dt",{className:"sr-only",children:"Authors"}),(0,a.jsx)("dd",{children:(0,a.jsx)("ul",{className:"flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",children:t.map(e=>(0,a.jsxs)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,a.jsx)(n.Z,{src:e.avatar,width:38,height:38,alt:"avatar",className:"h-10 w-10 rounded-full"}),(0,a.jsxs)("dl",{className:"whitespace-nowrap text-sm font-medium leading-5",children:[(0,a.jsx)("dt",{className:"sr-only",children:"作者"}),(0,a.jsx)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name})]})]},e.name))})})]}),(0,a.jsx)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,a.jsx)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:p})}),(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",children:[v&&(0,a.jsxs)("div",{className:"py-4 xl:py-8",children:[(0,a.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"标签"}),(0,a.jsx)("div",{className:"mt-3 flex flex-wrap",children:v.map(e=>(0,a.jsx)(c.Z,{text:e},e))})]}),(o||u)&&(0,a.jsxs)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[u&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"上一篇 文章"}),(0,a.jsx)("div",{className:"mt-3 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,a.jsx)(s.Z,{href:"/".concat(u.path),children:u.title})})]}),o&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"下一篇 文章"}),(0,a.jsx)("div",{className:"mt-3 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,a.jsx)(s.Z,{href:"/".concat(o.path),children:o.title})})]})]})]}),(0,a.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,a.jsx)(s.Z,{href:"/".concat(f),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Back to the blog",children:"← 返回文章列表"})})]})]})]})})]})}},4255:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var a=t(5893),s=t(8193),l=t(7966),i=t(2866),d=t(1536),n=t(9829),c=t(1576),o=t.n(c),x=t(7930);function m(e){let{content:r,next:t,prev:c,children:m}=e,{path:h,date:u,title:p}=r;return(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(n.Uy,{url:"".concat(o().siteUrl,"/").concat(h),...r}),(0,a.jsx)(x.Z,{}),(0,a.jsx)("article",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,a.jsx)("dl",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,a.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.jsx)("time",{dateTime:u,children:(0,s.p)(u,o().locale)})})]})}),(0,a.jsx)("div",{children:(0,a.jsx)(i.Z,{children:p})})]})}),(0,a.jsxs)("div",{className:"grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0",children:[(0,a.jsx)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,a.jsx)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:m})}),(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[c&&(0,a.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,a.jsxs)(l.Z,{href:"/".concat(c.path),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Previous post: ".concat(c.title),children:["← ",c.title]})}),t&&(0,a.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,a.jsxs)(l.Z,{href:"/".concat(t.path),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"Next post: ".concat(t.title),children:[t.title," →"]})})]})})]})]})})]})}},2837:function(e,r,t){"use strict";t.d(r,{J:function(){return o}}),t(9671);var a=(e,r)=>{let t=Object.assign({},e);return r.forEach(e=>{delete t[e]}),t},s=t(7294),l=t(5893),i=t.t(l,2),d=t(3935),n=(e,r={})=>{let t={React:s,ReactDOM:d,_jsx_runtime:i,...r},a=Function(...Object.keys(t),e);return a(...Object.values(t)).default},c=(e,r={})=>s.useMemo(()=>n(e,r),[e,r]),o=({layout:e,content:r,MDXComponents:t,...s})=>{let i=c(r.body.code),d=a(r,["body","_raw","_id"]);return(0,l.jsx)(i,{layout:e,content:d,components:t,...s})}},6960:function(e,r,t){"use strict";t.d(r,{w:function(){return i},z:function(){return l}});var a=t(7294),s=t(5893),l=({title:e="Subscribe to the newsletter",apiUrl:r="/api/newsletter"})=>{let t=(0,a.useRef)(null),[l,i]=(0,a.useState)(!1),[d,n]=(0,a.useState)(""),[c,o]=(0,a.useState)(!1),x=async e=>{e.preventDefault();let a=await fetch(r,{body:JSON.stringify({email:t.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:s}=await a.json();if(s){i(!0),n("Your e-mail address is invalid or you are already subscribed!");return}t.current.value="",i(!1),o(!0),n("Successfully! \uD83C\uDF89 You are now subscribed.")};return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:e}),(0,s.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,s.jsx)("div",{children:(0,s.jsxs)("label",{htmlFor:"email-input",children:[(0,s.jsx)("span",{className:"sr-only",children:"Email address"}),(0,s.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:c?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:t,required:!0,type:"email",disabled:c})]})}),(0,s.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,s.jsx)("button",{className:`bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${c?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"} focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,type:"submit",disabled:c,children:c?"Thank you!":"Sign up"})})]}),l&&(0,s.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:d})]})},i=({title:e,apiUrl:r})=>(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,s.jsx)(l,{title:e,apiUrl:r})})})}}]);