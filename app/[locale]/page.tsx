
import Hero from "@/components/Home";
import NavBar from "@/components/NavBar";
import { About } from "@/components/About";
import { useTranslations } from "next-intl";
import Project from "@/components/Project";
import { Projects } from "@/components/ProjectList";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
export default function Home() {
  const t=useTranslations()

  return (
    <div className="dark:bg-gray-900 transition-all duration-700">
      <NavBar  />
      <Hero />
      <About translations={
        {
          title: t('about.title'),
          content1:{
            word1: t('about.content1.word1'),
            word2: t('about.content1.word2'),
            word3: t('about.content1.word3'),
            frontend: t('about.content1.frontend')

          },
          content2: t('about.content2'),
          content3: t('about.content3')
        }
      } />
      <Project projectList={Projects().map(project => ({ ...project, see: t("see") }))} see={t("see")} projectTitleSection={t("project")} look={t("look")}/>
      <Stack title={t("language")}/>
      <Footer translations={{
        emailAddress: t('emailAddress'),
        getInTouch: t('getInTouch'),
        submit: t('footer.submit'),
        meet: t('footer.meet'),
        interest: t('footer.interest')
      }}/>
    </div>
  );
}
