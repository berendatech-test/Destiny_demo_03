import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        },
        columnHeaders: {
          backgroundColor: "#FFA500", // Orange header background color
          color: "#0000FF",
          fontSize: 20,
          fontWeight: "bold",
        },
        row: {
          "&:nth-of-type(odd)": {
            backgroundColor: "#f0f0f0", // Light gray for odd rows
          },
          "&:hover": {
            backgroundColor: "#e0f7fa",
          },
        },
        cell: {
          padding: "10px",
          fontSize: 14,
          color: "#333",
        },
        footerContainer: {
          display: "none",
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
];

const rows = [
  {
    id: 1,
    bell: "First Bell",
    localTime: "1:00 LT",
    schedule: "School Gates Open",
  },
  {
    id: 2,
    bell: "Second Bell",
    localTime: "1:45 LT",
    schedule: "Teachers Sign in",
  },
  {
    id: 3,
    bell: "Assembly Bell",
    localTime: "2:00 LT",
    schedule: "School Gates Close",
  },
  {
    id: 4,
    bell: "Assembly End",
    localTime: "2:30 LT",
    schedule: "Students to their Classes",
  },
  {
    id: 5,
    bell: "1st Period",
    localTime: "3:15 LT",
    schedule: "End of 1st Period",
  },
  {
    id: 6,
    bell: "2nd Period",
    localTime: "3:50 LT",
    schedule: "End of 2nd Period",
  },
  {
    id: 7,
    bell: "3rd Period",
    localTime: "4:25 LT",
    schedule: "End of 3rd Period",
  },
  {
    id: 8,
    bell: "Break",
    localTime: "4:45 LT",
    schedule: "End of Break",
  },
  {
    id: 9,
    bell: "4th Period",
    localTime: "5:25 LT",
    schedule: "End of 4th Period",
  },
  {
    id: 10,
    bell: "5th Period",
    localTime: "6:00 LT",
    schedule: "End of 5th Period",
  },
  {
    id: 11,
    bell: "Lunch Break",
    localTime: "7:20 LT",
    schedule: "End of Lunch Break",
  },
  {
    id: 12,
    bell: "6th Period",
    localTime: "8:00 LT",
    schedule: "End of 6th Period",
  },
  {
    id: 13,
    bell: "7th Period",
    localTime: "8:35 LT",
    schedule: "End of 7th Period",
  },
  {
    id: 14,
    bell: "End of School Day",
    localTime: "9:05 LT",
    schedule: "End of 8th Period",
  },
];

export default function Schedule() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: 600, width: "100%", padding: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          disableColumnMenu
          disableSelectionOnClick
          rowHeight={45}
          sx={{
            "& .MuiDataGrid-cell": {
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            },
            "& .row-even": {
              backgroundColor: "#777",
            },
            "& .row-odd": {
              backgroundColor: "#f0f0f0",
            },
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: "#e0f7fa",
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
