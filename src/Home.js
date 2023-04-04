import { Link } from "react-router-dom";
import AnimationElement from "./Animation";

const DUMMY_DATA = [
  {id:'i1',path:'1'},
  {id:'i2',path:'2'},
  {id:'i3',path:'3'},
  {id:'i4',path:'4'},
]

function HomePage() {
  return(
    <>
      <span>
        <Link to='/1'>
          <AnimationElement/>
        </Link>
      </span>
    {/* {DUMMY_DATA.map(el => {
      <div key={el.id}>
        <Link to={`/${el.path}`}>
          <AnimationElement/>
        </Link>
      </div>
    })} */}
    </>

  );
}

export default HomePage;
