# QA Playwright Framework

[![Playwright Tests](https://github.com/WesleyCouti/qa-playwright-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/WesleyCouti/qa-playwright-framework/actions/workflows/playwright.yml)

End-to-end and API test automation framework built with **Playwright and TypeScript**, focused on maintainability, test organization, reusable components and continuous integration.

This project is part of my QA Automation portfolio and demonstrates practical approaches I use when structuring automated tests for web applications and APIs.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Playwright Fixtures
- API Testing
- GitHub Actions
- HTML Report
- Trace, screenshots and videos on failure

---

## Test Coverage

The project contains both **UI/E2E** and **API** automated scenarios.

### E2E Tests

Automated against SauceDemo:

- Successful login
- Locked user validation
- Add product to cart
- Complete checkout flow

### API Tests

Automated against JSONPlaceholder:

- Retrieve resource
- Create resource
- Basic response contract validation
- Non-existent resource validation

---

## Test Architecture

The framework separates test logic, page interactions, reusable fixtures and test data.

```text
                    Automated Tests
                          │
              ┌───────────┴───────────┐
              │                       │
           E2E Tests               API Tests
              │                       │
              ▼                       ▼
         Page Objects            HTTP Requests
              │
              ▼
           Fixtures
              │
              ▼
          Test Data
              │
              ▼
           Playwright
              │
              ▼
        GitHub Actions
              │
              ▼
      HTML Report / Artifacts
```

This separation helps reduce duplicated code and keeps test scenarios focused on business behavior rather than implementation details.

---

## Project Structure

```text
qa-playwright-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── data/
├── fixtures/
├── pages/
├── tests/
│   ├── api/
│   └── e2e/
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

### Responsibilities

| Directory | Responsibility |
|---|---|
| `pages/` | Page objects, selectors and page interactions |
| `fixtures/` | Reusable test dependencies and objects |
| `data/` | Test data |
| `tests/e2e/` | End-to-end business flows |
| `tests/api/` | HTTP/API validations |
| `.github/workflows/` | Continuous integration pipeline |

---

## Test Strategy

The framework was structured around a few principles that I consider important when working with test automation:

### Maintainability

Page interactions are separated from test scenarios using the **Page Object Model**, reducing duplicated selectors and making UI changes easier to maintain.

### Reusability

Fixtures and test data are separated from test implementation so common setup and information can be reused between scenarios.

### Reliability

Tests avoid fixed waits whenever possible and rely on Playwright's auto-waiting behavior and user-oriented selectors.

### Test Layers

UI and API tests are kept in separate suites, allowing each layer to be executed independently.

### Continuous Integration

Automated tests run through GitHub Actions so the project can be validated without depending on a local development environment.

---

## Getting Started

### Requirements

- Node.js
- npm

Clone the repository:

```bash
git clone https://github.com/WesleyCouti/qa-playwright-framework.git
```

Enter the project directory:

```bash
cd qa-playwright-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

Run the complete test suite:

```bash
npm test
```

Run only E2E tests:

```bash
npm run test:e2e
```

Run only API tests:

```bash
npm run test:api
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run Playwright UI Mode:

```bash
npm run test:ui
```

---

## Test Reports

Playwright generates an HTML report after test execution.

Open the report locally with:

```bash
npm run report
```

When tests fail, the framework can also retain debugging evidence such as:

- Screenshot
- Video
- Playwright Trace

These artifacts help investigate failures without immediately reproducing the scenario locally.

---

## CI/CD

The project uses **GitHub Actions** to automatically validate the automation framework.

The pipeline performs:

```text
Checkout repository
        ↓
Setup Node.js
        ↓
Install dependencies
        ↓
Install Playwright browsers
        ↓
Type check
        ↓
Run automated tests
        ↓
Generate HTML report
        ↓
Upload test artifacts
```

The workflow can also be executed manually through the **Actions** tab.

Current pipeline status is displayed by the badge at the top of this README.

---

## Applications Under Test

### SauceDemo

Used for browser-based E2E scenarios such as authentication, cart operations and checkout.

### JSONPlaceholder

Used for API automation scenarios and HTTP response validations.

The applications are public testing environments and are not affiliated with this project.

---

## Technical Decisions

### Why Playwright?

Playwright provides browser automation, API testing, auto-waiting, tracing and multi-browser capabilities within the same framework.

This makes it possible to keep different test layers under a consistent automation stack.

### Why Page Object Model?

Page Objects keep selectors and page interactions outside the test scenarios.

Instead of coupling tests directly to UI implementation details, scenarios can remain focused on expected behavior.

### Why Fixtures?

Fixtures provide a structured way to share reusable dependencies and setup between tests without duplicating initialization logic.

### Why GitHub Actions?

Continuous integration ensures the framework can be installed and executed in a clean environment, providing additional confidence that the project does not depend only on a developer's local machine.

---

## Roadmap

Possible next improvements:

- [ ] Parameterized tests
- [ ] Authentication using storage state
- [ ] Environment-based configuration
- [ ] Accessibility testing
- [ ] Smoke and regression tags
- [ ] Additional reporting
- [ ] Parallel execution strategy
- [ ] Cross-browser execution

---

## Author

**Wesley Coutinho**

QA Engineer | Test Automation

Playwright • Cypress • API Testing • JavaScript • TypeScript • SQL • CI/CD

LinkedIn: https://www.linkedin.com/in/wesleycoutinhoqa/  
GitHub: https://github.com/WesleyCouti
