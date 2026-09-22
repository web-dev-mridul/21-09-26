const Newsfeed = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  const userLogedout =()=>{
    setIsLogedin(false)
  }
  return (
    <div>
      {" "}
      <button
        onClick={userLogedout}
        className="border border-gray-400 text-center px-3 py-1"
      >
        Logout
      </button>{" "}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, id provident inventore culpa accusamus fugit suscipit est optio cupiditate dicta asperiores repellendus autem saepe quae blanditiis laboriosam facilis numquam. Earum.</p>
    </div>
  );
};

export default Newsfeed;
