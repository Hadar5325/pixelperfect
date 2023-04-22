
export function ClientsDetails({ client, onSelect }) {
    return <button onClick={() => onSelect(client.id)} className="client">
        <div>
            <img className="client-image" src={client.img} />
            <div className="user-name">{client.userName}</div>
        </div>
    </button>
}
