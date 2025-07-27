import { useEffect, useState, useRef, ReactNode } from "react";

interface AnimateProps {
  children: ReactNode;
  threshold?: number;
  fromDown?: boolean;
  fromLeft?: boolean;
  fromRight?: boolean;
  className?: string;
  delay?: string;
  isVisibleParent?:boolean;
}

const Animate: React.FC<AnimateProps> = ({
  children,
  threshold = 0.5,
  delay = "0s",
  fromDown,
  fromLeft,
  fromRight,
  className = "",
  isVisibleParent=true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if(window.location.hash){
      setIsVisible(true)
    }
  },[])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay,
      }}
      className={`
        ${className}
        ${fromDown ? "fromDown" : ""}
        ${fromLeft ? "fromLeft" : ""}
        ${fromRight ? "fromRight" : ""}
        ${isVisible && isVisibleParent ? "animate" : ""}
      `}
    >
      {children}
    </div>
  );
};

export default Animate;
