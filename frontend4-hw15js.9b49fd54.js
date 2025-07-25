var e,t=globalThis,n={},o=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,l=p||s||Function("return this")(),f=Object.prototype.toString,y=Math.max,d=Math.min,m=function(){return l.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return o;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var p=i.test(e);return p||u.test(e)?c(e.slice(2),p?2:8):a.test(e)?o:+e}n=function(e,t,n){var o,r,a,i,u,c,p=0,s=!1,l=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,p=t,i=e.apply(a,n)}function $(e){var n=e-c,o=e-p;return void 0===c||n>=t||n<0||l&&o>=a}function h(){var e,n,o,r=m();if($(r))return N(r);u=setTimeout(h,(e=r-c,n=r-p,o=t-e,l?d(o,a-n):o))}function N(e){return(u=void 0,f&&o)?b(e):(o=r=void 0,i)}function A(){var e,n=m(),a=$(n);if(o=arguments,r=this,c=n,a){if(void 0===u)return p=e=c,u=setTimeout(h,t),s?b(e):i;if(l)return u=setTimeout(h,t),b(c)}return void 0===u&&(u=setTimeout(h,t)),i}return t=v(t)||0,g(n)&&(s=!!n.leading,a=(l="maxWait"in n)?y(v(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),A.cancel=function(){void 0!==u&&clearTimeout(u),p=0,o=c=r=u=void 0},A.flush=function(){return void 0===u?i:N(m())},A};const b=document.querySelector("#input"),$=document.querySelector("#countryDiv");let h=[];async function N(e){try{let t=await fetch(`https://api.countrylayer.com/v2/name/${encodeURIComponent(e)}?access_key=a20e4d33eff6d2a836d5697c414446fb&fullText=true`);if(!t.ok)throw Error("Country not found");h=await t.json()}catch(e){console.error("Error fetching country:",e),h=[]}}function A(e,t){let n,o,r,a;for(let i=0;i<e.length;i++)if(e[i].name.toLowerCase()===t.toLowerCase()){n=e[i].name,a=(o=e[i]).independent?"Independent country":"Dependent country";let t=o.currencies?.[0]?.code||"N/A",u=o.currencies?.[0]?.symbol||"N/A",c=o.currencies?.[0]?.name||"N/A",p=o.languages?Object.values(o.languages):["N/A"];r=`
        <h2 class='countryName'>Name of the country: ${n}</h2>
        <p>Oficial name: ${o.altSpellings?.[1]||"N/A"}</p>
        <p>Area: ${o.area||"N/A"} km\xb2</p>
        <p>Capital city: ${o.capital||"No capital"}</p>
        <p>Continent: ${o.region||"N/A"}</p>
        <p>Population: ${o.population||"N/A"} people</p>
        <p>Languages: ${p}</p>
        <p>Borders: N/A</p> <!-- CountryLayer \u{43D}\u{435} \u{434}\u{430}\u{454} borders -->
        <p>Dependense: ${a}</p>
        <div>
          <p>Currency code: ${t}</p>
          <p>Currency symbol: ${u}</p>
          <p>Currency name: ${c}</p>
        </div>
        <img src='https://flagsapi.com/${o.alpha2Code}/flat/64.png' alt="Flag of ${n}">
        <p>Car side: N/A</p>
        <p>Region: ${o.region}</p>
        <p>Subregion: ${o.subregion||"N/A"}</p>
        <p>Timezones: ${o.timezones?.join(", ")||"N/A"}</p>
        <p>Status: ${o.status||"N/A"}</p>
        <p>Start of a week: N/A</p>
        <p class='maps'>${n} on a map: <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(n)}" target="_blank">Google Maps</a></p>
      `;break}return r}b.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(async e=>{let t=e.target.value.trim();t.length>0?(await N(t),void 0===A(h,t)?$.innerHTML="Country that you entered is undefined. Try again":$.innerHTML=A(h,t)):$.innerHTML="Enter a country"},500));
//# sourceMappingURL=frontend4-hw15js.9b49fd54.js.map
