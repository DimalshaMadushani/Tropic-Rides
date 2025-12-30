export default function Loading() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 right-[-160px] h-[420px] w-[420px] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -bottom-36 left-[-160px] h-[520px] w-[520px] rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      </div>

      <div className="relative rounded-3xl border border-slate-200 bg-white/80 px-7 py-6 shadow-soft backdrop-blur">
        <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-amber-400 text-sm font-semibold text-white shadow-soft">
          TR
        </div>

        <p className="mt-3 text-center text-sm font-semibold text-slate-900">
          Loading...
        </p>

        <div className="mt-4 h-2 w-64 max-w-[70vw] overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/60">
          <div className="h-full w-1/3 animate-loading-bar rounded-full bg-gradient-to-r from-sky-500 to-amber-400" />
        </div>
      </div>
    </div>
  );
}
