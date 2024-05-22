import { fireEvent, render, screen } from "@testing-library/react"
import OnChangeEvent from "./index"


describe("On change event component text checking", () => {
  test('The onChangeEvent testing', () => {
    render(<OnChangeEvent />)
    const onChangeTest = screen.getByText(/The on change event/i)
    expect(onChangeTest).toBeInTheDocument()
  })
})


describe("On change event input event checking", () => {
  test('The onChangeEvent input field testing', () => {
    render(<OnChangeEvent />)
    let input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "a" } })
    expect(input.value).toBe("a")
  })
})
