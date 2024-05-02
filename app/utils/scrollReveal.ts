
"use client";
import ScrollReveal from 'scrollreveal';

export const initScrollReveal = (selector: string, config = {}) => {
    ScrollReveal().reveal(selector, config);
};


