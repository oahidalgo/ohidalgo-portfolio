export const mediaQueries = `
  @media (max-width: 59em) {
    .grid-col-span-md-2 {
      grid-column: span 2;
    }

    .grid--3-cols,
    .grid--4-cols {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 44em) {
    .font-size-1 {
      font-size: var(--font-size-1);
    }

    .font-size-2 {
      font-size: var(--font-size-2);
    }

    .font-size-3 {
      font-size: var(--font-size-3);
    }

    .font-size-4 {
      font-size: var(--font-size-4);
    }

    .font-size-5 {
      font-size: var(--font-size-5);
    }

    .font-size-6 {
      font-size: var(--font-size-6);
    }

    .font-size-7 {
      font-size: var(--font-size-7);
    }

    .font-size-8 {
      font-size: var(--font-size-8);
    }

    .font-size-9 {
      font-size: var(--font-size-9);
    }

    .font-size-10 {
      font-size: var(--font-size-10);
    }

    .font-size-11 {
      font-size: var(--font-size-11);
    }

    .font-size-12 {
      font-size: var(--font-size-12);
    }

    .grid {
      row-gap: 4.8rem;
      column-gap: 0;
    }

    .grid--3-cols,
    .grid--4-cols {
      grid-template-columns: 1fr;
    }

    .grid--2-cols,
    .grid--3-cols {
      grid-template-columns: 1fr;
    }
  }

  

  
`;
