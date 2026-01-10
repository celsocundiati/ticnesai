import React, { useState }  from "react";

function Projectos() {

    const [mostrarTodos, setMostrarTodos] = useState(false);

    const projectos = [
        {
            id: 1,
            titulo: "WEATHER FORECAST",
            desc: "Um aplicativo da web que exibe as condições meteorológicas atuais e previsões de 5 dias usando dados de API em tempo real",
            imagem:
                "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
            linkSite: "https://previsaodotempocs.vercel.app/",
            linkGit: "https://github.com/celsocundiati/previsao_do_tempo",
        },
        {
            id: 2,
            titulo: "QUIZ APP",
            desc: "Um aplicativo de teste interativo com várias categorias, pontuações e feedback em tempo real.",
            imagem:
                "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
            linkSite: "https://quizcs.vercel.app/",
            linkGit: "https://github.com/celsocundiati/quiz-react",
        },
        {
            id: 3,
            titulo: "TASK LIST",
            desc: "Um aplicativo da web de gerenciamento de tarefas para criar, editar e rastrear suas tarefas diárias com eficiência.",
            imagem:
                "https://cdn-icons-png.flaticon.com/512/9068/9068643.png", // imagemm ilustrativa
            linkSite: "https://listadetarefascs.vercel.app/",
            linkGit: "https://github.com/celsocundiati/ListaDeMercado_Reactjs",
        },
        {
            id: 4,
            titulo: "TWINDER",
            desc: "A live Geolocation app for finding tweets and twitter users around you.",
            imagem:
                "https://cdn-icons-png.flaticon.com/512/854/854878.png",
            linkSite: "https://quizcs.vercel.app/",
            linkGit: "https://github.com/celsocundiati/quiz-react",
        },
        {
            id: 5,
            titulo: "LIVENTS",
            desc: "A video streaming app with live Geolocation, for streaming events.",
            imagem:
                "https://cdn-icons-png.flaticon.com/512/4211/4211803.png",
            linkSite: "https://previsaodotempocs.vercel.app/",
            linkGit: "https://github.com/celsocundiati/previsao_do_tempo",
        },
        {
            id: 6,
            titulo: "MOOVE",
            desc: "Mobile app for booking instant pickup & dropoff accross major cities.",
            imagem:
                "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
            linkSite: "https://listadetarefascs.vercel.app/",
            linkGit: "https://github.com/celsocundiati/ListaDeMercado_Reactjs",
        },
    ];

    // Exibir apenas 3 inicialmente
    const projectosVisiveis = mostrarTodos ? projectos : projectos.slice(0, 3);

    return (
    
        <section id="projectos" className=" text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#7562E0] mb-8"> Projetos em destaque: </h2>

                <p className="text-lg text-gray-300 mb-12 max-w-3xl">
                    Trabalhei em muitos projetos ao longo de ser um desenvolvedor web,
                    aqui estão alguns dos meus projetos ao vivo no mundo real
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    {projectosVisiveis.map((proj) => (
                        <div
                            key={proj.id}
                            className="bg-[#1a1a3a] rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300">

                            <div className="bg-[#2a2a4a] rounded-xl flex justify-center items-center h-44 mb-6 border border-purple-400/30">
                                <img
                                src={proj.imagem}
                                alt={proj.titulo}
                                className="h-28 object-contain"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-[#7562E0]  mb-3">{proj.titulo}</h3>
                            
                            <p className="text-gray-300 mb-6">{proj.desc}</p>

                            <div className="flex gap-3">
                                <a href={proj.linkSite} className="bg-[#7562E0] hover:bg-[#5b48d9] text-white font-medium px-5 py-2 rounded-lg cursor-pointer">
                                View Live
                                </a>
                                <a href={proj.linkGit} className="border border-purple-400 text-purple-400 hover:bg-[#7562E0] hover:text-white font-medium px-5 py-2 rounded-lg transition-all cursor-pointer">
                                Github Repo
                                </a>
                            </div>

                        </div>
                        ))
                    }
                </div>

                {/* Botão Ver Mais / Ver Menos */}
                {projectos.length > 3 && (
                <div className="text-center mt-10">
                    <button onClick={() => setMostrarTodos(!mostrarTodos)}
                    className="bg-[#7562E0] hover:bg-[#5b48d9] text-white font-medium px-6 py-3 rounded-xl transition-all cursor-pointer"
                    >
                    {mostrarTodos ? "Ver menos" : "Ver mais"}
                    </button>
                </div>
                )}

            </div>
        </section>
    );
}

export default Projectos;