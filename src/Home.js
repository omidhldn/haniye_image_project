import { Link } from "react-router-dom";
import AnimationBlueToRedElement from "./AnimationBlueToRed";
import Navigation from "./Navigation";
import classes from "./Home.module.css";
import AnimationYellowToGreenElement from "./AnimationYellowToGreen";

const DUMMY_DATA_BLUE_TO_RED = [
  { id: "i1", path: "1"},
  { id: "i2", path: "2"},
  { id: "i3", path: "3"},
  { id: "i4", path: "4"},
];

const DUMMY_DATA_YELLOW_TO_GREEN = [
  { id: "i5", path: "5"},
  { id: "i6", path: "6"},
  { id: "i7", path: "7"},
  { id: "i8", path: "8"},
];

function HomePage() {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        {DUMMY_DATA_BLUE_TO_RED.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/${el.path}`}>
                <AnimationBlueToRedElement/>
              </Link>
            </div>
          );
        })}
        </div>
        <div className={classes.container}>
        {DUMMY_DATA_YELLOW_TO_GREEN.map((el) => {
          return (
            <div key={el.id}>
              <Link to={`/${el.path}`}>
                <AnimationYellowToGreenElement/>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
