import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditDonates } from "./store/action/donates";

const EditDonates = () => {
    let donatesForEdit = useSelector(state => state.selectedDonatesForEdit);
    let disp = useDispatch();
    let { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: donatesForEdit
    })

    const saveDetails = (data) => {
     console.log(data);
       
        disp(saveEditDonates(data))

    }
    return (<form onSubmit={handleSubmit(saveDetails)}>

        <label>שם</label>
        <input {...register("name", { minLength: 3 })} />
        {errors.name && <span>שם לא תקין</span>}

        <label>סכום</label>
        <input {...register("sum")} />

        <label>הקדשה</label>
        <input {...register("dedication")} />

        <input type="submit" />

    </form>);
}

export default EditDonates;

