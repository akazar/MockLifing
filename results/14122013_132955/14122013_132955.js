doctype(5);

html(function() {
  head(function() {
    title("MockLifing");
    meta({
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    });
    return link({
      href: "../../css/bootstrap.min.css",
      rel: "stylesheet"
    });
  });
  return body(function() {
    form(".form-horizontal", function() {
      return fieldset(function() {
        legend("Sign UP");
        div(".form-group", function() {
          label(".col-md-4.control-label", {
            "for": "name"
          }, "Name");
          return div(".col-md-4", function() {
            return input("#name.form-control.input-md", {
              name: "name",
              type: "text",
              placeholder: ""
            });
          });
        });
        div(".form-group", function() {
          label(".col-md-4.control-label", {
            "for": "email"
          }, "Email");
          return div(".col-md-4", function() {
            return input("#email.form-control.input-md", {
              name: "email",
              type: "text",
              placeholder: ""
            });
          });
        });
        div(".form-group", function() {
          label(".col-md-4.control-label", {
            "for": "pass"
          }, "Password");
          return div(".col-md-4", function() {
            return input("#pass.form-control.input-md", {
              name: "pass",
              type: "password",
              placeholder: ""
            });
          });
        });
        div(".form-group", function() {
          label(".col-md-4.control-label", {
            "for": "repass"
          }, "Re-type password");
          return div(".col-md-4", function() {
            return input("#repass.form-control.input-md", {
              name: "repass",
              type: "password",
              placeholder: ""
            });
          });
        });
        div(".form-group", function() {
          label(".col-md-4.control-label", {
            "for": "agree"
          });
          return div(".col-md-4", function() {
            return div(".checkbox", function() {
              return label({
                "for": "agree-0"
              }, function() {
                input("#agree-0", {
                  type: "checkbox",
                  name: "agree",
                  value: 1
                });
                return text(" I agree to the Terms of Use ");
              });
            });
          });
        });
        return div(".form-group", function() {
          label(".col-md-4.control-label", {
            "for": "signup"
          });
          return div(".col-md-8", function() {
            button("#signup.btn.btn-primary", {
              name: "signup"
            }, "Sign Up");
            return button("#more.btn.btn-inverse", {
              name: "more"
            }, "Learn more");
          });
        });
      });
    });
    script({
      src: "https://code.jquery.com/jquery.js"
    });
    return script({
      src: "js/bootstrap.min.js"
    });
  });
});