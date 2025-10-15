// typescript
type User = {
    id: number;
    profile?: {
      displayName?: string;
    }
  };
  
  const userA: User = { id: 1, profile: { displayName: "Asha" } };
  const userB: User = { id: 2 };
  
  function printDisplayName(user: User) {
    // Replace the next line so it uses optional chaining and prints "No display name"
    // when displayName is not available.
    const name = user.profile?.displayName??"No display name";
    console.log(`Display name: ${name}`);
  }
  
  printDisplayName(userA); // expected: Display name: Asha
  printDisplayName(userB); // expected: Display name: No display name