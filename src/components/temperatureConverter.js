import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [lastChanged, setLastChanged] = useState(null);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setLastChanged("celsius");

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setLastChanged("fahrenheit");

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCelsius(((num - 32) * 5 / 9).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2, width: "350px", m: 3 }}>
      <TextField
        label="Температура (°C)"
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Температура (°F)"
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </Box>
  );
}
