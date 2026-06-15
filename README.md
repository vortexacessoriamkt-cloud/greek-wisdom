# Greek Wisdom

Aplicativo mobile/PWA de frases inspiradoras com filósofos gregos e arquétipos da mitologia grega.

## Rodar localmente

```powershell
node server.js
```

Depois abra:

```text
http://127.0.0.1:4173/?fresh=dev
```

## Estrutura

- `index.html`: telas do app.
- `styles.css`: visual, tema claro/escuro, layout mobile.
- `app.js`: dados das frases, favoritos, filtros, compartilhamento, ajustes de fonte/posição e rotação.
- `assets/`: ícones e imagens dos deuses.
- `manifest.webmanifest` e `sw.js`: PWA.
- `android/`: projeto Android WebView para gerar APK.
- `start-iphone-pwa.ps1`: servidor local para testar no iPhone via Safari na mesma rede.

## Android

O projeto Android fica em `android/`.

Com JDK 17+ e Android SDK instalados:

```powershell
cd android
gradle assembleDebug
```

APK esperado:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## iPhone grátis

Use como PWA:

1. Rode `.\start-iphone-pwa.ps1`.
2. Abra no Safari do iPhone o link mostrado no terminal.
3. Toque em Compartilhar.
4. Adicionar à Tela de Início.

Para IPA/TestFlight/App Store precisa Mac/Xcode e Apple Developer.

