const BASE_URL = process.env.REACT_APP_BASE_URL


export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",

  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}


export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}


export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}

export const todoEndpoints = {
  CREATE_DATA_API:BASE_URL + "/createTodo",
  GET_DATA_API:BASE_URL+"/getTodos",
  UPDATE_DATA_API:BASE_URL+"/updateTodo",
  DELETE_DATa_API:BASE_URL+"/deleteTodo",
}