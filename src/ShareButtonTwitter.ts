import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {

  constructor(className: string, url: string) {
    super(className, url);
  }
    
  createLink(): string {
    return `http://twitter.com/share?url=${this.url}`;
  }  
}
