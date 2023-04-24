
export function ClientsDetails({ client, onSelect }) {
    return <button className="client" onClick={() => onSelect(client.id)}>
        <div className="client-container">
            <img className="client-image" src={client.img} />
            <div className="user-name">{client.userName}</div>
        </div>
    </button>
}
