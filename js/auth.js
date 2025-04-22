// Simple authentication for dev environment
document.addEventListener('DOMContentLoaded', function() {
    // Only run in development environment
    if (window.location.hostname.includes('dev.')) {
        const storedAuth = localStorage.getItem('devAuth');
        
        if (!storedAuth) {
            const username = prompt('Username:');
            const password = prompt('Password:');
            
            // Production credentials
            if (username === 'goaeitest' && password === '562tvsj7') {
                localStorage.setItem('devAuth', 'true');
            } else {
                alert('Invalid credentials');
                window.location.href = 'about:blank';
            }
        }
    }
}); 