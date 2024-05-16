import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greetings from "./index"

describe('Greetings Component', () => {


  test('renders Hello world as a text.', () => {
    // Arrange
    render(<Greetings />);


    // Act
    // ... nothing


    // Assert
    const helloWorldText = screen.getByText('Hello world!');
    expect(helloWorldText).toBeInTheDocument();

  });


  test('renders changed text if the button was clicked', () => {
    // Arrange
    render(<Greetings />);


    // Act
    const buttonText = screen.getByText('Change Text')
    userEvent.click(buttonText)


    // Assert
    const outputElement = screen.getByText('Changed', { exact: false });
    expect(outputElement).toBeInTheDocument()
  })


  test('renders good to see you if the button was NOT clicked', () => {
    // Arrange
    render(<Greetings />);


    // Act
    // ... nothing


    // Assert
    const seeYouText = screen.getByText("It's good to see you.", { exact: false });
    expect(seeYouText).toBeInTheDocument()
  })


  test('does not render "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greetings />);


    // Act
    const buttonText = screen.getByText('Change Text')
    userEvent.click(buttonText)


    // Assert
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull()

  })

})
