// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import LoginPage from "../screens/auth/Login";
// import SignUpPage from "../screens/auth/SignUp";
// import ForgotPage from "../screens/auth/Forgot";
// import OtpScreen from "../screens/auth/OtpScreen";
// import DashboardCus from "../screens/app/Dashboard";
// import ProfilesTabs from "../screens/app/SubSections/ProfileTabs";
// import SubServicesTabs from "../screens/app/SubSections/SuppliesTabs/SubServices";
// import PrivateRoutes from "./PrivateRoutes";
// import AuthGuard from "./AuthGuard";
// import ProfileInputTabs from "../screens/app/SubSections/ProfileTabs/ProfileInputTabs";
// import NotFoundPage from "../components/NotFound";
// import Members from "../screens/app/Members";
// import Suppliers from "../screens/app/Supplies";
// import Services from "../screens/app/Services";
// import Itineraries from "../screens/app/Itineraries";
// import Bookings from "../screens/app/Bookings";
// import Revenue from "../screens/app/Revenue";
// import Admins from "../screens/app/Admins";
// import Clouds from "../screens/app/Clouds";
// import NetworkError from "../components/NetworkError";

// function Router() {
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <AuthGuard>
//               <LoginPage />
//             </AuthGuard>
//           }
//         />
//         <Route path="/addAdmin" element={<SignUpPage />} />
//         <Route
//           path="/forgot"
//           element={
//             <AuthGuard>
//               <ForgotPage />
//             </AuthGuard>
//           }
//         />
//         <Route
//           path="/resetPassword"
//           element={
//             <AuthGuard>
//               <OtpScreen />
//             </AuthGuard>
//           }
//         />
//         <Route
//           path="/"
//           element={
//             <PrivateRoutes>
//               <Members />
//             </PrivateRoutes>
//           }
//         ></Route>

//         <Route
//           path="/suppliers"
//           element={
//             <PrivateRoutes>
//               <Suppliers />
//             </PrivateRoutes>
//           }
//         ></Route>

//         <Route
//           path="/services"
//           element={
//             <PrivateRoutes>
//               <Services />
//             </PrivateRoutes>
//           }
//         ></Route>
//         <Route
//           path="/itineraries"
//           element={
//             <PrivateRoutes>
//               <Itineraries />
//             </PrivateRoutes>
//           }
//         ></Route>

//         <Route
//           path="/bookings"
//           element={
//             <PrivateRoutes>
//               <Bookings />
//             </PrivateRoutes>
//           }
//         ></Route>

//         <Route
//           path="/revenue"
//           element={
//             <PrivateRoutes>
//               <Revenue />
//             </PrivateRoutes>
//           }
//         ></Route>

//         <Route
//           path="/admins"
//           element={
//             <PrivateRoutes>
//               <Admins />
//             </PrivateRoutes>
//           }
//         ></Route>
//         <Route
//           path="/cloud"
//           element={
//             <PrivateRoutes>
//               <Clouds />
//             </PrivateRoutes>
//           }
//         ></Route>

//         <Route path="/profile" element={<ProfilesTabs />} />
//         <Route path="/Supplies" element={<SubServicesTabs />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route
//           path="/add-user"
//           element={
//             <PrivateRoutes>
//               <ProfileInputTabs />
//             </PrivateRoutes>
//           }
//         />

//         {/* <Route path="*" element={<PrivateRoutes><NotFoundPage /></PrivateRoutes>} /> */}
//       </Routes>
//     </>
//   );
// }

// export default Router;
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AuthGuard from "./AuthGuard";
import NetworkError from "../components/NetworkError";

// Lazy-loaded components
const LoginPage = lazy(() => import("../screens/auth/Login"));
const SignUpPage = lazy(() => import("../screens/auth/SignUp"));
const ForgotPage = lazy(() => import("../screens/auth/Forgot"));
const OtpScreen = lazy(() => import("../screens/auth/OtpScreen"));
const Members = lazy(() => import("../screens/app/Members"));
const Suppliers = lazy(() => import("../screens/app/Supplies"));
const Services = lazy(() => import("../screens/app/Services"));
const Itineraries = lazy(() => import("../screens/app/Itineraries"));
const Bookings = lazy(() => import("../screens/app/Bookings"));
const Revenue = lazy(() => import("../screens/app/Revenue"));
const Admins = lazy(() => import("../screens/app/Admins"));
const Clouds = lazy(() => import("../screens/app/Clouds"));
const ProfilesTabs = lazy(() =>
  import("../screens/app/SubSections/ProfileTabs")
);
const SubServicesTabs = lazy(() =>
  import("../screens/app/SubSections/SuppliesTabs/SubServices")
);
const ProfileInputTabs = lazy(() =>
  import("../screens/app/SubSections/ProfileTabs/ProfileInputTabs")
);
const NotFoundPage = lazy(() => import("../components/NotFound"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          }
        />
        <Route path="/addAdmin" element={<SignUpPage />} />
        <Route
          path="/forgot"
          element={
            <AuthGuard>
              <ForgotPage />
            </AuthGuard>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <AuthGuard>
              <OtpScreen />
            </AuthGuard>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Members />
            </PrivateRoutes>
          }
        />
        <Route
          path="/suppliers"
          element={
            <PrivateRoutes>
              <Suppliers />
            </PrivateRoutes>
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoutes>
              <Services />
            </PrivateRoutes>
          }
        />
        <Route
          path="/itineraries"
          element={
            <PrivateRoutes>
              <Itineraries />
            </PrivateRoutes>
          }
        />
        <Route
          path="/bookings"
          element={
            <PrivateRoutes>
              <Bookings />
            </PrivateRoutes>
          }
        />
        <Route
          path="/revenue"
          element={
            <PrivateRoutes>
              <Revenue />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admins"
          element={
            <PrivateRoutes>
              <Admins />
            </PrivateRoutes>
          }
        />
        <Route
          path="/cloud"
          element={
            <PrivateRoutes>
              <Clouds />
            </PrivateRoutes>
          }
        />
        <Route path="/profile" element={<ProfilesTabs />} />
        <Route path="/Supplies" element={<SubServicesTabs />} />
        <Route
          path="/add-user"
          element={
            <PrivateRoutes>
              <ProfileInputTabs />
            </PrivateRoutes>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRoutes>
              <NotFoundPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default Router;
