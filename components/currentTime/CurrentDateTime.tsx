"use client";
import React, { useState, useEffect } from 'react';

export default function CurrentDateTime() {
  const [dateTime, setDateTime] = useState({
    dayName: '',
    formattedDate: '',
    formattedTime: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const daysOfWeek = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
      const dayName = daysOfWeek[now.getDay()];
      const formattedDate = now.toLocaleDateString('uz-UZ', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });
      const formattedTime = now.toLocaleTimeString('uz-UZ', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      setDateTime({ dayName, formattedDate, formattedTime });
    };

    updateDateTime(); // Dastlabki render uchun
    const intervalId = setInterval(updateDateTime, 1000); // Har 1 soniyada yangilab turadi

    return () => clearInterval(intervalId); // Tozalanadi
  }, []);

  return (
    <div className='text-center mt-10 flex items-center justify-center gap-5 text-2xl'>
      <p>Bugun: {dateTime.dayName}</p>
      <p>Sana: {dateTime.formattedDate}</p>
      <p>Vaqt: {dateTime.formattedTime}</p>
    </div>
  );
}
