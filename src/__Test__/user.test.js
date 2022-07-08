import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import '@testing-library/jest-dom'
import store from "../redux/store"
import { BrowserRouter } from "react-router-dom"
import UserProfile from "../component/UserProfile"


const MockCounter = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <UserProfile />
            </Provider>
        </BrowserRouter>
    )
}


it('should fetch and render input elements', async () => {
    render(
        <MockCounter />
    );

    const content = await screen.findByTestId(`user-item-0`)
    expect(content).toBeInTheDocument();
});