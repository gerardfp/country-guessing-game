import{B as f,s as m}from"./index-fded08a6.js";const l=[];function d(t,n=f){let e;const r=new Set;function o(i){if(m(t,i)&&(t=i,e)){const c=!l.length;for(const a of r)a[1](),l.push(a,t);if(c){for(let a=0;a<l.length;a+=2)l[a][0](l[a+1]);l.length=0}}}function u(i){o(i(t))}function s(i,c=f){const a=[i,c];return r.add(a),r.size===1&&(e=n(o)||f),i(t),()=>{r.delete(a),r.size===0&&(e(),e=null)}}return{set:o,update:u,subscribe:s}}let p="",g="";function U(t){p=t.base,g=t.assets||p}function w(t){let n=t.baseURI;if(!n){const e=t.getElementsByTagName("base");n=e.length?e[0].href:t.URL}return n}function y(){return{x:pageXOffset,y:pageYOffset}}function R(t){let n,e=null,r=null,o=null;for(const s of t.composedPath())s instanceof Element&&(!n&&s.nodeName.toUpperCase()==="A"&&(n=s),e===null&&(e=b(s,"data-sveltekit-noscroll")),r===null&&(r=b(s,"data-sveltekit-prefetch")),o===null&&(o=b(s,"data-sveltekit-reload")));const u=n&&new URL(n instanceof SVGAElement?n.href.baseVal:n.href,document.baseURI);return{a:n,url:u,options:{noscroll:e,prefetch:r,reload:o}}}function b(t,n){const e=t.getAttribute(n);return e===null?e:e===""?!0:(e==="off",!1)}function h(t){const n=d(t);let e=!0;function r(){e=!0,n.update(s=>s)}function o(s){e=!1,n.set(s)}function u(s){let i;return n.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:r,set:o,subscribe:u}}function _(){const{set:t,subscribe:n}=d(!1);let e;async function r(){clearTimeout(e);const o=await fetch(`${g}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const{version:u}=await o.json(),s=u!=="1668244027637";return s&&(t(!0),clearTimeout(e)),s}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:n,check:r}}function E(t){t.client}const T={url:h({}),page:h({}),navigating:d(null),updated:_()};export{y as a,U as b,R as f,w as g,E as i,T as s};
