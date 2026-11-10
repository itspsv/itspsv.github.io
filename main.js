// Renders the page from SITE (defined in content.js). You shouldn't need to edit this.

const ICONS = {
  github: { label: "GitHub", svg: `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>` },
  linkedin: { label: "LinkedIn", svg: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>` },
  medium: { label: "Medium", svg: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>` },
  x: { label: "X", svg: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>` },
  email: { label: "Email", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>` },
  resume: { label: "Résumé", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>` },
  website: { label: "Website", svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` },
};

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const isExternal = (url) => /^https?:\/\//.test(url);
const linkAttrs = (url) =>
  `href="${esc(url)}"` + (isExternal(url) ? ` target="_blank" rel="noopener noreferrer"` : "");

const initials = (title) =>
  esc(String(title).split(/\s+/).map((w) => (w.match(/[A-Za-z0-9]/) || [""])[0]).filter(Boolean).slice(0, 2).join("").toUpperCase());

function thumb(item) {
  const tile = `<div class="thumb placeholder" aria-hidden="true">${initials(item.title)}</div>`;
  if (!item.image) return tile;
  const img = `<img class="thumb" src="${esc(item.image)}" alt="" loading="lazy" data-fallback="${esc(initials(item.title))}">`;
  return item.url ? `<a ${linkAttrs(item.url)} tabindex="-1">${img}</a>` : img;
}

// "Aug 2019 – Apr 2023" may wrap after the dash, but never inside "Aug 2019".
const formatDate = (date) =>
  String(date ?? "")
    .split(/\s*[–-]\s*/)
    .map((part) => `<span class="nowrap">${esc(part)}</span>`)
    .join(" – ");

function renderItem(item) {
  const title = item.url
    ? `<a class="item-title" ${linkAttrs(item.url)}>${esc(item.title)}</a>`
    : `<span class="item-title">${esc(item.title)}</span>`;
  const links = (item.links || []).filter((l) => l && l.url);
  const linkRow = links.length
    ? `<div class="item-links">${links.map((l) => `<a ${linkAttrs(l.url)}>${esc(l.label)}</a>`).join("")}</div>`
    : "";
  const dated = item.date !== undefined;
  return `
    <div class="item${dated ? " dated" : ""}">
      ${dated ? `<div class="date">${formatDate(item.date)}</div>` : ""}
      ${thumb(item)}
      <div>
        ${title}
        ${item.text ? `<p class="item-text">${item.text}</p>` : ""}
        ${linkRow}
      </div>
    </div>`;
}

// Tile (card) layout: picture on top, then title and skills. Used by sections with layout: "tiles".
function renderTile(item) {
  const pic = item.image
    ? `<img class="tile-img" src="${esc(item.image)}" alt="" loading="lazy" data-fallback="${initials(item.title)}">`
    : `<div class="tile-img placeholder" aria-hidden="true">${initials(item.title)}</div>`;
  const wrap = (inner, cls = "") =>
    item.url ? `<a class="${cls}" ${linkAttrs(item.url)}>${inner}</a>` : `<span class="${cls}">${inner}</span>`;
  // Second line: `skills` (joined with dots), or a plain `subtitle` such as the issuer.
  const skills = item.subtitle ? [item.subtitle] : (item.skills || []).filter(Boolean);
  return `
    <div class="tile">
      ${wrap(pic, "tile-pic")}
      <div class="tile-body">
        ${wrap(esc(item.title), "tile-title")}
        ${skills.length ? `<div class="tile-skills">${skills.map(esc).join(" · ")}</div>` : ""}
      </div>
    </div>`;
}

function render() {
  const s = SITE;
  document.title = s.name;
  const tagline = [].concat(s.tagline || []).filter(Boolean);

  const icons = Object.entries(s.links || {})
    .filter(([key, url]) => url && ICONS[key])
    .map(([key, url]) => {
      const href = key === "email" && !url.startsWith("mailto:") ? `mailto:${url}` : url;
      const { label, svg } = ICONS[key];
      return `<a ${linkAttrs(href)} aria-label="${label}" title="${label}">${svg}</a>`;
    })
    .join("");

  const sections = (s.sections || [])
    .filter((sec) => sec.items && sec.items.length)
    .map(
      (sec) => `
      <section>
        <h2 class="section-title">${esc(sec.title)}</h2>
        ${sec.layout === "tiles"
          ? `<div class="tiles">${sec.items.map(renderTile).join("")}</div>`
          : sec.items.map(renderItem).join("")}
        ${sec.footer ? `<p class="section-footer">${sec.footer}</p>` : ""}
      </section>`
    )
    .join("");

  document.getElementById("app").innerHTML = `
    <header class="header">
      ${s.photo ? `<img class="photo" src="${esc(s.photo)}" alt="Photo of ${esc(s.name)}">` : ""}
      <div class="header-text">
        <h1 class="name">${esc(s.name)}</h1>
        ${tagline.length ? `<p class="tagline">${tagline.map(esc).join("<br>")}</p>` : ""}
        ${icons ? `<nav class="icons">${icons}</nav>` : ""}
      </div>
    </header>

    ${(s.bio || []).length ? `
      <section class="bio">
        <h2 class="section-title">bio</h2>
        ${s.bio.map((p) => `<p>${p}</p>`).join("")}
      </section>` : ""}

    ${sections}
  `;

  // Missing image file? Swap it for the plain initials tile instead of a broken icon.
  document.querySelectorAll("img.thumb, img.tile-img").forEach((img) => {
    img.addEventListener("error", () => {
      const tile = document.createElement("div");
      tile.className = `${img.classList[0]} placeholder`;
      tile.textContent = img.dataset.fallback;
      img.replaceWith(tile);
    });
  });
}

render();
