import React from 'react';
import Review from "../Components/Review";

const steps=[
          {
            id: 'welcome',
            message: "Hello, welcome back! Today, we are going to talk about eating well to prevent or delay type 2 diabetes.",
            trigger: '1'
          },
          {
            id: '1',
            message: 'Please enter your current weight in lbs.',
            trigger: 'weight',
          },
          {
            id: 'weight',
            user: true,
            trigger: '2',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 800) {
                return `Please enter a weight under 800lbs.`;
              }
              return true;
            },
          },
          {
            id: '2',
            message: 'Great!',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update anything?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'weight', label: 'weight', trigger: 'update-weight' },
            ],
          },
          {
            id: 'update-weight',
            update: 'weight',
            trigger: '2',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            // end: true,
            trigger: 'start-curriculum'
          },
          {
            id: 'start-curriculum',
            message: 'Eating well can help you prevent or delay type 2 diabetes. Today, we will talk about: how to eat well, how to build a healthy meal, and the items in each food group',
            trigger: '3'
          },
          {
            id: "3",
            message: 'Let’s start by talking about how to eat well to lower your risk of type 2 diabetes. First of all, you’ll want to choose items that are low in calories. Calories are a measure of energy. You get them from things you eat and drink. Your body burns calories the way a car burns gas. If you want to lose one pound per week, you’ll need to cut about 3,500 calories each week.',
            trigger: '4'
          },
          {
            id: '4',
            message: 'At the same time, you’ll want to choose items that are low in fat. Why would you want to choose items that are low in fat? Fat is high in calories. Plus, fats that are solid at room temperature can harm your heart.',
            trigger: '5'
          },
          {
            id: '5',
            message: 'You’ll also want to choose items that are low in sugar. Why would you want to choose items that are low in sugar? Sweet foods can be high in calories, although not as high as fatty foods. (1 tablespoon white sugar has 48 calories. 1 tablespoon butter has 102 calories.) Plus, sweet foods make your blood sugar go up.',
            trigger: 'quiz-1'
          },
          {
            id: 'quiz-1',
            message: "How many calories do you have to burn to lose one pound?",
            trigger: 'quiz-1-options'
          },
          {
            id: 'quiz-1-options',
            options: [
              {value: 2000, label: '2000', trigger: 'wrong'},
              {value: 1500, label: '1500', trigger: 'wrong'},
              {value: 3500, label: '3500', trigger: 'correct'}
            ]
          },
          {
            id: 'wrong',
            message: 'Wrong answer, try again.',
            trigger: 'quiz-1-options'
          },
          {
            id: 'correct',
            message: "That's correct! Let's move on.",
            end: true
          }
        ]

export default steps;
