(() => {
    const darkModeStyle = document.createElement('style');
    darkModeStyle.id = 'dark-mode-style';
    darkModeStyle.innerHTML = `
        * {
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
    
    const toggleDarkMode = () => {
        const existingStyle = document.getElementById('dark-mode-style');
        if (existingStyle) {
            existingStyle.remove();
        } else {
            document.head.appendChild(darkModeStyle);
        }
    };

    toggleDarkMode();
})();
