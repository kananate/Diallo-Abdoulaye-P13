import React from "react";
import MainNav from "../components/navHome";
import SignInForm from "../components/signInForm";
import Footer from "../components/footer";



const SignIn = () => {
    return (
        <div className="home">
            <MainNav />
            <SignInForm />
            <Footer />
        </div>
    );
};

export default SignIn;