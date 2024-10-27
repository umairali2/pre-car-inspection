# `Getting Started`

`Prerequisites`

`Google Generative AI API Key:` You need a valid Google API key to access the generative AI service.\
`Node.js:` Ensure Node.js is installed.

### `Installation`

`Clone the repository`\
```
git clone <your-repo-url>\
cd <your-repo-folder>
```
`Install dependencies:`
```
npm install
```

`Add your Google API key.`\
Run the app and input the API key when prompted.\

`Start the app:`
```
npm start
```
### Usage
- `Enter your Google API Key:` The form becomes available only after submitting a valid API key.\
- `Fill in the Car Details:` Complete all sections of the form with relevant information about the car.\
- `Submit for Analysis:` Press the Submit button to get a detailed recommendation.\
- `Review the Results:` The app will display a comprehensive evaluation, including pros, cons, and a suggested price.\

### Code Structure
- `App.js:` The main React component managing the form, user input, and API interaction.
- `formStructure:` Defines the fields used in the car pre-inspection form.
- `Google Generative AI Integration:` Uses the @google/generative-ai package to communicate with Google’s Gemini model.
