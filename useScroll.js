export const useScroll = () => {
    const [status, setStatus] = useState({ x: 0, y: 0 });
    const onScroll = () => {
        setStatus({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return status;
};