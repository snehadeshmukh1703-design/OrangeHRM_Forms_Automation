# OrangeHRM Form & User Interaction Automation

## Project Overview

This project demonstrates automated UI testing of the OrangeHRM HR Management application using JavaScript and Playwright.

The project focuses on employee management, form validation, user interactions, file uploads, and leave date filtering.

**Application:** https://opensource-demo.orangehrmlive.com/

## Tech Stack

- JavaScript
- Playwright
- Node.js
- Visual Studio Code
- Git & GitHub
- Chromium Browser
- Jenkins (CI Pipeline)

## Automated Test Cases

| Test ID | Test Scenario | Skills Demonstrated |
|---|---|---|
| TC01 | Mandatory Employee Field Validation | Negative testing, form validation |
| TC02 | Create Login Details Toggle | Toggle handling, visibility assertions |
| TC03 | Add New Employee | Dynamic test data, form submission |
| TC04 | Employee Search and Reset | Search filtering, table assertions |
| TC05 | Job Title Dropdown | Custom dropdown selection |
| TC06 | Employee Profile Photo Upload | File upload, file validation |
| TC07 | Leave Date Filtering | Date inputs, network response validation |

## Key Automation Skills

- Playwright locators and assertions
- Positive and negative test scenarios
- Form input validation
- Dropdown and toggle interactions
- Dynamic test data generation
- File upload using `setInputFiles()`
- Date filter handling
- Network response verification
- Sequential test execution
- HTML reports and debugging with traces

## Project Structure

- `tests/` — Individual Playwright test files
- `test-data/` — Sample image for file upload
- `playwright.config.js` — Test configuration
- `package.json` — Project dependencies
- `.gitignore` — Files excluded from version control
- `Jenkinsfile` — Jenkins CI pipeline configuration

## Installation and Setup

**1. Clone the repository**

Clone this GitHub repository and open the project folder in VS Code.

**2. Install dependencies**

`npm install`

**3. Install Playwright Chromium**

`npx playwright install chromium`

## Running Tests

**Run all tests:**

`npx playwright test --project=chromium`

**Run tests with a visible browser:**

`npx playwright test --headed`

**Run a specific test:**

`npx playwright test tests/add-employee.spec.js --headed`

**Generate and open HTML report:**

`npx playwright show-report`

## Test Configuration

The Playwright configuration includes:

- Chromium browser
- Sequential execution using one worker
- 40-second test timeout
- HTML reporting
- Screenshots on failure
- Videos and traces retained on failure

## Test Execution Results

**Latest verified local execution: 7 tests passed.**

The test suite successfully completed all seven planned scenarios during local execution.

## Important Notes

- Tests run against the public OrangeHRM demonstration environment.
- The employee creation test generates unique test data.
- The photo upload test validates file selection without saving an employee.
- The public demo may occasionally experience server delays or unavailable features.
- Test execution reports are excluded from Git using `.gitignore`.

## Jenkins CI Integration

Integrated Playwright automation tests with Jenkins using a Jenkinsfile.

- Configured a Jenkins pipeline for automated test execution.
- Installed project dependencies using `npm ci`.
- Installed the Chromium browser for Playwright.
- Executed Playwright tests sequentially with one worker.
- Archived Playwright HTML reports and test artifacts.
- Verified successful test execution through Jenkins build results.

### Jenkins Pipeline Stages
1. Install Dependencies
2. Install Chromium
3. Run Playwright Tests

## Future Enhancements
- Reusable authentication fixtures
- Cross-browser test execution
- Improved test data management
- Additional negative testing scenarios

## Project Purpose

This project was developed as part of a hands-on automation testing portfolio to demonstrate practical Playwright skills through real-world form and user interaction scenarios.


## Test Execution Report

Total Tests: 7
Passed: 7
Failed: 0

[Download All 7 Test Reports](reports/OrangeHRM_Report.zip)


### Stability Test Results

- Total automation scenarios: 7
- Stability executions: 14
- Passed: 14
- Failed: 0
- Pass rate: 100%
- Browser: Chromium
- Execution: Sequential, without retries
