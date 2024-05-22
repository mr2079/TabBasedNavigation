interface ITab {
    id: string,
    label: string,
    active: boolean
}

export default function Tab(props: ITab) {
    return (
        <li className="nav-item">
          <a className={`nav-link ${props.active ? 'active' : ''}`}>
            {props.label}
          </a>
        </li>
    )
}