import React from "react";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="w-11/12 h-full bg-navbar"
      style={{
        boxShadow: "10px 0 12px -5px rgba(0,0,0,0.11)",
      }}
    >
      <nav className="flex flex-col gap-8">
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <h1>LOGO</h1>{" "}
          </Link>
        </div>

        <div className="flex justify-center">
          <Link
            to=""
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
          >
            <HomeRoundedIcon fontSize="large" style={{ color: "#8c9dab" }} />
            <p className="text-light_gray">Home</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <MenuBookRoundedIcon
              fontSize="large"
              style={{ color: "#8c9dab" }}
            />
            <p className="text-light_gray">Explore</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <EmailRoundedIcon fontSize="large" style={{ color: "#8c9dab" }} />
            <p className="text-light_gray">Messages</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <DesignServicesRoundedIcon
              fontSize="large"
              style={{ color: "#8c9dab" }}
            />
            <p className="text-light_gray">Designs</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-3/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <NotificationsRoundedIcon
              fontSize="large"
              style={{ color: "#8c9dab" }}
            />
            <p className="text-light_gray">Notifications</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <PeopleAltRoundedIcon
              fontSize="large"
              style={{ color: "#8c9dab" }}
            />
            <p className="text-light_gray">Friends</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <AccountBoxRoundedIcon
              fontSize="large"
              style={{ color: "#8c9dab" }}
            />
            <p className="text-light_gray">Profile</p>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            className="flex flex-col items-center w-2/6 h-full pt-2 pb-2 rounded-2xl active:bg-primary_green hover:bg-slate-100"
            to="/home"
          >
            <SettingsRoundedIcon
              fontSize="large"
              style={{ color: "#8c9dab" }}
            />
            <p className="text-light_gray">Settings</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
