async function fetchChampionData() {
    try {
        const response = await fetch("https://riot-api-url/champion-endpoint"); // Atualize para o endpoint correto da API da Riot
        const data = await response.json();

        // Itera sobre os campeões e atualiza o HTML
        data.champions.forEach(champion => {
            // Seleciona o ícone do campeão e popup correspondente
            const championIcon = document.querySelector(`img[alt="${champion.name}"]`).parentElement;
            const popup = championIcon.querySelector('.popup');

            // Insere as informações de Buffs e Nerfs
            popup.innerHTML = `
                <p><strong>Nerfs:</strong> ${champion.nerfs}</p>
                <p><strong>Buffs:</strong> ${champion.buffs}</p>
            `;
        });
    } catch (error) {
        console.error("Erro ao buscar dados dos campeões:", error);
    }
}

// Chama a função para carregar os dados
fetchChampionData();