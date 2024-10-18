// components/LocomotiveScroll.js
import { useEffect } from 'react';

function LocomotiveScroll() {
    useEffect(() => {
        import('locomotive-scroll').then(locomotive => {
            const scroll = new locomotive.default({
                el: document.querySelector('#scroll-container'), // Selector for scroll container
                smooth: true, // Enable smooth scrolling
                // Add more options as needed
            });
        }).catch(error => {
            console.error('Failed to load locomotive-scroll:', error);
        });
    }, []);

    return null; // No need to render anything, as this component is only for initialization
}

export default LocomotiveScroll;
