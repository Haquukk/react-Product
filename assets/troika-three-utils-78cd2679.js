import{aB as T,aJ as E,aK as P,aL as U,aM as A}from"./three-7b814cf1.js";const R=/\bvoid\s+main\s*\(\s*\)\s*{/g;function v(t){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function r(i,o){let u=A[o];return u?v(u):i}return t.replace(e,r)}const s=[];for(let t=0;t<256;t++)s[t]=(t<16?"0":"")+t.toString(16);function K(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(s[t&255]+s[t>>8&255]+s[t>>16&255]+s[t>>24&255]+"-"+s[e&255]+s[e>>8&255]+"-"+s[e>>16&15|64]+s[e>>24&255]+"-"+s[r&63|128]+s[r>>8&255]+"-"+s[r>>16&255]+s[r>>24&255]+s[i&255]+s[i>>8&255]+s[i>>16&255]+s[i>>24&255]).toUpperCase()}const m=Object.assign||function(){let t=arguments[0];for(let e=1,r=arguments.length;e<r;e++){let i=arguments[e];if(i)for(let o in i)i.hasOwnProperty(o)&&(t[o]=i[o])}return t},B=Date.now(),$=new WeakMap,x=new Map;let N=1e10;function D(t,e){const r=k(e);let i=$.get(t);if(i||$.set(t,i=Object.create(null)),i[r])return new i[r];const o=`_onBeforeCompile${r}`,u=function(n){t.onBeforeCompile.call(this,n);const f=this.customProgramCacheKey()+"|"+n.vertexShader+"|"+n.fragmentShader;let c=x[f];if(!c){const _=H(n,e,r);c=x[f]=_}n.vertexShader=c.vertexShader,n.fragmentShader=c.fragmentShader,m(n.uniforms,this.uniforms),e.timeUniform&&(n.uniforms[e.timeUniform]={get value(){return Date.now()-B}}),this[o]&&this[o](n)},l=function(){return d(e.chained?t:t.clone())},d=function(n){const f=Object.create(n,p);return Object.defineProperty(f,"baseMaterial",{value:t}),Object.defineProperty(f,"id",{value:N++}),f.uuid=K(),f.uniforms=m({},n.uniforms,e.uniforms),f.defines=m({},n.defines,e.defines),f.defines[`TROIKA_DERIVED_MATERIAL_${r}`]="",f.extensions=m({},n.extensions,e.extensions),f._listeners=void 0,f},p={constructor:{value:l},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return t.customProgramCacheKey()+"|"+r}},onBeforeCompile:{get(){return u},set(n){this[o]=n}},copy:{writable:!0,configurable:!0,value:function(n){return t.copy.call(this,n),!t.isShaderMaterial&&!t.isDerivedMaterial&&(m(this.extensions,n.extensions),m(this.defines,n.defines),m(this.uniforms,T.clone(n.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const n=new t.constructor;return d(n).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let n=this._depthMaterial;return n||(n=this._depthMaterial=D(t.isDerivedMaterial?t.getDepthMaterial():new E({depthPacking:P}),e),n.defines.IS_DEPTH_MATERIAL="",n.uniforms=this.uniforms),n}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let n=this._distanceMaterial;return n||(n=this._distanceMaterial=D(t.isDerivedMaterial?t.getDistanceMaterial():new U,e),n.defines.IS_DISTANCE_MATERIAL="",n.uniforms=this.uniforms),n}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:n,_distanceMaterial:f}=this;n&&n.dispose(),f&&f.dispose(),t.dispose.call(this)}}};return i[r]=l,new l}function H({vertexShader:t,fragmentShader:e},r,i){let{vertexDefs:o,vertexMainIntro:u,vertexMainOutro:l,vertexTransform:d,fragmentDefs:p,fragmentMainIntro:n,fragmentMainOutro:f,fragmentColorTransform:c,customRewriter:_,timeUniform:h}=r;if(o=o||"",u=u||"",l=l||"",p=p||"",n=n||"",f=f||"",(d||_)&&(t=v(t)),(c||_)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=v(e)),_){let a=_({vertexShader:t,fragmentShader:e});t=a.vertexShader,e=a.fragmentShader}if(c){let a=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,g=>(a.push(g),"")),f=`${c}
${a.join(`
`)}
${f}`}if(h){const a=`
uniform float ${h};
`;o=a+o,p=a+p}return d&&(t=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${t}
`,o=`${o}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${d}
}
`,u=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${u}
`,t=t.replace(/\b(position|normal|uv)\b/g,(a,g,w,O)=>/\battribute\s+vec[23]\s+$/.test(O.substr(0,w))?g:`troika_${g}_${i}`)),t=M(t,i,o,u,l),e=M(e,i,p,n,f),{vertexShader:t,fragmentShader:e}}function M(t,e,r,i,o){return(i||o||r)&&(t=t.replace(R,`
${r}
void troikaOrigMain${e}() {`),t+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${o}
}`),t}function I(t,e){return t==="uniforms"?void 0:typeof e=="function"?e.toString():e}let j=0;const C=new Map;function k(t){const e=JSON.stringify(t,I);let r=C.get(e);return r==null&&C.set(e,r=++j),r}export{D as c,R as v};
