import { Dashboard } from "./views/dashboard.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

export function App() {

    return <Router>
        <section className="main-layout app">
            <main className="full main-layout">
                <Routes>
                    <Route element={<Dashboard />} path="/" />
                </Routes>
            </main>
        </section>
    </Router>
}