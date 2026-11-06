(function(){
"use strict";
var D=window.P_REVIEW_DATA, lang=document.documentElement.lang==="en"?"en":"cs";
var KEY="most-qa-worker-p-hrbitovni-color-only-v1", state={};
var T={
cs:{source:"Vstupní fotografie",historical:"Původní stav varianty",reason:"Proč byla varianta odmítnuta",group:"Poznámka ke skupině (není přiřazena jednotlivému pokusu)",remote:"Předchozí upload podle receiptů",remoteText:"Převzatý záznam uploadu a ověření bajtů; web nyní Libuši nekontroluje.",technical:"Technické ID a SHA-256",ids:"ID předlohy",hash:"SHA-256",qa:"QA",selectTitle:"Volitelné lidské stanovisko k této kartě",keep:"Ponechat současný evidovaný stav",reopen:"Znovu otevřít lidskou revizi / kontrolu výběru",unsure:"Nevím / ponechat blokované",comment:"Komentář",saved:"Stanovisko je uloženo pouze v tomto prohlížeči.",empty:"Zatím není vybráno nové stanovisko.",noStore:"Prohlížeč nedovolil místní úložiště; použijte export JSON.",sourceHeading:"Všechny vstupní snímky",sourceNote:"Obsahuje i přeskočené blízké duplikáty a dvě rukopisné informační karty pro vizuální porovnání. Karty nejsou fotografické předlohy.",excluded:"Vynecháno z kolorování",duplicate:"Přeskočeno jako blízký duplikát",compare:"Otevřít obrázek v plné velikosti",reasonUnknown:"Původní důvod odmítnutí není doložen",reviewReq:"Stav review_required – nejde o odmítnutí",selected:"Aktuálně vybraný výstup",notSelected:"Varianta není vybraná",openReview:"Otevřená evidence / rozhodnutí",sourceConflict:"Rozpor mezi vizuálním obsahem a metadaty inventáře",disclaimer:"Volba ani komentář se neposílají na server. Export nese application_status: not_applied; případnou změnu musí následně člověk ověřit proti původní evidenci.",notice:"Není čekající produkční volba. Tato karta zaznamenává pouze nové stanovisko; sama nic neprovede.",export:"Stáhnout JSON stanoviska",clear:"Smazat místní rozpracované volby"},
en:{source:"Input photograph",historical:"Original variant status",reason:"Why this variant was rejected",group:"Group-level note (not assigned to an individual attempt)",remote:"Earlier upload according to receipts",remoteText:"Inherited upload and byte-verification record; this website does not contact Libuše.",technical:"Technical IDs and SHA-256",ids:"Source ID",hash:"SHA-256",qa:"QA",selectTitle:"Optional human note on this card",keep:"Keep the currently recorded state",reopen:"Reopen human review / source selection check",unsure:"Unsure / keep blocked",comment:"Comment",saved:"Review note is saved only in this browser.",empty:"No new review choice is selected.",noStore:"This browser blocked local storage; use the JSON export.",sourceHeading:"All input records",sourceNote:"Includes skipped near-duplicates and two handwritten information cards for visual comparison. The cards are not photographic inputs.",excluded:"Excluded from colorization",duplicate:"Skipped as a near-duplicate",compare:"Open full-size image",reasonUnknown:"Original rejection reason is not documented",reviewReq:"Status review_required — this is not a rejection",selected:"Currently selected output",notSelected:"Variant not selected",openReview:"Open evidence / decision",sourceConflict:"Mismatch between visual content and inventory metadata",disclaimer:"Choices and comments are not sent to a server. The export has application_status: not_applied; a person must verify any change against the original records.",notice:"No production choice is pending. This card records only an optional new review note; it is not applied automatically.",export:"Download review JSON",clear:"Clear local draft choices"}
}[lang];
function e(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function L(cs,en){return lang==="en"?(en||cs):cs;}
function status(s){var m={accepted_with_limitations:L("Přijat s omezením","Accepted with limitations"),rejected:L("Historicky odmítnut","Historically rejected"),review_required:L("Review required · nikoli odmítnutí","Review required · not rejected"),user_approved_uploaded_with_limitations:L("Později schválen uživatelem, nahrán s omezením","Later user-approved and uploaded with limitations"),selected_output:L("Aktuálně vybraný výstup","Currently selected output"),not_selected:L("Nevybrán","Not selected"),passed_with_limitations:L("Prošlo s omezením","Passed with limitations"),needs_metadata_reconciliation:L("Vyžaduje sladění metadat","Metadata reconciliation needed"),skipped_near_duplicate_recorded:L("Zaznamenán blízký duplikát","Near-duplicate skip recorded")};return m[s]||s;}
function englishLim(c){var m={"P-HRBITOVNI-691-1894-001":"The output is 1509 × 1042 px, compared with a 3127 × 2160 px source. Fine branches and grain are softer. It is only a provisional material reference, not a detailed texture or proof of facade boundaries.","P-HRBITOVNI-691-003":"The tree silhouette and foliage density differ from the source, and grain is softened. These details are not historical evidence; this is only a provisional color and material reference.","P-HRBITOVNI-691-1894-002":"The truck cab/body shape, paint and markings are not reliable source details; fine grain is softened. This is only a provisional color and material reference, not evidence of vehicle or facade geometry."};return m[c.case_id]||c.limitations_cs;}
function englishGroup(c){var m={"P-HRBITOVNI-691-1894-001":"The shared photograph is associated with both house numbers in the records. This handoff does not establish the exact facade boundary for each house.","P-HRBITOVNI-691-003":"The retained group note says both attempts changed the seasonal tree silhouette and softened grain. It does not identify which finding belongs to which attempt.","P-HRBITOVNI-691-1894-002":"The retained group note mentions changes to vehicle shape/markings, grain and resolution. The original rejection reason for attempt 2 is not documented."};return m[c.case_id]||c.group_note_cs;}
try{state=JSON.parse(localStorage.getItem(KEY)||"{}");}catch(_){state={};}
var PACKAGE_ROOT = new URL("../../", new URL(document.currentScript.src, document.baseURI));function image(asset,alt,caption){var imageUrl=new URL(asset,PACKAGE_ROOT).href;return "<figure class=\"image-card\"><a href=\""+e(imageUrl)+"\" target=\"_blank\" rel=\"noopener\"><img src=\""+e(imageUrl)+"\" alt=\""+e(alt)+"\" loading=\"lazy\" decoding=\"async\"></a><figcaption>"+caption+"</figcaption></figure>";}
function technical(lines){return '<details class="details"><summary>'+e(T.technical)+'</summary>'+lines.map(function(x){return '<p>'+e(x[0])+': '+e(x[1])+'</p>';}).join("")+'</details>';}
function form(id,choices){
var saved=state[id]||{};
var radios=choices.map(function(c){return '<label class="choice"><input type="radio" name="'+e(id)+'" value="'+e(c.value)+'" '+(saved.decision===c.value?"checked":"")+'><span>'+e(c.label)+(c.note?'<small>'+e(c.note)+'</small>':"")+'</span></label>';}).join("");
return '<form class="review-form" data-review-id="'+e(id)+'"><fieldset><legend>'+e(T.selectTitle)+'</legend><p class="small muted">'+e(T.notice)+'</p><div class="choices">'+radios+'</div><label class="small" for="comment-'+e(id)+'">'+e(T.comment)+'</label><textarea id="comment-'+e(id)+'" name="comment" maxlength="4000">'+e(saved.comment||"")+'</textarea><p class="saved" aria-live="polite">'+e(saved.decision||saved.comment?T.saved:T.empty)+'</p></fieldset></form>';
}
function renderVariant(c,v){
var rejected=v.historical_status==="rejected",reason="";
if(rejected){reason='<p class="finding reason"><strong>'+e(T.reason)+':</strong> '+e(v.rejection_reason||T.reasonUnknown)+'</p>';}
else if(v.historical_status==="review_required"){reason='<p class="finding">'+e(T.reviewReq)+'</p>';}
var finding=v.finding_cs||"";
if(lang==="en"){
if(c.case_id==="P-HRBITOVNI-691-1894-001"&&v.variant_id==="attempt02")finding="Recorded rejection: 1509 × 1042 px versus the 3127 × 2160 px source; softened grain and fine branches persisted after one correction. Inherited finding, not a new review.";
else if(c.case_id==="P-HRBITOVNI-691-003"&&v.variant_id==="attempt02")finding="Later inherited QA limitation: tree silhouette/foliage density changed and grain softened. This is not the original rejection reason for this variant.";
else if(c.case_id==="P-HRBITOVNI-691-1894-002"&&v.variant_id==="attempt02")finding="Later inherited QA limitation: vehicle details and fine grain are not reliable source evidence. This is not the original rejection reason for this variant.";
else if(c.case_id==="P-HRBITOVNI-691-003"&&v.variant_id==="attempt01")finding="The group note covers both attempts and cannot be assigned to this variant alone.";
else if(c.case_id==="P-HRBITOVNI-691-1894-002"&&v.variant_id==="attempt01")finding="Inherited status review_required; it has not been relabeled as rejected.";
else if(c.case_id==="P-HRBITOVNI-691-1894-001"&&v.variant_id==="attempt01")finding="Inherited QA record: main composition and objects were preserved; resolution, fine grain and the smallest details are softer.";
}
var current=v.current_status==="selected_output"||v.current_status==="user_approved_uploaded_with_limitations";
var caption='<strong>'+e(v.label)+'</strong><br>'+e(T.historical)+': '+e(status(v.historical_status))+'<br><span class="status '+(current?"good":"")+'">'+e(current?T.selected:T.notSelected)+'</span>'+reason+'<p class="small">'+e(finding)+'</p>'+technical([["Variant ID",v.variant_id],[T.hash,v.sha256],["reason_status",v.reason_status]]);
return image(v.asset,v.label+" · "+c.source_file,caption);
}
function renderCase(c){
var current=c.variants.find(function(v){return v.variant_id===c.selected_variant_id;});
var variants=c.variants.map(function(v){return renderVariant(c,v);}).join("");
var group=c.group_note_cs?'<p class="finding"><strong>'+e(T.group)+':</strong> '+e(lang==="en"?englishGroup(c):c.group_note_cs)+'</p>':"";
var lim=lang==="en"?englishLim(c):c.limitations_cs;
var attachments=c.remote.attachments.map(function(a){return e(a.cp)+" · "+e(a.photo_id);}).join("<br>");
var choices=[{value:"keep_current",label:T.keep,note:L("Evidovaný výběr: ","Recorded selection: ")+current.variant_id},{value:"reopen_review",label:T.reopen},{value:"unsure_blocked",label:T.unsure}];
var sourceFig=image(c.source_asset,T.source+" · "+c.source_file,"<strong>"+e(T.source)+"</strong><br>"+e(c.source_file)+technical([[T.ids,c.source_ids.join(", ")],[T.hash,c.source_sha256]]));
var remote='<div class="remote"><strong>'+e(T.remote)+' · SHA-256 verified</strong><p>'+e(T.remoteText)+'</p><p class="technical">'+e(T.hash)+': '+e(c.remote.remote_sha256)+'<br>'+attachments+'</p></div>';
var head='<div class="case-head"><div><p class="eyebrow">'+e(c.case_id)+'</p><h3>'+e(L(c.title_cs,c.title_en))+'</h3></div><span class="status good">'+e(status(c.qa_status))+'</span></div>';
var cps=L("čp. ","house nos. ")+c.covered_cps.join(", ");var decision=c.baseline_decision;if(lang==="en"){decision=c.case_id==="P-HRBITOVNI-691-1894-001"?"Attempt 1 remains accepted with limitations; attempt 2 was rejected with a recorded variant-specific finding.":"Attempt 2 was explicitly approved by the user and uploaded; the earlier rejected label remains in the history.";}
return '<article class="case" id="'+e(c.case_id)+'">'+head+'<p><strong>'+e(T.source)+':</strong> '+e(c.source_file)+' · '+e(cps)+'</p><p>'+e(decision)+'</p>'+group+'<p class="finding">'+e(T.qa)+': '+e(lim)+'</p><div class="images">'+sourceFig+variants+'</div>'+remote+form(c.case_id,choices)+'<details class="details"><summary>'+e(T.technical)+'</summary><p>Case ID: '+e(c.case_id)+'</p><p>'+e(T.ids)+': '+e(c.source_ids.join(", "))+'</p><p>mapping_review_required: '+e(c.mapping_review_required)+'</p><p>material_status: '+e(c.material_status)+'</p><p>baseline_version: '+e(D.baseline_version)+'</p></details></article>';
}
function sourceById(id){
var a=[];
D.cases.forEach(function(c){c.source_ids.forEach(function(sid){a.push({source_id:sid,source_file:c.source_file,asset:c.source_asset,sha256:c.source_sha256});});});
D.other_sources.forEach(function(s){a.push({source_id:s.source_id,source_file:s.source_file,asset:s.asset,sha256:s.sha256});});
return a.find(function(s){return s.source_id===id;});
}
function renderOpen(r){
var pics=r.source_ids.map(sourceById).filter(Boolean).map(function(s){return image(s.asset,s.source_file+" · "+s.source_id,"<strong>"+e(s.source_file)+"</strong><br><span class=\"technical\">"+e(s.source_id)+" · "+e(s.sha256)+"</span>");}).join("");
var choices=r.choices_cs.map(function(c){
var lbl=c.label;
if(lang==="en"){var tr={record_cards_after_source_check:"Treat these as information cards; update metadata only after checking the source record.",keep_mismatch_blocked:"Keep the mismatch open until the source record is verified.",unsure_blocked:"Unsure / keep blocked.",keep_skipped:"Keep them skipped as near-duplicates.",reopen_source_selection_only:"Reopen source selection only, without generating a new image."};lbl=tr[c.value]||lbl;}
return {value:c.value,label:lbl};
});
var finding=r.finding_cs;
if(lang==="en")finding=r.case_id.indexOf("INFO-CARD")>=0?"Visual inspection shows two handwritten cards, while the inventory classifies them as PHOTO,BW and says has_archive_card=false. They were not colorized. The inventory has not been changed.":"The existing review records the same direction and geometry as cp_691_003.jpg. This page does not authorize another generation; source selection alone could be reopened.";
return '<article class="open-review" id="'+e(r.case_id)+'"><div class="case-head"><div><p class="eyebrow">'+e(T.openReview)+' · '+e(r.case_id)+'</p><h3>'+e(L(r.title_cs,r.title_en))+'</h3></div><span class="status warn">'+e(r.baseline_status)+'</span></div><p>'+e(finding)+'</p><div class="images">'+pics+'</div>'+form(r.case_id,choices)+'</article>';
}
function renderOther(s){
var duplicate=s.disposition==="skipped_near_duplicate",title=duplicate?T.duplicate:T.excluded;
var reason=s.reason_cs;
if(lang==="en")reason=duplicate?"The source review recorded the same direction and geometry as cp_691_003.jpg.":"Visually identified as a handwritten note card, not a photographic input. The inventory metadata conflicts with this observation.";
var mismatch=s.visual_observation?'<p class="finding reason"><strong>'+e(T.sourceConflict)+':</strong> '+e(lang==="en"?"The inventory says PHOTO,BW and has_archive_card=false. This visual classification has not been applied to the source inventory.":"Inventář uvádí PHOTO,BW a has_archive_card=false. Vizuální klasifikace nebyla zapsána do zdrojového inventáře.")+'</p>':"";
var cap='<strong>'+e(s.source_file)+'</strong><br>'+e(T.compare);
return '<article class="panel"><div class="case-head"><h3>'+e(s.source_file)+'</h3><span class="status warn">'+e(title)+'</span></div>'+image(s.asset,s.source_file,cap)+'<p>'+e(reason)+'</p>'+mismatch+technical([[T.ids,s.source_id],[T.hash,s.sha256],["disposition",s.disposition]])+'</article>';
}
function render(){
document.getElementById("cases").innerHTML=D.cases.map(renderCase).join("");
document.getElementById("open-reviews").innerHTML=D.open_reviews.map(renderOpen).join("");
document.getElementById("other-sources").innerHTML=D.other_sources.map(renderOther).join("");
document.getElementById("case-count").textContent=String(D.overall.unique_photo_groups);
document.getElementById("attempt-count").textContent=String(D.overall.image_attempts);
document.getElementById("attachment-count").textContent=String(D.overall.remote_verified_associations);
document.querySelectorAll(".review-form").forEach(function(f){
var id=f.getAttribute("data-review-id"),saved=f.querySelector(".saved");
f.addEventListener("change",function(){save(f,id,saved);});
f.querySelector("textarea").addEventListener("input",function(){save(f,id,saved);});
});
}
function save(f,id,saved){
var checked=f.querySelector('input[type="radio"]:checked'),comment=f.querySelector("textarea").value;
state[id]={decision:checked?checked.value:null,comment:comment,recorded_at:(checked||comment)?new Date().toISOString():null};
try{localStorage.setItem(KEY,JSON.stringify(state));saved.textContent=T.saved;}catch(_){saved.textContent=T.noStore;}
}
document.getElementById("export-json").addEventListener("click",function(){
var decisions=D.cases.concat(D.open_reviews).map(function(c){
var s=state[c.case_id]||{},base=D.cases.find(function(x){return x.case_id===c.case_id;});
return {case_id:c.case_id,source_ids:c.source_ids,source_sha256:base?base.source_sha256:c.source_sha256,baseline_version:D.baseline_version,prior_selected_variant_id:base?base.selected_variant_id:null,prior_selected_variant_sha256:base?base.selected_variant_sha256:null,variants:base?base.variants.map(function(v){return {variant_id:v.variant_id,sha256:v.sha256,historical_status:v.historical_status,current_status:v.current_status};}):[],decision:s.decision||null,comment:s.comment||"",recorded_at:s.recorded_at||null,application_status:"not_applied"};
});
var payload={schema_version:"1.0",worker:D.worker,street:D.street,baseline_version:D.baseline_version,exported_at:new Date().toISOString(),application_status:"not_applied",decisions:decisions,notice:T.disclaimer};
var blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"}),a=document.createElement("a");
a.href=URL.createObjectURL(blob);a.download="P-HRBITOVNI-review-v1.json";a.click();setTimeout(function(){URL.revokeObjectURL(a.href);},1000);
});
document.getElementById("clear-local").addEventListener("click",function(){try{localStorage.removeItem(KEY);}catch(_){}state={};render();});
render();
})();