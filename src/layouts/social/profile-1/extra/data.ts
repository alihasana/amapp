import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static restoDuCoeur(): Profile {
    return new Profile(
      'Resto',
      'Du Coeur'
    );
  }

  static humanis(): Profile {
    return new Profile(
      'Humanis',
      ''
    );
  }

  static croixRouge(): Profile {
    return new Profile(
      'Croix Rouge',
      'Française'
    );
  }
}

export class Association {

  constructor(readonly image: ImageSourcePropType,
              readonly author: Profile,
              readonly date: string) {
  }

  static byHumanis(): Association {
    return new Association(
      require('../assets/image-asso-1.jpg'),
      Profile.humanis(),
      '30/12/2019 14:50'
    );
  }

  static byRestoDuCoeur(): Association {
    return new Association(
      require('../assets/image-asso-2.jpg'),
      Profile.restoDuCoeur(),
      '25/02/2020 18:35'
    );
  }

  static byCroixRouge(): Association {
    return new Association(
      require('../assets/image-asso-3.jpg'),
      Profile.croixRouge(),
      '01/01/2020 17:24'
    );
  }

}

