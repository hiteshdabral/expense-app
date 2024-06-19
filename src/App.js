import { CategoriesContainer } from "./components/CategoriesContainer";
import { ExpensesContainer } from "./components/ExpensesContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
    <div className="row">
      <CategoriesContainer/>
    </div>
 <br/>
    <div className="row">
      <ExpensesContainer/>
    </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
