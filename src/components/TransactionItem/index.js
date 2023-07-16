import './index.css'
import {Component} from 'react'

class TransactionItem extends Component {
  render() {
    const {item, handleDeleteBtn} = this.props
    const {id, title, amount, type} = item
    const onClickDelete = () => {
      handleDeleteBtn(id)
    }

    return (
      <li className="history-item">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button type="button" onClick={onClickDelete}>
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            data-testid="delete"
          />
        </button>
      </li>
    )
  }
}

export default TransactionItem
