const loginSuccess = {
  email: "admin@admin.com",
  password: "secret_admin",
};

const loginFailure = {};

const emptyFields = {
  message: "All fields must be filled",
};

const incorrectFields = {
  message: "Incorrect email or password",
};

const incorrectEmail = {
  email: "alguem@email.com",
  password: "secret_user",
};

const incorrectPassword = {
  email: "user@user.com",
  password: "incorrect_password",
};

export { loginSuccess, loginFailure, emptyFields, incorrectEmail, incorrectFields, incorrectPassword };