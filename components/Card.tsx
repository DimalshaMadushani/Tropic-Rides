// import clsx from "clsx";
// import { PropsWithChildren } from "react";

// export function Card({
//   children,
//   className,
// }: PropsWithChildren<{ className?: string }>) {
//   return (
//     <div
//       className={clsx(
//         "rounded-2xl bg-white shadow-card ring-1 ring-slate-200/60",
//         "transition-transform duration-200 hover:-translate-y-0.5",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// }

import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    />
  );
}

