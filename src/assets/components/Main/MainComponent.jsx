import CardComponent from "../Card/CardComponent";
import posts from "../../data/posts";

const MainComponent = () => {
  const tagsArr = [];

  posts.map((post) => {
    post.tags.forEach((tag) => {
      if (!tagsArr.includes(tag)) {
        tagsArr.push(tag);
      }
    });
  })

  return (
    <main
      className="container-fluid"
      style={{
        backgroundColor: "gray",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "30px 0px",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Il mio Blog
      </h1>
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        {posts.map(
          (post) =>
            post.published === true && (
              <CardComponent
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
              />
            )
        )}
      </div>
      <div className="container text-center">
        <h2 className="text-light">Tags</h2>
        <div className="d-flex justify-content-center">
          {tagsArr.map((tag) => (
            <span key={`tag-${tagsArr.length}`} className="badge text-bg-primary fs-5 mx-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;


