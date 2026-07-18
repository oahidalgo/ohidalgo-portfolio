import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';
import { utilityClasses } from './utilityClasses';
import { mediaQueries } from './mediaQueries';

const GlobalStyles = createGlobalStyle`
  ${variables}
  ${utilityClasses}
  ${mediaQueries}

  /* ---- Dark theme overrides (toggled via body[data-theme]) ---- */
  body[data-theme="dark"] {
    --bg: #0a1420;
    --panel: #10202f;
    --panel2: #0e2b3e;
    --ink: #eef4f9;
    --text: #a9c2d4;
    --muted: #8da9be;
    --line: rgba(83, 200, 245, 0.16);
    --accent: #53c8f5;
    --brand: #53c8f5;
    --btnbg: #53c8f5;
    --btnink: #0a1420;
    --header: rgba(10, 20, 32, 0.88);
    --footerbg: #081019;
    --shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--bg);
    color: var(--ink);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  *:disabled {
    cursor: not-allowed;
  }

  input:focus, button:focus, textarea:focus, select:focus {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: var(--brand);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--accent);
  }

  ul {
    list-style: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  img {
    max-width: 100%;
  }

  @keyframes caret {
    50% { border-color: transparent; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: none; }
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(83, 200, 245, 0.55); }
    70% { box-shadow: 0 0 0 14px rgba(83, 200, 245, 0); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

export default GlobalStyles;
