import {Injectable} from '@angular/core';

@Injectable()
export class Datasource {
  constructor(){

  }

  getSource() {
    var political = [
      {
        race: "Asian American",
        partyAffilication: {
          Democrat: 33,
          Independent:34,
          Republican:18
        },
        civicEngagement: {
          vote: 66,
          registerToVote: 72,
          workWithOther: 44
        }
      },
      {
        race: "Chinese",
        partyAffilication: {
          Democrat: 25,
          Independent:39,
          Republican:21
        },
        civicEngagement: {
          vote: 64,
          registerToVote: 68,
          workWithOther: 39
        }

      },
      {
        race: "Filipino",
        partyAffilication: {
          Democrat: 30,
          Independent:33,
          Republican:33
        },
        civicEngagement: {
          vote: 70,
          registerToVote: 78,
          workWithOther: 48
        }

      },
      {
        race: "Indian",
        partyAffilication: {
          Democrat: 44,
          Independent:34,
          Republican:14
        },
        civicEngagement: {
          vote: 63,
          registerToVote: 76,
          workWithOther: 47
        }

      },
      {
        race: "Japanese",
        partyAffilication: {
          Democrat: 43,
          Independent:24,
          Republican:24.5
        },
        civicEngagement: {
          vote: 76,
          registerToVote: 81,
          workWithOther: 43
        }

      },
      {
        race: "Korean",
        partyAffilication: {
          Democrat: 36,
          Independent:28,
          Republican:27.5
        },
        civicEngagement: {
          vote: 65,
          registerToVote:70,
          workWithOther: 41
        }

      },
      {
        race: "US",
        partyAffilication: {
          Democrat: 32,
          Independent:36,
          Republican:32.5
        },
        civicEngagement: {
          vote: 70,
          registerToVote: 75,
          workWithOther: 38
        }

      },
      {
        race: "Vietnamese",
        partyAffilication: {
          Democrat: 24,
          Independent:37,
          Republican:30
        },
        civicEngagement: {
          vote: 63,
          registerToVote: 64,
          workWithOther: 42
        }

      },
    ];

    var culture = [
      {
        race: 'Asian American',
        religious: {
          Buddhist: 14,
          Christian: 42,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 26,
          Missing_data: 18
        },
        cultureId: {
          sameAsianCountry: 41,
          speakNativeLanguage: 45,
          describeAsAmerican: 14,
          typicalAmerican: 39,
          thinkAsDifferent: 53,
          lessThanVeryWell: 0
        },
        coreValues: {
          successfulMarriage: 54,
          ownHome: 32,
          noPressure:9,
          rightPressure: 49,
          tooMuchPressure: 39,
          influenceChildrenProfession: 66,
          influenceChildrenSpouse:61
        }
      },{
        race: 'Chinese',
        religious: {
          Buddhist: 15,
          Christian: 31,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 52,
          Missing_data: 2
        },
        cultureId: {
          sameAsianCountry: 45,
          speakNativeLanguage: 52,
          describeAsAmerican: 11,
          typicalAmerican: 36,
          thinkAsDifferent: 52,
          lessThanVeryWell: 48
        },
        coreValues: {
          successfulMarriage: 44,
          ownHome: 24,
          noPressure:5,
          rightPressure: 48,
          tooMuchPressure: 42,
          influenceChildrenProfession: 66,
          influenceChildrenSpouse:60
        }
      },{
        race: 'Filipino',
        religious: {
          Buddhist: 0,
          Christian: 89,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 8,
          Missing_data: 1
        },
        cultureId: {
          sameAsianCountry: 41,
          speakNativeLanguage: 38,
          describeAsAmerican: 19,
          typicalAmerican: 49,
          thinkAsDifferent: 45,
          lessThanVeryWell: 22
        },
        coreValues: {
          successfulMarriage: 51,
          ownHome: 35,
          noPressure:13,
          rightPressure: 64,
          tooMuchPressure: 22,
          influenceChildrenProfession: 67,
          influenceChildrenSpouse:58
        }
      },{
        race: 'Indian',
        religious: {
          Buddhist: 0,
          Christian: 18,
          Hindu: 51,
          Muslim: 10,
          unaffiliated: 10,
          Missing_data: 11
        },
        cultureId: {
          sameAsianCountry: 38,
          speakNativeLanguage: 29,
          describeAsAmerican: 17,
          typicalAmerican: 30,
          thinkAsDifferent: 57,
          lessThanVeryWell: 24
        },
        coreValues: {
          successfulMarriage: 64,
          ownHome: 36,
          noPressure:7,
          rightPressure: 49,
          tooMuchPressure: 43,
          influenceChildrenProfession: 68,
          influenceChildrenSpouse:64
        }
      },
      {
        race: 'Japanese',
        religious: {
          Buddhist: 25,
          Christian: 38,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 32,
          Missing_data: 5
        },
        cultureId: {
          sameAsianCountry: 21,
          speakNativeLanguage: 25,
          describeAsAmerican: 21,
          typicalAmerican: 50,
          thinkAsDifferent: 43,
          lessThanVeryWell: 18
        },
        coreValues: {
          successfulMarriage: 46,
          ownHome: 21,
          noPressure:7,
          rightPressure: 60,
          tooMuchPressure: 25,
          influenceChildrenProfession: 59,
          influenceChildrenSpouse:48
        }
      },{
        race: 'Korean',
        religious: {
          Buddhist: 6,
          Christian: 71,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 23,
          Missing_data: 0
        },
        cultureId: {
          sameAsianCountry: 58,
          speakNativeLanguage: 62,
          describeAsAmerican: 11,
          typicalAmerican: 29,
          thinkAsDifferent: 63,
          lessThanVeryWell: 46
        },
        coreValues: {
          successfulMarriage: 64,
          ownHome: 28,
          noPressure:5,
          rightPressure: 30,
          tooMuchPressure: 60,
          influenceChildrenProfession: 75,
          influenceChildrenSpouse:75
        }
      },{
        race: 'US',
        religious: {
          Buddhist: 1,
          Christian: 75,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 19,
          Missing_data: 5
        },
        cultureId: {
          sameAsianCountry: 0,
          speakNativeLanguage: 0,
          describeAsAmerican: 0,
          typicalAmerican: 0,
          thinkAsDifferent: 0,
          lessThanVeryWell: 0
        },
        coreValues: {
          successfulMarriage: 34,
          ownHome: 20,
          noPressure:0,
          rightPressure: 0,
          tooMuchPressure: 0,
          influenceChildrenProfession: 0,
          influenceChildrenSpouse:0
        }
      },{
        race: 'Vietnamese',
        religious: {
          Buddhist: 43,
          Christian: 36,
          Hindu: 0,
          Muslim: 0,
          unaffiliated: 20,
          Missing_data: 1
        },
        cultureId: {
          sameAsianCountry: 49,
          speakNativeLanguage: 60,
          describeAsAmerican: 6,
          typicalAmerican: 35,
          thinkAsDifferent: 61,
          lessThanVeryWell: 59
        },
        coreValues: {
          successfulMarriage: 61,
          ownHome: 49,
          noPressure:13,
          rightPressure: 35,
          tooMuchPressure: 49,
          influenceChildrenProfession: 62,
          influenceChildrenSpouse:66
        }
      }
    ];

    return {
      year: 2012,
      name: 'Pew Research Center 2012 Asian-American survey',
      political:  political,
      culture: culture
    };


  }

}
