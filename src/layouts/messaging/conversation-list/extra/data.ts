import { ImageSourcePropType } from 'react-native';

export class Message {

  constructor(readonly text: string,
              readonly date: string | null,
              readonly isRead: boolean,
              readonly profile: Profile) {
  }

  get formattedText(): string {
    const isLong: boolean = this.text.length > 36;
    return isLong ? `${this.text.substring(0, 32)}...` : this.text;
  }

  static howAreYou(): Message {
    return new Message(
      'Oui bien sûr!',
      '4:30 PM',
      false,
      Profile.dushaneDaniel(),
    );
  }

  static canYouSend(): Message {
    return new Message(
      'Avec grand plaisir!',
      '4:12 PM',
      true,
      Profile.shiraiSubaru(),
    );
  }

  static noProblem(): Message {
    return new Message(
      'Aucun problème! C\'est bon',
      '12:00 PM',
      true,
      Profile.kariGranleese(),
    );
  }
}

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static dushaneDaniel(): Profile {
    return new Profile(
      'Dushane',
      'Daniel',
      require('../assets/image-profile-1.jpg'),
    );
  }

  static shiraiSubaru(): Profile {
    return new Profile(
      'Shirai',
      'Subaru',
      require('../assets/image-profile-2.jpg'),
    );
  }

  static kariGranleese(): Profile {
    return new Profile(
      'Kari',
      'Granleese',
      require('../assets/image-profile-3.jpg'),
    );
  }
}

