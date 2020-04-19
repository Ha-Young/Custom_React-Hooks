export const useScrollEnd = status => {
    const [state, setState] = useState(status);
    const onScroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight ===
        document.documentElement.scrollHeight
      ) {
        setState(true);
      } else {
        setState(false);
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };