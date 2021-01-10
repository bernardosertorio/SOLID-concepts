import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {

  constructor(className: string, url: string) {
    super(className, url);
  }
    
  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`;
  }  
}
