const layout = require('./layoutadmin');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
  return layout({
    content: `


    <div class="container-fluid shadow color-change-5x  text-center"id="sign">
    <div class="row px-5 py-5 justify-content-center align-items-center">
        <div class="col-6 .bg-pan-top mx-5 mx-5  ">
        <form method="POST">
          <h1 class="title">Sign in</h1>
          <div class="field">
            <label class="label">Email</label>
            <input required class="input" placeholder="Email" name="email" />
            <!-- <p class="help is-danger">${getError(errors, 'email')}</p> -->
          </div>
          <div class="field">
            <label class="label">Password</label>
            <input required class="input" placeholder="Password" name="password" type="password" />
            <!-- <p class="help is-danger">${getError(errors, 'password')}</p> -->
          </div>
          <div class="field">
          <label class="label">Password Confirmation</label>
          <input required class="input" placeholder="PasswordConfirmation" name="passwordConfirmation" type="password" />
          <p class="help is-danger">${getError(errors,
            'passwordConfirmation'
          )}</p>
        </div>
          <button class="button is-primary">Submit</button>
        </form>
        <a href="/signup">Need an account? Sign Up</a>
      <!-- </div> -->
    </div>    
</div>
</div>


    `
  });
};
