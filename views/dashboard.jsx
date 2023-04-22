import { Modal } from "../cmps/modal.jsx"

const { useEffect, useState, useRef } = React

export function Dashboard() {

    const [openModal, setOpenModal] = useState(false)
    const [isTrue, setIsTrue] = useState(true)
    // const refAppClicked = useRef(null)

    useState(() => {
        // setIsOpened(true)
        // setIsOpened(false)
    }, [openModal])

    return <section className="app" onClick={() => setOpenModal(true)}>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <section className="nav-bar">
            <div className="top-nav-bar">
                <div>Arbox</div>
                <div>img</div>
                <div>CrossFit</div>
            </div>
            <div>Home</div>
            <div>Schedule</div>
            <div>Task</div>
            <div>Reports</div>
            <div>Leads</div>
            <div>Finance</div>
            <div>Message Center</div>
            <div>Insigns</div>
            <div>Digital Forms</div>
            <div>Logbook</div>
            <div>Settings</div>
        </section>
        <section className="layout">
            <section className="container-dashboard">
                <div className="info-user">info user</div>
                <div className="heading">DashBoard</div>
                <div className="container-dashboard-info">
                    <section className="dashboard-info">
                        <div className="booking-card">
                            <div className="heading-card">
                                <div>Booking</div>
                                <div>&^&^</div>
                            </div>
                            <div>25</div>
                            <div>This week</div>
                        </div>
                        <div className="sales-card">
                            <div className="heading-card">
                                <div>Sales</div>
                                <div>logo</div>
                            </div>
                            <div>1000</div>
                            <div>This week</div>
                        </div>
                        <div className="my-tasks-today">
                            <div className="heading-card">
                                <div>My Tasks today</div>
                                <div>logo</div>
                            </div>
                            <div className="schedule">
                                <div className="time">
                                    <div>6 am</div>
                                    <div>7 am</div>
                                </div>
                                <div className="tasks">
                                    <div className="task important">
                                        <div className="sub-heading task">
                                            <div className="hour">
                                                11:00 | Member's name
                                            </div>
                                            <div>
                                                alarm
                                            </div>
                                        </div>
                                        <div>Collect Money</div>
                                    </div>
                                    <div className="task important">
                                        <div className="sub-heading task">
                                            <div className="hour">
                                                11:00
                                            </div>
                                            <div>
                                                alarm
                                            </div>
                                        </div>
                                        <div>Handle Reciepts</div>
                                    </div>
                                    <div className="task regular">
                                        <div className="hour">
                                            11:30 | Member's name
                                        </div>
                                        <div>Collect Money</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular-service-container">
                            <div className="heading-container">
                                <div className="heading">
                                    popular-service
                                </div>
                                <div> icon</div>
                            </div>
                            <div className="info-container">
                                <div>
                                    <div>green</div>
                                    <div>Men Haircur</div>
                                    <div>65%</div>
                                </div>
                                <div>
                                    <div>red</div>
                                    <div>Beard Trimming</div>
                                    <div>13%</div>
                                </div>
                                <div>
                                    <div>purpule</div>
                                    <div>Men Haircur + Beard</div>
                                    <div>12%</div>
                                </div>
                                <div>
                                    <div>blue</div>
                                    <div>Women Haircur</div>
                                    <div>3%</div>
                                </div>
                                <div>
                                    <div>yellow</div>
                                    <div>Handle Reciepts</div>
                                    <div>2%</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="top-appointment-types">
                        <div className="heading-container">
                        <div className="heading">
                        popular-service
                        </div>
                        <div> icon</div>
                        </div>
                        <div>
                        circle
                        </div>
                    </div> */}

                    </section>
                </div>
            </section>
        </section>
    </section>
}