// https://d3js.org/d3-time/ v3.0.0 Copyright 2010-2021 Mike Bostock
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3-array")):"function"==typeof define&&define.amd?define(["exports","d3-array"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).d3=e.d3||{},e.d3)}(this,(function(e,t){"use strict";var n=new Date,u=new Date;function r(e,t,i,o){function a(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return a.floor=function(t){return e(t=new Date(+t)),t},a.ceil=function(n){return e(n=new Date(n-1)),t(n,1),e(n),n},a.round=function(e){var t=a(e),n=a.ceil(e);return e-t<n-e?t:n},a.offset=function(e,n){return t(e=new Date(+e),null==n?1:Math.floor(n)),e},a.range=function(n,u,r){var i,o=[];if(n=a.ceil(n),r=null==r?1:Math.floor(r),!(n<u&&r>0))return o;do{o.push(i=new Date(+n)),t(n,r),e(n)}while(i<n&&n<u);return o},a.filter=function(n){return r((function(t){if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)}),(function(e,u){if(e>=e)if(u<0)for(;++u<=0;)for(;t(e,-1),!n(e););else for(;--u>=0;)for(;t(e,1),!n(e););}))},i&&(a.count=function(t,r){return n.setTime(+t),u.setTime(+r),e(n),e(u),Math.floor(i(n,u))},a.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?a.filter(o?function(t){return o(t)%e==0}:function(t){return a.count(0,t)%e==0}):a:null}),a}var i=r((function(){}),(function(e,t){e.setTime(+e+t)}),(function(e,t){return t-e}));i.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?r((function(t){t.setTime(Math.floor(t/e)*e)}),(function(t,n){t.setTime(+t+n*e)}),(function(t,n){return(n-t)/e})):i:null};var o=i.range;const a=1e3,c=6e4,s=36e5,f=864e5,l=6048e5,g=2592e6,T=31536e6;var d=r((function(e){e.setTime(e-e.getMilliseconds())}),(function(e,t){e.setTime(+e+t*a)}),(function(e,t){return(t-e)/a}),(function(e){return e.getUTCSeconds()})),m=d.range,M=r((function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*a)}),(function(e,t){e.setTime(+e+t*c)}),(function(e,t){return(t-e)/c}),(function(e){return e.getMinutes()})),y=M.range,h=r((function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*a-e.getMinutes()*c)}),(function(e,t){e.setTime(+e+t*s)}),(function(e,t){return(t-e)/s}),(function(e){return e.getHours()})),C=h.range,U=r((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*c)/f),(e=>e.getDate()-1)),D=U.range;function F(e){return r((function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+7*t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*c)/l}))}var Y=F(0),v=F(1),S=F(2),H=F(3),p=F(4),k=F(5),w=F(6),W=Y.range,b=v.range,O=S.range,x=H.range,z=p.range,I=k.range,j=w.range,_=r((function(e){e.setDate(1),e.setHours(0,0,0,0)}),(function(e,t){e.setMonth(e.getMonth()+t)}),(function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())}),(function(e){return e.getMonth()})),q=_.range,P=r((function(e){e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t)}),(function(e,t){return t.getFullYear()-e.getFullYear()}),(function(e){return e.getFullYear()}));P.every=function(e){return isFinite(e=Math.floor(e))&&e>0?r((function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n*e)})):null};var A=P.range,B=r((function(e){e.setUTCSeconds(0,0)}),(function(e,t){e.setTime(+e+t*c)}),(function(e,t){return(t-e)/c}),(function(e){return e.getUTCMinutes()})),E=B.range,G=r((function(e){e.setUTCMinutes(0,0,0)}),(function(e,t){e.setTime(+e+t*s)}),(function(e,t){return(t-e)/s}),(function(e){return e.getUTCHours()})),J=G.range,K=r((function(e){e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+t)}),(function(e,t){return(t-e)/f}),(function(e){return e.getUTCDate()-1})),L=K.range;function N(e){return r((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+7*t)}),(function(e,t){return(t-e)/l}))}var Q=N(0),R=N(1),V=N(2),X=N(3),Z=N(4),$=N(5),ee=N(6),te=Q.range,ne=R.range,ue=V.range,re=X.range,ie=Z.range,oe=$.range,ae=ee.range,ce=r((function(e){e.setUTCDate(1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCMonth(e.getUTCMonth()+t)}),(function(e,t){return t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())}),(function(e){return e.getUTCMonth()})),se=ce.range,fe=r((function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)}),(function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}),(function(e){return e.getUTCFullYear()}));fe.every=function(e){return isFinite(e=Math.floor(e))&&e>0?r((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null};var le=fe.range;function ge(e,n,u,r,o,m){const M=[[d,1,a],[d,5,5e3],[d,15,15e3],[d,30,3e4],[m,1,c],[m,5,3e5],[m,15,9e5],[m,30,18e5],[o,1,s],[o,3,108e5],[o,6,216e5],[o,12,432e5],[r,1,f],[r,2,1728e5],[u,1,l],[n,1,g],[n,3,7776e6],[e,1,T]];function y(n,u,r){const o=Math.abs(u-n)/r,a=t.bisector((([,,e])=>e)).right(M,o);if(a===M.length)return e.every(t.tickStep(n/T,u/T,r));if(0===a)return i.every(Math.max(t.tickStep(n,u,r),1));const[c,s]=M[o/M[a-1][2]<M[a][2]/o?a-1:a];return c.every(s)}return[function(e,t,n){const u=t<e;u&&([e,t]=[t,e]);const r=n&&"function"==typeof n.range?n:y(e,t,n),i=r?r.range(e,+t+1):[];return u?i.reverse():i},y]}const[Te,de]=ge(fe,ce,Q,K,G,B),[me,Me]=ge(P,_,Y,U,h,M);e.timeDay=U,e.timeDays=D,e.timeFriday=k,e.timeFridays=I,e.timeHour=h,e.timeHours=C,e.timeInterval=r,e.timeMillisecond=i,e.timeMilliseconds=o,e.timeMinute=M,e.timeMinutes=y,e.timeMonday=v,e.timeMondays=b,e.timeMonth=_,e.timeMonths=q,e.timeSaturday=w,e.timeSaturdays=j,e.timeSecond=d,e.timeSeconds=m,e.timeSunday=Y,e.timeSundays=W,e.timeThursday=p,e.timeThursdays=z,e.timeTickInterval=Me,e.timeTicks=me,e.timeTuesday=S,e.timeTuesdays=O,e.timeWednesday=H,e.timeWednesdays=x,e.timeWeek=Y,e.timeWeeks=W,e.timeYear=P,e.timeYears=A,e.utcDay=K,e.utcDays=L,e.utcFriday=$,e.utcFridays=oe,e.utcHour=G,e.utcHours=J,e.utcMillisecond=i,e.utcMilliseconds=o,e.utcMinute=B,e.utcMinutes=E,e.utcMonday=R,e.utcMondays=ne,e.utcMonth=ce,e.utcMonths=se,e.utcSaturday=ee,e.utcSaturdays=ae,e.utcSecond=d,e.utcSeconds=m,e.utcSunday=Q,e.utcSundays=te,e.utcThursday=Z,e.utcThursdays=ie,e.utcTickInterval=de,e.utcTicks=Te,e.utcTuesday=V,e.utcTuesdays=ue,e.utcWednesday=X,e.utcWednesdays=re,e.utcWeek=Q,e.utcWeeks=te,e.utcYear=fe,e.utcYears=le,Object.defineProperty(e,"__esModule",{value:!0})}));