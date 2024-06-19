import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#FFA500", // Orange color
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        },
        rowOdd: {
          backgroundColor: "#FFA500",
        },
        rowEven: {
          backgroundColor: "#fff",
        },
        cell: {
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          fontSize: 14,
          color: "#000",
          backgroundColor: "orange",
        },
        "& .MuiDataGrid-cell:hover": {
          backgroundColor: "#ffe0b2",
        },
      },
    },
  },
});

const columns = [
  { field: "id", headerName: "No.", width: 90 },
  { field: "bell", headerName: "Bell", width: 150 },
  {
    field: "localTime",
    headerName: "Local Time",
    width: 150,
    editable: true,
  },
  {
    field: "schedule",
    headerName: "Schedule",
    width: 200,
    editable: true,
  },
  {
    field: "monday",
    headerName: "Monday",
    width: 150,
  },
  {
    field: "tuesday",
    headerName: "Tuesday",
    width: 150,
  },
  {
    field: "wednesday",
    headerName: "Wednesday",
    width: 150,
  },
  {
    field: "thursday",
    headerName: "Thursday",
    width: 150,
  },
  {
    field: "friday",
    headerName: "Friday",
    width: 150,
  },
];

const nurseryRows = [
  {
    id: 1,
    bell: "First Bell",
    localTime: "1:00 LT",
    schedule: "School Gates Open",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 2,
    bell: "Second Bell",
    localTime: "1:45 LT",
    schedule: "Teachers Sign in",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 3,
    bell: "Assembly Bell",
    localTime: "2:00 LT",
    schedule: "School Gates Close",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 4,
    bell: "Assembly End",
    localTime: "2:30 LT",
    schedule: "Students to their Classes",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 5,
    bell: "1st Period",
    localTime: "3:15 LT",
    schedule: "End of 1st Period",
    monday: "Engilsh",
    tuesday: "Engilsh",
    wednesday: "Engilsh",
    thursday: "Engilsh",
    friday: "Engilsh",
  },
  {
    id: 6,
    bell: "2nd Period",
    localTime: "3:50 LT",
    schedule: "End of 2nd Period",
    monday: "Math",
    tuesday: "Math",
    wednesday: "Math",
    thursday: "Math",
    friday: "Math",
  },
  {
    id: 7,
    bell: "3rd Period",
    localTime: "4:25 LT",
    schedule: "End of 3rd Period",
    monday: "Art",
    tuesday: "Art",
    wednesday: "Art",
    thursday: "Art",
    friday: "Art",
  },
  {
    id: 8,
    bell: "Break",
    localTime: "4:45 LT",
    schedule: "End of Break",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 9,
    bell: "4th Period",
    localTime: "5:25 LT",
    schedule: "End of 4th Period",
    monday: "Amharic",
    tuesday: "Amharic",
    wednesday: "Amharic",
    thursday: "Amharic",
    friday: "Amharic",
  },
  {
    id: 10,
    bell: "5th Period",
    localTime: "6:00 LT",
    schedule: "End of 5th Period",
    monday: "sport",
    tuesday: "sport",
    wednesday: "sport",
    thursday: "sport",
    friday: "sport",
  },
  {
    id: 11,
    bell: "Lunch Break",
    localTime: "7:20 LT",
    schedule: "End of Lunch Break",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 12,
    bell: "6th Period",
    localTime: "8:00 LT",
    schedule: "End of 6th Period",
    monday: "Writing",
    tuesday: "Writing",
    wednesday: "Writing",
    thursday: "Writing",
    friday: "Writing",
  },
  {
    id: 13,
    bell: "7th Period",
    localTime: "8:35 LT",
    schedule: "End of 7th Period",
    monday: "Engilsh",
    tuesday: "Engilsh",
    wednesday: "Engilsh",
    thursday: "Engilsh",
    friday: "Engilsh",
  },
];
const grade1to4Rows = [
  {
    id: 1,
    bell: "First Bell",
    localTime: "1:00 LT",
    schedule: "School Gates Open",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 2,
    bell: "Second Bell",
    localTime: "1:45 LT",
    schedule: "Teachers Sign in",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 3,
    bell: "Assembly Bell",
    localTime: "2:00 LT",
    schedule: "School Gates Close",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 4,
    bell: "Assembly End",
    localTime: "2:30 LT",
    schedule: "Students to their Classes",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 5,
    bell: "1st Period",
    localTime: "3:15 LT",
    schedule: "End of 1st Period",
    monday: "Math",
    tuesday: "English",
    wednesday: "English",
    thursday: "English",
    friday: "Math",
  },
  {
    id: 6,
    bell: "2nd Period",
    localTime: "3:50 LT",
    schedule: "End of 2nd Period",
    monday: "English",
    tuesday: "Math",
    wednesday: "Math",
    thursday: "Math",
    friday: "English",
  },
  {
    id: 7,
    bell: "3rd Period",
    localTime: "4:25 LT",
    schedule: "End of 3rd Period",
    monday: "Amharic",
    tuesday: "Art",
    wednesday: "Amharic",
    thursday: "Civics",
    friday: "Amharic",
  },
  {
    id: 8,
    bell: "Break",
    localTime: "4:45 LT",
    schedule: "End of Break",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 9,
    bell: "4th Period",
    localTime: "5:25 LT",
    schedule: "End of 4th Period",
    monday: "Art",
    tuesday: "Civics",
    wednesday: "Art",
    thursday: "Spoken",
    friday: "Art",
  },
  {
    id: 10,
    bell: "5th Period",
    localTime: "6:00 LT",
    schedule: "End of 5th Period",
    monday: "Writing",
    tuesday: "Art",
    wednesday: "Art",
    thursday: "Writing",
    friday: "Sport",
  },
  {
    id: 11,
    bell: "Lunch Break",
    localTime: "7:20 LT",
    schedule: "End of Lunch Break",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 12,
    bell: "6th Period",
    localTime: "8:00 LT",
    schedule: "End of 6th Period",
    monday: "Sport",
    tuesday: "Math",
    wednesday: "Math",
    thursday: "Math",
    friday: "Sport",
  },
  {
    id: 13,
    bell: "7th Period",
    localTime: "8:35 LT",
    schedule: "End of 7th Period",
    monday: "Engilsh",
    tuesday: "Math",
    wednesday: "Engilsh",
    thursday: "ICT",
    friday: "Engilsh",
  },
];
const grade5to8Rows = [
  {
    id: 1,
    bell: "First Bell",
    localTime: "1:00 LT",
    schedule: "School Gates Open",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 2,
    bell: "Second Bell",
    localTime: "1:45 LT",
    schedule: "Teachers Sign in",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 3,
    bell: "Assembly Bell",
    localTime: "2:00 LT",
    schedule: "School Gates Close",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 4,
    bell: "Assembly End",
    localTime: "2:30 LT",
    schedule: "Students to their Classes",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 5,
    bell: "1st Period",
    localTime: "3:15 LT",
    schedule: "End of 1st Period",
    monday: "Biology",
    tuesday: "Biology",
    wednesday: "Biology",
    thursday: "Engilsh",
    friday: "Engilsh",
  },
  {
    id: 6,
    bell: "2nd Period",
    localTime: "3:50 LT",
    schedule: "End of 2nd Period",
    monday: "Math",
    tuesday: "Math",
    wednesday: "Chemistry",
    thursday: "Chemistry",
    friday: "Chemistry",
  },
  {
    id: 7,
    bell: "3rd Period",
    localTime: "4:25 LT",
    schedule: "End of 3rd Period",
    monday: "Art",
    tuesday: "Social",
    wednesday: "Social",
    thursday: "Social",
    friday: "Art",
  },
  {
    id: 8,
    bell: "Break",
    localTime: "4:45 LT",
    schedule: "End of Break",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 9,
    bell: "4th Period",
    localTime: "5:25 LT",
    schedule: "End of 4th Period",
    monday: "Amharic",
    tuesday: "Sport",
    wednesday: "ICT",
    thursday: "Sport",
    friday: "Amharic",
  },
  {
    id: 10,
    bell: "5th Period",
    localTime: "6:00 LT",
    schedule: "End of 5th Period",
    monday: "sport",
    tuesday: "Amharic",
    wednesday: "Amharic",
    thursday: "sport",
    friday: "sport",
  },
  {
    id: 11,
    bell: "Lunch Break",
    localTime: "7:20 LT",
    schedule: "End of Lunch Break",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
  {
    id: 12,
    bell: "6th Period",
    localTime: "8:00 LT",
    schedule: "End of 6th Period",
    monday: "Writing",
    tuesday: "Physics",
    wednesday: "Physics",
    thursday: "Physics",
    friday: "Writing",
  },
  {
    id: 13,
    bell: "7th Period",
    localTime: "8:35 LT",
    schedule: "End of 7th Period",
    monday: "Spoken",
    tuesday: "Spoken",
    wednesday: "Spoken",
    thursday: "Engilsh",
    friday: "Engilsh",
  },
];

export default function Schedule() {
  const [grade, setGrade] = useState("nursery");

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: 2 }}>
        <FormControl sx={{ marginBottom: 2 }}>
          <InputLabel id="grade-select-label">Select Grade</InputLabel>
          <Select
            labelId="grade-select-label"
            id="grade-select"
            value={grade}
            onChange={handleGradeChange}
            label="Select Grade"
          >
            <MenuItem value="nursery">Nursery</MenuItem>
            <MenuItem value="grade1to4">Grade 1-4</MenuItem>
            <MenuItem value="grade5to8">Grade 5-8</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={
              grade === "nursery"
                ? nurseryRows
                : grade === "grade1to4"
                ? grade1to4Rows
                : grade5to8Rows
            }
            columns={columns}
            disableRowSelectionOnClick
            disableColumnMenu
            disableSelectionOnClick
            rowHeight={37}
            classes={{
              rowOdd: "row-odd",
              rowEven: "row-even",
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
