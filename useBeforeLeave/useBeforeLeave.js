export const useBeforeLeave =  (onBefore) => {
  if (typeof onBefore !== "function") return;

  const handleLeave = (event) => {
    const { clientY } = event;
    if (clientY < 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleLeave);
    return document.removeEventListener("mouseleave", handleLeave);
  });
};
