(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3528)}])},9829:function(e,t,r){"use strict";r.d(t,{$t:function(){return m},TQ:function(){return d},Uy:function(){return x}});var n=r(5893),a=r(9008),s=r.n(a),i=r(1163),l=r(1576),c=r.n(l);let o=e=>{let{title:t,description:r,ogType:a,ogImage:l,twImage:o,canonicalUrl:d}=e,m=(0,i.useRouter)();return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(m.asPath)}),(0,n.jsx)("meta",{property:"og:type",content:a}),(0,n.jsx)("meta",{property:"og:site_name",content:c().title}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:title",content:t}),Array.isArray(l)?l.map(e=>{let{url:t}=e;return(0,n.jsx)("meta",{property:"og:image",content:t},t)}):(0,n.jsx)("meta",{property:"og:image",content:l},l),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:c().twitter}),(0,n.jsx)("meta",{name:"twitter:title",content:t}),(0,n.jsx)("meta",{name:"twitter:description",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:o}),(0,n.jsx)("link",{rel:"canonical",href:d||"".concat(c().siteUrl).concat(m.asPath)})]})},d=e=>{let{title:t,description:r}=e,a=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner;return(0,n.jsx)(o,{title:t,description:r,ogType:"website",ogImage:a,twImage:s})},m=e=>{let{title:t,description:r}=e,a=c().siteUrl+c().socialBanner,l=c().siteUrl+c().socialBanner,d=(0,i.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{title:t,description:r,ogType:"website",ogImage:a,twImage:l}),(0,n.jsx)(s(),{children:(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},x=e=>{let t,{authorDetails:r,title:a,summary:i,date:l,lastmod:d,url:m,images:x=[],canonicalUrl:p}=e,h=new Date(l).toISOString(),u=new Date(d||l).toISOString(),g=0===x.length?[c().socialBanner]:"string"==typeof x?[x]:x,y=g.map(e=>({"@type":"ImageObject",url:e.includes("http")?e:c().siteUrl+e}));t=r?r.map(e=>({"@type":"Person",name:e.name})):{"@type":"Person",name:c().author};let f={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":m},headline:a,image:y,datePublished:h,dateModified:u,author:t,publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:i},j=y[0].url;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{title:a,description:i,ogType:"article",ogImage:y,twImage:j,canonicalUrl:p}),(0,n.jsxs)(s(),{children:[l&&(0,n.jsx)("meta",{property:"article:published_time",content:h}),d&&(0,n.jsx)("meta",{property:"article:modified_time",content:u}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f,null,2)}})]})]})}},2065:function(e,t,r){"use strict";var n=r(5893),a=r(1664),s=r.n(a),i=r(4955);let l=e=>{let{text:t}=e;return(0,n.jsx)(s(),{href:"/tags/".concat((0,i.G)(t)),className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})};t.Z=l},3528:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return j},default:function(){return v}});var n=r(5893),a=r(7966),s=r(9829),i=r(2065),l=r(1576),c=r.n(l),o=r(8193),d=r(6960),m=r(3614),x=r.n(m),p=r(7294),h=r(2212),u=r(4611),g=r(2886),y=r(2010);function f(){let{theme:e}=(0,y.F)(),t=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let r=t.current.offsetWidth,n=t.current.offsetHeight,a=new h.xsS;a.background=new h.Ilk("dark"===e?1513239:16777215);let s=new h.cPb(75,r/n,.1,1e3),i=new h.CP7({antialias:!0});i.setSize(r,r),t.current.appendChild(i.domElement);let l=new u.E;l.load("/static/models/forest_house.glb",e=>{let t=e.scene;t.scale.set(25,25,25),t.rotation.y=3*Math.PI/5,t.position.y=-1.5,a.add(t)},void 0,e=>{console.error(e)}),s.position.z=5;let c=new g.z(s,i.domElement);function o(){let e=t.current.offsetWidth,r=t.current.offsetHeight;s.aspect=e/r,s.updateProjectionMatrix(),i.setSize(e,r)}return c.enableDamping=!0,c.enableZoom=!1,function e(){requestAnimationFrame(e),i.render(a,s),c.update()}(),window.addEventListener("resize",o),()=>{i.dispose(),window.removeEventListener("resize",o)}},[e]),(0,n.jsx)("div",{ref:t,className:"group relative h-[calc(100vh_-_130px)] w-full",children:(0,n.jsxs)("div",{className:"absolute bottom-12 left-0 right-0 m-auto hidden w-fit text-gray-900 group-hover:block dark:text-gray-100",children:["model from\xa0",(0,n.jsx)("a",{className:"text-blue-600 underline",href:"https://sketchfab.com/peachyroyalty",target:"_blank",rel:"noopener noreferrer",children:"peachyroyalty"})]})})}var j=!0;function v(e){let{posts:t}=e,[r,l]=(0,p.useState)(c().description);(0,p.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://v1.hitokoto.cn?c=i&min_length=0&max_length=30/",{method:"POST"}).then(e=>e.json());l("".concat(e.hitokoto," —— 《").concat(e.from,"》"))}catch(e){console.error(e)}};e()},[]);let m=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let e=new(x())(m.current,{strings:[r],cursorChar:"✨",startDelay:1e3,typeSpeed:100,backSpeed:100,backDelay:500,loop:!1});return()=>{e.destroy()}},[r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.TQ,{title:"首页 - ".concat(c().title),description:c().description}),(0,n.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,n.jsx)(f,{}),(0,n.jsxs)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,n.jsx)("h1",{className:"mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"最近文章"}),(0,n.jsx)("span",{ref:m,className:"text-lg leading-7 text-gray-500 dark:text-gray-400"})]}),(0,n.jsxs)("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[!t.length&&"暂无数据",t.slice(0,5).map(e=>{let{slug:t,date:r,title:s,summary:l,tags:d}=e;return(0,n.jsx)("li",{className:"py-12",children:(0,n.jsx)("article",{children:(0,n.jsxs)("div",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,n.jsxs)("dl",{children:[(0,n.jsx)("dt",{className:"sr-only",children:"发布时间"}),(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:r,children:(0,o.p)(r,c().locale)})})]}),(0,n.jsxs)("div",{className:"space-y-4 xl:col-span-3",children:[(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.jsx)(a.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:s})}),(0,n.jsx)("div",{className:"mt-3 flex flex-wrap",children:d.map(e=>(0,n.jsx)(i.Z,{text:e},e))})]}),(0,n.jsx)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:l})]}),(0,n.jsx)("div",{className:"text-base font-medium leading-6",children:(0,n.jsx)(a.Z,{href:"/blog/".concat(t),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":'Read "'.concat(s,'"'),children:"查看更多 →"})})]})]})})},t)})]})]}),t.length>5&&(0,n.jsx)("div",{className:"flex justify-end text-base font-medium leading-6",children:(0,n.jsx)(a.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"All posts",children:"所有文章 →"})}),c().newsletter.provider&&(0,n.jsx)("div",{className:"flex items-center justify-center pt-4",children:(0,n.jsx)(d.z,{})})]})}}},function(e){e.O(0,[737,741,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);