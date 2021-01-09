import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonLinkedIn extends AbstractShareButton {

  constructor(className: string, url: string) {
    super(className, url);
  }
    
  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`;
  }  
}
