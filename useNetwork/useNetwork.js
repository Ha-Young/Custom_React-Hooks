export const useNetwork =  (onChange = null) => {
    const [state, setState] = useState(navigator.onLine);

    const handleChange = () => {
        setState(navigator.onLine);

        if (onChange != null || typeof(onChange) === "function") {
            onChange(state);
        }
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, []);
}