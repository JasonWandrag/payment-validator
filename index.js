// initial constants
const maxLumpSum = 30000;
const maxDebitOrder = 2500;
const taxYear = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

// Payment Validator Function
function paymentValidator(
	lumpSumInvestmentMonth,
	lumpSumInvestmentAmount,
	debitOrderStartMonth,
	debitOrderAmount
) {
	// debit order index logic
	let debitOrderMonthIndex =
		taxYear.length -
		Math.ceil((maxLumpSum - lumpSumInvestmentAmount) / debitOrderAmount);
	if (
		debitOrderMonthIndex < 0 ||
		debitOrderMonthIndex > 12 ||
		isNaN(debitOrderMonthIndex)
	) {
		debitOrderMonthIndex = 0;
	}

	// algorithm to get total contributions
	let totalContributions =
		lumpSumInvestmentAmount +
		debitOrderAmount * (taxYear.length - taxYear.indexOf(debitOrderStartMonth));

	// account validity
	let validity = totalContributions <= maxLumpSum ? true : false;

	// algorithm to get earliest debit order month
	let earliestPermissibleDebitOrderStartMonth = taxYear[debitOrderMonthIndex];

	// build investment object to return
	let investment = {
		totalContributions: totalContributions,
		earliestPermissibleDebitOrderStartMonth: earliestPermissibleDebitOrderStartMonth
	};

	// Total amount paid at earliest permissable month
	let amountAfterMonthMoved =
		lumpSumInvestmentAmount +
		debitOrderAmount *
			(taxYear.length -
				taxYear.indexOf(earliestPermissibleDebitOrderStartMonth));

	console.log(`Total after moving month: R${amountAfterMonthMoved}`);
	
	//Check if moving month will assist
	let amountValid = amountAfterMonthMoved <= maxLumpSum ? true : false;

	// TODO write logic for validity message

	// write results to dom
	document.getElementById('validity').innerHTML = validity
		? validity
		: `${validity}, you can make it valid by decreasing lump sum by ${totalContributions -
				maxLumpSum} or starting your debit order in the ${earliestPermissibleDebitOrderStartMonth} month`;
	document.getElementById('total').innerHTML = totalContributions;
	document.getElementById(
		'debitMonth'
	).innerHTML = earliestPermissibleDebitOrderStartMonth;
	// return investment object
	return investment;
}
