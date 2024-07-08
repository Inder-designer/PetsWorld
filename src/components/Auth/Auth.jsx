import { Tabs } from "flowbite-react";
import React, { useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import './Auth.css'

const Auth = () => {

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-12">
      <Tabs id="Tabs" aria-label="Tabs with underline" variant="underline" className="w-full justify-center gap-0 border-0">
        <Tabs.Item active title="Login" className="">
            <Login/>
        </Tabs.Item>
        <Tabs.Item title="Sign Up" >
            <SignUp/>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Auth;
