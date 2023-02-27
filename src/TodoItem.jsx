export default function Item(props) {
  return (
    <li className={`item ${props.done ? 'item-done' : 'item-default'}`}>
      <p className="item__text">{props.text}</p>
      <div className="btn-wrapper">
        <button className="btn btn-done" onClick={props.completeItem}>Done</button>
        <button className="btn btn-delete" onClick={props.deleteItem}>Delete</button>
      </div>
    </li>
  )
}
