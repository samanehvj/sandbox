import React from 'react'

class PasswordComponent extends React.Component {
    constructor(props) {
      super(props);
       this.textInput = null;

       //set ref method
       this.setPWRef = element => {
        this.textInput = element;
      };
      //set focus method
       this.focusPWInput = () => {
        if (this.textInput) this.textInput.focus();
      };
    }
     componentDidMount() {
      this.focusPWInput();
    }
     render() {
      return (
        <div>
          <input
            type="password"
            ref={this.setPWRef}
          />
          <input
            type="button"
            value="Focus the password input"
            onClick={this.focusPWInput}
          />
        </div>
      );
    }
  }

  export default PasswordComponent