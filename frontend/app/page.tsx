"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  useVoiceAssistant,
  BarVisualizer,
  VoiceAssistantControlBar,
  AgentState,
} from "@livekit/components-react";

const AppointmentForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to submit appointment details to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        required
      />
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

const Page = () => {
  const { state } = useVoiceAssistant();

  return (
    <div>
      <h1>Dental Assistant</h1>
      <AppointmentForm />
      <VoiceAssistantControlBar />
      <AnimatePresence>
        {state === AgentState.CONNECTED && (
          <motion.div exit={{ opacity: 0 }}>
            <BarVisualizer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Page;
