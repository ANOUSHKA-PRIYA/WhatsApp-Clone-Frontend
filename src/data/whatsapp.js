import {
  pp1,
  chat2,
  chat3,
  chat6,
} from "../assets/whatsapp";

export const chatsData = [
  {
    pp: pp1,
    contact: "Sundram",
    msg: "Great Bro!!",
    time: "1:15 pm",
    unreadMsgs: null,
  },
  {
    pp: chat2,
    contact: "Shivam (You)",
    msg: "Day 5",
    time: "11:11 am",
    unreadMsgs: null,
  },
  {
    pp: chat3,
    contact: "Dad",
    msg: "Did you reached home??",
    time: "11:04 am",
    unreadMsgs: 2,
  },
  {
    pp: chat6,
    contact: "Mom",
    msg: "Call me",
    time: "10:35 am",
    unreadMsgs: null,
  },
];

export const messagesData = [
  {
    msg: "Hey whatsupp bro!",
    time: "10:58 am",
    sent: true,
  },
  {
    msg: "Great Bro!!",
    time: "10:58 am",
    sent: false,
  },
];
