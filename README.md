This is an assessment built to adhere to the following problem:

Tax Free Savings Accounts allow an investor to invest into an account that does not get taxed – ever. But the catch:
contribute more than R30 000 in any given tax year (1 March to 28/29 February), and you’ll be heavily taxed on
contributions in excess of the R30 000 limit.
We allow two means of investment: lumps sum (a once off payment, not to be repeated), and a monthly debit order (it
may start in the future, but once started, is assumed to continue indefinitely). Naturally, the limits for the lump sum and
monthly debit order are R30 000 and R2 500 respectively.

However, depending on where in the tax year you choose to invest, the limits on lump sum and debit order can vary.
For example, consider this investor application:
• Lump sum of R20 000, paid in August
• Monthly debit order of R2 500, starting 1 September
This would be an invalid application, since before the end of the current tax year, the total investment would be R35 000 (R20
000 + 6 x R2 500). However, the investor could choose to lower the lump sum to R15 000, which would make this a
valid application. Alternatively, the investor could start the debit order in November, which would also make this a valid
application.

Write a JavaScript function that accepts the following 4 arguments:
• LumpSumInvestmentMonth (int, 1 to 12, representing Jan to Dec respectively)
• LumpSumInvestmentAmount (float)
• DebitOrderStartMonth (int, 1 to 12, representing Jan to Dec respectively)
• DebitOrderAmount (float)

It should return an object with the following fields:
• TotalContributions (float). The total contributions paid during the tax year in which the
LumpSumInvestmentMonth falls.
• EarliestPermissibleDebitOrderStartMonth (int, 1 to 12, representing Jan to Dec respectively). The earliest
month, following the LumpSumInvestmentMonth in which the debit order could start such that this is a valid
application.
