import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
  useRef,
  Suspense,
  lazy,
} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import WebFont from "webfontloader";
// import UserList from "./Components/UserList";
// import ExampleComponent from "./Components/ExampleComponent";
// import MyForm from "./Components/MyForm";
// import TestComponent from "./Components/TestComponent";
// import UseReducerCounterExample from "./Components/UseReducerCounterExample";
// import { UseReducerTodoListExample } from "./Components/UseReducerTodoListExample";
// import UseReducerExampleFormHandling from "./Components/UseReducerExampleFormHandling";
// import UndoRedoExampleFunctional from "./Components/UndoRedoExampleFunctional";
// import Test from "./Components/Test";
// import ChatApp from "./Components/ChatAPP";
// import TestApp from "./Components/TestApp";
// import ShoppingCart from "./Components/ShoppingCart";
// import AuthExample from "./Components/UseContextExample";
// import ContextExample from "./Components/UseContextExample2";
// import MyComponent from "./Components/CustomHookExample";
// import CustomHookExampleLocalStorage from "./Components/CustomHookExampleLocalStorage";
// import CustomHookResponsiveDesign from "./Components/CustomHookResponsiveDesign";
// import CustomHookFormHandling from "./Components/CustomHookFormHandling";
// import CustomHookDebouncingTechnique from "./Components/CustomHookDebouncingTechnique";
// import DynamicDOMManipulation from "./Components/DynamicDOMManipulation";
// import ConditionalRendering from "./Components/ConditionalRendering";
// import FormDataMetObjectFromEntries from "./Components/FormDataMetObjectFromEntries";
// import BestWayToFetchDataWithFetchMethod from "./Components/BestWayToFetchDataWithFetchMethod";
// import CountdownTimer from "./Components/CountdonwTimer";
// import AnimatedComponent from "./Components/AnimatedComponent";
// import CountdownTimerTill2026 from "./Components/CountdownTimerTill2026";
// import SetIntervalDataFetching from "./Components/SetIntervalDataFetching";
// import ControlledComponent from "./Components/ControlledComponent";
// import MyForm2 from "./Components/MyForm2";
// import Exercise from "./Components/Exercise";
// import PromiseInCombinatieMetAsync from "./Components/PromiseInCombinatieMetAsync";
// import ContextAPI from "./Components/ContextAPI";
// import PromiseResolveRejectExample from "./Components/PromiseResolveRejectExample";
// import LoginForm from "./Components/LoginForm";
// import TicTacToe from "./Components/TicTacToe";
// import QuizGame from "./Components/QuizGame";
// import QuizOnlineAPI from "./Components/QuizOnlineAPI";
// import WordScramble from "./Components/WordScramble";
// import WordGuessingGame from "./Components/WordGuessingGame";
// import Exercise2 from "./Components/Exercise2";
// import Countdown from "./Components/Countdown";
// import DebounceTechnique from "./Components/DebounceTechnique";
// import AccessingAndManipulatingDOM from "./Components/AccessingAndManipulatingDOM";
// import StoringMutableValuesWithoutTriggeringRerenders from "./Components/StoringMutableValuesWithoutTriggeringRerenders";
// import PreservingValuesAcrossRenders from "./Components/PreservingValuesAcrossRenders";
// import StoringAndAccessingPreviousProps from "./Components/StoringAndAccessingPreviousProps";
// import ParentComponent from "./Components/ParentComponent";
// import ForwardRefParentComponent from "./Components/ForwardRefParentComponent";
// import ParentComponentUseImperativeHandle from "./Components/ParentComponentUseImperativeHandle";
// import ReusableCustomButtonPart2 from "./Components/ReusableCustomButtonPart2";
// import ShuffleArray from "./Components/ShuffleArray";
// import VideoPlayer from "./Components/VideoPlayer";
// import Mp3Player from "./Components/Mp3Player";
// import AdvancedVideoPlayer from "./Components/AdvancedVideoPlayer";
// import AdvancedVideoPlayerWithPlaylist from "./Components/AdvancedVideoPlayerWithPlaylist";
// import PaginationExample from "./Components/PaginationExample";
// import PaginationExample2 from "./Components/PaginationExample2";
// import WeatherPagination from "./Components/WeatherPagination";
// import SpaceXLaunchesPagination from "./Components/SpaceXLaunchesPagination";
// import TabsInReact from "./Components/TabsInReact";
// import MultiLanguageTabs from "./Components/MultiLanguageTabs";
// import IteratingMultiLevelDownInnerData from "./Components/IteratingMultiLevelDownInnerData";
// import CommentList from "./Components/CommentList";
// import UserRoles from "./Components/ProtectedRoutesChatGPT4Premium/UserRoles";
// import ProtectedRoute from "./Components/ProtectedRoutesChatGPT4Premium/ProtectedRoute";
// import AdminPage from "./Components/ProtectedRoutesChatGPT4Premium/AdminPage";
// import UserPage from "./Components/ProtectedRoutesChatGPT4Premium/UserPage";
// import HomePage from "./Components/ProtectedRoutesChatGPT4Premium/HomePage";
// import { OuterInnerFunctions } from "./Components/OuterInnerFunctions";
// import TestCallbackFunction from "./Components/TestCallbackFunction";
// import TestCallBackFunction2 from "./Components/TestCallBackFunction2";
// import TestCallBackFunction3 from "./Components/TestCallBackFunction3";
// import Exercise3 from "./Components/Exercise3";
// import Home2 from "./Components/ProtectedRoutesLocalStorage/Home2";
// import Roles from "./Components/ProtectedRoutesLocalStorage/Roles/Roles";
// import AdminPage2 from "./Components/ProtectedRoutesLocalStorage/AdminPage2";
// import UserPage2 from "./Components/ProtectedRoutesLocalStorage/UserPage2";
// import EnhancedComponentHOCForwardRef from "./Components/ExerciseNow/EnhancedComponentHOCForwardRef";
// import WithAuthentication from "./Components/SimulatingAutWithHOC/AuthenticationHOC";
// import ProtectedComponent from "./Components/SimulatingAutWithHOC/ProtectedComponent";
// import LoginPage from "./Components/SimulatingAutWithHOC/LoginPage";
// import MyHome from "./Components/SimulatingAutWithHOC/MyHome";
// import Logout from "./Components/SimulatingAutWithHOC/Logout";
// import ErrorPage from "./Components/SimulatingAutWithHOC/ErrorPage";
// import UseLocation from "./Components/UseLocation";
// import Navigation from "./Components/Navigation";
// import Component2 from "./Components/PassingDataInLinkUsingUseLocation/Component2";
// import Component1 from "./Components/PassingDataInLinkUsingUseLocation/Component1";
// import UseNavComp1 from "./Components/PassingDataMetUseNavigate/UseNavComp1";
// import UseNavComp2 from "./Components/PassingDataMetUseNavigate/UseNavComp2";
// import MetNavComp from "./Components/PassingDataMetUseNavigate/MetNavComp";
// import PassingDataBySearchParams from "./Components/PassingDataToURLWithQueryParams/PassingDataBySearchParams";
// import GettingSearchQueryParamsData from "./Components/PassingDataToURLWithQueryParams/GettingSearchQueryParamsData";
// import CustomContextProvider, {
//   MijnContext,
// } from "./Components/CustomContextProviderSteps/CustomContextProvider";
// import MyComponentUsingCustomContextProvider from "./Components/CustomContextProviderSteps/MyComponentUsingCustomContextProvider";
// import MijnContextProvider2 from "./Components/ExerciseNow/MijnContextProvider2";
// import TestMijnContextProvider2 from "./Components/TestMijnContextProvider2";
// import ParentComponentTest from "./Components/StopPropagationTest/ParentComponent";
// import ParentComponentTest2 from "./Components/StopPropagationTest/ParentComponentTest2";
// import BasicDropDown from "./Components/DropDownMenu/BasicDropDown";
import DropDownMenuStopPropagation from "./Components/StopPropagationTest/DropDownMenuStopPropagation";
import CustomTableInReact from "./Components/CustomTableInReact/CustomTableInReact";
import UseRefPersistPrevValue from "./Components/UseRefPersistPrevValue/UseRefPersistPrevValue";
const GetUsers = lazy(() => import("./Components/ErrorBoundaryTest/GetUsers"));
import ErrorBoundary from "./Components/ErrorBoundaryTest/ErrorBoundary";
import ErrorBoundary2 from "./Components/ErrorBoundaryTest/ErrorBoundary2";
import CustomFallback from "./Components/ErrorBoundaryTest/CustomFallback";
import Promise1 from "./Components/PromnisesExercise/Promise1";
import Promise2 from "./Components/PromnisesExercise/Promise2";
import OefeningWeg from "./Components/OefeningWeg";
import AppOefenenWeg from "./Components/AllesOefenenWeg/AppOefenenWeg";
import PromiseAll from "./Components/AllesOefenenWeg/PromiseAll";
import AppTodos from "./Components/Suspense-data-fetching/Components/AppsTodos";
import AppOefeningSuspense from "./Components/Suspense-data-fetching/oefening/AppOefeningSuspense";
import TimeLeftTillNewYear from "./Components/TimeLeftTillNewYear/TimeLeftTillNewYear";
import ZeerBelangrijk from "./Components/ZeerBelangrijk/ZeerBelangrijk";
import Parent from "./Components/Suspense-data-fetching/oefening2/parent";
import AppPureReactDatePicker from "./Components/PureReactDatePicker/AppPureReactDatePicker";
import AppPureReactBookingHotelDateTimePicker from "./Components/PureReactBookingHotelDateTimePicker/AppPureReactBookingHotelDateTimePicker";
import AppPureReactBookingHotelFrom1930Till2119 from "./Components/PureReactBookingHotelFrom1930Till2119/AppPureReactBookingHotelFrom1930Till2119";
import PureBookingFromGrid1930Till2119 from "./Components/PureBookingFromGrid1930Till2119/PureBookingFromGrid1930Till2119";
import TestRenderDays from "./Components/AllesOefenenWeg/Calendar/testRenderDays";
import TestCalendar from "./Components/AllesOefenenWeg/Calendar/TestCalendar";
import VanillaJavaScriptDatePicker from "./Components/VanillaJavaScriptDatePicker/VanillaJavaScriptDatePicker";
import DateInputTypeDatePicker from "./Components/DateInputTypeDatePicker/DateInputTypeDatePicker";
import DateAndTimeClockCalendar from "./Components/DateAndTimeClockCalendar/DateAndTimeClockCalendar";

