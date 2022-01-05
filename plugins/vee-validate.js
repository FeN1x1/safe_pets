import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("username", {
  ...required
});

extend("message", {
  ...required
});

extend('email', {
  ...required,
  ...email
});