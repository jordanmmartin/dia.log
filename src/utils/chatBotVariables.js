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
            delay: 1000,
            id: 'start-curriculum',
            message: 'Eating well can help you prevent or delay type 2 diabetes. Today, we will talk about: how to eat well, how to build a healthy meal, and the items in each food group.',
            trigger: '3'
          },
          {
            delay: 4000,
            id: "3",
            message: 'Let’s start by talking about how to eat well to lower your risk of type 2 diabetes. First of all, you’ll want to choose items that are low in calories. Calories are a measure of energy. You get them from things you eat and drink. Your body burns calories the way a car burns gas. If you want to lose one pound per week, you’ll need to cut about 3,500 calories each week.',
            trigger: '4'
          },
          {
            delay: 6000,
            id: '4',
            message: 'At the same time, you’ll want to choose items that are low in fat. Why would you want to choose items that are low in fat? Fat is high in calories. Plus, fats that are solid at room temperature can harm your heart.',
            trigger: '5'
          },
          {
            delay: 4000,
            id: '5',
            message: 'You’ll also want to choose items that are low in sugar. Why would you want to choose items that are low in sugar? Sweet foods can be high in calories, although not as high as fatty foods. (1 tablespoon white sugar has 48 calories. 1 tablespoon butter has 102 calories.) Plus, sweet foods make your blood sugar go up.',
            trigger: 'quiz-1'
          },
          {
            delay: 6000,
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
            trigger: '6'
          },
          {
            delay: 3000,
            id: '6',
            message:'At the same time, you’ll want to choose items that are high in fiber and water. Fiber is a type of carbohydrate that passes through your body without being digested.',
            trigger: '7'
          },
          {
            delay: 5000,
            id: '7',
            message: 'And why would you want to choose items that are high in fiber and water? They fill you up without adding calories.',
            trigger: '8'
          },
          {
            delay: 4000,
            id: '8',
            message: 'Finally, you’ll want to choose items that are high in vitamins, minerals, and protein. Why would you want to choose items that are high in vitamins, minerals, and protein? Your body needs them to be healthy. And many of us don’t get enough of them.',
            trigger: 'quiz-2'
          },
          {
            delay: 6000,
            id: 'quiz-2',
            message: "Quiz time! To prevent type 2 diabetes, you want to limit food items high in which of the following:",
            trigger: 'quiz-2-options'
          },
          {
            id: 'quiz-2-options',
            options: [
              {value: 2000, label: 'calories', trigger: 'correct-2'},
              {value: 1500, label: 'fiber and water', trigger: 'wrong-2'},
              {value: 3500, label: 'vitamins, minerals, and protein', trigger: 'wrong-2'}
            ]
          },
          {
            id: 'wrong-2',
            message: 'Wrong answer, try again.',
            trigger: 'quiz-2-options'
          },
          {
            id: 'correct-2',
            message: "That's correct! Let's move on.",
            trigger: '9'
          },
          {
            id: '9',
            message: 'Now let’s put those ideas into practice. Let’s turn to the handouts that go with this module. Please look at “A Healthy Meal” on page 3.',
            trigger: '10'
          },
          {
            delay: 3000,
            id: '10',
            message: "This picture shows a healthy meal. It’s based on the Create Your Plate idea from the American Diabetes Association.",
            trigger: '11'
          },
          {
            delay: 5000,
            id: '11',
            message: "As you can see, you'll want to make: Half of your plate non-starchy veggies (such as broccoli, lettuce, and peppers), A quarter of your plate grains and starchy foods (such as potatoes and oatmeal), and Another quarter of your plate protein foods (such as chicken, lean meat, and fish)",
            end: true
          }
        ]

export default steps;
