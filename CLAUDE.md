# Contexto Para Claude Code

Este repositório é somente do app **Greek Wisdom**. Não misturar com VetroFlow, Palácio de Vidro ou backups antigos que existiam na pasta original.

## Produto

Greek Wisdom é um app mobile/PWA inspirado em apps de afirmações, com frases motivacionais de filósofos gregos e arquétipos da mitologia grega.

## Stack Atual

- Web app estático: `index.html`, `styles.css`, `app.js`.
- PWA: `manifest.webmanifest`, `sw.js`.
- Servidor local simples: `server.js`.
- Android: projeto nativo WebView em `android/`.

## Funcionalidades Já Implementadas

- Home com frases, imagem do autor/deus e navegação anterior/próxima.
- Frase do dia: seleção determinística por data, card premium na Home e destaque (★) ao visualizar a frase do dia; abre na frase do dia uma vez por dia.
- Filtros por filósofo/deus.
- Favoritos com persistência em `localStorage`.
- Compartilhamento de texto/imagem.
- Preview de tela de bloqueio.
- Configurações de idioma, tema claro/escuro do app, fonte, tamanho, notificações e rotação de frases/fundos.
- Controle na Home para ajustar fonte, tamanho e posição da frase.
- PWA instalável no iPhone via Safari.
- APK Android debug já foi gerado fora deste repo limpo.

## Direção De Produto

O usuário quer um app premium, preto/branco/ouro, com visual mitológico forte. Evitar frases genéricas como "Só sei que nada sei"; preferir frases curtas, motivacionais e com força prática.

## Cuidados

- Manter o app como Greek Wisdom.
- Não reintroduzir VetroFlow.
- Ao mexer em assets ou scripts cacheados, subir a versão nos links de `index.html` e no `CACHE_NAME` de `sw.js`.
- O app usa `localStorage`; preservar chaves quando possível.
- O projeto Android em `android/app/src/main/assets/www` deve ser sincronizado quando arquivos web mudarem.

## Comandos Úteis

```powershell
node --check app.js
node server.js
```

Para testar:

```text
http://127.0.0.1:4173/?fresh=dev
```
