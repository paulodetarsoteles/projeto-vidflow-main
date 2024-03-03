const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos(){

    try{
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((element) => {
            if (videos.categoria == '')
                throw new Error('Vídeo sem categoria');

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
    } catch (error){
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos:${error}</p>`
    } finally {
        // Apenas para fonte de pesquisa
    }
}

buscarEMostrarVideos();