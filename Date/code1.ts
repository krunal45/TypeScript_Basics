import { addMonths } from "date-fns";
 
export function calculateMonthlyRepaymentDay(
  creationDateString: string
): number {
  const creationDate = new Date(creationDateString);
 
  const targetMonth = addMonths(creationDate, 1);
  const originalDay = creationDate.getDate();
 
  let statementDate = new Date(
    targetMonth.getFullYear(),
    targetMonth.getMonth(),
    originalDay
  );
 
  if (statementDate.getMonth() !== targetMonth.getMonth()) {
    statementDate = new Date(
      targetMonth.getFullYear(),
      targetMonth.getMonth() + 1,
      0
    );
  }
 
  const statementDay = statementDate.getDate();
  let pddDay = statementDay + 24;
 
  if (pddDay > 31) {
    pddDay = pddDay % 31;
    if (pddDay === 0) pddDay = 31;
  }
 
  return pddDay;
}
 
export function isValidMonthlyRepaymentDayFromLoan(
  fixedDaysOfMonth: number[],
  creationDate: string
): boolean {
  const expected = calculateMonthlyRepaymentDay(creationDate);
  const actual = fixedDaysOfMonth?.[0];
 
  if (expected === 31 && actual === 1) return true;
 
  const allowedDays = [expected];
  if (expected < 31) {
    allowedDays.push(expected + 1);
  }
 
  return allowedDays.includes(actual);
}