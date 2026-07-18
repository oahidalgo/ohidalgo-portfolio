import { useEffect, useRef, useState } from 'react';

// Types out `kicker` first, then `name`. Restarts whenever either changes
// (e.g. when the language is switched). Ported from the Portfolio.dc design.
export function useTypingEffect(kicker, name) {
  const [typedKicker, setTypedKicker] = useState('');
  const [typedName, setTypedName] = useState('');
  const [kickerDone, setKickerDone] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    setTypedKicker('');
    setTypedName('');
    setKickerDone(false);
    setTypingDone(false);

    let i = 0;
    const typeKicker = () => {
      if (i <= kicker.length) {
        setTypedKicker(kicker.slice(0, i));
        i++;
        timeoutRef.current = setTimeout(typeKicker, 32);
      } else {
        setKickerDone(true);
        let j = 0;
        const typeName = () => {
          if (j <= name.length) {
            setTypedName(name.slice(0, j));
            j++;
            timeoutRef.current = setTimeout(typeName, 80);
          } else {
            setTypingDone(true);
          }
        };
        typeName();
      }
    };
    typeKicker();

    return () => clearTimeout(timeoutRef.current);
  }, [kicker, name]);

  return { typedKicker, typedName, kickerDone, typingDone };
}
