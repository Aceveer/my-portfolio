import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Meta Front-End Developer Certificate from Coursera",
      src: "/awards/fed.png",
    },
    {
      title: "Google Data Analytics from Coursera",
      src: "/awards/gda.png",
    },
    {
      title: "Adelaide Graduate Award from University of Adelaide",
      src: "/awards/aga.png",
    },
    {
      title: "Volunteer Recognition Award from Adelaide University Library",
      src: "/awards/volunteering.jpeg",
    },
    {
      title: "Performer of The Month from Infinite Computer Solutions",
      src: "/awards/POM.png",
    },
    {
      title: "CNR Rao Merit Scholarship from PES University",
      src: "/awards/CNR.png",
    },
  ];

  return <div className="mt-10 px-4 md:px-8">
  <FocusCards cards={cards} />
</div>;
}
