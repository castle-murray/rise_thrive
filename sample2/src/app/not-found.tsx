import { Button } from "@/components/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="grid min-h-[80svh] place-items-center px-6 text-center mesh text-champagne">
      <div>
        <LogoMark className="mx-auto h-20 w-28" />
        <h1 className="font-display mt-6 text-4xl">This path does not lead home.</h1>
        <p className="mt-3 text-champagne/75 max-w-md mx-auto">Let us take you back.</p>
        <Button href="/" className="mt-8">
          Go home
        </Button>
      </div>
    </div>
  );
}
