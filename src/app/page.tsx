import FirstSection from "./home/firstSection";
import SecondSection from "./home/secondSection";
import ThirdSection from "./home/thirdSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
    </main>
  );
}
