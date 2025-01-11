
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
    duration: 1200,   // Duration of the animation in milliseconds
    easing: 'ease',   // Easing function for the animation
    once: true,       // Run animation only once when the element is in the viewport
    mirror: false     // Don't trigger animations when scrolling back up
});

import 'font-awesome/css/font-awesome.min.css'; // For use in your React, Vue, or other JavaScript files

const display=document.getElementById("display");


