import { RefObject, useEffect } from "react";

export const useOnClickOutside = (ref: RefObject<Element>, handler: () => void) => {
    useEffect(() => {
        const element = ref.current;

        const listener = (evt: MouseEvent) => {
            if (!element || element.contains(evt.target as Element)) {
                return;
            }

            handler();
        };

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};
