# QA Playwright Framework

Projeto de portfólio para demonstrar uma estrutura de automação com **Playwright + TypeScript**, cobrindo cenários de interface e API.

## Tecnologias

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Fixtures
- API Testing
- GitHub Actions
- HTML Report
- Trace, screenshot e vídeo em falhas

## Cenários automatizados

### E2E
- Login com usuário válido
- Validação de usuário bloqueado
- Inclusão de produto no carrinho
- Checkout completo

### API
- Consulta de recurso
- Criação de recurso
- Validação de contrato básico
- Recurso inexistente

## Estrutura

```text
qa-playwright-framework/
├── .github/workflows/
├── data/
├── fixtures/
├── pages/
├── tests/
│   ├── api/
│   └── e2e/
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Instalação

```bash
npm install
npx playwright install
```

## Execução

```bash
npm test
npm run test:e2e
npm run test:api
npm run test:headed
npm run test:ui
```

## Relatório

```bash
npm run report
```

## Estratégia

- `pages/`: elementos e comportamentos de página
- `fixtures/`: objetos reutilizáveis para os testes
- `data/`: dados de teste
- `tests/e2e/`: fluxos de negócio pela interface
- `tests/api/`: validações HTTP

Os testes evitam waits fixos e priorizam seletores orientados ao usuário sempre que possível.

## CI

O workflow do GitHub Actions instala dependências, browsers, executa type-check, roda a suíte e publica o relatório HTML como artefato.

## Aplicações utilizadas

- E2E: SauceDemo
- API: JSONPlaceholder

## Próximas evoluções

- Testes parametrizados
- Storage state
- Ambientes configuráveis
- Acessibilidade
- Tags de smoke/regressão
- Relatórios adicionais

## Autor

**Wesley Coutinho**  
QA Engineer | Test Automation

LinkedIn: https://www.linkedin.com/in/wesleycoutinhoqa/  
GitHub: https://github.com/WesleyCouti
