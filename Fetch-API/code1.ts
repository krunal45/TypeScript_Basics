// async function getUser() {
//   const response = await fetch("https://reqres.in/api/users/2");
//   return response.json();
// }

// debugger;
// const response = await getUser();
// console.log(response);

// Generate B2B Token
const body = new URLSearchParams({
  grant_type: "client_credentials",
  client_id: "6opl3ta41kk49sm36afvki9ie9",
  client_secret: "97kft0flmkq0lipcuhrmgoeopdglvnjg4340rgbh7kcrrtop7do",
});

// Step 1: Generate B2B Token
async function generateB2BToken(): Promise<any> {
  const response = await fetch(
    "https://api-account-management-b2b-rc.auth.eu-west-1.amazoncognito.com/oauth2/token",
    {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.json();
}

const response1 = await generateB2BToken();
const b2bToken = response1.access_token;
console.log(b2bToken);

// Step 2: Create Authorise transaction

async function createAuthTransaction() {
  const response = await fetch(
    "https://api-castle.rc.castle-test.com/v1/b2b/transactions/authorise",
    {
      method: "POST",
      body: JSON.stringify({
        creditFacilityId: "1077985832165297",
        channelReference: "channelReference",
        amount: 1,
        currency: "GBP",
        brand: "JD Will",
        description: "Auth1Scenario7c",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${b2bToken}`,
      },
    }
  );
  return response.json();
}

const response2 = await createAuthTransaction();
console.log(response2);
const transactionId = response2.transactionId;
console.log(`TransactionId: ${transactionId}`);

debugger
async function createChargeTransaction() {
    const response = await fetch(
        "https://api-castle.rc.castle-test.com/v1/b2b/transactions/charge",
        {
          method: "POST",
          body: JSON.stringify({
            "customerId": "1073239326",
            "authorisationId": transactionId,
            "channelReference": "channelReference",
            "amount": 1,
            "currency": "GBP",
            "brand": "JD Will",
            "description": "Charge1Scenario7c"
        }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${b2bToken}`,
          },
        }
      );
      return response.json();
}

const response3 = await createChargeTransaction();
console.log(response3);