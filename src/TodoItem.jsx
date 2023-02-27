export default function Item(props) {
  return (
    <li key={props.key} className="item">
      <p className="item__text">{props.text}</p>
      <div className="btn-wrapper">
        <button className="btn btn-done">Done</button>
        <button className="btn btn-delete" onClick={props.deleteItem}>Delete</button>
      </div>
    </li>
  )
}
