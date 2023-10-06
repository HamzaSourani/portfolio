import Particle from "@/components/particles";
import { LngParams } from "../type";

export default function Home({ params: { lng } }: LngParams) {
  return (
    <main className="w-full h-[calc(100vh_-_112px)]">
      <Particle />
    </main>
  );
}
