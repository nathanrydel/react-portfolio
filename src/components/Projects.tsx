import { PROJECTS } from "../constants/db.js";
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-16 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project) => (
          <a key={project.id} href={project.link} className="">
            <div className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  width={250}
                  height={150}
                  className="mx-auto mb-6 rounded"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4 md:ml-12">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-light">{project.description}</p>
                <div className="flex justify-center lg:mt-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-400">{tech}</span>
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