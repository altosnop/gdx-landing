const name = (name: string): string => {
  let error = ''
  if (!/^[a-zA-Z]+$/.test(name)) {
    error = 'Name field cannot contain numbers or symbols'
  }
  if (!name) {
    error = "Name field can't be empty"
  }
  return error
}

const password = (password: string): string => {
  let error = ''
  if (password.length < 8) {
    error = 'Password must be at least 8 characters'
  }
  if (!password) {
    error = "Password field can't be empty"
  }
  return error
}

const email = (email: string): string => {
  let error = ''
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error = 'Incorrect email address'
  }
  if (!email) {
    error = "Email field can't be empty"
  }
  return error
}

const checkbox = (agreed: boolean): string => {
  let error = ''
  if (!agreed) {
    error = 'Agree all policies before proceed'
  }
  return error
}

export default {
  name,
  password,
  email,
  checkbox,
}
