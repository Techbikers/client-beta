import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { replace } from "react-router-redux";
import DocumentTitle from "react-document-title";
import forms, { Form } from "newforms";

import { beginPasswordReset } from "auth/actions";
import { clearPasswordResetStatus } from "auth/actions/ui";

import Button from "components/Button";
import requireAnonymity from "auth/containers/requireAnonymity";
import FormField from "components/FormField";

const SendResetLinkForm = Form.extend({
  email: forms.EmailField()
});

const mapStateToProps = state => {
  const { state: authState } = state.auth;
  const isAuthenticated = authState === "authenticated";

  return {
    isAuthenticated,
    resetStatus: state.ui.auth.passwordResetStatus
  };
};

const mapDispatchToProps = {
  replace,
  beginPasswordReset,
  clearPasswordResetStatus
};

class PasswordReset extends Component {
  static propTypes = {
    resetStatus: PropTypes.string,
    replace: PropTypes.func.isRequired,
    beginPasswordReset: PropTypes.func.isRequired,
    clearPasswordResetStatus: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      form: new SendResetLinkForm({ onChange: this.onFormChange })
    };
  }

  onFormChange = () => {
    this.forceUpdate();
  }

  handleResetPassword = event => {
    event.preventDefault();

    const { form } = this.state;

    if (form.validate()) {
      this.props.beginPasswordReset(form.cleanedData.email);
    }
  }

  render() {
    const fields = this.state.form.boundFieldsObj();
    const { resetStatus } = this.props;

    return (
      <DocumentTitle title="Reset Password – Techbikers">
        <section>
          <header>
            <h1>Forgotten Your Password?</h1>
          </header>
          {resetStatus === "emailed" ?
            <div className="content centerText">
              <p className="centerText">
                OK - we've just emailed you a link to reset your password.
              </p>
              <Button onClick={() => this.props.clearPasswordResetStatus()}>Try again</Button>
            </div>
          :
            <div className="content">
              <p className="centerText">
                No problem! Just enter the email address you used to register your account with, click continue,
                and we'll send an email to that address with a link to reset your password.
              </p>
              <form id="resetpassword" role="form" onSubmit={this.handleResetPassword}>
                <div className="row centerText">
                  {Object.keys(fields).map(key =>
                    <FormField key={fields[key].htmlName} field={fields[key]} className="span2 offset2" />
                  )}
                </div>
                <div className="row centerText">
                  <div className="span6">
                    <Button loading={resetStatus === "loading"} kind="positive" type="submit">Continue</Button>
                  </div>
                </div>
              </form>
            </div>
          }
        </section>
      </DocumentTitle>
    );
  }
}
export default requireAnonymity(connect(mapStateToProps, mapDispatchToProps)(PasswordReset));
