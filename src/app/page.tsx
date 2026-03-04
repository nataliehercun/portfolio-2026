import Header from "@/components/Header";
import IntroText from "@/components/IntroText";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center px-6 py-24 sm:py-32">
      <div className="w-full max-w-[500px] flex flex-col gap-[38px]">
        <Header />
        <IntroText />
        <ProjectList />
      </div>
    </main>
  );
}
