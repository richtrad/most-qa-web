(function () {
  const d = window.HANDOFF_DATA;
  const en = document.documentElement.lang.startsWith('en');
  const root = document.querySelector('[data-app]');
  const key = `most-qa:${d.role}:${d.pilot_id}:${d.schema_version}`;
  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  const t = en ? {
    source: 'Source cases', holds: 'Open mapping holds', save: 'Save locally', export: 'Download decision JSON',
    unsure: 'Unsure / keep blocked', review: 'Request later identity review',
    reason: 'Recorded mapping reason (Czech source evidence)',
    note: 'Choices remain local and are not applied to QA, generation, upload or mapping.'
  } : {
    source: 'Zdrojové případy', holds: 'Otevřené mapping blokace', save: 'Uložit lokálně', export: 'Stáhnout JSON rozhodnutí',
    unsure: 'Nevím / ponechat blokované', review: 'Požádat o pozdější revizi identity',
    reason: 'Dochovaný důvod blokace',
    note: 'Volby zůstávají lokální a samy nemění QA, generování, upload ani mapování.'
  };
  const esc = x => String(x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const holds = d.reviews.map((r, i) => ({
    case_id: `AR-NP-HOLD-${String(i + 1).padStart(2, '0')}`,
    case_version: 1,
    source_id: r[0], filename: r[1], source_sha256: r[2], mapping_reason: r[3],
    original: `assets/originals/${r[0]}__${r[1]}`,
    variant_id: null, variant_sha256: null, rejection_reason: null,
    reason_status: 'not_rejected', asset_status: 'staged_sha256_verified',
    question: en
      ? 'Is there independent evidence that safely maps this exact source to a house or facade?'
      : 'Existuje nezávislý doklad, který tento přesný zdroj bezpečně mapuje k domu nebo fasádě?'
  }));
  function rec(c) {
    const v = saved[c.case_id] || {};
    return {
      schema_version: d.schema_version, data_version: d.data_version, role: d.role, street: d.street, pilot_id: d.pilot_id,
      case_id: c.case_id, case_version: c.case_version, source_id: c.source_id, filename: c.filename, source_sha256: c.source_sha256,
      variant_id: c.variant_id, variant_sha256: c.variant_sha256,
      decision: v.decision || 'keep_blocked', comment: v.comment || '', application_status: 'not_applied', exported_at: new Date().toISOString()
    };
  }
  function form(c, extra) {
    return `<article class="case"><h3>${esc(c.filename)}</h3><p class="meta">case ${esc(c.case_id)} v${c.case_version} · source ${esc(c.source_id)} · variant ${c.variant_id === null ? 'null (no variant created)' : esc(c.variant_id)}</p>${extra}<form class="form" data-case="${c.case_id}"><label>${esc(c.question || '')}<select name="decision"><option value="keep_blocked">${t.unsure}</option><option value="request_identity_review">${t.review}</option></select></label><label>${en ? 'Comment' : 'Komentář'}<textarea name="comment"></textarea></label><button>${t.save}</button><button type="button" data-export="${c.case_id}">${t.export}</button><span class="status">application_status: not_applied</span></form></article>`;
  }
  const accepted = d.cases.map(c => form(c, `<div class="images"><figure><img src="${c.original}" alt="${esc(c.filename)} original"><figcaption>Original SHA-256: ${c.source_sha256}</figcaption></figure><figure><img src="${c.variant}" alt="${esc(c.filename)} COLOR_ONLY variant"><figcaption>Variant SHA-256: ${c.variant_sha256}</figcaption></figure></div><p><b>QA:</b> ${esc(c.qa)}<br><b>Remote:</b> ${esc(c.remote)}<br><b>Resolution:</b> ${esc(c.dimensions)}</p>`)).join('');
  const blocked = holds.map(c => form(c, `<p><b>${t.reason}:</b> ${esc(c.mapping_reason)}</p><div class="images"><figure><img src="${c.original}" alt="${esc(c.filename)} original mapping source"><figcaption>Original SHA-256: ${c.source_sha256} · locally staged and SHA-256 verified</figcaption></figure></div><p class="meta">variant_id: null · variant_sha256: null · rejection_reason: null · mapping hold, not rejected image.</p>`)).join('');
  root.innerHTML = `<p class="notice">${t.note}</p><h2>${t.source}</h2>${accepted}<h2>${t.holds}</h2><p>${en ? 'All fourteen records have their own stable case, verified local source, local decision and export.' : 'Všech čtrnáct záznamů má vlastní stabilní case, ověřený místní zdroj, lokální volbu a export.'}</p>${blocked}`;
  [...d.cases, ...holds].forEach(c => {
    const f = root.querySelector(`[data-case="${c.case_id}"]`), v = saved[c.case_id] || {};
    f.decision.value = v.decision || 'keep_blocked';
    f.comment.value = v.comment || '';
    f.addEventListener('submit', e => { e.preventDefault(); saved[c.case_id] = {decision: f.decision.value, comment: f.comment.value}; localStorage.setItem(key, JSON.stringify(saved)); f.querySelector('.status').textContent = 'saved locally · application_status: not_applied'; });
    f.querySelector('[data-export]').onclick = () => { const b = new Blob([JSON.stringify(rec(c), null, 2)], {type:'application/json'}), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = `${c.case_id}.decision.json`; a.click(); URL.revokeObjectURL(a.href); };
  });
  window.MostQaExportRecord = rec;
  window.MostQaHoldCases = holds;
}());
