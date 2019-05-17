import { loginUser } from '../lib/auth';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value});
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    event.preventDefault();
    loginUser(email, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default LoginForm;
