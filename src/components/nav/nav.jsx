import './nav.css';

const Nav = ({links}) => {
  return (
    <div className='navbar'>
        {/* <section>
            <ul>
              <li><a>left section</a></li>
            </ul>
        </section> */}
        <div className='right-nav'>
          {links.map(({link, label}) => (
          <a href={link} className="nav-lower-section-link">{label}</a>
          ))}
        </div>
    </div>
  )
}

export default Nav