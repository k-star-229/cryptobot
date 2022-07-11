const Validator = require("validator");
const isEmpty = require("is-empty");
 const validatePostsInput = (data) => {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.image = !isEmpty(data.image) ? data.image : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.content = !isEmpty(data.content) ? data.content : "";
  data.tag = !isEmpty(data.tag) ? data.tag : "";
// image checks
  if (Validator.isEmpty(data.image)) {
    errors.image = "Image is required";
  }
// title checks
  if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }
// content checks
  if (Validator.isEmpty(data.content)) {
    errors.content = "Content field is required";
  }
if (Validator.isEmpty(data.tag)) {
    errors.tag = "Tag field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validatePostsInput;