# Car Inspection Assistant

This React app helps users evaluate a car's condition and decide whether it's a good purchase. By filling out the pre-inspection form with key car details, the app uses Google Generative AI to provide an automated recommendation along with a detailed analysis of the vehicle’s condition, highlighting positive and negative aspects.

## Demo
```
https://umairali2.github.io/pre-car-inspection/ 
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

### Example Fields
- `Car Details:` Name, model, color, mileage, and transmission.
- `Condition Assessment:` Inner/outer body, accident history, tyres, battery status, and mechanical health.
- `Ownership and Documentation:` CPLC status, ownership history, and original number plate.
- `Additional Features:` AC condition, accessories, drive mode, and tax status.

### Dependencies
- React
- @google/generative-ai
- html-react-parser

### Contributing
Feel free to submit a pull request or open an issue to suggest improvements.

### Contact
For any queries, please contact Syed Umair Ali sayedumairali@gmail.com.
