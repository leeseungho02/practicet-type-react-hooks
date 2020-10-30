import defaultAxios from "axios";

export const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setSate] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);
    if (!options.url) {
        return;
    }
    const refetch = () => {
        setSate({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    };
    useEffect(() => {
        axiosInstance(options)
            .then((data) => {
                setSate({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch((error) => {
                setSate({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);
    return { ...state, refetch };
};