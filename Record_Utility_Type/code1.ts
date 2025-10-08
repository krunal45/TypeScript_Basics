/*
Coding question (Record Utility Type)

- Create an enum `CountryCode` with values: `US`, `UK`, `CA`.
- Define a `countries` map using `Record<CountryCode, { name: string; currency: string }>` and initialize it with sensible values.
- Implement:
  - `getCountry(code: CountryCode): { name: string; currency: string }`
  - `updateCurrency(code: CountryCode, currency: string): void`
- Ensure TypeScript prevents using invalid codes (e.g., "IN" should be a compile-time error).
- Bonus: Create `Readonly<Record<CountryCode, string>>` called `countryDialCodes` and show that mutating it causes a type error.

Example starter:
enum CountryCode {
  US = "US",
  UK = "UK",
  CA = "CA",
}

// your Record definitions and functions here
*/

type Currency = {
    name: string,
    currency: string
}

enum CountryCode {
    US = "US",
    UK = "UK", 
    CA = "CA"
}

const countries: Record<CountryCode, Currency> = {
    [CountryCode.US]: { name: "United States", currency: "USD" },
    [CountryCode.UK]: { name: "United Kingdom", currency: "GBP" },
    [CountryCode.CA]: { name: "Canada", currency: "CAD" }
};

function getCountry(code: CountryCode): { name: string; currency: string } {
    return countries[code];
}

function updateCurrency(code: CountryCode, currency: string): void {
    countries[code].currency = currency;
}

// Bonus: Readonly dial codes
const countryDialCodes: Readonly<Record<CountryCode, string>> = {
    [CountryCode.US]: "+1",
    [CountryCode.UK]: "+44", 
    [CountryCode.CA]: "+1"
} as const;