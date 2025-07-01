

1. Install Dependencies
npm init -y
npm install -D typescript ts-node @types/node
npx tsc --init
2. Install Playwright and OpenAI SDK
npm install -D playwright
npx playwright install
npm install openai
3. Open .env file and change the value to chatgpt secret key
4. Open the file on vscode 
5. Open testcase.json under Data folder
6. Edit Test cases (these are the testcases that will be feeded to chatgpt in which chatgpt convert it to playwright typescript and execute it)
7. Open VS code terminal
8. To execute, input npx playwright test