// const AdminPage = () => <div>Admin Page - Only for Admins</div>;
// const UserPage = () => <div>User Page - For Admins and Users</div>;
// const HomePage = () => <div>Home Page - Accessible by All</div>;

function App() {
  // const [count, setCount] = useState(0);

  // const enhancedComponentHOCForwardRefRef = useRef();
  // const [testAuthState, setTestAuthState] = useState(true);

  // const AuthenticatedProtectedComponent =
  //   WithAuthentication(ProtectedComponent);

  // const page = 1; // Set the initial page
  // const limit = 12; // Set the number of items per page

  // const handleTimeout = useCallback(() => {
  //   console.log("Countdown reached zero!"); // Replace with your logic
  // }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:400,700"],
      },
    });
  }, []);

  return (
    <>
      {/* <OuterInnerFunctions /> */}
      {/* <TestCallbackFunction /> */}
      {/* <TestCallBackFunction2 /> */}
      {/* <TestCallBackFunction3 /> */}
      {/* <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/user">User Page</Link> |{" "}
          <Link to="/admin">Admin Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={[UserRoles.ADMIN, UserRoles.USER]}>
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={[UserRoles.ADMIN]}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter> */}

      {/* <UserList />
    <ExampleComponent />
    <MyForm />
    <TestComponent /> */}

      {/* <UseReducerCounterExample /> */}
      {/* <UseReducerTodoListExample /> */}
      {/* <UseReducerExampleFormHandling /> */}

      {/* <UndoRedoExampleFunctional /> */}

      {/* <ExampleComponent /> */}

      {/* <Test /> */}

      {/* <PromiseResolveRejectExample /> */}

      {/* <LoginForm /> */}

      {/* <TicTacToe /> */}

      {/* <QuizGame /> */}

      {/* <QuizOnlineAPI /> */}

      {/* <WordScramble /> */}

      {/* <WordGuessingGame /> */}

      {/* <Countdown initialSeconds={60} onTimeout={handleTimeout} /> */}

      {/* <DebounceTechnique /> */}

      {/* <AccessingAndManipulatingDOM /> */}

      {/* <StoringMutableValuesWithoutTriggeringRerenders /> */}

      {/* <PreservingValuesAcrossRenders value={30} /> */}

      {/* <StoringAndAccessingPreviousProps data={'Great'}/> */}

      {/* <ParentComponent /> */}

      {/* <ForwardRefParentComponent /> */}

      {/* <ParentComponentUseImperativeHandle /> */}

      {/* <ReusableCustomButtonPart2 /> */}

      {/* <ShuffleArray /> */}

      {/* <VideoPlayer /> */}

      {/* <Mp3Player /> */}

      {/* <AdvancedVideoPlayer /> */}

      {/* <AdvancedVideoPlayerWithPlaylist /> */}

      {/* <PaginationExample /> */}

      {/* <PaginationExample2 /> */}

      {/* <WeatherPagination /> */}

      {/* <SpaceXLaunchesPagination /> */}

      {/* <TabsInReact /> */}

      {/* <MultiLanguageTabs /> */}

      {/* <IteratingMultiLevelDownInnerData /> */}

      {/* <CommentList /> */}

      {/* <Exercise2 /> */}

      {/* <EnhancedComponentHOCForwardRef /> */}

      {/* <div>
        <BrowserRouter>
          <nav>
            <Link to="/Home2">Home2</Link>
            <Link to="/UserPage2">UserPage2</Link>
            <Link to="/AdminPage2">AdmninPage2</Link>
          </nav>
          <Routes>
            <Route path="/Home2" element={<Home2 />} />
            <Route
              path="/UserPage2"
              element={
                <ProtectedRoute allowedRoles={[Roles.USER, Roles.ADMIN]}>
                  <UserPage2 />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AdminPage2"
              element={
                <ProtectedRoute allowedRoles={[Roles.ADMIN]}>
                  <AdminPage2 />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div> */}

      {/* <Exercise3 /> */}

      {/* <ChatApp /> */}

      {/* <ShoppingCart /> */}

      {/* <AuthExample /> */}

      {/* <ContextExample /> */}

      {/* <MyComponent /> */}

      {/* <CustomHookExampleLocalStorage /> */}

      {/* <CustomHookResponsiveDesign /> */}

      {/* <CustomHookFormHandling /> */}

      {/* <CustomHookDebouncingTechnique /> */}

      {/* <DynamicDOMManipulation /> */}
      {/* <ConditionalRendering /> */}

      {/* <FormDataMetObjectFromEntries /> */}
      {/* <BestWayToFetchDataWithFetchMethod /> */}

      {/* <CountdownTimer /> */}

      {/* <AnimatedComponent /> */}

      {/* <CountdownTimerTill2026 /> */}

      {/* <SetIntervalDataFetching /> */}

      {/* <ControlledComponent /> */}

      {/* <MyForm2 /> */}

      {/* <Exercise /> */}

      {/* <PromiseInCombinatieMetAsync /> */}

      {/* <ContextAPI /> */}

      {/* <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          {testAuthState ? (
            <>
              <Route path="/" element={<MyHome />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/protected"
                element={<AuthenticatedProtectedComponent />}
              />
            </>
          ) : (
            <Route path="*" element={<ErrorPage />} />
          )}
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <UseLocation />
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
        </Routes>
      </BrowserRouter> */}
      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseNavComp1 />} />
          <Route path="/comp2" element={<UseNavComp2 />} />
          <Route path="/nav-comp" element={<MetNavComp />} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<PassingDataBySearchParams />} />
          <Route
            path="/GettingSearchQueryParamsData"
            element={<GettingSearchQueryParamsData />}
          />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <CustomContextProvider>
          <MyComponentUsingCustomContextProvider />
        </CustomContextProvider>
      </BrowserRouter> */}

      {/* <MijnContextProvider2>
        <TestMijnContextProvider2 />
      </MijnContextProvider2> */}

      {/* <ParentComponentTest /> */}

      {/* <ParentComponentTest2 /> */}

      {/* <BasicDropDown /> */}

      {/* <div>
        <h1>Dropdown Menu Example</h1>
        <DropDownMenuStopPropagation />
      </div> */}

      {/* <CustomTableInReact /> */}

      {/* <UseRefPersistPrevValue /> */}

      {/* <ErrorBoundary2 fallback={<CustomFallback />}>
        <Suspense fallback={<div>Systeem is bezig met data te laden...</div>}>
          <GetUsers />
        </Suspense>
      </ErrorBoundary2> */}
      {/* <ErrorBoundary>
        <Suspense>
          <GetUsers />
        </Suspense>
      </ErrorBoundary> */}

      {/* <Promise1 /> */}
      {/* <Promise2 /> */}

      {/* <OefeningWeg name="Caviani" bool={true}>
        <div>This is a div inside OefeningWeg component!</div>
      </OefeningWeg> */}

      {/* <AppOefeningSuspense /> */}

      {/* <TimeLeftTillNewYear /> */}

      {/* <AppPureReactDatePicker /> */}

      {/* <AppPureReactBookingHotelDateTimePicker /> */}

      {/* <AppPureReactBookingHotelFrom1930Till2119 /> */}

      {/* <PureBookingFromGrid1930Till2119 /> */}

      {/* <ZeerBelangrijk /> */}

      {/* <Parent /> */}

      {/* <AppOefenenWeg /> */}
      {/* <PromiseAll /> */}
      {/* <AppOefenenWeg /> */}

      {/* <AppTodos /> */}

      {/* <TestRenderDays /> */}

      {/* <TestCalendar /> */}
      {/* <VanillaJavaScriptDatePicker /> */}

      {/* <DateInputTypeDatePicker /> */}

      <DateAndTimeClockCalendar />

      {/* <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<h1>Hallo path is /</h1>} />
            <Route path="/about" element={<h3>Hallo path is about</h3>} />
          </Routes>
          <Navigation />
        </>
      </BrowserRouter> */}
    </>
  );
}
export default App;
