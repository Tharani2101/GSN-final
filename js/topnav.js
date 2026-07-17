(function initTopNav() {
  const mount = document.getElementById("gsn-topnav");
  if (!mount) return;

  const current = mount.dataset.current || "";
  const inPages = mount.dataset.base === "pages";
  const homeHref = inPages ? "../index.html" : "index.html";
  const prefix = inPages ? "" : "pages/";

  // Main nav links matching the GSN navbar (second image)
  const items = [
    { id: "gsn-experience", label: "GSN Experience", href: prefix + "membership.html" },
    { id: "our-vision",     label: "Our Vision",     href: prefix + "about.html" },
    { id: "global-community", label: "Global Community", href: prefix + "chapters.html" },
    { id: "gsn-franchising",  label: "GSN Franchising",  href: prefix + "resources.html" },
  ];

  // Check if dropdown itself is highlighted active
  const isDropdownActive = ["faq", "privacy", "terms", "global-events"].includes(current);

  const linksHtml = items
    .map(
      (item) =>
        `<a href="${item.href}" class="${current === item.id ? "active" : ""}">${item.label}</a>`
    )
    .join("");

  const pagePrefix = inPages ? "" : "pages/";
  const dropdownHtml = `
    <div class="megamenu-cols">
      <div class="megamenu-col">
        <div class="megamenu-title">Company</div>
        <a href="${pagePrefix}about.html" class="${current === "our-vision" ? "active" : ""}">About Us</a>
        <a href="#">Leadership</a>
        <a href="#">Our Founder</a>
      </div>
      <div class="megamenu-col">
        <div class="megamenu-title">Insights</div>
        <a href="#">The Latest</a>
        <a href="#">Blog & News</a>
        <a href="#">Networking Tips</a>
        <a href="${pagePrefix}events.html" class="${current === "global-events" ? "active" : ""}">Global Events</a>
      </div>
      <div class="megamenu-col">
        <div class="megamenu-title">Connect</div>
        <a href="${pagePrefix}chapters.html" class="${current === "global-community" ? "active" : ""}">Find GSN Chapter</a>
        <a href="${pagePrefix}contact.html" class="${current === "contact" ? "active" : ""}">Start a Chapter</a>
        <a href="${pagePrefix}membership.html" class="${current === "gsn-experience" ? "active" : ""}">Exclusive Member Benefits</a>
        <a href="${pagePrefix}contact.html" class="${current === "contact" ? "active" : ""}">Contact Us</a>
      </div>
    </div>
  `;

  // Resolve GET INVITED href
  const inviteHref = inPages ? "../pages/contact.html" : "pages/contact.html";

  mount.innerHTML = `
    <header class="topnav-bar">
      <div class="topnav-inner">
        <a href="${homeHref}" class="topnav-logo" id="topnav-home" aria-label="GSN Home">
          <div class="topnav-logo-box">
            <span class="topnav-logo-gsn">GSN</span>
            <span class="topnav-logo-sub">Global Success Network</span>
          </div>
        </a>
        <button class="topnav-toggle" type="button" aria-expanded="false" aria-controls="topnav-menu">Menu</button>
        <nav class="topnav-links" id="topnav-menu" aria-label="Main navigation">
          ${linksHtml}
          <div class="topnav-dropdown${isDropdownActive ? " open" : ""}">
            <button type="button" aria-haspopup="true" aria-expanded="${isDropdownActive}">
              About GSN <span class="chevron" aria-hidden="true">▾</span>
            </button>
            <div class="topnav-dropdown-menu">
              ${dropdownHtml}
            </div>
          </div>
        </nav>
        <div class="topnav-actions">
          <a href="${inviteHref}" class="topnav-btn-invite" id="topnav-get-invited">GET INVITED</a>
          <a href="#login" class="topnav-btn-login" id="topnav-login">LOGIN</a>
        </div>
      </div>
    </header>
  `;

  const toggle = mount.querySelector(".topnav-toggle");
  const menu = mount.querySelector(".topnav-links");
  const dropdown = mount.querySelector(".topnav-dropdown");
  const dropdownBtn = dropdown?.querySelector("button");

  toggle?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  dropdownBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle("open");
    dropdownBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("click", () => {
    dropdown?.classList.remove("open");
    dropdownBtn?.setAttribute("aria-expanded", "false");
  });
})();
