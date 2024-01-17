import env from "configs/env";
import io from "socket.io-client";

const socket = io(env.BASE_URL, {
  autoConnect: false
});

export default socket;
