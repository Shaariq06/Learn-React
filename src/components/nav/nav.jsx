import './nav.css';

const Nav = ({links}) => {
  return (
    <div className='navbar'>
        {/* <section>
            <ul>
              <li><a>left section</a></li>
            </ul>
        </section> */}
        <section className='section-nav'>
          <ul>
            {links.map(({link, label}) => (
            <li><a href={link} className="nav-lower-section-link">{label}</a></li>
            ))}
          </ul>
        </section>
    </div>
  )
}

export default Nav