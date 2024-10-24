import React, { useState } from "react";
import parse from "html-react-parser";
import "./App.css";
import { formStructure } from "./constants";

function App() {
  const [payload, setPayload] = useState();
  const [recommendation, setRrecommendation] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChange = (e, key) => {
    const { value } = e.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [key]: value,
    }));
  };

  const run = async () => {
    setLoader(true);
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are a car inspector, and based on the JSON data, you will suggest whether I should buy this car or not in HTML structure like heading and content.",
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: "I have some details about a car that I am considering purchasing. Based on the information provided, I need you to evaluate whether it is a good purchase or not. Please provide a detailed analysis of the car's condition, history, and any potential issues or advantages. Mention Positive Aspects with Car Model and Mileage, Transmission, Body Condition, Mechanical Aspects, Legal and Documentation and Negative Aspects with Exterior Condition, Suspension and Pillars, Base Condition, Tyres Condition, Lack of Features, Ownership History, Tax Status and Summary with Pros and Cons and Recommendation and what should be the current market price of the car based on the condition. Here are the details",
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(JSON.stringify(payload));
    setRrecommendation(result.response.text());
    setLoader(false);
  };

  const {
    GoogleGenerativeAI,
    // HarmCategory,
    // HarmBlockThreshold,
  } = require("@google/generative-ai");

  const apiKey = "AIzaSyAziDfdgGalz386wVKSblkfoyREfUey-YA"; // use your own
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  return (
    <div className="App">
      <header className="App-header">
        {loader && (
          <div className="loader-wrapper">
            <h1 className="loading">Loading...</h1>
          </div>
        )}
        <h1>Car Pre-Inspection Form</h1>
        <div className="form-container">
          {formStructure.map((section) => (
            <div className="section" key={section.section}>
              <h2>{section.section}</h2>
              {section.fields.map((field) => (
                <div className="form-item-template" key={field.id}>
                  <label>{field.label}</label>
                  {field.type === "text" && (
                    <input
                      type="text"
                      onChange={(e) => handleChange(e, field.id)}
                    />
                  )}
                  {field.type === "textarea" && (
                    <textarea onChange={(e) => handleChange(e, field.id)} />
                  )}
                  {field.type === "radio" &&
                    field.options.map((option) => (
                      <label key={option}>
                        {option}
                        <input
                          type="radio"
                          name={field.id}
                          value={option}
                          onChange={(e) => handleChange(e, field.id)}
                        />
                      </label>
                    ))}
                  {field.type === "checkbox" &&
                    field.options.map((option) => (
                      <label key={option}>
                        {option}
                        <input
                          type="checkbox"
                          value={option}
                          onChange={(e) => handleChange(e, field.id)}
                        />
                      </label>
                    ))}
                </div>
              ))}
            </div>
          ))}
          <div className="section">
            <h1>Car Analysis</h1>
            <div>{parse(recommendation)}</div>
          </div>
        </div>
        <button onClick={run}>Submit</button>
      </header>
    </div>
  );
}

export default App;
