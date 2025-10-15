// typescript
type Item = { title?: string };
function showFirstTitle(items?: Item[]) {
  // print the title or "No title" if not available
  // replace following line
  const title = items?.[0]?.title??"No title";
  console.log(`First title: ${title}`);
}

showFirstTitle([{ title: "Intro" }]); // expect: First title: Intro
showFirstTitle([]); // expect: First title: No title
showFirstTitle(); // expect: First title: No title