import React from "react";

interface UnderlinedLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {}

export default function UnderlinedLink({
  children,
  className,
  ...otherProps
}: UnderlinedLinkProps) {
  return (
    <a
      className={`inline-block relative group cursor-pointer ${className}`}
      {...otherProps}
    >
      {" "}
      {children}
      {/* line */}
      <span className="h-[2px] bg-gradient-to-l from-black to-transparent w-full absolute bottom-0 left-0 group-hover:translate-x-2 transition-transform"></span>
    </a>
  );
}
