"use strict";(self.webpackChunkvista_docs=self.webpackChunkvista_docs||[]).push([[412],{9452:(e,s,t)=>{t.d(s,{c:()=>v});var a=t(1504),i=t(5456),r=t(9012),l=t(1432),n=t(867),c=t(4357),o=t(5592),m=t(3376);function d(e){const{pathname:s}=(0,o.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,m.Sc)(e.permalink,s))}(e,s)))),[e,s])}const b={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var u=t(7624);function h(e){let{sidebar:s}=e;const t=d(s.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.c)(b.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.c)(b.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,u.jsx)("ul",{className:(0,i.c)(b.sidebarItemList,"clean-list"),children:t.map((e=>(0,u.jsx)("li",{className:b.sidebarItem,children:(0,u.jsx)(n.c,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var g=t(5168);function p(e){let{sidebar:s}=e;const t=d(s.items);return(0,u.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(n.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,u.jsx)(g.Mx,{component:p,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.U)();return s?.items.length?"mobile"===t?(0,u.jsx)(j,{sidebar:s}):(0,u.jsx)(h,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,u.jsx)(r.c,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(x,{sidebar:s}),(0,u.jsx)("main",{className:(0,i.c)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),t&&(0,u.jsx)("div",{className:"col col--2",children:t})]})})})}},3024:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});t(1504);var a=t(5456),i=t(4357);const r=()=>(0,i.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=t(5756),n=t(5864),c=t(9452),o=t(3020),m=t(6448);const d={tag:"tag_Nnez"};var b=t(7624);function u(e){let{letterEntry:s}=e;return(0,b.jsxs)("article",{children:[(0,b.jsx)(m.c,{as:"h2",id:s.letter,children:s.letter}),(0,b.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,b.jsx)("li",{className:d.tag,children:(0,b.jsx)(o.c,{...e})},e.permalink)))}),(0,b.jsx)("hr",{})]})}function h(e){let{tags:s}=e;const t=function(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}(s);return(0,b.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,b.jsx)(u,{letterEntry:e},e.letter)))})}var g=t(8712);function p(e){let{tags:s,sidebar:t}=e;const i=r();return(0,b.jsxs)(l.cr,{className:(0,a.c)(n.W.wrapper.blogPages,n.W.page.blogTagsListPage),children:[(0,b.jsx)(l.U7,{title:i}),(0,b.jsx)(g.c,{tag:"blog_tags_list"}),(0,b.jsxs)(c.c,{sidebar:t,children:[(0,b.jsx)(m.c,{as:"h1",children:i}),(0,b.jsx)(h,{tags:s})]})]})}}}]);