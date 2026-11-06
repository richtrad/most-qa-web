(function(){
const D=window.MOST_QA_DATA, lang=document.documentElement.lang==='en'?'en':'cs';
const txt=(cs,en)=>lang==='en'?en:cs;
const esc=s=>String(s==null?'':s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])).replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const base=location.pathname.indexOf('/en/')>=0?'../':'./';
function key(c){return 'most-qa:v1:U:Husovo-911:'+c.case_id}
function load(c){try{return JSON.parse(localStorage.getItem(key(c))||'{}')}catch(e){return {}}}
function save(c,v){v.updated_at=new Date().toISOString();localStorage.setItem(key(c),JSON.stringify(v));}
function renderCases(){
const root=document.getElementById('cases');
root.innerHTML=D.decision_cases.map(c=>{
const v=load(c), source=D.source_inventory.find(x=>x.source_id===c.source_id);
const choice=c.choices.map(o=>'<label class=\"choice\"><input type=\"radio\" name=\"choice-'+esc(c.case_id)+'\" value=\"'+esc(o.value)+'\" '+(v.decision===o.value?'checked':'')+'><span>'+esc(txt(o.cs,o.en))+'</span></label>').join('');
return '<article class=\"decision\" data-case=\"'+esc(c.case_id)+'\"><div class=\"decision-head\"><h3>'+esc(c.case_id)+' · '+esc(source.filename)+'</h3><span class=\"status\">'+esc(v.decision?txt('uloženo v tomto prohlížeči','saved in this browser'):txt('čeká na rozhodnutí','awaiting decision'))+'</span></div><p>'+esc(txt(c.question_cs,c.question_en))+'</p><img class=\"hero-image\" src=\"'+base+esc(source.asset)+'\" alt=\"'+esc(source.filename)+'\"><p class=\"evidence\">'+esc(txt(c.evidence_cs,c.evidence_en))+'</p><div class=\"choices\">'+choice+'</div><label>'+esc(txt('Komentář (volitelný)','Comment (optional)'))+'<textarea class=\"comment\" placeholder=\"'+esc(txt('Popište, co na snímku podporuje nebo zpochybňuje přiřazení…','Describe what supports or challenges the mapping…'))+'\">'+esc(v.comment||'')+'</textarea></label><p class=\"meta\">source_id '+esc(c.source_id)+' · SHA-256 '+esc(c.source_sha256)+'<br>variant_id '+esc(c.variant_id)+' · default case version '+esc(c.default_case_version)+'</p></article>';
}).join('');
root.querySelectorAll('.decision').forEach(el=>{
const c=D.decision_cases.find(x=>x.case_id===el.dataset.case), radios=el.querySelectorAll('input[type=radio]'), area=el.querySelector('textarea');
radios.forEach(r=>r.addEventListener('change',()=>{const v=load(c);v.decision=r.value;save(c,v);renderCases()}));
area.addEventListener('input',()=>{const v=load(c);v.comment=area.value;save(c,v)});
});
}
function renderInventory(kind,id){
const items=D.source_inventory.filter(x=>x.kind===kind);
document.getElementById(id).innerHTML=items.map(x=>'<article class=\"source-card\"><h3>'+esc(x.filename)+'</h3><img src=\"'+base+esc(x.asset)+'\" alt=\"'+esc(kind==='plan'?'Building plan':'Archival photograph')+' '+esc(x.filename)+'\"><p><strong>'+esc(x.status==='candidate_review'?txt('Navrženo k revizi','Proposed for review'):x.status==='not_selected'?txt('Nevybráno','Not selected'):txt('Plán, ne fotografie','Plan, not a photograph'))+'</strong></p><p>'+esc(x.reason)+'</p><p class=\"meta\">source_id '+esc(x.source_id)+' · variant_id '+esc(x.variant_id)+' · SHA-256 '+esc(x.sha256)+'<br>'+esc(x.bytes)+' bytes · reason_status '+esc(x.reason_status)+'</p></article>').join('');
}
renderCases(); renderInventory('photo','photos'); renderInventory('plan','plans');
document.getElementById('export').addEventListener('click',()=>{
const out={schema_version:D.schema_version,worker:D.worker,street:D.street,exported_at:new Date().toISOString(),application_status:'not_applied',default_evidence_version_sha256:D.source_evidence_version_sha256,decisions:D.decision_cases.map(c=>{const v=load(c);return {case_id:c.case_id,source_id:c.source_id,source_sha256:c.source_sha256,variant_id:c.variant_id,default_case_version:c.default_case_version,decision:v.decision||null,comment:v.comment||'',decision_updated_at:v.updated_at||null,application_status:'not_applied'}})};
const blob=new Blob([JSON.stringify(out,null,2)],{type:'application/json'}), url=URL.createObjectURL(blob), a=document.createElement('a');a.href=url;a.download='u-husovo-namesti-decisions-v1.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
})();
