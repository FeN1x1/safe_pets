import { extend } from "vee-validate";
import { required, email, alpha_num } from "vee-validate/dist/rules";

extend("username", {
  ...required
});

extend("establishmentName", {
  ...required
});

extend("address", {
  ...required
});

extend("companyName", {
  ...required
});

extend("companyId", {
  ...required
});

extend("phone", {
  ...required
});

extend("message", {
  ...required
});

extend('email', {
  ...required,
  ...email
});