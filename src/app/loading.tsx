import { LogoMark } from "@/components/Logo";

export default function Loading() {
  return (
    <div className="grid min-h-[70svh] place-items-center bg-emerald-deep">
      <div className="text-center">
        <LogoMark className="mx-auto h-16 w-24 spin-slow" />
        <p className="mt-3 text-xs tracking-[0.28em] uppercase text-gold">Rising…</p>
      </div>
    </div>
  );
}
