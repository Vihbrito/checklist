document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.checkbox');
    const completedCount = document.getElementById('completed-count');
    const totalCount = document.getElementById('total-count');
    const completedItems = document.getElementById('completed-items');
    const checklist = document.getElementById('checklist');
    const summaryCard = document.getElementById('summary-card');
    const reloadButton = document.getElementById('reload-button');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', updateSummaryAndMoveItem);
    });

    // Função para recarregar a página
    function reloadPage() {
        location.reload();
    }

    reloadButton.addEventListener('click', reloadPage);

    function updateSummaryAndMoveItem() {
        const checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
        const checkedItems = Array.from(checkedCheckboxes).map(function (checkbox) {
            return checkbox.parentElement.textContent.trim();
        });

        completedCount.textContent = checkedCheckboxes.length;
        completedItems.textContent = checkedItems.join(', ');

        checkedCheckboxes.forEach(function (checkbox) {
            const listItem = checkbox.parentElement;
            listItem.style.display = 'none'; // Esconde o item da lista
            checklist.removeChild(listItem); // Remove o item da lista principal
            summaryCard.appendChild(listItem); // Adiciona o item ao card de resumo
        });

      
    }

    function saveCheckedItem(item) {
        const today = new Date();
        const dateString = today.toDateString(); // Converte a data atual em uma string
    
        // Recupera o histórico de itens marcados do localStorage ou cria um array vazio
        const history = JSON.parse(localStorage.getItem('history')) || [];
    
        // Adiciona a data e o item marcado ao histórico
        history.push({
            date: dateString,
            item: item
        });
    
        // Salva o histórico atualizado no localStorage
        localStorage.setItem('history', JSON.stringify(history));
    }
    
    function updateSummaryAndMoveItem() {
        const checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
        
        checkedCheckboxes.forEach(function (checkbox) {
            const listItem = checkbox.parentElement;
            listItem.style.display = 'none'; // Esconde o item da lista
            checklist.removeChild(listItem); // Remove o item da lista principal
    
            // Salva o item marcado no localStorage
            saveCheckedItem(listItem.textContent.trim());
        });
    
        // Atualiza o resumo e o contador de itens marcados
        const checkedItems = Array.from(checkedCheckboxes).map(function (checkbox) {
            return checkbox.parentElement.textContent.trim();
        });
    
        completedCount.textContent = checkedCheckboxes.length;
        completedItems.textContent = checkedItems.join(', ');
    }
    

    updateSummaryAndMoveItem();
});

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.checkbox');
    const congratulationsMessage = document.getElementById('congratulations-message');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', checkAllCheckboxes);
    });

    function checkAllCheckboxes() {
        const allChecked = [...checkboxes].every(function (checkbox) {
            return checkbox.checked;
        });

        if (allChecked) {
            congratulationsMessage.classList.remove('hidden');
        } else {
            congratulationsMessage.classList.add('hidden');
        }
    }
});



// redirecionar para histórico
document.addEventListener('DOMContentLoaded', function () {
    const viewHistoryButton = document.getElementById('view-history');

    viewHistoryButton.addEventListener('click', function () {
        window.location.href = 'historico.html'; // Redireciona para a página de histórico
    });
});

document.getElementById('reload-button').addEventListener('click', function () {
    location.reload();
});


// Botão darkmode
document.addEventListener('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById('dark-mode-button');
    const body = document.body;

    darkModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode-active');
    });
});
