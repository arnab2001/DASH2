import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Admin() {
  return (
    <>

      <div className=" bg-blueGray-100">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
        <CardPageVisits />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
      <FooterAdmin />
          
        </div>
      </div>
      
    
    </>
    
  );
}

