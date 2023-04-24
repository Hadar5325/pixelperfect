import { ClientsDetails } from "./ClientsDetails.jsx"
import { ParticipantDetails } from "./participantDetails.jsx"

export function Modal({ setOpenModal }) {

    const { useState } = React

    const [participans, setParticipant] = useState(createParticipants())
    const [clients, setClients] = useState(createClients())


    function onRemove(participantId) {
        let filteredArr = participans.filter(participan => participan.id !== participantId)
        setParticipant(filteredArr)
    }

    function onChangeStatus(oldStatus, participantId) {
        let newStatus = oldStatus === 'Checked' ? 'Check in' : 'Checked'
        let findUser = participans.find(participan => participan.id === participantId)
        findUser.status = newStatus
        let filteredArr = participans.filter(participan => participan.id !== participantId)
        filteredArr.push(findUser)
        let sortedArr = filteredArr.sort((a, b) =>
            a.userName > b.userName ? 1 : -1,
        );
        setParticipant(sortedArr)
    }

    function createClients(participantId) {
        return [{
            id: 104,
            img: '../assets/img/modal/man2.png',
            userName: 'Tom Levi',
            status: 'Check in'
        },
        {
            id: 105,
            img: '../assets/img/modal/grandfather.png',
            userName: 'Tomer Cohen',
            status: 'Check in'
        },
        {
            id: 106,
            img: '../assets/img/modal/woman2.png',
            userName: 'Tomi Tomi',
            status: 'Check in'
        }]
    }
    function onSelect(clientId) {
        // find client and put it inside participant array
        let newParticipantUser = clients.find(client => client.id === clientId)
        setParticipant((prev) => {
            let oldParticipants = [...prev]
            oldParticipants.push(newParticipantUser)

            let sortedParticipants = oldParticipants.sort((a, b) =>
                a.userName > b.userName ? 1 : -1,
            );
            return sortedParticipants
        })

        // Remove the client from clients array
        let newClients = clients.filter(client => client.id !== clientId)
        setClients(newClients)
    }

    function renderClients() {
        return <div className="dropdown-content">
            {clients.map(client => {
                return <ClientsDetails key={client.id} client={client} onSelect={onSelect} />
            })}
        </div>
    }

    function createParticipants() {
        return [{
            id: 101,
            img: '../assets/img/modal/man.png',
            userName: 'Degan Lev',
            status: 'Checked'
        },
        {
            id: 102,
            img: '../assets/img/modal/woman.png',
            userName: 'Eden Elian',
            status: 'Check in'
        },
        {
            id: 103,
            img: '../assets/img/modal/grandmother.png',
            userName: 'Yoni Yatziv',
            status: 'Check in'
        },
        ]
    }
    function renderParticipant() {
        return <section>
            {participans.map(participant => {
                return <ParticipantDetails key={participant.id} participant={participant} onRemove={onRemove} onChangeStatus={onChangeStatus} />
            })}
        </section>
    }


    return <section onClick={() => setOpenModal(false)} className="modal-background">
        <div onClick={(ev) => { ev.stopPropagation() }} className="modal-container">
            <div className="top-nav">
                <div className="edit">
                    <img src="../assets/img/modal/edit.png" />
                    <div className="text">Edit</div>
                </div>
                <div className="cancel">
                    <img src="../assets/img/modal/cancel-meeting.png" />
                    <div className="text">Cancel Class</div>
                </div>
            </div>
            <div className="workout-container">
                <img className="workout" src="../assets/img/modal/workout.png" />
                <div className="workout-text">Workout of the day</div>
            </div>
            <hr />
            <div className="info-container">
                <div className="item">
                    <img src="../assets/img/modal/man.png" />
                    <div className="info">
                        <div className="info-top">Tom A</div>
                        <div className="info-bottom">Coach</div>
                    </div>
                </div>
                <div className="item">
                    <img src="../assets/img/modal/clock.png" />
                    <div className="info">
                        <div className="info-top">16:15</div>
                        <div className="info-bottom">Start Time</div>
                    </div>
                </div>
                <div className="item">
                    <img src="../assets/img/modal/participants.png" />
                    <div className="info">
                        <div className="info-top">3/15</div>
                        <div className="info-bottom">Participants</div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="you-should-know-container">
                <div className="should-know">You Should Know...</div>
                <div>Degan & Eden which participates in the class have a debt</div>
            </div>
            <hr />
            <div className="participats">
                <div className="heading-participant-container">
                    <div>
                        Participants
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-button">Add client</button>
                        {renderClients()}
                    </div>
                </div>
                <div className="participans-contianer">
                    {renderParticipant()}
                </div>
                <div onClick={()=>setOpenModal(false)}> close </div>
            </div>
        </div>
    </section>
}