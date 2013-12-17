doctype 5
html ->
  head ->
    title "MockLifing"
    meta name: "viewport", content: "width=device-width, initial-scale=1.0"
    link href: "../../css/bootstrap.min.css", rel: "stylesheet"
  body ->
    form ".form-horizontal", ->
      fieldset ->
        legend "Sign UP"
        div ".form-group", ->
          label ".col-md-4.control-label", for: "name", "Name"
          div ".col-md-4", ->
            input "#name.form-control.input-md", name: "name", type: "text", placeholder: ""
        div ".form-group", ->
          label ".col-md-4.control-label", for: "email", "Email"
          div ".col-md-4", ->
            input "#email.form-control.input-md", name: "email", type: "text", placeholder: ""
        div ".form-group", ->
          label ".col-md-4.control-label", for: "pass", "Password"
          div ".col-md-4", ->
            input "#pass.form-control.input-md", name: "pass", type: "password", placeholder: ""
        div ".form-group", ->
          label ".col-md-4.control-label", for: "repass", "Re-type password"
          div ".col-md-4", ->
            input "#repass.form-control.input-md", name: "repass", type: "password", placeholder: ""
        div ".form-group", ->
          label ".col-md-4.control-label", for: "agree"
          div ".col-md-4", ->
            div ".checkbox", ->
              label for: "agree-0", ->
                input "#agree-0", type: "checkbox", name: "agree", value: 1
                text " I agree to the Terms of Use "
        div ".form-group", ->
          label ".col-md-4.control-label", for: "signup"
          div ".col-md-8", ->
            button "#signup.btn.btn-primary", name: "signup", "Sign Up"
            button "#more.btn.btn-inverse", name: "more", "Learn more"
    script src: "https://code.jquery.com/jquery.js"
    script src: "js/bootstrap.min.js"