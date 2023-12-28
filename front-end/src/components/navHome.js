import { Link } from 'react-router-dom'
import argentLogo from '../img/argentBankLogo.png'


function MainNav() {

  return (
    
       <nav class="main-nav">
      <Link class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src={argentLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    
    </nav>
  )
}

export default MainNav
