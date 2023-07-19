// Initialize the self-employee class and its abstract methods.
abstract class SelfEmployee {
  codredd: number = 0
  netIncome: number = 0
  netProfit: number = 0

  constructor(
    public grossAnnualIncome: number,
    public inpsTax: number,
    public irpefTax: number
  ) {
    this.getNetAnnualIncome()
  }
  getTaxProfit(codredd: number, grossAnnualIncome: number) {
    this.netProfit = (grossAnnualIncome * (100 - codredd)) / 100
    return this.netProfit
  }
  getInpsTax() {
    this.inpsTax = (this.netProfit / 100) * this.inpsTax
  }
  getIrpefTax() {
    this.irpefTax = (this.netProfit / 100) * this.irpefTax
  }
  getNetAnnualIncome() {
    this.netIncome = this.grossAnnualIncome - this.inpsTax - this.irpefTax
  }
}

// Create the employees class, inheriting from the self-employee class.
class Linguist extends SelfEmployee {
  codredd: number = 40
  constructor(grossAnnualIncome: number, inpsTax: number, irpefTax: number) {
    super(grossAnnualIncome, inpsTax, irpefTax)
    this.grossAnnualIncome
    this.inpsTax
    this.irpefTax
    this.getTaxProfit(this.codredd, grossAnnualIncome)
    this.getInpsTax()
    this.getIrpefTax()
    this.getNetAnnualIncome()
  }
}

class Developer extends SelfEmployee {
  codredd: number = 50
  constructor(grossAnnualIncome: number, inpsTax: number, irpefTax: number) {
    super(grossAnnualIncome, inpsTax, irpefTax)
    this.grossAnnualIncome
    this.inpsTax
    this.irpefTax
    this.getTaxProfit(this.codredd, grossAnnualIncome)
    this.getInpsTax()
    this.getIrpefTax()
    this.getNetAnnualIncome()
  }
}

class Sewer extends SelfEmployee {
  codredd: number = 30
  constructor(grossAnnualIncome: number, inpsTax: number, irpefTax: number) {
    super(grossAnnualIncome, inpsTax, irpefTax)
    this.grossAnnualIncome
    this.inpsTax
    this.irpefTax
    this.getTaxProfit(this.codredd, grossAnnualIncome)
    this.getInpsTax()
    this.getIrpefTax()
    this.getNetAnnualIncome()
  }
}

// Instantiate the employee class.
const linguist1 = new Linguist(20000, 25, 20)
const developer1 = new Developer(40000, 25, 20)
const sewer1 = new Sewer(80000, 25, 20)

console.log("Linguist 1 taxation")
console.table(linguist1)

console.log("Developer 1 taxation")
console.table(developer1)

console.log("Sewer 1 taxation")
console.table(sewer1)

let divShow = document.getElementById("show") as HTMLDivElement
let linguistDiv = document.createElement("div") as HTMLDivElement

linguistDiv.innerHTML = `<h2 class="text-center mt-5">Linguist taxation</h2>
<table class="table w-75" style="margin: 0 auto">
<thead>
<tr>
<th>Codredd</th>
<th>Gross annual income</th>
<th>Inps tax</th>
<th>Irpef tax</th>
<th>Net annual income</th>
<th>Net profit</th>
</tr>
<tbody>
<tr>
<td>${linguist1.codredd} %</td>
<td>${linguist1.grossAnnualIncome} €</td>
<td>${linguist1.inpsTax} €</td>
<td>${linguist1.irpefTax} €</td>
<td>${linguist1.netIncome} €</td>
<td>${linguist1.netProfit} €</td>
</tr>
`

divShow.appendChild(linguistDiv)

let developerDiv = document.createElement("div") as HTMLDivElement
developerDiv.innerHTML = `<h2 class="text-center mt-5">Developer taxation</h2>
<table class="table w-75" style="margin: 0 auto">
<thead>
<tr>
<th>Codredd</th>
<th>Gross annual income</th>
<th>Inps tax</th>
<th>Irpef tax</th>
<th>Net annual income</th>
<th>Net profit</th>
</tr>
<tbody>
<tr>
<td>${developer1.codredd} %</td>
<td>${developer1.grossAnnualIncome} €</td>
<td>${developer1.inpsTax} €</td>
<td>${developer1.irpefTax} €</td>
<td>${developer1.netIncome} €</td>
<td>${developer1.netProfit} €</td>
</tr>
`
divShow.appendChild(developerDiv)

let sewerDiv = document.createElement("div") as HTMLDivElement
sewerDiv.innerHTML = `<h2 class="text-center mt-5">Sewer taxation</h2>
<table class="table w-75" style="margin: 0 auto">
<thead>
<tr>
<th>Codredd</th>
<th>Gross annual income</th>
<th>Inps tax</th>
<th>Irpef tax</th>
<th>Net annual income</th>
<th>Net profit</th>
</tr>
<tbody>
<tr>
<td>${sewer1.codredd} %</td>
<td>${sewer1.grossAnnualIncome} €</td>
<td>${sewer1.inpsTax} €</td>
<td>${sewer1.irpefTax} €</td>
<td>${sewer1.netIncome} €</td>
<td>${sewer1.netProfit} €</td>
</tr>
`

divShow.appendChild(sewerDiv)
