import image from "../assets/pexels-markus-winkler-1430818-4057663.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className={
        title === "[Removed]"
          ? "hide-article"
          : "card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 rounded"
      }
      style={{ maxWidth: "345px", minHeight: "430px" }}
    >
      <img
        src={src ? src : image}
        style={{
          height: "200px",
          minWidth: "200px",
          objectFit: "cover",
        }}
        className="card-img-top rounded"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "Breaking News"}
        </h5>
        <p className="card-text">
          "
          {description
            ? description.slice(0, 90) + "..."
            : "Updates: What is going on today, Find out here."}
          "
        </p>
        <a href={url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
