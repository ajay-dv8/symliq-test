import { FlipWords } from "@/components/ui/flip-words"; 

export function ServicesSubTitle() {
  const words = ["design", "develop", "deploy"];

  return (
    <div className="flex justify-start items-center px-2">
      <div className="text-xl md:text-3xl py-2 font-sans  text-neutral-300">
        @ Symliq, We
        <FlipWords words={words} /> 
      </div>
    </div>
  );
}
