# 📱 PNews - Aplicativo de Notícias

PNews é um aplicativo de leitura de notícias com categorias filtráveis, favoritos e busca integrada, desenvolvido com **Expo** e **React Native**. O objetivo é fornecer uma experiência fluida, moderna e organizada, com foco na usabilidade, performance e boas práticas de desenvolvimento.

---

## 🔧 Instalação e Execução

### Pré-requisitos

* Node.js ≥ 18
* Expo CLI instalado globalmente (`npm install -g expo-cli`)
* Emulador Android/iOS ou dispositivo físico

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/paulinha-19/p-news.git  

# 2. Instale as dependências
npm install

# 3. Execute o app
npx expo start
```

> 📱 Use o app Expo Go no seu celular ou um emulador Android/iOS para visualizar.

---

## Telas
![image](https://github.com/user-attachments/assets/03a9485d-3fc1-4a68-a3cc-fd559476e0b3)

![image](https://github.com/user-attachments/assets/53a8dec7-2195-474f-b8f6-0a469fb0408f)

![image](https://github.com/user-attachments/assets/2aef8e74-16e1-4b93-be24-e06fbbca2462)

![image](https://github.com/user-attachments/assets/9b812908-28d3-4224-ad93-c4dedd642794)

![image](https://github.com/user-attachments/assets/90b053eb-704a-458e-806b-e4af69c7c219)

![image](https://github.com/user-attachments/assets/cd281968-21a9-40cb-899c-c9e28aee96a7)

![image](https://github.com/user-attachments/assets/408d2df7-8b1e-42f5-9ddf-66ecb915e0a6)

![image](https://github.com/user-attachments/assets/938bb6b2-777b-474b-b1d4-bff136a831bd)

![image](https://github.com/user-attachments/assets/85859382-d0af-4dad-b8eb-77405293950f)

![image](https://github.com/user-attachments/assets/c091818c-8332-4aa5-8c12-636eb0fd22cf)

![image](https://github.com/user-attachments/assets/b42ca37e-affa-46c5-831e-dee56d9f5583)

![image](https://github.com/user-attachments/assets/d899da94-99c3-498b-8b98-6e997b7997cf)

![image](https://github.com/user-attachments/assets/90989aa4-56d0-493f-9a26-2c25f5e70cb1)

![image](https://github.com/user-attachments/assets/62f5c899-e613-4211-93a8-46933122cd61)


## 🧠 Decisões Técnicas

### 1. **Composition Pattern no Card**

O componente `Card` foi construído usando **Composition Pattern**, o que permite dividir a interface em pequenas partes reutilizáveis como `Card.Root`, `Card.Media`, `Card.Title`, etc. Isso facilita:

* Reutilização e legibilidade
* Flexibilidade na composição visual
* Separacão clara de responsabilidades

### 2. **Zustand para Gerenciamento de Estado**

Optei por usar o **Zustand** ao invés de Redux ou Context API porque:

* É leve, simples e direto ao ponto
* Permite persistência com `AsyncStorage` (ideal para favoritos)
* Integra-se facilmente com React Native
* Código limpo e legível

### 3. **Armazenamento de Favoritos com AsyncStorage + Zustand**

A lista de favoritos é persistida localmente com **AsyncStorage**, sincronizada com Zustand via `persist`, o que oferece:

* Rápida leitura/escrita de dados
* Estado global centralizado e reativo
* Retenção dos favoritos após reiniciar o app

### 4. **Scroll Infinito para Listagem de Notícias**

A tela inicial implementa um **scroll infinito**, carregando notícias em páginas de 10 itens:

* Melhora a performance e UX
* Reduz o tempo de carregamento inicial
* Implementado com controle de página e slicing local

### 5. **Separacão de Lógicas com Slices e Hooks Customizados**

A lógica de cada domínio (ex: favoritos, busca, notícias) foi isolada com **hooks customizados** e **slices** de Zustand para:

* Melhor organização do código
* Escalabilidade futura
* Testabilidade

### 6. **Interceptors + httpErrorMessages**

Para padronizar o tratamento de erros, foram criados:

* **Interceptors Axios** para capturar erros de rede
* **httpErrorMessages** e **networkMessages** para mostrar mensagens mais amigáveis
* Ajuda no debug e melhora a UX

### 7. **Filtros por Categoria**

As categorias foram exibidas com **ScrollView horizontal** e ícones dinâmicos. Ao selecionar uma categoria:

* A chamada à API usa `category` como parâmetro
* Os resultados são exibidos com base no filtro selecionado
* Permite navegação entre categorias (business, sports, etc.)
* Atualiza dinamicamente os resultados via hook useTopHeadLinesNews(category)

### 8. **GNews API**

Escolhi a **[GNews API](https://gnews.io/docs/)** por:

* Excelente documentação
* Dados atualizados e variados
* Fácil integração com filtros, idiomas e busca

---

## 📁 Estrutura do Projeto (resumida)
```
pnews/
├── app/                         # Rotas com Expo Router
│   ├── (tabs)/                  # Layouts com abas
│   │   ├── home/                # Home, Search, News Details
│   │   └── favorites.tsx        # Tela de favoritos
│   ├── _layout.tsx              # Layout raiz do app
│   └── +not-found.tsx
├── assets/                      # Imagens, fontes etc.
├── components/                  # Componentes reutilizáveis
│   ├── common/                  # Ex: Card
│   ├── FilterByCategory.tsx     # Scroll horizontal com ícones
│   └── SearchInput.tsx
├── constants/                   # Cores, ícones
├── hooks/                       # Hooks personalizados
│   ├── useTopHeadLinesNews.ts   # Hook de scroll infinito
│   └── useFavorites.ts          # Hook para favoritos
├── services/                    # Axios, interceptors, mensagens
├── store/                       # Zustand stores
├── types/                       # Tipagens globais (Articles, etc)
├── utils/                       # Formatação de artigos, datas etc.
├── __tests__/                   # Testes unitários (Jest + Testing Library)
│   ├── SearchInput.test.tsx
│   └── NewsCard.test.tsx
└── README.md
```

---

## ✅ Testes

Testes unitários foram adicionados com:

* `@testing-library/react-native`
* `jest`
* Mocks de ícones e navegação para isolar comportamento dos componentes
---

## 📌 Conclusão

Este projeto foi desenvolvido com foco em boas práticas, UX fluida e código limpo. A arquitetura modular facilita manutenção e escalabilidade. Estou à disposição para explicar qualquer decisão ou expandir funcionalidades. 😊

---

## 👩‍💻 Desenvolvido por

**Paula Soares**
[LinkedIn](https://www.linkedin.com/in/paulaso/)

```
```
