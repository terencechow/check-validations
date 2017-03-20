## Check Validations

### Description

Simple utility function to take in an array of validations and return the first incorrect one

### Usage

`checkValidations` takes a value and an array of objects containing a validation function and an error message. It will return the first error message it encounters or undefined if there are no errors.

### Example

```
import isEmail from 'validator/lib/isEmail' // <-- separate library
import isEmpty from 'validator/lib/isEmpty' // <-- separate library

import checkValidations from 'check-validations'

const validate = values => {
  const errors = {}
  const usernameErrors = checkValidations(values.username,
    [
      { validate: isEmpty, msg: 'Cannot be blank' },
      { validate: isEmail, msg: 'Please provide a valid email' }
    ])  
  if (usernameErrors) errors.username = usernameErrors
  return errors
}
```

Will return `Cannot be Blank` when `values.username` is blank, and `Please provide a valid email` if `values.username` is not a valid email.
