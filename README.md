# 🎯 QuizBlitz — Quiz Interativo em Tempo Real

Clone do Kahoot com criação de quiz via JSON, sala com código, pontuação em tempo real e ranking final.

## Funcionalidades

- **Criar Quiz via JSON** — Cole um JSON com perguntas, opções, resposta correta, tempo e imagem (opcional)
- **Sala com código** — Código de 6 dígitos gerado automaticamente
- **Controle do host** — O criador da sala controla o início e a sequência de perguntas
- **Pontuação Kahoot-style** — Quanto mais rápido responder, mais pontos (até 1000)
- **Streak bonus** — Sequência de 3+ acertos ganha bônus de 10%
- **Timer visual** — Barra e contador com alerta nos últimos 5 segundos
- **Imagens nas perguntas** — Exibidas centralizadas acima da pergunta
- **Placar em tempo real** — Após cada pergunta
- **Pódio final** — Top 3 com animação de confetti

## Formato do JSON

```json
{
  "title": "Título do Quiz",
  "questions": [
    {
      "question": "Texto da pergunta",
      "image": "https://url-da-imagem.jpg",
      "time": 20,
      "options": ["Opção A", "Opção B", "Opção C", "Opção D"],
      "correct": 1
    }
  ]
}
```

| Campo      | Tipo     | Obrigatório | Descrição                        |
|------------|----------|-------------|----------------------------------|
| `title`    | string   | Sim         | Título do quiz                   |
| `question` | string   | Sim         | Texto da pergunta                |
| `options`  | string[] | Sim         | 2 a 4 opções de resposta         |
| `correct`  | number   | Sim         | Índice da resposta correta (0-3) |
| `time`     | number   | Não         | Tempo em segundos (padrão: 20)   |
| `image`    | string   | Não         | URL de uma imagem                |

## Desenvolvimento Local

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` — abra 2+ abas para simular host e jogadores.

## Deploy no GitHub Pages

O projeto já inclui o workflow do GitHub Actions. Basta:

1. Criar um repositório no GitHub
2. Fazer push do código para a branch `main`
3. Ir em **Settings → Pages → Source** e selecionar **GitHub Actions**
4. O deploy será automático a cada push na `main`

```bash
git init
git add .
git commit -m "QuizBlitz initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/quizblitz.git
git push -u origin main
```

> **Nota:** A comunicação entre host e jogadores usa `BroadcastChannel` (funciona entre abas do mesmo navegador). Para uso em dispositivos separados, seria necessário um backend com WebSocket.

## Tecnologias

- React 18 + Vite
- CSS puro (sem frameworks)
- BroadcastChannel API
- GitHub Pages + GitHub Actions
