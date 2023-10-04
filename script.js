document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox");
    const completedCount = document.getElementById("completed-count");
    const totalItemCount = document.getElementById("total-count");
    const completedItems = document.getElementById("completed-items");
    const reloadButton = document.getElementById("reload-button");
    
    
    const dataElement = document.getElementById("data");
    
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", updateSummaryAndMoveItem);
    });
    
    // RECARREGAR PÁGINA
    function reloadPage() {
        location.reload();
    }
    
    reloadButton.addEventListener("click", reloadPage);
    
    function updateSummaryAndMoveItem() {
        const checkedCheckboxes = document.querySelectorAll(".checkbox:checked");
        const checkedItems = Array.from(checkedCheckboxes).map(function (checkbox) {
            return checkbox.parentElement.textContent.trim();
        });
        
        completedCount.textContent = checkedCheckboxes.length;
        totalItemCount.textContent = checkboxes.length;
        completedItems.textContent = checkedItems.join(", ");
        
        // ATUALIZAR A DATA
        const dataAtual = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dataElement.textContent = dataAtual.toLocaleDateString('pt-BR', options);
    }
    
    updateSummaryAndMoveItem();
});


// BOTÃO DARKMODE
document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode-button");
  const body = document.body;

  darkModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode-active");
  });
});


// PRINT
document.getElementById("capturar").addEventListener("click", function () {
  const elementoParaCapturar = document.getElementById(
    "elemento-para-capturar"
  );
  const container = document.getElementById("captura-de-tela");

  html2canvas(elementoParaCapturar).then(function (canvas) {
    container.appendChild(canvas);

    // Converter o canvas para um URL de dados
    const imagemURL = canvas.toDataURL("image/png");

    const downloadLink = document.getElementById("download-link");
    downloadLink.href = imagemURL;
    downloadLink.style.display = "block";
    downloadLink.download = "captura_de_tela.png"; // Nome do arquivo para download

    const compartilharButton = document.createElement("button");
    compartilharButton.textContent = "Compartilhar";
    compartilharButton.className = "botao-compartilhar";
    compartilharButton.addEventListener("click", function () {
      if (navigator.share) {
        fetch(imagemURL)
          .then((response) => response.blob())
          .then((blob) => {
            const shareData = {
              files: [
                new File([blob], "captura_de_tela.png", { type: "image/png" }),
              ],
            };
            navigator
              .share(shareData)
              .then(() => console.log("Imagem compartilhada com sucesso"))
              .catch((error) => console.error("Erro ao compartilhar:", error));
          })
          .catch((error) => console.error("Erro ao buscar a imagem:", error));
      } else {
        alert("Seu navegador não suporta a função de compartilhamento.");
      }
    });

    container.appendChild(compartilharButton);
  });
});

const compartilharButton = document.createElement("button");
compartilharButton.textContent = "Compartilhar Captura";
compartilharButton.className = "compartilhar-button";
compartilharButton.addEventListener("click", function () {});

container.appendChild(compartilharButton);

// PRINT


