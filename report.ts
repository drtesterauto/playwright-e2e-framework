import report from 'multiple-cucumber-html-reporter';

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'macOS'
    }
  },
  customData: {
    title: 'Test Execution Info',
    data: [
      { label: 'Project', value: 'Playwright BDD Framework' },
      { label: 'Environment', value: 'QA' },
    ]
  }
});