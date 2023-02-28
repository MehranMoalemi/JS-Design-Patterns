// I'll be giving two examples, one with JavaScript since it's the programming language
// we've been using on the previous principles, and another general example on how to implement this principle on different programming languages.

// Since JavaScript does not implement interfaces, we'll be demonstrating this principle
// through composition by adding pieces of functionality to the classes that need specific actions.

// Imagine we have a streaming platform that has two types of user, a FreeUser and a PremiumUser,
// both extending from User.At first, the code looks something like this:

//**BEFORE**//

class User {
  constructor(username) {
    this.username = username;
  }

  skipAd() {
    console.log(`I'm going to skip if I'm premium`);
  }

  startParty() {
    console.log(`I'm going to start a party if I'm premium`);
  }
}

class FreeUser extends User {
  constructor(username) {
    super(username);
  }

  skipAd() {
    return null;
  }

  startParty() {
    return null;
  }
}

class PremiumUser extends User {
  constructor(username) {
    super(username);
  }

  skipAd() {
    console.log(`Ad was skipped.`);
  }

  startParty() {
    console.log(`Party started, invite your friends!`);
  }
}

// The following code will execute
// and print the message
const premium = new PremiumUser(`premium_username`);
premium.skipAd();
premium.startParty();

// The following code will execute
// but return null
const free = new FreeUser(`free_username`);
free.skipAd();
free.startParty();

// Taking into consideration that only a PremiumUser is able to skip ads and start parties,
//     we are violating the Interface Segregation Prinicple by forcing both User and FreeUser to implement these actions.
//     To apply the principle, we may use composition to only give these functionalities to PremiumUser.
//     After applying the principle, the code would be the following.

//**AFTER**//

class User {
  constructor(username) {
    this.username = username;
  }
}

class FreeUser extends User {
  constructor(username) {
    super(username);
  }
}

class PremiumUser extends User {
  constructor(username) {
    super(username);
  }
}

const premiumBenefits = {
  skipAd() {
    console.log("Ad was skipped.");
  },
  startParty() {
    console.log("Party started, invite your friends!");
  },
};

Object.assign(PremiumUser.prototype, premiumBenefits);

// The following code will execute
// and print the message
const premium = new PremiumUser("premium_username");
premium.skipAd();
premium.startParty();

// The following code will throw an exception
// because a FreeUser does not implement these methods
const free = new FreeUser("free_username");
free.skipAd();
free.startParty();

// Now every class is implementing only the functionalities that they need, adhering to the principle.