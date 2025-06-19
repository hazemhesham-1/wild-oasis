import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Bookings from "./pages/Bookings";
import Checkin from "./pages/Checkin";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import DarkModeProvider from "./contexts/DarkModeContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <GlobalStyles/>
                <BrowserRouter>
                    <Routes>
                        <Route
                            element={
                                <ProtectedRoute>
                                    <AppLayout/>
                                </ProtectedRoute>
                            }
                        >
                            <Route index element={<Navigate replace to="dashboard"/>}/>
                            <Route path="dashboard" element={<Dashboard/>}/>
                            <Route path="bookings" element={<Bookings/>}/>
                            <Route path="bookings/:id" element={<Booking/>}/>
                            <Route path="checkin/:id" element={<Checkin/>}/>
                            <Route path="cabins" element={<Cabins/>}/>
                            <Route path="users" element={<Users/>}/>
                            <Route path="settings" element={<Settings/>}/>
                            <Route path="account" element={<Account/>}/>
                        </Route>
                        <Route path="login" element={<Login/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
                <Toaster
                    position="top-center"
                    gutter={12}
                    containerStyle={{ margin: "8px" }}
                    toastOptions={{
                        success: { duration: 3000 },
                        error: { duration: 5000 },
                        style: {
                            backgroundColor: "var(--color-grey-0)",
                            color: "var(--color-grey-700)",
                            maxWidth: "500px",
                            padding: "16px 24px",
                            fontSize: "16px",
                        },
                    }}
                />
            </QueryClientProvider>
        </DarkModeProvider>
    );
};

export default App;