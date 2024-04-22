import { PROJECTS } from "../constants/db.js";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project) => (
          <a key={project.id} href={project.link} className="">
            <div className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <motion.img
                  initial={{ opacity: 0, scale: 0.25 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .8 }}
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={150}
                  className="mx-auto mb-6 rounded"
                />
              </div>
              <div
                className="w-full max-w-xl lg:w-3/4 md:ml-12">
                <motion.h6
                  initial={{ opacity: 0, scale: 0.25 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="mb-2 font-semibold"
                >
                  {project.title}
                </motion.h6>
                <motion.p
                  initial={{ opacity: 0, scale: 0.25 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="mb-4 text-light"
                >
                  {project.description}
                </motion.p>
                <div className="flex justify-center lg:mt-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      transition={{
                        type: "spring",
                        damping: 5,
                        stiffness: 75,
                        restDelta: 0.001
                      }}
                      key={index}
                      className="mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-400">{tech}</motion.span>
                  ))}
                </div>
              </div>
            </div>
          </a>

        ))}
      </div>
    </div>
  );
}

export default Projects;