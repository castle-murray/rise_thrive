import { Button } from "@/components/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="grid min-h-[80svh] place-items-center px-6 text-center">
      <div>
        <LogoMark className="mx-auto size-20" />
        <h1 className="font-display mt-6 text-4xl text-forest">This path doesn&apos;t lead home.</h1>
        <p className="mt-3 text-muted max-w-md mx-auto">
          The page isn&apos;t here. Let&apos;s get you back to something warm.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">Go home</Button>
          <Button href="/contact" variant="ghost" className="text-forest">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}
