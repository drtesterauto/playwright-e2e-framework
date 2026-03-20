# 🧪 Playwright E2E Automation Framework (POM + Fixtures)

## 📌 Overview

This project is an end-to-end (E2E) test automation framework built using **Playwright** with:

* ✅ Page Object Model (POM)
* ✅ Custom Fixtures (for reusable setup)
* ✅ Clean and scalable architecture
* ✅ Data-driven testing

The goal is to demonstrate **maintainable, readable, and production-ready test automation**.

---

## 🚀 Features

* 🔹 Modern Playwright test runner
* 🔹 Page Object Model (POM) design
* 🔹 Custom fixtures for login handling
* 🔹 Reusable test data (constants)
* 🔹 Clear and business-readable test flows
* 🔹 Scalable structure for real-world projects

---

## 📂 Project Structure

```
project-root/
│
├── tests/
│   └── e2e.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductListingPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── constants/
│   ├── userdata.ts
│   └── checkoutData.ts
│
├── playwright.config.ts
└── README.md
```

---

## 🧱 Architecture

### 🔹 Page Object Model (POM)

Each page contains:

* Selectors
* Actions
* Assertions

Example:

* `ProductListingPage` → product actions
* `CartPage` → cart interactions
* `CheckoutPage` → checkout flow

---

### 🔹 Fixtures

Custom fixture:

```
loggedInPage
```

Handles:

* Navigation to the app
* User login

👉 This removes repeated setup from tests and keeps them clean.

---

## 🧪 Example Test Flow

```
User logs in
→ Adds product to cart
→ Navigates to cart
→ Proceeds to checkout
→ Completes purchase
→ Verifies success
```

---

## ⚙️ Installation

```bash
npm install
npx playwright install
```

---

## ▶️ Run Tests

```bash
npx playwright test
```

Run specific file:

```bash
npx playwright test tests/e2e.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

---

## 📊 Parallel Execution

Playwright runs tests in parallel by default.

You can configure workers in:

```
playwright.config.ts
```

---

## 🧠 Best Practices Applied

* ✔️ Separation of concerns (POM)
* ✔️ Reusable test setup (fixtures)
* ✔️ Clean and readable test scenarios
* ✔️ No hardcoded values (data-driven)
* ✔️ Scalable structure

---

## 🔜 Next Improvements

* 🔹 BDD integration (Cucumber + feature files)
* 🔹 CI/CD with GitHub Actions
* 🔹 Reporting (Allure / HTML reports)
* 🔹 Cross-browser testing enhancements

---

## 👨‍💻 Author

QA Automation Engineer specialized in:

* Playwright
* Test Architecture
* E2E Automation
* Agile & QA Strategy

---

## ⭐ Notes

This project is designed to demonstrate **real-world QA automation practices** suitable for freelance and enterprise environments.
