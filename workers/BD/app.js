(() => {
  "use strict";
  const data = window.MOST_QA_DATA;
  const key = data.localStorageKey;
  const root = document.querySelector("#cases");
  const status = document.querySelector("#status");
  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  const escape = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  data.cases.forEach(c => {
    const card = document.createElement("article"); card.className = "card";
    card.innerHTML = `<h3>${escape(c.case_id)}</h3><span class="pill">${escape(c.status)}</span><p class="meta">source ID: ${escape(c.source_id)}<br>source SHA-256: ${escape(c.source_sha256)}<br>variant: ${escape(c.variant_id)} / ${escape(c.variant_sha256)}<br>accepted SHA-256: ${escape(c.accepted_sha256)}<br>remote receipt: ${escape(c.remote_photo_id)} / hash verified</p><div class="images"><figure><img src="${c.assets.original}" alt="Original ${escape(c.source_filename)}"><figcaption>Original</figcaption></figure><figure><img src="${c.assets.variant}" alt="Retained first variant"><figcaption>Retained attempt 01</figcaption></figure><figure><img src="${c.assets.accepted}" alt="Accepted COLOR_ONLY output"><figcaption>Accepted COLOR_ONLY</figcaption></figure></div><p>${escape(c.materials_status)}. No open source-level question.</p><label>Kontrolní poznámka / review note<textarea data-case="${escape(c.case_id)}" placeholder="Optional local note; not applied.">${escape(saved[c.case_id] || "")}</textarea></label>`;
    root.appendChild(card);
  });
  const collect = () => Object.fromEntries([...document.querySelectorAll("textarea[data-case]")].map(t => [t.dataset.case, t.value]));
  document.querySelector("#save").addEventListener("click", () => { localStorage.setItem(key, JSON.stringify(collect())); status.textContent = "Lokálně uloženo. / Saved locally."; });
  document.querySelector("#clear").addEventListener("click", () => { localStorage.removeItem(key); document.querySelectorAll("textarea").forEach(t => t.value = ""); status.textContent = "Lokální poznámky odstraněny. / Local notes cleared."; });
  document.querySelector("#export").addEventListener("click", () => { const notes = collect(); const payload = {schema_version:data.schema_version,worker:data.worker,street:data.street,case_set_version:data.case_set_version,application_status:"not_applied",exported_at:new Date().toISOString(),cases:data.cases.map(c => ({case_id:c.case_id,case_version:c.case_version,source_id:c.source_id,source_sha256:c.source_sha256,variant_id:c.variant_id,variant_sha256:c.variant_sha256,accepted_sha256:c.accepted_sha256,review_note:notes[c.case_id] || "",application_status:"not_applied"}))}; const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob);a.download="most-qa-BD-pod-kastany-decisions.json";a.click();URL.revokeObjectURL(a.href);status.textContent="Export připraven; nic nebylo aplikováno. / Export created; nothing applied."; });
})();