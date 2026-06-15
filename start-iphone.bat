@echo off
REM Atalho de duplo clique para testar o Greek Wisdom no iPhone pela rede Wi-Fi.
REM Ele descobre o IP do PC e sobe o servidor; depois e so abrir o endereco no Safari.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-iphone-pwa.ps1"
echo.
pause
