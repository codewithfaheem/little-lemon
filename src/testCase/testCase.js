import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ReservationForm from '../Pages/Reservation/ReservationForm'

test('loads and displays greeting', async () => {
    // ARRANGE
    render(<ReservationForm  />)
  
    // ACT
    // await userEvent.click(screen.getByText('Load Greeting'))
    await userEvent.click(screen.getByRole('button', {
      name:/Reserve/i
    }))
    await screen.findByRole('heading')
  
    // ASSERT
    expect(screen.getByRole('p')).toHaveTextContent('Your reservation is added on')
    // expect(screen.getByRole('button')).toBeDisabled()
  })