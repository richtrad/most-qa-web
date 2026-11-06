(() => {
  'use strict';
  const D = window.HANDOFF_DATA;
  const en = document.documentElement.lang === 'en';
  const root = en ? '../' : '';
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>\"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const words = en ? {keep:'Keep blocked', unsure:'Unsure', comment:'Comment', empty:'No decision', export:'Export decision draft', clear:'Clear local choices'} : {keep:'Ponechat blokované', unsure:'Nejisté', comment:'Komentář', empty:'Bez rozhodnutí', export:'Export návrh rozhodnutí', clear:'Vymazat místní volby'};
  const key = 'most-qa/private/v2/AH/AH-HOROVA-REV2';
  let state = JSON.parse(localStorage.getItem(key) || '{}');
  const save = () => localStorage.setItem(key, JSON.stringify(state));
  const asset = (v) => root + v;
  const img = (src, alt) => `<button class="image" data-image="${esc(asset(src))}" data-alt="${esc(alt)}"><img src="${esc(asset(src))}" alt="${esc(alt)}" loading="lazy"></button>`;
  function choice(c) {
    const cur = state[c.case_id] || {};
    return `<div class="choice"><label>${words.keep}<input type="radio" name="${esc(c.case_id)}" value="keep" ${cur.decision==='keep'?'checked':''}></label><label>${words.unsure}<input type="radio" name="${esc(c.case_id)}" value="unsure" ${cur.decision==='unsure'?'checked':''}></label><label>${words.comment}<input data-comment="${esc(c.case_id)}" value="${esc(cur.comment || '')}" placeholder="${words.empty}"></label></div>`;
  }
  function variant(v) {
    return `<article class="variant ${esc(v.status)}"><h4>${esc(v.id)} · ${esc(en?v.label_en:v.label_cs)}</h4>${img(v.asset,v.id)}<p>${esc(en?v.reason_en:v.reason_cs)}</p><code>${esc(v.sha256)}</code></article>`;
  }
  function card(c) {
    const a = c.attempts.map(variant).join('');
    return `<article class="case" id="${esc(c.case_id)}"><div><h3>${esc(c.case_id)}</h3><p><strong>${esc(c.source)}</strong></p>${img(c.source_asset,c.source)}<code>${esc(c.source_sha)}</code></div><div><p>${esc(en?c.identity_en:c.identity_cs)}</p><p>${esc(en?c.issue_en:c.issue_cs)}</p><section class="variants">${a || '<p>—</p>'}</section>${choice(c)}</div></article>`;
  }
  function accepted(x) {
    return `<article class="accepted"><h3>${esc(x.source)} → ${esc(x.output)}</h3><div>${img(x.source_asset,x.source)}${img(x.output_asset,x.output)}</div><p>${esc(x.house)} · ${esc(x.kind)}</p><code>${esc(x.source_sha)}<br>${esc(x.output_sha)}</code></article>`;
  }
  $('#summary').innerHTML = `<strong>25</strong><span>${en?'photo units':'fotografických jednotek'}</span><strong>8</strong><span>${en?'accepted remote references':'přijatých vzdálených referencí'}</span><strong>11</strong><span>${en?'mapping holds':'mapovacích blokací'}</span><strong>6</strong><span>${en?'QA / identity holds':'QA / identitních blokací'}</span>`;
  $('#accepted').innerHTML = D.accepted.map(accepted).join('');
  $('#cases').innerHTML = D.mapping_cases.concat(D.cases).map(card).join('');
  $('#variants').innerHTML = D.variants.map(variant).join('');
  $('#progress').textContent = en ? 'Local, private draft only. Decisions remain in this browser until exported.' : 'Pouze místní soukromý návrh. Rozhodnutí zůstávají v tomto prohlížeči do exportu.';
  document.addEventListener('change', (e) => { if (e.target.matches('input[type=radio]')) { state[e.target.name] = {...(state[e.target.name]||{}), decision:e.target.value}; save(); } });
  document.addEventListener('input', (e) => { if (e.target.dataset.comment) { const id=e.target.dataset.comment; state[id]={...(state[id]||{}),comment:e.target.value}; save(); } });
  document.addEventListener('click', (e) => {
    const b=e.target.closest('[data-image]'); if (b) { $('#modal img').src=b.dataset.image; $('#modal img').alt=b.dataset.alt; $('#modal').classList.add('open'); }
    if (e.target.matches('[data-close],#close')) $('#modal').classList.remove('open');
  });
  $('#clear').addEventListener('click', () => { localStorage.removeItem(key); state={}; location.reload(); });
  $('#export').addEventListener('click', () => {
    const all=D.mapping_cases.concat(D.cases).map((c) => { const s=state[c.case_id]||{}; return {case_id:c.case_id,case_version:c.case_version,source_filename:c.source,source_sha256:c.source_sha,source_id:c.source_id,source_identity_status:c.source_identity_status,source_id_candidates:c.source_id_candidates,variants:c.attempts.map(x=>({variant_id:x.id,variant_version:x.variant_version,variant_sha256:x.sha256})),decision:s.decision||'undecided',comment:s.comment||''}; });
    const payload={schema:D.schema_version,data_version:D.data_version,application_status:'not_applied',worker:D.worker,street:D.street,batch:D.base_version,exported_at:new Date().toISOString(),decisions:all};
    const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'})); const a=document.createElement('a'); a.href=url; a.download='AH_Horova_private_qa_decisions.json'; a.click(); URL.revokeObjectURL(url);
  });
})();
