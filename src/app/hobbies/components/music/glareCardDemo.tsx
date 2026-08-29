import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";

export function GlareCardDemo() {
  return (
    <div className="flex justify-center gap-6 fade-in-top">

      <GlareCard className="flex flex-col items-center justify-center">
        <Image
          className="object-cover"
          src="/guitar.jpg"
          alt="Acoustic guitar"
          fill
          sizes="(max-width: 768px) 50vw, 320px"
        />
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <Image
          className="object-cover"
          src="/keyboard.jpg"
          alt="Music keyboard"
          fill
          sizes="(max-width: 768px) 50vw, 320px"
        />
      </GlareCard>
    </div>
  );
}
