import { Dashboard } from "./views/dashboard.jsx"

const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

export function App() {

    return <Router>
        <section className="main-layout app">

            {/* <AppHeader /> */}

            <main className="full main-layout">
                <Routes>
                    <Route element={<Dashboard />} path="/" />

                    {/* <Route element={<About />} path="/about" >
                        <Route element={<AboutIndex />} path="/about" />
                        <Route element={<Team />} path="/about/team" />
                        <Route element={<Vision />} path="/about/vision" />
                    </Route>

                    <Route element={<CarIndex />} path="/car" />
                    <Route element={<CarEdit />} path="/car/edit" />
                    <Route element={<CarEdit />} path="/car/edit/:carId" />
                    <Route element={<CarDetails />} path="/car/:carId" /> */}
                </Routes>
            </main>

            {/* <UserMsg /> */}
        </section>
    </Router>
}