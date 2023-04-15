import { useParams } from "react-router-dom";
import classes from './Detail.module.css';

const DetailPage = () => {
  const params = useParams();

  return(
    <div className={classes.container}>
      {/* <h1>Image Detail: {params.imageId}</h1> */}
      <img src={`image/${params.imageId}.jpg`}></img>
    </div>
  );
};

export default DetailPage;