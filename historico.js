document.addEventListener('DOMContentLoaded', function () {
    const historyList = document.getElementById('history-list');
    const clearHistoryButton = document.getElementById('clear-history-button');

    // Recupera o histórico de itens marcados do localStorage
    const history = JSON.parse(localStorage.getItem('history')) || [];

    // Função para formatar a data como "Dia da Semana, Data"
    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Percorre o histórico e exibe os itens na lista, divididos por data
    let currentDay = '';
    history.forEach(function (entry) {
        const date = new Date(entry.date);
        const day = formatDate(date.toDateString());

        if (day !== currentDay) {
            // Cria um cabeçalho com a data
            const dateHeader = document.createElement('h2');
            dateHeader.textContent = day;
            historyList.appendChild(dateHeader);
            currentDay = day;
        }

        const listItem = document.createElement('li');
        listItem.textContent = entry.item;
        historyList.appendChild(listItem);
    });

    // Adicione um evento de clique para limpar o histórico
    clearHistoryButton.addEventListener('click', function () {
        // Limpa o histórico e atualiza o localStorage
        localStorage.removeItem('history');

        // Limpa a lista na página
        historyList.innerHTML = '';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('dark-mode-button');
    const body = document.body;

    darkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode-active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const clearHistoryButton = document.getElementById('clear-history-button');

    // Função para animar o ícone de lixo
    function animateTrashIcon() {
        clearHistoryButton.innerHTML = '<i class="fas fa-trash"></i> Limpando...';
        setTimeout(function () {
            clearHistoryButton.innerHTML = '<i class="fas fa-trash"></i> Limpar Histórico';
        }, 2000); // A animação dura 2 segundos (ajuste conforme necessário)
    }

    clearHistoryButton.addEventListener('click', animateTrashIcon);
});
