import { Crossword } from './components/crossword';
import { simulateInput } from './simulateUserInput';
import '../styles/main.scss';
const crossword = new Crossword();
crossword.start();
simulateInput();
