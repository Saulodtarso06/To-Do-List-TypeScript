// Importar tipos (se estiver usando types.ts separado)

type TipoItem = "tarefa" | "lembrete";

interface BaseItem {
    id: string;
    tipo: TipoItem;
    conteudo: string;
    criadoEm: Date;
}

interface Lembrete extends BaseItem {
    tipo: "lembrete";
    lembrarEm: Date;
}

type Item = BaseItem | Lembrete;

// Elementos do DOM

const form = document.querySelector<HTMLFormElement>("#form")!;
const inputTexto = document.querySelector<HTMLInputElement>("#conteudo")!;
const inputData = document.querySelector<HTMLInputElement>("#data")!;
const tipoSelect = document.querySelector<HTMLSelectElement>("#tipo")!;
const lista = document.querySelector<HTMLUListElement>("#lista")!;

let itens: Item[] = [];

// Carregar itens do localStorage

function carregarItens(): void {
    const dados = localStorage.getItem("itens");
    if (dados) {
        itens = JSON.parse(dados, (key, value) => {
            if (key === "criadoEm" || key === "lembrarEm") return new Date(value);
        return value;
        });
    }
    renderizarItens();
}

// Salvar itens no localStorage

function salvarItens(): void {
    localStorage.setItem("itens", JSON.stringify(itens));
}

// Criar novo item
function criarItem(e: SubmitEvent): void {
    e.preventDefault();

    const conteudo = inputTexto.value.trim();
    const tipo = tipoSelect.value as TipoItem;
    if (!conteudo) return;

    const novoItem: Item = {
        id: crypto.randomUUID(),
        tipo,
        conteudo,
        criadoEm: new Date(),
    };

    if (tipo === "lembrete" && inputData.value) {
        (novoItem as Lembrete).lembrarEm = new Date(inputData.value);
    }

    itens.push(novoItem);
    salvarItens();
    renderizarItens();
    form.reset();
}

// Renderizar itens na tela

function renderizarItens(): void {
    lista.innerHTML = "";
    itens.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `[${item.tipo}] ${item.conteudo}`;

    if (item.tipo === "lembrete" && "lembrarEm" in item) {
        const data = new Date((item as Lembrete).lembrarEm);
        li.innerText += ` - ⏰ ${data.toLocaleString()}`;
    }

    // Botão remover
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.onclick = () => {
        itens = itens.filter((i) => i.id !== item.id);
        salvarItens();
        renderizarItens();
    };

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

// Verificar lembretes

function verificarLembretes(): void {
    const agora = new Date();
    itens.forEach((item) => {
        if (item.tipo === "lembrete" && "lembrarEm" in item) {
            const lembrete = item as Lembrete;
                if (lembrete.lembrarEm <= agora) {
                alert(`🔔 Lembrete: ${lembrete.conteudo}`);

                // Remover lembrete após alertar

                itens = itens.filter((i) => i.id !== item.id);
                salvarItens();
                renderizarItens();
            }
        }       
    });
}

// Eventos

form.addEventListener("submit", criarItem);
setInterval(verificarLembretes, 60 * 1000); // Checar a cada 60 segundos

// Inicializar

carregarItens();
