import React, { useEffect, useState } from "react";

//este hook sirve para saber si el componente se está mostrando en el ViewPort
//https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
