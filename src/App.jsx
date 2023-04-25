import React from "react";
import { Route, Routes } from "react-router-dom";
import Email from "./pages/Email";
import Login from "./pages/Login";
import "./App.css";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import Guard from "./components/Guard";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/EditForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/team"
          element={
            <Guard>
              <Team />
            </Guard>
          }
        />
        <Route
          path="/profile"
          element={
            <Guard>
              <Profile />
            </Guard>
          }
        />
        <Route
          path="/create"
          element={
            <Guard>
              <CreateForm />
            </Guard>
          }
        />
        <Route
          path="/edit"
          element={
            <Guard>
              <EditForm />
            </Guard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
