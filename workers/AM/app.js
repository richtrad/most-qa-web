
(()=>{
const D=window.HANDOFF_DATA,C=window.ReviewCore,en=document.documentElement.lang==='en',P=document.body.dataset.root;
document.querySelectorAll('[data-asset]').forEach(img=>{img.src=C.asset(P,img.dataset.asset)});
const store={getItem:k=>window.localStorage.getItem(k),setItem:(k,v)=>window.localStorage.setItem(k,v)};
document.querySelectorAll('[data-case]').forEach(el=>{
const c=D.cases.find(x=>x.case_id===el.dataset.case),a=C.load(store,D,c);
el.querySelector('textarea').value=a.comment||'';
el.querySelector('[data-variant]').value=a.variant_id||'';
el.querySelectorAll('input[type=radio]').forEach(r=>r.checked=r.value===a.decision);
if(a.time)el.querySelector('.save').textContent=en?'Saved in this browser':'Uloženo v tomto prohlížeči';
function persist(){const v={decision:el.querySelector('input:checked')?.value||null,variant_id:el.querySelector('[data-variant]').value||null,comment:el.querySelector('textarea').value,time:new Date().toISOString()};
try{C.save(store,D,c,v);el.querySelector('.save').textContent=en?'Saved only in this browser':'Uloženo pouze v tomto prohlížeči'}catch{el.querySelector('.save').textContent=en?'Saving failed. Copy your comment before leaving.':'Uložení selhalo. Zkopírujte komentář před opuštěním stránky.'}}
el.querySelectorAll('input,select').forEach(x=>x.addEventListener('change',persist));el.querySelector('textarea').addEventListener('input',persist);
});
document.getElementById('export')?.addEventListener('click',()=>{const out=C.export(D,store),blob=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='manesova-AM-decisions.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)});
document.getElementById('filter')?.addEventListener('change',e=>document.querySelectorAll('[data-case]').forEach(el=>el.hidden=e.target.value!=='all'&&el.dataset.status!==e.target.value));
})();
