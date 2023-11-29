import styles from "./Message.module.css";
import { useState, useEffect } from "react";

export default function Message({ type, msg }) {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {     // FLUXO COMPLETO DA MESSAGE
    if (!msg) {
      setVisivel(false);
      return;
    }

    setVisivel(true);

        const tempo = setTimeout(() => {
        setVisivel(false);
        }, 3000);

        return () => clearTimeout(tempo);
  }, [msg]);

  return (
    <>
      {visivel && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}
