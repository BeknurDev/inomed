import { createTheme } from "@mui/material";

// Light Mode Theme
export const lightMode = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue for primary actions (e.g., buttons, links)
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057", // Pink for secondary actions
      contrastText: "#fff",
    },
    background: {
      default: "#f4f6f8", // Light background for main content
      paper: "#fff", // Paper (card-like) background
    },
    text: {
      primary: "#000", // Dark text for good contrast
      secondary: "#555", // Lighter text for secondary information
    },
    error: {
      main: "#f44336", // Error color
    },
    warning: {
      main: "#ff9800", // Warning color
    },
    info: {
      main: "#2196f3", // Info color
    },
    success: {
      main: "#4caf50", // Success color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Custom font for the theme
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2,25rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.50rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for cards and buttons
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px", // Button padding
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle card shadow
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #ddd", // Light bottom border for the AppBar
        },
      },
    },
  },
  transitions: {
    easing: {
      sharp: "100ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      shorter: 150,
      short: 200,
      standard: 250,
      complex: 300,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

// Dark Mode Theme
export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue for primary actions in dark mode
      contrastText: "#000",
    },
    secondary: {
      main: "#f50057", // Pink for secondary actions
      contrastText: "#fff",
    },
    background: {
      default: "#121212", // Dark background for the main content
      paper: "#1d1d1d", // Dark paper background for cards
    },
    text: {
      primary: "#fff", // Light text for good contrast
      secondary: "#ccc", // Lighter text for secondary information
    },
    error: {
      main: "#f44336", // Error color (same for both modes)
    },
    warning: {
      main: "#ff9800", // Warning color (same for both modes)
    },
    info: {
      main: "#2196f3", // Info color (same for both modes)
    },
    success: {
      main: "#4caf50", // Success color (same for both modes)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Custom font for the theme
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2,25rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.50rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for cards and buttons
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px", // Button padding
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Slightly more intense shadow for dark mode
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #333", // Darker bottom border for the AppBar in dark mode
        },
      },
    },
  },
  transitions: {
    easing: {
      sharp: "100ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      shorter: 150,
      short: 200,
      standard: 250,
      complex: 300,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});