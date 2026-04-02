"use client";
import { useState, useEffect } from "react";
import { APK_URL } from "@/lib/config";

export function NoticeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("noticeDismissed") !== "true") {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("noticeDismissed", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return null;
}
