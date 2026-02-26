// mockdata.js - redirects to storage.js functionality
// This file exists for backward compatibility
// All data functions are now in storage.js
(function() {
    // If storage.js hasn't loaded yet, this will be called after it loads
    if (typeof initializeApp === 'undefined') {
        // Wait for storage.js to load
        window.addEventListener('load', function() {
            if (typeof initializeApp !== 'undefined') {
                initializeApp();
            }
        });
    } else {
        initializeApp();
    }
})();
