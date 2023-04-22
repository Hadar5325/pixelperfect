

export function ParticipantDetails({ participant, onRemove, onChangeStatus }) {
    return <div className="participant">
        <img className="participant-image" src={participant.img} />
        <div className="user-name">{participant.userName}</div>
        <button onClick={() => { onChangeStatus(participant.status, participant.id) }}>{participant.status}</button>
        <div className="icons-container">
            <img src="../assets/img/modal/whatsup.png" />
            <button onClick={(() => { onRemove(participant.id) })}>
                <img src="../assets/img/modal/trash.png" />
            </button>
        </div>
    </div>
}