import Header from "@/components/Header";
import IntroText from "@/components/IntroText";
import ProjectList from "@/components/ProjectList";
import ContactButtons from "@/components/ContactButtons";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center px-6 py-24 sm:py-32">
      <div className="w-full max-w-[450px] flex flex-col gap-[38px]">
        <div className="flex flex-col gap-[18px]">
          <Header />
          <IntroText />
        </div>
        <ProjectList />
        <ContactButtons />
      </div>
    </main>
  );
}
