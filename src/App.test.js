import {render,fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './Pages/Home/App';
import Reservation from './Pages/Reservation/Reservation';
import { Provider } from 'react-redux';
import store from "../src/store/store"
// import Reservation from './Pages/Reservation/Reservation'

// test('Renders the BookingForm heading', () => {
//     render(<App />);
//     const headingElement = screen.getByText("Online Menu");
//     expect(headingElement).toBeInTheDocument();
// })


test("check menu reservation link", async () => {
    //render the App component
    render(<App />);
    const resLink = screen.getByTestId("reservation-link")
    fireEvent.click(resLink);


    // save the button in a variable
    const message = await screen.findByText("Reserve a Table"); 
    expect(message).toBeInTheDocument();
  });

  test("Adds a Reservation", async () => {
    //render the App component
    render(
      <Provider store={store}>
          <Reservation />
      </Provider>
    );


    // save the button in a variable
    const btn = screen.getByTestId("reserve-date");
    expect(btn).toBeInTheDocument();

    // click the btn
    fireEvent.click(btn);
    const message = screen.getByTestId("reservation-done");
    // test assumption
    expect(message).toBeInTheDocument();
  });