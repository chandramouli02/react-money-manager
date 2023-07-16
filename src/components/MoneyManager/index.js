import './index.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    historyItemsList: [],
  }

  handleTitleInput = e => {
    this.setState({title: e.target.value})
  }

  handleAmountInput = e => {
    this.setState({amount: e.target.value})
  }

  handleTypeInput = e => {
    this.setState({type: e.target.value})
  }

  //  balance amount= income - expense
  //  income = totalAmount - expense
  //  expense = totalAmount - income

  handleAddBtn = () => {
    const {title, amount, type} = this.state
    const newItem = {
      id: uuidV4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyItemsList: [...prevState.historyItemsList, newItem],
      title: '',
      amount: '',
      type: '',
    }))
  }

  handleDeleteBtn = id => {
    this.setState(prevState => ({
      historyItemsList: prevState.historyItemsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {title, amount, historyItemsList} = this.state

    return (
      <div className="main-container">
        <div className="user-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your{' '}
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <div className="money-details-container">
          <MoneyDetails transactionDetails={historyItemsList} />
        </div>
        <div className="elements-container">
          <div className="add-transaction-container">
            <h1>Add Transaction</h1>
            <form>
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.handleTitleInput}
                id="title"
                type="text"
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                onChange={this.handleAmountInput}
                id="amount"
                type="text"
                value={amount}
              />
              <label htmlFor="type">TYPE</label>
              <select id="type" onClick={this.handleTypeInput}>
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.displayText}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button
                onClick={this.handleAddBtn}
                type="button"
                data-testid="add"
              >
                Add
              </button>
            </form>
          </div>
          <div className="history-details-container">
            <h1>History</h1>

            <ul className="history-items-container">
              <div className="history-item-table">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              {historyItemsList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  item={eachItem}
                  handleDeleteBtn={this.handleDeleteBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
