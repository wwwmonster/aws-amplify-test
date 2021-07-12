import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    res.ok ? console.log("==res.status==: " + res.status)
                        : console.log("==res.status no good==: " + res.status);
                    if (!res.ok) throw Error("the server error");
                    return res.json();
                })
                .then(data => {
                    console.log("==from data fetch===");
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setErrMsg(null);
                })
                .catch((e) => {
                    if (e.name === "AbortError") {
                        console.log("---abort catch: " + e.message);
                    } else {
                        console.log("---error from catch: " + e.message);
                        setErrMsg(e.message);
                        setIsPending(false);
                    }

                })
        }, 200);


        return () => abortCont.abort();
        // return () => console.log("abort=-=-=-=-=");
    }, [url]);

    return { data, isPending, errMsg };
}

export default useFetch;