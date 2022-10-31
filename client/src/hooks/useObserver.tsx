import { MutableRefObject, Ref, useEffect, useMemo, useRef, useState } from "react";

export default function useObserver(htmlElementRef: MutableRefObject<any>, observerOptions?: IntersectionObserverInit) {
    const [elementVisible, setElementVisible] = useState<boolean>(false);
    const intersectionObserverOptions = useMemo(() => ({
        ...(observerOptions ? observerOptions : { rootMargin: "0px", threshold: 1, root: null })
    }), [])

    const onVisible = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        const [entry] = entries;
        setElementVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onVisible, intersectionObserverOptions);
        const targetElement = htmlElementRef?.current;
        if (targetElement) observer.observe(targetElement);

        return () => {
            if (targetElement) observer.unobserve(targetElement);
        }

    }, [htmlElementRef, intersectionObserverOptions])

    return elementVisible;
}