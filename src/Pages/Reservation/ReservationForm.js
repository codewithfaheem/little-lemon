import React from "react";
import Date from "../../Atoms/Form/Date/Date";
import Input from "../../Atoms/Form/Input/Input";
import Select from "../../Atoms/Form/Select/Select";

function ReservationForm() {
    const resTimeData = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  return (
    <form className="w-full">
        <Date name="res-date" id="res-date" label="Reservation date" />
        <Select options={resTimeData} name="res-time" id="res-time" label="Reservation time" />
        <Input name="res-time" id="res-time" label="Reservation time" />
    </form>
  );
}

export default ReservationForm;