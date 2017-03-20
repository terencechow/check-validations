export default function checkValidations (value, validations) {
  for (var i = 0; i < validations.length; i++) {
    if (!validations[i].validate(value)) return validations[i].msg
  }
}
