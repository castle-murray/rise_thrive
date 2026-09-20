import { Button } from "@/components/Button";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="grid min-h-[80svh] place-items-center px-6 text-center bg-ivory">
      <div>
        <LogoMark className="mx-auto h-16 w-24" />
        <h1 className="font-display mt-6 text-4xl text-espresso">This path does not lead home.</h1>
        <Button href="/" className="mt-8">
          Go home
        </Button>
      </div>
    </div>
  );
}
