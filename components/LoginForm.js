import { loginUser } from '../lib/auth';
import Router from 'next/router';

class LoginForm extends React.Component {
  state = {
    email: 'Lucio_Hettinger@annie.ca',
    password: 'demarco.info',
    error: '',
    isLoading: false,
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value});
  }

  handleSubmit = event => {
    const { email, password } = this.state;

    event.preventDefault();
    this.setState({ error: '', isLoading: true });
    loginUser(email, password).then(() => {
      Router.push('/profile');
    }).catch(this.showError);
  }

  showError = err => {
    console.log(err);
    const error = err.response && err.response.data || err.message;
    this.setState({ error, isLoading: false })
  }

  render() {
    const { email, password, error, isLoading } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>Submit</button>
        {
          error && <div>{error}</div>
        }
      </form>
    )
  }
}

export default LoginForm;
