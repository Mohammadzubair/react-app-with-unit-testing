import { render, screen } from "@testing-library/react"
import Async from "."

describe('Async component', () => {

  test('renders posts if request succeeds', async () => {

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "This is the first post" }]
    });


    // Arrange
    render(<Async />)


    // Act
    // .. nothing


    // Assert
    const listElement = await screen.findAllByRole('listitem')
    expect(listElement).not.toHaveLength(0)

  })
})