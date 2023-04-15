import { Link } from "react-router-dom";
import Navigation from "../UI/Navigation";
import classes from "./Home.module.css";
import AnimationRedElement from "../UI/AnimationRed";
import AnimationYellowElement from "../UI/AnimationYellow";
import AnimationGreenElement from "../UI/AnimationGreen";
import AnimationBlueElement from "../UI/AnimationBlue";

const DUMMY_DATA_RED = [
  { id: "i1", path: "1"},
  { id: "i2", path: "2"},
  { id: "i3", path: "3"},
  { id: "i4", path: "4"},
];

const DUMMY_DATA_YELLOW = [
  { id: "i5", path: "5"},
  { id: "i6", path: "6"},
  { id: "i7", path: "7"},
  { id: "i8", path: "8"},
];

const DUMMY_DATA_GREEN = [
  { id: "i9", path: "9"},
  { id: "i10", path: "10"},
  { id: "i11", path: "11"},
  { id: "i12", path: "12"},
];

const DUMMY_DATA_BLUE = [
  { id: "i13", path: "13"},
  { id: "i14", path: "14"},
  { id: "i15", path: "15"},
  { id: "i16", path: "16"},
];

function HomePage() {
  return (
    <>
      {/* <Navigation /> */}
      <div className={classes.container}>
        {DUMMY_DATA_RED.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/${el.path}`}>
                <AnimationRedElement/>
              </Link>
            </div>
          );
        })}
        </div>
        <div className={classes.container}>
        {DUMMY_DATA_YELLOW.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/${el.path}`}>
                <AnimationYellowElement/>
              </Link>
            </div>
          );
        })}
      </div>

      <div className={classes.container}>
        {DUMMY_DATA_GREEN.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/${el.path}`}>
                <AnimationGreenElement/>
              </Link>
            </div>
          );
        })}
      </div>

      <div className={classes.container}>
        {DUMMY_DATA_BLUE.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/${el.path}`}>
                <AnimationBlueElement/>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
