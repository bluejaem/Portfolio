import React, { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { Container } from "../layout/Container";
import { SectionTitle } from "../ui/SectionTitle";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export const ProjectsSection: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = portfolioData.projects as any[];
  const project = projects[currentProjectIndex] || {};

  // Resolve a lista de imagens para o carrossel
  const projectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : [project.imageUrl || project.image || ""];

  // Reseta para o primeiro slide caso o utilizador mude de projeto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProjectIndex]);

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projetos" className="py-20 bg-slate-950/50">
      <Container>
        <SectionTitle
          title="Soluções orientadas à clareza de dados e uso real."
        />

        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 lg:p-10 relative overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Bloco da Imagem com Carrossel */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 aspect-video lg:aspect-[4/3] flex items-center justify-center">
                
                {/* Imagem Atual */}
                <img
                  src={projectImages[currentImageIndex]}
                  alt={`${project.title || "Projeto"} - Imagem ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain p-2 transition-all duration-300"
                />

                {/* Badge da Categoria */}
                {project.badge && (
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900/90 text-purple-400 border border-purple-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Setas de navegação (apenas quando houver mais de uma imagem) */}
                {projectImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      aria-label="Imagem anterior"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700/80 text-white flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-200 shadow-lg cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Próxima imagem"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700/80 text-white flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-200 shadow-lg cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Indicadores de página */}
                    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/70 border border-slate-800 backdrop-blur-sm">
                      {projectImages.map((_: any, idx: number) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                            currentImageIndex === idx
                              ? "bg-purple-500 w-4"
                              : "bg-slate-600 hover:bg-slate-400"
                          }`}
                          aria-label={`Ir para a imagem ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Tecnologias Utilizadas */}
              <div className="flex flex-wrap gap-2 pt-2">
                {(project.techStack || project.tags || []).map((tech: string) => (
                  <Badge key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links Externos */}
              <div className="flex items-center gap-3 pt-2">
                {project.repoUrl && (
                  <Button
                    onClick={() => window.open(project.repoUrl, "_blank")}
                  >
                    Repositório
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    Abrir Aplicação
                  </Button>
                )}
              </div>
            </div>

            {/* Conteúdo Descritivo */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                    {project.category || "PROJETO"}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {String(currentProjectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.shortDescription || project.description || project.solution}
                </p>

                {/* Decisões Arquiteturais e Destaques */}
                {((project.architectureDecisions || project.highlights || project.features || []) as any[]).length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {((project.architectureDecisions || project.highlights || project.features || []) as any[]).map((dec: any, i: number) => (
                      <div
                        key={i}
                        className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4"
                      >
                        {typeof dec === "string" ? (
                          <p className="text-xs text-slate-300 leading-relaxed">{dec}</p>
                        ) : (
                          <>
                            <h4 className="text-xs font-bold text-purple-300 mb-1 uppercase tracking-wide">{dec.title}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">{dec.description}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Controles de Navegação entre Projetos */}
              <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-slate-800/80">
                <Button onClick={prevProject}>
                  Anterior
                </Button>
                <Button onClick={nextProject}>
                  Próximo Projeto
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};