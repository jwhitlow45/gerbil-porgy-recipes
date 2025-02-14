import { useEffect, useState } from "react";
import { PathContext } from "./contexts";

type PathContextProps = {
    children: React.ReactNode;
}

const PathContextProvider = (props: PathContextProps) => {
    const [path, setPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        if (path !== window.location.pathname) {
            window.history.pushState({}, '', path);
        }
    }, [path]);

    window.onpopstate = () => {
        setPath(window.location.pathname);
    }

    return (
        <PathContext.Provider value={{ path, setPath }}>
            {props.children}
        </PathContext.Provider>
    );
}

export default PathContextProvider;