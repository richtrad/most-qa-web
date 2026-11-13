(() => {
  const data = window.JSVATKA_REVIEW;
  const lang = document.documentElement.lang === "en" ? "en" : "cs";
  const key = "most-j-svatka-review-v1";
  const escape = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[c]));
  const text = {
    cs: { progress: "posouzeno", export: "Stáhnout moje rozhodnutí", clear: "Vymazat uložené volby", note: "Poznámka", source: "Zdroj", hash: "SHA-256", saved: "uloženo v tomto prohlížeči", exportName: "most-j-svatka-rozhodnuti.json", modalClose: "Zavřít ×" },
    en: { progress: "reviewed", export: "Download my decisions", clear: "Clear saved choices", note: "Note", source: "Source", hash: "SHA-256", saved: "saved in this browser", exportName: "most-j-svatka-decisions.json", modalClose: "Close ×" }
  }[lang];
  const load = () => { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } };
  const save = (value) => localStorage.setItem(key, JSON.stringify(value));
  let values = load();
  const cards = document.querySelector("#decision-cards");
  const modal = document.querySelector("#modal");
  const modalImg = modal.querySelector("img");
  const progress = () => {
    const count = data.decisions.filter(item => values[item.id]?.choice).length;
    document.querySelector("#progress").textContent = `${count} / ${data.decisions.length} ${text.progress}`;
    document.querySelector("#progress-bar").style.width = `${(count / data.decisions.length) * 100}%`;
  };
  const render = () => {
    cards.replaceChildren();
    data.decisions.forEach(item => {
      const card = document.createElement("article"); card.className = "decision";
      const imagePath = (item.image || "").startsWith("/") ? item.image : lang === "en" ? `../${item.image}` : item.image;
      const evidence = item.kind === "photo"
        ? `<figure><img src="${imagePath}" alt="${item.filename}"><figcaption><code>${item.filename}</code><br><span>${text.source}: <code>${item.source_id}</code></span><br><span>${text.hash}: <code>${item.sha256}</code></span></figcaption></figure>`
        : `<p class="evidence"><strong>${text.source}:</strong> <code>${item.source}</code></p>`;
      card.innerHTML = `<div class="decision-head"><div><h3>${item.title[lang]}</h3><p>${item.summary[lang]}</p></div><span class="badge">${item.kind === "photo" ? "PHOTO" : "STATUS"}</span></div>${evidence}<fieldset><legend class="sr-only">${item.title[lang]}</legend>${item.options.map(option => `<label class="choice"><input type="radio" name="${item.id}" value="${option.value}" ${values[item.id]?.choice === option.value ? "checked" : ""}><span>${option.label[lang]}</span></label>`).join("")}</fieldset><label class="note-label">${text.note}<textarea data-note="${item.id}" placeholder="${text.saved}">${escape(values[item.id]?.note || "")}</textarea></label>`;
      card.querySelectorAll("input").forEach(input => input.addEventListener("change", event => { values[item.id] = { ...(values[item.id] || {}), choice: event.target.value }; save(values); progress(); }));
      card.querySelector("textarea").addEventListener("input", event => { values[item.id] = { ...(values[item.id] || {}), note: event.target.value }; save(values); });
      const image = card.querySelector("img");
      if (image) image.addEventListener("click", () => { modalImg.src = image.src; modalImg.alt = image.alt; modal.classList.add("open"); });
      cards.append(card);
    });
    progress();
  };
  document.querySelector("#export").addEventListener("click", () => {
    const payload = { schema_version: 1, public_web_revision: data.public_web_revision, availability_checked_on: data.availability_checked_on, street: data.street, exported_at: new Date().toISOString(), application_status: "not_applied", decisions: data.decisions.map(item => ({ case_id: item.id, source_id: item.source_id || null, source_sha256: item.sha256 || null, choice: values[item.id]?.choice || null, comment: values[item.id]?.note || "" })) };
    const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" })); link.download = text.exportName; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  });
  document.querySelector("#clear").addEventListener("click", () => { if (window.confirm(lang === "cs" ? "Vymazat všechny lokálně uložené volby?" : "Clear all locally saved choices?")) { values = {}; localStorage.removeItem(key); render(); } });
  document.querySelector("#modal-close").textContent = text.modalClose;
  document.querySelector("#modal-close").addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", event => { if (event.target === modal) modal.classList.remove("open"); });
  document.addEventListener("keydown", event => { if(event.key === "Escape") modal.classList.remove("open"); });
  render();
})();
