import logo from './logo.svg';
import './App.css';
import DonatesList from './DonatesList';
import DonatesDetails from './DonatesDetails';
import { useSelector } from 'react-redux';
import EditDonates from './EditDoanates';

function App() {
  let selected = useSelector(state => state.selectedDonates)
  let selectedForEdit = useSelector(state => state.selectedDonatesForEdit)


  return (<>
 
   <DonatesList/>
   {selected && <DonatesDetails />}
   {selectedForEdit&&<EditDonates/>}
   </>
  );
}

export default App;
