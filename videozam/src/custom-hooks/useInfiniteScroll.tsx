import { MutableRefObject, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

const useInfiniteScroll = (
  target: MutableRefObject<HTMLElement | null>,
  fn: Function,
  searchQuery?: string,
  clearStateAction?: Function
) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((store) => store.app.isLoading);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isLoading) {
          dispatch(fn(searchQuery));
        }
      },
      {
        threshold: 0,
      }
    );

    if (target.current) observer.current.observe(target.current);

    return () => {
      if (clearStateAction) dispatch(clearStateAction());
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [searchQuery]);
};

export default useInfiniteScroll;
