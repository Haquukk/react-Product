import{r as o}from"./react-1d8b2501.js";var v=Object.defineProperty,O=Object.defineProperties,P=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))h.call(r,t)&&c(e,t,r[t]);return e},w=(e,r)=>O(e,P(r));function d(e,r,t){if(!e)return;if(t(e)===!0)return e;let n=r?e.return:e.child;for(;n;){const u=d(n,r,t);if(u)return u;n=r?null:n.sibling}}function m(e){try{return Object.defineProperties(e,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return e}}const s=m(o.createContext(null));class E extends o.Component{render(){return o.createElement(s.Provider,{value:this._reactInternals},this.props.children)}}const{ReactCurrentOwner:p,ReactCurrentDispatcher:f}=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function x(){const e=o.useContext(s);if(e===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const r=o.useId();return o.useMemo(()=>{for(const n of[p==null?void 0:p.current,e,e==null?void 0:e.alternate]){if(!n)continue;const u=d(n,!1,i=>{let a=i.memoizedState;for(;a;){if(a.memoizedState===r)return!0;a=a.next}});if(u)return u}},[e,r])}function y(){var e,r;const t=x(),[n]=o.useState(()=>new Map);n.clear();let u=t;for(;u;){const i=(e=u.type)==null?void 0:e._context;i&&i!==s&&!n.has(i)&&n.set(i,(r=f==null?void 0:f.current)==null?void 0:r.readContext(m(i))),u=u.return}return n}function F(){const e=y();return o.useMemo(()=>Array.from(e.keys()).reduce((r,t)=>n=>o.createElement(r,null,o.createElement(t.Provider,w(_({},n),{value:e.get(t)}))),r=>o.createElement(E,_({},r))),[e])}export{E as F,F as u};
