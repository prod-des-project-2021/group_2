import styles from './Header.module.css'
import OAMKlogo from '../assets/oamk_logo-removebg-preview.png'
import avatar from '../assets/image-removebg-preview.png'


const Header1 = () => {
  return (
    <nav class={styles.navbar}>
      <div>
        <button className="fas fa-bars"></button>
      </div>
      <div>
        <img
          src={OAMKlogo}
          height="70px"
          width="270px"
          alt="OAMK University of Applied Science"
        />
      </div>
      <div></div>
      <div></div>
      <ul></ul>
      <ul>
        <div></div>
        <li>
          <li>
            <form>
              <input type="text" placeholder="Search.." />
              <button className="fas fa-search"></button>
            </form>
          </li>
          <li>
            <div>
              <button className="fas fa-home-lg"></button>
            </div>
            <div>
              <button className="fas fa-tachometer-alt"></button>
            </div>
          </li>
          <li>
            <div>
              <div>
                <div>
                <img src={avatar} width='35' height='35' alt="avatar" />
                </div>
              </div>
            </div>
          </li>
        </li>
      </ul>
      <div>Search</div>
    </nav>
  )
}

export default Header1
