import './index.css'
import {Component} from 'react'

class MoneyDetails extends Component {
  render() {
    const {transactionDetails} = this.props

    const getIncome = () => {
      let income = 0
      let expense = 0
      transactionDetails.map(eachItem => {
        if (eachItem.type === 'INCOME') {
          income += parseInt(eachItem.amount)
        } else if (eachItem.type === 'EXPENSES') {
          expense += parseInt(eachItem.amount)
        }
        return 0
      })
      return [income, expense]
    }

    const totalAmount = getIncome()
    const income = totalAmount[0]
    const expense = totalAmount[1]
    const balance = income - expense

    return (
      <>
        <div className="balance-container container-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div className="balance-mini-container">
            <p>Your Balance</p>
            <p className="balance" data-testid="balanceAmount">
              RS {balance}
            </p>
          </div>
        </div>
        <div className="income-container container-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div className="balance-mini-container">
            <p>Your Income</p>
            <p className="balance" data-testid="incomeAmount">
              RS {income}
            </p>
          </div>
        </div>
        <div className="expenses-container container-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div className="balance-mini-container">
            <p>Your Expenses</p>
            <p className="balance" data-testid="expensesAmount">
              RS {expense}
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyDetails
