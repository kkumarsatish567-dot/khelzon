const style = document.createElement('style');
style.textContent = `
  :root { --tool-btn-size: 40px; }

  .tool-btn,
  .pwa-install-btn,
  .header-tools .tool-btn,
  .game-screen-tools .tool-btn {
    width: var(--tool-btn-size);
    height: var(--tool-btn-size);
    padding: 0;
    border-radius: var(--radius-sm);
  }

  .tool-pair,
  .header-tools,
  .header-tools .tool-pair,
  .game-screen-tools .tool-pair {
    gap: 0.4rem;
  }
`;
document.head.append(style);
