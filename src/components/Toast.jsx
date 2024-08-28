// TODO: make toast context to be read, which provides functions to enable the toast
//
//
//

import { createContext, useContext, useEffect, useState } from "react";

const toastShow = createContext(null);
const toastVisibility = createContext(null);

export const useToastShow = () => {
  return useContext(toastShow);
};

export const useToastVisibility = () => {
  return useContext(toastVisibility);
};

export function ToastProvider({ children }) {
  let [msg, setMsg] = useState("");
  let [time, setTime] = useState(0);

  let [visibility, setVisibility] = useState(false);

  useEffect(() => {
    let startToast = async () => {
      setVisibility(true);
      await new Promise(() =>
        setTimeout(() => {
          setVisibility(false);
          setMsg("");
          setTime(0);
        }, time),
      );
    };

    startToast();
  }, [msg]);

  const showToast = (msg, time = 2000) => {
    setTime(time);
    setMsg(msg);
  };

  return (
    <toastShow.Provider value={showToast}>
      <toastVisibility.Provider value={visibility}>
        {children}
      </toastVisibility.Provider>
    </toastShow.Provider>
  );
}

export function Toast(component) {
  let toast = useToastVisibility();
}
