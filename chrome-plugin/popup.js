document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url);
    const domain = url.hostname;

    chrome.storage.sync.get(["darkModeSites"], (data) => {
      const darkModeSites = data.darkModeSites || [];
      if (darkModeSites.includes(domain)) {
        toggleButton.classList.add("active");
      }
    });

    toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("active");

      chrome.storage.sync.get(["darkModeSites"], (data) => {
        let darkModeSites = data.darkModeSites || [];

        if (toggleButton.classList.contains("active")) {
          if (!darkModeSites.includes(domain)) {
            darkModeSites.push(domain);
          }
        } else {
          darkModeSites = darkModeSites.filter((site) => site !== domain);
        }

        chrome.storage.sync.set({ darkModeSites });

        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        });
      });
    });
  });
});
