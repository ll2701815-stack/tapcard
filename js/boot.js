(()=>{let th=ls('tc_theme');if(!th)th=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
 document.documentElement.classList.toggle('dark',th==='dark');$('#theme').textContent=th==='dark'?'🌙':'☀️';
 const l=ls('tc_lang');lang(L[l]?l:'ru');
 const h=location.hash.slice(1);if(TB.some(x=>x[0]===h))tab(h);})();
