export default function Loading() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-white" />
        <div className="absolute -top-24 right-[-140px] h-[380px] w-[380px] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -bottom-32 left-[-120px] h-[420px] w-[420px] rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: copy skeleton */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white px-3 py-1 ring-1 ring-slate-200/70">
              <div className="h-3 w-32 rounded bg-slate-100 animate-pulse" />
            </div>

            <div className="mt-4 space-y-3">
              <div className="h-9 w-11/12 rounded-xl bg-white/80 ring-1 ring-slate-200/60 animate-pulse" />
              <div className="h-9 w-10/12 rounded-xl bg-white/80 ring-1 ring-slate-200/60 animate-pulse" />
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-4 w-11/12 rounded bg-white/70 ring-1 ring-slate-200/50 animate-pulse" />
              <div className="h-4 w-10/12 rounded bg-white/70 ring-1 ring-slate-200/50 animate-pulse" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="h-10 w-40 rounded-xl bg-white/80 ring-1 ring-slate-200/60 animate-pulse" />
              <div className="h-10 w-28 rounded-xl bg-white/80 ring-1 ring-slate-200/60 animate-pulse" />
              <div className="h-10 w-32 rounded-xl bg-white/80 ring-1 ring-slate-200/60 animate-pulse" />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded bg-white/70 ring-1 ring-slate-200/50 animate-pulse" />
                  <div className="w-full">
                    <div className="h-4 w-36 rounded bg-white/70 ring-1 ring-slate-200/50 animate-pulse" />
                    <div className="mt-2 h-3 w-52 rounded bg-white/60 ring-1 ring-slate-200/40 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* subtle progress line */}
            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/60 ring-1 ring-slate-200/60">
              <div className="h-full w-1/3 animate-loading-bar rounded-full bg-gradient-to-r from-sky-500 to-amber-400" />
            </div>
          </div>

          {/* Right: hero image skeleton card */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-100 to-amber-200/40 blur-xl" />
            <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/60">
              <div className="relative h-[340px] w-full sm:h-[420px]">
                <div className="absolute inset-0 bg-slate-200/70 animate-shimmer" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
