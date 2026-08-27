window.KGHB = window.KGHB || {};
window.KGHB.config = {
  brandName: "kyles-learning-lab",
  siteTitle: "kyles-learning-lab",
  discordLink: "https://discord.gg/y3h7emSMux",
  adSenseClient: "ca-pub-5063734967359490",
  adPopupUrl: "https://kyles-game-hub-six.vercel.app/",
  logoPath: "/assets/media/favicon/main.png",
  logoPathInverted: "/assets/media/favicon/main-inverted.png",
  faviconPath: "/assets/media/favicon/main.png",
};

window.KGHB.loadAdSense = function () {
  const clientId = window.KGHB.config.adSenseClient;
  if (!clientId || clientId === "ca-pub-5063734967359490") {
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

// Helper: insert an AdSense ad slot into the page at runtime.
// Usage: window.KGHB.insertAd({ adSlot: '1234567890', target: document.getElementById('ad-top'), style: 'display:block; width:100%; height:90px', adTest: true })
window.KGHB.insertAd = function (opts = {}) {
  const client = opts.adClient || (window.KGHB.config && window.KGHB.config.adSenseClient);
  const slot = opts.adSlot || opts.slot;
  if (!client || !slot) {
    console.warn('KGHB.insertAd: missing ad client or ad slot');
    return null;
  }

  const ins = document.createElement('ins');
  ins.className = 'adsbygoogle';
  ins.style.cssText = opts.style || 'display:block';
  ins.setAttribute('data-ad-client', client);
  ins.setAttribute('data-ad-slot', slot);
  ins.setAttribute('data-ad-format', opts.adFormat || 'auto');
  if (opts.adTest) ins.setAttribute('data-adtest', 'on');

  const target = opts.target || document.body;
  target.appendChild(ins);

  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    // Push may fail if script hasn't loaded yet; that's fine for testing.
    console.warn('KGHB.insertAd: adsbygoogle push failed', e && e.message);
  }

  return ins;
};
