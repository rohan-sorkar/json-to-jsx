export const formFields = {
  name: {
    id: 1,
    type: "text",
    label: "your username",
    placeholder: "type your username...",
  },
  email: {
    id: 2,
    type: "email",
    label: "enter an email",
    placeholder: "type out an email...",
  },
  password: {
    id: 3,
    type: "number",
    label: "enter your password",
    placeholder: "password...",
  },
  role: {
    id: 7,
    type: 'select',
    label: 'choose your role',
    options: [
      {label: 'Admin', value: 'admin'},
      {label: 'User', value: 'user'}
    ]
  },
  birthday: {
    id: 4,
    type: "date",
    label: "your date of birth"
  },
  file: {
    id: 5,
    type: "file",
    label: "pick a file"
  },
  checkbox: {
    id: 6,
    type: "checkbox",
    label: "accept the terms"
  },
};
