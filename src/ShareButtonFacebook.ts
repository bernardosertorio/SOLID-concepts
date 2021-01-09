import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {

  constructor(className: string, url: string) {
    super(className, url);
  }
    
  createLink(): string {
    return `http://www.facebook.com/share.php?u=${this.url}`;
  }  
}