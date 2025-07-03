import { GlareCard } from "@/components/ui/glare-card";

export function GlareCardDemo() {
  return (
    <div className="flex justify-center gap-6 fade-in-top">

      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="/guitar.jpg"
        />
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="/keyboard.jpg"
        />
      </GlareCard>
    </div>
  );
}
