import React from "react";
import Account from '../components/account'
import HeaderProfil from '../components/headerProfil'
import Footer from "../components/footer";



function User() {
 
  return (
    <main class="main">
    <HeaderProfil/>
    <section className='bg-dark'>
    <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <Account />
    </section>
    <Footer/>
    </main>
  )
}

export default User
