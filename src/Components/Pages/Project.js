import Message from "../Layout/Message";
import { useLocation } from "react-router-dom";

export default function Project() {

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

  return (
    <div>
         {message && <Message type="sucesso" msg={message} />}
      <h2>Seus projeto</h2>
    </div>
  );
}
