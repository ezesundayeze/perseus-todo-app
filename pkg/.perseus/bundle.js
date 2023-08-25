let wasm;const heap=new Array(128).fill(undefined);heap.push(undefined,null,true,false);function getObject(a){return heap[a]}let WASM_VECTOR_LEN=0;let cachedUint8Memory0=null;function getUint8Memory0(){if(cachedUint8Memory0===null||cachedUint8Memory0.byteLength===0){cachedUint8Memory0=new Uint8Array(wasm.memory.buffer)};return cachedUint8Memory0}const cachedTextEncoder=typeof TextEncoder!=='undefined'?new TextEncoder('utf-8'):{encode:()=>{throw Error('TextEncoder not available')}};const encodeString=typeof cachedTextEncoder.encodeInto==='function'?function(a,b){return cachedTextEncoder.encodeInto(a,b)}:function(a,b){const c=cachedTextEncoder.encode(a);b.set(c);return {read:a.length,written:c.length}};function passStringToWasm0(a,b,c){if(c===undefined){const h=cachedTextEncoder.encode(a);const i=b(h.length)>>>0;getUint8Memory0().subarray(i,i+ h.length).set(h);WASM_VECTOR_LEN=h.length;return i};let d=a.length;let e=b(d)>>>0;const f=getUint8Memory0();let g=0;for(;g<d;g++){const h=a.charCodeAt(g);if(h>0x7F)break;f[e+ g]=h};if(g!==d){if(g!==0){a=a.slice(g)};e=c(e,d,d=g+ a.length*3)>>>0;const h=getUint8Memory0().subarray(e+ g,e+ d);const i=encodeString(a,h);g+=i.written};WASM_VECTOR_LEN=g;return e}function isLikeNone(a){return a===undefined||a===null}let cachedInt32Memory0=null;function getInt32Memory0(){if(cachedInt32Memory0===null||cachedInt32Memory0.byteLength===0){cachedInt32Memory0=new Int32Array(wasm.memory.buffer)};return cachedInt32Memory0}let heap_next=heap.length;function addHeapObject(a){if(heap_next===heap.length)heap.push(heap.length+ 1);const b=heap_next;heap_next=heap[b];heap[b]=a;return b}function dropObject(a){if(a<132)return;heap[a]=heap_next;heap_next=a}function takeObject(a){const b=getObject(a);dropObject(a);return b}const cachedTextDecoder=typeof TextDecoder!=='undefined'?new TextDecoder('utf-8',{ignoreBOM:true,fatal:true}):{decode:()=>{throw Error('TextDecoder not available')}};if(typeof TextDecoder!=='undefined'){cachedTextDecoder.decode()};function getStringFromWasm0(a,b){a=a>>>0;return cachedTextDecoder.decode(getUint8Memory0().subarray(a,a+ b))}function debugString(a){const b=typeof a;if(b=='number'||b=='boolean'||a==null){return `${a}`};if(b=='string'){return `"${a}"`};if(b=='symbol'){const e=a.description;if(e==null){return 'Symbol'}else{return `Symbol(${e})`}};if(b=='function'){const e=a.name;if(typeof e=='string'&&e.length>0){return `Function(${e})`}else{return 'Function'}};if(Array.isArray(a)){const e=a.length;let f='[';if(e>0){f+=debugString(a[0])};for(let g=1;g<e;g++){f+=', '+ debugString(a[g])};f+=']';return f};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>1){d=c[1]}else{return toString.call(a)};if(d=='Object'){try{return 'Object('+ JSON.stringify(a)+ ')'}catch(e){return 'Object'}};if(a instanceof Error){return `${a.name}: ${a.message}\n${a.stack}`};return d}function makeClosure(a,b,c,d){const e={a:a,b:b,cnt:1,dtor:c};const f=(...g)=>{e.cnt++;try{return d(e.a,e.b,...g)}finally{if(--e.cnt===0){wasm.__wbindgen_export_2.get(e.dtor)(e.a,e.b);e.a=0}}};f.original=e;return f}function __wbg_adapter_22(a,b){wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hb352b41c4bb4b8da(a,b)}function makeMutClosure(a,b,c,d){const e={a:a,b:b,cnt:1,dtor:c};const f=(...g)=>{e.cnt++;const h=e.a;e.a=0;try{return d(h,e.b,...g)}finally{if(--e.cnt===0){wasm.__wbindgen_export_2.get(e.dtor)(h,e.b)}else{e.a=h}}};f.original=e;return f}function __wbg_adapter_25(a,b,c){wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h17e8f94e39dbd358(a,b,addHeapObject(c))}function __wbg_adapter_28(a,b){wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4014f98d7e083410(a,b)}function __wbg_adapter_31(a,b,c){wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc595fc951444d1f9(a,b,addHeapObject(c))}function getCachedStringFromWasm0(a,b){if(a===0){return getObject(b)}else{return getStringFromWasm0(a,b)}}function handleError(a,b){try{return a.apply(this,b)}catch(c){wasm.__wbindgen_exn_store(addHeapObject(c))}}async function __wbg_load(a,b){if(typeof Response==='function'&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming==='function'){try{return await WebAssembly.instantiateStreaming(a,b)}catch(d){if(a.headers.get('Content-Type')!='application/wasm'){console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",d)}else{throw d}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}}function __wbg_get_imports(){const a={};a.wbg={};a.wbg.__wbindgen_string_get=function(b,c){const f=getObject(c);const g=typeof f==='string'?f:undefined;var d=isLikeNone(g)?0:passStringToWasm0(g,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var e=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=e;getInt32Memory0()[b/4+ 0]=d};a.wbg.__wbindgen_object_clone_ref=function(b){const c=getObject(b);return addHeapObject(c)};a.wbg.__wbindgen_object_drop_ref=function(b){takeObject(b)};a.wbg.__wbindgen_string_new=function(b,c){const d=getStringFromWasm0(b,c);return addHeapObject(d)};a.wbg.__wbindgen_cb_drop=function(b){const c=takeObject(b).original;if(c.cnt--==1){c.a=0;return true};const d=false;return d};a.wbg.__wbindgen_boolean_get=function(b){const c=getObject(b);const d=typeof c==='boolean'?(c?1:0):2;return d};a.wbg.__wbindgen_jsval_eq=function(b,c){const d=getObject(b)===getObject(c);return d};a.wbg.__wbg_nodeId_bbf0efafa303e805=function(b,c){const d=getObject(c).$$$nodeId;getInt32Memory0()[b/4+ 1]=isLikeNone(d)?0:d;getInt32Memory0()[b/4+ 0]=!isLikeNone(d)};a.wbg.__wbg_setnodeId_433ef8ed15bd1612=function(b,c){getObject(b).$$$nodeId=c>>>0};a.wbg.__wbg_setclassName_f86a95d6ffe042e6=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).className=e},arguments)};a.wbg.__wbg_queueMicrotask_b580a35152f7cc7c=function(b){queueMicrotask(getObject(b))};a.wbg.__wbg_remove_486f7131af2f823a=function(b){getObject(b).remove()};a.wbg.__wbg_newwitheventinitdict_91cfa1c30b44c827=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(b,c);const f=new CustomEvent(e,getObject(d));return addHeapObject(f)},arguments)};a.wbg.__wbg_documentElement_4601d101b0dc875a=function(b){const c=getObject(b).documentElement;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_body_db30cc67afcfce41=function(b){const c=getObject(b).body;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_createComment_27f6bb41bdc875ab=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).createComment(e);return addHeapObject(f)};a.wbg.__wbg_createElement_d975e66d06bc88da=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).createElement(e);return addHeapObject(f)},arguments)};a.wbg.__wbg_createTextNode_31876ed40128c33c=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).createTextNode(e);return addHeapObject(f)};a.wbg.__wbg_getElementById_2d1ad15c49298068=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).getElementById(e);return isLikeNone(f)?0:addHeapObject(f)};a.wbg.__wbg_querySelector_41d5da02fa776534=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).querySelector(e);return isLikeNone(f)?0:addHeapObject(f)},arguments)};a.wbg.__wbg_querySelectorAll_d2d7db9661ea3b3f=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).querySelectorAll(e);return addHeapObject(f)},arguments)};a.wbg.__wbg_tagName_5cc37cb7ee95dbba=function(b,c){const d=getObject(c).tagName;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_setid_7b804eee26ac1f4c=function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).id=e};a.wbg.__wbg_innerHTML_32dde7e4f768561a=function(b,c){const d=getObject(c).innerHTML;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_setinnerHTML_76dc2e7ffb1c1936=function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).innerHTML=e};a.wbg.__wbg_outerHTML_e90651c874c31e05=function(b,c){const d=getObject(c).outerHTML;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_closest_ccb736ba8ab76b4e=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).closest(e);return isLikeNone(f)?0:addHeapObject(f)},arguments)};a.wbg.__wbg_getAttribute_fd27ddff957d4c38=function(b,c,d,e){var f=getCachedStringFromWasm0(d,e);const i=getObject(c).getAttribute(f);var g=isLikeNone(i)?0:passStringToWasm0(i,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var h=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=h;getInt32Memory0()[b/4+ 0]=g};a.wbg.__wbg_insertAdjacentHTML_df6592861a01b9ba=function(){return handleError(function(b,c,d,e,f){var g=getCachedStringFromWasm0(c,d);var h=getCachedStringFromWasm0(e,f);getObject(b).insertAdjacentHTML(g,h)},arguments)};a.wbg.__wbg_querySelectorAll_7cbcd2cd2afed0bf=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b).querySelectorAll(e);return addHeapObject(f)},arguments)};a.wbg.__wbg_setAttribute_1b177bcd399b9b56=function(){return handleError(function(b,c,d,e,f){var g=getCachedStringFromWasm0(c,d);var h=getCachedStringFromWasm0(e,f);getObject(b).setAttribute(g,h)},arguments)};a.wbg.__wbg_append_f6992158ef7e3e91=function(){return handleError(function(b,c){getObject(b).append(getObject(c))},arguments)};a.wbg.__wbg_target_bb43778021b84733=function(b){const c=getObject(b).target;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_preventDefault_2f38e1471796356f=function(b){getObject(b).preventDefault()};a.wbg.__wbg_addEventListener_d25d1ffe6c69ae96=function(){return handleError(function(b,c,d,e){var f=getCachedStringFromWasm0(c,d);getObject(b).addEventListener(f,getObject(e))},arguments)};a.wbg.__wbg_dispatchEvent_cfc38228a531c8c8=function(){return handleError(function(b,c){const d=getObject(b).dispatchEvent(getObject(c));return d},arguments)};a.wbg.__wbg_pushState_b98021531274a207=function(){return handleError(function(b,c,d,e,f,g){var h=getCachedStringFromWasm0(d,e);var i=getCachedStringFromWasm0(f,g);getObject(b).pushState(getObject(c),h,i)},arguments)};a.wbg.__wbg_replaceState_37c0e8f967749319=function(){return handleError(function(b,c,d,e,f,g){var h=getCachedStringFromWasm0(d,e);var i=getCachedStringFromWasm0(f,g);getObject(b).replaceState(getObject(c),h,i)},arguments)};a.wbg.__wbg_rel_58b6bce808c63ae3=function(b,c){const d=getObject(c).rel;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_origin_2d4a8e80930a02f5=function(b,c){const d=getObject(c).origin;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_pathname_4656206e82452ca9=function(b,c){const d=getObject(c).pathname;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_hash_c98e3c253318d4ca=function(b,c){const d=getObject(c).hash;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_href_d45a5745a211a3da=function(b,c){const d=getObject(c).href;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_altKey_1796184c5e96a92b=function(b){const c=getObject(b).altKey;return c};a.wbg.__wbg_ctrlKey_a6ae383772af67d4=function(b){const c=getObject(b).ctrlKey;return c};a.wbg.__wbg_shiftKey_0b1fd10d0674f847=function(b){const c=getObject(b).shiftKey;return c};a.wbg.__wbg_metaKey_e6e67f783888f56d=function(b){const c=getObject(b).metaKey;return c};a.wbg.__wbg_origin_ab6836ac8535fbb2=function(){return handleError(function(b,c){const d=getObject(c).origin;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e},arguments)};a.wbg.__wbg_pathname_7937efe08358d5cb=function(){return handleError(function(b,c){const d=getObject(c).pathname;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e},arguments)};a.wbg.__wbg_hash_afd040db1cf05017=function(){return handleError(function(b,c){const d=getObject(c).hash;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e},arguments)};a.wbg.__wbg_language_58f136fb521e5304=function(b,c){const f=getObject(c).language;var d=isLikeNone(f)?0:passStringToWasm0(f,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var e=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=e;getInt32Memory0()[b/4+ 0]=d};a.wbg.__wbg_languages_dc93bfecaa07d346=function(b){const c=getObject(b).languages;return addHeapObject(c)};a.wbg.__wbg_nodeType_14c8f43cb5eb8e8e=function(b){const c=getObject(b).nodeType;return c};a.wbg.__wbg_parentNode_65dd881ebb22f646=function(b){const c=getObject(b).parentNode;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_childNodes_6698e54ed9b47366=function(b){const c=getObject(b).childNodes;return addHeapObject(c)};a.wbg.__wbg_nextSibling_6e2efeefd07e6f9e=function(b){const c=getObject(b).nextSibling;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_nodeValue_c8a7d6d199d926a6=function(b,c){const f=getObject(c).nodeValue;var d=isLikeNone(f)?0:passStringToWasm0(f,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);var e=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=e;getInt32Memory0()[b/4+ 0]=d};a.wbg.__wbg_settextContent_7db448361f097ffe=function(b,c,d){var e=getCachedStringFromWasm0(c,d);getObject(b).textContent=e};a.wbg.__wbg_appendChild_1139b53a65d69bed=function(){return handleError(function(b,c){const d=getObject(b).appendChild(getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_insertBefore_2e38a68009b551f3=function(){return handleError(function(b,c,d){const e=getObject(b).insertBefore(getObject(c),getObject(d));return addHeapObject(e)},arguments)};a.wbg.__wbg_removeChild_48d9566cffdfec93=function(){return handleError(function(b,c){const d=getObject(b).removeChild(getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_replaceChild_6ce3458f4cee65d2=function(){return handleError(function(b,c,d){const e=getObject(b).replaceChild(getObject(c),getObject(d));return addHeapObject(e)},arguments)};a.wbg.__wbg_length_cf2848460fdb94a8=function(b){const c=getObject(b).length;return c};a.wbg.__wbg_get_37a61cbf1cebb87f=function(b,c){const d=getObject(b)[c>>>0];return isLikeNone(d)?0:addHeapObject(d)};a.wbg.__wbg_newwithstrandinit_a4cd16dfaafcf625=function(){return handleError(function(b,c,d){var e=getCachedStringFromWasm0(b,c);const f=new Request(e,getObject(d));return addHeapObject(f)},arguments)};a.wbg.__wbg_instanceof_Response_7ade9a5a066d1a55=function(b){let c;try{c=getObject(b) instanceof Response}catch{c=false};const d=c;return d};a.wbg.__wbg_status_d2b2d0889f7e970f=function(b){const c=getObject(b).status;return c};a.wbg.__wbg_text_65fa1887e8f7b4ac=function(){return handleError(function(b){const c=getObject(b).text();return addHeapObject(c)},arguments)};a.wbg.__wbg_pathname_715df8a6b71fdfd7=function(b,c){const d=getObject(c).pathname;const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbg_new_f6818a0e274befa9=function(){return handleError(function(b,c){var d=getCachedStringFromWasm0(b,c);const e=new URL(d);return addHeapObject(e)},arguments)};a.wbg.__wbg_instanceof_Window_c5579e140698a9dc=function(b){let c;try{c=getObject(b) instanceof Window}catch{c=false};const d=c;return d};a.wbg.__wbg_document_508774c021174a52=function(b){const c=getObject(b).document;return isLikeNone(c)?0:addHeapObject(c)};a.wbg.__wbg_location_f6c62a50e72200c8=function(b){const c=getObject(b).location;return addHeapObject(c)};a.wbg.__wbg_history_43a4879ec56de5ce=function(){return handleError(function(b){const c=getObject(b).history;return addHeapObject(c)},arguments)};a.wbg.__wbg_navigator_957c9b40d49df205=function(b){const c=getObject(b).navigator;return addHeapObject(c)};a.wbg.__wbg_scrollTo_9ab1934537d7e2ab=function(b,c,d){getObject(b).scrollTo(c,d)};a.wbg.__wbg_get_cbc14a9ed59215dd=function(b,c,d){var e=getCachedStringFromWasm0(c,d);const f=getObject(b)[e];return isLikeNone(f)?0:addHeapObject(f)};a.wbg.__wbg_fetch_bb49ae9f1d79408b=function(b,c){const d=getObject(b).fetch(getObject(c));return addHeapObject(d)};a.wbg.__wbg_log_dc06ec929fc95a20=function(b){console.log(getObject(b))};a.wbg.__wbg_self_742dd6eab3e9211e=function(){return handleError(function(){const b=self.self;return addHeapObject(b)},arguments)};a.wbg.__wbg_window_c409e731db53a0e2=function(){return handleError(function(){const b=window.window;return addHeapObject(b)},arguments)};a.wbg.__wbg_globalThis_b70c095388441f2d=function(){return handleError(function(){const b=globalThis.globalThis;return addHeapObject(b)},arguments)};a.wbg.__wbg_global_1c72617491ed7194=function(){return handleError(function(){const b=global.global;return addHeapObject(b)},arguments)};a.wbg.__wbindgen_is_undefined=function(b){const c=getObject(b)===undefined;return c};a.wbg.__wbg_new_2b6fea4ea03b1b95=function(){const b=new Object();return addHeapObject(b)};a.wbg.__wbg_decodeURIComponent_d62b7a85d22fd139=function(){return handleError(function(b,c){var d=getCachedStringFromWasm0(b,c);const e=decodeURIComponent(d);return addHeapObject(e)},arguments)};a.wbg.__wbg_get_7303ed2ef026b2f5=function(b,c){const d=getObject(b)[c>>>0];return addHeapObject(d)};a.wbg.__wbg_length_820c786973abdd8a=function(b){const c=getObject(b).length;return c};a.wbg.__wbg_newnoargs_c9e6043b8ad84109=function(b,c){var d=getCachedStringFromWasm0(b,c);const e=new Function(d);return addHeapObject(e)};a.wbg.__wbg_call_557a2f2deacc4912=function(){return handleError(function(b,c){const d=getObject(b).call(getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_is_20a2e5c82eecc47d=function(b,c){const d=Object.is(getObject(b),getObject(c));return d};a.wbg.__wbg_get_f53c921291c381bd=function(){return handleError(function(b,c){const d=Reflect.get(getObject(b),getObject(c));return addHeapObject(d)},arguments)};a.wbg.__wbg_set_07da13cc24b69217=function(){return handleError(function(b,c,d){const e=Reflect.set(getObject(b),getObject(c),getObject(d));return e},arguments)};a.wbg.__wbg_resolve_ae38ad63c43ff98b=function(b){const c=Promise.resolve(getObject(b));return addHeapObject(c)};a.wbg.__wbg_then_8df675b8bb5d5e3c=function(b,c){const d=getObject(b).then(getObject(c));return addHeapObject(d)};a.wbg.__wbg_then_835b073a479138e5=function(b,c,d){const e=getObject(b).then(getObject(c),getObject(d));return addHeapObject(e)};a.wbg.__wbindgen_debug_string=function(b,c){const d=debugString(getObject(c));const e=passStringToWasm0(d,wasm.__wbindgen_malloc,wasm.__wbindgen_realloc);const f=WASM_VECTOR_LEN;getInt32Memory0()[b/4+ 1]=f;getInt32Memory0()[b/4+ 0]=e};a.wbg.__wbindgen_throw=function(b,c){throw new Error(getStringFromWasm0(b,c))};a.wbg.__wbindgen_closure_wrapper410=function(b,c,d){const e=makeClosure(b,c,102,__wbg_adapter_22);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper421=function(b,c,d){const e=makeMutClosure(b,c,102,__wbg_adapter_25);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper1302=function(b,c,d){const e=makeMutClosure(b,c,242,__wbg_adapter_28);return addHeapObject(e)};a.wbg.__wbindgen_closure_wrapper2350=function(b,c,d){const e=makeMutClosure(b,c,272,__wbg_adapter_31);return addHeapObject(e)};return a}function __wbg_init_memory(a,b){}function __wbg_finalize_init(a,b){wasm=a.exports;__wbg_init.__wbindgen_wasm_module=b;cachedInt32Memory0=null;cachedUint8Memory0=null;wasm.__wbindgen_start();return wasm}function initSync(a){if(wasm!==undefined)return wasm;const b=__wbg_get_imports();__wbg_init_memory(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const c=new WebAssembly.Instance(a,b);return __wbg_finalize_init(c,a)}async function __wbg_init(a){if(wasm!==undefined)return wasm;if(typeof a==='undefined'){a=new URL('perseus_engine_bg.wasm',import.meta.url)};const b=__wbg_get_imports();if(typeof a==='string'||typeof Request==='function'&&a instanceof Request||typeof URL==='function'&&a instanceof URL){a=fetch(a)};__wbg_init_memory(b);const {instance:c,module:d}=await __wbg_load(await a,b);return __wbg_finalize_init(c,d)}export default __wbg_init;;