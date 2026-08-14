# QA Playwright Framework

[![Playwright Tests](https://github.com/WesleyCouti/qa-playwright-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/WesleyCouti/qa-playwright-framework/actions/workflows/playwright.yml)

End-to-end and API test automation framework built with **Playwright and TypeScript**, focused on maintainability, reusable components, cross-browser testing and continuous integration.

This project is part of my QA Automation portfolio and demonstrates practical approaches to structuring automated tests for web applications and APIs.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Playwright Fixtures
- API Testing
- GitHub Actions
- Cross-browser Testing
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

- Retrieve post by ID
- Create post
- Validate user response contract
- Validate unknown resource response

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
        Chromium / Firefox
              │
              ▼
        GitHub Actions
              │
              ▼
      HTML Report / Artifacts
```

This separation helps reduce duplicated code and keeps test scenarios focused on expected behavior rather than implementation details.

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

The framework was structured around principles commonly applied to maintainable test automation.

### Maintainability

Page interactions are separated from test scenarios using the **Page Object Model**, reducing duplicated selectors and making UI changes easier to maintain.

### Reusability

Fixtures and test data are separated from test implementation so common setup and information can be reused between scenarios.

### Reliability

Tests avoid fixed waits whenever possible and rely on Playwright's auto-waiting behavior and user-oriented selectors.

### Test Layers

UI and API tests are kept in separate suites, allowing each layer to be executed independently.

### Cross-Browser Validation

The automated suite is currently executed against:

- Chromium
- Firefox

Running the same scenarios across different browser engines helps identify browser-specific behavior and increases confidence in application compatibility.

### Continuous Integration

Automated tests run through GitHub Actions so the project can be validated in a clean CI environment without depending only on a local development machine.

---

## CI Execution

The complete automation suite is continuously validated through **GitHub Actions**.

### Current Test Execution

| Metric | Result |
|---|---|
| Functional scenarios | 8 |
| Total test executions | 16 |
| Passed | 16 ✅ |
| Failed | 0 |
| Browsers | Chromium + Firefox |
| TypeScript validation | ✅ Passing |
| HTML report | ✅ Generated |
| CI pipeline | ✅ Passing |

The current suite contains **8 automated scenarios executed across Chromium and Firefox**, resulting in **16 successful test executions**.

The latest validated execution completed the test suite in approximately **12 seconds**.

### Execution Matrix

| Layer | Scenario | Chromium | Firefox |
|---|---|:---:|:---:|
| API | Retrieve post by ID | ✅ | ✅ |
| API | Create post | ✅ | ✅ |
| API | Validate user contract fields | ✅ | ✅ |
| API | Unknown resource validation | ✅ | ✅ |
| E2E | Add product to cart | ✅ | ✅ |
| E2E | Complete checkout | ✅ | ✅ |
| E2E | Successful login | ✅ | ✅ |
| E2E | Locked user validation | ✅ | ✅ |

---

## CI/CD Pipeline

The project uses **GitHub Actions** to automatically validate the framework.

```text
Checkout repository
        ↓
Setup Node.js
        ↓
Install dependencies
        ↓
Install Playwright browsers
        ↓
TypeScript validation
        ↓
Run automated tests
        ↓
Chromium + Firefox
        ↓
Generate Playwright HTML report
        ↓
Upload report as CI artifact
```

The pipeline validates the TypeScript project before executing the automated suite.

After execution, the Playwright HTML report is uploaded as a GitHub Actions artifact for analysis.

The workflow can also be manually triggered through the **Actions** tab.

The current pipeline status is displayed by the badge at the top of this README.

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

When tests fail, the framework can retain debugging evidence such as:

- Screenshots
- Videos
- Playwright Trace

These artifacts help investigate failures without requiring the scenario to be immediately reproduced locally.

In CI, the HTML report is automatically uploaded as an artifact after the test execution.

---

## Applications Under Test

### SauceDemo

Used for browser-based E2E scenarios covering authentication, shopping cart operations and checkout.

### JSONPlaceholder

Used for API automation scenarios covering HTTP requests, resource creation and response validation.

Both applications are public testing environments and are not affiliated with this project.

---

## Technical Decisions

### Why Playwright?

Playwright provides browser automation, API testing, auto-waiting, tracing and multi-browser capabilities within the same framework.

This allows different test layers to remain under a consistent automation stack.

### Why Page Object Model?

Page Objects keep selectors and page interactions outside the test scenarios.

Instead of coupling tests directly to UI implementation details, scenarios remain focused on expected application behavior.

### Why Fixtures?

Fixtures provide a structured way to share reusable dependencies and setup between tests without duplicating initialization logic.

### Why Cross-Browser Testing?

Executing the same scenarios against multiple browser engines helps identify compatibility issues without maintaining separate test implementations.

The current CI strategy validates the suite against Chromium and Firefox.

### Why GitHub Actions?

Continuous integration ensures the framework can be installed and executed in a clean environment.

This provides additional confidence that successful execution does not depend only on local machine configuration.

It also creates a repeatable validation process for every relevant repository change.

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
- [ ] WebKit execution

---

## Author

**Wesley Coutinho**

QA Engineer | Test Automation

Playwright • Cypress • API Testing • JavaScript • TypeScript • SQL • CI/CD

LinkedIn: https://www.linkedin.com/in/wesleycoutinhoqa/  
GitHub: https://github.com/WesleyCouti
