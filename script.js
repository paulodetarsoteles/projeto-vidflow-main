const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos")
                .then(response => response.json())
                .then((videos) => 
                    videos.forEach((element) => {
                        containerVideos.innerHTML += `
                            <li class="videos__item">
                                <iframe src="${element.url}" title="${element.titulo}" frameborder="0" allowfullscreen></iframe>
                                <div class="descricao-video">
                                    <img class="img-canal" src="${element.imagem}" alt="Logo do Canal">
                                    <h3 class="titulo-video">${element.titulo}</h3>
                                    <p class="titulo-canal">${element.descricao}</p>
                                </div>
                            </li>
                        `;
                    })
                ).catch((erro) => {
                    containerVideos.innerHTML = `
                        <p>Ocorreu um erro: ${erro}</p>
                    `;
                });
