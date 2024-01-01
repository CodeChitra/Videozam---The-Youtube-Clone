import { MutableRefObject, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

const useInfiniteScroll = (
  target: MutableRefObject<HTMLElement | null>,
  fn: Function
) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((store) => store.app.isLoading);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          dispatch(fn());
        }
      },
      {
        threshold: 0,
      }
    );

    if (target.current) observer.current.observe(target.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
};

export default useInfiniteScroll;
