# ChatGPT clone

A React front end that sends a prompt to the OpenAI API and shows the reply. You pick a task from the option list, type a prompt, and the response is rendered on the page.

## Stack

Create React App, React Router, Ant Design, and the OpenAI Node client.

## Layout

- `src/AIOptions/options.js` — task choices
- `src/components/OptionSelection.jsx` — the picker
- `src/components/AIResponse.jsx` — prompt and reply
- `src/App.js` — reads `process.env.API_KEY` and calls the API

## Run locally

Create a `.env` file in the project root with your own key:

```bash
API_KEY=your_openai_key
```

Then:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). `npm run build` writes a production bundle to `build/`.

Do not commit the API key.
