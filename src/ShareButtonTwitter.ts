import EventHandler from "./EventHandler";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonTwitter extends AbstractLinkShareButton {

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }
    
  createLink(): string {
    return `http://twitter.com/share?url=${this.url}`;
  }  
}
