export const formStructure = [
  {
    section: "Car Details",
    fields: [
      { label: "Car Name", type: "text", id: "car-name" },
      { label: "Car Model", type: "text", id: "car-model" },
      { label: "Color", type: "text", id: "car-color" },
      { label: "Demand", type: "text", id: "demand" },
      {
        label: "Mileage in Kilometers",
        type: "text",
        id: "mileage-in-kilometers",
      },
      {
        label: "Why are you selling?",
        type: "text",
        id: "why-are-you-selling",
      },
      {
        label: "Transmission",
        type: "radio",
        options: ["Manual", "Automatic"],
        id: "transmission",
      },
    ],
  },
  {
    section: "Condition Assessment",
    fields: [
      {
        label: "Inner Body",
        type: "radio",
        options: ["Original", "Showered"],
        id: "inner-body",
      },
      {
        label: "Outer Body",
        type: "radio",
        options: ["Original", "Showered"],
        id: "outer-body",
      },
      {
        label: "How many pieces are touch-ups?",
        type: "text",
        id: "how-many-pieces-are-touch-ups",
      },
      {
        label: "Has the car been in any accidents?",
        type: "radio",
        options: ["Yes", "No"],
        id: "has-the-car-been-in-any-accidents",
      },
      {
        label: "Suspension Condition",
        type: "radio",
        options: ["Good", "Average", "Bad"],
        id: "suspension-condition",
      },
      {
        label: "When were the Oil last changed?",
        type: "radio",
        options: ["Last month", "3 months ago", "more than 3 months ago"],
        id: "when-were-the-Oil-last-changed",
      },
      {
        label: "Car Pillars Condition",
        type: "radio",
        options: ["Good", "Average", "Bad"],
        id: "car-pillars-condition",
      },
      {
        label: "Doors Condition",
        type: "radio",
        options: ["Good", "Average", "Bad"],
        id: "doors-condition",
      },
      {
        label: "Base/Under Seats Condition",
        type: "radio",
        options: ["Good", "Average", "Rusted"],
        id: "base-under-seats-condition",
      },
      {
        label: "Tyres Condition",
        type: "radio",
        options: ["Good", "Average", "Bad"],
        id: "tyres-condition",
      },
      {
        label: "Battery Status",
        type: "radio",
        options: ["New", "Old"],
        id: "battery-status",
      },
      {
        label: "Power Windows",
        type: "radio",
        options: ["Yes", "No"],
        id: "power-windows",
      },
      {
        label: "Power Steering",
        type: "radio",
        options: ["Yes", "No"],
        id: "power-steering",
      },
      {
        label: "Gear Shifting",
        type: "radio",
        options: ["Smooth", "Average", "Need service"],
        id: "gear-shifting",
      },
      {
        label: "Own Engine",
        type: "radio",
        options: ["Yes", "No"],
        id: "own-engine",
      },
      {
        label: "Any problem with the engine?",
        type: "radio",
        options: ["No", "Yes"],
        id: "engine-problem",
      },
    ],
  },
  {
    section: "Ownership and Documentation",
    fields: [
      {
        label: "CPLC Clear",
        type: "radio",
        options: ["Yes", "No"],
        id: "cplc-clear",
      },
      {
        label: "Current Status of Ownership",
        type: "radio",
        options: ["Open letter", "Registered in your name"],
        id: "ownership-status",
      },
      {
        label: "How long have they owned the car?",
        type: "text",
        id: "ownership-duration",
      },
      { label: "How many owners?", type: "text", id: "owners-count" },
      { label: "File Complete", type: "text", id: "file-complete" },
      {
        label: "Original Number Plate",
        type: "radio",
        options: ["Yes", "No"],
        id: "original-number-plate",
      },
    ],
  },
  {
    section: "Additional Features",
    fields: [
      {
        label: "AC Working Condition",
        type: "radio",
        options: ["Chilled", "Service required", "Not working"],
        id: "ac-condition",
      },
      {
        label: "Car Accessories Included",
        type: "checkbox",
        options: ["Back Camera with LED", "Sound system", "Central locking"],
        id: "car-accessories",
      },
      {
        label: "Drive On",
        type: "radio",
        options: ["CNG", "Petrol", "Both CNG and Petrol"],
        id: "drive-on",
      },
      { label: "Current Average", type: "text", id: "current-average" },
      {
        label: "Tax Updated",
        type: "radio",
        options: ["Yes", "Remaining"],
        id: "tax-updated",
      },
      { label: "Final Remarks", type: "textarea", id: "final-remarks" },
    ],
  },
];
