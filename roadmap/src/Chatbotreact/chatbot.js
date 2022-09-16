import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import steps from "../Pages/Components/List/steps.js"

export default function Chatbot() {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };
    const config = {
        // botAvatar: "img.png",
        floating: true,
        hideUserAvatar:true,
        // width:'35vw',
        height:'60vh',
    };
  return (
      <div className="App">
          <ThemeProvider theme={theme}>
              <ChatBot
               steps={steps}
               {...config}
                />
          </ThemeProvider>
      </div>
  );
}