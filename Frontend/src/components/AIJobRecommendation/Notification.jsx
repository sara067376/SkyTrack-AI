const Notification = ({ message, type }) => {
    return (
      <div className={`text-white text-center p-3 rounded-lg ${type === "error" ? "bg-red-500" : "bg-green-500"}`}>
        {message}
      </div>
    );
  };
  
  export default Notification;
  