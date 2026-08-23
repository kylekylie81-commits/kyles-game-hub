window.KGHB = window.KGHB || {};
window.KGHB.config = {
  brandName: "kyles-game-hub",
  siteTitle: "kyles-game-hub",
  discordLink: "https://discord.gg/y3h7emSMux",
  adSenseClient: "ca-pub-YOUR_PUBLISHER_ID",
  adPopupUrl: "https://your-site.com",
  logoPath: "/assets/media/favicon/main.png",
  logoPathInverted: "/assets/media/favicon/main-inverted.png",
  faviconPath: "/assets/media/favicon/main.png",
};

window.KGHB.loadAdSense = function () {
  const clientId = window.KGHB.config.adSenseClient;
  if (!clientId || clientId === "ca-pub-YOUR_PUBLISHER_ID") {
    return;
  }

  const existing = document.querySelector('script[src*="googlesyndication.com/pagead/js/adsbygoogle.js"]');
  if (existing) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};
