"use client"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { FaJava, FaPython, FaLinux, FaGitAlt, FaGithub } from 'react-icons/fa';
import { BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';
import { SiNextdotjs, SiSqlite } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import { LiaReact } from 'react-icons/lia';


const Stack = ({title}:{title:string}) => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-row gap-10 md:items-center md:justify-center my-20 dark:text-gray-200">
      <div className="text-5xl">
        <p>s</p>
        <p>t</p>
        <p>a</p>
        <p>c</p>
        <p>k</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages Section */}
        <div>
          <h1 className="text-2xl mb-4">{title}</h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex flex-row gap-1 border border-[#FFD700] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <TbBrandTypescript />
              <p>typescript</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#FFD700] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <IoLogoJavascript />
              <p>javascript</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#FFD700] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <FaJava />
              <p>java</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#FFD700] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <FaPython />
              <p>python</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Framework Section */}
        <div>
          <h1 className="text-2xl mb-4">{t("framework")}</h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex flex-row gap-1 border border-[#4CAF50] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <LiaReact />
              <p>react</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#4CAF50] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <SiNextdotjs />
              <p>next js</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#4CAF50] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <BiLogoSpringBoot />
              <p>spring boot</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <div>
          <h1 className="text-2xl mb-4">{t("tool")}</h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex flex-row gap-1 border border-[#00BFFF] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <FaLinux />
              <p>linux</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#00BFFF] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <FaGitAlt />
              <p>git</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#00BFFF] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <FaGithub />
              <p>github</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Database Section */}
        <div>
          <h1 className="text-2xl mb-4">{t("database")}</h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex flex-row gap-1 border border-[#FF6347] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <BiLogoPostgresql />
              <p>postgresql</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#FF6347] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <TbBrandMysql />
              <p>mysql</p>
            </motion.div>
            <motion.div
              className="flex flex-row gap-1 border border-[#FF6347] rounded-full text-xl items-center justify-center p-2"
              variants={item}
            >
              <SiSqlite />
              <p>sqlite</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
