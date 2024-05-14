import React, { createContext, useState } from "react";

export const AlertsContext = createContext();

export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([
    {
      title: "AMZN",
      no: "200",
      change: "-0.25 %",
      risk: "Low Risk",
    },
    {
      title: "TSLA",
      no: "200",
      change: "+0.25 %",
      risk: "Low Risk",
    },
    {
      title: "ABQQ",
      no: "200",
      change: "+0.25 %",
      risk: "High Risk",
    },
    {
      title: "MSFT",
      no: "200",
      change: "-0.25 %",

      risk: "Low Risk",
    },
    {
      title: "PYPL",
      no: "200",
      change: "-0.25 %",

      risk: "Low Risk",
    },
    {
      title: "NFLX",
      no: "200",
      change: "-0.25 %",

      risk: "High Risk",
    },

    {
      title: "AAPL",
      no: "300",
      change: "+0.50 %",
      risk: "Mid Risk",
    },
    {
      title: "GOOGL",
      no: "150",
      change: "+1.20 %",
      risk: "Low Risk",
    },
    {
      title: "MSFT",
      no: "250",
      change: "-0.10 %",
      risk: "Mid Risk",
    },
    {
      title: "ABC",
      no: "180",
      change: "+0.75 %",
      risk: "High Risk",
    },
    {
      title: "FB",
      no: "80",
      change: "-0.75 %",
      risk: "Low Risk",
    },
    {
      title: "NVDA",
      no: "120",
      change: "+1.75 %",
      risk: "High Risk",
    },
    {
      title: "DIS",
      no: "90",
      change: "-0.30 %",
      risk: "Mid Risk",
    },
    {
      title: "BABA",
      no: "40",
      change: "+0.20 %",
      risk: "High Risk",
    },
    {
      title: "V",
      no: "200",
      change: "+0.90 %",
      risk: "Low Risk",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const filteredAlerts = alerts.filter((alert) => {
    return alert.title.toLowerCase().includes(searchText.toLowerCase());
  });

  const contextValue = {
    alerts: filteredAlerts,
    setSearchText,
  };

  return (
    <AlertsContext.Provider value={contextValue}>
      {children}
    </AlertsContext.Provider>
  );
};
