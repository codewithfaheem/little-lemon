import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../Molecules/Footer/Footer';
import Header from '../../Molecules/Header/Header';
import PageHeading from '../../Molecules/PageHeading/PageHeading';
import ReservationForm from './ReservationForm';
function Reservation() {
  const reservation = useSelector((state)=>state.reservation.reservations.at(-1))
  const isResAdded = useSelector((state)=>state.reservation.resAdded)
  console.log(reservation)
  return (
    <div className="App flex flex-col min-h-screen bg-white">
      <Header></Header>
      <main className="flex-1">
        <PageHeading>Reserve a Table</PageHeading>
        <div className="flex justify-center pt-10">
          <div className="flex w-3/4 justify-center">
            <div className="flex flex-col w-2/4">
              {isResAdded &&
                <div data-testid="reservation-done" className="mb-10 p-3 bg-secondaryTwo text-black">
                  <p className=''>Your reservation is added on {reservation.resDate} at {reservation.resTime}.</p>
                </div>
              }
              <ReservationForm></ReservationForm>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Reservation;