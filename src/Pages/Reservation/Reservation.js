import React from 'react';
import Footer from '../../Molecules/Footer/Footer';
import Header from '../../Molecules/Header/Header';
import PageHeading from '../../Molecules/PageHeading/PageHeading';
import ReservationForm from './ReservationForm';
function Reservation() {
  return (
    <div className="App flex flex-col bg-white">
      <Header></Header>
      <main>
        <PageHeading>Reserve a Table</PageHeading>
        <div className="flex justify-center">
          <div className="flex w-2/4 justify-center">
            <div className="flex w-2/4">
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