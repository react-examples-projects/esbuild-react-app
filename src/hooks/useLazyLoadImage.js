import { useEffect, useRef } from "react";
import SkeletonLoader from "../assets/skeleton.gif";
import lazyLoad from "../helpers/lazyload";
/**
 * Show an image loader placeholder and replace when it's been loaded
 * @param {String} src The original source url
 * @param {String} placeholder a loader for the image
 * @returns {String} The image url
 */
export default function useLazyloadImage(src) {
  const imgNodeRef = useRef(null);
  useEffect(() => {
    imgNodeRef.current.src = SkeletonLoader;
    imgNodeRef.current.setAttribute("data-src", src);
    lazyLoad(imgNodeRef.current);
  }, [src]);

  return { ref: imgNodeRef };
}
