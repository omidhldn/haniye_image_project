import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();

  return(
    <div>
      <h1>Image Detail: {params.imageId}</h1>
      <img src={`image/${params.imageId}.jpg`}></img>
    </div>
  );
};

export default DetailPage;