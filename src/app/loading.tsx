import { LogoMark } from "@/components/Logo";

export default function Loading() {
  return (
    <div className="grid min-h-[70svh] place-items-center bg-cream">
      <div className="text-center">
        <LogoMark className="mx-auto size-16" />
        <p className="mt-3 text-sm tracking-[0.2em] uppercase text-muted">Growing…</p>
      </div>
    </div>
  );
}
