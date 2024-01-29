export class Contact {
  static Id = 0;
  public id: number;
  public checked: boolean;

  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public url: string,
    public photo: string,
    public address: string,
    public notes: string) {
    this.id = Contact.Id++;
    this.checked = false;
  }

  static empty(){
    return new Contact('', '', '', '', '/assets/no-image.svg', '', '');
  }

  formatPhoneNumber() {
    if (this.phone) {
      return this.phone.substr(0, 3) + ' ' + this.phone.substr(0, 3) + ' ' + this.phone.substr(0, 3);
    }
    return this.phone;
  }

}
