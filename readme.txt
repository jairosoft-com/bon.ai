

INSTALLATION

1. Installation
npm init -y
npm install
npm install @playwright/test
npx playwright intsall
npm install -D typescript ts-node @types/node
npx tsc --init
brew install allure
npm install -D playwright
npm install openai
3. Open .env.local file and change the value to chatgpt secret key, remove the .example extention
4. Open testcase.json under Data folder
5. Edit Test cases (these are the testcases that will be feeded to chatgpt in which chatgpt convert it to playwright typescript and execute it)


EXECUTION
First time EXECUTION
 - npx ts-node generaterun.ts
    - This will call openAI to geenrate playwright script base on testcase.json. After creating it will automatically execute the script and generate a report

Suceeding EXECUTION
- npx ts-node executeandreport.ts
    - This will reexecute the existing script and create a report

FAQ
1. What if there is an update on the testcases?
 - If there is an additional or an update on the current testcase.json, delete the current all-testspec.ts and generate a new one by running "npx ts-node generaterun.ts"

2. How to open the report?
 - For the latest execution, the report can be open using "allure open allure-report"

3. How to open past report?
 - For old report execution, the report can be open using "npx allure open ./allure-history/FILENAME"