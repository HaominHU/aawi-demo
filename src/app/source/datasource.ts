import {Injectable} from '@angular/core';

@Injectable()
export class Datasource {
  constructor(){

  }

  getSource() {
    var data = [
      {
        race: "Asian American",
        partyAffilication: {
          Democrat: 33,
          Independent:34,
          Republican:18
        },
        qestions: {
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
        qestions: {
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
        qestions: {
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
        qestions: {
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
        qestions: {
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
        qestions: {
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
        qestions: {
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
        qestions: {
          vote: 63,
          registerToVote: 64,
          workWithOther: 42
        }

      },
    ];

    var source = {
      year: 2012,
      name: 'Pew Research Center 2012 Asian-American survey',
      data:  data
    }

    return source;
  }

}
