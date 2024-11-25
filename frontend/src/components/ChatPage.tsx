import { useEffect } from "react";
import { apiService } from "../service/apiService";

const ChatPage = () => {
  

  const getChats = async () => {
    const users = await apiService.getChats();
    console.log(users)
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div>
      <h1>ChatPage</h1>
    </div>
  );
};

export default ChatPage;
