import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contactList: Contact[];

  constructor() {
    this.contactList = [
      new Contact('Rhody Farquhar', 'rfarquhar0@va.gov', '2906036054', 'http://prweb.com',
        'https://robohash.org/illumetrerum.png?size=100x100&set=set1',
        '032 Waubesa Avenue', 'vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id'),
      new Contact('Farand Valde', 'fvalde1@reference.com', '7504488204', 'https://uol.com.br',
        'https://robohash.org/voluptatemsimiliqueculpa.png?size=100x100&set=set1', '7 Paget Crossing',
        'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus'),
      new Contact('Sarene Cowdery', 'scowdery2@behance.net', '2518926895', 'https://multiply.com',
        'https://robohash.org/illoetsint.png?size=100x100&set=set1', '52256 North Circle',
        'turpis enim blandit mi in porttitor pede justo eu massa donec'),
      new Contact('Tasia Oldridge', 'toldridge3@unc.edu', '2552926925', 'http://icio.us',
        'https://robohash.org/eumquamexplicabo.png?size=100x100&set=set1', '11 Merrick Point',
        'congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum'),
      new Contact('Raina Pigney', 'rpigney4@weibo.com', '1665350879', 'https://imdb.com',
        'https://robohash.org/ametquodiusto.png?size=100x100&set=set1', '50 Petterle Hill',
        'interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien'),
      new Contact('Rhianna Dermot', 'rdermot5@answers.com', '1657592814', 'https://clickbank.net',
        'https://robohash.org/iustoexcepturiquia.png?size=100x100&set=set1', '6565 Sherman Trail',
        'lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet'),
      new Contact('Eduard Oakden', 'eoakden6@cpanel.net', '9512879955', 'https://army.mil',
        'https://robohash.org/ducimuslaboriosamqui.png?size=100x100&set=set1', '9 2nd Road',
        'venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at'),
      new Contact('Gaby Berndtssen', 'gberndtssen7@hubpages.com', '3003138365', 'http://quantcast.com',
        'https://robohash.org/eteosblanditiis.png?size=100x100&set=set1', '2925 Aberg Circle',
        'magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus'),
      new Contact('Gill Hunnable', 'ghunnable8@dot.gov', '7078567528', 'http://boston.com',
        'https://robohash.org/quovoluptatemvoluptas.png?size=100x100&set=set1', '03 Johnson Terrace',
        'mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse'),
      new Contact('Bethanne Agius', 'bagius9@oakley.com', '5969400750', 'http://google.it',
        'https://robohash.org/harumvelitaut.png?size=100x100&set=set1', '8 American Drive',
        'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et')
    ];
  }

  add(contact: Contact) {
    this.contactList.push(contact);
  }

  update(contact: Contact) {
    const foundContact = this.contactList.find((value: Contact) => {
      return value.id === contact.id;
    });
    if (foundContact === undefined) {
      return false;
    } else {
      Object.assign(foundContact, contact);
      return true;
    }
  }

  delete() {
    this.contactList = this.contactList.filter((contact: Contact) => {
      return !contact.checked;
    });
  }

  deleteById(id: number) {
    this.contactList = this.contactList.filter((contact: Contact) => {
      return contact.id !== id;
    });
  }

}
