// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
// import { addStudentToArray, expelStudent } from './helpers/studentData';
// import renderToDOM from './helpers/renderToDom';
import initialScreen from './components/initialScreen';
import domEvents from './helpers/domEvents';

const init = () => {
  initialScreen();
  domEvents();
};

init();
