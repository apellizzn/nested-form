import ReactOnRails from 'react-on-rails';
import UserForm from './components/UserForm';

// Set CSRF token
ReactOnRails.authenticityToken();

ReactOnRails.register({ UserForm });
