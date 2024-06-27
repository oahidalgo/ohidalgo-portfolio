import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
*/

/*
--- 01 TYPOGRAPHY SYSTEM


- Font weights
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700



- Letter spacing
-0.5px
0.75px


*/

:root {

  /* Utility classes */

  .text-center {
    text-align: center;
  }

  .mb-1 {
    margin-bottom: var(--space-1);
  }

  .mb-2 {
    margin-bottom: var(--space-2);
  }

  .mb-3 {
    margin-bottom: var(--space-3);
  }

  .mb-4 {
    margin-bottom: var(--space-4);
  }

  .mb-5 {
    margin-bottom: var(--space-5);
  }

  .mb-6 {
    margin-bottom: var(--space-6);
  }

  .mb-7 {
    margin-bottom: var(--space-7);
  }

  .mb-8 {
    margin-bottom: var(--space-8);
  }

  .mb-9 {
    margin-bottom: var(--space-9);
  }

  .mb-10 {
    margin-bottom: var(--space-10);
  }

  .mb-11 {
    margin-bottom: var(--space-11);
  }

  .mb-12 {
    margin-bottom: var(--space-12);
  }

  .gap-xs {
    gap: var(--space-2);
  }

  .gap-sm {
    gap: var(--space-4);
  }

  .gap-md {
    gap: var(--space-6);
  }

  .gap-lg {
    gap: var(--space-8);
  }

  .gap-xl {
    gap: var(--space-10);
  }

  /* - Font sizes (px)
    10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 
    / 36 / 44 / 52 / 62 / 74 / 86 / 98 */
  .font-size-1 {
    font-size: 1rem;
  }

  .font-size-2 {
    font-size: 1.2rem;
  }

  .font-size-3 {
    font-size: 1.4rem;
  }

  .font-size-4 {
    font-size: 1.6rem;
  }

  .font-size-5 {
    font-size: 1.8rem;
  }

  .font-size-6 {
    font-size: 2.0rem;
  }

  .font-size-7 {
    font-size: 2.4rem;
  }

  .font-size-8 {
    font-size: 3.0rem;
  }

  .font-size-9 {
    font-size: 3.6rem;
  }

  .font-size-10 {
    font-size: 4.4rem;
  }

  .font-size-11 {
    font-size: 5.2rem;
  }

  .font-size-12 {
    font-size: 6.2rem;
  }


  // Line heights
  /* Default: 1
  Small: 1.05
  Medium: 1.2
  Paragraph default: 1.6
  Large: 1.8 */

  .line-height-xs {
    line-height: 1;
  }

  .line-height-sm {
    line-height: 1.05;
  }

  .line-height-md {
    line-height: 1.2; 
  }

  .line-height-lg {
    line-height: 1.6;
  }

  .line-height-xl {
    line-height: 1.8;
  }


  .grid {
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

    &--2-cols {
      grid-template-columns: repeat(2, 1fr);
    }

    &--3-cols {
      grid-template-columns: repeat(3, 1fr);
    }

  }
  
  @media (max-width: 59em) {
    .grid--3-cols,
    .grid--4-cols {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 44em) {
    .grid {
      row-gap: 4.8rem;
    }

    .grid--2-cols,
    .grid--3-cols {      
      grid-template-columns: 1fr;
    }
  }

  &, &.light-mode {
    /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    /* For dark mode */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  &.dark-mode {
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #166534;
    --color-green-700: #dcfce7;
    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /*
  - Screen sizes
  - 544px 34em  phones
  - 704px 44em  small tablets
  - 944px 59em  tablets
  - 1200px 75em  landscape tablets
  - 1344px 84em  small desktops
  */
  --screen-xs: 34em;
  --screen-sm: 44em;
  --screen-md: 59em;
  --screen-lg: 75em;
  --screen-xl: 84em;

  /* 
  Spacing system (px)
  2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
  */
  --space-1: 0.2rem;
  --space-2: 0.4rem;
  --space-3: 0.8rem;
  --space-4: 1.2rem;
  --space-5: 1.6rem;
  --space-6: 2.4rem;
  --space-7: 3.2rem;
  --space-8: 4.8rem;
  --space-9: 6.4rem;
  --space-10: 8rem;
  --space-11: 9.6rem;
  --space-12: 12.8rem;

  --color-brand-50: #8da9be;
  --color-brand-100: #7698b0;
  --color-brand-200: #5f87a3;
  --color-brand-300: #497596;
  --color-brand-400: #326489;
  --color-brand-500: #1b537c;
  --color-brand-600: #184b70;
  --color-brand-700: #164263;
  --color-brand-800: #133a57;
  --color-brand-900: #10324a;
  --color-brand-950: #0e2b3e;

  --color-secondary-50: #f9f6f2;
  --color-secondary-100: #f5f1eb;
  --color-secondary-200: #f2ece5;
  --color-secondary-300: #ece3d7;
  --color-secondary-400: #e5d9ca;
  --color-secondary-500: #DFD0BD;
  --color-secondary-600: #c9bbaa;
  --color-secondary-700: #b2a697;
  --color-secondary-800: #9c9284;
  --color-secondary-900: #867d71;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Ubuntu", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  color: var(--color-secondary-300);
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}


`;

export default GlobalStyles;
