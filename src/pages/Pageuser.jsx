import React, { useState } from "react";
import Home from "../components/user/Home";
import AdvertisementViewerPage from "../components/user/AdvertisementViewerPage";
import Apropos from "../components/user/Apropos";
import AiBot from "../components/bot/AiBot";
import ChatbotPopup from "../components/bot/ChatbotPopup";
import ContactUs from "../components/user/ContactUs";
const Pageuser = () => {
  const [advertisementData, setAdvertisementData] = useState([]);
  const [isChatbotPopupVisible, setChatbotPopupVisible] = useState(false);

  const openChatbotPopup = () => {
    setChatbotPopupVisible(true);
  };

  const closeChatbotPopup = () => {
    setChatbotPopupVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AiBot onChatbotClick={openChatbotPopup} />
        <Home />
        <AdvertisementViewerPage
          data={advertisementData}
          setData={setAdvertisementData}
        />
        <Apropos />
        <ContactUs />
        {isChatbotPopupVisible && <ChatbotPopup onClose={closeChatbotPopup} />}
      </div>
    </div>
  );
};

export default Pageuser;
