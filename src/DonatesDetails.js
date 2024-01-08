import { useSelector } from "react-redux";

const DonatesDetails = () => {
    let donates= useSelector(state => state.selectedDonates)
    return (<div className="">
    : פרטי התרומה הנבחרת
        <h1>{donates.name}</h1>
        <h2>{donates.sum}</h2>
        <h2>{donates.dedication}</h2>
    </div>);
}

export default DonatesDetails;

