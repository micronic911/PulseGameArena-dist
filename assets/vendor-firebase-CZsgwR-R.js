import{o as Lo,d as $a}from"./vendor-DX04z9ek.js";const by=()=>{};var Eh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Sy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,u=s+2<n.length,l=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,v=l&63;u||(v=64,o||(g=64)),r.push(t[f],t[p],t[g],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Nf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||l==null||p==null)throw new Ry;const g=i<<2|c>>4;if(r.push(g),l!==64){const v=c<<4&240|l>>2;if(r.push(v),p!==64){const V=l<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ry extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Py=function(n){const e=Nf(n);return xf.encodeByteArray(e,!0)},lo=function(n){return Py(n).replace(/\./g,"")},Of=function(n){try{return xf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=()=>Mf().__FIREBASE_DEFAULTS__,Vy=()=>{if(typeof process>"u"||typeof Eh>"u")return;const n=Eh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ky=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Of(n[1]);return e&&JSON.parse(e)},Fo=()=>{try{return by()||Cy()||Vy()||ky()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lf=n=>{var e,t;return(t=(e=Fo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Dy=n=>{const e=Lf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ff=()=>{var n;return(n=Fo())==null?void 0:n.config},Uf=n=>{var e;return(e=Fo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[lo(JSON.stringify(t)),lo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Bf(){var e;const n=(e=Fo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function My(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fy(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qf(){return!Bf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $f(){return!Bf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function ai(){try{return typeof indexedDB=="object"}catch{return!1}}function Uo(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function zc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="FirebaseError";class ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Uy,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?By(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ut(s,c,r)}}function By(n,e){return n.replace(qy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qy=/\{\$([^}]+)}/g;function $y(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(vh(i)&&vh(o)){if(!tt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function vh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jy(n,e){const t=new zy(n,e);return t.subscribe.bind(t)}class zy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ja),s.error===void 0&&(s.error=ja),s.complete===void 0&&(s.complete=ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ja(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e3,Hy=2,Wy=14400*1e3,Qy=.5;function Ah(n,e=Ky,t=Hy){const r=e*Math.pow(t,n),s=Math.round(Qy*r*(Math.random()-.5)*2);return Math.min(Wy,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gc(n){return(await fetch(n,{credentials:"include"})).ok}class Ze{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ny;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xy(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(n){return n===Rn?void 0:n}function Xy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const eI={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},tI=Q.INFO,nI={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},rI=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=nI[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bo{constructor(e){this.name=e,this._logLevel=tI,this._logHandler=rI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function iI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cc="@firebase/app",bh="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Bo("@firebase/app"),oI="@firebase/app-compat",aI="@firebase/analytics-compat",cI="@firebase/analytics",uI="@firebase/app-check-compat",lI="@firebase/app-check",hI="@firebase/auth",dI="@firebase/auth-compat",fI="@firebase/database",pI="@firebase/data-connect",mI="@firebase/database-compat",gI="@firebase/functions",_I="@firebase/functions-compat",yI="@firebase/installations",II="@firebase/installations-compat",TI="@firebase/messaging",wI="@firebase/messaging-compat",EI="@firebase/performance",vI="@firebase/performance-compat",AI="@firebase/remote-config",bI="@firebase/remote-config-compat",SI="@firebase/storage",RI="@firebase/storage-compat",PI="@firebase/firestore",CI="@firebase/ai",VI="@firebase/firestore-compat",kI="firebase",DI="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="[DEFAULT]",NI={[cc]:"fire-core",[oI]:"fire-core-compat",[cI]:"fire-analytics",[aI]:"fire-analytics-compat",[lI]:"fire-app-check",[uI]:"fire-app-check-compat",[hI]:"fire-auth",[dI]:"fire-auth-compat",[fI]:"fire-rtdb",[pI]:"fire-data-connect",[mI]:"fire-rtdb-compat",[gI]:"fire-fn",[_I]:"fire-fn-compat",[yI]:"fire-iid",[II]:"fire-iid-compat",[TI]:"fire-fcm",[wI]:"fire-fcm-compat",[EI]:"fire-perf",[vI]:"fire-perf-compat",[AI]:"fire-rc",[bI]:"fire-rc-compat",[SI]:"fire-gcs",[RI]:"fire-gcs-compat",[PI]:"fire-fst",[VI]:"fire-fst-compat",[CI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Map,xI=new Map,uc=new Map;function Sh(n,e){try{n.container.addComponent(e)}catch(t){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nt(n){const e=n.name;if(uc.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,n);for(const t of fo.values())Sh(t,n);for(const t of xI.values())Sh(t,n);return!0}function wt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function OI(n,e,t=ho){wt(n,e).clearInstance(t)}function st(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new dn("app","Firebase",MI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=DI;function FI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ho,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=Ff()),!t)throw en.create("no-options");const i=fo.get(s);if(i){if(tt(t,i.options)&&tt(r,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new Zy(s);for(const u of uc.values())o.addComponent(u);const c=new LI(t,r,o);return fo.set(s,c),c}function qo(n=ho){const e=fo.get(n);if(!e&&n===ho&&Ff())return FI();if(!e)throw en.create("no-app",{appName:n});return e}function Ge(n,e,t){let r=NI[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(o.join(" "));return}nt(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="firebase-heartbeat-database",BI=1,Ks="firebase-heartbeat-store";let za=null;function jf(){return za||(za=Lo(UI,BI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ks)}catch(t){console.warn(t)}}}}).catch(n=>{throw en.create("idb-open",{originalErrorMessage:n.message})})),za}async function qI(n){try{const t=(await jf()).transaction(Ks),r=await t.objectStore(Ks).get(zf(n));return await t.done,r}catch(e){if(e instanceof ut)Rt.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(t.message)}}}async function Rh(n,e){try{const r=(await jf()).transaction(Ks,"readwrite");await r.objectStore(Ks).put(e,zf(n)),await r.done}catch(t){if(t instanceof ut)Rt.warn(t.message);else{const r=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rt.warn(r.message)}}}function zf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=1024,jI=30;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ph();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jI){const o=HI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ph(),{heartbeatsToSend:r,unsentEntries:s}=GI(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Rt.warn(t),""}}}function Ph(){return new Date().toISOString().substring(0,10)}function GI(n,e=$I){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ch(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ch(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ai()?Uo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ch(n){return lo(JSON.stringify({version:2,heartbeats:n})).length}function HI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(n){nt(new Ze("platform-logger",e=>new sI(e),"PRIVATE")),nt(new Ze("heartbeat",e=>new zI(e),"PRIVATE")),Ge(cc,bh,n),Ge(cc,bh,"esm2020"),Ge("fire-js","")}WI("");var QI="firebase",JI="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(QI,JI,"app");function Gf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YI=Gf,Kf=new dn("auth","Firebase",Gf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Bo("@firebase/auth");function XI(n,...e){po.logLevel<=Q.WARN&&po.warn(`Auth (${Qr}): ${n}`,...e)}function Ji(n,...e){po.logLevel<=Q.ERROR&&po.error(`Auth (${Qr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,...e){throw Hc(n,...e)}function ot(n,...e){return Hc(n,...e)}function Kc(n,e,t){const r={...YI(),[e]:t};return new dn("auth","Firebase",r).create(e,{appName:n.name})}function Ln(n){return Kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(n,"argument-error"),Kc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kf.create(n,...e)}function z(n,e,...t){if(!n)throw Hc(e,...t)}function vt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ji(e),new Error(e)}function Pt(n,e){n||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function eT(){return Vh()==="http:"||Vh()==="https:"}function Vh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||jc()||"connection"in navigator)?navigator.onLine:!0}function nT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=Oy()||Ly()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n,e){Pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iT=new ui(3e4,6e4);function Qc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Jr(n,e,t,r,s={}){return Wf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ci({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:u,...i};return My()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Wr(n.emulatorConfig.host)&&(l.credentials="include"),Hf.fetch()(await Qf(n,n.config.apiHost,t,c),l)})}async function Wf(n,e,t){n._canInitEmulator=!1;const r={...rT,...e};try{const s=new aT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw qi(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Kc(n,f,l);It(n,f)}}catch(s){if(s instanceof ut)throw s;It(n,"network-request-failed",{message:String(s)})}}async function oT(n,e,t,r,s={}){const i=await Jr(n,e,t,r,s);return"mfaPendingCredential"in i&&It(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Wc(n.config,s):`${n.config.apiScheme}://${s}`;return sT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class aT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),iT.get())})}}function qi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ot(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(n,e){return Jr(n,"POST","/v1/accounts:delete",e)}async function mo(n,e){return Jr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uT(n,e=!1){const t=X(n),r=await t.getIdToken(e),s=Jc(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Os(Ga(s.auth_time)),issuedAtTime:Os(Ga(s.iat)),expirationTime:Os(Ga(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ga(n){return Number(n)*1e3}function Jc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ji("JWT malformed, contained fewer than 3 sections"),null;try{const s=Of(t);return s?JSON.parse(s):(Ji("Failed to decode base64 JWT payload"),null)}catch(s){return Ji("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kh(n){const e=Jc(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ut&&lT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(n){var p;const e=n.auth,t=await n.getIdToken(),r=await Hs(n,mo(e,{idToken:t}));z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Jf(s.providerUserInfo):[],o=fT(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,f)}async function dT(n){const e=X(n);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(n,e){const t=await Wf(n,{},async()=>{const r=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Qf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Wr(n.emulatorConfig.host)&&(u.credentials="include"),Hf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mT(n,e){return Jr(n,"POST","/v2/accounts:revokeToken",Qc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=kh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await pT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ir;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uT(this,e)}reload(){return dT(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Hs(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:v,providerData:V,stsTokenManager:k}=t;z(p&&k,e,"internal-error");const D=Ir.fromJSON(this.name,k);z(typeof p=="string",e,"internal-error"),$t(r,e.name),$t(s,e.name),z(typeof g=="boolean",e,"internal-error"),z(typeof v=="boolean",e,"internal-error"),$t(i,e.name),$t(o,e.name),$t(c,e.name),$t(u,e.name),$t(l,e.name),$t(f,e.name);const F=new it({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:l,lastLoginAt:f});return V&&Array.isArray(V)&&(F.providerData=V.map($=>({...$}))),u&&(F._redirectEventId=u),F}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ir;s.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await go(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ir;c.updateFromIdToken(r);const u=new it({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new Map;function At(n){Pt(n instanceof Function,"Expected a class definition");let e=Dh.get(n);return e?(Pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yf.type="NONE";const Nh=Yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n,e,t){return`firebase:${n}:${e}:${t}`}class Tr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await mo(this.auth,{idToken:e}).catch(()=>{});return t?it._fromGetAccountInfoResponse(this.auth,t,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Tr(At(Nh),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||At(Nh);const o=Yi(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const f=await l._get(o);if(f){let p;if(typeof f=="string"){const g=await mo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await it._fromGetAccountInfoResponse(e,g,f)}else p=it._fromJSON(e,f);l!==i&&(c=p),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Tr(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Tr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rp(e))return"Blackberry";if(sp(e))return"Webos";if(Zf(e))return"Safari";if((e.includes("chrome/")||ep(e))&&!e.includes("edge/"))return"Chrome";if(np(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xf(n=Ee()){return/firefox\//i.test(n)}function Zf(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ep(n=Ee()){return/crios\//i.test(n)}function tp(n=Ee()){return/iemobile/i.test(n)}function np(n=Ee()){return/android/i.test(n)}function rp(n=Ee()){return/blackberry/i.test(n)}function sp(n=Ee()){return/webos/i.test(n)}function Yc(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gT(n=Ee()){var e;return Yc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function _T(){return Fy()&&document.documentMode===10}function ip(n=Ee()){return Yc(n)||np(n)||sp(n)||rp(n)||/windows phone/i.test(n)||tp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n,e=[]){let t;switch(n){case"Browser":t=xh(Ee());break;case"Worker":t=`${xh(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(n,e={}){return Jr(n,"GET","/v2/passwordPolicy",Qc(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=6;class wT{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??TT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oh(this),this.idTokenSubscription=new Oh(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await mo(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await go(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(Ln(this));const t=e?X(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IT(this),t=new wT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await mT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=op(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&XI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $o(n){return X(n)}class Oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=jy(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vT(n){Xc=n}function AT(n){return Xc.loadJS(n)}function bT(){return Xc.gapiScript}function ST(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(n,e){const t=wt(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(tt(i,e??{}))return s;It(s,"already-initialized")}return t.initialize({options:e})}function PT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CT(n,e,t){const r=$o(n);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ap(e),{host:o,port:c}=VT(e),u=c===null?"":`:${c}`,l={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(tt(l,r.config.emulator)&&tt(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Wr(o)?Gc(`${i}//${o}${u}`):kT()}function ap(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function VT(n){const e=ap(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mh(o)}}}function Mh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(n,e){return oT(n,"POST","/v1/accounts:signInWithIdp",Qc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="http://localhost";class qn extends cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new qn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,wr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}buildRequest(){const e={requestUri:DT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ci(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends li{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends li{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends li{constructor(){super("twitter.com")}static credential(e,t){return qn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qt.credential(t,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),o=Lh(r);return new Sr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Lh(r);return new Sr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Lh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends ut{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new _o(e,t,r,s)}}function up(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(n,i,e,r):i})}async function NT(n,e,t=!1){const r=await Hs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(n,e,t=!1){const{auth:r}=n;if(st(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await Hs(n,up(r,s,e,n),t);z(i.idToken,r,"internal-error");const o=Jc(i.idToken);z(o,r,"internal-error");const{sub:c}=o;return z(n.uid===c,r,"user-mismatch"),Sr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(n,e,t=!1){if(st(n.app))return Promise.reject(Ln(n));const r="signIn",s=await up(n,r,e),i=await Sr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function MT(n,e,t,r){return X(n).onIdTokenChanged(e,t,r)}function LT(n,e,t){return X(n).beforeAuthStateChanged(e,t)}function oC(n,e,t,r){return X(n).onAuthStateChanged(e,t,r)}function aC(n){return X(n).signOut()}const yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=1e3,UT=10;class hp extends lp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_T()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},FT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hp.type="LOCAL";const BT=hp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends lp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dp.type="SESSION";const fp=dp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(t.origin,i)),u=await qT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const l=eu("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function jT(n){gt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function zT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function KT(){return pp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="firebaseLocalStorageDb",HT=1,Io="firebaseLocalStorage",gp="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zo(n,e){return n.transaction([Io],e?"readwrite":"readonly").objectStore(Io)}function WT(){const n=indexedDB.deleteDatabase(mp);return new hi(n).toPromise()}function dc(){const n=indexedDB.open(mp,HT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Io,{keyPath:gp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Io)?e(r):(r.close(),await WT(),e(await dc()))})})}async function Fh(n,e,t){const r=zo(n,!0).put({[gp]:e,value:t});return new hi(r).toPromise()}async function QT(n,e){const t=zo(n,!1).get(e),r=await new hi(t).toPromise();return r===void 0?null:r.value}function Uh(n,e){const t=zo(n,!0).delete(e);return new hi(t).toPromise()}const JT=800,YT=3;class _p{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>YT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(KT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await zT(),!this.activeServiceWorker)return;this.sender=new $T(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await Fh(e,yo,"1"),await Uh(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>QT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=zo(s,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_p.type="LOCAL";const XT=_p;new ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e){return e?At(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ZT(n){return OT(n.auth,new tu(n),n.bypassAuthState)}function ew(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),xT(t,new tu(n),n.bypassAuthState)}async function tw(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),NT(t,new tu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZT;case"linkViaPopup":case"linkViaRedirect":return tw;case"reauthViaPopup":case"reauthViaRedirect":return ew;default:It(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=new ui(2e3,1e4);async function cC(n,e,t){if(st(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const r=$o(n);ZI(n,e,Zc);const s=yp(r,t);return new xn(r,"signInViaPopup",e,s).executeNotNull()}class xn extends Ip{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nw.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="pendingRedirect",Xi=new Map;class sw extends Ip{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xi.get(this.auth._key());if(!e){try{const r=await iw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xi.set(this.auth._key(),e)}return this.bypassAuthState||Xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iw(n,e){const t=cw(e),r=aw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ow(n,e){Xi.set(n._key(),e)}function aw(n){return At(n._redirectPersistence)}function cw(n){return Yi(rw,n.config.apiKey,n.name)}async function uw(n,e,t=!1){if(st(n.app))return Promise.reject(Ln(n));const r=$o(n),s=yp(r,e),o=await new sw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=600*1e3;class hw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bh(e))}saveEventToCache(e){this.cachedEventUids.add(Bh(e)),this.lastProcessedEventTime=Date.now()}}function Bh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(n,e={}){return Jr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mw=/^https?/;async function gw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fw(n);for(const t of e)try{if(_w(t))return}catch{}It(n,"unauthorized-domain")}function _w(n){const e=lc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!mw.test(t))return!1;if(pw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new ui(3e4,6e4);function qh(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Iw(n){return new Promise((e,t)=>{var s,i,o;function r(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),t(ot(n,"network-request-failed"))},timeout:yw.get()})}if((i=(s=gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=gt().gapi)!=null&&o.load)r();else{const c=ST("iframefcb");return gt()[c]=()=>{gapi.load?r():t(ot(n,"network-request-failed"))},AT(`${bT()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function Tw(n){return Zi=Zi||Iw(n),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new ui(5e3,15e3),Ew="__/auth/iframe",vw="emulator/auth/iframe",Aw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Wc(e,vw):`https://${n.config.authDomain}/${Ew}`,r={apiKey:e.apiKey,appName:n.name,v:Qr},s=bw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ci(r).slice(1)}`}async function Rw(n){const e=await Tw(n),t=gt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:Sw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Aw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ot(n,"network-request-failed"),c=gt().setTimeout(()=>{i(o)},ww.get());function u(){gt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cw=500,Vw=600,kw="_blank",Dw="http://localhost";class $h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(n,e,t,r=Cw,s=Vw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...Pw,width:r.toString(),height:s.toString(),top:i,left:o},l=Ee().toLowerCase();t&&(c=ep(l)?kw:t),Xf(l)&&(e=e||Dw,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[v,V])=>`${g}${v}=${V},`,"");if(gT(l)&&c!=="_self")return xw(e||"",c),new $h(null);const p=window.open(e||"",c,f);z(p,n,"popup-blocked");try{p.focus()}catch{}return new $h(p)}function xw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="__/auth/handler",Mw="emulator/auth/handler",Lw=encodeURIComponent("fac");async function jh(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qr,eventId:s};if(e instanceof Zc){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",$y(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof li){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),l=u?`#${Lw}=${encodeURIComponent(u)}`:"";return`${Fw(n)}?${ci(c).slice(1)}${l}`}function Fw({config:n}){return n.emulator?Wc(n,Mw):`https://${n.authDomain}/${Ow}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class Uw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fp,this._completeRedirectFn=uw,this._overrideRedirectResult=ow}async _openPopup(e,t,r,s){var o;Pt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await jh(e,t,r,lc(),s);return Nw(e,i,eu())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await jh(e,t,r,lc(),s);return jT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Rw(e),r=new hw(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ka,{type:Ka},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ka];i!==void 0&&t(!!i),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ip()||Zf()||Yc()}}const Bw=Uw;var zh="@firebase/auth",Gh="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jw(n){nt(new Ze("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:op(n)},l=new ET(r,s,i,u);return PT(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nt(new Ze("auth-internal",e=>{const t=$o(e.getProvider("auth").getImmediate());return(r=>new qw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(zh,Gh,$w(n)),Ge(zh,Gh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=300,Gw=Uf("authIdTokenMaxAge")||zw;let Kh=null;const Kw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gw)return;const s=t==null?void 0:t.token;Kh!==s&&(Kh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uC(n=qo()){const e=wt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=RT(n,{popupRedirectResolver:Bw,persistence:[XT,BT,fp]}),r=Uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Kw(i.toString());LT(t,o,()=>o(t.currentUser)),MT(t,c=>o(c))}}const s=Lf("auth");return s&&CT(t,`http://${s}`),t}function Hw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}vT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Hw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jw("Browser");const wp="@firebase/installations",nu="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1e4,vp=`w:${nu}`,Ap="FIS_v2",Ww="https://firebaseinstallations.googleapis.com/v1",Qw=3600*1e3,Jw="installations",Yw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new dn(Jw,Yw,Xw);function bp(n){return n instanceof ut&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp({projectId:n}){return`${Ww}/projects/${n}/installations`}function Rp(n){return{token:n.token,requestStatus:2,expiresIn:eE(n.expiresIn),creationTime:Date.now()}}async function Pp(n,e){const r=(await e.json()).error;return $n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Zw(n,{refreshToken:e}){const t=Cp(n);return t.append("Authorization",tE(e)),t}async function Vp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function eE(n){return Number(n.replace("s","000"))}function tE(n){return`${Ap} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Sp(n),s=Cp(n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:t,authVersion:Ap,appId:n.appId,sdkVersion:vp},c={method:"POST",headers:s,body:JSON.stringify(o)},u=await Vp(()=>fetch(r,c));if(u.ok){const l=await u.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Rp(l.authToken)}}else throw await Pp("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=/^[cdef][\w-]{21}$/,fc="";function iE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=oE(n);return sE.test(t)?t:fc}catch{return fc}}function oE(n){return rE(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new Map;function Np(n,e){const t=Go(n);xp(t,e),aE(t,e)}function xp(n,e){const t=Dp.get(n);if(t)for(const r of t)r(e)}function aE(n,e){const t=cE();t&&t.postMessage({key:n,fid:e}),uE()}let On=null;function cE(){return!On&&"BroadcastChannel"in self&&(On=new BroadcastChannel("[Firebase] FID Change"),On.onmessage=n=>{xp(n.data.key,n.data.fid)}),On}function uE(){Dp.size===0&&On&&(On.close(),On=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="firebase-installations-database",hE=1,jn="firebase-installations-store";let Ha=null;function ru(){return Ha||(Ha=Lo(lE,hE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(jn)}}})),Ha}async function To(n,e){const t=Go(n),s=(await ru()).transaction(jn,"readwrite"),i=s.objectStore(jn),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Np(n,e.fid),e}async function Op(n){const e=Go(n),r=(await ru()).transaction(jn,"readwrite");await r.objectStore(jn).delete(e),await r.done}async function Ko(n,e){const t=Go(n),s=(await ru()).transaction(jn,"readwrite"),i=s.objectStore(jn),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&Np(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(n){let e;const t=await Ko(n.appConfig,r=>{const s=dE(r),i=fE(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===fc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function dE(n){const e=n||{fid:iE(),registrationStatus:0};return Mp(e)}function fE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mE(n)}:{installationEntry:e}}async function pE(n,e){try{const t=await nE(n,e);return To(n.appConfig,t)}catch(t){throw bp(t)&&t.customData.serverCode===409?await Op(n.appConfig):await To(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mE(n){let e=await Hh(n.appConfig);for(;e.registrationStatus===1;)await kp(100),e=await Hh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await su(n);return r||t}return e}function Hh(n){return Ko(n,e=>{if(!e)throw $n.create("installation-not-found");return Mp(e)})}function Mp(n){return gE(n)?{fid:n.fid,registrationStatus:0}:n}function gE(n){return n.registrationStatus===1&&n.registrationTime+Ep<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E({appConfig:n,heartbeatServiceProvider:e},t){const r=yE(n,t),s=Zw(n,t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:vp,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},u=await Vp(()=>fetch(r,c));if(u.ok){const l=await u.json();return Rp(l)}else throw await Pp("Generate Auth Token",u)}function yE(n,{fid:e}){return`${Sp(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(n,e=!1){let t;const r=await Ko(n.appConfig,i=>{if(!Lp(i))throw $n.create("not-registered");const o=i.authToken;if(!e&&wE(o))return i;if(o.requestStatus===1)return t=IE(n,e),i;{if(!navigator.onLine)throw $n.create("app-offline");const c=vE(i);return t=TE(n,c),c}});return t?await t:r.authToken}async function IE(n,e){let t=await Wh(n.appConfig);for(;t.authToken.requestStatus===1;)await kp(100),t=await Wh(n.appConfig);const r=t.authToken;return r.requestStatus===0?iu(n,e):r}function Wh(n){return Ko(n,e=>{if(!Lp(e))throw $n.create("not-registered");const t=e.authToken;return AE(t)?{...e,authToken:{requestStatus:0}}:e})}async function TE(n,e){try{const t=await _E(n,e),r={...e,authToken:t};return await To(n.appConfig,r),t}catch(t){if(bp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Op(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await To(n.appConfig,r)}throw t}}function Lp(n){return n!==void 0&&n.registrationStatus===2}function wE(n){return n.requestStatus===2&&!EE(n)}function EE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Qw}function vE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function AE(n){return n.requestStatus===1&&n.requestTime+Ep<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(n){const e=n,{installationEntry:t,registrationPromise:r}=await su(e);return r?r.catch(console.error):iu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(n,e=!1){const t=n;return await RE(t),(await iu(t,e)).token}async function RE(n){const{registrationPromise:e}=await su(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(n){if(!n||!n.options)throw Wa("App Configuration");if(!n.name)throw Wa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wa(n){return $n.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="installations",CE="installations-internal",VE=n=>{const e=n.getProvider("app").getImmediate(),t=PE(e),r=wt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},kE=n=>{const e=n.getProvider("app").getImmediate(),t=wt(e,Fp).getImmediate();return{getId:()=>bE(t),getToken:s=>SE(t,s)}};function DE(){nt(new Ze(Fp,VE,"PUBLIC")),nt(new Ze(CE,kE,"PRIVATE"))}DE();Ge(wp,nu);Ge(wp,nu,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="/firebase-messaging-sw.js",xE="/firebase-cloud-messaging-push-scope",Up="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",OE="https://fcmregistrations.googleapis.com/v1",Bp="google.c.a.c_id",ME="google.c.a.c_l",LE="google.c.a.ts",FE="google.c.a.e",Qh=1e4;var Jh;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Jh||(Jh={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ws;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Ws||(Ws={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function UE(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="fcm_token_details_db",BE=5,Yh="fcm_token_object_Store";async function qE(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Qa))return null;let e=null;return(await Lo(Qa,BE,{upgrade:async(r,s,i,o)=>{if(s<2||!r.objectStoreNames.contains(Yh))return;const c=o.objectStore(Yh),u=await c.index("fcmSenderId").get(n);if(await c.clear(),!!u){if(s===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:l.createTime??Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:Et(l.vapidKey)}}}else if(s===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:Et(l.auth),p256dh:Et(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:Et(l.vapidKey)}}}else if(s===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:Et(l.auth),p256dh:Et(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:Et(l.vapidKey)}}}}}})).close(),await $a(Qa),await $a("fcm_vapid_details_db"),await $a("undefined"),$E(e)?e:null}function $E(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firebase-messaging-database",zE=1,zn="firebase-messaging-store";let Ja=null;function ou(){return Ja||(Ja=Lo(jE,zE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(zn)}}})),Ja}async function qp(n){const e=cu(n),r=await(await ou()).transaction(zn).objectStore(zn).get(e);if(r)return r;{const s=await qE(n.appConfig.senderId);if(s)return await au(n,s),s}}async function au(n,e){const t=cu(n),s=(await ou()).transaction(zn,"readwrite");return await s.objectStore(zn).put(e,t),await s.done,e}async function GE(n){const e=cu(n),r=(await ou()).transaction(zn,"readwrite");await r.objectStore(zn).delete(e),await r.done}function cu({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ke=new dn("messaging","Messaging",KE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(n,e){const t=await lu(n),r=jp(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(uu(n.appConfig),s)).json()}catch(o){throw ke.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ke.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw ke.create("token-subscribe-no-token");return i.token}async function WE(n,e){const t=await lu(n),r=jp(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${uu(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw ke.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw ke.create("token-update-failed",{errorInfo:o})}if(!i.token)throw ke.create("token-update-no-token");return i.token}async function $p(n,e){const r={method:"DELETE",headers:await lu(n)};try{const i=await(await fetch(`${uu(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw ke.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw ke.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function uu({projectId:n}){return`${OE}/projects/${n}/registrations`}async function lu({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function jp({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==Up&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=10080*60*1e3;async function JE(n){const e=await ZE(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:Et(e.getKey("auth")),p256dh:Et(e.getKey("p256dh"))},r=await qp(n.firebaseDependencies);if(r){if(ev(r.subscriptionOptions,t))return Date.now()>=r.createTime+QE?XE(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await $p(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Xh(n.firebaseDependencies,t)}else return Xh(n.firebaseDependencies,t)}async function YE(n){const e=await qp(n.firebaseDependencies);e&&(await $p(n.firebaseDependencies,e.token),await GE(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function XE(n,e){try{const t=await WE(n.firebaseDependencies,e),r={...e,token:t,createTime:Date.now()};return await au(n.firebaseDependencies,r),t}catch(t){throw t}}async function Xh(n,e){const r={token:await HE(n,e),createTime:Date.now(),subscriptionOptions:e};return await au(n,r),r.token}async function ZE(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:UE(e)})}function ev(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return tv(e,n),nv(e,n),rv(e,n),e}function tv(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function nv(n,e){e.data&&(n.data=e.data)}function rv(n,e){var s,i,o,c;if(!e.fcmOptions&&!((s=e.notification)!=null&&s.click_action))return;n.fcmOptions={};const t=((i=e.fcmOptions)==null?void 0:i.link)??((o=e.notification)==null?void 0:o.click_action);t&&(n.fcmOptions.link=t);const r=(c=e.fcmOptions)==null?void 0:c.analytics_label;r&&(n.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){return typeof n=="object"&&!!n&&Bp in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n){if(!n||!n.options)throw Ya("App Configuration Object");if(!n.name)throw Ya("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Ya(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Ya(n){return ke.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=iv(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(n){try{n.swRegistration=await navigator.serviceWorker.register(NE,{scope:xE}),n.swRegistration.update().catch(()=>{}),await av(n.swRegistration)}catch(e){throw ke.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function av(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${Qh} ms`)),Qh),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)==null?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n,e){if(!e&&!n.swRegistration&&await zp(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw ke.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Up)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e){if(!navigator)throw ke.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ke.create("permission-blocked");return await uv(n,e==null?void 0:e.vapidKey),await cv(n,e==null?void 0:e.serviceWorkerRegistration),JE(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(n,e,t){const r=hv(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Bp],message_name:t[ME],message_time:t[LE],message_device_time:Math.floor(Date.now()/1e3)})}function hv(n){switch(n){case Ws.NOTIFICATION_CLICKED:return"notification_open";case Ws.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Ws.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(Zh(t)):n.onMessageHandler.next(Zh(t)));const r=t.data;sv(r)&&r[FE]==="1"&&await lv(n,t.messageType,r)}const ed="@firebase/messaging",td="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=n=>{const e=new ov(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>dv(e,t)),e},pv=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Gp(e,r)}};function mv(){nt(new Ze("messaging",fv,"PUBLIC")),nt(new Ze("messaging-internal",pv,"PRIVATE")),Ge(ed,td),Ge(ed,td,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(){try{await Uo()}catch{return!1}return typeof window<"u"&&ai()&&zc()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(n){if(!navigator)throw ke.create("only-available-in-window");return n.swRegistration||await zp(n),YE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(n,e){if(!navigator)throw ke.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(n=qo()){return gv().then(e=>{if(!e)throw ke.create("unsupported-browser")},e=>{throw ke.create("indexed-db-unsupported")}),wt(X(n),"messaging").getImmediate()}async function hC(n,e){return n=X(n),Gp(n,e)}function dC(n){return n=X(n),_v(n)}function fC(n,e){return n=X(n),yv(n,e)}mv();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="analytics",Iv="firebase_id",Tv="origin",wv=60*1e3,Ev="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Bo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ye=new dn("analytics","Analytics",vv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n){if(!n.startsWith(hu)){const e=Ye.create("invalid-gtag-resource",{gtagURL:n});return Ue.warn(e.message),""}return n}function Kp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function bv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Sv(n,e){const t=bv("firebase-js-sdk-policy",{createScriptURL:Av}),r=document.createElement("script"),s=`${hu}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Rv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Pv(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await Kp(t)).find(l=>l.measurementId===s);u&&await e[u.appId]}}catch(c){Ue.error(c)}n("config",s,i)}async function Cv(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Kp(t);for(const u of o){const l=c.find(p=>p.measurementId===u),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ue.error(i)}}function Vv(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[c,u]=o;await Cv(n,e,t,c,u)}else if(i==="config"){const[c,u]=o;await Pv(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=o;n("consent",c,u)}else if(i==="get"){const[c,u,l]=o;n("get",c,u,l)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){Ue.error(c)}}return s}function kv(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Vv(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Dv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(hu)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=30,xv=1e3;class Ov{constructor(e={},t=xv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hp=new Ov;function Mv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Lv(n){var o;const{appId:e,apiKey:t}=n,r={method:"GET",headers:Mv(t)},s=Ev.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(c=u.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function Fv(n,e=Hp,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Ye.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ye.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new qv;return setTimeout(async()=>{c.abort()},wv),Wp({appId:r,apiKey:s,measurementId:i},o,c,e)}async function Wp(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Hp){var c;const{appId:i,measurementId:o}=n;try{await Uv(r,e)}catch(u){if(o)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await Lv(n);return s.deleteThrottleMetadata(i),u}catch(u){const l=u;if(!Bv(l)){if(s.deleteThrottleMetadata(i),o)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw u}const f=Number((c=l==null?void 0:l.customData)==null?void 0:c.httpStatus)===503?Ah(t,s.intervalMillis,Nv):Ah(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(i,p),Ue.debug(`Calling attemptFetch again in ${f} millis`),Wp(n,p,r,s)}}function Uv(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Bv(n){if(!(n instanceof ut)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class qv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $v(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o={...r,send_to:i};n("event",t,o)}}async function jv(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(){if(ai())try{await Uo()}catch(n){return Ue.warn(Ye.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ue.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gv(n,e,t,r,s,i,o){const c=Fv(n);c.then(g=>{t[g.measurementId]=g.appId,n.options.measurementId&&g.measurementId!==n.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ue.error(g)),e.push(c);const u=zv().then(g=>{if(g)return r.getId()}),[l,f]=await Promise.all([c,u]);Dv(i)||Sv(i,l.measurementId),s("js",new Date);const p=(o==null?void 0:o.config)??{};return p[Tv]="firebase",p.update=!0,f!=null&&(p[Iv]=f),s("config",l.measurementId,p),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.app=e}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},nd=[];const rd={};let Xa="dataLayer",Hv="gtag",sd,du,id=!1;function Wv(){const n=[];if(jc()&&n.push("This is a browser extension environment."),zc()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Ye.create("invalid-analytics-context",{errorInfo:e});Ue.warn(t.message)}}function Qv(n,e,t){Wv();const r=n.options.appId;if(!r)throw Ye.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(Er[r]!=null)throw Ye.create("already-exists",{id:r});if(!id){Rv(Xa);const{wrappedGtag:i,gtagCore:o}=kv(Er,nd,rd,Xa,Hv);du=i,sd=o,id=!0}return Er[r]=Gv(n,nd,rd,e,sd,Xa,t),new Kv(n)}function pC(n=qo()){n=X(n);const e=wt(n,wo);return e.isInitialized()?e.getImmediate():Jv(n)}function Jv(n,e={}){const t=wt(n,wo);if(t.isInitialized()){const s=t.getImmediate();if(tt(e,t.getOptions()))return s;throw Ye.create("already-initialized")}return t.initialize({options:e})}async function mC(){if(jc()||!zc()||!ai())return!1;try{return await Uo()}catch{return!1}}function Yv(n,e,t){n=X(n),jv(du,Er[n.app.options.appId],e,t).catch(r=>Ue.error(r))}function Xv(n,e,t,r){n=X(n),$v(du,Er[n.app.options.appId],e,t,r).catch(s=>Ue.error(s))}const od="@firebase/analytics",ad="0.10.21";function Zv(){nt(new Ze(wo,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Qv(r,s,t)},"PUBLIC")),nt(new Ze("analytics-internal",n,"PRIVATE")),Ge(od,ad),Ge(od,ad,"esm2020");function n(e){try{const t=e.getProvider(wo).getImmediate();return{logEvent:(r,s,i)=>Xv(t,r,s,i),setUserProperties:(r,s)=>Yv(t,r,s)}}catch(t){throw Ye.create("interop-component-reg-failed",{reason:t})}}}Zv();var cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tn,Qp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(E,w,R){for(var y=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)y[Be-2]=arguments[Be];return _.prototype[w].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,I){I||(I=0);const E=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)E[w]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(w=0;w<16;++w)E[w]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],w=T.g[2];let R=T.g[3],y;y=_+(R^I&(w^R))+E[0]+3614090360&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[1]+3905402710&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(R^I&(w^R))+E[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[5]+1200080426&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(R^I&(w^R))+E[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[9]+2336552879&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(R^I&(w^R))+E[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=R+(w^_&(I^w))+E[13]+4254626195&4294967295,R=_+(y<<12&4294967295|y>>>20),y=w+(I^R&(_^I))+E[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(_^w&(R^_))+E[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=_+(w^R&(I^w))+E[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[6]+3225465664&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^R&(I^w))+E[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[10]+38016083&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^R&(I^w))+E[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[14]+3275163606&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(w^R&(I^w))+E[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(_^I))+E[2]+4243563512&4294967295,R=_+(y<<9&4294967295|y>>>23),y=w+(_^I&(R^_))+E[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^_&(w^R))+E[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=_+(I^w^R)+E[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[8]+2272392833&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^R)+E[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[4]+1272893353&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^R)+E[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[0]+3936430074&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(I^w^R)+E[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=R+(_^I^w)+E[12]+3873151461&4294967295,R=_+(y<<11&4294967295|y>>>21),y=w+(R^_^I)+E[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^_)+E[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=_+(w^(I|~R))+E[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[7]+1126891415&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~R))+E[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[3]+2399980690&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~R))+E[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[15]+4264355552&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=_+(w^(I|~R))+E[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=R+(I^(_|~w))+E[11]+3174756917&4294967295,R=_+(y<<10&4294967295|y>>>22),y=w+(_^(R|~I))+E[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,E=this.C;let w=this.h,R=0;for(;R<_;){if(w==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(E[w++]=T.charCodeAt(R++),w==this.blockSize){s(this,E),w=0;break}}else for(;R<_;)if(E[w++]=T[R++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let E=0;E<32;E+=8)T[_++]=this.g[I]>>>E&255;return T};function i(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let E=!0;for(let w=T.length-1;w>=0;w--){const R=T[w]|0;E&&R==_||(I[w]=R,E=!1)}this.g=I}var c={};function u(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return D(l(-T));const _=[];let I=1;for(let E=0;T>=I;E++)_[E]=T/I|0,I*=4294967296;return new o(_,0)}function f(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(f(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=l(Math.pow(_,8));let E=p;for(let R=0;R<T.length;R+=8){var w=Math.min(8,T.length-R);const y=parseInt(T.substring(R,R+w),_);w<8?(w=l(Math.pow(_,w)),E=E.j(w).add(l(y))):(E=E.j(I),E=E.add(l(y)))}return E}var p=u(0),g=u(1),v=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-D(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const E=this.i(I);T+=(E>=0?E:4294967296+E)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(k(this))return"-"+D(this).toString(T);const _=l(Math.pow(T,6));var I=this;let E="";for(;;){const w=te(I,_).g;I=F(I,w.j(_));let R=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=w,V(I))return R+E;for(;R.length<6;)R="0"+R;E=R+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=F(this,T),k(T)?-1:V(T)?0:1};function D(T){const _=T.g.length,I=[];for(let E=0;E<_;E++)I[E]=~T.g[E];return new o(I,~T.h).add(g)}n.abs=function(){return k(this)?D(this):this},n.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let E=0;for(let w=0;w<=_;w++){let R=E+(this.i(w)&65535)+(T.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=y>>>16,R&=65535,y&=65535,I[w]=y<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function F(T,_){return T.add(D(_))}n.j=function(T){if(V(this)||V(T))return p;if(k(this))return k(T)?D(this).j(D(T)):D(D(this).j(T));if(k(T))return D(this.j(D(T)));if(this.l(v)<0&&T.l(v)<0)return l(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<T.g.length;w++){const R=this.i(E)>>>16,y=this.i(E)&65535,Be=T.i(w)>>>16,Tn=T.i(w)&65535;I[2*E+2*w]+=y*Tn,$(I,2*E+2*w),I[2*E+2*w+1]+=R*Tn,$(I,2*E+2*w+1),I[2*E+2*w+1]+=y*Be,$(I,2*E+2*w+1),I[2*E+2*w+2]+=R*Be,$(I,2*E+2*w+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function $(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function q(T,_){this.g=T,this.h=_}function te(T,_){if(V(_))throw Error("division by zero");if(V(T))return new q(p,p);if(k(T))return _=te(D(T),_),new q(D(_.g),D(_.h));if(k(_))return _=te(T,D(_)),new q(D(_.g),_.h);if(T.g.length>30){if(k(T)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,E=_;E.l(T)<=0;)I=Z(I),E=Z(E);var w=ee(I,1),R=ee(E,1);for(E=ee(E,2),I=ee(I,2);!V(E);){var y=R.add(E);y.l(T)<=0&&(w=w.add(I),R=y),E=ee(E,1),I=ee(I,1)}return _=F(T,w.j(_)),new q(w,_)}for(w=p;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),R=l(I),y=R.j(_);k(y)||y.l(T)>0;)I-=E,R=l(I),y=R.j(_);V(R)&&(R=g),w=w.add(R),T=F(T,y)}return new q(w,T)}n.B=function(T){return te(this,T).h},n.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let E=0;E<_;E++)I[E]=this.i(E)&T.i(E);return new o(I,this.h&T.h)},n.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let E=0;E<_;E++)I[E]=this.i(E)|T.i(E);return new o(I,this.h|T.h)},n.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let E=0;E<_;E++)I[E]=this.i(E)^T.i(E);return new o(I,this.h^T.h)};function Z(T){const _=T.g.length+1,I=[];for(let E=0;E<_;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(I,T.h)}function ee(T,_){const I=_>>5;_%=32;const E=T.g.length-I,w=[];for(let R=0;R<E;R++)w[R]=_>0?T.i(R+I)>>>_|T.i(R+I+1)<<32-_:T.i(R+I);return new o(w,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=f,tn=o}).apply(typeof cd<"u"?cd:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jp,ks,Yp,eo,pc,Xp,Zp,em;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var b=a[m];if(!(b in d))break e;d=d[b]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function l(a,h,d){return l=u,l.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,b,P){for(var M=Array(arguments.length-2),K=2;K<arguments.length;K++)M[K-2]=arguments[K];return h.prototype[b].apply(m,M)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function V(a,h){for(let m=1;m<arguments.length;m++){const b=arguments[m];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const P=b.length||0;a.length=d+P;for(let M=0;M<P;M++)a[d+M]=b[M]}else a.push(b)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function F(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,d){const m=q.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var q=new k(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,ee=!1,T=new $,_=()=>{const a=Promise.resolve(void 0);Z=()=>{a.then(I)}};function I(){for(var a;a=F();){try{a.h.call(a.g)}catch(d){D(d)}var h=q;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ee=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function y(a){return/^[\s\xa0]*$/.test(a)}function Be(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Be,w),Be.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tn="closure_listenable_"+(Math.random()*1e6|0),H_=0;function W_(a,h,d,m,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=b,this.key=++H_,this.da=this.fa=!1}function Si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ri(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function Q_(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function wl(a){const h={};for(const d in a)h[d]=a[d];return h}const El="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vl(a,h){let d,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(d in m)a[d]=m[d];for(let P=0;P<El.length;P++)d=El[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Pi(a){this.src=a,this.g={},this.h=0}Pi.prototype.add=function(a,h,d,m,b){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const M=Ia(a,h,m,b);return M>-1?(h=a[M],d||(h.fa=!1)):(h=new W_(h,this.src,P,!!m,b),h.fa=d,a.push(h)),h};function ya(a,h){const d=h.type;if(d in a.g){var m=a.g[d],b=Array.prototype.indexOf.call(m,h,void 0),P;(P=b>=0)&&Array.prototype.splice.call(m,b,1),P&&(Si(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ia(a,h,d,m){for(let b=0;b<a.length;++b){const P=a[b];if(!P.da&&P.listener==h&&P.capture==!!d&&P.ha==m)return b}return-1}var Ta="closure_lm_"+(Math.random()*1e6|0),wa={};function Al(a,h,d,m,b){if(Array.isArray(h)){for(let P=0;P<h.length;P++)Al(a,h[P],d,m,b);return null}return d=Rl(d),a&&a[Tn]?a.J(h,d,c(m)?!!m.capture:!1,b):J_(a,h,d,!1,m,b)}function J_(a,h,d,m,b,P){if(!h)throw Error("Invalid event type");const M=c(b)?!!b.capture:!!b;let K=va(a);if(K||(a[Ta]=K=new Pi(a)),d=K.add(h,d,m,M,P),d.proxy)return d;if(m=Y_(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(b=M),b===void 0&&(b=!1),a.addEventListener(h.toString(),m,b);else if(a.attachEvent)a.attachEvent(Sl(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Y_(){function a(d){return h.call(a.src,a.listener,d)}const h=X_;return a}function bl(a,h,d,m,b){if(Array.isArray(h))for(var P=0;P<h.length;P++)bl(a,h[P],d,m,b);else m=c(m)?!!m.capture:!!m,d=Rl(d),a&&a[Tn]?(a=a.i,P=String(h).toString(),P in a.g&&(h=a.g[P],d=Ia(h,d,m,b),d>-1&&(Si(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[P],a.h--)))):a&&(a=va(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ia(h,d,m,b)),(d=a>-1?h[a]:null)&&Ea(d))}function Ea(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Tn])ya(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Sl(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=va(h))?(ya(d,a),d.h==0&&(d.src=null,h[Ta]=null)):Si(a)}}}function Sl(a){return a in wa?wa[a]:wa[a]="on"+a}function X_(a,h){if(a.da)a=!0;else{h=new Be(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&Ea(a),a=d.call(m,h)}return a}function va(a){return a=a[Ta],a instanceof Pi?a:null}var Aa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Rl(a){return typeof a=="function"?a:(a[Aa]||(a[Aa]=function(h){return a.handleEvent(h)}),a[Aa])}function De(){E.call(this),this.i=new Pi(this),this.M=this,this.G=null}p(De,E),De.prototype[Tn]=!0,De.prototype.removeEventListener=function(a,h,d,m){bl(this,a,h,d,m)};function Le(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var b=h;h=new w(m,a),vl(h,b)}b=!0;let P,M;if(d)for(M=d.length-1;M>=0;M--)P=h.g=d[M],b=Ci(P,m,!0,h)&&b;if(P=h.g=a,b=Ci(P,m,!0,h)&&b,b=Ci(P,m,!1,h)&&b,d)for(M=0;M<d.length;M++)P=h.g=d[M],b=Ci(P,m,!1,h)&&b}De.prototype.N=function(){if(De.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)Si(d[m]);delete a.g[h],a.h--}}this.G=null},De.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},De.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Ci(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let P=0;P<h.length;++P){const M=h[P];if(M&&!M.da&&M.capture==d){const K=M.listener,we=M.ha||M.src;M.fa&&ya(a.i,M),b=K.call(we,m)!==!1&&b}}return b&&!m.defaultPrevented}function Z_(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Pl(a){a.g=Z_(()=>{a.g=null,a.i&&(a.i=!1,Pl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ey extends E{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(a){E.call(this),this.h=a,this.g={}}p(us,E);var Cl=[];function Vl(a){Ri(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ea(h)},a),a.g={}}us.prototype.N=function(){us.Z.N.call(this),Vl(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ba=o.JSON.stringify,ty=o.JSON.parse,ny=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kl(){}function Dl(){}var ls={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Sa(){w.call(this,"d")}p(Sa,w);function Ra(){w.call(this,"c")}p(Ra,w);var wn={},Nl=null;function Vi(){return Nl=Nl||new De}wn.Ia="serverreachability";function xl(a){w.call(this,wn.Ia,a)}p(xl,w);function hs(a){const h=Vi();Le(h,new xl(h))}wn.STAT_EVENT="statevent";function Ol(a,h){w.call(this,wn.STAT_EVENT,a),this.stat=h}p(Ol,w);function Fe(a){const h=Vi();Le(h,new Ol(h,a))}wn.Ja="timingevent";function Ml(a,h){w.call(this,wn.Ja,a),this.size=h}p(Ml,w);function ds(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function fs(){this.g=!0}fs.prototype.ua=function(){this.g=!1};function ry(a,h,d,m,b,P){a.info(function(){if(a.g)if(P){var M="",K=P.split("&");for(let ae=0;ae<K.length;ae++){var we=K[ae].split("=");if(we.length>1){const be=we[0];we=we[1];const ht=be.split("_");M=ht.length>=2&&ht[1]=="type"?M+(be+"="+we+"&"):M+(be+"=redacted&")}}}else M=null;else M=P;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+h+`
`+d+`
`+M})}function sy(a,h,d,m,b,P,M){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+h+`
`+d+`
`+P+" "+M})}function or(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+oy(a,d)+(m?" "+m:"")})}function iy(a,h){a.info(function(){return"TIMEOUT: "+h})}fs.prototype.info=function(){};function oy(a,h){if(!a.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var b=m[0];if(b!="noop"&&b!="stop"&&b!="close")for(let M=1;M<m.length;M++)m[M]=""}}}}return ba(P)}catch{return h}}var ki={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ll={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fl;function Pa(){}p(Pa,kl),Pa.prototype.g=function(){return new XMLHttpRequest},Fl=new Pa;function ps(a){return encodeURIComponent(String(a))}function ay(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Mt(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new us(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ul}function Ul(){this.i=null,this.g="",this.h=!1}var Bl={},Ca={};function Va(a,h,d){a.M=1,a.A=Ni(lt(h)),a.u=d,a.R=!0,ql(a,null)}function ql(a,h){a.F=Date.now(),Di(a),a.B=lt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),eh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Ul,a.g=yh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ey(l(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Cl[0]=b.toString()),b=Cl);for(let P=0;P<b.length;P++){const M=Al(d,b[P],m||h.handleEvent,!1,h.h||h);if(!M)break;h.g[M.key]=M}h=a.J?wl(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),hs(),ry(a.i,a.v,a.B,a.l,a.S,a.u)}Mt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Ut(a)==3?h.j():this.Y(a)},Mt.prototype.Y=function(a){try{if(a==this.g)e:{const K=Ut(this.g),we=this.g.ya(),ae=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||ah(this.g)))){this.K||K!=4||we==7||(we==8||ae<=0?hs(3):hs(2)),ka(this);var h=this.g.ca();this.X=h;var d=cy(this);if(this.o=h==200,sy(this.i,this.v,this.B,this.l,this.S,K,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,b=this.g;if((m=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var P=m;break t}}P=null}if(a=P)or(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Da(this,a);else{this.o=!1,this.m=3,Fe(12),En(this),ms(this);break e}}if(this.R){a=!0;let be;for(;!this.K&&this.C<d.length;)if(be=uy(this,d),be==Ca){K==4&&(this.m=4,Fe(14),a=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(be==Bl){this.m=4,Fe(15),or(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else or(this.i,this.l,be,null),Da(this,be);if($l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||d.length!=0||this.h.h||(this.m=1,Fe(16),a=!1),this.o=this.o&&a,!a)or(this.i,this.l,d,"[Invalid Chunked Response]"),En(this),ms(this);else if(d.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ba(M),M.P=!0,Fe(11))}}else or(this.i,this.l,d,null),Da(this,d);K==4&&En(this),this.o&&!this.K&&(K==4?ph(this.j,this):(this.o=!1,Di(this)))}else vy(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),En(this),ms(this)}}}catch{}finally{}};function cy(a){if(!$l(a))return a.g.la();const h=ah(a.g);if(h==="")return"";let d="";const m=h.length,b=Ut(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return En(a),ms(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<m;P++)a.h.h=!0,d+=a.h.i.decode(h[P],{stream:!(b&&P==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function $l(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function uy(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?Ca:(d=Number(h.substring(d,m)),isNaN(d)?Bl:(m+=1,m+d>h.length?Ca:(h=h.slice(m,m+d),a.C=m+d,h)))}Mt.prototype.cancel=function(){this.K=!0,En(this)};function Di(a){a.T=Date.now()+a.H,jl(a,a.H)}function jl(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ds(l(a.aa,a),h)}function ka(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(iy(this.i,this.B),this.M!=2&&(hs(),Fe(17)),En(this),this.m=2,ms(this)):jl(this,this.T-a)};function ms(a){a.j.I==0||a.K||ph(a.j,a)}function En(a){ka(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Vl(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Da(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Na(d.h,a))){if(!a.L&&Na(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Fi(d),Mi(d);else break e;Ua(d),Fe(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ds(l(d.Va,d),6e3));Kl(d.h)<=1&&d.ta&&(d.ta=void 0)}else An(d,11)}else if((a.L||d.g==a)&&Fi(d),!y(h))for(b=d.Ba.g.parse(h),h=0;h<b.length;h++){let ae=b[h];const be=ae[0];if(!(be<=d.K))if(d.K=be,ae=ae[1],d.I==2)if(ae[0]=="c"){d.M=ae[1],d.ba=ae[2];const ht=ae[3];ht!=null&&(d.ka=ht,d.j.info("VER="+d.ka));const bn=ae[4];bn!=null&&(d.za=bn,d.j.info("SVER="+d.za));const Bt=ae[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(m=1.5*Bt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const qt=a.g;if(qt){const Bi=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bi){var P=m.h;P.g||Bi.indexOf("spdy")==-1&&Bi.indexOf("quic")==-1&&Bi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(xa(P,P.h),P.h=null))}if(m.G){const qa=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(m.wa=qa,ue(m.J,m.G,qa))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var M=a;if(m.na=_h(m,m.L?m.ba:null,m.W),M.L){Hl(m.h,M);var K=M,we=m.O;we&&(K.H=we),K.D&&(ka(K),Di(K)),m.g=M}else dh(m);d.i.length>0&&Li(d)}else ae[0]!="stop"&&ae[0]!="close"||An(d,7);else d.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?An(d,7):Fa(d):ae[0]!="noop"&&d.l&&d.l.qa(ae),d.A=0)}}hs(4)}catch{}}var ly=class{constructor(a,h){this.g=a,this.map=h}};function zl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Kl(a){return a.h?1:a.g?a.g.size:0}function Na(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function xa(a,h){a.g?a.g.add(h):a.h=h}function Hl(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}zl.prototype.cancel=function(){if(this.i=Wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return v(a.i)}var Ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let b,P=null;m>=0?(b=a[d].substring(0,m),P=a[d].substring(m+1)):b=a[d],h(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Lt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Lt?(this.l=a.l,gs(this,a.j),this.o=a.o,this.g=a.g,_s(this,a.u),this.h=a.h,Oa(this,th(a.i)),this.m=a.m):a&&(h=String(a).match(Ql))?(this.l=!1,gs(this,h[1]||"",!0),this.o=ys(h[2]||""),this.g=ys(h[3]||"",!0),_s(this,h[4]),this.h=ys(h[5]||"",!0),Oa(this,h[6]||"",!0),this.m=ys(h[7]||"")):(this.l=!1,this.i=new Ts(null,this.l))}Lt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Is(h,Jl,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Is(h,Jl,!0),"@"),a.push(ps(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Is(d,d.charAt(0)=="/"?py:fy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Is(d,gy)),a.join("")},Lt.prototype.resolve=function(a){const h=lt(this);let d=!!a.j;d?gs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)_s(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var b=h.h.lastIndexOf("/");b!=-1&&(m=h.h.slice(0,b+1)+m)}if(b=m,b==".."||b==".")m="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){m=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let M=0;M<b.length;){const K=b[M++];K=="."?m&&M==b.length&&P.push(""):K==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),m&&M==b.length&&P.push("")):(P.push(K),m=!0)}m=P.join("/")}else m=b}return d?h.h=m:d=a.i.toString()!=="",d?Oa(h,th(a.i)):d=!!a.m,d&&(h.m=a.m),h};function lt(a){return new Lt(a)}function gs(a,h,d){a.j=d?ys(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function _s(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Oa(a,h,d){h instanceof Ts?(a.i=h,_y(a.i,a.l)):(d||(h=Is(h,my)),a.i=new Ts(h,a.l))}function ue(a,h,d){a.i.set(h,d)}function Ni(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ys(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,dy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jl=/[#\/\?@]/g,fy=/[#\?:]/g,py=/[#\?]/g,my=/[#\?@]/g,gy=/#/g;function Ts(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function vn(a){a.g||(a.g=new Map,a.h=0,a.i&&hy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=Ts.prototype,n.add=function(a,h){vn(this),this.i=null,a=ar(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Yl(a,h){vn(a),h=ar(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Xl(a,h){return vn(a),h=ar(a,h),a.g.has(h)}n.forEach=function(a,h){vn(this),this.g.forEach(function(d,m){d.forEach(function(b){a.call(h,b,m,this)},this)},this)};function Zl(a,h){vn(a);let d=[];if(typeof h=="string")Xl(a,h)&&(d=d.concat(a.g.get(ar(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}n.set=function(a,h){return vn(this),this.i=null,a=ar(this,a),Xl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=Zl(this,a),a.length>0?String(a[0]):h):h};function eh(a,h,d){Yl(a,h),d.length>0&&(a.i=null,a.g.set(ar(a,h),v(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const b=ps(d);d=Zl(this,d);for(let P=0;P<d.length;P++){let M=b;d[P]!==""&&(M+="="+ps(d[P])),a.push(M)}}return this.i=a.join("&")};function th(a){const h=new Ts;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ar(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _y(a,h){h&&!a.j&&(vn(a),a.i=null,a.g.forEach(function(d,m){const b=m.toLowerCase();m!=b&&(Yl(this,m),eh(this,b,d))},a)),a.j=h}function yy(a,h){const d=new fs;if(o.Image){const m=new Image;m.onload=f(Ft,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Ft,d,"TestLoadImage: error",!1,h,m),m.onabort=f(Ft,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Ft,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Iy(a,h){const d=new fs,m=new AbortController,b=setTimeout(()=>{m.abort(),Ft(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(b),P.ok?Ft(d,"TestPingServer: ok",!0,h):Ft(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Ft(d,"TestPingServer: error",!1,h)})}function Ft(a,h,d,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(d)}catch{}}function Ty(){this.g=new ny}function Ma(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ma,kl),Ma.prototype.g=function(){return new xi(this.i,this.h)};function xi(a,h){De.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xi,De),n=xi.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Es(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function nh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ws(this):Es(this),this.readyState==3&&nh(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ws(this))},n.Na=function(a){this.g&&(this.response=a,ws(this))},n.ga=function(){this.g&&ws(this)};function ws(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Es(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Es(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rh(a){let h="";return Ri(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function La(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=rh(d),typeof a=="string"?d!=null&&ps(d):ue(a,h,d))}function ge(a){De.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ge,De);var wy=/^https?$/i,Ey=["POST","PUT"];n=ge.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fl.g(),this.g.onreadystatechange=g(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){sh(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)d.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ey,h,void 0)>=0)||m||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of d)this.g.setRequestHeader(P,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){sh(this,P)}};function sh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ih(a),Oi(a)}function ih(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Le(this,"complete"),Le(this,"abort"),Oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),ge.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?oh(this):this.Xa())},n.Xa=function(){oh(this)};function oh(a){if(a.h&&typeof i<"u"){if(a.v&&Ut(a)==4)setTimeout(a.Ca.bind(a),0);else if(Le(a,"readystatechange"),Ut(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=P===0){let M=String(a.D).match(Ql)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),m=!wy.test(M?M.toLowerCase():"")}d=m}if(d)Le(a,"complete"),Le(a,"success");else{a.o=6;try{var b=Ut(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",ih(a)}}finally{Oi(a)}}}}function Oi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||Le(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ut(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ty(h)}};function ah(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vy(a){const h={};a=(a.g&&Ut(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=ay(a[m]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=h[b]||[];h[b]=P,P.push(d)}Q_(h,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function ch(a){this.za=0,this.i=[],this.j=new fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vs("baseRetryDelayMs",5e3,a),this.Za=vs("retryDelaySeedMs",1e4,a),this.Ta=vs("forwardChannelMaxRetries",2,a),this.va=vs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new zl(a&&a.concurrentRequestLimit),this.Ba=new Ty,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ch.prototype,n.ka=8,n.I=1,n.connect=function(a,h,d,m){Fe(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=_h(this,null,this.W),Li(this)};function Fa(a){if(uh(a),a.I==3){var h=a.V++,d=lt(a.J);if(ue(d,"SID",a.M),ue(d,"RID",h),ue(d,"TYPE","terminate"),As(a,d),h=new Mt(a,a.j,h),h.M=2,h.A=Ni(lt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=yh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Di(h)}gh(a)}function Mi(a){a.g&&(Ba(a),a.g.cancel(),a.g=null)}function uh(a){Mi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Li(a){if(!Gl(a.h)&&!a.m){a.m=!0;var h=a.Ea;Z||_(),ee||(Z(),ee=!0),T.add(h,a),a.D=0}}function Ay(a,h){return Kl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ds(l(a.Ea,a,h),mh(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new Mt(this,this.j,a);let P=this.o;if(this.U&&(P?(P=wl(P),vl(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=hh(this,b,h),d=lt(this.J),ue(d,"RID",a),ue(d,"CVER",22),this.G&&ue(d,"X-HTTP-Session-Id",this.G),As(this,d),P&&(this.R?h="headers="+ps(rh(P))+"&"+h:this.u&&La(d,this.u,P)),xa(this.h,b),this.Ra&&ue(d,"TYPE","init"),this.S?(ue(d,"$req",h),ue(d,"SID","null"),b.U=!0,Va(b,d,null)):Va(b,d,h),this.I=2}}else this.I==3&&(a?lh(this,a):this.i.length==0||Gl(this.h)||lh(this))};function lh(a,h){var d;h?d=h.l:d=a.V++;const m=lt(a.J);ue(m,"SID",a.M),ue(m,"RID",d),ue(m,"AID",a.K),As(a,m),a.u&&a.o&&La(m,a.u,a.o),d=new Mt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=hh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),xa(a.h,d),Va(d,m,h)}function As(a,h){a.H&&Ri(a.H,function(d,m){ue(h,m,d)}),a.l&&Ri({},function(d,m){ue(h,m,d)})}function hh(a,h,d){d=Math.min(a.i.length,d);const m=a.l?l(a.l.Ka,a.l,a):null;e:{var b=a.i;let K=-1;for(;;){const we=["count="+d];K==-1?d>0?(K=b[0].g,we.push("ofs="+K)):K=0:we.push("ofs="+K);let ae=!0;for(let be=0;be<d;be++){var P=b[be].g;const ht=b[be].map;if(P-=K,P<0)K=Math.max(0,b[be].g-100),ae=!1;else try{P="req"+P+"_"||"";try{var M=ht instanceof Map?ht:Object.entries(ht);for(const[bn,Bt]of M){let qt=Bt;c(Bt)&&(qt=ba(Bt)),we.push(P+bn+"="+encodeURIComponent(qt))}}catch(bn){throw we.push(P+"type="+encodeURIComponent("_badmap")),bn}}catch{m&&m(ht)}}if(ae){M=we.join("&");break e}}M=void 0}return a=a.i.splice(0,d),h.G=a,M}function dh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Z||_(),ee||(Z(),ee=!0),T.add(h,a),a.A=0}}function Ua(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ds(l(a.Da,a),mh(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,fh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ds(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),Mi(this),fh(this))};function Ba(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function fh(a){a.g=new Mt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=lt(a.na);ue(h,"RID","rpc"),ue(h,"SID",a.M),ue(h,"AID",a.K),ue(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(h,"TO",a.ia),ue(h,"TYPE","xmlhttp"),As(a,h),a.u&&a.o&&La(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ni(lt(h)),d.u=null,d.R=!0,ql(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Mi(this),Ua(this),Fe(19))};function Fi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ph(a,h){var d=null;if(a.g==h){Fi(a),Ba(a),a.g=null;var m=2}else if(Na(a.h,h))d=h.G,Hl(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;m=Vi(),Le(m,new Ml(m,d)),Li(a)}else dh(a);else if(b=h.m,b==3||b==0&&h.X>0||!(m==1&&Ay(a,h)||m==2&&Ua(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),b){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function mh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function An(a,h){if(a.j.info("Error code "+h),h==2){var d=l(a.bb,a),m=a.Ua;const b=!m;m=new Lt(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||gs(m,"https"),Ni(m),b?yy(m.toString(),d):Iy(m.toString(),d)}else Fe(2);a.I=0,a.l&&a.l.pa(h),gh(a),uh(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function gh(a){if(a.I=0,a.ja=[],a.l){const h=Wl(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ja,h),V(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function _h(a,h,d){var m=d instanceof Lt?lt(d):new Lt(d);if(m.g!="")h&&(m.g=h+"."+m.g),_s(m,m.u);else{var b=o.location;m=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const P=new Lt(null);m&&gs(P,m),h&&(P.g=h),b&&_s(P,b),d&&(P.h=d),m=P}return d=a.G,h=a.wa,d&&h&&ue(m,d,h),ue(m,"VER",a.ka),As(a,m),m}function yh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ge(new Ma({ab:d})):new ge(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}n=Ih.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ui(){}Ui.prototype.g=function(a,h){return new Qe(a,h)};function Qe(a,h){De.call(this),this.g=new ch(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new cr(this)}p(Qe,De),Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){Fa(this.g)},Qe.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ba(a),a=d);h.i.push(new ly(h.Ya++,a)),h.I==3&&Li(h)},Qe.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,Qe.Z.N.call(this)};function Th(a){Sa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Th,Sa);function wh(){Ra.call(this),this.status=1}p(wh,Ra);function cr(a){this.g=a}p(cr,Ih),cr.prototype.ra=function(){Le(this.g,"a")},cr.prototype.qa=function(a){Le(this.g,new Th(a))},cr.prototype.pa=function(a){Le(this.g,new wh)},cr.prototype.oa=function(){Le(this.g,"b")},Ui.prototype.createWebChannel=Ui.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,em=function(){return new Ui},Zp=function(){return Vi()},Xp=wn,pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ki.NO_ERROR=0,ki.TIMEOUT=8,ki.HTTP_ERROR=6,eo=ki,Ll.COMPLETE="complete",Yp=Ll,Dl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",De.prototype.listen=De.prototype.J,ks=Dl,ge.prototype.listenOnce=ge.prototype.K,ge.prototype.getLastError=ge.prototype.Ha,ge.prototype.getLastErrorCode=ge.prototype.ya,ge.prototype.getStatus=ge.prototype.ca,ge.prototype.getResponseJson=ge.prototype.La,ge.prototype.getResponseText=ge.prototype.la,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Fa,Jp=ge}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr="12.12.0";function eA(n){Yr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Bo("@firebase/firestore");function mr(){return rn.logLevel}function tA(n){rn.setLogLevel(n)}function N(n,...e){if(rn.logLevel<=Q.DEBUG){const t=e.map(fu);rn.debug(`Firestore (${Yr}): ${n}`,...t)}}function _e(n,...e){if(rn.logLevel<=Q.ERROR){const t=e.map(fu);rn.error(`Firestore (${Yr}): ${n}`,...t)}}function We(n,...e){if(rn.logLevel<=Q.WARN){const t=e.map(fu);rn.warn(`Firestore (${Yr}): ${n}`,...t)}}function fu(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,tm(n,r,t)}function tm(n,e,t){let r=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _e(r),new Error(r)}function U(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||tm(e,s,r)}function nA(n,e){n||L(57014,e)}function O(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Re.UNAUTHENTICATED)))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class sA{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ce;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ce,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ce)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{l:r}),new nm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class iA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class oA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new iA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,st(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){U(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class cA{getToken(){return Promise.resolve(new mc(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=uA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function gc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Za(s)===Za(i)?j(s,i):Za(s)?1:-1}return j(n.length,e.length)}const lA=55296,hA=57343;function Za(n){const e=n.charCodeAt(0);return e>=lA&&e<=hA}function Rr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function sm(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="__name__";class dt{constructor(e,t,r){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&L(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=dt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return j(e.length,t.length)}static compareSegments(e,t){const r=dt.isNumericId(e),s=dt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?dt.extractNumericId(e).compare(dt.extractNumericId(t)):gc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tn.fromString(e.substring(4,e.length-2))}}class H extends dt{construct(e,t,r){return new H(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new H(t)}static emptyPath(){return new H([])}}const dA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends dt{construct(e,t,r){return new he(e,t,r)}static isValidIdentifier(e){return dA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_c}static keyField(){return new he([_c])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(H.fromString(e))}static fromName(e){return new x(H.fromString(e).popFirst(5))}static empty(){return new x(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&H.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new H(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n,e,t){if(!t)throw new C(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function im(n,e,t,r){if(e===!0&&r===!0)throw new C(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ud(n){if(!x.isDocumentKey(n))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ld(n){if(x.isDocumentKey(n))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function om(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function W(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wo(n);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function am(n,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function er(n,e){if(!om(n))throw new C(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new C(S.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=-62135596800,dd=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*dd);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<hd)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dd}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(er(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:Te("string",ne._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ne(0,0))}static max(){return new B(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=-1;class Cr{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function yc(n){return n.fields.find((e=>e.kind===2))}function Pn(n){return n.fields.filter((e=>e.kind!==2))}function fA(n,e){let t=j(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=pA(n.fields[r],e.fields[r]),t!==0)return t;return j(n.fields.length,e.fields.length)}Cr.UNKNOWN_ID=-1;class Fn{constructor(e,t){this.fieldPath=e,this.kind=t}}function pA(n,e){const t=he.comparator(n.fieldPath,e.fieldPath);return t!==0?t:j(n.kind,e.kind)}class Vr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Vr(0,et.min())}}function cm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new et(s,x.empty(),e)}function um(n){return new et(n.readTime,n.key,Pr)}class et{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new et(B.min(),x.empty(),Pr)}static max(){return new et(B.max(),x.empty(),Pr)}}function mu(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==lm)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):A.reject(t)}static resolve(e){return new A(((t,r)=>{t(e)}))}static reject(e){return new A(((t,r)=>{r(e)}))}static waitFor(e){return new A(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(u=>r(u)))})),o=!0,i===s&&t()}))}static or(e){let t=A.resolve(!1);for(const r of e)t=t.next((s=>s?A.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new A(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next((f=>{o[l]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,t){return new A(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="SimpleDb";class Qo{static open(e,t,r,s){try{return new Qo(t,e.transaction(s,r))}catch(i){throw new Ms(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Ce,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Ms(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=gu(r.target.error);this.S.reject(new Ms(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(N(Je,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new gA(t)}}class _t{static delete(e){return N(Je,"Removing database:",e),Vn(Mf().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!ai())return!1;if(_t.F())return!0;const e=Ee(),t=_t.M(e),r=0<t&&t<10,s=dm(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,_t.M(Ee())===12.2&&_e("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(N(Je,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Ms(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ms(e,o))},s.onupgradeneeded=i=>{N(Je,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{N(Je,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=Qo.open(this.db,e,i?"readonly":"readwrite",r),u=s(c).next((l=>(c.C(),l))).catch((l=>(c.abort(l),A.reject(l)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,l=u.name!=="FirebaseError"&&o<3;if(N(Je,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function dm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class mA{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Vn(this.U.delete())}}class Ms extends C{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function pn(n){return n.name==="IndexedDbTransactionError"}class gA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(N(Je,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(N(Je,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Vn(r)}add(e){return N(Je,"ADD",this.store.name,e,e),Vn(this.store.add(e))}get(e){return Vn(this.store.get(e)).next((t=>(t===void 0&&(t=null),N(Je,"GET",this.store.name,e,t),t)))}delete(e){return N(Je,"DELETE",this.store.name,e),Vn(this.store.delete(e))}count(){return N(Je,"COUNT",this.store.name),Vn(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new A(((o,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(r),o=[];return this.H(i,((c,u)=>{o.push(u)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new A(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}X(e,t){N(Je,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.H(s,((i,o,c)=>c.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new A(((r,s)=>{t.onerror=i=>{const o=gu(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}H(e,t){const r=[];return new A(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const u=new mA(c),l=t(c.primaryKey,c.value,u);if(l instanceof A){const f=l.catch((p=>(u.done(),A.reject(p))));r.push(f)}u.isDone?s():u.G===null?c.continue():c.continue(u.G)}})).next((()=>A.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Vn(n){return new A(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=gu(r.target.error);t(s)}}))}let fd=!1;function gu(n){const e=_t.M(Ee());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fd||(fd=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Ls="IndexBackfiller";class _A{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){N(Ls,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();N(Ls,`Documents written: ${t}`)}catch(t){pn(t)?N(Ls,"Ignoring IndexedDB error during index backfill: ",t):await fn(t)}await this.re(6e4)}))}}class yA{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let s=t,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return N(Ls,`Processing collection: ${o}`),this.oe(e,o,s).next((c=>{s-=c,r.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((c=>(N(Ls,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=um(i);mu(o,r)>0&&(r=o)})),new et(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}$e.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=-1;function di(n){return n==null}function Qs(n){return n===0&&1/n==-1/0}function fm(n){return typeof n=="number"&&Number.isInteger(n)&&!Qs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="";function Oe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=pd(e)),e=IA(n.get(t),e);return pd(e)}function IA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Eo:t+="";break;default:t+=i}}return t}function pd(n){return n+Eo+""}function pt(n){const e=n.length;if(U(e>=2,64408,{path:n}),e===2)return U(n.charAt(0)===Eo&&n.charAt(1)==="",56145,{path:n}),H.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Eo,i);switch((o<0||o>t)&&L(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let u;s.length===0?u=c:(s+=c,u=s,s=""),r.push(u);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:L(61167,{path:n})}i=o+2}return new H(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="remoteDocuments",fi="owner",ur="owner",Js="mutationQueues",TA="userId",rt="mutations",md="batchId",Mn="userMutationsIndex",gd=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e){return[n,Oe(e)]}function pm(n,e,t){return[n,Oe(e),t]}const wA={},kr="documentMutations",vo="remoteDocumentsV14",EA=["prefixPath","collectionGroup","readTime","documentId"],no="documentKeyIndex",vA=["prefixPath","collectionGroup","documentId"],mm="collectionGroupIndex",AA=["collectionGroup","readTime","prefixPath","documentId"],Ys="remoteDocumentGlobal",Ic="remoteDocumentGlobalKey",Dr="targets",gm="queryTargetsIndex",bA=["canonicalId","targetId"],Nr="targetDocuments",SA=["targetId","path"],_u="documentTargetsIndex",RA=["path","targetId"],Ao="targetGlobalKey",Un="targetGlobal",Xs="collectionParents",PA=["collectionId","parent"],xr="clientMetadata",CA="clientId",Jo="bundles",VA="bundleId",Yo="namedQueries",kA="name",yu="indexConfiguration",DA="indexId",Tc="collectionGroupIndex",NA="collectionGroup",Fs="indexState",xA=["indexId","uid"],_m="sequenceNumberIndex",OA=["uid","sequenceNumber"],Us="indexEntries",MA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ym="documentKeyIndex",LA=["indexId","uid","orderedDocumentKey"],Xo="documentOverlays",FA=["userId","collectionPath","documentId"],wc="collectionPathOverlayIndex",UA=["userId","collectionPath","largestBatchId"],Im="collectionGroupOverlayIndex",BA=["userId","collectionGroup","largestBatchId"],Iu="globals",qA="name",Tm=[Js,rt,kr,Cn,Dr,fi,Un,Nr,xr,Ys,Xs,Jo,Yo],$A=[...Tm,Xo],wm=[Js,rt,kr,vo,Dr,fi,Un,Nr,xr,Ys,Xs,Jo,Yo,Xo],Em=wm,Tu=[...Em,yu,Fs,Us],jA=Tu,vm=[...Tu,Iu],zA=vm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends hm{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ae(n,e){const t=O(n);return _t.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Am(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function bm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}}class ji{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yd(this.data.getIterator())}getIteratorFrom(e){return new yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function lr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new je([])}unionWith(e){let t=new ie(he.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sm("Invalid base64 string: "+i):i}})(e);return new me(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const KA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(n){if(U(!!n,39018),typeof n=="string"){let e=0;const t=KA.exec(n);if(U(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="server_timestamp",Pm="__type__",Cm="__previous_value__",Vm="__local_write_time__";function Zo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Pm])==null?void 0:r.stringValue)===Rm}function ea(n){const e=n.mapValue.fields[Cm];return Zo(e)?ea(e):e}function Zs(n){const e=Ct(n.mapValue.fields[Vm].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,t,r,s,i,o,c,u,l,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=f,this.apiKey=p}}const ei="(default)";class sn{constructor(e,t){this.projectId=e,this.database=t||ei}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database===ei}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}function WA(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="__type__",km="__max__",Xt={mapValue:{fields:{__type__:{stringValue:km}}}},Eu="__vector__",Or="value",ro={nullValue:"NULL_VALUE"};function on(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:Dm(n)?9007199254740991:ta(n)?10:11:L(28295,{value:n})}function Tt(n,e){if(n===e)return!0;const t=on(n);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zs(n).isEqual(Zs(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ct(s.timestampValue),c=Ct(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Vt(s.bytesValue).isEqual(Vt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=de(s.doubleValue),c=de(i.doubleValue);return o===c?Qs(o)===Qs(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Rr(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_d(o)!==_d(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Tt(o[u],c[u])))return!1;return!0})(n,e);default:return L(52216,{left:n})}}function ti(n,e){return(n.values||[]).find((t=>Tt(t,e)))!==void 0}function an(n,e){if(n===e)return 0;const t=on(n),r=on(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=de(i.integerValue||i.doubleValue),u=de(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Id(n.timestampValue,e.timestampValue);case 4:return Id(Zs(n),Zs(e));case 5:return gc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=Vt(i),u=Vt(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const f=j(c[l],u[l]);if(f!==0)return f}return j(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=j(de(i.latitude),de(o.latitude));return c!==0?c:j(de(i.longitude),de(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Td(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,v,V,k;const c=i.fields||{},u=o.fields||{},l=(g=c[Or])==null?void 0:g.arrayValue,f=(v=u[Or])==null?void 0:v.arrayValue,p=j(((V=l==null?void 0:l.values)==null?void 0:V.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return p!==0?p:Td(l,f)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Xt.mapValue&&o===Xt.mapValue)return 0;if(i===Xt.mapValue)return 1;if(o===Xt.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),l=o.fields||{},f=Object.keys(l);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=gc(u[p],f[p]);if(g!==0)return g;const v=an(c[u[p]],l[f[p]]);if(v!==0)return v}return j(u.length,f.length)})(n.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function Id(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=Ct(n),r=Ct(e),s=j(t.seconds,r.seconds);return s!==0?s:j(t.nanos,r.nanos)}function Td(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=an(t[s],r[s]);if(i)return i}return j(t.length,r.length)}function Mr(n){return vc(n)}function vc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ct(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=vc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vc(t.fields[o])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function so(n){switch(on(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ea(n);return e?16+so(e):16;case 5:return 2*n.stringValue.length;case 6:return Vt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+so(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return mn(r.fields,((i,o)=>{s+=i.length+so(o)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function Gn(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ac(n){return!!n&&"integerValue"in n}function ni(n){return!!n&&"arrayValue"in n}function wd(n){return!!n&&"nullValue"in n}function Ed(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function io(n){return!!n&&"mapValue"in n}function ta(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wu])==null?void 0:r.stringValue)===Eu}function Bs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return mn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Bs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bs(n.arrayValue.values[t]);return e}return{...n}}function Dm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===km}const Nm={mapValue:{fields:{[wu]:{stringValue:Eu},[Or]:{arrayValue:{}}}}};function QA(n){return"nullValue"in n?ro:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Gn(sn.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?ta(n)?Nm:{mapValue:{}}:L(35942,{value:n})}function JA(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Gn(sn.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Nm:"mapValue"in n?ta(n)?{mapValue:{}}:Xt:L(61959,{value:n})}function vd(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Ad(n,e){const t=an(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!io(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(t)}setAll(e){let t=he.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Bs(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){mn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Pe(Bs(this.value))}}function xm(n){const e=[];return mn(n.fields,((t,r)=>{const s=new he([t]);if(io(r)){const i=xm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new le(e,0,B.min(),B.min(),B.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,s){return new le(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new le(e,2,t,B.min(),B.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new le(e,3,t,B.min(),B.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.position=e,this.inclusive=t}}function bd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),t.key):r=an(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t="asc"){this.field=e,this.dir=t}}function YA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{}class J extends Om{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new XA(e,t,r):t==="array-contains"?new tb(e,r):t==="in"?new qm(e,r):t==="not-in"?new nb(e,r):t==="array-contains-any"?new rb(e,r):new J(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ZA(e,r):new eb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(an(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Om{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new re(e,t)}matches(e){return Lr(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lr(n){return n.op==="and"}function bc(n){return n.op==="or"}function vu(n){return Mm(n)&&Lr(n)}function Mm(n){for(const e of n.filters)if(e instanceof re)return!1;return!0}function Sc(n){if(n instanceof J)return n.field.canonicalString()+n.op.toString()+Mr(n.value);if(vu(n))return n.filters.map((e=>Sc(e))).join(",");{const e=n.filters.map((t=>Sc(t))).join(",");return`${n.op}(${e})`}}function Lm(n,e){return n instanceof J?(function(r,s){return s instanceof J&&r.op===s.op&&r.field.isEqual(s.field)&&Tt(r.value,s.value)})(n,e):n instanceof re?(function(r,s){return s instanceof re&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Lm(o,s.filters[c])),!0):!1})(n,e):void L(19439)}function Fm(n,e){const t=n.filters.concat(e);return re.create(t,n.op)}function Um(n){return n instanceof J?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mr(t.value)}`})(n):n instanceof re?(function(t){return t.op.toString()+" {"+t.getFilters().map(Um).join(" ,")+"}"})(n):"Filter"}class XA extends J{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class ZA extends J{constructor(e,t){super(e,"in",t),this.keys=Bm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class eb extends J{constructor(e,t){super(e,"not-in",t),this.keys=Bm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Bm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>x.fromName(r.referenceValue)))}class tb extends J{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ni(t)&&ti(t.arrayValue,this.value)}}class qm extends J{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ti(this.value.arrayValue,t)}}class nb extends J{constructor(e,t){super(e,"not-in",t)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ti(this.value.arrayValue,t)}}class rb extends J{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ni(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ti(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Rc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new sb(n,e,t,r,s,i,o)}function Kn(n){const e=O(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Sc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Mr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Mr(r))).join(",")),e.Te=t}return e.Te}function pi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!YA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Lm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Sd(n.startAt,e.startAt)&&Sd(n.endAt,e.endAt)}function bo(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function So(n,e){return n.filters.filter((t=>t instanceof J&&t.field.isEqual(e)))}function Rd(n,e,t){let r=ro,s=!0;for(const i of So(n,e)){let o=ro,c=!0;switch(i.op){case"<":case"<=":o=QA(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=ro}vd({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];vd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Pd(n,e,t){let r=Xt,s=!0;for(const i of So(n,e)){let o=Xt,c=!0;switch(i.op){case">=":case">":o=JA(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Xt}Ad({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ad({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function $m(n,e,t,r,s,i,o,c){return new Dt(n,e,t,r,s,i,o,c)}function Xr(n){return new Dt(n)}function Cd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ib(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Au(n){return n.collectionGroup!==null}function vr(n){const e=O(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(he.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(c=c.add(l.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ri(i,r))})),t.has(he.keyField().canonicalString())||e.Ee.push(new ri(he.keyField(),r))}return e.Ee}function Me(n){const e=O(n);return e.Ie||(e.Ie=zm(e,vr(n))),e.Ie}function jm(n){const e=O(n);return e.Re||(e.Re=zm(e,n.explicitOrderBy)),e.Re}function zm(n,e){if(n.limitType==="F")return Rc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ri(s.field,i)}));const t=n.endAt?new cn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cn(n.startAt.position,n.startAt.inclusive):null;return Rc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Pc(n,e){const t=n.filters.concat([e]);return new Dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ob(n,e){const t=n.explicitOrderBy.concat([e]);return new Dt(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Ro(n,e,t){return new Dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ab(n,e){return new Dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,e,n.endAt)}function cb(n,e){return new Dt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,e)}function mi(n,e){return pi(Me(n),Me(e))&&n.limitType===e.limitType}function Gm(n){return`${Kn(Me(n))}|lt:${n.limitType}`}function gr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Um(s))).join(", ")}]`),di(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Mr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Mr(s))).join(",")),`Target(${r})`})(Me(n))}; limitType=${n.limitType})`}function gi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,u){const l=bd(o,c,u);return o.inclusive?l<=0:l<0})(r.startAt,vr(r),s)||r.endAt&&!(function(o,c,u){const l=bd(o,c,u);return o.inclusive?l>=0:l>0})(r.endAt,vr(r),s))})(n,e)}function Km(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Hm(n){return(e,t)=>{let r=!1;for(const s of vr(n)){const i=ub(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ub(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):(function(i,o,c){const u=o.data.field(i),l=c.data.field(i);return u!==null&&l!==null?an(u,l):L(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return bm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new ce(x.comparator);function ze(){return lb}const Wm=new ce(x.comparator);function Ds(...n){let e=Wm;for(const t of n)e=e.insert(t.key,t);return e}function Qm(n){let e=Wm;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function mt(){return qs()}function Jm(){return qs()}function qs(){return new Nt((n=>n.toString()),((n,e)=>n.isEqual(e)))}const hb=new ce(x.comparator),db=new ie(x.comparator);function G(...n){let e=db;for(const t of n)e=e.add(t);return e}const fb=new ie(j);function bu(){return fb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qs(e)?"-0":e}}function Ym(n){return{integerValue:""+n}}function Xm(n,e){return fm(e)?Ym(e):Su(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this._=void 0}}function pb(n,e,t){return n instanceof Fr?(function(s,i){const o={fields:{[Pm]:{stringValue:Rm},[Vm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zo(i)&&(i=ea(i)),i&&(o.fields[Cm]=i),{mapValue:o}})(t,e):n instanceof Hn?eg(n,e):n instanceof Wn?tg(n,e):(function(s,i){const o=Zm(s,i),c=Vd(o)+Vd(s.Ae);return Ac(o)&&Ac(s.Ae)?Ym(c):Su(s.serializer,c)})(n,e)}function mb(n,e,t){return n instanceof Hn?eg(n,e):n instanceof Wn?tg(n,e):t}function Zm(n,e){return n instanceof Ur?(function(r){return Ac(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Fr extends na{}class Hn extends na{constructor(e){super(),this.elements=e}}function eg(n,e){const t=ng(e);for(const r of n.elements)t.some((s=>Tt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Wn extends na{constructor(e){super(),this.elements=e}}function tg(n,e){let t=ng(e);for(const r of n.elements)t=t.filter((s=>!Tt(s,r)));return{arrayValue:{values:t}}}class Ur extends na{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Vd(n){return de(n.integerValue||n.doubleValue)}function ng(n){return ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.field=e,this.transform=t}}function gb(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Hn&&s instanceof Hn||r instanceof Wn&&s instanceof Wn?Rr(r.elements,s.elements,Tt):r instanceof Ur&&s instanceof Ur?Tt(r.Ae,s.Ae):r instanceof Fr&&s instanceof Fr})(n.transform,e.transform)}class _b{constructor(e,t){this.version=e,this.transformResults=t}}class fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ra{}function rg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new es(n.key,fe.none()):new Zr(n.key,n.data,fe.none());{const t=n.data,r=Pe.empty();let s=new ie(he.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xt(n.key,r,new je(s.toArray()),fe.none())}}function yb(n,e,t){n instanceof Zr?(function(s,i,o){const c=s.value.clone(),u=Dd(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof xt?(function(s,i,o){if(!oo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Dd(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(sg(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function $s(n,e,t,r){return n instanceof Zr?(function(i,o,c,u){if(!oo(i.precondition,o))return c;const l=i.value.clone(),f=Nd(i.fieldTransforms,u,o);return l.setAll(f),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,r):n instanceof xt?(function(i,o,c,u){if(!oo(i.precondition,o))return c;const l=Nd(i.fieldTransforms,u,o),f=o.data;return f.setAll(sg(i)),f.setAll(l),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,o,c){return oo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Ib(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Zm(r.transform,s||null);i!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,i))}return t||null}function kd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rr(r,s,((i,o)=>gb(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Zr extends ra{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xt extends ra{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Dd(n,e,t){const r=new Map;U(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,mb(o,c,t[s]))}return r}function Nd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,pb(i,o,e))}return r}class es extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ru extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jm();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const u=rg(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),G())}isEqual(e){return this.batchId===e.batchId&&Rr(this.mutations,e.mutations,((t,r)=>kd(t,r)))&&Rr(this.baseMutations,e.baseMutations,((t,r)=>kd(t,r)))}}class Cu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){U(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return hb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cu(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,Y;function og(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function ag(n){if(n===void 0)return _e("GRPC error has no .code"),S.UNKNOWN;switch(n){case Ie.OK:return S.OK;case Ie.CANCELLED:return S.CANCELLED;case Ie.UNKNOWN:return S.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return S.INTERNAL;case Ie.UNAVAILABLE:return S.UNAVAILABLE;case Ie.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ie.NOT_FOUND:return S.NOT_FOUND;case Ie.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ie.ABORTED:return S.ABORTED;case Ie.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ie.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(Y=Ie||(Ie={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=null;function wb(n){if(js)throw new Error("a TestingHooksSpi instance is already set");js=n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=new tn([4294967295,4294967295],0);function xd(n){const e=cg().encode(n),t=new Qp;return t.update(e),new Uint8Array(t.digest())}function Od(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tn([t,r],0),new tn([s,i],0)]}class ku{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ns(`Invalid padding: ${t}`);if(r<0)throw new Ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=tn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(tn.fromNumber(r)));return s.compare(Eb)===1&&(s=new tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=xd(e),[r,s]=Od(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ku(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=xd(e),[r,s]=Od(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yi(B.min(),s,new ce(j),ze(),G())}}class Ii{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ii(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class ug{constructor(e,t){this.targetId=e,this.Ce=t}}class lg{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Md{constructor(){this.ve=0,this.Fe=Ld(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),r=G();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:i})}})),new Ii(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Ld()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class vb{constructor(e){this.Ge=e,this.ze=new Map,this.je=ze(),this.Je=zi(),this.He=zi(),this.Ze=new ce(j)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:L(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(bo(i))if(r===0){const o=new x(i.path);this.et(t,o,le.newNoDocument(o,B.min()))}else U(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}js==null||js.o((function(f,p,g,v,V){var F,$,q;const k={localCacheCount:f,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},D=p.unchangedNames;return D&&(k.bloomFilter={applied:V===0,hashCount:(D==null?void 0:D.hashCount)??0,bitmapLength:(($=(F=D==null?void 0:D.bits)==null?void 0:F.bitmap)==null?void 0:$.length)??0,padding:((q=D==null?void 0:D.bits)==null?void 0:q.padding)??0,mightContain:te=>(v==null?void 0:v.mightContain(te))??!1}),k})(o,e.Ce,this.Ge.ht(),c,u))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Vt(r).toUint8Array()}catch(u){if(u instanceof Sm)return We("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ku(o,s,i)}catch(u){return We(u instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&bo(c.target)){const u=new x(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,le.newNoDocument(u,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let r=G();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new yi(e,t,this.Ze,this.je,r);return this.je=ze(),this.Je=zi(),this.He=zi(),this.Ze=new ce(j),s}Ye(e,t){if(!this.rt(e))return;const r=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Md,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ie(j),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ie(j),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Md),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function zi(){return new ce(x.comparator)}function Ld(){return new ce(x.comparator)}const Ab={asc:"ASCENDING",desc:"DESCENDING"},bb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sb={and:"AND",or:"OR"};class Rb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cc(n,e){return n.useProto3Json||di(e)?e:{value:e}}function Br(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Pb(n,e){return Br(n,e.toTimestamp())}function ye(n){return U(!!n,49232),B.fromTimestamp((function(t){const r=Ct(t);return new ne(r.seconds,r.nanos)})(n))}function Du(n,e){return Vc(n,e).canonicalString()}function Vc(n,e){const t=(function(s){return new H(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function dg(n){const e=H.fromString(n);return U(wg(e),10190,{key:e.toString()}),e}function si(n,e){return Du(n.databaseId,e.path)}function yt(n,e){const t=dg(e);if(t.get(1)!==n.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(mg(t))}function fg(n,e){return Du(n.databaseId,e)}function pg(n){const e=dg(n);return e.length===4?H.emptyPath():mg(e)}function kc(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mg(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fd(n,e,t){return{name:si(n,e),fields:t.value.mapValue.fields}}function sa(n,e,t){const r=yt(n,e.name),s=ye(e.updateTime),i=e.createTime?ye(e.createTime):B.min(),o=new Pe({mapValue:{fields:e.fields}}),c=le.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Cb(n,e){return"found"in e?(function(r,s){U(!!s.found,43571),s.found.name,s.found.updateTime;const i=yt(r,s.found.name),o=ye(s.found.updateTime),c=s.found.createTime?ye(s.found.createTime):B.min(),u=new Pe({mapValue:{fields:s.found.fields}});return le.newFoundDocument(i,o,c,u)})(n,e):"missing"in e?(function(r,s){U(!!s.missing,3894),U(!!s.readTime,22933);const i=yt(r,s.missing),o=ye(s.readTime);return le.newNoDocument(i,o)})(n,e):L(7234,{result:e})}function Vb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:L(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(l,f){return l.useProto3Json?(U(f===void 0||typeof f=="string",58123),me.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),me.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(l){const f=l.code===void 0?S.UNKNOWN:ag(l.code);return new C(f,l.message||"")})(o);t=new lg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yt(n,r.document.name),i=ye(r.document.updateTime),o=r.document.createTime?ye(r.document.createTime):B.min(),c=new Pe({mapValue:{fields:r.document.fields}}),u=le.newFoundDocument(s,i,o,c),l=r.targetIds||[],f=r.removedTargetIds||[];t=new ao(l,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yt(n,r.document),i=r.readTime?ye(r.readTime):B.min(),o=le.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yt(n,r.document),i=r.removedTargetIds||[];t=new ao([],i,s,null)}else{if(!("filter"in e))return L(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Tb(s,i),c=r.targetId;t=new ug(c,o)}}return t}function ii(n,e){let t;if(e instanceof Zr)t={update:Fd(n,e.key,e.value)};else if(e instanceof es)t={delete:si(n,e.key)};else if(e instanceof xt)t={update:Fd(n,e.key,e.data),updateMask:Mb(e.fieldMask)};else{if(!(e instanceof Ru))return L(16599,{dt:e.type});t={verify:si(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Fr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Hn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ur)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw L(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Pb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L(27497)})(n,e.precondition)),t}function Dc(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?fe.updateTime(ye(i.updateTime)):i.exists!==void 0?fe.exists(i.exists):fe.none()})(e.currentDocument):fe.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Fr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new Hn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Wn(f)}else"increment"in c?u=new Ur(o,c.increment):L(16584,{proto:c});const l=he.fromServerFormat(c.fieldPath);return new _i(l,u)})(n,s))):[];if(e.update){e.update.name;const s=yt(n,e.update.name),i=new Pe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const l=u.fieldPaths||[];return new je(l.map((f=>he.fromServerFormat(f))))})(e.updateMask);return new xt(s,i,o,t,r)}return new Zr(s,i,t,r)}if(e.delete){const s=yt(n,e.delete);return new es(s,t)}if(e.verify){const s=yt(n,e.verify);return new Ru(s,t)}return L(1463,{proto:e})}function kb(n,e){return n&&n.length>0?(U(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?ye(s.updateTime):ye(i);return o.isEqual(B.min())&&(o=ye(i)),new _b(o,s.transformResults||[])})(t,e)))):[]}function gg(n,e){return{documents:[fg(n,e.path)]}}function ia(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fg(n,s);const i=(function(l){if(l.length!==0)return Tg(re.create(l,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(l){if(l.length!==0)return l.map((f=>(function(g){return{field:Jt(g.field),direction:Nb(g.dir)}})(f)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Cc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{ft:t,parent:s}}function _g(n,e,t,r){const{ft:s,parent:i}=ia(n,e),o={},c=[];let u=0;return t.forEach((l=>{const f=r?l.alias:"aggregate_"+u++;o[f]=l.alias,l.aggregateType==="count"?c.push({alias:f,count:{}}):l.aggregateType==="avg"?c.push({alias:f,avg:{field:Jt(l.fieldPath)}}):l.aggregateType==="sum"&&c.push({alias:f,sum:{field:Jt(l.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},gt:o,parent:i}}function yg(n){let e=pg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){U(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const g=Ig(p);return g instanceof re&&vu(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((g=>(function(V){return new ri(_r(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,di(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(p){const g=!!p.before,v=p.values||[];return new cn(v,g)})(t.startAt));let l=null;return t.endAt&&(l=(function(p){const g=!p.before,v=p.values||[];return new cn(v,g)})(t.endAt)),$m(e,s,o,i,c,"F",u,l)}function Db(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ig(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_r(t.unaryFilter.field);return J.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_r(t.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_r(t.unaryFilter.field);return J.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_r(t.unaryFilter.field);return J.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(t){return J.create(_r(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return re.create(t.compositeFilter.filters.map((r=>Ig(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(t.compositeFilter.op))})(n):L(30097,{filter:n})}function Nb(n){return Ab[n]}function xb(n){return bb[n]}function Ob(n){return Sb[n]}function Jt(n){return{fieldPath:n.canonicalString()}}function _r(n){return he.fromServerFormat(n.fieldPath)}function Tg(n){return n instanceof J?(function(t){if(t.op==="=="){if(Ed(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(wd(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ed(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(wd(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:xb(t.op),value:t.value}}})(n):n instanceof re?(function(t){const r=t.getFilters().map((s=>Tg(s)));return r.length===1?r[0]:{compositeFilter:{op:Ob(t.op),filters:r}}})(n):L(54877,{filter:n})}function Mb(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function wg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Eg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,r,s,i=B.min(),o=B.min(),c=me.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){this.yt=e}}function Lb(n,e){let t;if(e.document)t=sa(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=x.fromSegments(e.noDocument.path),s=Jn(e.noDocument.readTime);t=le.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L(56709);{const r=x.fromSegments(e.unknownDocument.path),s=Jn(e.unknownDocument.version);t=le.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new ne(s[0],s[1]);return B.fromTimestamp(i)})(e.readTime)),t}function Ud(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Po(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:si(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Br(i,o.version.toTimestamp()),createTime:Br(i,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Qn(e.version)};else{if(!e.isUnknownDocument())return L(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Qn(e.version)}}return r}function Po(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Qn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Jn(n){const e=new ne(n.seconds,n.nanoseconds);return B.fromTimestamp(e)}function kn(n,e){const t=(e.baseMutations||[]).map((i=>Dc(n.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>Dc(n.yt,i))),s=ne.fromMillis(e.localWriteTimeMs);return new Pu(e.batchId,s,t,r)}function xs(n){const e=Jn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Jn(n.lastLimboFreeSnapshotVersion):B.min();let r;return r=(function(i){return i.documents!==void 0})(n.query)?(function(i){const o=i.documents.length;return U(o===1,1966,{count:o}),Me(Xr(pg(i.documents[0])))})(n.query):(function(i){return Me(yg(i))})(n.query),new bt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,me.fromBase64String(n.resumeToken))}function Ag(n,e){const t=Qn(e.snapshotVersion),r=Qn(e.lastLimboFreeSnapshotVersion);let s;s=bo(e.target)?gg(n.yt,e.target):ia(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Kn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function oa(n){const e=yg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ro(e,e.limit,"L"):e}function ec(n,e){return new Vu(e.largestBatchId,Dc(n.yt,e.overlayMutation))}function Bd(n,e){const t=e.path.lastSegment();return[n,Oe(e.path.popLast()),t]}function qd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Qn(r.readTime),documentKey:Oe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{getBundleMetadata(e,t){return $d(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:Jn(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return $d(e).put((function(s){return{bundleId:s.id,createTime:Qn(ye(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return jd(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:oa(i.bundledQuery),readTime:Jn(i.readTime)}})(r)}))}saveNamedQuery(e,t){return jd(e).put((function(s){return{name:s.name,readTime:Qn(ye(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function $d(n){return Ae(n,Jo)}function jd(n){return Ae(n,Yo)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new aa(e,r)}getOverlay(e,t){return bs(e).get(Bd(this.userId,t)).next((r=>r?ec(this.serializer,r):null))}getOverlays(e,t){const r=mt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const c=new Vu(t,o);s.push(this.St(e,c))})),A.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add(Oe(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(bs(e).X(wc,c))})),A.waitFor(i)}getOverlaysForCollection(e,t,r){const s=mt(),i=Oe(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return bs(e).J(wc,o).next((c=>{for(const u of c){const l=ec(this.serializer,u);s.set(l.getKey(),l)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=mt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return bs(e).ee({index:Im,range:c},((u,l,f)=>{const p=ec(this.serializer,l);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()})).next((()=>i))}St(e,t){return bs(e).put((function(s,i,o){const[c,u,l]=Bd(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ii(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function bs(n){return Ae(n,Xo)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{bt(e){return Ae(e,Iu)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?me.fromUint8Array(r):me.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(de(e.integerValue));else if("doubleValue"in e){const r=de(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Qs(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Ct(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Vt(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?Dm(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):ta(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Kt(e.arrayValue,t),this.Nt(t)):L(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){var o,c;const r=e.fields||{};this.Ft(t,53);const s=Or,i=((c=(o=r[s].arrayValue)==null?void 0:o.values)==null?void 0:c.length)||0;this.Ft(t,15),t.Mt(de(i)),this.Ot(s,t),this.Ct(r[s],t)}Kt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),x.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Dn.Wt=new Dn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=255;function Bb(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function zd(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=Bb(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class qb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),r=zd(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=zd(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(hr),this.sn(255)}_n(){this.an(hr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===hr?(this.sn(hr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===hr?(this.an(hr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class $b{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class jb{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Ss{constructor(){this.cn=new qb,this.ascending=new $b(this.cn),this.descending=new jb(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,r,s){this.hn=e,this.Pn=t,this.Tn=r,this.En=s}In(){const e=this.En.length,t=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.En,0),t!==e?r.set([0],this.En.length):++r[r.length-1],new Nn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:co(this.Tn),directionalValue:co(this.En),orderedDocumentKey:co(t),documentKey:r.path.toArray()}}An(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function jt(n,e){let t=n.hn-e.hn;return t!==0?t:(t=Gd(n.Tn,e.Tn),t!==0?t:(t=Gd(n.En,e.En),t!==0?t:x.comparator(n.Pn,e.Pn)))}function Gd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function co(n){return $f()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function Kd(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class Hd{constructor(e){this.Vn=new ie(((t,r)=>he.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(U(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=yc(e);if(t!==void 0&&!this.pn(t))return!1;const r=Pn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.pn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=r[i];if(!this.yn(c,u)||!this.wn(this.dn[o++],u))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ie(he.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Fn(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Fn(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Fn(r.field,r.dir==="asc"?0:1)));return new Cr(Cr.UNKNOWN_ID,this.collectionId,t,Vr.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(n){var t,r;if(U(n instanceof J||n instanceof re,20012),n instanceof J){if(n instanceof qm){const s=((r=(t=n.value.arrayValue)==null?void 0:t.values)==null?void 0:r.map((i=>J.create(n.field,"==",i))))||[];return re.create(s,"or")}return n}const e=n.filters.map((s=>bg(s)));return re.create(e,n.op)}function zb(n){if(n.getFilters().length===0)return[];const e=Oc(bg(n));return U(Sg(e),7391),Nc(e)||xc(e)?[e]:e.getFilters()}function Nc(n){return n instanceof J}function xc(n){return n instanceof re&&vu(n)}function Sg(n){return Nc(n)||xc(n)||(function(t){if(t instanceof re&&bc(t)){for(const r of t.getFilters())if(!Nc(r)&&!xc(r))return!1;return!0}return!1})(n)}function Oc(n){if(U(n instanceof J||n instanceof re,34018),n instanceof J)return n;if(n.filters.length===1)return Oc(n.filters[0]);const e=n.filters.map((r=>Oc(r)));let t=re.create(e,n.op);return t=Co(t),Sg(t)?t:(U(t instanceof re,64498),U(Lr(t),40251),U(t.filters.length>1,57927),t.filters.reduce(((r,s)=>Nu(r,s))))}function Nu(n,e){let t;return U(n instanceof J||n instanceof re,38388),U(e instanceof J||e instanceof re,25473),t=n instanceof J?e instanceof J?(function(s,i){return re.create([s,i],"and")})(n,e):Wd(n,e):e instanceof J?Wd(e,n):(function(s,i){if(U(s.filters.length>0&&i.filters.length>0,48005),Lr(s)&&Lr(i))return Fm(s,i.getFilters());const o=bc(s)?s:i,c=bc(s)?i:s,u=o.filters.map((l=>Nu(l,c)));return re.create(u,"or")})(n,e),Co(t)}function Wd(n,e){if(Lr(e))return Fm(e,n.getFilters());{const t=e.filters.map((r=>Nu(n,r)));return re.create(t,"or")}}function Co(n){if(U(n instanceof J||n instanceof re,11850),n instanceof J)return n;const e=n.getFilters();if(e.length===1)return Co(e[0]);if(Mm(n))return n;const t=e.map((s=>Co(s))),r=[];return t.forEach((s=>{s instanceof J?r.push(s):s instanceof re&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:re.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.bn=new xu}addToCollectionParentIndex(e,t){return this.bn.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(et.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(et.min())}updateCollectionGroup(e,t,r){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class xu{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ie(H.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ie(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="IndexedDbIndexManager",Gi=new Uint8Array(0);class Kb{constructor(e,t){this.databaseId=t,this.Dn=new xu,this.Cn=new Nt((r=>Kn(r)),((r,s)=>pi(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const i={collectionId:r,parent:Oe(s)};return Jd(e).put(i)}return A.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[sm(t),""],!1,!0);return Jd(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(pt(o.parent))}return r}))}addFieldIndex(e,t){const r=Rs(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=fr(e);return i.next((c=>{o.put(qd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=Rs(e),s=fr(e),i=dr(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Rs(e),r=dr(e),s=fr(e);return t.X().next((()=>r.X())).next((()=>s.X()))}createTargetIndexes(e,t){return A.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new Hd(r).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=dr(e);let s=!0;const i=new Map;return A.forEach(this.vn(t),(o=>this.Fn(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=G();const c=[];return A.forEach(i,((u,l)=>{N(Qd,`Using index ${(function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map((te=>`${te.fieldPath}:${te.kind}`)).join(",")}`})(u)} to execute ${Kn(t)}`);const f=(function(q,te){const Z=yc(te);if(Z===void 0)return null;for(const ee of So(q,Z.fieldPath))switch(ee.op){case"array-contains-any":return ee.value.arrayValue.values||[];case"array-contains":return[ee.value]}return null})(l,u),p=(function(q,te){const Z=new Map;for(const ee of Pn(te))for(const T of So(q,ee.fieldPath))switch(T.op){case"==":case"in":Z.set(ee.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Z.set(ee.fieldPath.canonicalString(),T.value),Array.from(Z.values())}return null})(l,u),g=(function(q,te){const Z=[];let ee=!0;for(const T of Pn(te)){const _=T.kind===0?Rd(q,T.fieldPath,q.startAt):Pd(q,T.fieldPath,q.startAt);Z.push(_.value),ee&&(ee=_.inclusive)}return new cn(Z,ee)})(l,u),v=(function(q,te){const Z=[];let ee=!0;for(const T of Pn(te)){const _=T.kind===0?Pd(q,T.fieldPath,q.endAt):Rd(q,T.fieldPath,q.endAt);Z.push(_.value),ee&&(ee=_.inclusive)}return new cn(Z,ee)})(l,u),V=this.Mn(u,l,g),k=this.Mn(u,l,v),D=this.xn(u,l,p),F=this.On(u.indexId,f,V,g.inclusive,k,v.inclusive,D);return A.forEach(F,($=>r.Z($,t.limit).next((q=>{q.forEach((te=>{const Z=x.fromSegments(te.documentKey);o.has(Z)||(o=o.add(Z),c.push(Z))}))}))))})).next((()=>c))}return A.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=zb(re.create(e.filters,"and")).map((r=>Rc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,s,i,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,i.length),l=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const g=t?this.Nn(t[p/l]):Gi,v=this.Bn(e,g,r[p%l],s),V=this.Ln(e,g,i[p%l],o),k=c.map((D=>this.Bn(e,g,D,!0)));f.push(...this.createRange(v,V,k))}return f}Bn(e,t,r,s){const i=new Nn(e,x.empty(),t,r);return s?i:i.In()}Ln(e,t,r,s){const i=new Nn(e,x.empty(),t,r);return s?i.In():i}Fn(e,t){const r=new Hd(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const s=this.vn(t);return A.forEach(s,(i=>this.Fn(e,i).next((o=>{o?r!==0&&o.fields.length<(function(u){let l=new ie(he.comparator),f=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:l=l.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(l=l.add(p.field));return l.size+(f?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}kn(e,t){const r=new Ss;for(const s of Pn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.ln(s.kind);Dn.Wt.Dt(i,o)}return r.un()}Nn(e){const t=new Ss;return Dn.Wt.Dt(e,t.ln(0)),t.un()}qn(e,t){const r=new Ss;return Dn.Wt.Dt(Gn(this.databaseId,t),r.ln((function(i){const o=Pn(i);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let s=[];s.push(new Ss);let i=0;for(const o of Pn(e)){const c=r[i++];for(const u of s)if(this.Kn(t,o.fieldPath)&&ni(c))s=this.Un(s,o,c);else{const l=u.ln(o.kind);Dn.Wt.Dt(c,l)}}return this.$n(s)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const u=new Ss;u.seed(c.un()),Dn.Wt.Dt(o,u.ln(t.kind)),i.push(u)}return i}Kn(e,t){return!!e.filters.find((r=>r instanceof J&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Rs(e),s=fr(e);return(t?r.J(Tc,IDBKeyRange.bound(t,t)):r.J()).next((i=>{const o=[];return A.forEach(i,(c=>s.get([c.indexId,this.uid]).next((u=>{o.push((function(f,p){const g=p?new Vr(p.sequenceNumber,new et(Jn(p.readTime),new x(pt(p.documentKey)),p.largestBatchId)):Vr.empty(),v=f.fields.map((([V,k])=>new Fn(he.fromServerFormat(V),k)));return new Cr(f.indexId,f.collectionGroup,v,g)})(c,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:j(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=Rs(e),i=fr(e);return this.Wn(e).next((o=>s.J(Tc,IDBKeyRange.bound(t,t)).next((c=>A.forEach(c,(u=>i.put(qd(u.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return A.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(r.set(s.collectionGroup,c),A.forEach(c,(u=>this.Qn(e,s,u).next((l=>{const f=this.Gn(i,u);return l.isEqual(f)?A.resolve():this.zn(e,i,u,l,f)})))))))}))}jn(e,t,r,s){return dr(e).put(s.Rn(this.uid,this.qn(r,t.key),t.key))}Jn(e,t,r,s){return dr(e).delete(s.An(this.uid,this.qn(r,t.key),t.key))}Qn(e,t,r){const s=dr(e);let i=new ie(jt);return s.ee({index:ym,range:IDBKeyRange.only([r.indexId,this.uid,co(this.qn(r,t))])},((o,c)=>{i=i.add(new Nn(r.indexId,t,Kd(c.arrayValue),Kd(c.directionalValue)))})).next((()=>i))}Gn(e,t){let r=new ie(jt);const s=this.kn(t,e);if(s==null)return r;const i=yc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ni(o))for(const c of o.arrayValue.values||[])r=r.add(new Nn(t.indexId,e.key,this.Nn(c),s))}else r=r.add(new Nn(t.indexId,e.key,Gi,s));return r}zn(e,t,r,s,i){N(Qd,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,l,f,p,g){const v=u.getIterator(),V=l.getIterator();let k=lr(v),D=lr(V);for(;k||D;){let F=!1,$=!1;if(k&&D){const q=f(k,D);q<0?$=!0:q>0&&(F=!0)}else k!=null?$=!0:F=!0;F?(p(D),D=lr(V)):$?(g(k),k=lr(v)):(k=lr(v),D=lr(V))}})(s,i,jt,(c=>{o.push(this.jn(e,t,r,c))}),(c=>{o.push(this.Jn(e,t,r,c))})),A.waitFor(o)}Wn(e){let t=1;return fr(e).ee({index:_m,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>jt(o,c))).filter(((o,c,u)=>!c||jt(o,u[c-1])!==0));const s=[];s.push(e);for(const o of r){const c=jt(o,e),u=jt(o,t);if(c===0)s[0]=e.In();else if(c>0&&u<0)s.push(o),s.push(o.In());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const c=s[o].An(this.uid,Gi,x.empty()),u=s[o+1].An(this.uid,Gi,x.empty());i.push(IDBKeyRange.bound(c,u))}return i}Hn(e,t){return jt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Yd)}getMinOffset(e,t){return A.mapArray(this.vn(t),(r=>this.Fn(e,r).next((s=>s||L(44426))))).next(Yd)}}function Jd(n){return Ae(n,Xs)}function dr(n){return Ae(n,Us)}function Rs(n){return Ae(n,yu)}function fr(n){return Ae(n,Fs)}function Yd(n){U(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;mu(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new et(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rg=41943040;class xe{static withCacheSize(e){return new xe(e,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n,e,t){const r=n.store(rt),s=n.store(kr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.ee({range:o},((f,p,g)=>(c++,g.delete())));i.push(u.next((()=>{U(c===1,47070,{batchId:t.batchId})})));const l=[];for(const f of t.mutations){const p=pm(e,f.key.path,t.batchId);i.push(s.delete(p)),l.push(f.key)}return A.waitFor(i).next((()=>l))}function Vo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw L(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe.DEFAULT_COLLECTION_PERCENTILE=10,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xe.DEFAULT=new xe(Rg,xe.DEFAULT_COLLECTION_PERCENTILE,xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xe.DISABLED=new xe(-1,0,0);class ca{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static wt(e,t,r,s){U(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new ca(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).ee({index:Mn,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=yr(e),o=zt(e);return o.add({}).next((c=>{U(typeof c=="number",49019);const u=new Pu(c,t,r,s),l=(function(v,V,k){const D=k.baseMutations.map(($=>ii(v.yt,$))),F=k.mutations.map(($=>ii(v.yt,$)));return{userId:V,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:F}})(this.serializer,this.userId,u),f=[];let p=new ie(((g,v)=>j(g.canonicalString(),v.canonicalString())));for(const g of s){const v=pm(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),f.push(o.put(l)),f.push(i.put(v,wA))}return p.forEach((g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))})),e.addOnCommittedListener((()=>{this.Zn[c]=u.keys()})),A.waitFor(f).next((()=>u))}))}lookupMutationBatch(e,t){return zt(e).get(t).next((r=>r?(U(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),kn(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?A.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return zt(e).ee({index:Mn,range:s},((o,c,u)=>{c.userId===this.userId&&(U(c.batchId>=r,47524,{Yn:r}),i=kn(this.serializer,c)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=nn;return zt(e).ee({index:Mn,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,nn],[this.userId,Number.POSITIVE_INFINITY]);return zt(e).J(Mn,t).next((r=>r.map((s=>kn(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=to(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return yr(e).ee({range:s},((o,c,u)=>{const[l,f,p]=o,g=pt(f);if(l===this.userId&&t.path.isEqual(g))return zt(e).get(p).next((v=>{if(!v)throw L(61480,{er:o,batchId:p});U(v.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:v.userId,batchId:p}),i.push(kn(this.serializer,v))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ie(j);const s=[];return t.forEach((i=>{const o=to(this.userId,i.path),c=IDBKeyRange.lowerBound(o),u=yr(e).ee({range:c},((l,f,p)=>{const[g,v,V]=l,k=pt(v);g===this.userId&&i.path.isEqual(k)?r=r.add(V):p.done()}));s.push(u)})),A.waitFor(s).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=to(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ie(j);return yr(e).ee({range:o},((u,l,f)=>{const[p,g,v]=u,V=pt(g);p===this.userId&&r.isPrefixOf(V)?V.length===s&&(c=c.add(v)):f.done()})).next((()=>this.tr(e,c)))}tr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(zt(e).get(i).next((o=>{if(o===null)throw L(35274,{batchId:i});U(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(kn(this.serializer,o))})))})),A.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return Pg(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),A.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return A.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return yr(e).ee({range:r},((i,o,c)=>{if(i[0]===this.userId){const u=pt(i[1]);s.push(u)}else c.done()})).next((()=>{U(s.length===0,56720,{rr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Cg(e,this.userId,t)}ir(e){return Vg(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:nn,lastStreamToken:""}))}}function Cg(n,e,t){const r=to(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return yr(n).ee({range:i,Y:!0},((c,u,l)=>{const[f,p,g]=c;f===e&&p===s&&(o=!0),l.done()})).next((()=>o))}function zt(n){return Ae(n,rt)}function yr(n){return Ae(n,kr)}function Vg(n){return Ae(n,Js)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Yn(0)}static ar(){return new Yn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new Yn(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>B.fromTimestamp(new ne(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>pr(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>(U(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return pr(e).ee(((o,c)=>{const u=xs(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(e,t){return pr(e).ee(((r,s)=>{const i=xs(s);t(i)}))}ur(e){return Zd(e).get(Ao).next((t=>(U(t!==null,2888),t)))}cr(e,t){return Zd(e).put(Ao,t)}lr(e,t){return pr(e).put(Ag(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Kn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return pr(e).ee({range:s,index:gm},((o,c,u)=>{const l=xs(c);pi(t,l.target)&&(i=l,u.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=Yt(e);return t.forEach((o=>{const c=Oe(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))})),A.waitFor(s)}removeMatchingKeys(e,t,r){const s=Yt(e);return A.forEach(t,(i=>{const o=Oe(i.path);return A.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=Yt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Yt(e);let i=G();return s.ee({range:r,Y:!0},((o,c,u)=>{const l=pt(o[1]),f=new x(l);i=i.add(f)})).next((()=>i))}containsKey(e,t){const r=Oe(t.path),s=IDBKeyRange.bound([r],[sm(r)],!1,!0);let i=0;return Yt(e).ee({index:_u,Y:!0,range:s},(([o,c],u,l)=>{o!==0&&(i++,l.done())})).next((()=>i>0))}At(e,t){return pr(e).get(t).next((r=>r?xs(r):null))}}function pr(n){return Ae(n,Dr)}function Zd(n){return Ae(n,Un)}function Yt(n){return Ae(n,Nr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="LruGarbageCollector",kg=1048576;function tf([n,e],[t,r]){const s=j(n,t);return s===0?j(e,r):s}class Wb{constructor(e){this.Pr=e,this.buffer=new ie(tf),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();tf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(ef,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?N(ef,"Ignoring IndexedDB error during garbage collection: ",t):await fn(t)}await this.Ar(3e5)}))}}class Qb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return A.resolve($e.ce);const r=new Wb(t);return this.Vr.forEachTarget(e,(s=>r.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Ir(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Xd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,u,l;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(l=Date.now(),mr()<=Q.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(l-u)+`ms
Total Duration: ${l-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Ng(n,e){return new Qb(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t){this.db=e,this.garbageCollector=Ng(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,s)=>t(s)))}addReference(e,t,r){return Ki(e,r)}removeReference(e,t,r){return Ki(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Ki(e,t)}wr(e,t){return(function(s,i){let o=!1;return Vg(s).te((c=>Cg(s,c,i).next((u=>(u&&(o=!0),A.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,((o,c)=>{if(c<=t){const u=this.wr(e,o).next((l=>{if(!l)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,B.min()),Yt(e).delete((function(p){return[0,Oe(p.path)]})(o)))))}));s.push(u)}})).next((()=>A.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Ki(e,t)}yr(e,t){const r=Yt(e);let s,i=$e.ce;return r.ee({index:_u},(([o,c],{path:u,sequenceNumber:l})=>{o===0?(i!==$e.ce&&t(new x(pt(s)),i),i=l,s=u):i=$e.ce})).next((()=>{i!==$e.ce&&t(new x(pt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ki(n,e){return Yt(n).put((function(r,s){return{targetId:0,path:Oe(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.changes=new Nt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?A.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Sn(e).put(r)}removeEntry(e,t,r){return Sn(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Po(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Sr(e,r))))}getEntry(e,t){let r=le.newInvalidDocument(t);return Sn(e).ee({index:no,range:IDBKeyRange.only(Ps(t))},((s,i)=>{r=this.br(t,i)})).next((()=>r))}Dr(e,t){let r={size:0,document:le.newInvalidDocument(t)};return Sn(e).ee({index:no,range:IDBKeyRange.only(Ps(t))},((s,i)=>{r={document:this.br(t,i),size:Vo(i)}})).next((()=>r))}getEntries(e,t){let r=ze();return this.Cr(e,t,((s,i)=>{const o=this.br(s,i);r=r.insert(s,o)})).next((()=>r))}vr(e,t){let r=ze(),s=new ce(x.comparator);return this.Cr(e,t,((i,o)=>{const c=this.br(i,o);r=r.insert(i,c),s=s.insert(i,Vo(o))})).next((()=>({documents:r,Fr:s})))}Cr(e,t,r){if(t.isEmpty())return A.resolve();let s=new ie(sf);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Ps(s.first()),Ps(s.last())),o=s.getIterator();let c=o.getNext();return Sn(e).ee({index:no,range:i},((u,l,f)=>{const p=x.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;c&&sf(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,l),c=o.hasNext()?o.getNext():null),c?f.j(Ps(c)):f.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Po(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Sn(e).J(IDBKeyRange.bound(c,u,!0)).next((l=>{i==null||i.incrementDocumentReadCount(l.length);let f=ze();for(const p of l){const g=this.br(x.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(gi(t,g)||s.has(g.key))&&(f=f.insert(g.key,g))}return f}))}getAllFromCollectionGroup(e,t,r,s){let i=ze();const o=rf(t,r),c=rf(t,et.max());return Sn(e).ee({index:mm,range:IDBKeyRange.bound(o,c,!0)},((u,l,f)=>{const p=this.br(x.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(p.key,p),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(e){return new Xb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return nf(e).get(Ic).next((t=>(U(!!t,20021),t)))}Sr(e,t){return nf(e).put(Ic,t)}br(e,t){if(t){const r=Lb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return le.newInvalidDocument(e)}}function Og(n){return new Yb(n)}class Xb extends xg{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new Nt((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new ie(((i,o)=>j(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const u=Ud(this.Mr.serializer,o);s=s.add(i.path.popLast());const l=Vo(u);r+=l-c.size,t.push(this.Mr.addEntry(e,i,u))}else if(r-=c.size,this.trackRemovals){const u=Ud(this.Mr.serializer,o.convertToNoDocument(B.min()));t.push(this.Mr.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Mr.updateMetadata(e,r)),A.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:s})=>(s.forEach(((i,o)=>{this.Or.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function nf(n){return Ae(n,Ys)}function Sn(n){return Ae(n,vo)}function Ps(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function rf(n,e){const t=e.documentKey.path.toArray();return[n,Po(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function sf(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=j(t[i],r[i]),s)return s;return s=j(t.length,r.length),s||(s=j(t[t.length-2],r[r.length-2]),s||j(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&$s(r.mutation,s,je.empty(),ne.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,G()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=G()){const s=mt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Ds();return i.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=mt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,G())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=ze();const o=qs(),c=(function(){return qs()})();return t.forEach(((u,l)=>{const f=r.get(l.key);s.has(l.key)&&(f===void 0||f.mutation instanceof xt)?i=i.insert(l.key,l):f!==void 0?(o.set(l.key,f.mutation.getFieldMask()),$s(f.mutation,l,f.mutation.getFieldMask(),ne.now())):o.set(l.key,je.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((l,f)=>o.set(l,f))),t.forEach(((l,f)=>c.set(l,new Zb(f,o.get(l)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=qs();let s=new ce(((o,c)=>o-c)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let f=r.get(u)||je.empty();f=c.applyToLocalView(l,f),r.set(u,f);const p=(s.get(c.batchId)||G()).add(u);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,f=u.value,p=Jm();f.forEach((g=>{if(!i.has(g)){const v=rg(t.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return A.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return ib(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Au(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):A.resolve(mt());let c=Pr,u=i;return o.next((l=>A.forEach(l,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,u,l,G()))).next((f=>({batchId:c,changes:Qm(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,i).next((c=>A.forEach(c,(u=>{const l=(function(p,g){return new Dt(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((u,l)=>{const f=l.getKey();o.get(f)===null&&(o=o.insert(f,le.newInvalidDocument(f)))}));let c=Ds();return o.forEach(((u,l)=>{const f=i.get(u);f!==void 0&&$s(f.mutation,l,je.empty(),ne.now()),gi(t,l)&&(c=c.insert(u,l))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return A.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ye(s.createTime)}})(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:oa(s.bundledQuery),readTime:ye(s.readTime)}})(t)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.overlays=new ce(x.comparator),this.Lr=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mt();return A.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),A.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),A.resolve()}getOverlaysForCollection(e,t,r){const s=mt(),i=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ce(((l,f)=>l-f));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let f=i.get(l.largestBatchId);f===null&&(f=mt(),i=i.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const c=mt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,f)=>c.set(l,f))),!(c.size()>=s)););return A.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vu(t,r));let i=this.Lr.get(t);i===void 0&&(i=G(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.kr=new ie(Se.qr),this.Kr=new ie(Se.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Se(e,t);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Se(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new x(new H([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.Kr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new x(new H([])),r=new Se(t,e),s=new Se(t,e+1);let i=G();return this.Kr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Se(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return x.comparator(e.key,t.key)||j(e.Jr,t.Jr)}static Ur(e,t){return j(e.Jr,t.Jr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ie(Se.qr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pu(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Se(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?nn:this.Yn-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ie(j);return t.forEach((s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),A.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new Se(new x(i),0);let c=new ie(j);return this.Hr.forEachWhile((u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(c=c.add(u.Jr)),!0)}),o),A.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){U(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return A.forEach(t.mutations,(s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new Se(t,0),s=this.Hr.firstAfterOrEqual(r);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.ti=e,this.docs=(function(){return new ce(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return A.resolve(r?r.document.mutableCopy():le.newInvalidDocument(t))}getEntries(e,t){let r=ze();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():le.newInvalidDocument(s))})),A.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ze();const o=t.path,c=new x(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:f}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||mu(um(f),r)<=0||(s.has(f.key)||gi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,t,r,s){L(9500)}ni(e,t){return A.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new iS(this)}getSize(e){return A.resolve(this.size)}}class iS extends xg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),A.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.persistence=e,this.ri=new Nt((t=>Kn(t)),pi),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ii=0,this.si=new Ou,this.targetCount=0,this.oi=Yn._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),A.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.lr(t),A.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return A.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),A.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return A.resolve(r)}containsKey(e,t){return A.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this._i={},this.overlays={},this.ai=new $e(0),this.ui=!1,this.ui=!0,this.ci=new nS,this.referenceDelegate=e(this),this.li=new oS(this),this.indexManager=new Gb,this.remoteDocumentCache=(function(s){return new sS(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new vg(t),this.Pi=new eS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new rS(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new aS(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,t){return A.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class aS extends hm{constructor(e){super(),this.currentSequenceNumber=e}}class ua{constructor(e){this.persistence=e,this.Ri=new Ou,this.Ai=null}static Vi(e){return new ua(e)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),A.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),A.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.di,(r=>{const s=x.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,B.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return A.or([()=>A.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class ko{constructor(e,t){this.persistence=e,this.fi=new Nt((r=>Oe(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Ng(this,t)}static Vi(e,t){return new ko(e,t)}Ti(){}Ei(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return A.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?A.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,B.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),A.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=so(e.data.value)),t}wr(e,t,r){return A.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return A.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.serializer=e}k(e,t,r,s){const i=new Qo("createOrUpgrade",t);r<1&&s>=1&&((function(u){u.createObjectStore(fi)})(e),(function(u){u.createObjectStore(Js,{keyPath:TA}),u.createObjectStore(rt,{keyPath:md,autoIncrement:!0}).createIndex(Mn,gd,{unique:!0}),u.createObjectStore(kr)})(e),of(e),(function(u){u.createObjectStore(Cn)})(e));let o=A.resolve();return r<3&&s>=3&&(r!==0&&((function(u){u.deleteObjectStore(Nr),u.deleteObjectStore(Dr),u.deleteObjectStore(Un)})(e),of(e)),o=o.next((()=>(function(u){const l=u.store(Un),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return l.put(Ao,f)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(u,l){return l.store(rt).J().next((p=>{u.deleteObjectStore(rt),u.createObjectStore(rt,{keyPath:md,autoIncrement:!0}).createIndex(Mn,gd,{unique:!0});const g=l.store(rt),v=p.map((V=>g.put(V)));return A.waitFor(v)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(xr,{keyPath:CA})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.gi(i)))),r<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(Ys)})(e),this.pi(i))))),r<7&&s>=7&&(o=o.next((()=>this.yi(i)))),r<8&&s>=8&&(o=o.next((()=>this.wi(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.Si(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(Jo,{keyPath:VA})})(e),(function(u){u.createObjectStore(Yo,{keyPath:kA})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(u){const l=u.createObjectStore(Xo,{keyPath:FA});l.createIndex(wc,UA,{unique:!1}),l.createIndex(Im,BA,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(u){const l=u.createObjectStore(vo,{keyPath:EA});l.createIndex(no,vA),l.createIndex(mm,AA)})(e))).next((()=>this.bi(e,i))).next((()=>e.deleteObjectStore(Cn)))),r<14&&s>=14&&(o=o.next((()=>this.Di(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(yu,{keyPath:DA,autoIncrement:!0}).createIndex(Tc,NA,{unique:!1}),u.createObjectStore(Fs,{keyPath:xA}).createIndex(_m,OA,{unique:!1}),u.createObjectStore(Us,{keyPath:MA}).createIndex(ym,LA,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(Fs).clear()})).next((()=>{t.objectStore(Us).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Iu,{keyPath:qA})})(e)}))),r<18&&s>=18&&$f()&&(o=o.next((()=>{t.objectStore(Fs).clear()})).next((()=>{t.objectStore(Us).clear()}))),o}pi(e){let t=0;return e.store(Cn).ee(((r,s)=>{t+=Vo(s)})).next((()=>{const r={byteSize:t};return e.store(Ys).put(Ic,r)}))}gi(e){const t=e.store(Js),r=e.store(rt);return t.J().next((s=>A.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,nn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(Mn,o).next((c=>A.forEach(c,(u=>{U(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=kn(this.serializer,u);return Pg(e,i.userId,l).next((()=>{}))}))))}))))}yi(e){const t=e.store(Nr),r=e.store(Cn);return e.store(Un).get(Ao).next((s=>{const i=[];return r.ee(((o,c)=>{const u=new H(o),l=(function(p){return[0,Oe(p)]})(u);i.push(t.get(l).next((f=>f?A.resolve():(p=>t.put({targetId:0,path:Oe(p),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>A.waitFor(i)))}))}wi(e,t){e.createObjectStore(Xs,{keyPath:PA});const r=t.store(Xs),s=new xu,i=o=>{if(s.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Oe(u)})}};return t.store(Cn).ee({Y:!0},((o,c)=>{const u=new H(o);return i(u.popLast())})).next((()=>t.store(kr).ee({Y:!0},(([o,c,u],l)=>{const f=pt(c);return i(f.popLast())}))))}Si(e){const t=e.store(Dr);return t.ee(((r,s)=>{const i=xs(s),o=Ag(this.serializer,i);return t.put(o)}))}bi(e,t){const r=t.store(Cn),s=[];return r.ee(((i,o)=>{const c=t.store(vo),u=(function(p){return p.document?new x(H.fromString(p.document.name).popFirst(5)):p.noDocument?x.fromSegments(p.noDocument.path):p.unknownDocument?x.fromSegments(p.unknownDocument.path):L(36783)})(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(l))})).next((()=>A.waitFor(s)))}Di(e,t){const r=t.store(rt),s=Og(this.serializer),i=new Mu(ua.Vi,this.serializer.yt);return r.J().next((o=>{const c=new Map;return o.forEach((u=>{let l=c.get(u.userId)??G();kn(this.serializer,u).keys().forEach((f=>l=l.add(f))),c.set(u.userId,l)})),A.forEach(c,((u,l)=>{const f=new Re(l),p=aa.wt(this.serializer,f),g=i.getIndexManager(f),v=ca.wt(f,this.serializer,g,i.referenceDelegate);return new Mg(s,v,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Ec(t,$e.ce),u).next()}))}))}}function of(n){n.createObjectStore(Nr,{keyPath:SA}).createIndex(_u,RA,{unique:!0}),n.createObjectStore(Dr,{keyPath:"targetId"}).createIndex(gm,bA,{unique:!0}),n.createObjectStore(Un)}const Gt="IndexedDbPersistence",tc=18e5,nc=5e3,rc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Lg="main";class Lu{constructor(e,t,r,s,i,o,c,u,l,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=i,this.window=o,this.document=c,this.Fi=l,this.Mi=f,this.xi=p,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=g=>Promise.resolve(),!Lu.v())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Jb(this,s),this.qi=t+Lg,this.serializer=new vg(u),this.Ki=new _t(this.qi,this.xi,new cS(this.serializer)),this.ci=new Ub,this.li=new Hb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Og(this.serializer),this.Pi=new Fb,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&_e(Gt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,rc);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new $e(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.Ki&&this.Ki.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Hi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(pn(e))return N(Gt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N(Gt,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return Cs(e).get(ur).next((t=>A.resolve(this.Xi(t))))}Yi(e){return Hi(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,tc)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Ae(t,xr);return r.J().next((s=>{const i=this.ns(s,tc),o=s.filter((c=>i.indexOf(c)===-1));return A.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?A.resolve(!0):Cs(e).get(ur).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,nc)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,rc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Hi(e).J().next((r=>this.ns(r,nc).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&N(Gt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[fi,xr],(e=>{const t=new Ec(e,$e.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.Ki.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>Hi(e).J().next((t=>this.ns(t,tc).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return ca.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Kb(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return aa.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){N(Gt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?zA:u===17?vm:u===16?jA:u===15?Tu:u===14?Em:u===13?wm:u===12?$A:u===11?Tm:void L(60245)})(this.xi);let o;return this.Ki.runTransaction(e,s,i,(c=>(o=new Ec(c,this.ai?this.ai.next():$e.ce),t==="readwrite-primary"?this.ji(o).next((u=>!!u||this.Ji(o))).next((u=>{if(!u)throw _e(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new C(S.FAILED_PRECONDITION,lm);return r(o)})).next((u=>this.Zi(o).next((()=>u)))):this.Ps(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ps(e){return Cs(e).get(ur).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,nc)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,rc)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Cs(e).put(ur,t)}static v(){return _t.v()}Hi(e){const t=Cs(e);return t.get(ur).next((r=>this.Xi(r)?(N(Gt,"Releasing primary lease."),t.delete(ur)):A.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(_e(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const t=/(?:Version|Mobile)\/1[456]/;qf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var t;try{const r=((t=this.Ui)==null?void 0:t.getItem(this.rs(e)))!==null;return N(Gt,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return _e(Gt,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){_e("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Cs(n){return Ae(n,fi)}function Hi(n){return Ae(n,xr)}function Fu(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Es=s}static Is(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return qf()?8:dm(Ee())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new uS;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(mr()<=Q.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",gr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),A.resolve()):(mr()<=Q.DEBUG&&N("QueryEngine","Query:",gr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(mr()<=Q.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",gr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Me(t))):A.resolve())}gs(e,t){if(Cd(t))return A.resolve(null);let r=Me(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ro(t,null,"F"),r=Me(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=G(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const l=this.Ss(t,c);return this.bs(t,l,o,u.readTime)?this.gs(e,Ro(t,null,"F")):this.Ds(e,l,t,u)}))))})))))}ps(e,t,r,s){return Cd(t)||s.isEqual(B.min())?A.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(t,i);return this.bs(t,o,r,s)?A.resolve(null):(mr()<=Q.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gr(t)),this.Ds(e,o,t,cm(s,Pr)).next((c=>c)))}))}Ss(e,t){let r=new ie(Hm(e));return t.forEach(((s,i)=>{gi(e,i)&&(r=r.add(i))})),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return mr()<=Q.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",gr(t)),this.fs.getDocumentsMatchingQuery(e,t,et.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="LocalStore",lS=3e8;class hS{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ce(j),this.Fs=new Nt((i=>Kn(i)),pi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Ug(n,e,t,r){return new hS(n,e,t,r)}async function Bg(n,e){const t=O(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let u=G();for(const l of s){o.push(l.batchId);for(const f of l.mutations)u=u.add(f.key)}for(const l of i){c.push(l.batchId);for(const f of l.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((l=>({Ns:l,removedBatchIds:o,addedBatchIds:c})))}))}))}function dS(n,e){const t=O(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,u,l,f){const p=l.batch,g=p.keys();let v=A.resolve();return g.forEach((V=>{v=v.next((()=>f.getEntry(u,V))).next((k=>{const D=l.docVersions.get(V);U(D!==null,48541),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,l),k.isValidDocument()&&(k.setReadTime(l.commitVersion),f.addEntry(k)))}))})),v.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=G();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function qg(n){const e=O(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function fS(n,e){const t=O(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.li.addMatchingKeys(i,f.addedDocuments,p))));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(me.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),s=s.insert(p,v),(function(k,D,F){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=lS?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(g,v,f)&&c.push(t.li.updateTargetData(i,v))}));let u=ze(),l=G();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push($g(i,o,e.documentUpdates).next((f=>{u=f.Bs,l=f.Ls}))),!r.isEqual(B.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next((p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return A.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,l))).next((()=>u))})).then((i=>(t.vs=s,i)))}function $g(n,e,t){let r=G(),s=G();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=ze();return t.forEach(((c,u)=>{const l=i.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):N(Bu,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)})),{Bs:o,Ls:s}}))}function pS(n,e){const t=O(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=nn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function qr(n,e){const t=O(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,A.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new bt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function $r(n,e,t){const r=O(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!pn(o))throw o;N(Bu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Do(n,e,t){const r=O(n);let s=B.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,f){const p=O(u),g=p.Fs.get(f);return g!==void 0?A.resolve(p.vs.get(g)):p.li.getTargetData(l,f)})(r,o,Me(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:B.min(),t?i:G()))).next((c=>(Gg(r,Km(e),c),{documents:c,ks:i})))))}function jg(n,e){const t=O(n),r=O(t.li),s=t.vs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>r.At(i,e).next((o=>o?o.target:null))))}function zg(n,e){const t=O(n),r=t.Ms.get(e)||B.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.xs.getAllFromCollectionGroup(s,e,cm(r,Pr),Number.MAX_SAFE_INTEGER))).then((s=>(Gg(t,e,s),s)))}function Gg(n,e,t){let r=n.Ms.get(e)||B.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}async function mS(n,e,t,r){const s=O(n);let i=G(),o=ze();for(const l of t){const f=e.qs(l.metadata.name);l.document&&(i=i.add(f));const p=e.Ks(l);p.setReadTime(e.Us(l.metadata.readTime)),o=o.insert(f,p)}const c=s.xs.newChangeBuffer({trackRemovals:!0}),u=await qr(s,(function(f){return Me(Xr(H.fromString(`__bundle__/docs/${f}`)))})(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(l=>$g(l,c,o).next((f=>(c.apply(l),f))).next((f=>s.li.removeMatchingKeysForTargetId(l,u.targetId).next((()=>s.li.addMatchingKeys(l,i,u.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(l,f.Bs,f.Ls))).next((()=>f.Bs))))))}async function gS(n,e,t=G()){const r=await qr(n,Me(oa(e.bundledQuery))),s=O(n);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=ye(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Pi.saveNamedQuery(i,e);const c=r.withResumeToken(me.EMPTY_BYTE_STRING,o);return s.vs=s.vs.insert(c.targetId,c),s.li.updateTargetData(i,c).next((()=>s.li.removeMatchingKeysForTargetId(i,r.targetId))).next((()=>s.li.addMatchingKeys(i,t,r.targetId))).next((()=>s.Pi.saveNamedQuery(i,e)))}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="firestore_clients";function af(n,e){return`${Kg}_${n}_${e}`}const Hg="firestore_mutations";function cf(n,e,t){let r=`${Hg}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const Wg="firestore_targets";function sc(n,e){return`${Wg}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="SharedClientState";class No{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static $s(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new C(s.error.code,s.error.message))),o?new No(e,t,s.state,i):(_e(ft,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zs{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static $s(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new C(r.error.code,r.error.message))),i?new zs(e,r.state,s):(_e(ft,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static $s(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=bu();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=fm(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new xo(e,i):(_e(ft,`Failed to parse client data for instance '${e}': ${t}`),null)}}class qu{constructor(e,t){this.clientId=e,this.onlineState=t}static $s(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new qu(t.clientId,t.onlineState):(_e(ft,`Failed to parse online state: ${e}`),null)}}class Mc{constructor(){this.activeTargetIds=bu()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ic{constructor(e,t,r,s,i){this.window=e,this.Ci=t,this.persistenceKey=r,this.zs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.js=this.Js.bind(this),this.Hs=new ce(j),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=af(this.persistenceKey,this.zs),this.Ys=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Hs=this.Hs.insert(this.zs,new Mc),this.eo=new RegExp(`^${Kg}_${o}_([^_]*)$`),this.no=new RegExp(`^${Hg}_${o}_(\\d+)(?:_(.*))?$`),this.ro=new RegExp(`^${Wg}_${o}_(\\d+)$`),this.io=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.so=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.js)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.hs();for(const r of e){if(r===this.zs)continue;const s=this.getItem(af(this.persistenceKey,r));if(s){const i=xo.$s(r,s);i&&(this.Hs=this.Hs.insert(i.clientId,i))}}this.oo();const t=this.storage.getItem(this.io);if(t){const r=this._o(t);r&&this.ao(r)}for(const r of this.Zs)this.Js(r);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ys,JSON.stringify(e))}getAllActiveQueryTargets(){return this.uo(this.Hs)}isActiveQueryTarget(e){let t=!1;return this.Hs.forEach(((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.co(e,"pending")}updateMutationState(e,t,r){this.co(e,t,r),this.lo(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(sc(this.persistenceKey,e));if(s){const i=zs.$s(e,s);i&&(r=i.state)}}return t&&this.ho.Qs(e),this.oo(),r}removeLocalQueryTarget(e){this.ho.Gs(e),this.oo()}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(sc(this.persistenceKey,e))}updateQueryState(e,t,r){this.Po(e,t,r)}handleUserChange(e,t,r){t.forEach((s=>{this.lo(s)})),this.currentUser=e,r.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.To(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N(ft,"READ",e,t),t}setItem(e,t){N(ft,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){N(ft,"REMOVE",e),this.storage.removeItem(e)}Js(e){const t=e;if(t.storageArea===this.storage){if(N(ft,"EVENT",t.key,t.newValue),t.key===this.Xs)return void _e("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ci.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.eo.test(t.key)){if(t.newValue==null){const r=this.Io(t.key);return this.Ro(r,null)}{const r=this.Ao(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.no.test(t.key)){if(t.newValue!==null){const r=this.Vo(t.key,t.newValue);if(r)return this.mo(r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(t.key===this.io){if(t.newValue!==null){const r=this._o(t.newValue);if(r)return this.ao(r)}}else if(t.key===this.Ys){const r=(function(i){let o=$e.ce;if(i!=null)try{const c=JSON.parse(i);U(typeof c=="number",30636,{yo:i}),o=c}catch(c){_e(ft,"Failed to read sequence number from WebStorage",c)}return o})(t.newValue);r!==$e.ce&&this.sequenceNumberHandler(r)}else if(t.key===this.so){const r=this.wo(t.newValue);await Promise.all(r.map((s=>this.syncEngine.So(s))))}}}else this.Zs.push(t)}))}}get ho(){return this.Hs.get(this.zs)}oo(){this.setItem(this.Xs,this.ho.Ws())}co(e,t,r){const s=new No(this.currentUser,e,t,r),i=cf(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}lo(e){const t=cf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}To(e){const t={clientId:this.zs,onlineState:e};this.storage.setItem(this.io,JSON.stringify(t))}Po(e,t,r){const s=sc(this.persistenceKey,e),i=new zs(e,t,r);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.so,t)}Io(e){const t=this.eo.exec(e);return t?t[1]:null}Ao(e,t){const r=this.Io(e);return xo.$s(r,t)}Vo(e,t){const r=this.no.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return No.$s(new Re(i),s,t)}fo(e,t){const r=this.ro.exec(e),s=Number(r[1]);return zs.$s(s,t)}_o(e){return qu.$s(e)}wo(e){return JSON.parse(e)}async mo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.bo(e.batchId,e.state,e.error);N(ft,`Ignoring mutation for non-active user ${e.user.uid}`)}po(e){return this.syncEngine.Do(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Hs.insert(e,t):this.Hs.remove(e),s=this.uo(this.Hs),i=this.uo(r),o=[],c=[];return i.forEach((u=>{s.has(u)||o.push(u)})),s.forEach((u=>{i.has(u)||c.push(u)})),this.syncEngine.Co(o,c).then((()=>{this.Hs=r}))}ao(e){this.Hs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}uo(e){let t=bu();return e.forEach(((r,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class Qg{constructor(){this.vo=new Mc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Mc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="ConnectivityMonitor";class lf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(uf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(uf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi=null;function Lc(){return Wi===null?Wi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wi++,"0x"+Wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="RestConnection",yS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class IS{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ei?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Lc(),c=this.Qo(e,t.toUriEncodedString());N(oc,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:l}=new URL(c),f=Wr(l);return this.zo(e,c,u,r,f).then((p=>(N(oc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw We(oc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Yr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=yS[e];let s=`${this.Ko}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="WebChannelConnection",Vs=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ar extends IS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ar.c_){const e=Zp();Vs(e,Xp.STAT_EVENT,(t=>{t.stat===pc.PROXY?N(Ne,"STAT_EVENT: detected buffering proxy"):t.stat===pc.NOPROXY&&N(Ne,"STAT_EVENT: detected no buffering proxy")})),Ar.c_=!0}}zo(e,t,r,s,i){const o=Lc();return new Promise(((c,u)=>{const l=new Jp;l.setWithCredentials(!0),l.listenOnce(Yp.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case eo.NO_ERROR:const p=l.getResponseJson();N(Ne,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case eo.TIMEOUT:N(Ne,`RPC '${e}' ${o} timed out`),u(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const g=l.getStatus();if(N(Ne,`RPC '${e}' ${o} failed with status:`,g,"response text:",l.getResponseText()),g>0){let v=l.getResponseJson();Array.isArray(v)&&(v=v[0]);const V=v==null?void 0:v.error;if(V&&V.status&&V.message){const k=(function(F){const $=F.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN})(V.status);u(new C(k,V.message))}else u(new C(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new C(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{N(Ne,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);N(Ne,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",f,r,15)}))}T_(e,t,r){const s=Lc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const l=i.join("");N(Ne,`Creating RPC '${e}' stream ${s}: ${l}`,c);const f=o.createWebChannel(l,c);this.E_(f);let p=!1,g=!1;const v=new TS({Jo:V=>{g?N(Ne,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(p||(N(Ne,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),N(Ne,`RPC '${e}' stream ${s} sending:`,V),f.send(V))},Ho:()=>f.close()});return Vs(f,ks.EventType.OPEN,(()=>{g||(N(Ne,`RPC '${e}' stream ${s} transport opened.`),v.i_())})),Vs(f,ks.EventType.CLOSE,(()=>{g||(g=!0,N(Ne,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.I_(f))})),Vs(f,ks.EventType.ERROR,(V=>{g||(g=!0,We(Ne,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),v.o_(new C(S.UNAVAILABLE,"The operation could not be completed")))})),Vs(f,ks.EventType.MESSAGE,(V=>{var k;if(!g){const D=V.data[0];U(!!D,16349);const F=D,$=(F==null?void 0:F.error)||((k=F[0])==null?void 0:k.error);if($){N(Ne,`RPC '${e}' stream ${s} received error:`,$);const q=$.status;let te=(function(T){const _=Ie[T];if(_!==void 0)return ag(_)})(q),Z=$.message;q==="NOT_FOUND"&&Z.includes("database")&&Z.includes("does not exist")&&Z.includes(this.databaseId.database)&&We(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),te===void 0&&(te=S.INTERNAL,Z="Unknown error status: "+q+" with message "+$.message),g=!0,v.o_(new C(te,Z)),f.close()}else N(Ne,`RPC '${e}' stream ${s} received:`,D),v.__(D)}})),Ar.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return em()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n){return new Ar(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){return typeof window<"u"?window:null}function uo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(n){return new Rb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar.c_=!1;class $u{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="PersistentStream";class Yg{constructor(e,t,r,s,i,o,c,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $u(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(_e(t.toString()),_e("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new C(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return N(hf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(N(hf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ES extends Yg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Vb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return B.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?ye(o.readTime):B.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=kc(this.serializer),t.addTarget=(function(i,o){let c;const u=o.target;if(c=bo(u)?{documents:gg(i,u)}:{query:ia(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=hg(i,o.resumeToken);const l=Cc(i,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(B.min())>0){c.readTime=Br(i,o.snapshotVersion.toTimestamp());const l=Cc(i,o.expectedCount);l!==null&&(c.expectedCount=l)}return c})(this.serializer,e);const r=Db(this.serializer,e);r&&(t.labels=r),this.q_(t)}X_(e){const t={};t.database=kc(this.serializer),t.removeTarget=e,this.q_(t)}}class vS extends Yg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kb(e.writeResults,e.commitTime),r=ye(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=kc(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ii(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{}class bS extends AS{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Vc(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Vc(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(S.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function SS(n,e,t,r){return new bS(n,e,t,r)}class RS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_e(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="RemoteStore";class PS{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{gn(this)&&(N(Xn,"Restarting streams for network reachability change."),await(async function(u){const l=O(u);l.Ia.add(4),await ts(l),l.Va.set("Unknown"),l.Ia.delete(4),await Ti(l)})(this))}))})),this.Va=new RS(r,s)}}async function Ti(n){if(gn(n))for(const e of n.Ra)await e(!0)}async function ts(n){for(const e of n.Ra)await e(!1)}function la(n,e){const t=O(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Gu(t)?zu(t):rs(t).O_()&&ju(t,e))}function jr(n,e){const t=O(n),r=rs(t);t.Ea.delete(e),r.O_()&&Xg(t,e),t.Ea.size===0&&(r.O_()?r.L_():gn(t)&&t.Va.set("Unknown"))}function ju(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rs(n).Z_(e)}function Xg(n,e){n.da.$e(e),rs(n).X_(e)}function zu(n){n.da=new vb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),rs(n).start(),n.Va.ua()}function Gu(n){return gn(n)&&!rs(n).x_()&&n.Ea.size>0}function gn(n){return O(n).Ia.size===0}function Zg(n){n.da=void 0}async function CS(n){n.Va.set("Online")}async function VS(n){n.Ea.forEach(((e,t)=>{ju(n,e)}))}async function kS(n,e){Zg(n),Gu(n)?(n.Va.ha(e),zu(n)):n.Va.set("Unknown")}async function DS(n,e,t){if(n.Va.set("Online"),e instanceof lg&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))})(n,e)}catch(r){N(Xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oo(n,r)}else if(e instanceof ao?n.da.Xe(e):e instanceof ug?n.da.st(e):n.da.tt(e),!t.isEqual(B.min()))try{const r=await qg(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ea.get(l);f&&i.Ea.set(l,f.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,l)=>{const f=i.Ea.get(u);if(!f)return;i.Ea.set(u,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),Xg(i,u);const p=new bt(f.target,u,l,f.sequenceNumber);ju(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){N(Xn,"Failed to raise snapshot:",r),await Oo(n,r)}}async function Oo(n,e,t){if(!pn(e))throw e;n.Ia.add(1),await ts(n),n.Va.set("Offline"),t||(t=()=>qg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{N(Xn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ti(n)}))}function e_(n,e){return e().catch((t=>Oo(n,t,e)))}async function ns(n){const e=O(n),t=un(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:nn;for(;NS(e);)try{const s=await pS(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,xS(e,s)}catch(s){await Oo(e,s)}t_(e)&&n_(e)}function NS(n){return gn(n)&&n.Ta.length<10}function xS(n,e){n.Ta.push(e);const t=un(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function t_(n){return gn(n)&&!un(n).x_()&&n.Ta.length>0}function n_(n){un(n).start()}async function OS(n){un(n).ra()}async function MS(n){const e=un(n);for(const t of n.Ta)e.ea(t.mutations)}async function LS(n,e,t){const r=n.Ta.shift(),s=Cu.from(r,e,t);await e_(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ns(n)}async function FS(n,e){e&&un(n).Y_&&await(async function(r,s){if((function(o){return og(o)&&o!==S.ABORTED})(s.code)){const i=r.Ta.shift();un(r).B_(),await e_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ns(r)}})(n,e),t_(n)&&n_(n)}async function df(n,e){const t=O(n);t.asyncQueue.verifyOperationInProgress(),N(Xn,"RemoteStore received new credentials");const r=gn(t);t.Ia.add(3),await ts(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ti(t)}async function Fc(n,e){const t=O(n);e?(t.Ia.delete(2),await Ti(t)):e||(t.Ia.add(2),await ts(t),t.Va.set("Unknown"))}function rs(n){return n.ma||(n.ma=(function(t,r,s){const i=O(t);return i.sa(),new ES(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:CS.bind(null,n),Yo:VS.bind(null,n),t_:kS.bind(null,n),H_:DS.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Gu(n)?zu(n):n.Va.set("Unknown")):(await n.ma.stop(),Zg(n))}))),n.ma}function un(n){return n.fa||(n.fa=(function(t,r,s){const i=O(t);return i.sa(),new vS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:OS.bind(null,n),t_:FS.bind(null,n),ta:MS.bind(null,n),na:LS.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await ns(n)):(await n.fa.stop(),n.Ta.length>0&&(N(Xn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Ku(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ss(n,e){if(_e("AsyncQueue",`${e}: ${n}`),pn(n))return new C(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{static emptySet(e){return new Bn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=Ds(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Bn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.ga=new ce(x.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Zn{constructor(e,t,r,s,i,o,c,u,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Zn(e,t,Bn.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class BS{constructor(){this.queries=pf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=O(t),i=s.queries;s.queries=pf(),i.forEach(((o,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new C(S.ABORTED,"Firestore shutting down"))}}function pf(){return new Nt((n=>Gm(n)),mi)}async function Hu(n,e){const t=O(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new US,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=ss(o,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Qu(t)}async function Wu(n,e){const t=O(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qS(n,e){const t=O(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Qu(t)}function $S(n,e,t){const r=O(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Qu(n){n.Ca.forEach((e=>{e.next()}))}var Uc,mf;(mf=Uc||(Uc={})).Ma="default",mf.Cache="cache";class Ju{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Uc.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.Ka=e,this.byteLength=t}Ua(){return"metadata"in this.Ka}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.serializer=e}qs(e){return yt(this.serializer,e)}Ks(e){return e.metadata.exists?sa(this.serializer,e.document,!1):le.newNoDocument(this.qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return ye(e)}}class Yu{constructor(e,t){this.$a=e,this.serializer=t,this.Wa=[],this.Qa=[],this.collectionGroups=new Set,this.progress=s_(e)}get queries(){return this.Wa}get documents(){return this.Qa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ka.namedQuery)this.Wa.push(e.Ka.namedQuery);else if(e.Ka.documentMetadata){this.Qa.push({metadata:e.Ka.documentMetadata}),e.Ka.documentMetadata.exists||++t;const r=H.fromString(e.Ka.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ka.document&&(this.Qa[this.Qa.length-1].document=e.Ka.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}za(e){const t=new Map,r=new gf(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.qs(s.metadata.name);for(const o of s.metadata.queries){const c=(t.get(o)||G()).add(i);t.set(o,c)}}return t}async ja(e){const t=await mS(e,new gf(this.serializer),this.Qa,this.$a.id),r=this.za(this.documents);for(const s of this.Wa)await gS(e,s,r.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}}}function s_(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.key=e}}class o_{constructor(e){this.key=e}}class a_{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=G(),this.mutatedKeys=G(),this.eu=Hm(e),this.tu=new Bn(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new ff,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),v=gi(this.query,p)?p:null,V=!!g&&this.mutatedKeys.has(g.key),k=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;g&&v?g.data.isEqual(v.data)?V!==k&&(r.track({type:3,doc:v}),D=!0):this.su(g,v)||(r.track({type:2,doc:v}),D=!0,(u&&this.eu(v,u)>0||l&&this.eu(v,l)<0)&&(c=!0)):!g&&v?(r.track({type:0,doc:v}),D=!0):g&&!v&&(r.track({type:1,doc:g}),D=!0,(u||l)&&(c=!0)),D&&(v?(o=o.add(v),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(v,V){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:D})}};return k(v)-k(V)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,l=u!==this.Xa;return this.Xa=u,o.length!==0||l?{snapshot:new Zn(this.query,e.tu,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ff,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=G(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new o_(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new i_(r))})),t}cu(e){this.Za=e.ks,this.Ya=G();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Zn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _n="SyncEngine";class jS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zS{constructor(e){this.key=e,this.hu=!1}}class GS{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Nt((c=>Gm(c)),mi),this.Eu=new Map,this.Iu=new Set,this.Ru=new ce(x.comparator),this.Au=new Map,this.Vu=new Ou,this.du={},this.mu=new Map,this.fu=Yn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function KS(n,e,t=!0){const r=ha(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await c_(r,e,t,!0),s}async function HS(n,e){const t=ha(n);await c_(t,e,!0,!1)}async function c_(n,e,t,r){const s=await qr(n.localStore,Me(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Xu(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&la(n.remoteStore,s),c}async function Xu(n,e,t,r,s){n.pu=(p,g,v)=>(async function(k,D,F,$){let q=D.view.ru(F);q.bs&&(q=await Do(k.localStore,D.query,!1).then((({documents:T})=>D.view.ru(T,q))));const te=$&&$.targetChanges.get(D.targetId),Z=$&&$.targetMismatches.get(D.targetId)!=null,ee=D.view.applyChanges(q,k.isPrimaryClient,te,Z);return Bc(k,D.targetId,ee.au),ee.snapshot})(n,p,g,v);const i=await Do(n.localStore,e,!0),o=new a_(e,i.ks),c=o.ru(i.documents),u=Ii.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(c,n.isPrimaryClient,u);Bc(n,t,l.au);const f=new jS(e,t,o);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),l.snapshot}async function WS(n,e,t){const r=O(n),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter((o=>!mi(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $r(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&jr(r.remoteStore,s.targetId),zr(r,s.targetId)})).catch(fn)):(zr(r,s.targetId),await $r(r.localStore,s.targetId,!0))}async function QS(n,e){const t=O(n),r=t.Tu.get(e),s=t.Eu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jr(t.remoteStore,r.targetId))}async function JS(n,e,t){const r=nl(n);try{const s=await(function(o,c){const u=O(o),l=ne.now(),f=c.reduce(((v,V)=>v.add(V.key)),G());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let V=ze(),k=G();return u.xs.getEntries(v,f).next((D=>{V=D,V.forEach(((F,$)=>{$.isValidDocument()||(k=k.add(F))}))})).next((()=>u.localDocuments.getOverlayedDocuments(v,V))).next((D=>{p=D;const F=[];for(const $ of c){const q=Ib($,p.get($.key).overlayedDocument);q!=null&&F.push(new xt($.key,q,xm(q.value.mapValue),fe.exists(!0)))}return u.mutationQueue.addMutationBatch(v,l,F,c)})).next((D=>{g=D;const F=D.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(v,D.batchId,F)}))})).then((()=>({batchId:g.batchId,changes:Qm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,u){let l=o.du[o.currentUser.toKey()];l||(l=new ce(j)),l=l.insert(c,u),o.du[o.currentUser.toKey()]=l})(r,s.batchId,t),await Ot(r,s.changes),await ns(r.remoteStore)}catch(s){const i=ss(s,"Failed to persist write");t.reject(i)}}async function u_(n,e){const t=O(n);try{const r=await fS(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?U(o.hu,14607):s.removedDocuments.size>0&&(U(o.hu,42227),o.hu=!1))})),await Ot(t,r,e)}catch(r){await fn(r)}}function _f(n,e,t){const r=O(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const u=O(o);u.onlineState=c;let l=!1;u.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(l=!0)})),l&&Qu(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YS(n,e,t){const r=O(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ce(x.comparator);o=o.insert(i,le.newNoDocument(i,B.min()));const c=G().add(i),u=new yi(B.min(),new Map,new ce(j),o,c);await u_(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),tl(r)}else await $r(r.localStore,e,!1).then((()=>zr(r,e,t))).catch(fn)}async function XS(n,e){const t=O(n),r=e.batch.batchId;try{const s=await dS(t.localStore,e);el(t,r,null),Zu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ot(t,s)}catch(s){await fn(s)}}async function ZS(n,e,t){const r=O(n);try{const s=await(function(o,c){const u=O(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let f;return u.mutationQueue.lookupMutationBatch(l,c).next((p=>(U(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(l,p)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,f))).next((()=>u.localDocuments.getDocuments(l,f)))}))})(r.localStore,e);el(r,e,t),Zu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ot(r,s)}catch(s){await fn(s)}}async function eR(n,e){const t=O(n);gn(t.remoteStore)||N(_n,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await(function(o){const c=O(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(r===nn)return void e.resolve();const s=t.mu.get(r)||[];s.push(e),t.mu.set(r,s)}catch(r){const s=ss(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Zu(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function el(n,e,t){const r=O(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function zr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Eu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||l_(n,r)}))}function l_(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(jr(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),tl(n))}function Bc(n,e,t){for(const r of t)r instanceof i_?(n.Vu.addReference(r.key,e),tR(n,r)):r instanceof o_?(N(_n,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||l_(n,r.key)):L(19791,{wu:r})}function tR(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(r)||(N(_n,"New document in limbo: "+t),n.Iu.add(r),tl(n))}function tl(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new x(H.fromString(e)),r=n.fu.next();n.Au.set(r,new zS(t)),n.Ru=n.Ru.insert(t,r),la(n.remoteStore,new bt(Me(Xr(t.path)),r,"TargetPurposeLimboResolution",$e.ce))}}async function Ot(n,e,t){const r=O(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{o.push(r.pu(u,e,t).then((l=>{var f;if((l||t)&&r.isPrimaryClient){const p=l?!l.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(l){s.push(l);const p=Uu.Is(u.targetId,l);i.push(p)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(u,l){const f=O(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>A.forEach(l,(g=>A.forEach(g.Ts,(v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v))).next((()=>A.forEach(g.Es,(v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))))))}catch(p){if(!pn(p))throw p;N(Bu,"Failed to update sequence numbers: "+p)}for(const p of l){const g=p.targetId;if(!p.fromCache){const v=f.vs.get(g),V=v.snapshotVersion,k=v.withLastLimboFreeSnapshotVersion(V);f.vs=f.vs.insert(g,k)}}})(r.localStore,i))}async function nR(n,e){const t=O(n);if(!t.currentUser.isEqual(e)){N(_n,"User change. New user:",e.toKey());const r=await Bg(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new C(S.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ot(t,r.Ns)}}function rR(n,e){const t=O(n),r=t.Au.get(e);if(r&&r.hu)return G().add(r.key);{let s=G();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}async function sR(n,e){const t=O(n),r=await Do(t.localStore,e.query,!0),s=e.view.cu(r);return t.isPrimaryClient&&Bc(t,e.targetId,s.au),s}async function iR(n,e){const t=O(n);return zg(t.localStore,e).then((r=>Ot(t,r)))}async function oR(n,e,t,r){const s=O(n),i=await(function(c,u){const l=O(c),f=O(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",(p=>f.Xn(p,u).next((g=>g?l.localDocuments.getDocuments(p,g):A.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await ns(s.remoteStore):t==="acknowledged"||t==="rejected"?(el(s,e,r||null),Zu(s,e),(function(c,u){O(O(c).mutationQueue).nr(u)})(s.localStore,e)):L(6720,"Unknown batchState",{Su:t}),await Ot(s,i)):N(_n,"Cannot apply mutation batch with id: "+e)}async function aR(n,e){const t=O(n);if(ha(t),nl(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await yf(t,r.toArray());t.gu=!0,await Fc(t.remoteStore,!0);for(const i of s)la(t.remoteStore,i)}else if(e===!1&&t.gu!==!1){const r=[];let s=Promise.resolve();t.Eu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then((()=>(zr(t,o),$r(t.localStore,o,!0)))),jr(t.remoteStore,o)})),await s,await yf(t,r),(function(o){const c=O(o);c.Au.forEach(((u,l)=>{jr(c.remoteStore,l)})),c.Vu.zr(),c.Au=new Map,c.Ru=new ce(x.comparator)})(t),t.gu=!1,await Fc(t.remoteStore,!1)}}async function yf(n,e,t){const r=O(n),s=[],i=[];for(const o of e){let c;const u=r.Eu.get(o);if(u&&u.length!==0){c=await qr(r.localStore,Me(u[0]));for(const l of u){const f=r.Tu.get(l),p=await sR(r,f);p.snapshot&&i.push(p.snapshot)}}else{const l=await jg(r.localStore,o);c=await qr(r.localStore,l),await Xu(r,h_(l),o,!1,c.resumeToken)}s.push(c)}return r.Pu.H_(i),s}function h_(n){return $m(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function cR(n){return(function(t){return O(O(t).persistence).hs()})(O(n).localStore)}async function uR(n,e,t,r){const s=O(n);if(s.gu)return void N(_n,"Ignoring unexpected query state notification.");const i=s.Eu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await zg(s.localStore,Km(i[0])),c=yi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await Ot(s,o,c);break}case"rejected":await $r(s.localStore,e,!0),zr(s,e,r);break;default:L(64155,t)}}async function lR(n,e,t){const r=ha(n);if(r.gu){for(const s of e){if(r.Eu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){N(_n,"Adding an already active target "+s);continue}const i=await jg(r.localStore,s),o=await qr(r.localStore,i);await Xu(r,h_(i),o.targetId,!1,o.resumeToken),la(r.remoteStore,o)}for(const s of t)r.Eu.has(s)&&await $r(r.localStore,s,!1).then((()=>{jr(r.remoteStore,s),zr(r,s)})).catch(fn)}}function ha(n){const e=O(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=u_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YS.bind(null,e),e.Pu.H_=qS.bind(null,e.eventManager),e.Pu.yu=$S.bind(null,e.eventManager),e}function nl(n){const e=O(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZS.bind(null,e),e}function hR(n,e,t){const r=O(n);(async function(i,o,c){try{const u=await o.getMetadata();if(await(function(v,V){const k=O(v),D=ye(V.createTime);return k.persistence.runTransaction("hasNewerBundle","readonly",(F=>k.Pi.getBundleMetadata(F,V.id))).then((F=>!!F&&F.createTime.compareTo(D)>=0))})(i.localStore,u))return await o.close(),c._completeWith((function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}})(u)),Promise.resolve(new Set);c._updateProgress(s_(u));const l=new Yu(u,o.serializer);let f=await o.bu();for(;f;){const g=await l.Ga(f);g&&c._updateProgress(g),f=await o.bu()}const p=await l.ja(i.localStore);return await Ot(i,p.Ha,void 0),await(function(v,V){const k=O(v);return k.persistence.runTransaction("Save bundle","readwrite",(D=>k.Pi.saveBundleMetadata(D,V)))})(i.localStore,u),c._completeWith(p.progress),Promise.resolve(p.Ja)}catch(u){return We(_n,`Loading bundle failed with ${u}`),c._failWith(u),Promise.resolve(new Set)}})(r,e,t).then((s=>{r.sharedClientState.notifyBundleLoaded(s)}))}class Gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tr(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Ug(this.persistence,new Fg,e.initialUser,this.serializer)}Cu(e){return new Mu(ua.Vi,this.serializer)}Du(e){return new Qg}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gr.provider={build:()=>new Gr};class rl extends Gr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){U(this.persistence.referenceDelegate instanceof ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Dg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Mu((r=>ko.Vi(r,t)),this.serializer)}}class sl extends Gr{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await nl(this.xu.syncEngine),await ns(this.xu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return Ug(this.persistence,new Fg,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Dg(r,e.asyncQueue,t)}Mu(e,t){const r=new yA(t,this.persistence);return new _A(e.asyncQueue,r)}Cu(e){const t=Fu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?xe.withCacheSize(this.cacheSizeBytes):xe.DEFAULT;return new Lu(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Jg(),uo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Qg}}class d_ extends sl{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xu.syncEngine;this.sharedClientState instanceof ic&&(this.sharedClientState.syncEngine={bo:oR.bind(null,t),Do:uR.bind(null,t),Co:lR.bind(null,t),hs:cR.bind(null,t),So:iR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.zi((async r=>{await aR(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}Du(e){const t=Jg();if(!ic.v(t))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ic(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class ln{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nR.bind(null,this.syncEngine),await Fc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new BS})()}createDatastore(e){const t=tr(e.databaseInfo.databaseId),r=wS(e.databaseInfo);return SS(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new PS(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>_f(this.syncEngine,t,0)),(function(){return lf.v()?new lf:new _S})())}createSyncEngine(e,t){return(function(s,i,o,c,u,l,f){const p=new GS(s,i,o,c,u,l);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=O(s);N(Xn,"RemoteStore shutting down."),i.Ia.add(5),await ts(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ln.provider={build:()=>new ln};function If(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_e("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new Ce,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((r=>{r&&r.Ua()?this.metadata.resolve(r.Ka.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ka)}`))}),(r=>this.metadata.reject(r)))}close(){return this.Bu.cancel()}async getMetadata(){return this.metadata.promise}async bu(){return await this.getMetadata(),this.ku()}async ku(){const e=await this.qu();if(e===null)return null;const t=this.Lu.decode(e),r=Number(t);isNaN(r)&&this.Ku(`length string (${t}) is not valid number`);const s=await this.Uu(r);return new r_(JSON.parse(s),e.length+r)}$u(){return this.buffer.findIndex((e=>e===123))}async qu(){for(;this.$u()<0&&!await this.Wu(););if(this.buffer.length===0)return null;const e=this.$u();e<0&&this.Ku("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Uu(e){for(;this.buffer.length<e;)await this.Wu()&&this.Ku("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ku(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Wu(){const e=await this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.bu();if(!r||!r.Ua())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.Ka)}`);this.metadata=r;do r=this.bu(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Qu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.Uu(e);return new r_(JSON.parse(t),e)}Uu(e){if(this.cursor+e>this.bundleData.length)throw new C(S.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pR=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=O(s),c={documents:i.map((p=>si(o.serializer,p)))},u=await o.jo("BatchGetDocuments",o.serializer.databaseId,H.emptyPath(),c,i.length),l=new Map;u.forEach((p=>{const g=Cb(o.serializer,p);l.set(g.key.toString(),g)}));const f=[];return i.forEach((p=>{const g=l.get(p.toString());U(!!g,55234,{key:p}),f.push(g)})),f})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new es(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const s=x.fromPath(r);this.mutations.push(new Ru(s,this.precondition(s)))})),await(async function(r,s){const i=O(r),o={writes:s.map((c=>ii(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,H.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw L(50498,{Gu:e.constructor.name});t=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(B.min())?fe.exists(!1):fe.updateTime(t):fe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(B.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fe.updateTime(t)}return fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.zu=r.maxAttempts,this.M_=new $u(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((async()=>{const e=new pR(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Zu(s)}))))})).catch((r=>{this.Zu(r)}))}))}Hu(e){try{const t=this.updateFunction(e);return!di(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Zu(e){this.zu>0&&this.Xu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Xu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!og(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="FirestoreClient";class gR{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{N(hn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(N(hn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ce;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ss(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ac(n,e){n.asyncQueue.verifyOperationInProgress(),N(hn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Bg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Tf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await il(n);N(hn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>df(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>df(e.remoteStore,s))),n._onlineComponents=e}async function il(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(hn,"Using user provided OfflineComponentProvider");try{await ac(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;We("Error using user provided cache. Falling back to memory cache: "+t),await ac(n,new Gr)}}else N(hn,"Using default OfflineComponentProvider"),await ac(n,new rl(void 0));return n._offlineComponents}async function fa(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(hn,"Using user provided OnlineComponentProvider"),await Tf(n,n._uninitializedComponentsProvider._online)):(N(hn,"Using default OnlineComponentProvider"),await Tf(n,new ln))),n._onlineComponents}function f_(n){return il(n).then((e=>e.persistence))}function is(n){return il(n).then((e=>e.localStore))}function p_(n){return fa(n).then((e=>e.remoteStore))}function ol(n){return fa(n).then((e=>e.syncEngine))}function m_(n){return fa(n).then((e=>e.datastore))}async function Kr(n){const e=await fa(n),t=e.eventManager;return t.onListen=KS.bind(null,e.syncEngine),t.onUnlisten=WS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QS.bind(null,e.syncEngine),t}function _R(n){return n.asyncQueue.enqueue((async()=>{const e=await f_(n),t=await p_(n);return e.setNetworkEnabled(!0),(function(s){const i=O(s);return i.Ia.delete(0),Ti(i)})(t)}))}function yR(n){return n.asyncQueue.enqueue((async()=>{const e=await f_(n),t=await p_(n);return e.setNetworkEnabled(!1),(async function(s){const i=O(s);i.Ia.add(0),await ts(i),i.Va.set("Offline")})(t)}))}function IR(n,e,t,r){const s=new da(r),i=new Ju(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Hu(await Kr(n),i))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Wu(await Kr(n),i)))}}function TR(n,e){const t=new Ce;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const c=await(function(l,f){const p=O(l);return p.persistence.runTransaction("read document","readonly",(g=>p.localDocuments.getDocument(g,f)))})(s,i);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const u=ss(c,`Failed to get document '${i} from cache`);o.reject(u)}})(await is(n),e,t))),t.promise}function g_(n,e,t={}){const r=new Ce;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,l){const f=new da({next:g=>{f.Nu(),o.enqueueAndForget((()=>Wu(i,p)));const v=g.docs.has(c);!v&&g.fromCache?l.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?l.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new Ju(Xr(c.path),f,{includeMetadataChanges:!0,qa:!0});return Hu(i,p)})(await Kr(n),n.asyncQueue,e,t,r))),r.promise}function wR(n,e){const t=new Ce;return n.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const c=await Do(s,i,!0),u=new a_(i,c.ks),l=u.ru(c.documents),f=u.applyChanges(l,!1);o.resolve(f.snapshot)}catch(c){const u=ss(c,`Failed to execute query '${i} against cache`);o.reject(u)}})(await is(n),e,t))),t.promise}function __(n,e,t={}){const r=new Ce;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,u,l){const f=new da({next:g=>{f.Nu(),o.enqueueAndForget((()=>Wu(i,p))),g.fromCache&&u.source==="server"?l.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(g)},error:g=>l.reject(g)}),p=new Ju(c,f,{includeMetadataChanges:!0,qa:!0});return Hu(i,p)})(await Kr(n),n.asyncQueue,e,t,r))),r.promise}function ER(n,e,t){const r=new Ce;return n.asyncQueue.enqueueAndForget((async()=>{try{const s=await m_(n);r.resolve((async function(o,c,u){var k;const l=O(o),{request:f,gt:p,parent:g}=_g(l.serializer,jm(c),u);l.connection.qo||delete f.parent;const v=(await l.jo("RunAggregationQuery",l.serializer.databaseId,g,f,1)).filter((D=>!!D.result));U(v.length===1,64727);const V=(k=v[0].result)==null?void 0:k.aggregateFields;return Object.keys(V).reduce(((D,F)=>(D[p[F]]=V[F],D)),{})})(s,e,t))}catch(s){r.reject(s)}})),r.promise}function vR(n,e){const t=new Ce;return n.asyncQueue.enqueueAndForget((async()=>JS(await ol(n),e,t))),t.promise}function AR(n,e){const t=new da(e);return n.asyncQueue.enqueueAndForget((async()=>(function(s,i){O(s).Ca.add(i),i.next()})(await Kr(n),t))),()=>{t.Nu(),n.asyncQueue.enqueueAndForget((async()=>(function(s,i){O(s).Ca.delete(i)})(await Kr(n),t)))}}function bR(n,e,t){const r=new Ce;return n.asyncQueue.enqueueAndForget((async()=>{const s=await m_(n);new mR(n.asyncQueue,s,t,e,r).ju()})),r.promise}function SR(n,e,t,r){const s=(function(o,c){let u;return u=typeof o=="string"?cg().encode(o):o,(function(f,p){return new dR(f,p)})((function(f,p){if(f instanceof Uint8Array)return If(f,p);if(f instanceof ArrayBuffer)return If(new Uint8Array(f),p);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),c)})(t,tr(e));n.asyncQueue.enqueueAndForget((async()=>{hR(await ol(n),s,r)}))}function RR(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){const i=O(r);return i.persistence.runTransaction("Get named query","readonly",(o=>i.Pi.getNamedQuery(o,s)))})(await is(n),e)))}function y_(n,e){return(function(r,s){return new fR(r,s)})(n,e)}function PR(n,e){return n.asyncQueue.enqueue((async()=>(async function(r,s){const i=O(r),o=i.indexManager,c=[];return i.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((l=>(function(p,g,v,V,k){p=[...p],g=[...g],p.sort(v),g.sort(v);const D=p.length,F=g.length;let $=0,q=0;for(;$<F&&q<D;){const te=v(p[q],g[$]);te<0?k(p[q++]):te>0?V(g[$++]):($++,q++)}for(;$<F;)V(g[$++]);for(;q<D;)k(p[q++])})(l,s,fA,(f=>{c.push(o.addFieldIndex(u,f))}),(f=>{c.push(o.deleteFieldIndex(u,f))})))).next((()=>A.waitFor(c)))))})(await is(n),e)))}function CR(n,e){return n.asyncQueue.enqueue((async()=>(function(r,s){O(r).Cs.As=s})(await is(n),e)))}function VR(n){return n.asyncQueue.enqueue((async()=>(function(t){const r=O(t),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await is(n))))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR="ComponentProvider",wf=new Map;function DR(n,e,t,r,s){return new HA(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,I_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firestore.googleapis.com",Ef=!0;class vf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=T_,this.ssl=Ef}else this.host=e.host,this.ssl=e.ssl??Ef;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kg)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}im("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new rm;switch(r.type){case"firstParty":return new oA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=wf.get(t);r&&(N(kR,"Removing Datastore"),wf.delete(t),r.terminate())})(this),Promise.resolve()}}function w_(n,e,t,r={}){var l;n=W(n,wi);const s=Wr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&Gc(`https://${c}`),i.host!==T_&&i.host!==c&&We("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!tt(u,o)&&(n._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Re.MOCK_USER;else{f=xy(r.mockUserToken,(l=n._app)==null?void 0:l.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Re(g)}n._authCredentials=new rA(new nm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ve(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new at(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(er(t,se._jsonSchema))return new se(e,r||null,new x(H.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:Te("string",se._jsonSchemaVersion),referencePath:Te("string")};class at extends ve{constructor(e,t,r){super(e,t,Xr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new x(e))}withConverter(e){return new at(this.firestore,e,this._path)}}function NR(n,e,...t){if(n=X(n),pu("collection","path",e),n instanceof wi){const r=H.fromString(e,...t);return ld(r),new at(n,null,r)}{if(!(n instanceof se||n instanceof at))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(H.fromString(e,...t));return ld(r),new at(n.firestore,null,r)}}function xR(n,e){if(n=W(n,wi),pu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ve(n,null,(function(r){return new Dt(H.emptyPath(),r)})(e))}function E_(n,e,...t){if(n=X(n),arguments.length===1&&(e=Ho.newId()),pu("doc","path",e),n instanceof wi){const r=H.fromString(e,...t);return ud(r),new se(n,null,new x(r))}{if(!(n instanceof se||n instanceof at))throw new C(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(H.fromString(e,...t));return ud(r),new se(n.firestore,n instanceof at?n.converter:null,new x(r))}}function OR(n,e){return n=X(n),e=X(e),(n instanceof se||n instanceof at)&&(e instanceof se||e instanceof at)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function al(n,e){return n=X(n),e=X(e),n instanceof ve&&e instanceof ve&&n.firestore===e.firestore&&mi(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="AsyncQueue";class bf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $u(this,"async_queue_retry"),this._c=()=>{const r=uo();r&&N(Af,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=uo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=uo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ce;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!pn(e))throw e;N(Af,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,_e("INTERNAL UNHANDLED ERROR: ",Sf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ku.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:Sf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Sf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ce,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR=-1;class oe extends wi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bf(e),this._firestoreClient=void 0,await e}}}function LR(n,e,t){t||(t=ei);const r=wt(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(tt(i,e))return s;throw new C(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new C(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kg)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Wr(e.host)&&Gc(e.host),r.initialize({options:e,instanceIdentifier:t})}function FR(n,e){const t=typeof n=="object"?n:qo(),r=typeof n=="string"?n:e||ei,s=wt(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dy("firestore");i&&w_(s,...i)}return s}function pe(n){if(n._terminated)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||A_(n),n._firestoreClient}function A_(n){var r,s,i,o;const e=n._freezeSettings(),t=DR(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new gR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}function UR(n,e){We("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return b_(n,ln.provider,{build:r=>new sl(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function BR(n){We("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();b_(n,ln.provider,{build:t=>new d_(t,e.cacheSizeBytes)})}function b_(n,e,t){if((n=W(n,oe))._firestoreClient||n._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},A_(n)}function qR(n){if(n._initialized&&!n._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ce;return n._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(r){if(!_t.v())return Promise.resolve();const s=r+Lg;await _t.delete(s)})(Fu(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function $R(n){return(function(t){const r=new Ce;return t.asyncQueue.enqueueAndForget((async()=>eR(await ol(t),r))),r.promise})(pe(n=W(n,oe)))}function jR(n){return _R(pe(n=W(n,oe)))}function zR(n){return yR(pe(n=W(n,oe)))}function GR(n){return OI(n.app,"firestore",n._databaseId.database),n._delete()}function qc(n,e){const t=pe(n=W(n,oe)),r=new v_;return SR(t,n._databaseId,e,r),r}function S_(n,e){return RR(pe(n=W(n,oe)),e).then((t=>t?new ve(n,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(me.fromBase64String(e))}catch(t){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(er(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:Te("string",qe._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function KR(){return new nr(_c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ct._jsonSchemaVersion}}static fromJSON(e){if(er(e,ct._jsonSchema))return new ct(e.latitude,e.longitude)}}ct._jsonSchemaVersion="firestore/geoPoint/1.0",ct._jsonSchema={type:Te("string",ct._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(er(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xe(e.vectorValues);throw new C(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:Te("string",Xe._jsonSchemaVersion),vectorValues:Te("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=/^__.*__$/;class WR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zr(e,this.data,t,this.fieldTransforms)}}class R_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function P_(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class pa{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new pa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.mc(e),r}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.i({path:t,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Mo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(P_(this.dataSource)&&HR.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class QR{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||tr(e)}I(e,t,r,s=!1){return new pa({dataSource:e,methodName:t,targetDoc:r,path:he.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rr(n){const e=n._freezeSettings(),t=tr(n._databaseId);return new QR(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ma(n,e,t,r,s,i={}){const o=n.I(i.merge||i.mergeFields?2:0,e,t,s);pl("Data must be an object, but it was:",o,r);const c=k_(r,o);let u,l;if(i.merge)u=new je(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=kt(e,p,t);if(!o.contains(g))throw new C(S.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);N_(f,g)||f.push(g)}u=new je(f),l=o.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,l=o.fieldTransforms;return new WR(new Pe(c),u,l)}class Ei extends yn{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ei}}function C_(n,e,t){return new pa({dataSource:3,targetDoc:e.settings.targetDoc,methodName:n._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class cl extends yn{_toFieldTransform(e){return new _i(e.path,new Fr)}isEqual(e){return e instanceof cl}}class ul extends yn{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=C_(this,e,!0),r=this.Sc.map((i=>sr(i,t))),s=new Hn(r);return new _i(e.path,s)}isEqual(e){return e instanceof ul&&tt(this.Sc,e.Sc)}}class ll extends yn{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=C_(this,e,!0),r=this.Sc.map((i=>sr(i,t))),s=new Wn(r);return new _i(e.path,s)}isEqual(e){return e instanceof ll&&tt(this.Sc,e.Sc)}}class hl extends yn{constructor(e,t){super(e),this.bc=t}_toFieldTransform(e){const t=new Ur(e.serializer,Xm(e.serializer,this.bc));return new _i(e.path,t)}isEqual(e){return e instanceof hl&&this.bc===e.bc}}function dl(n,e,t,r){const s=n.I(1,e,t);pl("Data must be an object, but it was:",s,r);const i=[],o=Pe.empty();mn(r,((u,l)=>{const f=ml(e,u,t);l=X(l);const p=s.fc(f);if(l instanceof Ei)i.push(f);else{const g=sr(l,p);g!=null&&(i.push(f),o.set(f,g))}}));const c=new je(i);return new R_(o,c,s.fieldTransforms)}function fl(n,e,t,r,s,i){const o=n.I(1,e,t),c=[kt(e,r,t)],u=[s];if(i.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(kt(e,i[g])),u.push(i[g+1]);const l=[],f=Pe.empty();for(let g=c.length-1;g>=0;--g)if(!N_(l,c[g])){const v=c[g];let V=u[g];V=X(V);const k=o.fc(v);if(V instanceof Ei)l.push(v);else{const D=sr(V,k);D!=null&&(l.push(v),f.set(v,D))}}const p=new je(l);return new R_(f,p,o.fieldTransforms)}function V_(n,e,t,r=!1){return sr(t,n.I(r?4:3,e))}function sr(n,e){if(D_(n=X(n)))return pl("Unsupported field value:",e,n),k_(n,e);if(n instanceof yn)return(function(r,s){if(!P_(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let u=sr(c,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:Br(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Br(s.serializer,i)}}if(r instanceof ct)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qe)return{bytesValue:hg(s.serializer,r._byteString)};if(r instanceof se){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Du(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xe)return(function(o,c){const u=o instanceof Xe?o.toArray():o;return{mapValue:{fields:{[wu]:{stringValue:Eu},[Or]:{arrayValue:{values:u.map((f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return Su(c.serializer,f)}))}}}}}})(r,s);if(Eg(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Wo(r)}`)})(n,e)}function k_(n,e){const t={};return bm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,((r,s)=>{const i=sr(s,e.dc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function D_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof ct||n instanceof qe||n instanceof se||n instanceof yn||n instanceof Xe||Eg(n))}function pl(n,e,t){if(!D_(t)||!om(t)){const r=Wo(t);throw r==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+r)}}function kt(n,e,t){if((e=X(e))instanceof nr)return e._internalPath;if(typeof e=="string")return ml(n,e);throw Mo("Field path arguments must be of type string or ",n,!1,void 0,t)}const JR=new RegExp("[~\\*/\\[\\]]");function ml(n,e,t){if(e.search(JR)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nr(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new C(S.INVALID_ARGUMENT,c+n+u)}function N_(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return mn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Or].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>de(o.doubleValue)));return new Xe(t)}convertGeoPoint(e){return new ct(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zs(e));default:return null}}convertTimestamp(e){const t=Ct(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=H.fromString(e);U(wg(r),9688,{name:e});const s=new sn(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(t)||_e(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends gl{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(){return new Ei("deleteField")}function XR(){return new cl("serverTimestamp")}function ZR(...n){return new ul("arrayUnion",n)}function eP(...n){return new ll("arrayRemove",n)}function tP(n){return new hl("increment",n)}function nP(n){return new Xe(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(n){var r;const e=pe(W(n.firestore,oe)),t=(r=e._onlineComponents)==null?void 0:r.datastore.serializer;return t===void 0?null:ia(t,Me(n._query)).ft}function sP(n,e){var i;const t=Am(e,((o,c)=>new ig(c,o.aggregateType,o._internalFieldPath))),r=pe(W(n.firestore,oe)),s=(i=r._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:_g(s,jm(n._query),t,!0).request}const Rf="@firebase/firestore",Pf="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class x_{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new Pe({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(kt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iP extends oi{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _l{}class os extends _l{}function oP(n,e,...t){let r=[];e instanceof _l&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((u=>u instanceof ir)).length,c=i.filter((u=>u instanceof as)).length;if(o>1||o>0&&c>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class as extends os{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new as(e,t,r)}_apply(e){const t=this._parse(e);return L_(e._query,t),new ve(e.firestore,e.converter,Pc(e._query,t))}_parse(e){const t=rr(e.firestore);return(function(i,o,c,u,l,f,p){let g;if(l.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Vf(p,f);const V=[];for(const k of p)V.push(Cf(u,i,k));g={arrayValue:{values:V}}}else g=Cf(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Vf(p,f),g=V_(c,o,p,f==="in"||f==="not-in");return J.create(l,f,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aP(n,e,t){const r=e,s=kt("where",n);return as._create(s,r,t)}class ir extends _l{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ir(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)L_(o,u),o=Pc(o,u)})(e._query,t),new ve(e.firestore,e.converter,Pc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function cP(...n){return n.forEach((e=>F_("or",e))),ir._create("or",n)}function uP(...n){return n.forEach((e=>F_("and",e))),ir._create("and",n)}class ga extends os{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ga(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ri(i,o)})(e._query,this._field,this._direction);return new ve(e.firestore,e.converter,ob(e._query,t))}}function lP(n,e="asc"){const t=e,r=kt("orderBy",n);return ga._create(r,t)}class vi extends os{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new vi(e,t,r)}_apply(e){return new ve(e.firestore,e.converter,Ro(e._query,this._limit,this._limitType))}}function hP(n){return am("limit",n),vi._create("limit",n,"F")}function dP(n){return am("limitToLast",n),vi._create("limitToLast",n,"L")}class Ai extends os{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ai(e,t,r)}_apply(e){const t=M_(e,this.type,this._docOrFields,this._inclusive);return new ve(e.firestore,e.converter,ab(e._query,t))}}function fP(...n){return Ai._create("startAt",n,!0)}function pP(...n){return Ai._create("startAfter",n,!1)}class bi extends os{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new bi(e,t,r)}_apply(e){const t=M_(e,this.type,this._docOrFields,this._inclusive);return new ve(e.firestore,e.converter,cb(e._query,t))}}function mP(...n){return bi._create("endBefore",n,!1)}function gP(...n){return bi._create("endAt",n,!0)}function M_(n,e,t,r){if(t[0]=X(t[0]),t[0]instanceof oi)return(function(i,o,c,u,l){if(!u)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const p of vr(i))if(p.field.isKeyField())f.push(Gn(o,u.key));else{const g=u.data.field(p.field);if(Zo(g))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(g===null){const v=p.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}f.push(g)}return new cn(f,l)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=rr(n.firestore);return(function(o,c,u,l,f,p){const g=o.explicitOrderBy;if(f.length>g.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let V=0;V<f.length;V++){const k=f[V];if(g[V].field.isKeyField()){if(typeof k!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof k}`);if(!Au(o)&&k.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${k}' contains a slash.`);const D=o.path.child(H.fromString(k));if(!x.isDocumentKey(D))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const F=new x(D);v.push(Gn(c,F))}else{const D=V_(u,l,k);v.push(D)}}return new cn(v,p)})(n._query,n.firestore._databaseId,s,e,t,r)}}function Cf(n,e,t){if(typeof(t=X(t))=="string"){if(t==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Au(e)&&t.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(H.fromString(t));if(!x.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gn(n,new x(r))}if(t instanceof se)return Gn(n,t._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wo(t)}.`)}function Vf(n,e){if(!Array.isArray(n)||n.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function L_(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function F_(n,e){if(!(e instanceof as||e instanceof ir))throw new C(S.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function _a(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yl extends gl{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(n){return new Hr("sum",kt("sum",n))}function yP(n){return new Hr("avg",kt("average",n))}function U_(){return new Hr("count")}function IP(n,e){var t,r;return n instanceof Hr&&e instanceof Hr&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)==null?void 0:t.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function TP(n,e){return al(n.query,e.query)&&tt(n.data(),e.data())}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(n){return B_(n,{count:U_()})}function B_(n,e){const t=W(n.firestore,oe),r=pe(t),s=Am(e,((i,o)=>new ig(o,i.aggregateType,i._internalFieldPath)));return ER(r,n._query,s).then((i=>(function(c,u,l){const f=new In(c);return new x_(u,f,l)})(t,n,i)))}class EP{constructor(e){this.kind="memory",this._onlineComponentProvider=ln.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new rl(void 0)}}toJSON(){return{kind:this.kind}}}class vP{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=q_(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class AP{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Gr.provider}toJSON(){return{kind:this.kind}}}class bP{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new rl(e)}}toJSON(){return{kind:this.kind}}}function SP(){return new AP}function RP(n){return new bP(n==null?void 0:n.cacheSizeBytes)}function PP(n){return new EP(n)}function CP(n){return new vP(n)}class VP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ln.provider,this._offlineComponentProvider={build:t=>new sl(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class kP{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ln.provider,this._offlineComponentProvider={build:t=>new d_(t,e==null?void 0:e.cacheSizeBytes)}}}function q_(n){return new VP(n==null?void 0:n.forceOwnership)}function DP(){return new kP}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="NOT SUPPORTED";class St{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ke extends oi{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(kt("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ke._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function NP(n,e,t){if(er(e,Ke._jsonSchema)){if(e.bundle===$_)throw new C(S.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=tr(n._databaseId),s=y_(e.bundle,r),i=s.Qu(),o=new Yu(s.getMetadata(),r);for(const f of i)o.Ga(f);const c=o.documents;if(c.length!==1)throw new C(S.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${c.length} documents.`);const u=sa(r,c[0].document),l=new x(H.fromString(e.bundleName));return new Ke(n,new yl(n),l,u,new St(!1,!1),t||null)}}Ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ke._jsonSchema={type:Te("string",Ke._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class Gs extends Ke{data(e={}){return super.data(e)}}class He{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new St(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Gs(this._firestore,this._userDataWriter,r.key,r,new St(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const u=new Gs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new St(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Gs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new St(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,f=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:OP(c.type),doc:u,oldIndex:l,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=He._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ho.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xP(n,e,t){if(er(e,He._jsonSchema)){if(e.bundle===$_)throw new C(S.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=tr(n._databaseId),s=y_(e.bundle,r),i=s.Qu(),o=new Yu(s.getMetadata(),r);for(const g of i)o.Ga(g);if(o.queries.length!==1)throw new C(S.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const c=oa(o.queries[0].bundledQuery),u=o.documents;let l=new Bn;u.map((g=>{const v=sa(r,g.document);l=l.add(v)}));const f=Zn.fromInitialDocuments(c,l,G(),!1,!1),p=new ve(n,t||null,c);return new He(n,new yl(n),p,f)}}function OP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}function MP(n,e){return n instanceof Ke&&e instanceof Ke?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof He&&e instanceof He&&n._firestore===e._firestore&&al(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He._jsonSchemaVersion="firestore/querySnapshot/1.0",He._jsonSchema={type:Te("string",He._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};const LP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=rr(e)}set(e,t,r){this._verifyNotCommitted();const s=Zt(e,this._firestore),i=_a(s.converter,t,r),o=ma(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,fe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Zt(e,this._firestore);let o;return o=typeof(t=X(t))=="string"||t instanceof nr?fl(this._dataReader,"WriteBatch.update",i._key,t,r,s):dl(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Zt(e,this._firestore);return this._mutations=this._mutations.concat(new es(t._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Zt(n,e){if((n=X(n)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=rr(e)}get(e){const t=Zt(e,this._firestore),r=new yl(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return L(24041);const i=s[0];if(i.isFoundDocument())return new oi(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new oi(this._firestore,r,t._key,null,t.converter);throw L(18433,{doc:i})}))}set(e,t,r){const s=Zt(e,this._firestore),i=_a(s.converter,t,r),o=ma(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=Zt(e,this._firestore);let o;return o=typeof(t=X(t))=="string"||t instanceof nr?fl(this._dataReader,"Transaction.update",i._key,t,r,s):dl(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Zt(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_ extends FP{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Zt(e,this._firestore),r=new In(this._firestore);return super.get(e).then((s=>new Ke(this._firestore,r,t._key,s._document,new St(!1,!1),t.converter)))}}function UP(n,e,t){n=W(n,oe);const r={...LP,...t};(function(o){if(o.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=pe(n);return bR(s,(i=>e(new z_(n,i))),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(n){n=W(n,se);const e=W(n.firestore,oe),t=pe(e);return g_(t,n._key).then((r=>Il(e,n,r)))}function qP(n){n=W(n,se);const e=W(n.firestore,oe),t=pe(e),r=new In(e);return TR(t,n._key).then((s=>new Ke(e,r,n._key,s,new St(s!==null&&s.hasLocalMutations,!0),n.converter)))}function $P(n){n=W(n,se);const e=W(n.firestore,oe),t=pe(e);return g_(t,n._key,{source:"server"}).then((r=>Il(e,n,r)))}function jP(n){n=W(n,ve);const e=W(n.firestore,oe),t=pe(e),r=new In(e);return O_(n._query),__(t,n._query).then((s=>new He(e,r,n,s)))}function zP(n){n=W(n,ve);const e=W(n.firestore,oe),t=pe(e),r=new In(e);return wR(t,n._query).then((s=>new He(e,r,n,s)))}function GP(n){n=W(n,ve);const e=W(n.firestore,oe),t=pe(e),r=new In(e);return __(t,n._query,{source:"server"}).then((s=>new He(e,r,n,s)))}function KP(n,e,t){n=W(n,se);const r=W(n.firestore,oe),s=_a(n.converter,e,t),i=rr(r);return cs(r,[ma(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,fe.none())])}function HP(n,e,t,...r){n=W(n,se);const s=W(n.firestore,oe),i=rr(s);let o;return o=typeof(e=X(e))=="string"||e instanceof nr?fl(i,"updateDoc",n._key,e,t,r):dl(i,"updateDoc",n._key,e),cs(s,[o.toMutation(n._key,fe.exists(!0))])}function WP(n){return cs(W(n.firestore,oe),[new es(n._key,fe.none())])}function QP(n,e){const t=W(n.firestore,oe),r=E_(n),s=_a(n.converter,e),i=rr(n.firestore);return cs(t,[ma(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,fe.exists(!1))]).then((()=>r))}function $c(n,...e){var l,f,p;n=X(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||br(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(br(e[r])){const g=e[r];e[r]=(l=g.next)==null?void 0:l.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(n instanceof se)o=W(n.firestore,oe),c=Xr(n._key.path),i={next:g=>{e[r]&&e[r](Il(o,n,g))},error:e[r+1],complete:e[r+2]};else{const g=W(n,ve);o=W(g.firestore,oe),c=g._query;const v=new In(o);i={next:V=>{e[r]&&e[r](new He(o,v,g,V))},error:e[r+1],complete:e[r+2]},O_(n._query)}const u=pe(o);return IR(u,c,s,i)}function JP(n,e,...t){const r=X(n),s=(function(u){const l={bundle:"",bundleName:"",bundleSource:""},f=["bundle","bundleName","bundleSource"];for(const p of f){if(!(p in u)){l.error=`snapshotJson missing required field: ${p}`;break}const g=u[p];if(typeof g!="string"){l.error=`snapshotJson field '${p}' must be a string.`;break}if(g.length===0){l.error=`snapshotJson field '${p}' cannot be an empty string.`;break}p==="bundle"?l.bundle=g:p==="bundleName"?l.bundleName=g:p==="bundleSource"&&(l.bundleSource=g)}return l})(e);if(s.error)throw new C(S.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||br(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let c=null;if(typeof t[o]=="object"&&br(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,f,p,g,v){let V,k=!1;return qc(l,f.bundle).then((()=>S_(l,f.bundleName))).then((F=>{F&&!k&&(v&&F.withConverter(v),V=$c(F,p||{},g))})).catch((F=>(g.error&&g.error(F),()=>{}))),()=>{k||(k=!0,V&&V())}})(r,s,i,c,t[o])}if(s.bundleSource==="DocumentSnapshot"){let c=null;if(typeof t[o]=="object"&&br(t[o])){const u=t[o++];c={next:u.next,error:u.error,complete:u.complete}}else c={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,f,p,g,v){let V,k=!1;return qc(l,f.bundle).then((()=>{if(!k){const F=new se(l,v||null,x.fromPath(f.bundleName));V=$c(F,p||{},g)}})).catch((F=>(g.error&&g.error(F),()=>{}))),()=>{k||(k=!0,V&&V())}})(r,s,i,c,t[o])}throw new C(S.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function YP(n,e){n=W(n,oe);const t=pe(n),r=br(e)?e:{next:e};return AR(t,r)}function cs(n,e){const t=pe(n);return vR(t,e)}function Il(n,e,t){const r=t.docs.get(e._key),s=new In(n);return new Ke(n,s,e._key,r,new St(t.hasPendingWrites,t.fromCache),e.converter)}function XP(n){return n=W(n,oe),pe(n),new j_(n,(e=>cs(n,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(n,e){n=W(n,oe);const t=pe(n);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return We("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(i){const o=typeof i=="string"?(function(l){try{return JSON.parse(l)}catch(f){throw new C(S.INVALID_ARGUMENT,"Failed to parse JSON: "+(f==null?void 0:f.message))}})(i):i,c=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=kf(u,"collectionGroup"),f=[];if(Array.isArray(u.fields))for(const p of u.fields){const g=kf(p,"fieldPath"),v=ml("setIndexConfiguration",g);p.arrayConfig==="CONTAINS"?f.push(new Fn(v,2)):p.order==="ASCENDING"?f.push(new Fn(v,0)):p.order==="DESCENDING"&&f.push(new Fn(v,1))}c.push(new Cr(Cr.UNKNOWN_ID,l,f,Vr.empty()))}return c})(e);return PR(t,r)}function kf(n,e){if(typeof n[e]!="string")throw new C(S.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function eC(n){var s;n=W(n,oe);const e=Df.get(n);if(e)return e;if(((s=pe(n)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const r=new G_(n);return Df.set(n,r),r}function tC(n){K_(n,!0)}function nC(n){K_(n,!1)}function rC(n){const e=pe(n._firestore);VR(e).then((t=>N("deleting all persistent cache indexes succeeded"))).catch((t=>We("deleting all persistent cache indexes failed",t)))}function K_(n,e){const t=pe(n._firestore);CR(t,e).then((r=>N(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((r=>We(`setting persistent cache index auto creation isEnabled=${e} failed`,r)))}const Df=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Tl.instance.onExistenceFilterMismatch(e)}}class Tl{constructor(){this.t=new Map}static get instance(){return Qi||(Qi=new Tl,wb(Qi)),Qi}o(e){this.t.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.t;return r.set(t,e),()=>r.delete(t)}}let Qi=null;(function(e,t=!0){eA(Qr),nt(new Ze("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new oe(new sA(r.getProvider("auth-internal")),new aA(o,r.getProvider("app-check-internal")),WA(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Ge(Rf,Pf,e),Ge(Rf,Pf,"esm2020")})();const yC=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:gl,AggregateField:Hr,AggregateQuerySnapshot:x_,Bytes:qe,CACHE_SIZE_UNLIMITED:MR,CollectionReference:at,DocumentReference:se,DocumentSnapshot:Ke,FieldPath:nr,FieldValue:yn,Firestore:oe,FirestoreError:C,GeoPoint:ct,LoadBundleTask:v_,PersistentCacheIndexManager:G_,Query:ve,QueryCompositeFilterConstraint:ir,QueryConstraint:os,QueryDocumentSnapshot:Gs,QueryEndAtConstraint:bi,QueryFieldFilterConstraint:as,QueryLimitConstraint:vi,QueryOrderByConstraint:ga,QuerySnapshot:He,QueryStartAtConstraint:Ai,SnapshotMetadata:St,Timestamp:ne,Transaction:z_,VectorValue:Xe,WriteBatch:j_,_AutoId:Ho,_ByteString:me,_DatabaseId:sn,_DocumentKey:x,_EmptyAppCheckTokenProvider:cA,_EmptyAuthCredentialsProvider:rm,_FieldPath:he,_TestingHooks:sC,_cast:W,_debugAssert:nA,_internalAggregationQueryToProtoRunAggregationQueryRequest:sP,_internalQueryToProtoQueryTarget:rP,_isBase64Available:GA,_logWarn:We,_validateIsNotUsedTogether:im,addDoc:QP,aggregateFieldEqual:IP,aggregateQuerySnapshotEqual:TP,and:uP,arrayRemove:eP,arrayUnion:ZR,average:yP,clearIndexedDbPersistence:qR,collection:NR,collectionGroup:xR,connectFirestoreEmulator:w_,count:U_,deleteAllPersistentCacheIndexes:rC,deleteDoc:WP,deleteField:YR,disableNetwork:zR,disablePersistentCacheIndexAutoCreation:nC,doc:E_,documentId:KR,documentSnapshotFromJSON:NP,enableIndexedDbPersistence:UR,enableMultiTabIndexedDbPersistence:BR,enableNetwork:jR,enablePersistentCacheIndexAutoCreation:tC,endAt:gP,endBefore:mP,ensureFirestoreConfigured:pe,executeWrite:cs,getAggregateFromServer:B_,getCountFromServer:wP,getDoc:BP,getDocFromCache:qP,getDocFromServer:$P,getDocs:jP,getDocsFromCache:zP,getDocsFromServer:GP,getFirestore:FR,getPersistentCacheIndexManager:eC,increment:tP,initializeFirestore:LR,limit:hP,limitToLast:dP,loadBundle:qc,memoryEagerGarbageCollector:SP,memoryLocalCache:PP,memoryLruGarbageCollector:RP,namedQuery:S_,onSnapshot:$c,onSnapshotResume:JP,onSnapshotsInSync:YP,or:cP,orderBy:lP,persistentLocalCache:CP,persistentMultipleTabManager:DP,persistentSingleTabManager:q_,query:oP,queryEqual:al,querySnapshotFromJSON:xP,refEqual:OR,runTransaction:UP,serverTimestamp:XR,setDoc:KP,setIndexConfiguration:ZP,setLogLevel:tA,snapshotEqual:MP,startAfter:pP,startAt:fP,sum:_P,terminate:GR,updateDoc:HP,vector:nP,waitForPendingWrites:$R,where:aP,writeBatch:XP},Symbol.toStringTag,{value:"Module"}));export{aC as A,UP as B,XR as C,tP as D,WP as E,BP as F,Ht as G,pP as H,yC as I,FR as a,mC as b,pC as c,gv as d,lC as e,dC as f,uC as g,E_ as h,FI as i,$c as j,oC as k,Xv as l,NR as m,hC as n,fC as o,ZR as p,oP as q,lP as r,KP as s,hP as t,jP as u,XP as v,aP as w,eP as x,HP as y,cC as z};
