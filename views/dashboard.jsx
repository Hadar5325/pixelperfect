import { Modal } from "../cmps/modal.jsx"

const {useState } = React

export function Dashboard() {

    const [openModal, setOpenModal] = useState(false)

    useState(() => {
    }, [openModal])

    return <section className="app" onClick={() => setOpenModal(true)}>
        {openModal && <Modal setOpenModal={setOpenModal} />}
        <section className="nav-bar">
            <div className="top-nav-bar">
                <div className="arbox">
                    <img className="arbox" src="../assets/img/dashboard/arbox2.png" />
                </div>
                <div className="fitness">
                    <img className="fitness" src="../assets/img/dashboard/fitness.png" />
                </div>
                <div className="crossfit">
                    <div>CrossFit</div>
                    <img className="img arrow-down-white" src="../assets/img/dashboard/arrow-down-white.png" />
                </div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/home.png" />
                <div className="text">Home</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/schedule.png" />
                <div className="text">Schedule</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/tasks.png" />
                <div className="text">Tasks</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/reports.png" />
                <div className="text">Reports</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/clients.png" />
                <div className="text">Leads</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/finance.png" />
                <div className="text">Finance</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/message-center.png" />
                <div className="text">Message Center</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/insigns.png" />
                <div className="text">Insigns</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/digital-forms.png" />
                <div className="text">Digital Forms</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/logbook.png" />
                <div className="text">Logbook</div>
            </div>
            <div className="item-nav">
                <img className="nav-img" src="../assets/img/dashboard/settings.png" />
                <div className="text">Settings</div>
            </div>
        </section>
        <section className="layout">
            <section className="container-dashboard">
                <div className="info-user">info user</div>
                <div className="heading-dashboard">
                    Dashboard
                </div>
                <div className="container-dashboard-info">
                    {/* <section className="dashboard-info"> */}
                    <div className="booking-card card">
                        <div className="container-card">
                            <div className="heading-card">
                                <div>Booking</div>
                                <img src="../assets/img/dashboard/schedule.png" />
                            </div>
                            <div className="value">25</div>
                            <div className="container-text-option">
                                <div className="text-option">
                                    This week
                                </div>
                                <img src="../assets/img/dashboard/arrow-down.png" />
                            </div>
                        </div>
                    </div>
                    <div className="sales-card card">
                        <div className="container-card">
                            <div className="heading-card">
                                <div>Sales</div>
                                <img src="../assets/img/dashboard/sales.png" />
                            </div>
                            <div className="value">$1000</div>
                            <div className="container-text-option">
                                <div className="text-option">
                                    This week
                                </div>
                                <img src="../assets/img/dashboard/arrow-down.png" />
                            </div>
                        </div>
                    </div>
                    <div className="my-tasks-today">
                        <div className="heading-card">
                            <div className="text">My Tasks today</div>
                            <img src="../assets/img/dashboard/tasks.png" />
                        </div>
                        <div className="table-tasks">
                            {/* <div className="schedule"> */}
                            <div className="hour-section">
                                <div className="hour-time-6">6 am</div>
                            </div>
                            <div className="tasks-for-6">
                                <hr className="hr-time" />
                                <div className="task-important task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                11:00 | Member's name
                                            </div>
                                            <div>
                                                <img src="../assets/img/dashboard/importance.png" />
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Collect Money
                                        </div>
                                    </div>
                                </div>
                                <div className="task-important task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                11:00
                                            </div>
                                            <div>
                                                <img src="../assets/img/dashboard/importance.png" />
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Handle Reciepts
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hour-section">
                                <div className="hour-time-7">7 am</div>
                            </div>
                            <div className="tasks-for-7">
                                <hr className="hr-time" />
                                <div className="task-regular task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                11:30 | Member's name
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Collect Money
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="popular-service-container">
                        <div className="popular-heading-container">
                            <div className="popular-service-heading">
                                popular-service
                            </div>
                            <img src="../assets/img/dashboard/popular-service.png" />
                        </div>
                        <div className="info-popular-container">
                            <div className="popular-item">
                                <div className="items">
                                    <div className="color green">&nbsp;</div>
                                    <div className="text-item">Men Haircur</div>
                                </div>
                                <div>65%</div>
                            </div>
                            <div className="popular-item">
                                <div className="items">
                                    <div className="color red">&nbsp;</div>
                                    <div className="text-item">Beard Trimming</div>
                                </div>
                                <div>13%</div>
                            </div>
                            <div className="popular-item">
                                <div className="items">
                                    <div className="color purple">&nbsp;</div>
                                    <div className="text-item">Men Haircur + Beard</div>
                                </div>
                                <div>12%</div>
                            </div>
                            <div className="popular-item">
                                <div className="items">
                                    <div className="color blue">&nbsp;</div>
                                    <div className="text-item">Women Haircur</div>
                                </div>
                                <div>3%</div>
                            </div>
                            <div className="popular-item">
                                <div className="items">
                                    <div className="color yellow">&nbsp;</div>
                                    <div className="text-item">Handle Reciepts</div>
                                </div>
                                <div>2%</div>
                            </div>
                        </div>
                    </div>
                    <div className="top-appointment-types">
                        <div className="heading-Top-Appointment">
                            Top-Appointment-Types
                            <div className="container-text-option">
                                <div className="text-option">
                                    This Month
                                </div>
                                <img src="../assets/img/dashboard/arrow-down.png" />
                            </div>
                        </div>
                    </div>
                    <div className="schedule-container">
                        <div className="schedule-heading">
                            <div>
                                Schedule
                            </div>
                            <div>
                                <img src="../assets/img/dashboard/schedule.png" />
                            </div>
                        </div>
                        <div className="container-date">
                            <div className="date-class">Jun 1, 21</div>
                            <img src="../assets/img/dashboard/arrows.png" />
                        </div>
                        <div className="table-tasks-schedule">
                            <div className="hour-section">
                                <div className="hour-time-6">6 am</div>
                            </div>
                            <div className="tasks-for-6">
                                <hr className="hr-time" />
                                <div className="trx task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                6 - 8am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            TRX
                                        </div>
                                    </div>
                                </div>
                                <div className="yoga task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                06:45 - 08 am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Yoga
                                        </div>
                                    </div>
                                </div>
                                <div className="working-on-the-day task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                06:30 - 07:30 am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Workout of the Day
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hour-section">
                                <div className="hour-time-7">7 am</div>
                            </div>
                            <div className="tasks-for-7">
                                <hr className="hr-time" />
                                <div className="trx task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                7 - 8am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            TRX                                        </div>
                                    </div>
                                </div>
                                <div className="pilates task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                7:30 - 8:30am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Pilates                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hour-section">
                                <div className="hour-time-8">8 am</div>
                            </div>
                            <div className="tasks-for-8">
                                <hr className="hr-time" />
                                <div className="trx task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                7 - 8am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            TRX                                        </div>
                                    </div>
                                </div>
                                <div className="pilates task">
                                    <div className="content">
                                        <div className="sub-heading">
                                            <div className="hour">
                                                7:30 - 8:30am
                                            </div>
                                            <div>
                                                20/25
                                            </div>
                                        </div>
                                        <div className="task-text">
                                            Pilates                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </section >
}