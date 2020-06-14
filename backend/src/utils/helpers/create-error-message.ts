import errorMessage from "../../error-messages";
interface Message {
  code: string;
  message: string;
  appropriateMessage?: string;
}
export default (key: string, errMessage: string): Message => {
  const selectedListMessage: Message[] = errorMessage[key];
  if (selectedListMessage) {
    const message = selectedListMessage.filter(
      ({ message }) => errMessage.search(message) !== -1
    );
    const isNotFound = message.length === 0;
    if (isNotFound) {
      return { code: "500", message: "Service Unavailable" };
    }

    const isHasAppropriateMessage = message[0].appropriateMessage !== undefined;
    if (isHasAppropriateMessage) {
      return { code: message[0].code, message: message[0].appropriateMessage };
    }

    return message[0];
  }
  return { code: "500", message: "Service Unavailable" };
};
