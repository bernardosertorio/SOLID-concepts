import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";

const twitter = new ShareButtonTwitter(".btn-twitter", "https://www.youtube.com/rodrigobranas");
twitter.bind();
const facebook = new ShareButtonFacebook(".btn-facebook", "https://www.youtube.com/rodrigobranas");
facebook.bind();
const linkedin = new ShareButtonLinkedIn(".btn-linkedin", "https://www.youtube.com/rodrigobranas");
linkedin.bind();