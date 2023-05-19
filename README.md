# E2E PLAYWRIGHT

## Installation

install yarn (Skip if already installed)

```bash
npm install -g yarn
```

install libraries

```bash
yarn install
```

install supported browsers (Chromium, Firefox, Webkit)

```
yarn playwright install
```

## Usage

```bash
yarn playwright test
yarn playwright test tests --project=chromium --headed --workers=5
```

Dev env

```bash
RUN_ENVIRONMENT=dev yarn playwright test
```

Prod env

```bash
RUN_ENVIRONMENT=prod yarn playwright test
```

For local use, you can create `.env` files to specify some environment variables.

.env

```bash
RUN_ENVIRONMENT = "dev"
DEBUG=pw:api
```

## Playwright Test for VS Code

ref: https://playwright.dev/docs/getting-started-vscode

## Project Directories

```text
.
├── config    // 不同环境配置文件
│   └── dev.json
├── constants       // 不同环境常量数据
│   └── dev
│       └── users.json
├── pages    // POM
│   └── login
│       └── login.page.ts
├── tests    // 测试用例
│   ├── example.spec.ts
│   ├── global.setup.ts    // 预登陆
│   ├── login
│   │   └── login.spec.ts
│   ├── types.ts
│   └── utils.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── yarn.lock
```

## Playwright Docs

### POM (Page Object Models)

ref: https://playwright.dev/docs/pom

### Command Line

ref: https://playwright.dev/docs/running-tests#command-line

```bash
yarn playwright test
yarn playwright test tests --headed --project=chromium --workers=1
```

```bash
yarn playwright show-report
yarn playwright show-report --port 9999
```

### Test Generator

ref: https://playwright.dev/docs/codegen-intro

```bash
yarn playwright codegen playwright.dev
```

### Locators

ref: https://playwright.dev/docs/locators

| Action                                                                                        | Description                          |
| --------------------------------------------------------------------------------------------- | ------------------------------------ |
| [page.getByRole()](https://playwright.dev/docs/api/class-page#page-get-by-role)               |                                      |
| [page.getByLabel()](https://playwright.dev/docs/api/class-page#page-get-by-label)             |                                      |
| [page.getByPlaceholder()](https://playwright.dev/docs/api/class-page#page-get-by-placeholder) |                                      |
| [page.getByText()](https://playwright.dev/docs/api/class-page#page-get-by-text)               |                                      |
| [page.getByAltText()](https://playwright.dev/docs/api/class-page#page-get-by-alt-text)        |                                      |
| [page.getByTitle()](https://playwright.dev/docs/api/class-page#page-get-by-title)             |                                      |
| [page.getByTestId()](https://playwright.dev/docs/api/class-page#page-get-by-test-id)          | testing stub, default: `data-testid` |
| [page.locator()](https://playwright.dev/docs/api/class-page#page-locator)                     | CSS、XPath                           |

---

### Actions

ref: https://playwright.dev/docs/input

| Action                                                                                           | Description                             |
| ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| [locator.check()](https://playwright.dev/docs/api/class-locator#locator-check)                   | Check the input checkbox                |
| [locator.click()](https://playwright.dev/docs/api/class-locator#locator-click)                   | Click the element                       |
| [locator.uncheck()](https://playwright.dev/docs/api/class-locator#locator-uncheck)               | Uncheck the input checkbox              |
| [locator.hover()](https://playwright.dev/docs/api/class-locator#locator-hover)                   | Hover mouse over the element            |
| [locator.fill()](https://playwright.dev/docs/api/class-locator#locator-fill)                     | Fill the form field (fast)              |
| [locator.focus()](https://playwright.dev/docs/api/class-locator#locator-focus)                   | Focus the element                       |
| [locator.press()](https://playwright.dev/docs/api/class-locator#locator-press)                   | Press single key                        |
| [locator.setInputFiles()](https://playwright.dev/docs/api/class-locator#locator-set-input-files) | Pick files to upload                    |
| [locator.selectOption()](https://playwright.dev/docs/api/class-locator#locator-select-option)    | Select option in the drop down          |
| [locator.type()](https://playwright.dev/docs/api/class-locator#locator-type)                     | Type text character by character (slow) |

---

### Assertions

ref: https://playwright.dev/docs/test-assertions

| Assertion                                                                                                                         | Description                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [expect(locator).toBeChecked()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-checked)         | Checkbox is checked               |
| [expect(locator).toBeEnabled()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-enabled)         | Control is enabled                |
| [expect(locator).toBeVisible()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible)         | Element is visible                |
| [expect(locator).toContainText()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-contain-text)     | Element contains text             |
| [expect(locator).toHaveAttribute()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-attribute) | Element has attribute             |
| [expect(locator).toHaveCount()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-count)         | List of elements has given length |
| [expect(locator).toHaveText()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-text)           | Element matches text              |
| [expect(locator).toHaveValue()](https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-have-value)         | Input element has value           |
| [expect(page).toHaveTitle()](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-title)                  | Page has title                    |
| [expect(page).toHaveURL()](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-url)                      | Page has URL                      |
| [expect(page).toHaveScreenshot()](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1)      | Page has screenshot               |

---
