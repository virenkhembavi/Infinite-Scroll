import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import '@testing-library/jest-dom'
import Counter from "../component/Counter"
import store from "../redux/store"
import { BrowserRouter } from "react-router-dom"


const MockCounter = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Counter />
            </Provider>
        </BrowserRouter>
    )
}


test('should render counter', () => {
    render(
        <MockCounter />
    )

    // const countEl = screen.getByRole("heading", { name: "Counter", exact: false })
    const countEl = screen.getByText("0", { exact: false })
    expect(countEl).toBeInTheDocument()

})


test("button clicked", () => {
    render(
        // const countEl = screen.getByText("0", { exact: false })
        <MockCounter />
    )
    const buttonEl = screen.getByRole("button", { name: "+", exact: false })
    // fireEvent(buttonEl)

    expect(buttonEl).toBeInTheDocument()

})