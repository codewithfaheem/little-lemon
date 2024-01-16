import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Date from "../../Atoms/Form/Date/Date";
import Input from "../../Atoms/Form/Input/Input";
import Select from "../../Atoms/Form/Select/Select";
import Button from "../../Atoms/Button/Button";
import { addReservation } from "../../store/reservationSlice";

const resTimeData = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
const occasions = ['Birthday', 'Anniversary']
const getDate = () => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getYear();
  const day = today.getDay();
  return `${year}/${month}/${day}`
}
function ReservationForm() {
    const reservations = useSelector((state)=>state.reservation.reservations)
    const dispatch = useDispatch();


    const [resDate, setResDate] = useState('getDate()');
    const [numOfGuests, setNumOfGuests] = useState("");
    const [occasion, setOccasion] = useState("Anniversary")
    const [resTime, setResTime] = useState("18:00")

    const createReservation = () => {
      let x = {
        resDate: resDate,
        resTime: resTime,
        guests: numOfGuests,
        occasion:occasion
      }
      dispatch(addReservation(x));
    }

    let freeSlots = resTimeData.filter(
      (time) => !(reservations.find(r => r.resDate == resDate && r.resTime == time))
    )

  return (
    <form className="flex flex-col w-full">
        <Date name="res-date" id="res-date" label="Reservation date" value={resDate} onChange={(e)=>setResDate(e.target.value)} />
        <Select options={freeSlots} name="res-time" id="res-time" label="Reservation time" value={resTime} onChange={(e) => setResTime(e.target.value)}/>
        <Input type="number" name="num-guests" id="num-guests" label="Number of guests" value={numOfGuests} onChange={(e) => setNumOfGuests(e.target.value)}/>
        <Select options={occasions} name="occasion" id="occasion" label="Occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)} />
        <Button className="self-end" onClick={createReservation} data-testid="reserve-date">Reserve</Button>
    </form>
  );
}

export default ReservationForm;