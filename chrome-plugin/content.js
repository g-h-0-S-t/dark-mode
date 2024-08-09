chrome.storage.sync.get("darkModeSites", (data) => {
  const darkModeSites = data.darkModeSites || [];
  const currentDomain = window.location.hostname;

  if (darkModeSites.includes(currentDomain)) {
    const existingStyle = document.getElementById("dark-mode-style");
    if (!existingStyle) {
      const link = document.createElement("link");
      link.href =
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      const darkModeStyle = document.createElement("style");
      darkModeStyle.id = "dark-mode-style";
      darkModeStyle.innerHTML = `
          * {
              font-family: 'Fira Code', monospace !important;
              background-color: #121212 !important;
              color: #e0e0e0 !important;
          }
          ::-webkit-scrollbar {
              width: 12px !important;
              background-color: #121212 !important;
          }
          ::-webkit-scrollbar-thumb {
              background-color: #e0e0e0 !important;
          }
          scrollbar-width: thin !important;
          scrollbar-color: #e0e0e0 #121212 !important;
      `;
      document.head.appendChild(darkModeStyle);
    }
  } else {
    const existingStyle = document.getElementById("dark-mode-style");
    if (existingStyle) {
      existingStyle.remove();
    }
  }
});
