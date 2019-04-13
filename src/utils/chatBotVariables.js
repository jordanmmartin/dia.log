import React from 'react';
import Review from "../Components/Review";

const steps=[
          {
            id: '1',
            message: 'How much do you weigh in lbs?',
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
            message: 'Great! Is this information correct?',
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
            message: 'Would you like to update some field?',
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
            end: true,
          },
        ]

export default steps;
