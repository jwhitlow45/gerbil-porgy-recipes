import { useEffect, useState } from "react";
import { PathContext } from "./contexts";

type PathContextProps = {
    children: React.ReactNode;
}

const PathContextProvider = (props: PathContextProps) => {
    const [path, setPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        window.history.pushState({}, '', path);
    }, [path]);

    return (
        <PathContext.Provider value={{ path, setPath }}>
            {props.children}
        </PathContext.Provider>
    );
}

export default PathContextProvider;