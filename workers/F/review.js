const schemaVersion = 1;
const key = "most:handoff:F:gorkeho:decision-v1";
const caseMeta = {
  "F-GORKEHO-CP916-001": {source_id:"b636d357-5555-467e-b7a2-58338e33e9c9",source_sha256:"5830CDF340D1E833FD1A050DB77D912CB7EB99B5A03B7F0F6A8D8C5D2B14271B",version:"2026-10-21-a"},
  "F-GORKEHO-CP926-998-1075-001": {source_id:"ef0665d2-738a-4ea8-be9a-52457e20030e",source_sha256:"167EF0C6C6B567CFF72795D06AE426AE89403C20FF3FB198795FBD8E8A02BD12",version:"2026-10-21-a"}
};
const cases = Array.from(document.querySelectorAll("[data-case]"));
const status = document.getElementById("save-status");
function read() { try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch { return {}; } }
function collect() {
  const old = read();
  const items = cases.map(el => {
    const id = el.dataset.case, radio = el.querySelector("input[type=radio]:checked"), comment = el.querySelector("textarea").value;
    const prev = old[id] || {};
    return {case_id:id,source_id:caseMeta[id].source_id,source_sha256:caseMeta[id].source_sha256,case_version:caseMeta[id].version,decision:radio?.value || "pending",comment,updated_at:(radio || comment) ? new Date().toISOString() : (prev.updated_at || null),application_status:"not_applied"};
  });
  return Object.fromEntries(items.map(item => [item.case_id,item]));
}
function save() {
  try { localStorage.setItem(key, JSON.stringify(collect())); status.textContent = document.documentElement.classList.contains("en") ? "Saved in this browser." : "Uloženo v tomto prohlížeči."; }
  catch { status.textContent = document.documentElement.classList.contains("en") ? "Browser storage is unavailable; export before leaving." : "Úložiště prohlížeče není dostupné; před zavřením exportujte JSON."; }
}
const saved = read();
cases.forEach(el => {
  const item = saved[el.dataset.case];
  if (item) {
    const radio = el.querySelector('input[type=radio][value="' + CSS.escape(item.decision) + '"]');
    if (radio) radio.checked = true;
    el.querySelector("textarea").value = item.comment || "";
  }
  el.addEventListener("change", save);
  el.addEventListener("input", save);
});
document.getElementById("export").addEventListener("click", () => {
  const payload = {schema_version:schemaVersion,worker:"F",street:"Gorkého",exported_at:new Date().toISOString(),application_status:"not_applied",storage_key:key,cases:Object.values(collect())};
  const blob = new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url = URL.createObjectURL(blob), a = document.createElement("a");
  a.href=url; a.download="Gorkeho_F_decisions_v1.json"; a.click(); URL.revokeObjectURL(url);
});
document.getElementById("lang").addEventListener("click", e => {
  document.documentElement.classList.toggle("en");
  const english=document.documentElement.classList.contains("en");
  document.documentElement.lang=english?"en":"cs"; e.currentTarget.textContent=english?"CZ":"EN";
});

