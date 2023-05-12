import PromptCard from "./PromptCard";
import Loader from "./Loader";

const Profile = ({ name, desc, data, handleEdit, handleDelete, loading }) => {
  return (
    <section className="w-full">
      {data.length !== 0 && !loading ? (
        <>
          <h1 className="head_text text-left">
            <span className="blue_gradient">{name} Profile</span>
          </h1>
          <p className="desc text-left">{desc}</p>

          <div className="mt-10 prompt_layout">
            {data.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {loading ? (
            <>
              <h1 className="head_text text-left">
                <span className="blue_gradient">{name} Profile</span>
              </h1>
              <p className="desc text-left">{desc}</p>
              <div className="mt-10">
                <div className="flex justify-center items-center">
                  <Loader />
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="head_text text-left">
                <span className="blue_gradient">{name} Profile</span>
              </h1>
              <p className="desc text-left">{desc}</p>
              <div className="mt-10">
                <div className="prompt_card">No Data Found </div>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Profile;
