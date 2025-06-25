# 📝 To-Do List TypeScript

Uma aplicação simples de lista de tarefas e lembretes desenvolvida com **TypeScript**, **HTML** e **CSS**, funcionando inteiramente no navegador. Sem banco de dados, sem backend — tudo gerenciado pelo `localStorage`.

Este projeto **TO-DO list** em Typescript, é uma pequena plataforma que irá realizar  o registro de tarefas e lembretes. 

**`Tarefas: Serão somente anotações.`**

**`Lembretes: Também funciona como uma  tarefa mas com uma data ou o usuário poderá escolher ser lembrado sobre aquele lembrete.`** 

O objetivo e criar uma interface simples, onde o usuário possa escolher por Tarefas ou Lembretes. 

Este projeto não utiliza nenhum banco de dados e nem interações complexas com servidores externos, tudo  será gerenciado diretamente pelo navegador com o uso do typescript.

## Funcionalidades

- ✅ **Tarefas:** Anotações simples e rápidas.
- ⏰ **Lembretes:** Itens com data/hora para avisos futuros.
- 📂 Filtro por tipo: `Todos`, `Tarefas` ou `Lembretes`.
- 🔔 Alerta de lembrete no horário definido.
- 💾 Armazenamento local no navegador.
- 🌓 Interface leve e limpa (modo escuro opcional).

## Tecnologias utilizadas

- TypeScript
- HTML5 Semântico
- CSS3
- LocalStorage API
---

## 📁 Estrutura de arquivos
```bash
/
├── index.html          # Página principal
├── style.css           # Estilização da interface
├── main.ts             # Lógica principal do app
├── types.ts            # Definição de tipos (Tarefa/Lembrete)
├── storage.ts          # Manipulação do localStorage
├── ui.ts               # Atualização e renderização no DOM
├── reminder.ts         # Sistema de alerta dos lembretes
└── task.ts             # Lógica de criação/remoção de tarefas
```