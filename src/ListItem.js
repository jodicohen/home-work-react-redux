import { useDispatch } from "react-redux";
import { deleteDonates, selectDonatesForEdit, selectDonates } from "./store/action/donates";

const ListItem = ({ one }) => {
    //useSelector מיועד לשליפת נתונים מהסטייט הכללי

    let dispatch = useDispatch()//מיועד לשליחת פעולה שקרתה באתר לרידוסר

    return (<div>
        <h3>{one.name}</h3>
        <input type="button" onClick={() => { dispatch(deleteDonates(one.id)) }} value="מחק אותי" />
        <input type="button" onClick={() => { dispatch(selectDonatesForEdit(one)) }} value="ערוך" />
        <input type="button" onClick={() => {dispatch(selectDonates(one))}} value="הצג פרטים" />
        {/* <input type="button" onClick={() => { dispatch({ type: "SELECT_SONG_TO_PLAY", payload: one }) }} value="הצג פרטים" /> */}
    </div>);
}

export default ListItem;
